<template>
  <div>
    <h1>页面走丢了</h1>
    <van-button @click="login">去登录</van-button>
  </div>
</template>
<script>
export default {
  name: 'page404',
  methods: {
    login() {
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="less"></style>
