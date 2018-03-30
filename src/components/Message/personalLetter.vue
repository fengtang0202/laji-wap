<template>
   <div>
       <ul class='message_item'>
                  <li v-for='(item,index) in messageList' :key='index'>
                      <img class='avatar' :src="item.userHeadPortraitURL" alt="">
                      <div class='message_item_detail'>
                         <p >
                         <span>{{item.userName}}</span>
                         <img v-if='item.userSex==0' class='sex' src="../../assets/images/sex-02_03@3x.png" alt="">
                         <img v-if='item.userSex==1' class='sex' src="../../assets/images/sex-03@3x.png" alt="">                         
                         <span class='timer'>{{item.dateTimes|formatDate}}</span>
                         </p>
                         <p style='color:#666' >{{item.messageContent}}</p>
                      </div>
                  </li>
        </ul>
   </div>
</template>
<script>
import {Param_Get_Resful} from '@/config/services'
  export default {
      data(){
          return {
               messageList:[]
          }
      },
      methods :{
          getMessage(){
            Param_Get_Resful(this,'/api/person-message/?startpage=1',res=>{
                 if(res.returnCode==200){
                     this.messageList=res.data.list
                 }
             })
          }             
      },
      mounted () {
           this.getMessage()  
      }
  }
</script>
<style lang='less' scoped>
  .message_item{
              width:100%;   
              li{
                 min-height:.75rem;
                 overflow: hidden;
                 border:1px solid #EFEFEF;
                 .avatar{
                     width:.52rem;
                     height:.52rem;
                     border-radius: 50%;
                     margin-top:.12rem;
                     margin-left:.12rem;
                 }
                 .sex{
                     width:.13rem;
                     height:.13rem;
                 }
                 .message_item_detail{
                     min-height:.52rem;
                     width:2.8rem;
                     margin-top:.12rem;
                     margin-right:.12rem;
                     font-size:.16rem;
                     float:right;
                     p{
                         min-height:.26rem;
                         line-height: .26rem;
                     }
                     .timer{
                         font-size:.12rem;
                         color:#999;
                         margin-left:1rem;
                     }
                     .content{
                         font-size:.14rem;
                         color:#666;
                     }
                 }
              }
          }
</style>
