<template>
 <div>
     <Loading :show='isShow'></Loading>
     <div v-html='formHtml'>
           
     </div>
 </div>
</template>
<script>
import {Post_formData2} from '../../config/services'
import {mapActions} from 'vuex'
import {Loading} from 'vux'
    export default {
        data () {
            return {
                isShow:true
            }
        },
        components:{
             Loading
        },
        methods:{
            ...mapActions(['setshowLoginDate']),
            handleIosRequest(){
                let options = {
                username:this.$route.query.username,
                apymentType:3,
                WIDtotal_amount:this.$route.query.price,
                channelId:this.$route.query.channelId,
                rechargeChannelId:this.$route.query.rechargeChannelId,
                }
               Post_formData2(this,options,'/api/payment-alipaywap',res=>{
                   alert(res.returnCode)
                   if(res.returnCode==200){
                        alert(res.data.form)
                        this.formHtml=res.data.form
                        //this.sessionId=res.data.sessionId
                        //localStorage.setItem('SESSION',this.sessionId)
                        this.isShow=false
                        setTimeout(()=>{
                            document.forms[0].submit()
                        },200)
                  }
               })
            }
        },
        mounted () {
            this.setshowLoginDate(false)
            this.handleIosRequest()
        }
    }
</script>
<style lang="less" scoped>

</style>
