<template>
   <div class='book_comment_detail'>
       <headerComponent :list="topList"></headerComponent>
            <div class='book_comment_item'>
              <div class='avatar'>
                  <img  :src="readCommentInfo.userHeadPortraitURL" alt="">
              </div>
              <div class='book_comment_item_detail'>
                <div class='i_one'>
                    <div style='float: left;'>
                        <span style='font-size:.16rem;'>{{readCommentInfo.pseudonym}}</span>
                        <img src="../../assets/images/sex-03@3x.png" v-if='readCommentInfo.userSex==1' alt="">
                        <img src="../../assets/images/sex-02_03@3x.png" v-if='readCommentInfo.userSex==0' alt="">                     
                        <span class='grade'>&nbsp;LV{{readCommentInfo.userGrade}}&nbsp;</span>
                     </div>
                     <div style='float:right'>
                        <span style='font-size:.12rem;'>{{readCommentInfo.commentDateTime|formatDate}}</span>
                      </div>
                </div>
                 <!-- <p class='bookName'>《{{readCommentInfo.bookName}}》</p>   -->
                 <p class='content'>{{readCommentInfo.commentContext}}</p> 
                 <div class='zhan'>
                     <p>
                     <img  v-if='readCommentInfo.isthumbs==0?true:false' @click='handelLike()'  src="../../assets/images/zan@3x.png"  alt="">
                     <img  v-if='readCommentInfo.isthumbs==1?true:false' @click='handelLike()' src="../../assets/images/goodzan@3x.png" alt="">
                     <span>{{readCommentInfo.thumbsCount}}</span>
                     </p>
                     <p>
                     <img src="../../assets/images/message@3x.png" alt="">
                     <span>{{readCommentInfo.replyCount}}</span>
                     </p>
                 </div>             
              </div>
            </div> 
            <!-- 相关回复 -->
            <div v-if='showContent'>
              <p  class='x_reply'>相关回复</p>
               <div class='book_comment_item'  :key='index' v-for='(item,index) in replyList'>
                    <div class='avatar'>
                        <img  style='width:.38rem;height:.38rem;' :src="item.userHeadPortraitURL" alt="">
                    </div>
                <div class='book_comment_item_detail'>
                    <div class='i_one'>
                        <div style='float: left;'>
                            <span style='font-size:.16rem;'>{{item.pseudonym}}</span>
                            <img src="../../assets/images/sex-03@3x.png" v-if='item.userSex==1' alt="">
                            <img src="../../assets/images/sex-02_03@3x.png" v-if='item.userSex==0' alt="">                     
                            <span class='grade'>&nbsp;LV{{item.userGrade}}&nbsp;</span>
                        </div>
                    </div>
                 <!-- <p class='bookName'>《{{readCommentInfo.bookName}}》</p>   -->
                 <p class='content'>{{item.replyCommentsContent}}</p>           
              </div>
            </div> 
            </div>
            <No v-if='!showContent' ></No>
           <div class='replyInput'>
             <span @click='handleShow()'>回复</span>
          </div>
          <div v-transfer-dom>
            <popup v-model="show">
                <div style='height:1.5rem;font-size:.16rem;background-color:#fff;'>
                    <div  style='border-bottom:1px solid #E9E9E9;overflow:hidden;padding:.08rem .2rem'>
                        <p style='float:left' @click='show=false'>取消</p>
                        <p style='color:#F77583;float:right' @click='handleReply()'>发表</p>
                    </div>
                    <div class='text_box'>
                       <textarea  v-model='replyText' style='width:100%;height:1.2rem;border:0;outline:none;padding:.1rem' ></textarea>
                    </div>
                </div>
            </popup>
       </div>
   </div>
</template>
<script>
import {Post_formData2} from '@/config/services'
import {mapState} from 'vuex'
import {Popup,TransferDom} from 'vux'
import { setTimeout } from 'timers';
    export default {
        data(){
            return {
                replyList:[],
                showContent:true,
                replyText:'',
                readBookId:this.$route.query.bookId,
                topList:{
                    title_1:'评论详情',
                    title_2:'首页',
                    link:'/'
                },
                show:false,
                source:{
                img:require('../../assets/images/1.png'),
                text:'没有相关回复'
              }
            }
        },
        directives: {
            TransferDom
        },
        components:{
            Popup
        },
        computed : {
           ...mapState(['readCommentInfo','isLogin','userInfo'])
        },
        filters:{
      content (str) {
              return str.length>36?str.slice(0,37)+'...':str 
       }
    },
        methods:{
           getCommentReply(){
               Post_formData2(this,{commentid:this.readCommentInfo.id,startPage:1},'/api/comm-replyInfo',res=>{
                 if(res.returnCode===200){
                     if(res.data.list.length==0){
                         this.showContent=false
                         return;
                     }
                     this.replyList=res.data.list
                 }
              })
           },
           handleReply(){
            let reg=/[\ud83c-\ud83e][\udc00-\udfff]|[\u2600-\u27ff]/
             if(!reg.test(this.replyText)){ 
               if(this.replyText.length>0&&this.replyText.length<100){
                 let options = {
                    bookid:this.readBookId,
                    replyCommentsContent:this.replyText,
                    userName:this.userInfo.userName,
                    bookName:this.readCommentInfo.bookName,
                    commentId:this.readCommentInfo.id,
                    puserId:this.readCommentInfo.userId
                 }
                 Post_formData2(this,options,'/api/add-replyInfo',res=>{
                     if (res.returnCode===200) {
                         this.show=false
                         this.showContent=true
                         this.readCommentInfo.replyCount++
                         options.pseudonym=this.userInfo.pseudonym
                         options.userHeadPortraitURL=this.userInfo.userHeadPortraitURL
                         options.userGrade=this.userInfo.userGrade
                         options.userSex=this.userInfo.userSex
                         this.replyList.unshift(options)
                         this.replyText=''
                     }
                 })
               }else if(this.replyText.length==0){
                   this.$vux.toast.show('不能为空!')
               }else if(this.replyText.length>=100){
                   this.$vux.toast.show('评价太多了!')
                }
               }else{
                 this.$vux.toast.show({text:'目前不支持表情',type:'cancle'})       
             }
           },
           handelLike(){
               if(this.isLogin){
                   Post_formData2(this,{commentId:this.readCommentInfo.id},'/api/comm-GiveThumbs',res=>{
                   if(res.returnCode==200) {
                       if(this.readCommentInfo.isthumbs==0) {
                            this.readCommentInfo.isthumbs=1
                            this.readCommentInfo.thumbsCount+=1
                        }else{
                            this.readCommentInfo.thumbsCount-=1                   
                            this.readCommentInfo.isthumbs=0                 
                        }
                   }
              })
            }else{
                this.$vux.toast.text('登录后点赞哦')
             }
           },
           handleShow(){
               if(this.isLogin){
                   this.show=!this.show
               }else{
                   this.$vux.toast.text('请先登录!')
                   setTimeout(()=>{
                       this.$router.push('/Login')
                   },2000)
               }
           }
        },
        mounted () {
            this.getCommentReply()
        }
    }
</script>
<style lang='less' scoped>
     @import '../../css/bookCommentDetail';
</style>