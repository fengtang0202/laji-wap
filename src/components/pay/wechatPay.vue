<template> 
<keep-alive>
  <div class='wechat'>
      <headerComponent :list='topList'></headerComponent>
      <div class='pay_category_wrap'>
            <div class='pay_category'  :key='index'  v-for="(item,index) in payCategoryList" :class="{isAdd:isAddTo===index}" @click='handelTap(index,item.price)'>
                 <p class='price'>{{item.price+'元'}}</p>
                 <p class='price'>{{item.price*100+'小辣椒'}}</p>
                 <p class='gift'>{{item.gift}}</p> 
                 <span class='icon' v-if='item.gift?true:false'>赠送</span>         
            </div>
      </div>  
      <div v-transfer-dom >
      <popup v-model="show" style='height:2rem;'>
        <div class="popup">
           <p style='color:#FB5E6F;font-size:.28rem;text-align:center;margin:.13rem 0;'>¥{{price}}</p>
           <div style='overflow:hidden;border-bottom:1px solid #EFEFEF;'>
              <p style='color:#666666;font-size:.16rem;float:left;margin-left:.14rem'>可用余额:{{feedPepper}}</p>
              <p style='color:#4A90E2;font-size:.12rem;float:right;margin-right:.14rem;'>每充值20元送1个金椒</p>
           </div>
            <p style='text-align:center;margin-top:.1rem;'>
              <button @click='pay()' style='border:0;outline:none;background-color:#F77582;width:80%;height:.4rem;border-radius:.4rem;color:#fff;'>立即支付</button>
           </p>
        </div>
      </popup>
    </div>  
  </div>
</keep-alive>  
</template>
<script>
 import {TransferDom,Popup} from 'vux'
 import {mapState } from 'vuex'
 import {Post_formData2} from '../../config/services'
 import {refshUserInfo} from '../../config/getData'  
 import axios from 'axios'      
import { clearInterval } from 'timers';
 export default{
     data(){
      return{
       topList:{
           title_1:"微信支付",
           title_2:"首页",
           link:'/'
       },
       price:6,
       isAddTo:0,
       show:false,
       config:'',
       payCategoryList:[
           {price:6,gift:''},
           {price:12,gift:''},
           {price:30,gift:'送150辣椒券'},
           {price:50,gift:'送300辣椒券'},
           {price:98,gift:'送800辣椒券'},
           {price:198,gift:'送1800辣椒券'},           
       ]
    }  
  },
   components:{
       Popup
  },
   directives: {
    TransferDom
  },
  computed:{
     ...mapState(['userInfo','isLogin','feedPepper'])
  },
  methods: {
      handelTap(index,price){
           this.isAddTo=index
           this.show=true
           this.price=price
      },
      pay(){
           var agent = navigator.userAgent.toLowerCase();
           let options={
              userId:this.userInfo.userId,
              nickName:this.userInfo.pseudonym,
              userPayMoney:this.price,
              channelId:this.userInfo.userCode,
              rechargeChannelId:sessionStorage.getItem('pi')||'LG20180608000',
          }
          if (agent.match(/MicroMessenger/i) != "micromessenger") {
                Post_formData2(this,options,'/api/WeChatPay/h5WebPayment',res=>{
                    let config=res.data
                    let pay_url=res.data.mweb_url+"&redirect_url="+encodeURIComponent("https://www.lajixs.com/mob/person")
                    window.location.replace(pay_url)
             })
         }else{
          window.location.replace('https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx0d80269db309ad18&redirect_uri='+encodeURIComponent("https://www.lajixs.com/mob/wechatPay")+"&response_type=code&scope=snsapi_base&state=wxChat"+this.price+'#wechat_redirect')
         }
      },
      onBridgeReady(){
           WeixinJSBridge.invoke(
               'getBrandWCPayRequest', {
                    "appId":this.config.appid,     //公众号名称，由商户传入   
                    "timeStamp":this.config.timeStamp,      //时间戳，自1970年以来的秒数              
                    "nonceStr":this.config.nonceStr, //随机串  
                    "package":"prepay_id="+this.config.prepayid, 
                    "signType":"MD5",       //微信签名方式：
                    "paySign":this.config.sign, //微信签名      
               },
              function(res){
                if(res.err_msg == "get_brand_wcpay_request:ok" ) {
                    this.$vux.toast.text("充值成功!")
                    window.location.href ="https://www.lajixs.com/mob/myWallet";
                }     
                if(res.err_msg == "get_brand_wcpay_request:fail" ) {

                }   
                if(res.err_msg == "get_brand_wcpay_request:cancel" ) {

                        }   
                    }
                 )
          },
         handleIndex(i){
            switch(i){
                   case '6':
                     this.isAddTo=0;
                     break;
                   case '12':
                     this.isAddTo=1
                     break;
                   case '30' :
                     this.isAddTo=2
                     break;
                    case '50' :
                    this.isAddTo=3
                    break;
                     case '98' :
                    this.isAddTo=4
                    break;
                    case '198' :
                    this.isAddTo=5
                    break;
            } 
       },
    //通过渠道id 来修改起充数
     changeMoney(){
         //1获取渠道标识
         let pi = sessionStorage.getItem('pi')
         var agent = navigator.userAgent.toLowerCase();
         //判读是否在微信内部浏览器中 以及渠道id来修改起充数
          if (agent.match(/MicroMessenger/i) == "micromessenger") {
              this.payCategoryList=this.payCategoryList.slice(1)
          }
      }
  },
 mounted () {
     if(this.isLogin){
         this.changeMoney()
         refshUserInfo()
         if(window.location.href.indexOf("state=wxChat")>0){
            var wxcode = '';
            window.location.href.split("?")[1].split("&").forEach((elem)=>{
                 if(elem.split("=")[0]=="code"){
                    wxcode = elem.split("=")[1];
                }
                if(elem.split("=")[0]=="state"){
                    this.price = elem.split("=")[1].substring(6)
                    //由于微信支付的回调地址所以我们要调用这里的handleIndex
                    this.handleIndex(this.price)
                }
            })
            axios.get(`/api/WeChatPay/getWeChatOpenid?code=${wxcode}`).then(res=>{
                // if(res.returnCode===200){
               let appid= res.data.data.openid
               axios.get(`/api/WeChatPay/wxPublicNumberPay?userId=${this.userInfo.userId}&openid=${appid}&nickName=${this.userInfo.pseudonym}&channelId=${this.userInfo.userCode}&rechargeChannelId=${sessionStorage.getItem('pi')||'LG20180608000'}&userPayMoney=${this.price}`).then(res=>{
                  this.config=res.data.data
                  this.onBridgeReady();
                  let a=0
                  let timer=setInterval(()=>{
                       a+=1
                       axios.get('/api/WeChatPay/getPayResultInfo?out_trade_no='+this.config.out_trade_no).then(res=>{
                            if(res.data.returnCode===200&&res.data.data.isOK==1){
                                this.$router.go(-3)        
                            }
                       })
                       if(a==5){
                        clearInterval(timer)
                     }
                  },2000)
               })
            })
         }
     }
 }
}
</script>
<style scoped lang='less'>
   .wechat{
       width:100%;
       color: #333333;
       font-size:.16rem;
       .pay_category_wrap{
           display:flex;
           flex-direction: row;
           justify-content: space-around;
           flex-wrap:wrap;
           padding:.3rem .1rem;
       .pay_category{
           width:1.06rem;
           height:1.06rem;
           text-align: center;
           border:.01rem solid #FB5E6F;
           border-radius: .05rem;
           position: relative;
           margin-top:.3rem;
           padding-top:.3rem;
           overflow: hidden;
           .gift{
               font-size:.12rem;
               color:#FB5E6F;
           }
           .icon{
                font-size: .1rem;
                position: absolute;
                right:-.2rem;
                top: -.17rem;
                width:.6rem;
                height:.15rem;
                -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
                -webkit-transform-origin: left bottom;
                transform-origin: left bottom;
                color: #fff;
                background-color: #FB5E6F;
            }
         }
         .isAdd{
             background-color:#FB5E6F;
             color:#fff;
             .gift{
                 color:#fff;
             }
         }
       }
   }
</style>
