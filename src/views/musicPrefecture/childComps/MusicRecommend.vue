<template>
  <div class="recommend">
    <div class="container music-list-desic">
      <p>编辑推荐</p>
      <span>Editors Recommendation</span>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-xs-12 col-sm-4 image">
          <img :src="leftImg.img" alt="" />
        </div>
        <div class="col-md-8 col-xs-12 col-sm-8 desic">
          <div
            class="col-md-3 col-sm-4 col-xs-6 music-item"
            v-for="(item, index) in desicList"
            :key="index"
          >
            <div class="music-item-center">
              <div class="player">
                <img :src="item.imgs" alt="" />
                <div class="mask">
                  <img src="~assets/img/common/player.png" alt="" ech-big />
                </div>
              </div>
              <p>{{ item.desic }}</p>
              <span>{{ item.desicsub }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicRecommend",
  data() {
    return {
      leftImg: {
        img: "https://img.js.design/assets/smartFill/img309164da746310.jpg",
      },
      desicList: [
        {
          imgs: "https://img.js.design/assets/smartFill/img318164da746310.jpg",
          desic: "薄如蝉翼的金华火腿，每一口都是时间的味道",
          desicsub: "姚轩燕",
        },
        {
          imgs: "https://img.js.design/assets/smartFill/img336164da748e08.jpg",
          desic: "长在火山泥里的夏威夷果，不用剥壳好好吃。 ",
          desicsub: "方世梁",
        },
        {
          imgs: "https://img.js.design/assets/smartFill/img328164da748e08.jpeg",
          desic: "内涵青年最后的吐槽街区：知乎APP",
          desicsub: "戴星",
        },
        {
          imgs: "https://img.js.design/assets/smartFill/img311164da746310.jpg",
          desic: "【干货】潘XX：好人缘的秘诀",
          desicsub: "马哲",
        },
        {
          imgs: "https://img.js.design/assets/smartFill/img318164da746310.jpg",
          desic: "内涵青年最后的吐槽街区：知乎APP ",
          desicsub: "戴星",
        },
        {
          imgs: "https://img.js.design/assets/smartFill/img323164da746310.jpg",
          desic: "【产品经验】第一次做APP时容易范的错误",
          desicsub: "陈亦宣",
        },
        {
          imgs: "https://img.js.design/assets/smartFill/img319164da746310.jpg",
          desic: "不用削皮去籽的小黄瓜，一口甜进心里 ",
          desicsub: "韩江平",
        },
        {
          imgs: "https://img.js.design/assets/smartFill/img338164da748e08.jpg",
          desic: "长在火山泥里的夏威夷果，不用剥壳好好吃。 ",
          desicsub: "刘荣",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.image img {
  width: 100%;
  height: 444px;
  border-radius: 10px;
  object-fit: cover;
}
.desic {
  margin-top: 15px;
}
.music-item {
  height: 238px;
}
.player img {
  width: 100%;
  height: 126px;
  border-radius: 10px;
  object-fit: cover;
}
.music-item-center {
  width: 134px;
  font-size: 16px;
}
.music-item-center p {
  font-size: 16px;
  color: rgba(51, 51, 51, 1);
  padding-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.music-item-center span {
  font-size: 14px;
  color: rgba(166, 166, 166, 1);
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
