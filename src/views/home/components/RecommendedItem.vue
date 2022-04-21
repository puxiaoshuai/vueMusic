<!-- 推荐歌单 -->
<template>
  <div @click="jumpToSongList(id)" class="w-24 relative">
    <van-image class="w-24 h-24" :src="picUrl" />
    <div>
      <TextView :text="name" />
    </div>
    <div class="icon-number absolute right-1 top-0 bg-slate-400 text-xs rounded px-1 mt-1 bg-opacity-80 text-white">
      <van-icon name="service" class="mr-1" />
      {{ playCount | formatNumber }}
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
    picUrl: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    playCount: {
      type: Number,
      required: true
    }
  },
  methods: {
    jumpToSongList: function(id) {
      this.$router.push(`/songList/${id}`)
    }
  },
  filters: {
    formatNumber: function(value) {
      const w = 10000
      if (!value) return ''
      return (value / w).toFixed(2) + '万'
    }
  }
}
</script>
<style lang="less"></style>
