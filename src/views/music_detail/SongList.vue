<!-- 歌单详情，歌曲列表 -->
<template>
  <div>
    <div class="header-wrapper">
      <van-nav-bar fixed title="爱你一万年" left-text="返回" left-arrow @click-left="onClickLeft" />
      <div class="h-48 relative header-content">
        <van-image style="filter: blur(4px)" class="h-full w-full" :src="songInfo.picUrl"></van-image>
        <van-image round class="h-24 w-24 absolute left-3 top-8" :src="songInfo.picUrl"></van-image>
        <div class="rightContent absolute left-32 right-4 top-4">
          <p class="text-white">{{ songInfo.name }}</p>
          <p v-html="songInfo.description" class="text-xs mt-4 text-white line-clamp-4"></p>
          <van-tag class="mx-1 mt-2" v-for="tag in songInfo.tags" :key="tag" round>{{ tag }}</van-tag>
        </div>
      </div>
    </div>
    <div class="songlist">
      <van-list v-model="loading" :finished="finished" finished-text="--底线(๑¯㉨¯๑)--">
        <SongItem :name="item.name" :id="item.id" :picUrl="item.picUrl" :author="item.author" :mv="item.mv" :dt="item.dt" :key="item.id" v-for="item in songList"></SongItem>
      </van-list>
    </div>
  </div>
</template>
<script>
import { getRecommendedDetail, getSongListOfRecommendations } from '@/utils/api.js'
import { request } from '@/utils/request.js'
import SongItem from './components/SongItem.vue'
export default {
  name: 'songList',
  components: {
    SongItem
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      html: '学校',
      songInfo: {
        id: '',
        name: '',
        trackIds: [],
        description: '',
        tags: [],
        picUrl: ''
      },
      loadingContent: null,
      songList: []
    }
  },

  mounted() {
    this.loadingContent = this.$toast.loading({
      message: '加载中...',
      forbidClick: true
    })
    this.loadRecommendedDetails()
  },
  methods: {
    onLoad() {},
    onClickLeft() {
      this.$router.push('/home')
    },
    async loadRecommendedDetails() {
      await request({
        url: getRecommendedDetail + this.$route.params.id
      }).then(res => {
        const data = res.playlist
        console.log('xx', data)
        this.songInfo = { id: data.id, name: data.name, trackIds: data.trackIds, tags: data.tags, description: data.description, picUrl: data.coverImgUrl }
      })

      await request({
        url: getSongListOfRecommendations + this.songInfo.trackIds.map(item => item.id).join(',')
      })
        .then(res => {
          this.songList = res?.songs?.filter(item => item.fee === 0 || item.fee === 8) // 0免费 8 非会员低质量
          this.songList = this.songList.map(item => {
            return {
              name: item.name,
              id: item.id,
              picUrl: item.al.picUrl,
              author: item.al.name,
              mv: item.mv, // 非零表示有MV ID
              dt: item.dt // 歌曲时长
            }
          })
        })
        .finally(() => {
          this.loadingContent.clear()
          this.loading = false
          this.finished = true
        })
    }
  }
}
</script>
<style lang="less" scoped>
.header-content {
  margin-top: 46px;
}
</style>
