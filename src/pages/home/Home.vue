<template>
  <div>
    <!-- 调用组件 -->
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>

</template>

<script>
// 引入子组件
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
// 引入axios
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      // 初始化渲染页面使用的数据
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      // 发送ajax请求获取数据
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      // 数据获取成功,把获取到的数据传递给各个组件
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.recommendList = data.recommendList
        this.iconList = data.iconList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    // 页面渲染的时候初始化
    this.getHomeInfo()
  }
}
</script>

<style lang="">

</style>
