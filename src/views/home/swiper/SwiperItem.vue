<template>
  <swiper-slide class="swiper-item" :style="{ backgroundImage: 'url(' + img + ')' }">
    <div class="container" >
      <div class="title" data-swiper-parallax="-100">{{ title }}</div>
      <div class="subtitle" data-swiper-parallax="-240">{{ subTitle }}</div>
      <div class="text" data-swiper-parallax="-360">
        <p>
          <slot></slot>
        </p>
      </div>
    </div>
  </swiper-slide>
</template>


<script>
import { SwiperSlide } from "vue-awesome-swiper";

export default {
  name: "SwiperItem",
  components: {
    SwiperSlide,
  },
  props: {
    img: String,
    title: String,
    subTitle: String,
  },
};
</script>


<style lang="scss" scoped>
.swiper-item {
  height: 100% ;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%!important;
}

</style>
