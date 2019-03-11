<template>
    <div id="area">
      <div class="cateHead">
        <i class="iconfont icon-fangdajing"></i>
        <span>搜索商品，共9999款好物</span>
      </div>
      <div class="list">
        <div class="leftList">
          <ul>
            <li v-for="(cateItem,index) in cate.categoryL1List" :key="index" :class="{active:$route.query.categoryId *1 ===cateItem.id}">
              <router-link :to="`/cate/cateList/?categoryId=${cateItem.id}`">{{cateItem.name}}</router-link>
            </li>
          </ul>
        </div>
        <router-view/>
      </div>
    </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    mounted () {
      this.$store.dispatch('getCate')
      new BScroll('.leftList',{
        click:true
      })
    },
    computed:{
      ...mapState(['cate'])
    },
  }

</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #area
    .cateHead
      border 1px solid #eee
      width 600px
      height 56px
      border-radius 10px
      background-color #eeeeee
      margin 15px auto
      text-align center
      line-height 56px
      i
        font-size 30px

    .list
      box-sizing border-box
      padding-left  10px
      width 100%
      height 1200px
      border-top 1px solid #eee
      padding-top 10px
      display flex
      .leftList
        width 156px
        height 1100px
        border-right 1px solid #eee
        padding-top 20px
        ul
          li
            width 155px
            height 48px
            line-height 49px
            text-align center
            margin-top 0.6rem
            font-size 30px
            box-sizing border-box
            &:nth-first-child
              margin-top 0
            &.active
              border-left 5px solid darkred
              a
                color darkred


</style>
