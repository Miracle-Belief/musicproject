<template>
  <div class="music-header">
     <div class="header-img">
     <div class="container header-title">
       <h3>音乐专区</h3>
        <p>Music</p>
        </div>
   </div>
  </div>
</template>

<script>
  export default {
    name: 'MusicHeader'
  }
</script>

<style lang="scss" scoped>
  .header-img {
    width: 100%;
    height: 27rem;
    background: url('../../../assets/img/music/music.png') no-repeat;
    background-size: 100%;
  }
   .header-title {
      color: #fff;
      position: relative;
      top: 10rem;
      left: 0;
      right: 0;
    }
</style>
