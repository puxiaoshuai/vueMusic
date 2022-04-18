<template lang="">
  <div class="home-wrapper">
    <van-nav-bar fixed title="首页" />
    <div style="margin-top: 46px">
      <p>测试</p>
      <router-link :to="{ path: '/detail/1233', query: { name: 'puxioashuai' } }">去详情</router-link>
      <van-button type="primary" @click="add">点击+1</van-button>
      <p>{{ $store.state.number }}</p>
    </div>
  </div>
</template>
<script>
import { NavBar } from 'vant'
export default {
  name: 'Home',
  components: {
    [NavBar.name]: NavBar
  },
  mounted() {},
  methods: {
    add() {
      this.$store.commit('add')
    }
  }
}
</script>
<style lang="less"></style>
