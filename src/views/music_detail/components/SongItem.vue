<template>
  <div @click="palyMusic" class="songitem flex flex-row h-16 items-center">
    <van-image class="rounded-2xl w-8 h-8 mx-3" round :src="picUrl" />
    <div class="w-64">
      <div class="text-sm text-line">{{ name }}</div>
      <div class="text-xs text-line">{{ author }}</div>
    </div>
    <van-icon @click.stop="jumpToMV" v-if="mv !== 0" class="ml-3" name="video-o" />
  </div>
</template>
<script>
import { getMp3Url } from '@/utils/api.js'
import { request } from '@/utils/request.js'
export default {
  name: 'SongItem',
  components: {},
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    mv: {
      type: Number,
      required: true
    },
    dt: {
      type: Number,
      required: true
    },
    picUrl: String,
    musicList: Array
  },
  methods: {
    jumpToMV() {
      console.log('看视频')
    },
    palyMusic() {
      this.loadingContent = this.$toast.loading({
        forbidClick: true
      })
      request({
        url: getMp3Url + this.id
      })
        .then(res => {
          if (res.data.length > 0) {
            this.$store.commit('changeMusicUrl', res.data[0].url)
            // this.$store.commit('changeMusicQueue',musicList)
            this.$store.commit('changeMusicInfo', { name: this.name, author: this.author, picUrl: this.picUrl, id: this.id })
            this.$store.commit('handleMusicPause', false)
            this.loadingContent.clear()
          }
        })
        .catch(() => {
          this.$toast('抱歉,音乐加载失败')
        })
    }
  }
}
</script>
<style lang="less">
.songitem {
  max-width: 750px;
}
</style>
