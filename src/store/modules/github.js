import Vue from "vue";
import Axios from "axios";
import config from "../../config";
import { Errormsg } from "@/helpers/errormsg";

export default {
    namespaced: true,
    state: {
        repos:[]
    },
    actions: {
          Fetchrepos(context){
            return Axios.get(`${config.github_api_endpoint}/user/repos`, { 
              headers: {
                'Authorization': 'token '+context.rootState.auth.access_token
               }})
            .then(res => {
              context.commit("setrepos", res.data);
              return res;
            })
            .catch(err => {
              return Errormsg(err);
            });
          }
    },
    mutations: {
        setrepos(state, repos) {
            state.repos = repos;
          },
    },
    getters: {
          Getrepos(state) {
            return state.repos;
          },
    }
}


