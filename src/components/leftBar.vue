<template>
   <v-col cols="3">
           <v-autocomplete
           label="Select a repos"
            auto-select-first
            dense
            solo
            :items="repos"
            v-model="value"
            item-text="name"
            return-object
            ></v-autocomplete>
     </v-col>
</template>

<script>
export default {
    computed:{
        repos(){
            return this.$store.getters["github/Getrepos"]
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