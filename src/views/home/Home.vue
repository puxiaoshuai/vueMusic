<template lang="">
  <div class="home-wrapper relative">
    <HeaderSearch />
    <van-image round class="w-full h-40 rounded-md px-3 pt-2 mt-14" src="http://p1.music.126.net/DiITrtFcvv2fe898Vq9Jtg==/109951167306154905.jpg"></van-image>
    <van-tabs v-model="active" sticky offset-top="54px">
      <van-tab title="发现音乐">
        <div class="recommended-wrapper">
          <div class="recommended-header flex mt-2">
            <div class="flex-1 ml-6 text-lg">推荐歌单</div>
            <span class="recommended-showmore text-xs mr-6 border-2 px-2 py-1 rounded-xl">更多</span>
          </div>
          <div class="grid grid-cols-3">
            <RecommendedItem class="justify-self-center mt-4" v-for="(song, index) in recommendedList" :key="index"></RecommendedItem>
          </div>
        </div>
      </van-tab>
      <van-tab title="推荐歌单">内容 2</van-tab>
      <van-tab title="上新">内容 3</van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { NavBar } from 'vant'
import HeaderSearch from './components/HeaderSearch.vue'
import RecommendedItem from './components/RecommendedItem.vue'

export default {
  name: 'Home',
  components: {
    [NavBar.name]: NavBar,
    HeaderSearch,
    RecommendedItem
  },
  data() {
    return {
      active: 0,
      recommendedList: [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
    }
  },
  mounted() {},
  methods: {
    add() {
      this.$store.commit('add')
    }
  }
}
</script>
<style lang="less">
.bottomPlayer {
  margin-bottom: 50px;
}
</style>
