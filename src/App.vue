<template>
  <div id="app">
    <main-nav-bar />
    <router-view />
    <foot />
  </div>
</template>

<script>

import MainNavBar from "./components/content/MainNavBar/MainNavBar";
import Foot from "./components/content/footer/Foot";

export default {
  name: "App",
  components: {
    MainNavBar,
    Foot,
  },
  mounted() {

  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
