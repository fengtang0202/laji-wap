<template>
   <div id="register">
        <app-load></app-load>
        <div class="title">注册</div>
        <div class="phoneInput">
            <div class='areaCode' @click='handleGo()' >
                <span>{{areaCode|add}}</span>
                <img src="../../assets/images/Combine@3x.png"  alt="">
            </div>
            <div class='phone_wrap'>
              <input  type="text"  placeholder="请输入手机号" v-model.trim="phone">
           </div>
        </div>
        <div class="codeInput">
            <div>
             <input type="text"  placeholder="请输入验证码" v-model.trim="verificationCode">
            </div>
             <button  class='code' :disabled='iscode' @click="getCode()">{{word}}</button>
        </div>
        <input type="password" class="oInput" placeholder="请输入密码" v-model.trim="pwd">
        <input type="text" class="oInput" placeholder="请输入昵称" v-model="name">
         <!-- <div class="codeInput">
            <div>
               <input type="text"  placeholder="请输入图片验证码" v-model.trim="imgVerificationCode">
            </div>
            <img :src="imgCode" alt="" @click='handleImg()' style="width:1.1rem;height:.4rem">
        </div> -->
        <div id='hdyz' style="width:3.04rem;margin:0 auto;"></div>
        <div class="sex">
           <div class="sex_img_l">
             <img src="../../assets/images/w.png" class="oImg" v-if="women" @click="handleWomen()">
             <img src="../../assets/images/w_select.png" class="oImg" v-if="!women" @click="handleWomen()">
             <span>女</span>
           </div>
           <div class="sex_img_r">
             <img src="../../assets/images/m.png" class="oImg" v-if="man" @click="handleMan()">
             <img src="../../assets/images/m_select.png" class="oImg" v-if="!man" @click="handleMan()">
             <span>男</span>
           </div>
        </div>
        <div class="register"  @click="handleCheckRegister()">快速注册</div>
   </div>
</template>
<script>
    import { Post_formData2, noParam_Get } from '@/config/services'
    import md5  from 'js-md5'  
    import axios from 'axios'
    import {userLogin} from '@/config/getData'
     import { mapActions,mapState } from 'vuex' 
    export default {
        name: 'register',
        data () {
            return {
               areaCode:this.$route.query.value,
               phone:'',
               pwd:null,
               name:null,
               women:true,
               man:true,
               checkName:false,
               checkPhone:false,
               sex:null,
               word:'获取验证码',
               isOvertime: false,
               verificationCode:'',
               iscode:false,
               imgCode:'',
               timer:'',
               imgVerificationCode:'',
               isImgHd:false,
               geetest_challenge:'',
               geetest_validate:'',
               geetest_seccode:''
            }
        },
        filters: {
           add(res){
              return `+${res}`
           }  
        },
         computed: {
            ...mapState(['isLogin'])
        },
        methods:{
            ...mapActions(['loginAction','getUserInfo','setfeed','setfeedPepper','setminPepper']),
            handleGo(){
                this.$router.push({path:'/areaCode',query:{type:1}})
            },  
            // 0 男 1女
            handleWomen(){
                this.women = !this.women;
                if(!this.women){
                   this.man = true;
                   this.sex = 1;
                }
            },
            handleMan(){
                this.man =!this.man;
                if(!this.man){
                   this.women = true;
                   this.sex = 0;
                }
            },
            handleCheckRegister(geetest_challenge,geetest_validate,geetest_seccode) {
                var phone = this.areaCode==86?this.phone:this.areaCode+'+'+this.phone
                let checkpwd=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/  
                if(!checkpwd.test(this.pwd)){
                     this.$vux.toast.text('密码必须有大小写字母和数字且6-18位');                     
                     return;
                }   
                if(!this.name) {
                    this.$vux.toast.text('请输入昵称');                     
                    return;
                } 
                if(this.sex==null){
                    this.$vux.toast.text('请选择性别');                     
                     return;
                }
                let imgParam={
                        client_type:'h5',
                        phoneId:this.phone
                }
                Post_formData2(this,imgParam,'/api/verification/person-ExtremeTestCode',res=>{
                        if(res.returnCode==200){
                            let config=JSON.parse(res.data)
                            initGeetest({
                                gt:config.gt,
                                challenge: config.challenge,
                                offline: !config.success,
                                new_captcha: true,
                                product: 'bind',
                            },captchaObj =>{
                                captchaObj.onReady(()=>{
                                    captchaObj.verify(); 
                                })
                               captchaObj.onSuccess(()=>{
                                var result = captchaObj.getValidate();
                                let options = {
                                code:this.verificationCode,
                                pseudonym:this.name.Trim(),
                                userPassword:md5(this.pwd),
                                userSex:this.sex,
                                userPhone:phone,
                                userCode : sessionStorage.getItem('pi')||'LG20180608000',
                                terminal:1 ,
                                client_type:'h5',
                                fn_geetest_challenge:result.geetest_challenge,
                                fn_geetest_validate: result.geetest_validate,
                                fn_geetest_seccode:result.geetest_seccode,
                            }
                        Post_formData2(this,options,'/api/person-regInfo',res=>{
                        if(res.returnCode==200){
                            let options={
                                userName:this.name.Trim(),
                                userPassword:md5(this.pwd),
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
                               this.$router.push('/')
                            }else{
                               this.$vux.toast.text(res.msg)
                                    }
                                })
                                } else {
                                    this.$vux.toast.text(res.msg);
                                     }
                                  })
                               })
                            })
                        }
                })
                },
            sendMessage(){
                if(this.isOvertime){
                    return false;
                }
                let that = this,
                    time = 60;
                var sendTimer = setInterval(function(){
                    that.isOvertime = true;
                    that.iscode = true;
                    time--;
                    that.word = "重新发送"+time+"s";
                    if(time < 0){
                        that.isOvertime = false;
                        that.iscode = false;
                        clearInterval(sendTimer);
                        that.word = "获取验证码";
                    }
                },1000)
            },
            getCode(){
                // let checkPhone = /^1(3|4|5|7|8)\d{9}$/;
                let phone = this.areaCode==86?this.phone:this.areaCode+this.phone
                if(this.phone){
                     noParam_Get(this,'/api/person-checkNickPhone/'+phone,res=>{
                         if(res.returnCode==200){
                                this.sendMessage();
                                this.setCode();
                         }else{
                            this.$vux.toast.text(res.msg);
                         }
                     })
                }else{
                    this.$vux.toast.text('请输入正确手机号');
                }
            },
            setCode(){
                if(!this.isOvertime){
                let phone = this.areaCode==86?this.phone:this.areaCode+this.phone
                    let options={
                        userMob:phone,
                        type:this.areaCode==86?'RegisterPwd':"International"
                        //type:"RegisterPwd"
                    }
                    Post_formData2(this,options,'/api/verification/sys-getShortMessage',res=>{
                        // this.showMessage(res,()=>{
                            if(res.returnCode==200){
                                this.$vux.toast.text(res.msg);
                            }else{
                                this.$vux.toast.text(res.msg);
                            }
                        // })
                    })
                }
            },
            handleImg(){
                axios.get('/api/verification/getCode', {responseType: 'arraybuffer'}).then(response => {
                    this.imgCode = 'data:image/png;base64,' + btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
                })
            },
            handleCheckImg(){
              
            }
        },
        mounted() {
            // this.handleImg()
        },
    }
</script>
<style lang="less" scoped>
     #register{
         width:100%;
         height:100%;
         background:#fff;
         .title{
            width:100%;
            height:.5rem;
            border-top:.2px solid #e9e9e9;
            border-bottom:.2px solid #e9e9e9;
            text-align:center;
            line-height:.5rem;
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
            color:#999;
            font-size:.18rem;
            padding-left:.14rem;
            outline: none;
            p{
                width:.85rem;
                height:.44rem;
                font-size:.13rem;
                line-height:.44rem;
                text-align:center;
                float:right;
            }
        }
        .phoneInput{
            width:3.04rem;
            height:.44rem;
            border-radius:4px;
            border:1px solid #979797;
            margin:.2rem auto;
            .areaCode{
              width:.7rem;
              height:.44rem;
              float: left;
              text-align: center;
              line-height: .44rem;
              img{
                  width:.15rem;
                  height:.15rem;
              }
            //   input{
            //       background-color: #fff;
            //   }
            }
            .phone_wrap{
                width:2.2rem;
                height:.44rem;
                float:right;
                input{
                    width:2rem;
                    height:.4rem;
                    border:none;
                    outline: none;  
                }
            }

        }
        .codeInput{
            width:3.04rem;
            height:.44rem;
            margin:.2rem auto;
            div{
                width:1.8rem;
                height:.44rem;
                border-radius:4px;
                padding-left:.14rem;
                border:1px solid #979797;
                float:left;
                margin-right:.14rem;
                input{
                width:1.52rem;
                height:.42rem;
                border:none;
                outline: none;  
              }
            }
               .code{
                width:1.1rem;
                height:.44rem;
                border:0;
                outline:none;
                background: #F77583;
                color:#fff;
                border-radius: .04rem;
            }
        }
        .sex{
            width:3.04rem;
            margin:0 auto;
            height:1rem;
            padding:.2rem .25rem;
            box-sizing:border-box;
            .sex_img_l{
               float:left;
               text-align:center;
               font-size:.16rem;
               color:#FB5E6F;
            }
            .sex_img_r{
               float:right;
               text-align:center;
               font-size:.16rem;
               color:#FB5E6F;
            }
            .oImg{
                display:block;
                width:.454rem;
                height:.474rem;
                margin-bottom:.05rem;
            }
        }
        .register{
            margin:.2rem auto;
            width:3.04rem;
            height:.44rem;
            background:#F77583;
            border-radius:4px;
            text-align:center;
            color:#fff;
            line-height:.44rem;
            font-size:.18rem;
        }
     }
</style>
