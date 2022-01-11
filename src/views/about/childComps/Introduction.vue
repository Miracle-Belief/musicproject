<template>
  <div class="introduction">
     <div class="main container">
      <div class="row">
        <div class="col-md-4 col-xs-12 col-sm-4 left" data-aos="fade-right">
          <img :src="imgsList.imgs" alt=""/>
        </div>
        <div class="col-md-8 col-xs-12 col-sm-8 desic" data-aos="fade-left">{{desicList.desic}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Introduction',
     data() {
    return {
      imgsList:
        {
           imgs: require("../../../assets/img/about/about-img.png")
        },

      desicList:
        {
          desic: `我们都知道，只要有意义，那么就必须慎重考虑。 查尔斯·史考伯曾经说过，
          一个人几乎可以在任何他怀有无限热忱的事情上成功。
          这似乎解答了我的疑惑。
          斯宾诺莎曾经说过，最大的骄傲于最大的自卑都表示心灵的最软弱无力。这不
          禁令我深思。 所谓生活的意义，关键是生活的意义需要如何写。 贝多芬说过一
          句富有哲理的话，卓越的人一大优点是：在不利与艰难的遭遇里百折不饶。这不
          禁令我深思。 既然如何，
          对我个人而言，生活的意义不仅仅是一个重大的事件，
          还可能会改变我的人生。 带着这些问题，我们来审视一下生活的意义。`
        }

    };
  },
  }
</script>

<style lang="scss" scoped>
.left img {
  max-width:72%;
  height: 100%;
  border-radius: 6px;
}
.left {
  text-align: center;
}
.desic {
  color: #333;
  line-height: 2;
  text-indent: 2em;
}
</style>
