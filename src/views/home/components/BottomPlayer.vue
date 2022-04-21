<template>
  <div>
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
import { PLAYING_MUSIC_INFO } from '@/utils/constants.js'
export default {
  name: 'BottomPlayer',
  components: {},
  data() {
    return {
      showModal: false,
      defaultImg: require('@/assets/defaultImg.png')
    }
  },
  methods: {
    showPopup() {
      this.$store.commit('handleShowPopup')
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
      localStorage.setItem(PLAYING_MUSIC_INFO, JSON.stringify(this.globalMusicInfo))
      this.$router.push({ name: 'SongLRC', params: { id: this.globalMusicInfo.id } })
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
    currentTime() {
      return Math.floor((this.$store.state.globalCurrentTime / (this.globalMusicInfo.dt / 1000)) * 100) || 0 // 进度条适配
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
        this.$parent.$parent.$refs.audio.pause()
      } else {
        this.$parent.$parent.$refs.audio.play()
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
