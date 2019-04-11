<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="wrapper">
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: "HelloWorld",
  components: { NavBar },
  props: {
    msg: String
  }
};
</script>
<style>
@import "assets/css/main.css";
</style>
