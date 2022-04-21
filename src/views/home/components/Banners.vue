<template>
  <div>
    <van-swipe v-if="banners.length > 0" class="w-full" lazy-render :autoplay="3000" indicator-color="#fd8569">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <img class="w-full h-40 rounded-2xl px-3 pt-2 mt-14" v-lazy="item.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { request } from '@/utils/request.js'
import { getBanners } from '@/utils/api.js'
export default {
  name: 'banners',
  data() {
    return {
      banners: []
    }
  },
  mounted() {
    request({
      url: getBanners
    }).then(res => {
      this.banners = res.banners
    })
  }
}
</script>
<style lang="less"></style>
