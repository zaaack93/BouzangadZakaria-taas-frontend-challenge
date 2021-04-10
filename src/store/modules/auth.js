import Vue from "vue";
import Axios from "axios";
import config from "../../config";
import { Errormsg } from "@/helpers/errormsg";

export default {
    namespaced: true,
    state: {
        access_token:'',
        user_info:{}
    },
    actions: {
        getAccessToken(context,code) {
            return Axios.post("/api/login/oauth/access_token", null, {headers:{Accept: 'application/json'}, params: {
                client_id:config.client_id,
                client_secret:config.client_secret,
                code
              }})
              .then(res => {
                context.commit("setaccesstoken", res.data.access_token);
                return res;
              })
              .catch(err => {
                return Errormsg(err);
              });
          },
          FetchUserInfo(context){
            return Axios.get(`${config.github_api_endpoint}/user`, { 
              headers: {
                'Authorization': 'token '+context.state.access_token
               }})
            .then(res => {
              context.commit("setuserinfo", res.data);
              return res;
            })
            .catch(err => {
              return Errormsg(err);
            });
          }
    },
    mutations: {
        setaccesstoken(state, token) {
            state.access_token = token;
          },
          setuserinfo(state, token) {
            state.user_info = token;
          },
    },
    getters: {
        AccessToken(state) {
            return state.access_token;
          },
          Userinfo(state) {
            return state.user_info;
          },
    }
}


