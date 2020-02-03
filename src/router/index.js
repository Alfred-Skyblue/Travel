import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
Vue.use(Router)

// 创建路由对象
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
