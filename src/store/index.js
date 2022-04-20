import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    isShowPopup: false,
    globalMusicUrl: '',
    globalMusicInfo: {},
    globalCurrentTime: 0,
    isMusicPaused: true,
    musicQueue: [], // 歌曲队列包含歌曲信息等
    nowIndex: 0,
    deleteToNext: false
  },
  mutations,
  actions: {
  },
  modules: {
  }
})
