
<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide class="swiper-item">
      <div class="container">
        <div class="title" data-swiper-parallax="-100">Slide 2</div>
        <div class="subtitle" data-swiper-parallax="-240">Subtitle</div>
        <div class="text" data-swiper-parallax="-360">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
            velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
            libero. Aenean feugiat non eros quis feugiat.
          </p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="swiper-item">
      <div class="container">
        <div class="title" data-swiper-parallax="-100">Slide 2</div>
        <div class="subtitle" data-swiper-parallax="-240">Subtitle</div>
        <div class="text" data-swiper-parallax="-360">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
            velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
            libero. Aenean feugiat non eros quis feugiat.
          </p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="swiper-item c">
      <div class="container">
        <div class="title" data-swiper-parallax="-100">Slide 2</div>
        <div class="subtitle" data-swiper-parallax="-240">Subtitle</div>
        <div class="text" data-swiper-parallax="-360">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
            velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
            libero. Aenean feugiat non eros quis feugiat.
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
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-loop",
  components: {
    Swiper,
    SwiperSlide,
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
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
}

.swiper-item {
  background: red;
  height: 100%;
}

.swiper {
  width: 100%;
  height: 380px;
  background: red;

  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #990000;
    box-sizing: border-box;
    padding: 0 20px;
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
