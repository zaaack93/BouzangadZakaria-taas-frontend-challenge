<template>
  <div class="wrapper-auth">
      <a :href="'https://github.com/login/oauth/authorize?scope=user:email&client_id='+config.client_id">
    <v-btn
      class="white--text"
      color="primary"
    >
   
      Authorize my Github account

    </v-btn>
       </a>
    <p>

    </p>
  </div>
</template>

<script>
import config from "../../config"
export default {
  computed:{
    config(){
      return config
    }
  },
methods:{
}
}
</script>

<style>
.wrapper-auth{
    text-align: center;
    top: 50%;
    position: relative;
}
</style>