<template> 
  <div class='wechat'>
      <headerComponent :list='topList'></headerComponent>
      <div class='money_category_wrap'>
            <div class=' '>

            </div>
      </div>    
  </div>
</template>
<script>
import headerComponent from '@/components/common/header'
export default{
  components:{
     headerComponent
   },
     data(){
      return{
       topList:{
           title_1:"微信支付",
           title_2:"首页",
           link:'/home'
       }
    }  
  }
}
</script>
<style scoped lang='less'>
   .wechat{
       width:100%;
       font-family: PingFangSC
   }
</style>
