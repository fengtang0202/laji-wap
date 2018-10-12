<template>
    <div>
        <div class='share'>
            <img v-if="type==1" style="width:2.49rem;height:0.27rem;margin-top:.49rem;margin-left:.3rem" src="../../assets/images/InviteTitle.png"/>
            <img v-if="type==2" style="width:2.68rem;height:.27rem;margin-top:.49rem;margin-left:.3rem" src="../../assets/images/shareTitle.png"/>            
            <div class="box authorMessage">
                <div>{{type==1?'我最近在追这本小说，来了解一下？':'实不相瞒，我其实是个深藏不露的小说作者。'}}</div>
                <div style="text-align:right">——作者笔名</div>
            </div>
            <div style="text-align:center;margin:.3rem 0">
                <img v-if="type==1" src="../../assets/images/shareCenterTitle.png" style="width:1.15rem;height:.17rem" alt="">
                <img v-if="type==2" src="../../assets/images/InviteCenterTitle.png" style="width:1.6rem;height:.17rem" alt="">
            </div>
            <div class="bookInfo_wrap" style="display:flex;flex-direction:row;">
                <div>
                  <img :src="bookInfo.bookImage" alt="" style="margin:0 .16rem;width:1.15rem;height:1.45rem;border-radius:5px;">
                </div>
                <div style="font-size:.14rem;">
                   <div style="margin-bottom:.2rem;">书名:{{bookInfo.bookName}}</div>
                   <div style="margin-bottom:.2rem;">作者:{{bookInfo.writerName}}</div>
                   <div style="margin-bottom:.2rem;">类型:{{bookInfo.classificationName}}</div>
                    <div>
                        <button @click="handleAddBookRack()" class="btn">{{collectionStatus==0?'收藏鼓励':'已收藏'}}</button>
                        <button @click="handleBookRead()" class="btn">点击阅读</button>
                    </div>
                </div>
            </div>
            <div style="text-align:center;margin-top:.1rem">
                <img src="../../assets/images/jianjie.png" style="width:.84rem;height:.31rem" alt="">
            </div>
            <div class="box" style="padding:.16rem .12rem;font-size:.12rem">
                {{bookInfo.bookIntroduction}}
            </div>
             <div style="text-align:center;margin-top:.1rem">
                <img src="../../assets/images/zjsk.png" style="width:1.12rem;height:.31rem" alt="">
            </div>
            <div class="box" style="overflow:auto;height:4rem;font-size:.14rem;padding:0 .12rem;">
                <div>
                  <div style="height:.47rem;text-align:center;line-height:.47rem;">第一章</div>
                  <div class="content" v-for="(item,index) in bookContent">{{item}}</div>
                 </div>
            </div>
            <div style="text-align:center;margin-top:.1rem">
                <button class="btn" @click="handleBookRead()" style="margin-right:0">阅读正文</button>
                </div>
             <div style="text-align:center;margin-top:.1rem">
                <img src="../../assets/images/zjsk.png" style="width:1.12rem;height:.31rem" alt="">
            </div>
        </div>
        <div style="margin-top:.13rem;border:1px solid #EDEDED;padding-bottom:.12rem">
            <div style="text-align:center">
              <textarea v-model='replyText' style="border-radius:.08rem;width:3.4rem;height:.8rem;font-size:.12rem;outline:none;padding:.16rem" placeholder="发表评论"></textarea>
            </div>
            <div style="text-align:right;margin-top:.12rem;">
                <button class="btn" @click="handleMakeComment()" style="background:#EDEDED;color:#999999">发表</button>
            </div>
        </div>
       <commendItem :list='newCommentList'></commendItem>  
    </div>
</template>
<script>
import {Post_formData2,Param_Get_Resful} from '@/config/services'
import {mapState,mapActions} from 'vuex'
import { resolve } from 'url';
import { rejects } from 'assert';
    export default{
        data(){
            return{
                bookId:this.$route.query.bookId,
                type:this.$route.query.type||1,
                userCode:this.$route.query.userCode,
                bookInfo:{},
                chapterId:0,
                bookContent:[],
                newCommentList:[],
                replyText:'',
                timer:0,
                collectionStatus:0
            }
        },
        computed: {
            ...mapState(['userInfo','isLogin'])  
        },
        methods:{
            handleReadHistory(){
                    return new Promise((resolve,reject)=>{
                        Post_formData2(this,{bookId:this.bookId,userid:this.userInfo.userId},'/api/person-UserBookReadRecordByUserIDAndBookId',res=>{
                           if(res.returnCode==200){
                               resolve(res.data.chapterId)
                           }
                       })
                    })
            },
           async handleBookRead(){
                if(this.isLogin){
                  this.chapterId = await this.handleReadHistory()
                }
                this.$router.push({path:'bookRead',query:{bookId:this.bookId,chapterId:this.chapterId}})
            },
            handleAddBookRack(){
                 Post_formData2(this,{userName:this.userInfo.pseudonym,bookId:this.bookId,bookName:this.bookInfo.bookName},'/api/bookshelf-adduserbookshelf',res=>{
                     if(res.returnCode==200){
                         if(this.collectionStatus==0){
                                this.collectionStatus=1
                         }else{
                             this.collectionStatus=0
                         }
                     }
                 })
            },
            handleMakeComment () {
              let fontCountLength = this.replyText.length
              let reg=/[\ud83c-\ud83e][\udc00-\udfff]|[\u2600-\u27ff]/
             if(!reg.test(this.replyText)){ 
              if(fontCountLength>0){
                  let options = {
                      bookId:this.bookId,
                      commentContext:this.replyText,
                      userName:this.userInfo.pseudonym,
                      bookName:this.bookInfo.bookName	
                  }
                    Post_formData2(this,options,'/api/add-getcomminfo',res=>{
                         if(res.returnCode==200){
                             this.$vux.toast.text('发表成功!')
                             this.show=false
                             this.showContent=true
                             this.showNoContent=false
                             options.isthumbs=0
                             options.thumbsCount=0
                             options.replyCount=0
                             options.userSex=this.userInfo.userSex
                             options.userHeadPortraitURL=this.userInfo.userHeadPortraitURL
                             options.pseudonym=this.userInfo.pseudonym
                             options.userGrade=this.userInfo.userGrade
                             options.commentDateTime=this.timer
                             this.newCommentcount+=1
                             this.newCommentList.unshift(options)
                            //  this.$router.go(0)
                            this.replyText=''
                        //  }else if(res.returnCode==400){
                            //  this.$router.push({path:'/Login',query:{redirect: this.$route.path+'?bookId='+this.readBookId}})                             
                        }else{
                           this.$vux.toast.text(res.msg)  
                        }
                     })
              } else {
                  this.$vux.toast.text('评价不能为空!')
              }
             }else{
                  this.$vux.toast.show({text:'目前不支持表情!',type:'cancel'})
             }
            }, 
            getTime(){
                Param_Get_Resful(this,'/api/sys-getNetWorkDateTime',res=>{
                        this.timer=res.data.beijing
                })
            },    
        },
        mounted(){
            this.getTime()
            Post_formData2(this,{bookid:this.bookId},'/api/book-bookInfo',res=>{
                if(res.returnCode==200){
                    this.bookInfo=res.data.bookListInfo
                    this.chapterId=res.data.chapterOne.id
                    this.collectionStatus=res.data.bookListInfo.collectionStatus
                     Post_formData2(this,{chapterId:this.chapterId},'/api/book-read',res=>{
                         if(res.returnCode==200){
                          this.bookContent=res.data.chapterInfo.chapterContent.replace(/<LG>[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}<\/LG>/ig,'<br>').replace(/<LG>.*?<\/LG>/g,'').replace(/<br>\s*<br>/ig,'<br>').split('<br>')      
                        }
                     })
                }
            }) 
             Post_formData2(this,{id:this.bookId,type:1,startPage:1},'/api/comm-getcomminfo',res=>{
                    if(res.returnCode==200){
                        this.newCommentList=res.data.list
                    }
             })
        }
    }
</script>
<style lang="less" scoped>
    .share{
        height:11.75rem;
        width:3.75rem;
        background-image: url('../../assets/images/shareBg.png') ;
        background-size:100%;
    }
    .box{
        width:3.4rem;
        min-height:1.1rem;
        background:rgba(255,255,255,1);
        border:2px solid rgba(144,196,252,1);
        border-radius:5px;
        box-shadow:0px 0px 5px 0px rgba(90,142,199,0.5);
        margin:0 auto;
        margin-top:.15rem;
        box-sizing: border-box;
    }
    .authorMessage{  
        padding:.3rem .27rem 0 .36rem;
        font-size:.14rem;
    }
    .btn{
        width:.8rem;
        height:.3rem;
        background:rgba(247,117,131,1);
        border-radius:8px;
        border:0;
        color:#fff;
        font-size:.14rem;
        margin-right:.3rem; 
    }
    .content{
        text-indent: 2em;
        margin-bottom:.1rem;
    }
</style>
