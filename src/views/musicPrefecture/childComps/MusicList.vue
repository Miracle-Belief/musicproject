<template>
  <div class="music-list">
    <div class="container main">
      <div class="row">
        <div class="col-md-2 col-sm-4" v-for="(item, index) in musicListImg"
            :key="index">
          <div class="row-center">
            <div class="row-img"><img :src="item.image" /></div>
            <div class="row-title">
            <div class="title">
              <h3>{{ item.title }}</h3>
            </div>
            <div class="names">{{ item.names }}</div>
          </div>
          </div>

        </div>

         <!-- <div class="skip">
            <img
              src="~assets/img/home/FtKUqitFwSvh4ZSmqAOS18poj_m7.png"
              alt=""
            />
            <div class="loding">点击试听更多...</div>
          </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicList",
  data() {
    return {
      musicListImg: [
        {
          image:
            "https://user-assets.sxlcdn.com/images/402037/Fi3cRZr66jEZmcAIx8G_1pQDnPYi.jpeg?imageMogr2/strip/auto-orient/thumbnail/1200x9000%3E/interlace/1/format/jpeg",
          title: "浩瀚星海",
          names: "丁芙妮",
        },
        {
          image:
            "https://user-assets.sxlcdn.com/images/402037/FjEvX7sdh5odpQ0soLlQPRU-anNo.jpeg?imageMogr2/strip/auto-orient/thumbnail/1200x9000%3E/interlace/1/format/jpeg",
          title: "不如不见",
          names: "不够",
        },
        {
          image:
            "https://user-assets.sxlcdn.com/images/402037/FjEvX7sdh5odpQ0soLlQPRU-anNo.jpeg?imageMogr2/strip/auto-orient/thumbnail/1200x9000%3E/interlace/1/format/jpeg",
          title: "终结者",
          names: "李美灵芝",
        },
        {
          image:
            "https://user-assets.sxlcdn.com/images/402037/FjEvX7sdh5odpQ0soLlQPRU-anNo.jpeg?imageMogr2/strip/auto-orient/thumbnail/1200x9000%3E/interlace/1/format/jpeg",
          title: "一眼盛夏",
          names: "伊格赛听 /栗男 /王宇呈",
        },
        {
          image:
            "https://user-assets.sxlcdn.com/images/402037/FjEvX7sdh5odpQ0soLlQPRU-anNo.jpeg?imageMogr2/strip/auto-orient/thumbnail/1200x9000%3E/interlace/1/format/jpeg",
          title: "始作俑者",
          names: "戾格",
        },
        {
          image:
            "https://user-assets.sxlcdn.com/images/402037/FjEvX7sdh5odpQ0soLlQPRU-anNo.jpeg?imageMogr2/strip/auto-orient/thumbnail/1200x9000%3E/interlace/1/format/jpeg",
          title: "浩瀚星海",
          names: "丁芙妮",
        },
      ],
    };
  },
};
</script>

<style scoped>
.music-list {
  padding: 60px 0;
}
.row-title {
  text-align: center;

}
.row-img img {
  width: 100%;
}
.row-center {
  margin-bottom: 30px;
}
</style>
