import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, NavBar, Image as VanImage, Tab, Tabs, Search, Icon, Tabbar, TabbarItem, Progress } from 'vant'
import 'vant/lib/index.less'
import 'tailwindcss/tailwind.css'
import './index.css'
import store from './store'
Vue.config.productionTip = false
console.info(`%c
欢迎使用I音乐！
作者：蒲小帅
歌曲来源于网易云音乐(https://music.163.com)
* 本项目仅供个人学习研究使用，禁止用于商业或非法用途。`, 'color:#2980b9')
Vue.use(Button).use(NavBar).use(VanImage).use(Tab).use(Tabs).use(Search).use(Icon).use(TabbarItem).use(Tabbar).use(Progress)
Vue.use(store)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
