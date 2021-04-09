import Vue from "vue";
import Axios from "axios";
import config from "../../config";
import { Errormsg } from "@/helpers/errormsg";

export default {
    namespaced: true,
    state: {
        access_token:''
    },
    actions: {
        getAccessToken(context,code) {
            return Axios.post("/api/login/oauth/access_token", null, { params: {
                client_id:config.client_id,
                client_secret:config.client_secret,
                code
              }})
              .then(res => {
                context.commit("setaccesstoken", res.data);
                return res;
              })
              .catch(err => {
                return Errormsg(err);
              });
          },
    },
    mutations: {
        setaccesstoken(state, token) {
            state.access_token = token;
          },
    },
    getters: {
        getAccessToken(state) {
            return state.access_token;
          },
    }
}


