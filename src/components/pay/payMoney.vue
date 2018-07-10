<template>
   <div class='buyChapter'>
         <headerComponent :list='topList'></headerComponent>
         <div class='buy_detail'>
            <p class='bookName'>账户:{{userInfo.userPhone}}</p>
            <p>账户余额:{{feedPepper}}</p> 
         </div>
         <p class='buyMay'>选择充值方式</p>
         <div class='buy' >
             <div class='zfb' @click='handleTap("/alipay")' v-if='isShowAlipay'>
                <img src="../../assets/images/zfb@2x.png" alt="">
                <span>支付宝</span>
             </div>
             <!--  目前不支持 -->
             <div class='wx' @click='handleTap("/wechatPay")' :style="{width:isShowAlipay?'1.58rem':'80%'}">
                 <img src="../../assets/images/wx@2x.png" alt="">
                 <span>微信</span>
             </div>
         </div>
    </div>
</template>
<script>
import headerComponent from '@/components/common/header'
import { Post_formData2,noParam_Get} from '@/config/services'
import {refshUserInfo} from '../../config/getData'        
import {mapState} from 'vuex'
    export default {
        components:{
          headerComponent
        },
        computed: { 
          ...mapState(['userInfo','feedPepper','isLogin'])  
        },
        data () {
          return{
              topList:{
                  title_1:'充值',
                  title_2:'首页',
                  link:'/',
                  html:''
              },
              alipayData:'',
              isShowAlipay:true
          }
       },   
       methods: {
           handleAlipay(){
               let options={
                username:this.userInfo.userName,
                apymentType:3,
                WIDtotal_amount:1
               }
             Post_formData2(this,options,'/api/payment-alipaywap',res=>{
                 this.html=res.data
            })
         },
           handleTap(res) {
           //
            //    var agent = navigator.userAgent.toLowerCase();
            //    if(res==='/wechatPay'){
            //         if (agent.match(/MicroMessenger/i) == "micromessenger") {
            //         this.$vux.toast.text('微信支付维护中,请打开浏览器使用支付宝支付')
            //        }else{
            //         this.$vux.toast.text('微信支付维护中,请使用支付宝支付')                     
            //        }
            //         return;
            //    }
            //    以上是微信支付出问题的
                this.$router.push(res)
           }
       },
       mounted () {
          var agent = navigator.userAgent.toLowerCase();
          if (agent.match(/MicroMessenger/i) == "micromessenger") {
                    this.isShowAlipay=false  
            }
           if(this.isLogin){
               refshUserInfo()
           } 
       }
    }
</script>
<style lang='less' scoped>
    .buyChapter{
         width:100%;               
        p{
            margin-left:.13rem;
            margin-top:.1rem;
        }
      .buy_detail{
         height:.8rem;
         border-bottom:.06rem solid #E9E9E9;
         font-size:.16rem; 
         .bookName{
             font-size:.18rem;
             color:#333;
         } 
       }
       .buyMay{
           margin:.2rem .1rem;
           color:#999;
       }  
       .buy{
           margin-left:.1rem;
           div {
               width:1.58rem;
            //    width:80%;
               height:.62rem;
               margin: 0 auto;
               border:1px solid #FB5E6F;
               border-radius: .04rem;
               float:left;
               background-color: #fff;
               line-height: .62rem;
               text-align: center;
               img{
                   width:.44rem;
                   height:.44rem;
                   vertical-align:middle;
               }
           }
           .wx {
               margin-left:.35rem;
           }
       }
    }
</style>
