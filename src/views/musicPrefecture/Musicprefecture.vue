<template>
  <div class="music-prefecture">
    <music-header />
    <music-recommend />
    <music-first />
    <choiceness />
  </div>
</template>

<script>
import MusicHeader from "./childComps/MusicHeader";
import MusicRecommend from "./childComps/MusicRecommend";
import MusicFirst from "./childComps/MusicFirst";
import Choiceness from "./childComps/Choiceness";

export default {
  name: "Musicprefecture",
  components: {
    MusicHeader,
    MusicRecommend,
    MusicFirst,
    Choiceness,
  },

};
</script>

<style scoped>
</style>
