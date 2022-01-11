<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NavBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "deeppink",
    },
  },
  data() {
    return {};
  },
  methods: {
    itemClick() {
      console.log(this.$router.history);
      let current_path = this.$router.history.current.path;
      if (current_path == this.path) {
        // 本次点击导航和上次一样,不必跳转
        return;
      }
      this.$router.replace(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  display: inline-block;
  cursor: pointer;
  padding:10px 20px;
}

.tab-bar-item + .tab-bar-item {
  margin-left: 24px;
}

.tab-bar-item:hover {
  background: #f32727fa;
  color: #fff;
  border-radius: 7px;
}

.active {
  background: #f32727fa;
  color: #fff;
  border-radius: 7px;
}
</style>
