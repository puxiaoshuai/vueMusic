<template >
  <div>
    <div>个人中心</div>
    <user-header>
      <template #left><div class="left">我是左边内容</div></template>
      <template #right="{ user, message }">
        我是右边内容,{{ user.name }}
        <h3>作用域插槽值解构，{{ message }}</h3>
      </template>
    </user-header>
  </div>
</template>
<script>
import Heder from './Header.vue'
export default {
  name: 'User',
  components: {
    userHeader: Heder
  }
}
</script>
<style lang="less">
.left {
  color: red;
}
</style>
