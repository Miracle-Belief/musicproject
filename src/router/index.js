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
     title:'首页',
     redirect: '/home',
   },
   {
     path: '/home',
     title:'首页',
     component: Home
   },
   {
     path: '/musicPrefecture',
     title:'音乐专区',
     component: Musicprefecture
   },
   {
    path: '/artistService',
    title:'艺人服务',
    component: Artistservice
  },
  {
    path:'/news',
    title:'新闻动态',
    component: Artistservice
  },
  {
    path: '/about',
    title:'关于我们',
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
