<template>
  <div id="home">
    <swiper></swiper>
    <about-us/>
    <collections/>
  </div>
</template>

<script>
  import Swiper from "components/content/swiper/Swiper"
  import AboutUs from "./childComps/AboutUs"
  import Collections from "./childComps/Collections"


  export default {
    name: 'Home',
    components: {
      Swiper,
      AboutUs,
      Collections

    },
    data() {
      return {

      }
    }


  }
</script>

<style scoped>

</style>
