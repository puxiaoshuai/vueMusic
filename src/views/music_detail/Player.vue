<template>
  <div class="mb-14">
    <van-nav-bar :title="musicInfo.name" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="cover flex">
      <van-image class="rounded-2xl w-40 h-40 m-auto" round :src="musicInfo.picUrl" />
    </div>
    <LRC :id="id"></LRC>
  </div>
</template>
<script>
import LRC from './LRC.vue'
import { PLAYING_MUSIC_INFO } from '@/utils/constants.js'
export default {
  name: 'musicDetail',
  components: {
    LRC
  },
  data() {
    return {
      currentTime: 0,
      musicInfo: {}
    }
  },
  mounted() {
    this.musicInfo = JSON.parse(localStorage.getItem(PLAYING_MUSIC_INFO))
  },
  beforeDestroy() {},
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    }
  }
}
</script>
<style lang="less"></style>
