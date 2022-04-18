<template>
  <div class="lrc-wrapper h-80 rounded-lg overflow-auto relative">
    <div class="lrc absolute top-0" ref="lrc">
      <p
        :class="{ 'text-red-600': currentTime > allKeys[index] && currentTime < allKeys[index + 1] }"
        class="h-8 leading-8"
        v-for="(item, key, index) in lrcInfo"
        :key="index"
      >
        <span>{{ item }}{{ scrollLrc(index) }}</span>
      </p>
    </div>
  </div>
</template>
<script>
import { getLrc } from '@/utils/api.js'
import { request } from '@/utils/request.js'
export default {
  name: 'LRC',
  data() {
    return {
      lrcInfo: '',
      allKeys: []
    }
  },
  mounted() {
    request({
      url: getLrc
    }).then(res => {
      this.filterLrc(res.lrc.lyric)
    })
  },

  beforeDestroy() {},
  methods: {
    filterLrc(lrc) {
      if (!lrc) return
      const lrcObj = {}
      const lrcArray = lrc.split('\n')
      const reg = /\[\d*:\d*(\.|:)\d*]/g
      for (let i = 0; i < lrcArray.length; i++) {
        const time = lrcArray[i].match(reg)
        if (!time) continue
        const content = lrcArray[i].replace(time, '')
        const t = time[0]
        const min = parseInt(t.match(/\[(\d*):/i)[1])
        const sec = parseInt(t.match(/:\d*/i).toString().slice(1))
        const timerNumber = min * 60 + sec
        lrcObj[timerNumber] = content
        this.allKeys.push(timerNumber)
      }
      this.lrcInfo = lrcObj
    },
    scrollLrc(index) {
      if (this.currentTime > this.allKeys[index] && this.currentTime < this.allKeys[index + 1]) {
        if (index - 2 < 0) return
        this.$refs.lrc.style.top = -(32 * (index - 2)) + 'px'
      }
    }
  },
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    currentTime: {
      type: Number
    }
  }
}
</script>
<style lang="less"></style>
