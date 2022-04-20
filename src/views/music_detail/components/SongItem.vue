<template>
  <div class="songitem flex flex-row h-16 items-center">
    <van-image class="rounded-2xl w-8 h-8 mx-3" round :src="picUrl" />
    <div class="flex-1">
      <div class="text-line text-sm">{{ name }}</div>
      <span class="text-xs">{{ author }}</span>
    </div>
    <van-icon v-if="mv !== 0" class="mr-3" name="video-o" />
  </div>
</template>
<script>
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
    picUrl: String
  }
}
</script>
<style lang="less"></style>
