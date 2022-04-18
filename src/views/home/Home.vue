<template lang="">
  <div class="home-wrapper">
    <van-nav-bar fixed title="首页" />
    <div style="margin-top: 46px">
      <p>测试</p>
      <router-link :to="{ path: '/detail/1233', query: { name: 'puxioashuai' } }">去详情</router-link>
    </div>
  </div>
</template>
<script>
import { NavBar } from 'vant'
import { request } from '@/utils/request.js'
export default {
  name: 'Home',
  components: {
    [NavBar.name]: NavBar
  },
  mounted() {
    console.log('11', 11)
    request({
      url: 'playlist/hot'
    })
      .then(res => {
        console.log('数据111111', res)
      })
      .catch(e => {
        console.log('异常', e)
      })
  }
}
</script>
<style lang="less"></style>
