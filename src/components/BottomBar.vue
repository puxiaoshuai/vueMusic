<template>
  <div class="relative">
    <div class="container">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
    <BottomPlayer class="bottomPlayer fixed bottom-0 left-0 w-full" />
    <van-tabbar class="z-10" route safe-area-inset-bottom>
      <van-tabbar-item key="home" icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item key="user" icon="user-o" to="/user">我的</van-tabbar-item>
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
  },
  mounted() {}
}
</script>
<style lang="less">
.container {
  margin-bottom: 106px;
}
</style>
