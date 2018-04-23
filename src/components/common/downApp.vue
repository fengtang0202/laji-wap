<template>
   <div class="btn_top" @click="handleIsPhone()">下载APP</div>
</template>
<script>
     export default{
         methods: {
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
     .btn_top{
                width:.66rem;
                height:.24rem;
                border-radius:5px;
                background:#FB5E6F;
                font-size:.14rem;
                color:#fff;
                text-align:center;
                line-height:.24rem;
                float:left;
                margin:.12rem .14rem 0;
            }
</style>
