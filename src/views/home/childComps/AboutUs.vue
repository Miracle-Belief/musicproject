<template>
  <div class="about-us">
    <div class="container about-padding">
      <div class="row">
        <div class="about-us-left col-md-5 col-sm-12 col-xs-12">
          <img :src="AboutObject.img" alt="" />
        </div>
        <div class="about-us-right col-md-7 col-sm-12 col-xs-12">
          <div class="about">
            <h1 class="about-title">关于我们</h1>
            <span class="about-sub">About us</span>
          </div>
          <div class="desic">
            {{ AboutObject.desic }}
          </div>

          <div class="row certification-center">
            <div class="col-md-6 col-sm-12 col-xs-12">
            1
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
              2
             <!-- <div class="sign-borduis"></div>
              <span class="certification"
                >同时在线主播人
                <span class="number">1500+</span>
                人</span
              > -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      AboutObject: {
        img: require("../../../assets/img/about/about-img.png"),
        desic:
          "悦动音乐是一款专注与发现与分享的音乐产品，依托专业音乐人、DJ、好友推荐及社交功能，在线音乐服务主打歌单、社交、大牌推荐和音乐指纹，以歌单、DJ节目、社交、地理位置为核心要素、主打发现和分享为口号的“悦动音乐、听见美好时光”，致力于发现好音乐好声音。",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.about-us {
  margin: 72px 0 77px 0;
}
.about-padding {
  height: 300px;
  padding-left: 171px;
  padding-right: 182px;
}
.about-us-left {
  img {
    width: 100%;
    height: 300px;
    border-radius: 10px;
    object-fit: cover;
  }
}

.about-us-right {
  height: 300px;
}
.desic {
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  margin-top: 30px;
}
.certification-center {
    white-space: nowrap;
    font-size: 12px;
    margin-top: 30px;
  }
.sign-borduis {
  width: 13px;
  height: 13px;
  background: #ffebeb;
  border-radius: 50%;
  position: relative;
}
.sign-borduis::after {
  content: "";
  width: 5px;
  height: 5px;
  border-radius: 50%;
  position: absolute;
  top: 30%;
  left: 30%;
  background-color: #ff2727;
}
 .number {
    color: var(--color-height-text);
    font-size: 13px;
  }
</style>
