<template>
  <div class="page">
    <div class="container text-center">
    <ul class="pagination  page-item">
      <li><a href="#">&laquo;</a></li>
      <li><a href="#">1</a></li>
      <li><a href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">4</a></li>
      <li><a href="#">5</a></li>
      <li><a href="#">&raquo;</a></li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page",
};
</script>

<style lang="scss" scoped>
.page {
  margin-bottom: 20px;
}
  .page-item li a {
    color: #333;
  }
</style>
