<template>
  <div class="colletions">
    <div class="about">
      <h1 class="about-title">我们能做什么?</h1>
      <span class="about-sub">What can we do?</span>
    </div>

       <div class="news-item container  about-padding">
      <div class="row center">
        <div
          class="col-md-6  col-sm-6 col-xs-6"
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
  name: "Collections",
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
        }

      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.about-padding {
   padding-left: 171px;
  padding-right: 182px;
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
</style>
