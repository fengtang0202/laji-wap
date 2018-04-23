<template>
   <div id="load">
        <div class="div_top">
            <img src="../../assets/images/ico@2x.png" @click="handleTo({path:'/'})" class="logo_two">
            <downApp></downApp>
        </div>
   </div>
</template>
<script>
   export default {
        name: 'load',
        data () {
            return {
            }
        },
        methods:{
            handleTo(res){
                 this.$router.push(res);
            }
        }
   }
</script>
<style lang="less" scoped>
  #load{
        width:100%;
        background-color: #fff; 
        .div_top{
            width:100%;
            height:.5rem;
             .logo_one{
                width:.24rem;
                height:.24rem;
                margin-top:.2rem;
                margin-left:.14rem;
                float:left;
            }  
            .logo_two{
                width:.92rem;
                height:.24rem;
                margin-top:.1rem;
                float:left;
                vertical-align: middle;
                margin-left:.14rem;
            }
            .btn_top{
            width:.64rem;
            height:.26rem;
            border-radius:5px;
            background:#FB5E6F;
            font-size:.14rem;
            line-height: .26rem;
            color:#fff;
            text-align:center;
            float:right;
            margin-right:.14rem;
            margin-top:.14rem;
            }  
        }
  }
</style>
