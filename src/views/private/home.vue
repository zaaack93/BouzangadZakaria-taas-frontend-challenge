<template>
 <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <leftBar @setreponame="onrepochange"></leftBar>

        <v-col>
          <v-sheet min-height="60vh" rounded="lg">
            <!--  -->
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import leftBar from "../../components/leftBar";
export default {
components: { leftBar },
methods:{
  onrepochange(val){
    alert(val)
  }
}
}
</script>

<style>

</style>