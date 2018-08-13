<template>
    <XDialog dialog-width='100%' :dialog-style="{'max-width': '100%', width: '100%', 'background-color': 'transparent'}" v-model="$store.state.bindPhone" @on-hide='handle()' hide-on-blur>
         <div class='login_wrap'>
             <div class='p_wrap'>
                 <img src="../../assets/images/bindphone.png"  alt="">
             </div>
             <div class='bind_wrap'>
                <h2 style='color:#FF4E61'>绑定手机</h2>
                <!-- <div>
                   <input type="text" placeholder="请输入手机号" v-model='phone'  class='bindPhone wrap'>
                </div> -->
                 <div class="phoneInput">
                    <div class='areaCode' @click='handleGo()' >
                        <span>{{areaCode|add}}</span>
                        <img src="../../assets/images/Combine@3x.png"  alt="">
                    </div>
                    <div class='phone_wrap'>
                        <input  type="text"  placeholder="请输入手机号" v-model.trim="phone">
                    </div>
                </div>
                <div class='bindcode wrap'>
                    <input type="text" placeholder="请输入验证码"  v-model="codeNumber">
                    <button class='getCode btn' @click='getCode()' :disabled='isOvertime'>{{code}}</button>
                </div>
                <button class='update_phone btn' @click='hanldeBindPhone()'>确定</button>
             </div>
         </div>
   </XDialog>  
</template>
<script>
import { XDialog ,TransferDomDirective as TransferDom } from 'vux'
import {mapActions} from 'vuex'
import { Post_formData2, noParam_Get,Param_Get_Resful } from '@/config/services'
import {refshUserInfo} from '../../config/getData'        
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
          code:'获取验证码',
          isOvertime:false,
          phone:'',
          codeNumber:'',
          areaCode:86
      }
  },
  filters: {
           add(res){
              return `+${res}`
           }  
        },
  methods: {
     ...mapActions(['setShowBindPhone']),
     handle(){
        this.setShowBindPhone(false)
     },
     handleGo(){
        //  this.$router.push('/areaCode')
     },
      sendMessage(){
                if (this.isOvertime) {
                    return false;
                }
                let that = this,
                    time = 60;
                var sendTimer = setInterval(function(){
                    that.isOvertime = true;
                    that.iscode = true;
                    time--;
                    that.code = "重新发送"+time+"s";
                    if(time < 0){
                        that.isOvertime = false;
                        that.iscode = false;
                        clearInterval(sendTimer);
                        that.code = "获取验证码";
                    }
                },1000)
            },
            getCode(){
                // let checkPhone = /^1(3|4|5|7|8)\d{9}$/;
                let phone = this.areaCode==86?this.phone:this.areaCode+this.phone
                if(this.phone.Trim()) {
                     noParam_Get(this,'/api/person-checkNickPhone/'+this.phone,res=>{
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
                // let phone = this.areaCode==86?this.phone:this.areaCode+this.phone
                    let options = {
                        userMob:this.phone,
                        //type:this.areaCode==86?'RegisterPwd':"International"
                        type:"bangDing"
                    }
                    Post_formData2(this,options,'/api/verification/sys-getShortMessage',res=>{
                            if(res.returnCode==200){
                                this.$vux.toast.text(res.msg);
                            }else{
                                this.$vux.toast.text(res.msg);
                            }
                    })
                }
            },
            hanldeBindPhone(){
                let options={
                    checkCode:this.codeNumber,
                    phoneId:this.phone
                }
                Post_formData2(this,options,'/api/verification/person-checkedCode',res=>{
                    if(res.returnCode==200){
                        Post_formData2(this,{userPhone:this.phone},'/api/person-updateInfo',res=>{
                            if(res.returnCode==200){
                                this.codeNumber=''
                                this.phone=''
                                refshUserInfo()
                                this.setShowBindPhone(false)
                                this.$vux.toast.text('绑定成功!')
                            }else{
                                this.$vux.toast.text(res.msg)
                            }
                        })
                    }else{
                       this.$vux.toast.text(res.msg)
                    }
                })
            }
  },
  mounted () {
       
  }
}
</script>
<style lang="less" scoped>
   .login_wrap{
       height:3.58rem;
       width:100%;
       margin:0  auto;
       box-shadow: 0 0 8px #F77583;
       border-radius: 8px;
       position: relative;
   }
   .p_wrap{
       float: left;
       height:100%;
       width:.84rem;
       img{
           width:.84rem;
           height:1.38rem;
           margin-top:.59rem;   
       }
   }
   .bind_wrap{
        width:2.8rem;
        border:3px solid #FF4E61;
        float: left;
        height:2.56rem;
        margin-top:.09rem;
        border-radius: 10px;
        background: #fff;
        box-sizing: border-box;
        padding-top:.2rem;
   }
   .wrap{
       width:2.16rem;
       height:.38rem;
       border:1px solid #F77583; 
       border-radius: 10px;
   }
   .bindPhone{
       outline: none;
       padding-left:.2rem;
       padding-right:.2rem;
       font-size: .16rem;
   }
   .bindcode{
      margin: .12rem auto;
      line-height: .3rem;
      text-align: left;
      input{
          border:0;
          outline: none;
          height:.3rem;
          margin-left:.2rem;
          width:.96rem;
          font-size: .16rem;
      }
   }
   .btn{
       background: #F87684;
       color:#fff;
       border:0;
       outline: none;
    }
   .getCode{
      width:.8rem;
      height:.3rem;
      color:#fff;
      font-size:.12rem;
      line-height:.3rem;
      border-radius: 10px;
      margin-left:.1rem;
   }
   .update_phone {
       width:1.6rem;
       height:.36rem;
       border-radius: 18px;
       margin-top:.2rem;
       font-size:20px;
   }
    .phoneInput{
            width:2.16rem;
            height:.36rem;
            border-radius:10px;
            border:1px solid #F77583;
            margin:.2rem auto;
            .areaCode{
              width:.74rem;
              height:.3rem;
              float: left;
              text-align: center;
              line-height: .36rem;
              padding-left:.01rem;
              box-sizing: border-box;
              img{
                  width:.15rem;
                  height:.15rem;
              }
            }
            .phone_wrap{
                width:1.3rem;
                height:.34rem;
                float:right;
                input{
                    width:1.1rem;
                    height:.34rem;
                    border:none;
                    outline: none;  
                }
            }

        }
</style>
