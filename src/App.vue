<template>
  <div>
    <audio
      :src="globalMusicUrl"
      controls
      autoplay
      ref="audio"
      style="display: none"
      @canplay="getDuration"
      @timeupdate="timeupdate"
      @ended="onEnded"
      您的浏览器不支持audio标签
    ></audio>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      duration: 0
    }
  },
  methods: {
    getDuration(e) {
      this.duration = e.target.duration
    },
    timeupdate(e) {
      // this.currentTime = Math.floor((e.target.currentTime / (this.globalMusicInfo.dt / 1000)) * 100) // 进度条适配
      this.$store.commit('changeCurrentTime', e.target.currentTime)
    },
    onEnded() {
      this.$store.commit('handleMusicPause', true)
    }
  },
  computed: {
    globalMusicUrl() {
      return this.$store.state.globalMusicUrl
    }
  }
}
</script>
<style></style>
