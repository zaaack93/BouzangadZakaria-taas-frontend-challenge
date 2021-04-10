<template>
   <v-app-bar app color="white" flat>
    <v-container class="py-0 fill-height">
      <v-spacer></v-spacer>

      <span class="mr-2">{{userinfo.name}}</span>
      <v-avatar class="mr-10" color="grey darken-1" size="32" ><img :src="userinfo.avatar_url"  /></v-avatar>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
    computed:{
        userinfo(){
            return this.$store.getters["auth/Userinfo"]
        },
    },
created(){
   this.$store
        .dispatch("auth/FetchUserInfo").catch((err) => {
        });
}
}
</script>

<style>

</style>