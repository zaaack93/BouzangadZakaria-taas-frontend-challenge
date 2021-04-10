<template>
   <v-col cols="3">
           <v-autocomplete
           label="Select a repos"
            auto-select-first
            dense
            solo
            :items="repos"
            v-model="value"
            ></v-autocomplete>
     </v-col>
</template>

<script>
export default {
    computed:{
        repos(){
            //map une liste des noms
            let names=[]
            this.$store.getters["github/Getrepos"].map(rep=>{ 
                names.push(rep.name)
            })
            return names
        }
    },
data(){
    return{
        value: null,
    }
},
watch: {
    value: function (val) {
     this.$emit('setreponame',val)
    },
},
created(){
   this.$store
        .dispatch("github/Fetchrepos").catch((err) => {
        });
}
}
</script>

<style>

</style>