<template>
  <div>
    我是头部
    <slot name="left"></slot>
    <!-- 在封装组件时为预留的<slot>提供属性对应值，这种用法叫作用域插槽 -->
    <slot name="right" message="我是solt定义内容" :user="user"></slot>
  </div>
</template>
<script>
export default {
  name: 'userHeader',
  data() {
    return {
      user: {
        name: 'puxiaoshaii'
      }
    }
  }
}
</script>
<style lang="less"></style>
