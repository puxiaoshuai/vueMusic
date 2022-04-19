<!-- 推荐歌单 -->
<template>
  <div class="w-24 relative">
    <van-image src="http://p2.music.126.net/B0YtENYuA3HFki3Ht_TniA==/109951163469578210.jpg" />
    <div>
      <TextView text="会让你上瘾的音乐福建师范看九分裤发哈是返回" />
    </div>
    <div class="icon-number absolute right-1 top-0 bg-slate-400 text-xs rounded px-1 mt-1 bg-opacity-80 text-white">
      <van-icon name="service" class="mr-1" />
      100w
    </div>
  </div>
</template>
<script>
import TextView from '@/components/TextView.vue'
export default {
  name: 'RecommendedItem',
  components: {
    TextView
  },
  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="less"></style>
