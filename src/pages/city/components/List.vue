<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ this.currentCity }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
              <div class="button-list">
                <div class="button-wrapper" v-for="item of hot" :key="item.id"
                  @click="handleCityClick(item.name)">
                  <div class="button">{{ item.name }}</div>
                </div>

              </div>
      </div>
      <div class="area" v-for="(item, key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id"
          @click="handleCityClick(innerItem.name)">{{ innerItem.name }}</div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  watch: {
    letter () {
      if (!this.letter) return false
      const element = this.$refs[this.letter][0]
      this.scroll.scrollToElement(element)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #777
.border-bottom
  &:before
    border-color: #ccc

.list
  overflow: hidden
  position:absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  .title
    line-height: 0.54rem
    background-color: #eee
    padding-left: 0.2rem
    color: #666
    font-size: 0.26rem
  .button-list
    overflow: hidden
    padding: 0.1rem 0.6rem 0.1rem 0.1rem
    .button-wrapper
      float: left
      width: 33.33%
      .button
        margin: 0.1rem
        padding: 0.1rem 0
        text-align: center
        border: 0.02rem solid #ccc
  .item-list
    .item
      line-height: 0.76rem
      padding-left: 0.2rem
</style>
