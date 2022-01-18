<template>
  <div class="news-header">
    <div class="news-header-back">
      <div class="container">
        <h3>新闻中心</h3>
        <p>News Centre</p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'NewsHeader'
  }
</script>

<style lang="scss" scoped>

  .news-header-back {
    width: 100%;
    height: 45rem;
    background: url('../../../assets/img/news/background.png') no-repeat;
    background-size: 100% 100%;
    .container {
      color: #fff;
      position: relative;
      top: 25rem;
      left: 0;
      right: 0;
    }
  }
</style>
