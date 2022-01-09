<template>
  <div id="home">
    <carrousel></carrousel>
  </div>
</template>

<script>
  import carrousel from "./swiper/swiper-example-parallax.vue"

  export default {
    name: 'Home',
    components: {
      carrousel
    },
    data() {
      return {

      }
    }


  }
</script>

<style scoped>

</style>
