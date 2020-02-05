// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 引入依赖
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

// 消息提示的环境配置，设置为开发环境或者生产环境
Vue.config.productionTip = false

// 创建VueAwesomeSwiper轮播图组件
Vue.use(VueAwesomeSwiper)

// 引用fastClick组件阻止移动端滑动延迟
fastClick.attach(document.body)
/* eslint-disable no-new */
// 创建vue实例
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
