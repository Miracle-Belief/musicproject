<template>
  <div class="about">
    <headers></headers>
    <div class="title">关于我们</div>
    <introduction></introduction>
    <development></development>
  </div>
</template>

<script>
  import Headers from './childComps/Headers'
  import Introduction from './childComps/Introduction'
  import Development from './childComps/Development'
  export default {
    name: 'About',
    components: {
      Headers,
      Introduction,
      Development
    }

  }
</script>

<style lang="scss" scoped>
.title {
  padding: 35px 0;
  text-align: center;
  color: #020202;
  font-size: 20px;
}
</style>
