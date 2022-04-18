<template>
  <div class="mb-14">
    <van-nav-bar title="音乐标题" left-text="返回" left-arrow @click-left="onClickLeft" />

    <div class="cove flex">
      <van-image class="rounded-2xl w-40 h-40 m-auto" round src="https://p1.music.126.net/cpoUinrExafBHL5Nv5iDHQ==/109951166361218466.jpg" />
    </div>
    <LRC :id="1938028979" :currentTime="currentTime"></LRC>
    <div class="audio-wapper flex">
      <audio ref="player" class="m-auto mt-8" controls :src="mp3Info.url"></audio>
    </div>
  </div>
</template>
<script>
import { request } from '@/utils/request.js'
import { mp3Url } from '@/utils/api.js'
import LRC from './LRC.vue'
export default {
  name: 'musciDetail',
  components: {
    LRC: LRC
  },
  data() {
    return {
      mp3Info: {
        url: '',
        cover: ''
      },
      currentTime: 0
    }
  },
  mounted() {
    request({
      url: mp3Url
    }).then(res => {
      if (res.data && res.data.length > 0) {
        this.mp3Info = { url: res.data[0].url, cover: res.data[0].url }
        console.log('gg', this.mp3Info.url)
      }
    })
    this.addEventHandle()
  },
  beforeDestroy() {
    this.$refs.player.removeEventListener('timeupdate', event => {})
  },
  methods: {
    onClickLeft() {},
    addEventHandle() {
      this.$refs.player.addEventListener('timeupdate', event => {
        this.currentTime = this.$refs.player.currentTime
      })
    }
  }
}
</script>
<style lang="less"></style>
