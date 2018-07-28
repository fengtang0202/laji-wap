<template>
    <XDialog dialog-width='100%' :dialog-style="{'max-width': '100%', width: '100%', 'background-color': 'transparent'}" v-model="$store.state.showLoginDate" @on-hide='handle()' hide-on-blur>
         <div class='login_wrap'>
              <ul class='loginMethods'>
                 <li v-for="(item,index) in loginMethods" :style='{width:2.7/loginMethods.length+"rem"}' @click='handleLogin(item.code)' :key=index>
                        <img style='width:.42rem;height:.42rem' :src="item.img" alt="">
                           <br>
                        <span>{{item.text}}</span>
                 </li>
              </ul>
              <p style='height:1px;width:2.5rem;background:#E0E0E0;margin:0 auto;'></p>
              <div class='qt_methods' @click='handleGo()'>
                  其他方式登录>>
              </div>
         </div>
   </XDialog>  
</template>
<script>
import { XDialog ,TransferDomDirective as TransferDom } from 'vux'
import {mapActions} from 'vuex'
export default {
  directives: {
    TransferDom
  },
  components: {
    XDialog
  },
  data(){
      return{
          showdow:true,
          loginMethods:[
              {img:require('../../assets/images/qqlogin.png'),text:'QQ登录',code:0},
              {img:require('../../assets/images/wxlogin.png'),text:'微信登录',code:1},
              {img:require('../../assets/images/wblogin.png'),text:'微博登录',code:2},
          ]
      }
  },
  methods: {
     ...mapActions(['setshowLoginDate']),
     handle(){
        this.setshowLoginDate(false)
     },
     handleGo(){
         this.setshowLoginDate(false)
         this.$router.push('/Login')
     },
     handleQQLogin(){
        console.log('qq登录') 
        window.location.href='https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=101492186&redirect_uri='+encodeURIComponent("http://lgxs.ngrok.xiaomiqiu.cn/api/person-LaJiXiaoShuoPCQQLogin")+"&state=qq_login"
     },
     handleWxLogin(){
        window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2801b6505158a732&redirect_uri="+encodeURIComponent(window.location.href)+"&response_type=code&scope=snsapi_userinfo&state=weixin_login&connect_redirect=1#wechat_redirect"
        console.log('微信登录')
     },
     handleWbLogion(){
        window.location.href="https://api.weibo.com/oauth2/authorize?client_id=322035674&redirect_uri="+encodeURIComponent('https://www.lajixs.com/mob/Login')+"&state=sina_login" 
        console.log('微博登录')
     },
     handleLogin(type){
         type==0&&this.handleQQLogin()
         type==1&&this.handleWxLogin()
         type==2&&this.handleWbLogion()
     }  
  },
  mounted () {
       var agent = navigator.userAgent.toLowerCase();
       if (agent.match(/MicroMessenger/i) != "micromessenger") {
             this.loginMethods.splice(1,1)
       }
  }
}
</script>
<style lang="less" scoped>
   .login_wrap{
       height:1.86rem;
       width:2.7rem;
       background:#fff;
       margin:0  auto;
       box-shadow: 0 0 8px #F77583;
       border-radius: 8px;
   }
   .loginMethods{
       width:100%;
       height:1.36rem;
       li{
           float:left;
           list-style: none;
           font-size:12px;
           margin-top:.5rem;
         }
   }
   .qt_methods{
       width:2.7rem;
       height:.49rem;
       line-height: .49rem;
   }
</style>
