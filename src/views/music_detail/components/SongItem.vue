<template>
  <div @click="palyMusic" class="songitem flex flex-row h-16 items-center">
    <van-image class="rounded-2xl w-8 h-8 mx-3" round :src="picUrl" />
    <div class="flex-1">
      <div class="text-line text-sm">{{ name }}</div>
      <span class="text-xs">{{ author }}</span>
    </div>
    <van-icon @click.stop="jumpToMV" v-if="mv !== 0" class="mr-3" name="video-o" />
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
      request({
        url: getMp3Url + this.id
      }).then(res => {
        if (res.data.length > 0) {
          this.$store.commit('changeMusicUrl', res.data[0].url)
          // this.$store.commit('changeMusicQueue',musicList)
          this.$store.commit('changeMusicInfo', {name:name,author:author,picUrl:picUrl})
          this.$store.commit('handleMusicPause', false)
        }
      })
    }
  }
}
</script>
<style lang="less"></style>
