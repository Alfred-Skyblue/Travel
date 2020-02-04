<template>
  <div class="header">
   <div class="header-left">
     <div class="iconfont back-icon">&#xe624;</div>
   </div>
   <div class="header-input">
     <span class="iconfont iconfont-search" v-show="show">&#xe632;</span>
     <input type="text"
       class="header-input-search"
       placeholder="输入城市景点游玩主题" v-on:focus="handleFocus" v-on:blur="handleBlur">
    </div>
   <router-link to="/city">
     <div class="header-right">{{ this.city }}<span class="iconfont arrow-icon">&#xe64a;</span></div>
   </router-link>

  </div>

</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'HomeHeader',
  data () {
    return {
      show: true
    }
  },
  methods: {
    handleFocus (el) {
      this.show = false
      el.target.placeholder = ''
      el.target.style.textIndent = 0
    },
    handleBlur (el) {
      if (el.target.value) return false
      this.show = true
      el.target.placeholder = '输入城市景点游玩主题'
      el.target.style.textIndent = 0.4 + 'rem'
    }
  },
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.header
  display:flex
  line-height: $headerHeight
  background:$bgColor
  color: #fff
 .header-left
   width: 0.64rem
   float: left
   .back-icon
      text-align: center
      font-size: 0.4rem
 .header-input
   flex:1
   height: .64rem
   line-height: .64rem
   margin-top: .12rem
   margin-left: .2rem
   padding-left: 0.2rem
   background: #fff
   border-radius: 0.1rem
   color:#ccc
  .header-input-search
    text-indent: 0.4rem
    display: block
    width: 100%;
    height: 100%
    border-radius: 0.1rem
  .iconfont-search
   position: absolute
 .header-right
  min-width: 1.04rem
  padding: 0 0.1rem
  float: right
  text-align:center
  color:#fff
  .arrow-icon
    font-size: 0.24rem
    margin-left: 0.08rem;
</style>
