<template>
   <div class='buyChapter'>
         <headerComponent :list='topList'></headerComponent>
         <div class='buy_detail'>
            <p class='bookName'>账户:{{userInfo.userPhone}}</p>
            <p>账户余额:{{userInfo.userMoney}}</p> 
         </div>
         <p class='buyMay'>选择充值方式</p>
         <div class='buy'>
             <div class='zfb' @click='handleTap(1)'>
                <img src="../../assets/images/zfb@2x.png" alt="">
                <span>支付宝</span>
             </div>
             <div class='wx' @click='handleTap()'>
                 <img src="../../assets/images/wx@2x.png" alt="">
                 <span>微信</span>
             </div>
         </div>
    </div>
</template>
<script>
import headerComponent from '@/components/common/header'
import { Post_formData2,noParam_Get} from '@/config/services'
import {mapState} from 'vuex'
    export default {
        components:{
          headerComponent
        },
        computed: { 
          ...mapState(['userInfo'])  
        },
        data () {
          return{
              topList:{
                  title_1:'充值',
                  title_2:'首页',
                  link:'/'
              },
              alipayData:''
          }
       },   
       methods: {
           handleAlipay(){
               let options={
                //    userId:this.userInfo.userId,
                //    userName:this.userInfo.userName,
                //    total_fee:1,
                //    apymentType:3	
                username:this.userInfo.userName,
                apymentType:3,
                WIDtotal_amount:1
               }
             Post_formData2(this,options,'/api/payment-alipaywap',res=>{
                console.log(res.data)
            })
           },
           handleWeChatPay () {
             console.log('微信')
           },
           handleTap(res) {
            res?this.handleAlipay():this.handleWeChatPay()
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
               height:.62rem;
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
