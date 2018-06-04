<template>
   <div id="bookDetails" v-if='showContent'>
          <headerComponent  ref='headerCom' :list="topList" ></headerComponent>
           <!-- <loading :show="isShow"></loading> -->
            <app-feed  :param='rewordParam' ref="child"  @click="handleClosefeed()"></app-feed>
            <app-feedpepper :param='rewordParam'  ref="childfeedpepper" @click="handleClosefeedpepper()"></app-feedpepper>
            <AppMinpepper :param='rewordParam' ref='minfeedpepper' @click='handleCloseMinFeedPepper()'></AppMinpepper>
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
                 <img src="../../assets/images/qinyue.png"  v-if='isQ' class='qianyue' alt="">
                 <img src="../../assets/images/zw.png" class='zw' v-if='infoList.collectionDocuments==1'>
          </div>
          <div class="check_d">              
              <div class="reader" v-for="(item,index) in cate"  :key='index' :class="{addCate:isActive===index}" @click="handleRead(index)"><span v-html="item.name"></span></div>
          </div>
          <div class="pepper">
             <div class="feed" @click="handleClosefeed()">
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
              <div style="height:.2rem;margin-top:.1rem;">
                    <div class="expand"  @click="handleLook()">
                        <img src="../../assets/images/d-38@3x.png" :style="{'transition':'all .3s','transform':isAdd?'rotate(0deg)':'rotate(180deg)'}">              
                    </div>
              </div>
          </div>
          <div class="directory" @click="handleGoDirectory()">
             <span style='font-size:.18rem;color:#333'>目录</span>
             <span style="margin-left:.5rem;color:#999;">共{{chapterCount}}章</span>
             <span style='margin-left:.3rem;color:#F77583' v-if='!showTime'>{{updateTime|formatDate3}}</span>
             <span style='margin-left:.5rem;color:#F77583' v-if='showTime'>{{updateTime}}</span>             
             <img src="../../assets/images/d-58@3x.png" >
          </div>
          <div class="comments">
              <p class="top_p">评论区</p>
              <!--评论 -->
              <commendItem :list='commentList'></commendItem>
              <!--  -->
              <div class="more" @click="handleGo({path:'/bookComment',query:{bookId:readBookId}})">
                    <No v-if='showNoContent' message='暂无评论'></No>
                  <p>
                      <span>更多书评</span>  
                      <img  src="../../assets/images/more@3x.png" alt="">                
                </p>
              </div>
          </div>
          <div class="similar">
             <div class="similar-text">
                <span>同类热门书籍</span>
             </div>
               <scroller lock-y :scrollbar-x=false>
                    <div class="similar-swiper"  :style='{width:width}'>
                    <div class="swiper-wrapper">                        
                        <div class='swiper-slide' v-for="item in swiperList" @click='handleToBookDetail(item.bookId)' :key="item.bookId">
                           <img  :src="item.bookImage" style='border-radius:5px;'>
                           <span>{{item.bookName|str(5)}}</span>
                           <!-- <img src="../../assets/images/qinyue.png"  v-if='item.check' class='qianyue' alt=""> -->
                        </div>
                    </div>
                    </div>
              </scroller>
          </div>
    </div>
</template>
<script>
    import AppFeed from '@/components/feed/feed.vue'
    import AppFeedpepper from '@/components/feed/feedPepper.vue'
    import AppMinpepper from '@/components/feed/minPepper'
    import { Loading,Scroller} from 'vux'
    import { Post_formData2, noParam_Get,Param_Get_Resful } from '@/config/services'
    import {mapState,mapActions} from 'vuex'
    export default {
        name: 'bookDetails',
        data () {
            return {
                showContent:false,
                isShow:false,
                showTime:true,
                isActive:0,
                width:0,
                topList:{
                   title_1:"书籍详情",
                   title_2:'首页',
                   link:'/'
                },
                cate:[
                    {name:'立即阅读'},
                    {name:'自动订阅'},
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
                chapterId:0,
                Condition:false,
                isBook:false,
                btnShow:false,
                isQ:false,
                updateTime:'',
                showNoContent:false,
            }
        },
        components: {
            Loading,
            AppFeed,
            AppFeedpepper,
            AppMinpepper,
            Scroller
        },
         beforeRouteEnter(to,from,next){
           next()
         },
         beforeRouteLeave: (to, from, next) => {
             next(vm=>{
                 vm.showContent=false
             })
         },
        watch:{
          '$route'(){
              this.readBookId=this.$route.query.bookId
              this.handleInit()
              this.handleComments()
          },
          Immediate:true
        },
        computed:{
          ...mapState(['userInfo','isLogin']),
        },
        methods:{
            ...mapActions(['setReadCommentInfo','loginAction','getUserInfo']),
            handleRead (index) {
                 this.isActive = index;
                  if(index===0){
                      this.handleImmediatelyRead()
                      return;
                  }  
                 if(this.isLogin){
                     index===1&&this.handleIsAuto()
                     index===2&&this.handleBookRack()
                 }else{
                    this.$router.push({path:'/Login',query:{redirect: this.$route.path+'?bookId='+this.readBookId}}) 
                 }
           },
            //由于之前考虑了直接看书是从目录一个地方跳转到bookRead 
            //没有考虑立即阅读,这样就导致我去看另一本书的时候chapterId 还是从目录跳转时候的值
            //解决1.要在立即阅读跳转时候修改掉chapterId
            handleInitChapterId(){
                return new Promise((resolve,reject)=>{
                     Param_Get_Resful(this,'/api/books-volumeChapterList/'+this.readBookId,res=>{
                               if(res.returnCode===200){
                                 for(let item of res.data.chapterInfo){
                                   if(item.resultList.length!==0){
                                       resolve(item.resultList[0].id)
                              }
                          }
                     }
                  })  
               })
            },
            handleImmediatelyReadChapter () {
             return new Promise((resolve,reject)=>{
                    Post_formData2(this,{userid:this.userInfo.userId,startpage:1},'/api/person-UserBookReadRecord',res=>{
                        if(res.returnCode==200){
                          let ReadList=res.data.list
                          this.handleInitChapterId()
                          ReadList.forEach(value => {
                              if(value.bookId==this.readBookId){
                                  resolve(value.chapterId)
                             }else{
                                 this.handleInitChapterId().then(res=>{
                                   reject(res)  
                                })                              
                             } 
                          })
                          }else{
                            this.handleInitChapterId().then(res=>{
                                  reject(res)
                            })
                        }
                    })  
                })
            },
             handleToAndChapter(_router){
                  if(this.isLogin){
                   this.handleImmediatelyReadChapter().then(res=>{
                      this.$router.replace({path:_router,query:{bookId:this.readBookId,chapterId:res,bookName:this.rewordParam.bookName}})
                 },res=>{
                      this.$router.push({path:_router,query:{bookId:this.readBookId,chapterId:res,bookName:this.rewordParam.bookName}})                     
                 })
                }else{
                   this.handleInitChapterId().then(res=>{
                    this.$router.push({path:_router,query:{bookId:this.readBookId,chapterId:res,bookName:this.rewordParam.bookName}})                    
                })
              }   
            },
            handleImmediatelyRead () {
                  this.handleToAndChapter('/bookRead')
            },
            handleGoDirectory(){
                this.handleToAndChapter('/directory')
            },
            handleCommentDetail(item){
                this.setReadCommentInfo(item)
                this.$router.push({path:'/bookCommentDetail',query:{bookId:this.readBookId}})
            },
            handleClosefeed(){
                if(this.isLogin){
                    this.$refs.child.handleClose();
                }else{
                    this.$router.push({path:'/Login',query:{redirect: this.$route.path+'?bookId='+this.readBookId}})
                }
            },
            handleClosefeedpepper(){
                if(this.isLogin){
                    this.$refs.childfeedpepper.handleClosepepper();
                }else{
                    this.$router.push({path:'/Login',query:{redirect: this.$route.path+'?bookId='+this.readBookId}})
                }
            },
            handleCloseMinFeedPepper(){
                if(this.isLogin){
                    this.$refs.minfeedpepper.handleClose()
                }else{
                    this.$router.push({path:'/Login',query:{redirect: this.$route.path+'?bookId='+this.readBookId}}) 
                }
            },
            handleGo(res){
                 this.$router.push(res);
            },
            handleInit () {
                this.isShow = true; 
                Post_formData2(this,{bookid:this.readBookId},'/api/book-bookInfo',res=>{
                    if (res.returnCode==200) {
                        window.scrollTo(0,0)
                        this.showContent=true
                        let size=res.data.similarRecommendation.length+1
                        this.width=(size*96+size*5)/100+'rem'
                        this.isShow = false;
                        this.chapterCount=res.data.chapterCount                   
                        this.infoList = res.data.bookListInfo;
                        let time=res.data.bookListInfo.lastUpdateTime 
                        let date3 = new Date().getTime()-time
                        var days=Math.floor(date3/(24*3600*1000))
                        var leave1=date3%(24*3600*1000)    
                        var hours=Math.floor(leave1/(3600*1000))  
                        var leave2=leave1%(3600*1000)       
                        var minutes=Math.floor(leave2/(60*1000))  
                        var leave3=leave2%(60*1000)     
                        var seconds=Math.round(leave3/1000)  
                        if(days>=1){
                            this.updateTime=res.data.bookListInfo.lastUpdateTime
                            this.showTime=false
                        }else if(hours>0){
                            this.updateTime=hours+'小时前'
                            this.showTime=true
                        }else{
                            this.updateTime=minutes+'分钟前'
                            this.showTime=true                            
                        }

                        let qy=this.infoList.bookAuthorization
                        if(qy==1||qy==2){
                            this.isQ=true
                        }else{
                            this.isQ=false
                        }     
                        this.classId = res.data.bookListInfo.bookClassificationId;
                        this.labelList = res.data.bookLable;
                        this.swiperList=res.data.similarRecommendation
                        // let squ=this.res.data.similarRecommendation.bookAuthorization
                        this.swiperList.forEach(value=>{
                          if(value.bookAuthorization==1||value.bookAuthorization==2){
                              value.check=true
                          }else{
                              value.check=false
                          }
                        })
                        this.rewordParam.authorId=res.data.AuthorInfo.userId
                        this.rewordParam.bookId=this.readBookId
                        this.rewordParam.bookName=res.data.bookListInfo.bookName
                    }else{
                        // this.$vux.toast.text(res.msg);
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
            handleBookRack(){
                this.addBookRack()
            },
            addBookRack(){
                 Post_formData2(this,{userName:this.userName,bookId:this.readBookId,bookName:this.bookName},'/api/bookshelf-adduserbookshelf',res=>{
                            if (res.returnCode==200) {
                                this.isBook=!this.isBook 
                                this.isBook?this.$vux.toast.text('加入成功!'):this.$vux.toast.text('移出成功!')
                                this.isBook?this.cate[2].name='已在书架':this.cate[2].name='加入书架'                                 
                            } else if (res.returnCode==400) {
                                this.loginAction(false)
                                this.getUserInfo(null)
                                this.$router.push({path:'/Login',query:{redirect: this.$route.path+'?bookId='+this.readBookId}})
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
                        this.commentList=null
                    }
                })
            },
            handleToBookDetail(bookId){
                if(this.isLogin){
                    this.readBookId=bookId
                    this.handleIsAuto('search')
                    this.isBookRack()
                }
                 this.$router.replace({path:'/bookDetails',query:{bookId:bookId}});
            },
            isBookRack(){
              Param_Get_Resful(this,'/api/bookshelf-bookshelfIsSave/'+this.readBookId,res=>{
                if(res.returnCode==500){
                 this.cate[2].name='已在书架'
                 this.isBook=true
                }else{
                  this.cate[2].name='加入书架'
                  this.isBook=false
               }
             })              
            },
            handleIsAuto (type='update') {
                   let options = {
                    bookid:this.readBookId,
                    type:type,
                    isSelect:this.btnShow?1:0
                }
                Post_formData2(this,options,'/api/userRmemberChose',res=>{
                    if(res.returnCode==200){ 
                        res.data.isClose==0?this.btnShow=true:this.btnShow=false
                        res.data.isClose==0?this.cate[1].name='自动订阅':this.cate[1].name='取消订阅'
                    }else if(res.returnCode==500){
                        this.btnShow=true
                        this.cate[1].name='自动订阅'
                    }
                 })                
            },
          },
        mounted () {
             this.handleInit();
             this.handleComments(); 
            if(this.isLogin){
              this.handleIsAuto('search')
              this.isBookRack()
              Post_formData2(this,{userid:this.userInfo.userId,startpage:1},'/api/person-UserBookReadRecord',res=>{
               let a=[]
               if(res.returnCode==200){
                          let ReadList=res.data.list
                          ReadList.forEach(value => {
                          value.bookId==this.readBookId?a.push(1):a.push(2)
                    })
                     a.includes(1)?this.cate[0].name='继续阅读':this.cate[0].name='立即阅读'
                 }
             })
           }
          }
        }
</script>

<style lang="less" scoped>
[v-cloak]{ display:none} 
  @import '../../css/paper';
  @import '../../css/bookDetail';  
</style>