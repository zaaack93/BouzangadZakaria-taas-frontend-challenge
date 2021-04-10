import Vue from 'vue'
import Vuex from 'vuex'
import auth from "./modules/auth";
import github from "./modules/github";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {  auth,github },
  plugins: [
    createPersistedState({
      paths: ["auth"]
    })
  ]
})
