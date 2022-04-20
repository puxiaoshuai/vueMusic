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
    <van-progress stroke-width="2" :percentage="currentTime" pivot-text="" />
    <div class="h-14 w-full flex bg-white items-center">
      <div class="imageHeader h-12 w-12 border-2 rounded-full border-red-300 ml-4">
        <van-image @click="toLRC" class="run-init" :class="animationClass" round :src="globalMusicInfo.picUrl ? globalMusicInfo.picUrl : defaultImg" />
      </div>
      <div class="flex-1 ml-3 text-sm" v-if="!globalMusicInfo.picUrl">暂无播放歌曲</div>
      <div v-else class="singer-wrapper flex-1 flex-col">
        <div class="text-gray-800 ml-3 text-sm block">{{ globalMusicInfo.name }}</div>
        <div class="text-gray-500 ml-3 text-xs block line-clamp-2">{{ globalMusicInfo.author }}</div>
      </div>
      <div class="progress-wrapper w-10 h-10 flex justify-center items-center">
        <van-icon @click="handlePlay" v-if="isMusicPaused" name="play-circle-o" size="30" />
        <van-icon @click="handlePause" v-else name="stop-circle-o" size="30" />
      </div>
      <van-icon @click="showPopup" class="ml-5 mr-5" name="apps-o" size="28" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'BottomPlayer',
  components: {},
  data() {
    return {
      showModal: false,
      currentTime: 0,
      duration: 0,
      defaultImg: require('@/assets/defaultImg.png')
    }
  },
  methods: {
    showPopup() {
      this.$store.commit('handleShowPopup')
    },
    getDuration(e) {
      this.duration = e.target.duration
      console.log('进度', this.duration)
      this.$store.commit('changeCurrentTime', e.target.currentTime)
    },
    timeupdate(e) {
      this.currentTime = (e.target.currentTime / this.duration) * 100 // 进度条适配
      this.$store.commit('changeCurrentTime', e.target.currentTime)
    },
    onEnded() {
      this.$store.commit('handleMusicPause', true)
    },
    handlePlay() {
      if (this.globalMusicUrl === '') {
        this.$toast('选首喜欢的歌曲吧')
        return
      }
      this.$store.commit('handleMusicPause', false)
    },
    handlePause() {
      this.$store.commit('handleMusicPause', true)
    },
    toLRC() {
      if (this.globalMusicUrl === '') return
      this.$router.push({ name: 'SongLRC', params: { url: this.globalMusicUrl, id: this.globalMusicInfo.id } })
    }
  },
  computed: {
    globalMusicUrl() {
      return this.$store.state.globalMusicUrl
    },
    globalMusicInfo() {
      return this.$store.state.globalMusicInfo
    },
    musicQueue() {
      return this.$store.state.musicQueue
    },
    nowIndex() {
      return this.$store.state.nowIndex
    },
    isMusicPaused() {
      return this.$store.state.isMusicPaused
    },
    animationClass() {
      return this.$store.state.isMusicPaused ? 'run-end' : 'run-start'
    }
  },
  watch: {
    isMusicPaused() {
      if (this.isMusicPaused) {
        this.$refs.audio.pause()
      } else {
        this.$refs.audio.play()
      }
    }
  }
}
</script>
<style lang="less">
@keyframes transformImage {
  to {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes transformImage {
  to {
    transform: rotate(360deg);
  }
}
.run-init {
  animation: transformImage 5s linear infinite;
  animation-fill-mode: forwards;
}
.run-end {
  animation-play-state: paused;
}
.run-start {
  animation-play-state: running;
}
</style>
