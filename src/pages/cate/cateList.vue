<template>
  <div v-if="category">
    <div class="rightList">
      <div class="list">
        <div class="topImg">
          <img :src="category.bannerUrl" alt="">
        </div>
        <div class="bottom">
          <ul>
            <li v-for="(sub,index) in category.subCateList" :key="index" >
              <a href="javascript:;">
                <img :src="sub.wapBannerUrl">
                <span>{{sub.name}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: "cateList",
    computed:{
      ...mapState(['cate']),
      category () {
        if(this.cate.categoryL1List){
          const result = this.cate.categoryL1List.find((item,index)=> item.id===this.$route.query.categoryId *1)
          if(!result){
            return this.cate.categoryL1List[0]
          }else {
            return result
          }
        }
      }
    },
    watch:{
      category () {
        this.$nextTick(()=>{
          new BScroll('.rightList',{
            click:true
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .rightList
    height 1100px
    box-sizing border-box
    padding-top 10px
    .list
      margin 20px
      display flex
      flex-direction column
      .topImg
        width 505px
        height 185px
        margin-bottom 0.42667rem
        img
          width 505px
          height 185px
          display block
      .bottom
        width 505px
        ul
          display flex
          flex-wrap wrap
          li
            width 135px
            height 220px
            margin-right 30px
            display flex
            flex-direction column
            align-items center
            text-align center
            img
              width 138px
              height 138px
            span
              display block
              width 150px


</style>
