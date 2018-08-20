<template>
    <div>
        <Loading :show='isShow'></Loading>         
    </div>
</template>
<script>
 import {Post_formData2} from '../../config/services'
 import {Loading} from 'vux'
import {mapActions} from 'vuex'
    export default { 
        data(){
           return{
               isShow:true
           }
        },
        components:{
          Loading
        },
       methods:{
           ...mapActions(['setshowLoginDate']),
           handle(){
               let options = {
                    userId:this.$route.userId,
                    nickName:this.$route.nickName,
                    userPayMoney:this.$route.price,
                    channelId:this.$route.channelId,
                    rechargeChannelId:this.$route.rechargeChannelId,
                }
             Post_formData2(this,options,'/api/WeChatPay/h5WebPayment',res=>{
                    let config=res.data
                    let pay_url=res.data.mweb_url+"&redirect_url="+encodeURIComponent("https://www.lajixs.com/mob/person")
                    this.isShow=false
                    window.location.replace(pay_url)
             }) 
           }
       },
       mounted () {
           this.setshowLoginDate(false)
           this.handle()
       }
    }
</script>