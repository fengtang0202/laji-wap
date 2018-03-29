<template>
   <div class='buyChapter'>
         <headerComponent :list='topList'></headerComponent>
         <div class='buy_detail'>
            <p class='bookName'>{{buyChapter.bookName}}</p>
            <p>{{buyChapter.ChapterName}}</p> 
            <p>本章价格:{{buyChapter.price}}&nbsp;辣椒</p>
            <p>余额:{{buyChapter.yue}}&nbsp;辣椒</p>
         </div>
         <p class='buyMay'>选择充值方式</p>
         <div class='buy'>
             <div class='zfb' @click='handleZfb(1)'>
                <img src="../../assets/images/zfb@2x.png" alt="">
                <span>支付宝</span>
             </div>
             <div class='wx' @click='handleZfb()'>
                 <img src="../../assets/images/wx@2x.png" alt="">
                 <span>微信</span>
             </div>
         </div>
    </div>
</template>
<script>
import headerComponent from '@/components/common/header'
    export default {
        components:{
          headerComponent
        },
        data () {
          return{
              topList:{
                  title_1:'购买章节',
                  title_2:'首页',
                  link:'/home'
              },
              buyChapter:{
                  bookName:'总裁请克制',
                  ChapterName:'第十一章 将军',
                  price:5,
                  yue:0
              }
          }
       },
       methods: {
           handleZfb (res) {
              if(res){
                  console.log('支付宝')
              }else{
                  console.log('微信')
              }
           }
       }
    }
</script>
<style lang='less' scoped>
    .buyChapter{
         width:100%;               
        p{
            margin-left:.13rem;
            margin-top:.1rem;
        }
      .buy_detail{
         height:1.48rem;
         border-bottom:.06rem solid #E9E9E9;
         color:#999;  
         font-size:.16rem; 
         .bookName{
             font-size:.18rem;
             color:#333;
         } 
       }
       .buyMay{
           margin:.2rem .1rem;
           color:#999;
       }  
       .buy{
           margin-left:.1rem;
           div {
               width:1.58rem;
               height:.62rem;
               border:1px solid #FB5E6F;
               border-radius: .04rem;
               float:left;
               background-color: #fff;
               line-height: .62rem;
               text-align: center;
               img{
                   width:.44rem;
                   height:.44rem;
                   vertical-align:middle;
               }
           }
           .wx {
               margin-left:.35rem;
           }
       }
    }
</style>
