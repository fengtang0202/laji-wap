<template>
   <div>
       <swipeout>
         <swipeout-item class='message_item' v-for='(item,index) in messageList' :key='index'  transition-mode="follow">               
                  <div  slot="right-menu">
                    <!-- <swipeout-button @click.native="onButtonClick(item,1)" type="primary">查看</swipeout-button> -->
                    <swipeout-button @click.native="onButtonClick(item,0)" type="warn">删除</swipeout-button>                      
                  </div>
           <ul slot="content" class="message_content vux-1px-t">
                  <li>
                      <img class='avatar' :src="item.userHeadPortraitURL" alt="">
                      <div class='message_item_detail'>
                         <p>
                         <span>{{item.replyUserName}}</span>
                         <img v-if='item.userSex==0' class='sex' src="../../assets/images/sex-02_03@3x.png" alt="">
                         <img v-if='item.userSex==1' class='sex' src="../../assets/images/sex-03@3x.png" alt="">                         
                         <span class='timer'>{{item.commentDateTime|formatDate}}</span>
                         </p>
                         <p class='content'>回复了你</p>
                         <p class='content' style='color:#333'>{{item.replyCommentsContent}}</p>
                         <p class='content'>评论：{{item.commentContext}}</p>
                      </div>
                  </li>
           </ul>
        </swipeout-item>
    </swipeout>
   </div>
</template>
<script>
  import {Post_formData2} from '@/config/services'
  import {mapState} from 'vuex'
  export default {
      data(){
          return {
            messageList:[]
          }
      },
      computed : {
          ...mapState(['userInfo'])
      },
      methods :{
          getComment(){
            Post_formData2(this,{userid:this.userInfo.userId,startPage:1},'/api/comm-coverReplyInfo',res=>{
                 if(res.returnCode==200){
                     this.messageList=res.data.list
                     console.log(res.data)
                 }
             })
          },
           delMessage(item){
             let options = {
                id:item.commentId,
                type:0
             }
             Post_formData2(this,options,'/api/comm-delcomminfo',res=>{
                 if(res.returnCode==200){
                      this.$vux.toast.show('删除成功');
                      this.getComment()
                 }
             })
          },
          onButtonClick(item,type){
             type==0&&this.delMessage(item)
          }             
      },
      mounted () {
           this.getComment()  
      }
  }
</script>
<style lang='less' scoped>
  .message_item {
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
