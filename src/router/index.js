import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from '@/components/BottomBar.vue'
import Home from '@/views/home/Home.vue'
import User from '@/views/user/User.vue'
import Detail from '@/views/home/NewsDetail.vue'
import Login from '@/views/login/LoginView.vue'
import PageNotFound from '@/components/PageNotFound.vue'
// import MusicDetail from '@/views/music_detail/Player.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'Home'
    },
    component: Nav,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home

      },
      {
        path: '/user',
        name: 'User',
        component: User

      }
    ]
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '*',
    component: PageNotFound
  }
]

const router = new VueRouter({
  routes
})
// 只要路由发生了跳转，必然触犯beforeEach制定的回调函数
router.beforeEach((to, from, next) => {
  const routearr = ['Home', 'Detail']
  // 放行
  if (routearr.includes(to.name)) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('./login')
    }
  }
  next()
})

export default router
