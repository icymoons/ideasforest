<template>
  <v-app>
    <v-toolbar app color="blue" dark>
      <v-toolbar-title class="headline text-uppercase">
        <span>Ideas</span>
        <span class="font-weight-light">Forest</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Inscription</span>
      </v-btn>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Connexion</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <!--
      <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        <h1 center>Partagez vos idées de Startups avec le monde entier</h1>
      </v-parallax>
      -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      //
    };
  }
};
</script>

<style>
.v-content {
  background-color: rgba(184, 184, 184, 0.452);
}

h1 {
  text-align: center;
  font-size: 3rem;
}
</style>

