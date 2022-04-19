<template>
  <div class="relative">
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <BottomPlayer class="bottomPlayer fixed bottom-0 left-0" />
    <van-tabbar class="z-10" route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
    <ListPopup></ListPopup>
  </div>
</template>
<script>
import BottomPlayer from '@/views/home/components/BottomPlayer.vue'
import ListPopup from '@/views/home/components/ListPopup.vue'
export default {
  name: 'bottomTabbar',
  components: {
    BottomPlayer,
    ListPopup
  },
  data() {
    return {
      message: ''
    }
  }
}
</script>
<style lang="less">
.container {
  margin-bottom: 106px;
}
</style>
