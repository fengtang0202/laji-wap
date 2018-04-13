<template>
    <div id="bookDetails" ref='content'>
           <loading :show="isShow"></loading>
            <app-feed  :param='rewordParam' ref="child"  @click="handleClosefeed()"></app-feed>
            <app-feedpepper :param='rewordParam'  ref="childfeedpepper" @click="handleClosefeedpepper()"></app-feedpepper>
            <AppMinpepper :param='rewordParam' ref='minfeedpepper' @click='handleCloseMinFeedPepper()'></AppMinpepper>
          <headerComponent  :list="topList" ></headerComponent>
          <div class="text">
              <img :src="infoList.bookImage" class="oImg">
              <div class="con">
                 <p class="p_one"><span v-html="infoList.bookName"></span></p>
                 <p class="p_two"><span>作者:</span><span class="l_d" v-html="infoList.writerName"></span></p>
                 <p class="p_two"><span>字数:</span><span  class="l_d" v-html="infoList.bookWorldCount">wwww</span></p>
                 <div class="p_two">
                    <span>分类:</span>
                    <span  class="l_d" v-html="infoList.classificationName"></span>
                    <p></p>
                    <span v-if="infoList.bookStatus==0">连载中</span>
                    <span v-if="infoList.bookStatus==1">已完结</span>
                 </div>
                 <div class="p_two">
                    <span class="title"  :key='index' v-for="(item,index) in labelList" v-html="item.bookLableName" :style="{color:item.bookColor}"></span>
                 </div> 
              </div>
          </div>
          <div class="check_d">              
              <div class="reader" v-for="(item,index) in cate"  :key='index' :class="{addCate:isActive===index}" @click="handleRead(index)"><span v-html="item.name"></span></div>
          </div>
          <div class="pepper">
             <div class="feed" @touchstart="handleClosefeed()">
                <img src="../../assets/images/d_18@3x.png">
                <p>投喂金椒</p>
             </div>
             <div class="feed" @click="handleClosefeedpepper()">
                 <img src="../../assets/images/d-28@3x.png">
                 <p>打赏辣椒</p>
             </div>
             <div class="feed" style="border:none;" @click='handleCloseMinFeedPepper()'>
                 <img src="../../assets/images/d-48@3x.png"> 
                 <p>投喂小米椒</p>
             </div>
          </div>
          <div class="evaluation">
              <div class="text_d"  @click="handleLook()">
                  <p :class="{'add':isAdd}">
                      {{infoList.bookIntroduction}}
                  </p>
              </div>
              <div style="height:.2rem;margin-top:.1rem;" v-if="lookShow">
                    <div class="expand"  @click="handleLook()">
                        <img src="../../assets/images/d-38@3x.png">  
                        <span>展开</span>               
                    </div>
              </div>
          </div>
          <div class="directory" @click="handleGo({path:'/directory',query:{bookId:readBookId}})">
             <span style='font-size:.18rem;color:#333'>目录</span>
             <span style="margin-left:.5rem;color:#999;">共{{chapterCount}}章</span>
             <img src="../../assets/images/d-58@3x.png"  >
          </div>
          <div class="comments">
              <p class="top_p">评论区</p>
              <div class="comments_d" @click='handleCommentDetail(i)' :key='index' v-for="(i,index) in commentList">
                  <div style="overflow:hidden;height:100%;margin-top:.1rem;">
                        <img :src="i.userHeadPortraitURL" class="oImg">
                        <img src="../../assets/images/crown@3x.png" class="t-img">
                        <div class="con_r">
                            <div style="">
                                <span class="name" v-html="i.pseudonym"></span>
                                <img src="../../assets/images/sex-02_03@3x.png" class="sex" v-if="i.userSex==0">
                                <img src="../../assets/images/sex-03@3x.png" class="sex" v-if="i.userSex==1">
                                <p class="grade">lv{{i.userGrade}}</p>
                            </div>
                            <div class="text_con" v-html="i.commentContext">
                                 
                            </div>
                            <div style="height:.2rem;color:#999;">
                               <p class="r_p">
                               <span>回复</span>
                               <span v-html="i.replyCount"></span>
                               <span style="margin-left:.5rem;">赞</span>
                               <span v-html="i.thumbsCount"></span>
                               </p>
                            </div>
                        </div>
                  </div>
              </div>
              <div class="more" @click="handleGo({path:'/bookComment',query:{bookId:readBookId}})">
                  <p>更多书评</p>
              </div>
          </div>
          <div class="similar">
             <div class="similar-text">
                <span>同类热门书籍</span>
             </div>
             <div class="similar-swiper">
                    <div class="swiper-wrapper">
                        <div class='swiper-slide' v-for="item in swiperList" @click='handleToBookDetail(item.bookId)' :key="item.bookId">
                           <img  :src="item.bookImage">
                           <span>{{item.bookName|bookName}}</span>
                         </div>
                    </div>
             </div>
          </div>
    </div>
</template>
<script>
    import AppFeed from '@/components/feed/feed.vue'
    import AppFeedpepper from '@/components/feed/feedPepper.vue'
    import AppMinpepper from '@/components/feed/minPepper'
    import { Loading } from 'vux'
    import { Post_formData2, noParam_Get,Param_Get_Resful } from '@/config/services'
    import {mapState,mapActions} from 'vuex'
import { setTimeout } from 'timers';
    export default {
        name: 'bookDetails',
        data () {
            return {
                isShow:false,
                isActive:0,
                width:0,
                topList:{
                   title_1:"书籍详情",
                   title_2:'首页',
                   link:'/'
                },
                cate:[
                    {name:'立即阅读'},
                    {name:'放入书架'}
                ],
                labelList:[],
                infoList:[],
                sectionCount:0,
                lookShow:true,
                isAdd:true,
                commentList:[],
                classId:'',
                swiperList:[],
                chapterCount:0,
                rewordParam:{},
                readBookId:this.$route.query.bookId,
                chapterId:0
            }
        },
        components: {
            Loading,
            AppFeed,
            AppFeedpepper,
            AppMinpepper
        },
        watch:{
          '$route'(){
              this.readBookId=this.$route.query.bookId
              this.handleInit()
              this.handleComments()
              window.scrollTo(0,0);
          }
        },
        computed:{
          ...mapState(['userInfo','isLogin']),
        },
        filters:{
            bookName:name=>name.length>6?(name.slice(0,5)+'....'):name
        },
        methods:{
            ...mapActions(['setReadCommentInfo','loginAction','getUserInfo']),
            handleRead (index) {
                 this.isActive = index;
                 index==1&&this.addBookRack()
                //  if(index===0){
                //      this.handleImmediatelyRead()
                //      setTimeout(()=>{
                //          this.$router.push({path:'/bookRead',query:{chapterId:this.chapterId}})
                //      },1000) 
                //  }
                index===0&&this.$router.push({path:'/bookRead',query:{bookId:this.readBookId,chapterId:this.chapterId}})
            },
            //由于之前考虑了直接看书是从目录一个地方跳转到bookRead 
            //没有考虑立即阅读,这样就导致我去看另一本书的时候chapterId 还是从目录跳转时候的值
            //解决1.要在立即阅读跳转时候修改掉chapterId
          async handleImmediatelyRead () {
                if(this.isLogin){
                    Post_formData2(this,{userid:this.userInfo.userId,startpage:1},'/api/person-UserBookReadRecord',res=>{
                       if(res.returnCode=200){
                          let chapterList=res.data.list
                          this.handleInitChapterId()
                          chapterList.forEach(value => {
                              if(value.bookId==this.readBookId){
                                this.chapterId=value.chapterId
                                console.log(this.chapterId,1)
                                // console.log(this.chapterId)
                                // return value.chapterId
                            }
                        })
                       }
                    })
                }else{
                    this.handleInitChapterId() 
                }
            },
            handleInitChapterId(){
                 Param_Get_Resful(this,'/api/books-volumeChapterList/'+this.readBookId,res=>{
                               if(res.returnCode===200){
                                 for(let item of res.data.chapterInfo){
                                   if(item.resultList.length!==0){
                                       this.chapterId=item.resultList[0].id
                                       return;
                                   }
                          }
                     }
                 })  
            },
            handleCommentDetail(item){
                this.setReadCommentInfo(item)
                this.$router.push({path:'/bookCommentDetail',query:{bookId:this.readBookId}})
            },
            handleClosefeed(){
                if(this.isLogin){
                    this.$refs.child.handleClose();
                }else{
                    this.$vux.toast.text('登录后再打赏')
                }
            },
            handleClosefeedpepper(){
                if(this.isLogin){
                    this.$refs.childfeedpepper.handleClosepepper();
                }else{
                    this.$vux.toast.text('登录后再打赏')
                }
            },
            handleCloseMinFeedPepper(){
                if(this.isLogin){
                    this.$refs.minfeedpepper.handleClose()
                }else{
                    this.$vux.toast.text('登录后再打赏')
                }
            },
            handleGo(res){
                 this.$router.push(res);
            },
            handleInit () {
                this.isShow = true; 
                Post_formData2(this,{bookid:this.readBookId},'/api/book-bookInfo',res=>{
                    if (res.returnCode==200) {
                        this.isShow = false;                        
                        this.chapterCount=res.data.chapterCount                        
                        this.infoList = res.data.bookListInfo;
                        this.classId = res.data.bookListInfo.bookClassificationId;
                        this.labelList = res.data.bookLable;
                        this.swiperList=res.data.similarRecommendation
                        this.rewordParam.authorId=res.data.AuthorInfo.userId
                        this.rewordParam.bookId=this.readBookId
                        this.rewordParam.bookName=res.data.bookListInfo.bookName
                        // setTimeout(()=>{
                        //     this.$refs.content.scrollIntoView();
                        //  },1000) 
                    }else{
                        this.$vux.toast.text(res.msg);
                    }
                })
            },
            handleBack(){
                 window.history.go(-1);
            },
            handleLook(){
                this.isAdd = !this.isAdd;
                this.lookShow = !this.lookShow;
            },
            addBookRack(){
                    //  this.confirmKey=1
                       Param_Get_Resful(this,'/api/bookshelf-bookshelfIsSave/'+this.readBookId,res=>{
                             if(res.returnCode==500){
                                 this.$vux.toast.text(res.msg)
                                 return;    
                             } else {
                          Post_formData2(this,{userName:this.userName,bookId:this.readBookId,bookName:this.bookName},'/api/bookshelf-adduserbookshelf',res=>{
                            // this.ConfirmShow=true
                            this.messageTitle='收藏书籍'
                            this.message='这本书还没有加入书架，现在帮您加入书架吗？'
                            if (res.returnCode==200) {   
                                 this.$vux.toast.text(res.msg)
                                 this.cate[1].name='已在书架'                                 
                            } else if (res.returnCode==400) {
                                this.messageTitle=res.msg
                                this.$vux.toast.show({text:'请先登录',type:'cancel'})
                                this.loginAction(false)
                                this.getUserInfo(null)
                                this.$router.push('/Login')
                            }
                         })
                      }
                  })
            },
            handleComments(){
                this.isShow = true;
                Post_formData2(this,{bookid:this.readBookId},'/api/comm-HotCommentInfo',res=>{
                    this.isShow = false;
                    if(res.returnCode==200){
                         this.commentList = res.data;
                    }else{
                        // this.$vux.toast.text('暂无评论!')
                    }
                })
            },
             refeshUserInfo(){
                 if(this.isLogin){
                    Post_formData2(this,'','/api/person-info',res=>{
                            if(res.returnCode===200){
                                this.getUserInfo(res.data) 
                             }
                      })
                  }
            },
            handleToBookDetail(bookId){
                 this.$router.push({path:'/bookDetails',query:{bookId:bookId}});
                //  this.readBookId=bookId                               
                //  this.handleInit()
                //  this.handleComments()
            }
          },
        mounted () {
            this.handleInit();
            this.handleComments();
            this.handleInitChapterId()
            Param_Get_Resful(this,'/api/bookshelf-bookshelfIsSave/'+this.readBookId,res=>{
                if(res.returnCode==500){
                 this.cate[1].name='已在书架'
              }
          })
         }
        }
</script>

<style lang="less" scoped>
  @import '../../css/paper';
  @import '../../css/bookDetail';  
</style>