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
      this.$store.commit('changeCurrentTime', e.target.currentTime)
    },
    onEnded() {
      this.$store.commit('handleMusicPause', true)
      console.log('播放完毕啦')
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
