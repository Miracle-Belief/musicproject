import VueRouter from 'vue-router';
import Vue from 'vue'


const Home = () => import('../views/home/Home')
const Musicprefecture = () => import('../views/musicPrefecture/Musicprefecture')
const Artistservice = () => import('../views/artistService/Artistservice')
const About = () => import('../views/about/About')



// 1.通过Vue.use()插件,安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [
   {
     path: '',
     redirect: '/home'
   },
   {
     path: '/home',
     component: Home
   },
   {
     path: '/musicPrefecture',
     component: Musicprefecture
   },
   {
    path: '/artistService',
    component: Artistservice
  },
  {
    path: '/about',
    component: About
  }
]

const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  mode: 'history'
})

// 导出
export default router
