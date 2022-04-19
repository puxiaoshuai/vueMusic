<template>
  <div class="text-xs text-black max-h-8 line-clamp-2">{{text}}</div>
</template>
<script>
export default {
  name: 'textView',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="less"></style>
