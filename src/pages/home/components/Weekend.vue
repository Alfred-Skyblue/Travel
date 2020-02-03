<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
         <div class="item-img-weekend">
            <img class="item-img" :src="item.imgUrl">
         </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '001',
          imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/d42b4e9256a0ad0ad10f5e10b041cc1e.jpg_r_680x453x95_23c9c231.jpg',
          title: '北海当地游 6天自由行',
          desc: '🔥火爆海岛游⊙北海+涠洲岛6日⊙赠赶海+海底世界/住香格里拉+船票+上岛费'

        },
        {
          id: '002',
          imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/d42b4e9256a0ad0ad10f5e10b041cc1e.jpg_r_680x453x95_23c9c231.jpg',
          title: '北海当地游 6天自由行',
          desc: '🔥火爆海岛游⊙北海+涠洲岛6日⊙赠赶海+海底世界/住香格里拉+船票+上岛费'

        },
        {
          id: '003',
          imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/d42b4e9256a0ad0ad10f5e10b041cc1e.jpg_r_680x453x95_23c9c231.jpg',
          title: '北海当地游 6天自由行',
          desc: '🔥火爆海岛游⊙北海+涠洲岛6日⊙赠赶海+海底世界/住香格里拉+船票+上岛费'

        },
        {
          id: '004',
          imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/d42b4e9256a0ad0ad10f5e10b041cc1e.jpg_r_680x453x95_23c9c231.jpg',
          title: '北海当地游 6天自由行',
          desc: '🔥火爆海岛游⊙北海+涠洲岛6日⊙赠赶海+海底世界/住香格里拉+船票+上岛费'

        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl';
.title
  margin-top: 0.2rem
  line-height: 0.8rem
  background:#eee
  text-indent: 0.2rem
.item-img-wrapper
  overflow: hidden
  height: 0
  padding-bottom: 33.9%
.item-img
  width: 100%
  height: 1.7rem
.item-info
  padding: 0.1rem
  .item-title
    font-weight: 500
    line-height: 0.54rem
    font-size: 0.32rem
    ellipsis()
  .item-desc
    line-height: 0.4rem
    color: #ccc
    ellipsis()

</style>
