<template>
  <v-app>
    <v-toolbar app color="green " dark>
      <v-toolbar-title class="headline text-uppercase">
        <span>Ideas</span>
        <span class="font-weight-light">Forest</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Connexion</span>
      </v-btn>
    </v-toolbar>

    <v-content>
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
  background-color: #eee;
}
</style>

