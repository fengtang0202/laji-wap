<template>
     <div class='header'>
         <div @click="$router.go(-1)">
             <img src="../../assets/images/back@2x.png" style='width:.4rem;heigh:.4rem;vertical-align: middle;' alt="">
         </div>    
         <div class='title_1'>个人中心</div>
         <div class='title_2'>作者中心</div>
     </div>
</template>
<script>
      export default {
           data(){
               return{

               }
           }
      }
</script>
<style lang='less' scoped >
  .header{    
            height:.44rem;
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            border-bottom:.01rem solid #E9E9E9;
             .title_1{
              font-size: .18rem;
          }
          .title_2{
              font-size: .14rem;
              color:#F77583;
          }
         div{
            margin:auto .1rem;       
          }
        }
</style>
