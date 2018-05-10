<template>
   <div class='deal_wrap'>
       <headerComponent :list='topList'></headerComponent>
       <div class='tab'>
           <div class='tab_item' @click='handleGo(item.link,index)' :class='{add:tabIndex==index}' v-for='(item,index) in itemList' :key='index'>
               {{item.title}}
           </div>
       </div>
       <router-view></router-view>
   </div>
</template>
<script>
    export default {
       data(){
           return {
               topList:{
                   title_1:'交易记录',
                   title_2:'首页',
                   link:'/'
               },
               tabIndex:0,
               itemList:[
                   {title:'充值记录',link:'/dealManage'},
                   {title:'订阅记录',link:'/dealManage/subscriptionRecord'},
                   {title:'金椒记录',link:'/dealManage/pepperRecord'},
                   {title:'打赏记录',link:'/dealManage/rewordRecord'},
                   {title:'小米椒记录',link:'/dealManage/minPepper'}
               ]
           }
       },
       methods:{
           handleGo(res,index){
               this.tabIndex=index
               this.$router.replace(res)
           },
           getIndex(){
               let i= this.$route.path
               switch(i){
                     case '/dealManage':
                     this.tabIndex=0
                     break;
                      case '/dealManage/subscriptionRecord':
                     this.tabIndex=1
                     break;
                      case '/dealManage/pepperRecord':
                     this.tabIndex=2
                     break;
                      case '/dealManage/rewordRecord':
                     this.tabIndex=3
                     break;
                      case '/dealManage/minPepper':
                     this.tabIndex=4
                     break;
               }
           }
       },
       mounted () {
           this.getIndex()
       }
    }
</script>
<style lang="less" scoped>
    .tab{
        width:100%;
        height:.44rem;
        border-bottom:1px solid #e9e9e9;
    .tab_item{
        width:20%;
        float: left;
        font-size:.14rem;
        height:.44rem;
        line-height: .44rem;
        text-align: center;
        
      }
      .add{
            border-bottom:2px solid #F77583;
            color:#F77583;
         }
    }
</style>
