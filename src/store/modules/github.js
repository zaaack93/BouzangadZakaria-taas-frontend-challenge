import Vue from "vue";
import Axios from "axios";
import config from "@/config";
import { Errormsg } from "@/helpers/errormsg";

export default {
    namespaced: true,
    state: {
        repos:[],
        selectedrepos:{},
        branches:[],
        commits:[]
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
          },
          fetchbranchs(context){
            return Axios.get(`${context.state.selectedrepos.url}/branches`)
            .then(res => {
              context.commit("setbranches", res.data);
              return res;
            })
            .catch(err => {
              return Errormsg(err);
            });
          },
          fetchcommits(context,branch){
            return Axios.get(`${context.state.selectedrepos.url}/commits`,{params: {
              sha:branch.name,
            }})
            .then(res => {
              context.commit("setcommits", res.data);
              return res.data;
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
          setselectedrepo(state, repo) {
            state.selectedrepos = repo;
          },
          setbranches(state, branches) {
            state.branches = branches;
          },
          setcommits(state, commits) {
            state.commits = commits;
          },
    },
    getters: {
          Getrepos(state) {
            return state.repos;
          },
          Getselectedrepos(state) {
            return state.selectedrepos;
          },
          getbranches(state) {
            return state.branches;
          },
          getcommits(state) {
            return state.commits;
          },
    }
}


