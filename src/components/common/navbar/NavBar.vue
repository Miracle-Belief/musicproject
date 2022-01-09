<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
     <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    components: {}
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    background-color: aqua;
  }
  .left {
    width: 30%;
    /* background: yellow; */
  }
  .center {
    width: 20%;
    /* background: red; */
  }
  .right {
    flex: 1;
    /* background: green */
  }

</style>
