<template>
   <div class='pay'>
     <headerComponent :list='topList'></headerComponent>
     <div class='pay_detail'>

     </div>
   </div>
</template>
<script>
   export default {
       data () {
           return {
                 topList:{
                     title_1:'充值',
                     title_2:'首页',
                     link:'/home'
                 }
           }
       }
   }
</script>
<style lang='less' scoped>
   
</style>
