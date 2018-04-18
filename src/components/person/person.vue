<template>
  <div class='person'>
      <div class='header'>
         <div @click="$router.go(-1)">
             <img src="../../assets/images/back@2x.png" style='width:.4rem;heigh:.4rem;vertical-align: middle;' alt="">
         </div>    
         <div class='title_1'>个人中心</div>
         <div class='title_2' @click='handleAuthorCenter()' v-if="!show">作者中心</div>
         <div class='title_2' @click='handleAuthorCenter()' v-if='show'>申请作者</div>         
         <!--click author center dialog  -->
         <div v-transfer-dom>
          <confirm v-model="show"
            color='#333'
            @on-cancel="onCancel"
            @on-confirm="onConfirm">
        <p style="text-align:center;color:#333333;font-size:.16rem;">请下载辣鸡小说app进入<br>作者中心!</p>
      </confirm>
    </div>
     </div>
      <div class="person_info" @click='handleGo()'>
           <div class='avatar_wrap'>
               <img :src="userInfo.userHeadPortraitURL" alt="" style='width:.52rem;height:.52rem;border-radius:50%;'>
           </div>
           <div class='person_info_detail'>
              <div>
                  <span class='user_name'>{{userInfo.pseudonym}}</span>
                  <img class='user_sex' src="../../assets/images/sex_women@2x.png" v-if="userInfo.userSex===0?true:false" alt="">
                  <img class='user_sex' src="../../assets/images/sex_men@2x.png" v-if='userInfo.userSex===1?true:false' alt="">
              </div>
              <div class='grade_wrap'>
                 <p class='grade' :style='{width:userInfo.userGrade/20*100+"%"}'>
                    <span class='grade_icon'>{{'Lv'+userInfo.userGrade}}</span>
                 </p>
              </div>
              <div class='user_fans'>
                  <span>关注{{fllows}}</span>
                  <span>粉丝{{fans}}</span>
              </div>
           </div>
      </div>
      <div class='nav_list'>
          <div class='nav_item' v-for='(li,index) in navList' :title="li.title" :key='index' @click='handleLink(li.link)'>
              <img :src="li.img"  alt="">
              <span>{{li.title}}</span>
              <img class='go' src="../../assets/images/more@3x.png" alt="">
          </div>
       </div>
       <div class='loginOut_wrap' @click='loginOut()'>
            <span class="loginOut">退出登录</span>
       </div>
  </div>
</template>

<script>
    import {Group,Cell,TransferDomDirective as TransferDom,Confirm} from 'vux'
    import headerComponent from '@/components/common/header'    
    import { setTimeout } from 'timers';
    import {mapState} from 'vuex'
    import {Param_Get,Param_Get_Resful,Post_formData2} from '@/config/services'
    import {mapActions} from 'vuex'
    export default {
        name: "person",
        directives: {
         TransferDom
       },
        components:{
          Group,Cell,headerComponent,Confirm
        },
        computed:{
           ...mapState(['userInfo','fans','fllows'])
        },
        data(){
            return {
                // 用户信息需要从vuex里获取或者用localstorage
                show:false,
                type:0,
                navList:[
                    {img:require('../../assets/images/personCenter@2x.png'),title:'我的书架',link:'/bookRack'},
                    {img:require('../../assets/images/wallet@2x@2x.png'),title:'我的钱包',link:'/myWallet'},
                    {img:require('../../assets/images/cz@2x.png'),title:'充值',link:'/payMoney'},
                    {img:require('../../assets/images/reader@3x@2x.png'),title:'阅读记录',link:'/readHistory'},
                    {img:require('../../assets/images/details_button_jinjiao_default copy 4@2x.png'),title:'消息',link:'/MessageManage'},
                    {img:require('../../assets/images/contactUs2@2x.png'),title:'联系客服',link:'/contactUs'},
                    {img:require('../../assets/images/grade@2x.png'),title:'等级制度',link:'/gradeSystem'},
                ]
            }
        },
        methods:{
            ...mapActions(['loginAction','setFans','setFllows','getUserInfo']),
        handleAuthorCenter () {
            this.show=true;
         },
         handleLink(res){
           this.$router.push(res)
         },
         loginOut(){
               let self=this
               console.log(self)
               Post_formData2(this,'','/api/person-ClearUserInfo',res=>{
                   if(res.returnCode==200||res.returnCode==400){
                            this.$vux.toast.text('退出成功!')
                                setTimeout(()=>{
                                 this.loginAction(false)
                                 this.getUserInfo(null)       
                                 this.$router.push(this.$route.query.redirect||'/')
                          },1000)
                     }
               })
         },
         onCancel(){
             
        },
         jumpToDownApp(){
           window.location='mqq:open';
           setTimeout(()=>{
            // 跳转app
               window.location="http://itunes.apple.com/cn/app/qq-2011/id444934666?mt=8"
           },30)
         },
         onConfirm(){
             this.jumpToDownApp()
          },
          getFansAndFollowCount(type=1){
            Param_Get_Resful(this,`/api/fans-followCount/${this.userInfo.userId}/${type}`,res=>{
                 type==1?this.setFans(res.data):this.setFllows(res.data)  
                })
            },
           handleGo () {
            // 用户信息还没有确定
            //    this.$router.push("/personInfo")
            },
            refeshUserInfo(){
               Post_formData2(this,'','/api/person-info',res=>{
                            if(res.returnCode===200){
                                this.getUserInfo(res.data) 
                             }else{
                                 this.$vux.toast.show({text:'身份过期,重新登录',type:'warn'})
                                 this.getUserInfo(null)
                             setTimeout(()=>{
                                 this.$router.push({path:'/',query:{redirect: '/myWallet'}})
                             },2000) 
                      }
              })
            }
        },
          mounted(){
            this.getFansAndFollowCount()
            this.getFansAndFollowCount(0)
            this.refeshUserInfo()
        }
    }
</script>

<style lang="less" scoped>
     .person{
         color:#333333;
         width:100%;      
        .header{    
            height:.44rem;
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            border-bottom:.01rem solid #E9E9E9;
             .title_1{
              font-size: .18rem;
          }
          .title_2{
              font-size: .14rem;
              color:#F77583;
          }
          div{
            margin:auto .1rem;       
          }
        }
        .person_info{
            height:.8rem;
            border-bottom:.06rem solid #E9E9E9;
            display:flex;
            flex-direction: row;
            .avatar_wrap{
                width:.52rem;
                height:.52rem;
                margin:auto .14rem;
                border-radius: 50%;
            }
            .person_info_detail{
                width:1.42rem;
                margin-left:.2rem;
                padding:.01rem .1rem ;
                .user_sex{
                    width:.16rem;
                    height:.16rem;
                }
                .user_name{
                  font-size: .16rem;
              }
              .user_fans{
                  font-size:14px;
              }
              .grade_wrap{
                  width:1rem;
                  height:.05rem;
                  background-color: #D9D9D9;
                  border-radius:.05rem;
                  margin:.1rem 0;
              .grade{
                  background-color:#75D5F8; 
                  height:.05rem;
                  border-radius:.05rem;
                  position: relative;
                  .grade_icon{
                    height:.13rem;
                    font-size:.09rem;
                    position: absolute;
                    color:#fff;
                    border-radius: .02rem;
                    text-align: center;
                    line-height: .13rem;
                    right:0;
                    top:-.04rem;
                    background-color:#75D5F8;
                  }
                }   
              }
            }   
         }
         .nav_list{
             border-bottom:.06rem solid #E9E9E9;
             .nav_item{
                 height:.5rem;
                 border-bottom:1px solid #E9E9E9;
                 line-height: .5rem;
                 color:#333333;
                 position: relative;
                 font-size:.16rem;
             }
             img{
                width:.28rem;
                height:.28rem;
                vertical-align: middle;
                margin-left: .08rem;
                margin-right:.08rem;
             }
             .go{
                 width:.27rem;
                 height:.27rem;
                 position: absolute;
                 right:.13rem;
                 top:.15rem;
             }

         }
         .loginOut_wrap{
             height:.5rem;
             border-bottom:1px solid #E9E9E9;
             font-size: .18rem;
             text-align: center;
             .loginOut{
                 line-height: .5rem;
             }
         }
     }
</style>
