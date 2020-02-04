<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//imgs.qunarzz.com/p/p66/201304/17/384810d022dd28f793835fbb.jpg_256x160_6a7ec251.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界AAAA</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe60f;</span>39</div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>

import CommonGallary from 'common/gallary/Gallary'

export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['//imgs.qunarzz.com/p/p66/201304/17/384810d022dd28f793835fbb.jpg_256x160_6a7ec251.jpg', '//imgs.qunarzz.com/p/p66/201304/17/384810d022dd28f793835fbb.jpg_256x160_6a7ec251.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  overflow: hidden
  height: 0
  padding-bottom: 55%
  .banner-img
    width 100%
  .banner-info
    display: flex
    position: absolute
    left:0
    right:0
    bottom:0
    line-height: 0.6rem
    color #fff
    background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
    .banner-title
      flex: 1
      font-size 0.32rem
      padding 0 .2rem
    .banner-number
      height 0.4rem
      line-height 0.4rem
      margin-top .1rem
      padding: 0 0.4rem
      border-radius 0.2rem
      background-color rgba(0,0,0,.8)
      font-size .24rem
      .banner-icon
        font-size .24rem
        margin-right .1rem

</style>
