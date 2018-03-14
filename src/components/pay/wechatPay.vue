<template>
  <div class='wechat'>
      <headerComponent list='list'></headerComponent>
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
       list:{
           title_1:"微信支付",
           title_:"首页",
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
