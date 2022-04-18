<template lang="">
  <div>
    <div>woshi xiangq</div>
    <p>获取参数{{ $route.query.name }}, ？号后面是查询参数</p>
    <p>获取参数{{ $route.params.id }}, /号后面是查询参数</p>
    <p v-if="flag">测试</p>
    <p v-show="flag">哈哈哈</p>
    <p>发发发</p>
    <van-button @click="logout">退出登录</van-button>
  </div>
</template>
<script>
export default {
  name: 'newsDetail',
  data() {
    return {
      flag: false
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>
<style lang=""></style>
