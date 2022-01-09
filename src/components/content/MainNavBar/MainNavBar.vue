<template>
  <div class="main-nav-bar">
    <nav-bar>
      <template slot="left">
        <img src="~assets/img/common/logo.png" />
      </template>

      <template slot="right">
        <nav-bar-item path="/home">首页</nav-bar-item>
         <nav-bar-item path="/musicPrefecture">音乐专区</nav-bar-item>
          <nav-bar-item path="/artistService">艺人服务</nav-bar-item>
        <nav-bar-item path="/about">关于我们</nav-bar-item>
      </template>

    </nav-bar>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import NavBarItem from 'components/common/navbar/NavBarItem'
export default {
  name: "MainNavBar",
  components: {
    NavBar,
    NavBarItem
  },
};
</script>

<style scoped>
</style>
