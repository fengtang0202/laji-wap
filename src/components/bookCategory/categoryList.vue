<template>
  <div class='category_wrap'>
     <div class="category_item_wrap" @click='handleToDetail(item.categoryId)' v-for="item in categoryList">
         <img  class='categoryPic' :src="item.img" alt="">
         <span>{{item.text}}</span>
     </div>
  </div>
</template>
<script>
       export default{
           data(){
               return {
                   categoryList:[
                       {text:'动漫幻想',img:require('../../assets/images/dmhx@2x.png'),categoryId:1},
                       {text:'异世幻想',img:require('../../assets/images/ys@2x.png'),categoryId:2},
                       {text:'同人幻想',img:require('../../assets/images/tr@2x.png'),categoryId:3},
                       {text:'都市日常',img:require('../../assets/images/dsrc@2x.png'),categoryId:4},
                       {text:'未来幻想',img:require('../../assets/images/wl@2x.png'),categoryId:5},
                       {text:'游戏竞技',img:require('../../assets/images/yxxs@2x.png'),categoryId:6},
                       {text:'历史幻想',img:require('../../assets/images/lshx@2x.png'),categoryId:7},
                       {text:'灵异悬疑',img:require('../../assets/images/ly@2x.png'),categoryId:8},
                       {text:'古风言情',img:require('../../assets/images/gf@2x.png'),categoryId:9},
                       {text:'现言小说',img:require('../../assets/images/xy@2x.png'),categoryId:10},
                       {text:'GLBL',img:require('../../assets/images/bl@2x.png'),categoryId:11}               
                     ]
               }
           },
         methods: {
             handleToDetail(res){
                this.$router.push({path:'/wechatPay',query:{categoryId:res}})
             }
         }
       }
</script>
<style lang='less' scoped>
    .category_wrap{
        width:100%;
        margin-top:.15rem;
        .category_item_wrap{
             width:.76rem;
             height:1.12rem;
             display:inline-block;
             text-align: center;
             font-size: 16px;
             margin:.16rem 0 0 .16rem;
            }
            .categoryPic{
                width:.74rem;
                height:.74rem;
                border:1px dashed;             
            }
    }
</style>
