<template>
  <div class="choiceness">
    <div class="container music-list-desic">
      <p>优秀MV</p>
      <span>Excellent MV</span>
    </div>

    <div class="container">
      <div class="row">
        <div
          class="col-md-3 col-sm-3 col-xs-7 music-item"
          v-for="(item, index) in desicList"
          :key="index"
        >
          <div class="music-item-center">
            <div class="player">
              <img :src="item.imgs" alt="" />
              <div class="mask">
                <img src="~assets/img/common/player.png" alt="" />
              </div>
            </div>
            <p>{{ item.desic }}</p>
            <span>{{ item.desicsub }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Choiceness",
  data() {
    return {
      desicList: [
        {
          imgs: "https://img.js.design/assets/smartFill/img263164da72e058.jpeg",
          desic: "不用削皮去籽的小黄瓜，一口甜进心里 ",
          desicsub: "罗东",
        },
        {
          imgs: "https://img.js.design/assets/smartFill/img263164da72e058.jpeg",
          desic: "不用削皮去籽的小黄瓜，一口甜进心里 ",
          desicsub: "罗东",
        },
        {
          imgs: "https://img.js.design/assets/smartFill/img263164da72e058.jpeg",
          desic: "不用削皮去籽的小黄瓜，一口甜进心里 ",
          desicsub: "罗东",
        },
        {
          imgs: "https://img.js.design/assets/smartFill/img263164da72e058.jpeg",
          desic: "不用削皮去籽的小黄瓜，一口甜进心里 ",
          desicsub: "罗东",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.music-item-center img {
  width: 100%;
  height: 111px;
  border-radius: 10px;
  object-fit: cover;
}
.music-item-center {
  width: 208px;
  height: 210px;
  p {
    font-size: 16px;
    padding-top: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    white-space: 2;
  }
  span {
    font-size: 14px;
    color: rgba(128, 128, 128, 1);
  }
}

.player:hover .mask {
  display: inline-block;
}
.player {
  position: relative;

  .mask {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(56, 56, 56, 0.5);
    border-radius: 10px;
    z-index: 999;
    img {
      position: absolute;
      top: 40%;
      left: 40%;
      right: 0;
      bottom: 0;
      width: 34px;
      height: 33px;
    }
  }
}
</style>
