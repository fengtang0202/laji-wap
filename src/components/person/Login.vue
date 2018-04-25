<template>
    <div id="Login">
        <app-load></app-load>
        <div class="title">登录</div>
        <input type="text" class="oInput"   placeholder="请输入手机号" v-model.trim="phone">
        <input type="password" class="oInput" placeholder="请输入密码"  v-model.trim="password">
        <div class="re_radio">
            <img src="../../assets/images/login.png" class="left_d" v-if="show" @click="handleCheck()">
            <img src="../../assets/images/select_login.png" class="left_d" v-if="!show" @click="handleCheck()">
            <p @click="handleCheck()">自动登录</p>
            <div class="right_d" @click="handleRouter({path:'/password'})">忘记密码</div>
        </div>
        <div class="login" @click="loginIn()">登录</div>
        <div class="register" @click="handleRouter({path:'/register'})">快速注册</div>
    </div>
</template>

<script>
    import { Group,XInput } from 'vux'
    import { Post_formData2, Param_Get } from '@/config/services'
    import cookie from '@/config/cookie'
    import { mapActions,mapState } from 'vuex' 
    import md5  from 'js-md5'      
    import { setTimeout } from 'timers';
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
              show:true
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
            ...mapState(['isLogin','userName','avatar','userId','sex','vipGrade','fans'])
        },
        methods:{
            ...mapActions(['loginAction','updateName',
            'updateAvatar','updateUserId','getSex','getvipGrade','setFans','getUserInfo',"changeUserPhone",'getUserMoney'
            ]),
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
                        Post_formData2(this,options,'/api/person-login',res=>{
                                if(res.returnCode==200){
                                      let userInfo=res.data
                                    this.loginAction(true)
                                    this.getUserInfo(userInfo)
                                    this.$vux.toast.text('登录成功!')
                                    setTimeout(()=>{
                                        this.$router.push(this.$route.query.redirect||'/')
                                    },1000)
                                }else if(res.returnCode==500){
                                    this.$vux.toast.text(res.msg);
                              }
                          })
                    // }else if(!checkPhone.test(this.phone)){
                    //      this.$vux.toast.text('请输入正确的手机号')
                    // }else if(!checkPassword.test(this.password)){
                    //     this.$vux.toast.text('请输入6-20位的密码')
                    // }
            }
        },
        created(){

        },
        mounted(){
            if(cookie.get().userPhone){
               this.phone = cookie.get().userPhone;
               this.password = cookie.get().userPassword;
               this.show=false;
            }
            // this.$nextTick(()=>{
            //     this.$refs.input.focus()
            // })
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
