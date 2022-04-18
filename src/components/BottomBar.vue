<template>
  <div>
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem, Button } from 'vant'
export default {
  name: 'bottomTabbar',
  components: {
    [Button.name]: Button,
    [TabbarItem.name]: TabbarItem,
    [Tabbar.name]: Tabbar
  },
  data() {
    return {
      message: ''
    }
  }
}
</script>
<style lang=""></style>
