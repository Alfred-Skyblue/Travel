<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/e802ce19-7950-419c-b790-39fb364cf7f6.jpg_r_480x320x90_b8313d0d.jpg',
        title: '北海当地游 6天自由行',
        desc: '🔥火爆海岛游⊙北海+涠洲岛6日⊙赠赶海+海底世界/住香格里拉+船票+上岛费'

      },
      {
        id: '002',
        imgUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/e802ce19-7950-419c-b790-39fb364cf7f6.jpg_r_480x320x90_b8313d0d.jpg',
        title: '北海当地游 6天自由行',
        desc: '🔥火爆海岛游⊙北海+涠洲岛6日⊙赠赶海+海底世界/住香格里拉+船票+上岛费'

      },
      {
        id: '003',
        imgUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/e802ce19-7950-419c-b790-39fb364cf7f6.jpg_r_480x320x90_b8313d0d.jpg',
        title: '北海当地游 6天自由行',
        desc: '🔥火爆海岛游⊙北海+涠洲岛6日⊙赠赶海+海底世界/住香格里拉+船票+上岛费'

      },
      {
        id: '004',
        imgUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/e802ce19-7950-419c-b790-39fb364cf7f6.jpg_r_480x320x90_b8313d0d.jpg',
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
.item
  overflow: hidden
  display: flex
  height: 1.9rem
  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: 0.1rem
  .item-info
    flex: 1
    padding: 0.1rem
    min-width:0
    .item-title
      font-weight: 500
      line-height: 0.54rem
      font-size: 0.32rem
      ellipsis()
    .item-desc
      line-height: 0.4rem
      color: #ccc
      ellipsis()
    .item-button
      line-height: 0.44rem;
      margin-top: 0.2rem
      background: #ff9300
      padding: 0 0.2rem
      border-radius: 0.06rem
      color: #fff

</style>
