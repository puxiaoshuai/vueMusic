<template lang="">
  <div class="home-wrapper relative">
    <HeaderSearch />
    <Banners />
    <div class="recommended-wrapper">
      <div class="recommended-header flex mt-4">
        <div class="flex-1 ml-6 text-lg">推荐歌单</div>
        <span class="recommended-showmore text-xs mr-6 border-2 px-2 py-1 rounded-xl">更多</span>
      </div>
      <div class="grid grid-cols-3">
        <RecommendedItem
          :picUrl="song.picUrl"
          :id="song.id"
          :playCount="song.playCount"
          :name="song.name"
          class="justify-self-center mt-4"
          v-for="(song, index) in recommendedList"
          :key="index"
        ></RecommendedItem>
      </div>
    </div>
  </div>
</template>
<script>
import { NavBar } from 'vant'
import HeaderSearch from './components/HeaderSearch.vue'
import RecommendedItem from './components/RecommendedItem.vue'
import Banners from './components/Banners.vue'
import { request } from '@/utils/request.js'
import { getRecommends } from '@/utils/api.js'

export default {
  name: 'Home',
  components: {
    [NavBar.name]: NavBar,
    HeaderSearch,
    RecommendedItem,
    Banners
  },
  data() {
    return {
      active: 0,
      recommendedList: [],
      banners: []
    }
  },
  methods: {},
  mounted() {
    request({
      url: getRecommends
    }).then(res => {
      this.recommendedList = res.result
    })
  }
}
</script>
<style lang="less">
.bottomPlayer {
  margin-bottom: 50px;
}
</style>
