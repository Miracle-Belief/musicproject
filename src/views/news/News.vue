<template>
  <div class="news">
    <news-header/>
    <news-list/>
    <page/>
  </div>
</template>

<script>
  import NewsHeader from './childComps/NewsHeader'
  import NewsList from './childComps/NewsList'
  import Page from './childComps/Page'
  export default {
    name: 'News',
    components: {
      NewsHeader,
      NewsList,
      Page


    }
  }
</script>

<style lang="scss" scoped>

</style>
