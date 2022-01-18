<template>
  <div class="news-list">
    <div class="title">新闻动态</div>
    <div class="news-item container">
      <div class="row center">
        <div
          class="col-md-3 col-sm-6 col-xs-6 ech-big"
          v-for="(item, index) in musicListImg"
          :key="index"
        >
          <div class="row-center">
            <div class="row-img"><img :src="item.image" /></div>
            <div class="row-title">
              <div class="titles">
                <h3>{{ item.title }}</h3>
              </div>
              <div class="desic">{{ item.names }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsList",
  data() {
    return {
      musicListImg: [
        {
          image: "https://img.js.design/assets/smartFill/img436164da758808.jpg",
          title: "全新技术革命",
          names: "在vue中使用wow.js如果不按照以下方法实施,会出现意想不到的BUG",
        },
        {
          image: "https://img.js.design/assets/smartFill/img418164da758808.jpg",
          title: "全新技术革命",
          names: "在vue中使用wow.js如果不按照以下方法实施,会出现意想不到的BUG",
        },
        {
          image: "https://img.js.design/assets/smartFill/img421164da758808.jpg",
          title: "全新技术革命",
          names: "在vue中使用wow.js如果不按照以下方法实施,会出现意想不到的BUG",
        },
        {
          image: "https://img.js.design/assets/smartFill/img429164da758808.jpg",
          title: "全新技术革命",
          names: "在vue中使用wow.js如果不按照以下方法实施,会出现意想不到的BUG",
        },
        {
          image: "https://img.js.design/assets/smartFill/img427164da758808.jpg",
          title: "全新技术革命",
          names: "在vue中使用wow.js如果不按照以下方法实施,会出现意想不到的BUG",
        },
        {
          image: "https://img.js.design/assets/smartFill/img422164da758808.jpg",
          title: "全新技术革命",
          names: "在vue中使用wow.js如果不按照以下方法实施,会出现意想不到的BUG",
        },
        {
          image: "https://img.js.design/assets/smartFill/img422164da758808.jpg",
          title: "全新技术革命",
          names: "在vue中使用wow.js如果不按照以下方法实施,会出现意想不到的BUG",
        },
        {
          image: "https://img.js.design/assets/smartFill/img422164da758808.jpg",
          title: "全新技术革命",
          names: "在vue中使用wow.js如果不按照以下方法实施,会出现意想不到的BUG",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  padding: 35px 0;
  text-align: center;
  color: #020202;
  font-size: 20px;
}
.titles h3 {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
}
.row-title {
  padding: 0 10px;
}
.center {
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
}
.row-img img {
  width: 100%;
  height: 180px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.row-center {
  height: 280px;
  margin-bottom: 30px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 1);
}
.row-center:hover {
  background-color: var(--color-height-text);
  color: #fff;
  cursor: pointer;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.desic {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.ech-big {
  transition: all 0.4s;
}
.ech-big:hover {

  transform: scale(1.2);
}
</style>
