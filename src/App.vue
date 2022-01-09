<template>
  <div id="app">
    <!-- <Loadding ref="loadding"></Loadding> -->
    <main-nav-bar />
    <router-view />
    <foot />
  </div>
</template>

<script>
import Loadding from "./components/common/loadding/Loadding"
import MainNavBar from "./components/content/MainNavBar/MainNavBar";
import Foot from "./components/content/footer/Foot";

export default {
  name: "App",
  components: {
    MainNavBar,
    Foot,
    Loadding
  },
  mounted() {
    setTimeout(() => {
      // this.$refs.loadding.hide();
    }, 1000);
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
