<template>
  <div class="music-first">
    <div class="container music-list-desic">
      <p>音乐首发</p>
      <span>Music Launch</span>
    </div>

    <div class="music-first-background">
      <div class="container">
        <div class="row row-center">
          <div
            class="col-md-6 col-sm-6 col-xs-12 music-first-background-desic"
            v-for="(item, index) in firstList"
            :key="index"
          >
            <div class="player">
              <img :src="item.img" alt="" class="first-image" />
              <div class="mask">
                <img src="~assets/img/common/player.png" alt="" />
              </div>
            </div>

            <span class="desic">{{ item.desic }}</span>
            <span class="singer">{{ item.singer }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicFirst",
  data() {
    return {
      firstList: [
        {
          img: "https://img.js.design/assets/smartFill/img316164da746310.jpg",
          desic: "薄如蝉翼的金华火腿，每一口都是时间的味道",
          singer: "潘文",
        },
        {
          img: "https://img.js.design/assets/smartFill/img329164da748e08.jpg",
          desic: "【产品经验】第一次做APP时容易范的错误",
          singer: "郑伟",
        },
        {
          img: "https://img.js.design/assets/smartFill/img319164da746310.jpg",
          desic: "长在火山泥里的夏威夷果，不用剥壳好好吃。 ",
          singer: "李成盛",
        },
        {
          img: "https://img.js.design/assets/smartFill/img320164da746310.jpg",
          desic: "LOGO要这样排，你得PPT颜值不用愁",
          singer: "曹佳",
        },
        {
          img: "https://img.js.design/assets/smartFill/img307164da746310.jpeg",
          desic: "不用削皮去籽的小黄瓜，一口甜进心里 ",
          singer: "李杰",
        },
        {
          img: "https://img.js.design/assets/smartFill/img324164da746310.jpg",
          desic: "无聊青年最后的对话阵地：网易新闻评论区",
          singer: "唐怡雨",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.row-center {
  padding: 24px;
}

.music-first-background {
  width: 100%;
  background: url("../../../assets/img/music/first.png") no-repeat;
  background-size: cover;

  .music-first-background-desic img {
    width: 5.3rem;
    height: 5.3rem;
    border-radius: 10px;
    object-fit: cover;
  }
  .music-first-background-desic {
    display: flex;
    flex-wrap: wrap;
    // line-height: 5.3rem;
    color: #fff;
    font-size: 14px;
    padding: 20px 0;

    // margin-bottom: 48.5px;
    .first-image {
      width: 5.8rem;
      height: 5.8rem;
    }
    .desic {
      padding-left: 10px;
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 5.62rem;
    }
    .singer {
      // text-align: center;
      width: 7rem;
      line-height: 5.62rem;
    }
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
      top: 35%;
      left: 35%;
      right: 0;
      bottom: 0;
      width: 20px;
      height: 20px;
    }
  }
}
</style>
