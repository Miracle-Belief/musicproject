<template>
  <div class="nav-bar">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-3 col-xs-12"><slot name="left"></slot></div>
        <div class="col-md-3 col-sm-3 col-xs-12"><slot name="center"></slot></div>

        <div class="col-md-6 col-sm-6 col-xs-12 text-right">

          <slot name="right"></slot>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  components: {},
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  min-height: 80px;
  padding:20px 0;
  background-color: #fff;
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
