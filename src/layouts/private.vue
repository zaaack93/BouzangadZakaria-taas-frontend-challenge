<template>
<div>
  <Navbar></Navbar>
   <router-view></router-view>
</div>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  name: "PrivateLayout",
  components: { Navbar },
};
</script>

<style>
.v-application--wrap{
    background-color: #eeeeee;
}
</style>