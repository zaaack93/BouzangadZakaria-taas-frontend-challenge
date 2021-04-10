<template>
 <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <leftBar @setreponame="onrepochange"></leftBar>

        <v-col cols="9">
          <v-sheet min-height="60vh" rounded="lg" class="pa-10 pb-0">
            <div class="reponotselected" v-if="!selected">
              select one
            </div>
            <div class="wrapper" v-else-if="selected">
            <h2>{{selectedrepo.name}}</h2>
            <v-row align="center">
      
      <v-col cols="4" class="mt-3">
        <v-select
          v-model="branch"
          :items="branchlist"
          label="Select"
          dense
          solo
          prepend-icon="mdi-source-branch"
          auto-select-first
          single-line
          item-text="name"
          return-object
        ></v-select>
      </v-col>
      <v-col cols="12" v-if="branch!=null">
        <timeline :items="commitshistory"></timeline>
      </v-col>
            </v-row>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import leftBar from "@/components/leftBar";
import timeline from "@/components/timeline";
const formatter=require("@/helpers/groupperdate").formatter;
export default {
  data(){
    return{
      selected:'',
      branch:null,
      commitshistory:''
    }
  },
components: { leftBar,timeline },
computed:{
  selectedrepo(){
    return this.$store.getters["github/Getselectedrepos"]
  },
  branchlist(){
    return this.$store.getters["github/getbranches"]
  },
  commitlist(){
    return this.$store.getters["github/getcommits"]
  }
},
methods:{
  onrepochange(val){
    this.selected=val
    this.$store.commit('github/setselectedrepo',val)
    this.fetchbranchlist()
    this.branch=null
  },
  fetchbranchlist(){
    this.$store
        .dispatch("github/fetchbranchs").catch((err) => {
        });
  },
  fetchcommitbybranch(branchname){
    this.$store
        .dispatch("github/fetchcommits",branchname).
        then(res=>{
          this.commitshistory=formatter(res)
        }).
        catch((err) => {
        });
  },
},
watch: {
    branch: function (val) {
     this.fetchcommitbybranch(val)
    },
},
}
</script>

<style>

</style>