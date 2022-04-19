<template>
  <div>
    <van-progress class="w-screen" stroke-width="2" :percentage="100" show-pivot="false" pivot-text="" />
    <div class="h-14 w-full flex bg-white items-center">
      <div class="imageHeader h-12 w-12 border-4 rounded-full border-gray-800 bg-red-400 ml-4">
        <van-image round src="http://p2.music.126.net/0z2bW4d5mPNPEj_mERfl3A==/109951164671397652.jpg" />
      </div>
      <div class="singer-wrapper space-x-1">
        <span class="text-gray-800 ml-3">张三的歌</span>
        <span class="text-xs">-</span>
        <span class="text-gray-500 text-xs">蔡琴</span>
      </div>
      <div class="progress-wrapper w-10 h-10 flex justify-center items-center ml-20">
        <van-icon name="play-circle-o" size="30" />
        <!-- <van-icon name="stop-circle-o" /> -->
      </div>
      <van-icon class="ml-5 text-gray-500" name="setting-o" size="28" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'BottomPlayer'
}
</script>
<style lang="less"></style>
