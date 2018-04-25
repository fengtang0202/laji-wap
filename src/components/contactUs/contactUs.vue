<template>
    <div id="contactUs">
         <div id="load">
            <div class="div_top">
                  <img src="../../assets/images/back@2x.png" @click='$router.go(-1)' style='float:left;width:.44rem;height:.44rem;' alt="">
                  <downApp></downApp>
            </div>
         </div>
         <div class="title">
                <img src="../../assets/images/ico@2x.png" @click="handleTo({path:'/'})" class="logo_two">
         </div>
         <div class="text">
             <img src="../../assets/images/erweima@2x.png"  style='border:1px dashed;width:2.15rem;height:2.15rem;' alt="">
             <p class='weixin_name'>打开微信搜索“辣鸡小说”</p>
             <p class='text_detail'>
                 或识别图中二维码关注辣鸡小说公众号可直接咨询您想要了解的问题哦！
             </p>
               <img src='../../assets/images/us@3x.png' class="oImg">     
         </div>
    </div>
</template>

<script>
    export default {
        name: 'contactUs',
        data () {
            return {}
        }
    }
</script>

<style lang="less">
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
    #contactUs {
        width:100%;
        height:100%;
        text-align: center;
        span{
            display: block;
            font-size:30px;
            margin:40px;
        }
        .title{
            width:100%;
            height:.5rem;
            border-top:.2px solid #e9e9e9; 
            border-bottom:.2px solid #e9e9e9; 
            text-align:center;
            line-height:.5rem;
            font-size:.18rem;
            margin-bottom:.2rem;  
             .logo_two{
                width:.92rem;
                height:.24rem;
            }
        }
        .text{
            width:3.04rem;
            height:3.77rem;
            margin:.2rem auto;
            border-radius:7px;
            border:1px solid #FB5E6F;
            font-size:.16rem;
            color:#333;
            box-sizing:border-box;
            padding:.17rem  .17rem;
            position:relative;
            .oImg{
                position:absolute;
                top:3rem;
                left:2.2rem;
                width:1.07rem;
                height:1.1rem;
            }
            .weixin_name{
                font-size: .18rem;
            }
            .text_detail{
               width:2.24rem;
               height:.66rem;
               font-size:.16rem;
               margin:0 auto;
            }
        }
    }
</style>