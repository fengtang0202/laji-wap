<template>
    <div id="download">
        <div class='download_bg'>
            <div class='btn_wrap'>
               <img @click='handleIsPhone()' src="../../assets/images/android@3x.png" alt="">
               <img @click='handleIsPhone()' src="../../assets/images/iosbtn@3x.png" alt="">
            </div>
       </div>
    </div>
</template>
<script>
  export default {
        name: 'home',
        data () {
            return {
    
            }
        },
        methods:{
          handleIsPhone(){
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if(isAndroid){
               window.location.href='https://www.lajixs.com/apk/app.apk'
            }
            if(isiOS){
            //    alert('i am ios')
            }
            }
        },
        mounted () {
            // this.handleIsPhone()
        }
    }
</script>

<style lang="less" scoped>
  #download{
        width:100%;
        height:100%;
        box-sizing:border-box;
        font-family:'PingFangSC-Regular';
        .download_bg{
            width:100%;
            height:100%;
            background-image:url('../../assets/images/down_app.png') ;
            background-size: 100% 100%;
            position: relative;
            .btn_wrap{
                position: absolute;
                width:1.06rem;
                top:40%;
                right:5%;
                img{
                    width:1.06rem;
                    height:.38rem;
                    margin-top:.1rem;
                }
            }
        }
  }
</style>