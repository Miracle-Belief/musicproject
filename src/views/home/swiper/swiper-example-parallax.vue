
<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide
      class="swiper-item"
      v-for="swiper in bannerList"
      :key="swiper.id"
      :style="{ backgroundImage: 'url(' + swiper.img + ')' }"
    >
      <div class="container">
        <div class="title" data-swiper-parallax="-100">{{ swiper.title }}</div>
        <div class="subtitle" data-swiper-parallax="-240">
          {{ swiper.subTitle }}
        </div>
        <div class="text" data-swiper-parallax="-360">
          <p>
            {{ swiper.text }}
          </p>
        </div>
      </div>
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import SwiperItem from "./SwiperItem.vue";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-loop",
  components: {
    Swiper,
    SwiperSlide,
    SwiperItem,
  },
  data() {
    return {
      swiperOption: {
        speed: 600,
        parallax: true,
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        // 自动播放
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },

      // 轮播图数据
      bannerList: [
        {
          id:1,
          title: "Title",
          subTitle: "Subtitle",
          img: "https://images.pexels.com/photos/6120211/pexels-photo-6120211.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
            velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
            libero. Aenean feugiat non eros quis feugiat.`,
        },
        {
          id:2,
          title: "Title",
          subTitle: "Subtitle",
          img: "https://images.pexels.com/photos/3765118/pexels-photo-3765118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
            velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
            libero. Aenean feugiat non eros quis feugiat.`,
        },
        {
          id:3,
          title: "Title",
          subTitle: "Subtitle",
          img: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
            velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
            libero. Aenean feugiat non eros quis feugiat.`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
}

.swiper-item {
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: #efefef;
}

.swiper {
  width: 100%;
  height: 480px;

  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    padding: 0;
    background-color: transparent;

    .title {
      margin-bottom: 10px;
      font-size: 18px;
      font-weight: bold;
    }

    .subtitle {
      margin-bottom: 10px;
      font-size: 16px;
    }

    .text {
      max-width: 430px;
      line-height: 1.32;
    }
  }
}
</style>
