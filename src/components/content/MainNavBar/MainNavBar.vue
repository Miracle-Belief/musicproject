<template>
  <div class="main-nav-bar">
    <nav-bar>
      <template slot="left">
        <img src="~assets/img/common/logo.png" />
      </template>


      <template slot="right">
        <nav-bar-item
          v-for="item in routes"
          :key="item.path"
          :path="item.path"
          :class="{active:$route.path == item.path}"
          >{{ item.title }}</nav-bar-item>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import NavBarItem from "components/common/navbar/NavBarItem";
export default {
  name: "MainNavBar",
  components: {
    NavBar,
    NavBarItem,
  },
  data() {
    return {
      routes:[]
    };
  },
  mounted() {
    console.log(this.$router);
    // 出栈第一个路由
    const routes = this.$router.options.routes
    routes.shift()
    this.routes = routes
  }
};
</script>

<style scoped>

</style>
