<template>
   <div class='no_content'>
      <img  :src="source.img"  alt="">
      <p>{{source.text}}</p>
  </div>
</template>
<script>
    export default{
        data(){
            return {

            }
        },
        props:['source']
    }
</script>
<style lang="less" scoped>
 .no_content{
        text-align: center;
        font-size: .18rem;
        color:#333;
        margin-top:.2rem;
       img{
         width:2.94rem;
         height:2.94rem;
       }
   }
</style>



