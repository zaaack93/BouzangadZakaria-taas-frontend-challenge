<template>
<div>
    <v-overlay
      :opacity="0.1"
      :value="overlay"
    >
      <v-progress-circular indeterminate size="64" color="primary">
       
      </v-progress-circular>
    </v-overlay>
</div>
</template>

<script>
export default {
    computed:{
        code(){
            return this.$route.query.code
        }
    },
    created(){
        if(this.code){
       this.$store
        .dispatch("auth/getAccessToken",this.code)
        .then((res) => {
            this.$router.push({ path:'/private' })
                    })
        .catch((err) => {
            //Si le code est incorrect l'utilisateur doivent redireger vers la page d'authentification
            this.$router.push({ path: '/public' })
        });
        }
    }
}
</script>

<style>

</style>