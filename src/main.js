import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, NavBar, Image as VanImage } from 'vant'
import 'vant/lib/index.less'
import 'tailwindcss/tailwind.css'
Vue.config.productionTip = false

Vue.use(Button).use(NavBar).use(VanImage)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
