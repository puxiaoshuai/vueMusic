<template>
  <div>
    <p>登录界面</p>
    <van-button type="primary" @click="login">登录</van-button>
  </div>
</template>
<script>
export default {
  name: 'loginView',
  data() {
    return {
      user: {
        name: 'admin',
        password: '123456',
        token: 'xcfjaskdfjkasdjfkldsajf'
      }
    }
  },
  methods: {
    login() {
      console.log('点击了登录')
      localStorage.setItem('token', JSON.stringify(this.user))
      this.$router.replace('./')
    }
  }
}
</script>
<style lang="less"></style>
