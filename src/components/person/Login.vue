<template>
    <div id="Login">
        <app-load></app-load>
        <div class="title">登录</div>
        <input type="text" class="oInput"   placeholder="请输入手机号或用户名" v-model.trim="phone">
        <input type="password" class="oInput" @keyup.enter="loginIn()" placeholder="请输入密码"  v-model.trim="password">
        <div class="re_radio">
            <img src="../../assets/images/login.png" class="left_d" v-if="show" @click="handleCheck()">
            <img src="../../assets/images/select_login.png" class="left_d" v-if="!show" @click="handleCheck()">
            <p @click="handleCheck()">自动登录</p>
            <div class="right_d" @click="handleRouter({path:'/password',query:{value:86}})">忘记密码</div>
        </div>
        <div class="login"     @click="loginIn()">登录</div>
        <div class="register" @click="handleRouter({path:'/register',query:{value:86,redirect:jumpLink}})">快速注册</div>
    </div>
</template>

<script>
    import { Group,XInput } from 'vux'
    import { Post_formData2, Param_Get } from '@/config/services'
    import cookie from '@/config/cookie'
    import { mapActions,mapState } from 'vuex' 
    import md5  from 'js-md5'      
    import {userLogin} from '@/config/getData'
    import axios from 'axios'
    export default {
        name: 'login',
        components: {
            Group,
            XInput,
        },
        data () {
            return {
              value:'',
              phone:'',
              password:'',
              show:true,
              jumpLink:this.$route.query.redirect
            }
        },
        directives: {
            focus: {
                inserted (el, {value}) {
                    if (value) {
                        el.focus();
                          }
                     }
            }
        },
         computed: {
            ...mapState(['isLogin'])
        },
         beforeRouteLeave(to, from, next) {
            if (to.path == "/"||to.path=='/bookDetails') {
                    to.meta.keepAlive = false;
                }else {
                    to.meta.keepAlive = true;
                }
            next();
        },
        beforeRouteEnter(to, from, next){
               next(vm=>{
                   
               })
        },
        methods:{
            ...mapActions(['loginAction','getUserInfo','setfeed','setfeedPepper','setminPepper']),
            handleRouter(res){
                this.$router.push(res)
            },
            handleLogin(){
                this.$vux.toast.text('网络异常，请稍后再试')
            },
            handleCheck(){
                this.show = !this.show;
                if(!this.show){
                    cookie.set({
                        name: 'userPhone',
                        value: this.phone,
                        path: '/',
                        day: 7
                    });
                    cookie.set({
                        name: 'userPassword',
                        value: md5(this.password),
                        path: '/',
                        day: 7
                    });
                }else{
                     cookie.delete('userPhone')
                     cookie.delete('userPassword')
                }
            },
            loginIn(){
                var self = this;
                // let checkPhone=/^1(3|4|5|6|7|8|9)\d{9}$/;
                // let checkPassword = /^.{6,20}$/;
                // if (checkPhone.test(this.phone)) {
                        let options={
                            userName:this.phone,
                            userPassword:this.password.length>20?this.password:md5(this.password),
                            terminal:3
                        }
                        userLogin(options).then(res=>{
                            if(res.returnCode==200){
                               let userInfo=res.data
                               this.loginAction(true)
                               this.getUserInfo(userInfo)
                               this.setfeed(userInfo.userGoldenTicket)
                               this.setfeedPepper(userInfo.userMoney)
                               this.setminPepper(userInfo.userRecommendTicket)
                                localStorage.setItem('SESSION',userInfo.token)
                               this.$vux.toast.text('登录成功!') 
                               this.$router.go(-1)
                            }else{
                               this.$vux.toast.text(res.msg)
                            }
                        })
              }
        },
        mounted(){
            if(cookie.get().userPhone){
               this.phone = cookie.get().userPhone;
               this.password = cookie.get().userPassword;
               this.show=false;
            }
          if (!this.isLogin) {
               var code,LoginState
               let href=window.location.href
               var userCode=sessionStorage.getItem('pi')||'LG20180608000'
            if(href.indexOf("state=qq_login")>0||href.indexOf("state=weixin_login")>0||href.indexOf("state=sina_login")>0){
                href.split("?")[1].split("&").forEach((elem)=>{
                    if(elem.split("=")[0]=="code"){
                        code = elem.split("=")[1];
                    }
                    if(elem.split("=")[0]=="state"){
                        LoginState = elem.split("=")[1]
                    }
                })
            }
            console.log('当前登录是:'+(LoginState||'手机号登陆'))
            if(LoginState=='sina_login'){ 
                if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))) { // 来自移动端 
                     Post_formData2(this,{
                        code:code,
                        userCode:userCode,terminal:1,backurl:"https://www.lajixs.com/mob/Login"},'/api/person-LaJiXiaoShuoWEBSinaLogin',res=>{
                        if(res.returnCode==200){
                            let userInfo=res.data
                            this.loginAction(true)
                            this.getUserInfo(userInfo)
                            localStorage.setItem('SESSION',userInfo.token)
                            this.setfeed(userInfo.userGoldenTicket)
                            this.setfeedPepper(userInfo.userMoney)
                            this.setminPepper(userInfo.userRecommendTicket)
                        }else{
                            this.$vux.toast.text('请重新登录')
                       }
                        if(res.data.loginCount==1){
                            this.$router.go(-2) 
                        }else{
                            this.$router.go(-1)
                        }
                   }) 
                 }else{
                    window.location.href="https://www.lajixs.com/index?code="+code+"&state=sina_login"
                }
            }
            // qq登录
            if(LoginState=='qq_login'){
                console.log('qq登录')
                Post_formData2(this,{
                    code:code,
                    userCode:userCode,terminal:1,backurl:"https://www.lajixs.com/mob/Login"},
                    '/api/person-LaJiXiaoShuoPCQQLogin',res=>{
                    if(res.returnCode==200){
                        var userInfo=res.data
                        this.loginAction(true)
                        this.getUserInfo(userInfo)
                        this.setfeed(userInfo.userGoldenTicket)
                        this.setfeedPepper(userInfo.userMoney)
                        this.setminPepper(userInfo.userRecommendTicket)
                        localStorage.setItem('SESSION',userInfo.token)
                        this.$router.push('/')
                    }else{
                        this.$vux.toast.text('请重新登录')
                    } 
                        this.$router.push('/')
                })                    
            }
            // 微信登录
            if(LoginState=="weixin_login"){
                let options={
                    code:code,
                    userCode:userCode,
                    terminal:1
                }
                Post_formData2(this,options,'/api/person-LaJiXiaoShuoWAPWeChatLogin',res=>{
                   if(res.returnCode==200) {
                        let userInfo=res.data
                        this.loginAction(true)
                        this.getUserInfo(userInfo)
                        this.setfeed(userInfo.userGoldenTicket)
                        this.setfeedPepper(userInfo.userMoney)
                        localStorage.setItem('SESSION',userInfo.token)
                        this.setminPepper(userInfo.userRecommendTicket)
                    }else{
                        this.$vux.toast.text('请重新登录')
                    }
                     this.$router.go(-1)
                     window.addEventListener("popstate", function(e){
                            this.$router.go(0)   
                    }, false); 
                })
            }
          }else{
              this.$router.go(-1)
          }
        }
    }
</script>
<style lang="less" scoped>
   #Login{
        width:100%;
        height:6.67rem;
        background-color: #fff;
        font-family:'PingFangSC-Regular';
        .title{
            width:100%;
            height:.6rem;
            border-top:.2px solid #e9e9e9;
            border-bottom:.2px solid #e9e9e9;
            text-align:center;
            line-height:.6rem;
            font-size:.18rem;
            color:#333;
            margin-bottom:.2rem;
        }
        .oInput{
            width:3.04rem;
            height:.44rem;
            border-radius:4px;
            border:1px solid #979797;
            display:block;
            margin:.2rem auto;
            // caret-color:red; 
            color:#999;
            font-size:.18rem;
            padding-left:.14rem;
        }
        .re_radio{
            width:100%;
            height:.4rem;
            box-sizing:border-box;
            padding:0 .37rem;
            line-height: .4rem;
            .left_d{
                width:.4rem;
                height:.4rem;
                float:left;
                vertical-align: middle;
            }
            p{
                float:left;
                color:#F77583;
                font-size:.16rem;
            }
            .right_d{
                float:right;
                color:#F77583;
                font-size:.16rem;
            }
        }
        .login{
            width:3.04rem;
            height:.44rem;
            background:#F77583;
            text-align:center;
            color:#fff;
            font-size:.18rem;
            line-height:.44rem;
            margin:.2rem auto;
            border-radius:4px;
        }
        .register{
            width:3.04rem;
            height:.44rem;
            border:1px solid #F77583;
            text-align:center;
            color:#F77583;
            font-size:.18rem;
            line-height:.44rem;
            margin:0 auto;
            border-radius:4px;
        }
    }

</style>
