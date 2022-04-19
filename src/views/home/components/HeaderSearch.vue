<template>
  <van-search disabled @click="jump" placeholder="搜索music" class="fixed z-10 w-full"></van-search>
</template>
<script>
export default {
  name: 'headerSearch',
  methods: {
    jump() {
      console.log('点击了')
    }
  }
}
</script>
<style lang="less"></style>
