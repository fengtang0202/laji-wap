<template>
   <div id="password">
        <app-load></app-load>
        <div class="title">忘记密码</div>
        <div class="phoneInput">
            <div class='areaCode' @click='handleGo()' >
                <span>{{areaCode|add}}</span>
                <img src="../../assets/images/Combine@3x.png"  alt="">
            </div>
            <div class='phone_wrap'>
              <input  type="text"  placeholder="请输入手机号" v-model.trim="phone">
           </div>
        </div>
        <!-- <input type="text" class="oInput" placeholder="请输入手机号" v-model.trim="phone"> -->
        <div class="codeInput">
              <div>
                <input type="text"  placeholder="请输入验证码" v-model.trim="verificationCode">
             </div> 
             <button  class='code'  :disabled='iscode' @click="getCode()">{{word}}</button>             
             <!-- <p v-bind:class="{code:iscode}" @click="getCode()">{{word}}</p> -->
        </div>       
        <div class="submit" @click="handleSubmit()">提交</div>
   </div>
</template> 
<script>
    import { Post_formData2, noParam_Get } from '@/config/services'
    import{mapActions} from 'vuex'
    export default {
        name: 'password',
        data () {
            return {
                phone:'',
                verificationCode:'',
                isOvertime: false,
                word:'获取验证码',
                iscode:false,
                areaCode:this.$route.query.value
            }
        },
         filters: {
           add(res){
              return `+${res}`
           }  
        },
        methods:{
             handleGo(){
                this.$router.push({path:'/areaCode',query:{type:2}})
            },   
            ...mapActions(['setPhone','setUserCode']),
            getCode(){
                // let checkPhone=/^1(3|4|5|6|7|8|9)\d{9}$/;
                // if (checkPhone.test(this.phone)) {
                   let phone = this.areaCode==86?this.phone:this.areaCode+this.phone
                    noParam_Get(this,'/api/person-checkNickPhone/'+phone,res=>{
                        if(res.returnCode ==200){
                            this.$vux.toast.text('您的手机号未注册');
                        }else{
                            //将手机号码存到vuex
                            this.setPhone(phone)
                            this.sendMessage();
                            if(!this.isOvertime){
                                let options={
                                    userMob:this.phone,
                                    type:'findPwd'
                                }
                                Post_formData2(this,options,'/api/verification/sys-getShortMessage',res=>{
                                    // this.showMessage(res,()=>{
                                        if(res.returnCode==200){
                                            this.$vux.toast.text(res.msg);
                                        }else{
                                            // this.$vux.toast.text(res.msg);
                                        }
                                    // })
                                })
                            }  else{
                                this.$vux.toast.text('操作过于频繁，请60S后重试')
                            }
                        }                        
                    })
                // } else {
                //     this.$vux.toast.text('请输入正确手机号')
                // }
            },
            sendMessage(){
                if(this.isOvertime){
                    return false;
                }
                let that = this,
                    time = 60;
                var sendTimer = setInterval(()=>{
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
            handleSubmit(){
                let checkPhone=/^1(3|4|5|7|8)\d{9}$/;
                    if (checkPhone.test(this.phone) && this.verificationCode!='') {
                        let options={
                            phoneId:this.phone,
                            checkCode:this.verificationCode
                        }
                        Post_formData2(this,options,'/api/verification/person-checkedCode',res=>{
                                if(res.returnCode==200){
                                    this.setUserCode(this.verificationCode)
                                    this.$router.push({path:'/resetPassword'});
                                }else{
                                    this.$vux.toast.text(res.msg);
                                }
                            
                        }) 
                    }else if(!checkPhone.test(this.phone) ){
                       this.$vux.toast.text('请输入正确手机号')
                    }else if(this.verificationCode==''){
                        this.$vux.toast.text('请输入验证码')
                    }
            }
        }
    }
</script>
<style lang="less" scoped>
   #password{
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
            .codeInput{
               width:2rem;
               height:.42rem;
               float:left;
               border:none;
               outline: none;
            }
            p{  
                width:.85rem;
                height:.44rem;
                font-size:.13rem;
                line-height:.44rem;
                text-align:center;
                float:right;
            }
            .code{
                color:#F77583;
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
         .submit{
            margin:.89rem auto;
            width:3.04rem;
            height:.44rem;
            background:#F77583;
            border-radius:4px;
            text-align:center;
            color:#fff;
            line-height:.44rem;
            font-size:.18rem;
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
   }
</style>