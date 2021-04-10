<template>
  <div class="NotFound">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card height="400" color="transparent" flat>
            <div class="display-2 mt-2">Page not found.</div>
            <v-btn
      class="white--text mt-2"
      color="primary"
      @click="$router.push('/public')"
    >
      Go to home page
    </v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style>
  .paragraph-text {
    font-size: 18px;
  }
</style>