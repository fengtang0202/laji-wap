<template>
   <div id="load">
        <div class="div_top">
            <img src="../../assets/images/ico@2x.png" @click="handleTo({path:'/'})" class="logo_two">
            <div class="btn_top"  @click="handleIsPhone()">下载APP</div>
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
            },
            handleIsPhone(){
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if(isAndroid){
               window.location.href='https://www.lajixs.com/apk/app.apk'
            }
            if(isiOS){
               alert('i am ios')
             }
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
