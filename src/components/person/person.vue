<template>
  <div class='person'>
      <div class='header'>
         <div>
             <img src="../../assets/images/back.png" style='vertical-align: middle;' alt="">
         </div>    
         <div class='title_1'>个人中心</div>
         <div class='title_2'>作者中心</div>
      </div>
      <div class="person_info">
           <div class='avatar_wrap'>
               <img :src="avatar" alt="">
           </div>
           <div class='person_info_detail'>
              <div>
                  <span class='user_name'>{{userName}}</span>
                  <img class='user_sex' src="../../assets/images/sex_women@2x.png" v-if="sex" alt="">
                  <img class='user_sex' src="../../assets/images/sex_men@2x.png" v-if='!sex' alt="">
              </div>
              <div class='grade_wrap'>
                 <p class='grade' :style='{width:grade/20*100+"%"}'></p>

              </div>
              <div class='user_fans'>
                  <span>关注{{attentionCount}}</span>
                  <span>粉丝{{fans}}</span>
              </div>
           </div>
      </div>
      <group class='nav_list'>
          <cell v-for='li in navList' :title="li.title" :link="li.link">
              <img :src="li.img" slot="icon" alt="">
          </cell>
       </group>
       <div class='loginOut_wrap'>
            <span class="loginOut">退出登录</span>
       </div>
  </div>
</template>

<script>
    import {Group,Cell} from 'vux'
    export default {
        name: "person",
        components:{
          Group,Cell
        },
        data(){
            return {
                // 用户信息需要从vuex里获取或者用localstorage
                avatar:'',
                userName:'唐锋',
                sex:false,
                grade:18,
                attentionCount:10,
                fans:20,
                navList:[
                    {img:require('../../assets/images/personCenter@2x.png'),title:'我的书架',link:'{path:"/home"}'},
                    {img:require('../../assets/images/wallet@2x@2x.png'),title:'我的钱包',link:'{path:"/home"}'},
                    {img:require('../../assets/images/cz@2x.png'),title:'充值',link:'{path:"/home"}'},
                    {img:require('../../assets/images/reader@3x@2x.png'),title:'阅读记录',link:'{path:"/home"}'},
                    {img:require('../../assets/images/details_button_jinjiao_default copy 4@2x.png'),title:'消息',link:'{path:"/home"}'},
                    {img:require('../../assets/images/contactUs2@2x.png'),title:'联系客服',link:'{path:"/home"}'},
                    {img:require('../../assets/images/grade@2x.png'),title:'等级制度',link:'{path:"/home"}'},
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
     .person{
         font-family: PingFangSC;
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
                background-color:red;
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
                }   
              }
            }   
         }
         .nav_list{
             border-bottom:.06rem solid #E9E9E9;
             img{
                width:.28rem;
                height:.28rem;
                vertical-align: middle;
                margin-left: .08rem;
                margin-right:.08rem;
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
