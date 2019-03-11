<template>
  <div id="picContainer">
    <div class="head">
        <div class="h-left">
         <a href="javascript:;">
           <i class="iconfont icon-shouye"></i>
         </a>
      </div>
        <div class="h-mid">
          <a href="javascript:;" class="item active">发现</a>
          <a href="javascript:;" class="item">甄选家</a>
        </div>
        <div class="h-right">
        <a href="javascript:;"><i class="iconfont icon-fangdajing"></i></a>
        <a href="javascript:;"><i class="iconfont icon-gouwuche1"></i></a>
     </div>
    </div>
    <div class="daohang">
     <ul>
       <li  >
         <a href="jacaviist:;" class="active">
           <span>推荐</span>
         </a>
       </li>
       <li>
         <a href="jacaviist:;">
          <span>收纳秘诀</span>
         </a>
       </li>
       <li>
         <a href="jacaviist:;">
          <span>蒸烤箱上新</span>
         </a>
       </li>
       <li>
         <a href="jacaviist:;">
          <span> 晒单</span>
         </a>
       </li>
       <li>
         <a href="jacaviist:;">
           <span>达人</span>
         </a>
       </li>
       <li>
         <a href="jacaviist:;">
            <span>HOME</span>
         </a>
       </li>
     </ul>
    </div>
    <Split/>
    <div class="top">
      <div class="pic">
        <div class="pic_wrap">
          <img src="/static/imgs/home/12ec510d53390efb09c504d86b69b2dd.png"/>
          <span>选妹</span>
        </div>
      </div>
      <div class="title">比运动裤还自由的严选牛仔裤，人手一条绝对不够！限时领130元券礼包~</div>
      <div class="redio"><img src="/static/imgs/home/yx-topic-1552273885657s9yaqd16.jpg"></div>
      <div class="bottom">
        <i class="iconfont icon-xiugaimimaxiaoyanjing-copy"></i>
        <span>21.2k人看过</span>
      </div>
    </div>
    <Split/>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #picContainer
    height 100%
    width 100%
    border-bottom  1px solid #eee
    padding-top 20px
    .head
      background #eee
      display flex
      width 100%
      height 75px
      .h-left
        .iconfont
          font-size  45px
          height 75px
          line-height 75px
          margin-left 20px
      .h-mid
        margin 0 auto
        padding-top 10px
        .item
          margin-left 15px
          font-size 26px
          vertical-align middle
          &.active
            font-size 40px
            color #f00
            font-weight bold



      .h-right
        .iconfont
          font-size  50px
          height 75px
          line-height 75px
          margin-right 20px



    .daohang
      width 100%
      height 90px
      ul
        display flex
        height 46px
        li
          margin 0 auto
          padding-top 30px
          a
            display inline-block
            font-size 24px
            height 36px
            padding-bottom 10px
            &.active
              color red
              border-bottom 1px solid red
    .top
      width 100%
      height 620px
      line-height 50px
      .pic
        height 28px
        margin 25px
        line-height 20px
        .pic_wrap
          float left
          display flex
          align-items center
          img
            border-radius 50%
          span
            display inline-block
            margin-left 10px


      .title
        font-size 35px
        padding:20px;
      .redio
        img
          display inline-block
          width 640px
          margin 5px 57px
      .bottom

        color #999
        margin -8px 40px
        .iconfont
          font-size 30px
          //display inline-block







</style>
