<template>
     <div :style='{"backgroundColor":backgroundColor}'>
       <div>
            <app-feed  :param='rewordParam' ref="child"  @click="handleClosefeed()"></app-feed>
            <app-feedpepper :param='rewordParam'  ref="childfeedpepper" @click="handleClosefeedpepper()"></app-feedpepper>
            <AppMinpepper :param='rewordParam' ref='minFeedpepper' @click='hanldeCloseMinFeedPepper()'></AppMinpepper>
       <div class='bookRead'>
       <div class='clickDiv' @click='up()'>
       </div>
    <div class='feed' :class='{show2:feedShow}'>
            <div class='nav' @touchend='show=!show'>
              <img src="../../assets/images/dropdown@3x.png"   alt="">
            </div>
            <div style='float:right'>
               <img :src='item.img' :style='{width:index==1&&".71rem"||index==2&&".57rem"}' @click='handleFeedTap(index)'  class='pepper' :key='index' v-for='(item,index) in feedList' alt="">
            </div>
            <div class='black' @click="handleBack()">
              <img  src="../../assets/images/left.png" alt="">
            </div>
    </div>
     <ul class='nav_list' :class='{show1:show}'>
         <li v-for='(item,index) in navList' :key='index' @click='handleTap(item.key)'>{{item.text}}</li>
     </ul>
    <ul class='share_list' :class='{show3:shareShow}'>
        <li v-for='(item,index) in shareList'  @click='handleShare(index)' :key='index'>
            <img v-lazy='item.img' alt="" :class='item.css'>
            <p>{{item.text}}</p>
        </li>
        <li></li>
        <li></li>
    </ul>
    <div class='bottom_nav' :class='{show:bottomShow}'>
         <div class='one_nav'>
             <ul>
                 <li>字号</li>
                 <li class='m' @click='handleFontSize(0)' style='font-size:.18rem;'>A-</li>
                 <li class='m' @click='handleFontSize(1)' style='font-size:.2rem;'>A+</li>
                 <li>自动订阅</li>
                 <li>
                     <x-switch title="" v-model="btnShow" @on-change="change"></x-switch>                     
                 </li>
             </ul>
         </div>
         <div class='tow_nav'>
              <ul>
                  <li v-for='(item,index) in colorList' :key='index' @click='changebgColor(item)' :style='{"backgroundColor":item.bgcolor}'></li>
              </ul>
         </div>
         <div v-transfer-dom>
          <confirm v-model="ConfirmShow"
            color='#000'
            :title='messageTitle'
            @on-cancel="onCancel"
            @on-confirm="onConfirm">
          <p style="text-align:center;color:#333333;font-size:.13rem;">{{message}}</p>
          </confirm>
        </div>
    </div>
      <div class='book_content' @click='up()' ref='content' :style='{"height":height,"fontSize":fontSize+"em","backgroundColor":backgroundColor,"color":fontColor}' :class='{changeColor:show}'>
         <h3 ref='title'>{{chapterName}}</h3>
          <p v-html='bookText'  style='padding-bottom:.4rem;min-height:100vh' onselectstart="return false"></p>  
      </div>
          <div class='last_nav'  :style='{transform: lastNav?"translate(0,0)":"translate(0,.54rem)",opacity:lastNav?1:0}'>
              <ul style='overflow:hidden;'>
                  <li v-for='item in bottomNavList' :key='item.key' @click='handleTap(item.key)'>
                      <div  class='nav_d'>
                         <img v-lazy='item.img' alt="">
                      </div>
                         <p class='nav_text' :class='item.css' >{{item.text}}</p>                      
                   </li>
              </ul>
          </div>
    </div>
      <div v-transfer-dom>
                <x-dialog   v-model="dialogshow"  :hide-on-blur='bool' class="dialog-demo">
                    <div style="padding:.7rem 0rem;">
                        <!-- 未登录 -->
                        <div v-if='!isLogin'>
                            <img style='width:1rem;height:1.63rem' src="../../assets/images/ns@2x.png" alt="">
                            <p style='color:#333;margin:.1rem'>
                                <span>价格:{{price}}</span>
                                <!-- <span>余额{{userInfo.userMoney}}</span> -->
                            </p>
                            <p  style='#999;' v-if='isvip==1'>本章是VIP章节，需购买后阅读</p>
                            <p>
                             <button @click='buyChapter()' style='width:2rem;height:.4rem;color:#fff;margin:.3rem 0;outline:none;border:0;border-radius:.5rem;background-color:#F77583'>登录阅读</button>
                            </p>
                           
                        </div>
                        <!-- 登录 -->
                    <div v-if='isLogin'>
                            <img style='width:1rem;height:1.63rem' src="../../assets/images/ns@2x.png" alt="">
                            <p style='color:#333;font-size:.16rem;'>
                                <span>价格:{{price}}</span>
                            </p>
                            <p style='font-size:.14rem'>
                                <span>余额{{feedPepper}}辣椒</span>
                                <span style='margin-left:.1rem;'>{{userInfo.userReadTicket}}辣椒劵</span>
                                </p>
                            <p>
                            <button v-if='btn' @click='buyChapter()'  style='font-size:.14rem;width:2rem;height:.4rem;color:#fff;margin:.3rem 0;outline:none;border:0;border-radius:.5rem;background-color:#F77583'>购买本章</button>
                            <button v-if='!btn' @click='handleGo()'  style='font-size:.14rem;width:2rem;height:.4rem;color:#fff;margin:.3rem 0;outline:none;border:0;border-radius:.5rem;background-color:#F77583'>去充值</button>                            
                            </p>
                            <p style='font-size:.14rem;' @click='handleClickAuto()'>
                                 <img v-if="!btnShow" style='vertical-align: middle;width:.16rem;height:.16rem;' src="../../assets/images/Combined Shape Copy@3x.png" alt="">
                                 <img v-if="btnShow" style='vertical-align: middle;width:.16rem;height:.16rem;' src="../../assets/images/Oval 8 Copy@3x.png" alt="">
                                <span>自动购买下一章，不再提醒</span>
                            </p>
                        </div>
                    </div>
                </x-dialog>
                 <!-- <popup v-model="showDirectory" position="right">
                        <div style="width:3rem;">
                        </div>
                  </popup> -->
         </div>
      </div>
    </div>
</template>
<script>
import { Post_formData2, noParam_Get,Param_Get_Resful } from '@/config/services'
import {TransferDomDirective as TransferDom,Confirm, XDialog,Popup,XSwitch} from 'vux'
import {mapState,mapActions} from 'vuex'
import soshm from 'soshm'
import AppFeed from '@/components/feed/feed.vue'
import AppFeedpepper from '@/components/feed/feedPepper.vue' 
import AppMinpepper from '@/components/feed/minPepper'
import {refshUserInfo} from '../../config/getData'        
import { setInterval, clearInterval } from 'timers';
     export default{
         data(){
            return{
               bool:true,
               contentHeight:0,
               showDirectory:false, 
               pulldown:true,
               bookText:'',
               isScroll:false,
               lastNav:false,
               show:false,
               message:'',
               btn:true,
               ConfirmShow:false,
               chapterIdNum:0,
               bookName:'',
               bookImg:'',
               bookIntroduction:'',
               messageTitle:'',
               touchstartX:0,
               chapterName:'',
               touchstartY:0,
               chapterList:[],
               bottomShow:false,
               shareShow:false,
               confirmKey:0,
               dialogshow:false,
               preNextShow:false,
               isvip:this.$route.query.isvip,
               price:this.$route.query.price,    
               readBookId:this.$route.query.bookId, 
               chapterId:this.$route.query.chapterId,
               btnShow:false,
               isSelect:0,
               rewordParam:{},
               iconLink:'',
               feedShow:false,
               isBook:false,
               scroll:0,
               clientHeight:0,
               backLink:'',
               scrollHeight:0,
               height:document.documentElement.clientHeight,
               feedList:[
                   {img:require('../../assets/images/Group 3@3x.png')},
                   {img:require('../../assets/images/Group 2@3x.png')},
                   {img:require('../../assets/images/Group@3x.png')}                   
               ],
               navList:[
                   {text:'书籍详情',key:1},
                   {text:'查看书评',key:2},
                   {text:'加入书架',key:3},
                //    {text:'添加书签',key:4},
                   {text:'举报本章',key:5},
                //    {text:'分享本书',key:6}
               ],
               shareList:[
                   {text:'新浪微博',img:require('../../assets/images/sinaweibo @3x.png'),css:'img1'},
                   {text:'QQ空间',img:require('../../assets/images/qqqzone @3x.png'),css:'img2'},
                   {text:'微信好友',img:require('../../assets/images/wechat @3x.png'),css:'img3'},
                   {text:'微信朋友圈',img:require('../../assets/images/pengyouqun@3x.png'),css:'img4'},
                   {text:'微信收藏',img:require('../../assets/images/wechatfavorite @3x.png'),css:'img5'},
                   {text:'QQ',img:require('../../assets/images/qqshare@3x.png'),css:'img6'},                   
               ],
               colorList:[
                   {bgcolor:'#ffffff',fontColor:'#333333'},
                   {bgcolor:'#e5dfca',fontColor:'"#383222'},
                   {bgcolor:'#C8D7EB',fontColor:'#162a44'},
                   {bgcolor:'#CFE1CC',fontColor:'#16310e'},
                   {bgcolor:'#D2B0A6',fontColor:'#35150b'},
                   {bgcolor:'#0D1734',fontColor:'#5f8590'}
                   ],
               bottomNavList:[
                   {img:require('../../assets/images/pre@3x.png'),text:'上一章',key:7,css:'p1'},
                   {img:require('../../assets/images/Combined Shape@3x.png'),text:'目录',key:8,css:'p2'},
                   {img:require('../../assets/images/Combined Shape1@3x.png'),text:'设置',key:9,css:'p3'},
                   {img:require('../../assets/images/nextCopy@3x.png'),text:'下一章',key:10,css:'p4'}
               ],
               readChapterIndex:1,
               fromPath:''
            }
         },
         components:{
             Confirm,XDialog,AppFeed,AppFeedpepper,AppMinpepper,Popup,XSwitch 
        },
         computed: {
             ...mapState(['showLoginDate','userInfo','isLogin','backgroundColor','fontSize','fontColor','feedPepper']),              
         },
         directives: {
             TransferDom
         },
         watch:{
            '$route'(){
                this.chapterId=this.$route.query.chapterId
                // this.$refs.title.scrollIntoView(true)
                this.getBookText()
                // this.getNowChapterId()                                                     
                this.isLogin&&this.addReadHistory()
            }
         },
          beforeRouteLeave(to,from,next){
                sessionStorage.removeItem('gc')
                if(this.isLogin&&to.path=='/Login'){
                   this.$router.go(-2)
                }
                 document.body.style.backgroundColor ='#fff' 
                 next()
         },
          beforeRouteEnter: (to, from, next) => {
              next(vm=>{
                  vm.fromPath=from.path
                  to.meta.title=vm.$route.query.bookName
                  document.body.style.backgroundColor = vm.backgroundColor
            })      
         },
         methods:{
             handleBack(){
                 let code = sessionStorage.getItem('gc')
                 if(code=='a'){
                     this.$router.push('/')
                 }else if(this.fromPath=='/directory'){
                     this.$router.go(-1)
                }else{
                    this.$router.push({path:'/bookDetails',query:{bookId:this.readBookId}})
                }
             },
             ...mapActions(['setshowLoginDate','setShowBindPhone','setshowLoginDate','getUserInfo','setBackgroundColor','setFontSize','setFontColor','setfeedPepper']),
             handleFontSize(res){
                  res===1&&this.handleFontSizeAdd()
                  res===0&&this.handleFontSizeSubtract()
             },
             handleFontSizeAdd(){
                    if(this.fontSize<2){
                        let fontSize=this.fontSize+.1
                        this.setFontSize(fontSize)
                    }else{
                        this.$vux.toast.text('字体最大了,保护好眼睛!')
                    }
             },
             handleFontSizeSubtract (){
                 if(this.fontSize>1.125){
                     let fontSize=this.fontSize-.1
                     this.setFontSize(fontSize)
                 }else{
                     this.$vux.toast.text('字体最小了,保护好眼睛!')
                 }
             },
              handleClosefeed(){
                this.$refs.child.handleClose();
             },
              handleClosefeedpepper(){
                this.$refs.childfeedpepper.handleClosepepper();
             },
              hanldeCloseMinFeedPepper(){
                this.$refs.minFeedpepper.handleClose()
             },
              handleFeedTap(index){
                if(this.isLogin){
                    index===0&&this.handleClosefeedpepper()
                        index===2&&this.handleClosefeed()
                      if(index===1){
                        // if(this.userInfo.userPhone!='9527'){
                        //    this.hanldeCloseMinFeedPepper()
                        // }else{
                        //    this.setShowBindPhone(true)
                        // }
                        this.$vux.toast.text('前往应用商店下载辣鸡小说App,投喂小米椒');
                    }
                }else{
                  this.setshowLoginDate(true)
                //this.$router.push({path:'/Login',query:{redirect: `${this.$route.path}?bookId=${this.readBookId}&isvip=${this.isvip}&price=${this.price}&chapterId=${this.chapterId}`}})                                             
                }
              },
             handleShare(index){
                  index==0&&this.handleShareWP()
                  index==3&&this.handleShareWX()
                  index==5&&this.handleShareQQ()
             },
            handleShareWX(){
                    this.$wechat.onMenuShareTimeline({
                        title: 'hello VUX',
                         link:window.location.href,
                    //      success: function () { 
                    //     // 用户确认分享后执行的回调函数
                    //       alert('分享成功');
                    //    },
                    })
             },
            handleShareQQ(){
                 this.$wechat.onMenuShareQQ({
                     title:'11111'
                 })  
             },
            handleShareWP(){
                this.$wechat.onMenuShareAppMessage({
                    title:'1'
                })
             },
            changebgColor(item){
                this.setBackgroundColor(item.bgcolor)
                document.body.style.backgroundColor =item.bgcolor 
                this.setFontColor(item.fontColor)
             },
            getBookText(){
                 Post_formData2(this,{chapterId:this.chapterId},'/api/book-read',res=>{
                     if (res.returnCode==400){
                         this.dialogshow=true
                     }
                     if (res.returnCode==200){
                         this.dialogshow=false
                     }
                    if (res.returnCode===800){
                        this.$vux.toast.show('作者偷懒中....')
                        return;
                    }
                    // if (res.returnCode==1000) {
                    //     this.$vux.toast.show({text:'服务器异常',type:'warn'})
                    //     return ;
                    // }
                    let words=res.data.chapterInfo.chapterLength
                    let money = words/1000
                    // words%1000>0&&(money+=1)    
                   //1000 字 3分钱
                    this.price=parseInt(money*3)
                    this.bookText=res.data.chapterInfo.chapterContent.replace(/<LG>[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}<\/LG>/g,'<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;').replace(/[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}/g,' ')
                    this.preNextShow=true
                    this.bookName=res.data.bookInfo.bookName
                    this.bookImg=res.data.bookInfo.bookImage
                    this.bookIntroduction=res.data.bookInfo.bookIntroduction
                    this.isvip=res.data.chapterInfo.chapterIsvip
                    this.chapterName=res.data.chapterInfo.chapterTitle
                    this.rewordParam.authorId=res.data.chapterInfo.bookWriterId
                    this.rewordParam.bookName=res.data.bookInfo.bookName
                // document.documentElement.style.height=window.innerHeight+'px'
                 if (res.returnCode==500) {
                        if (this.isLogin) {
                           this.btnShow&&this.buyChapter()                              
                       }
                          this.dialogshow=!this.btnShow
                  }   
              })
             },
            //  上拉加载数据
            onConfirm(res){
                 //确定以后的操作
                res==1&&this.addBookRack()
             },
            onCancel(){
                //取消以后的操作
            //    console.log(1)
            },
            getNowChapterId(){
                   Param_Get_Resful(this,`/api/books-volumeChapterList/${this.readBookId}`,res=>{
                    let arr=res.data.chapterInfo
                    arr.forEach(value=>{
                        this.chapterList=this.chapterList.concat(value.resultList)
                    })
                      for(let n in this.chapterList){
                        if(this.chapterList[n].id==this.chapterId){
                            this.chapterIdNum=n
                        }
                    }
                }) 
             },  
            refreshuserInfo(){
               Post_formData2(this,'','/api/person-info',res=>{
                            if(res.returnCode==200){
                                this.getUserInfo(res.data) 
                            }else{
                                 this.getUserInfo(null)
                             setTimeout(()=>{
                                 this.$router.push({path:'/',query:{redirect: '/myWallet'}})
                             },2000) 
                         }
                 })
             },
            getNextChapterText () {
                   this.confirmKey=0
                   let n=this.chapterList.length
                   this.chapterIdNum++ 
                   this.readChapterIndex++
                   if(this.readChapterIndex%4==0){
                       if(!this.isLogin&&!this.showLoginDate){
                           this.setshowLoginDate(true)
                       }
                   }
                  if(this.chapterIdNum<n){
                    // this.getNowChapterId()                 
                    // this.setChapterId(this.chapterList[this.chapterIdNum].id)
                    this.chapterId=this.chapterList[this.chapterIdNum].id
                    // if (this.isLogin) {
                    //     this.btnShow&&this.buyChapter()                              
                    // }
                        // !this.btnShow&&this.getBookText()
                     this.$router.replace({path:'/bookRead',query:{bookId:this.readBookId,chapterId:this.chapterId}})                       
                     this.$refs.content.scrollIntoView();
                    //  window.scrollTo(0,0)                    
                  }else{
                    this.messageTitle='目前最后一章'
                    this.ConfirmShow=true
                  }
             },
            getPreChapterText () {
                   this.confirmKey=0                
                 if (this.chapterIdNum>0) {
                    this.chapterIdNum--  
                    // this.getNowChapterId()                                     
                    // this.setChapterId(this.chapterList[this.chapterIdNum].id) 
                    this.chapterId=this.chapterList[this.chapterIdNum].id 
                    // if(this.isLogin){
                    //     this.btnShow&&this.buyChapter()    
                    // }
                    //参数 isvip:this.isvip,price:this.price
                    this.$router.replace({path:'/bookRead',query:{bookId:this.readBookId,chapterId:this.chapterId}})                       
                    this.$refs.content.scrollIntoView();
                    // window.scrollTo(0,0)
                 } else {
                     this.messageTitle='第一章了'
                     this.ConfirmShow=true  
                 }
            },
            addBookRack(){
                    // if(this.isLogin){
                         Post_formData2(this,{userName:this.userName,bookId:this.readBookId,bookName:this.bookName},'/api/bookshelf-adduserbookshelf',res=>{
                            if (res.returnCode==200) {
                                this.isBook=!this.isBook 
                                this.isBook?this.$vux.toast.text('加入成功!'):this.$vux.toast.text('移出成功!')
                                this.isBook?this.navList[2].text='已在书架':this.navList[2].text='加入书架'                                 
                          }
                    //    else{
                    //        this.$router.push({path:'/Login',query:{redirect: `${this.$route.path}?bookId=${this.readBookId}&isvip=${this.isvip}&price=${this.price}&chapterId=${this.chapterId}`}})                         
                    //   }
                })
            },
            handleTap(res){
                 if (res===6) {
                    //  this.shareShow=!this.shareShow
                    //  this.lastNav=false
                   let self=this
                   this.feedShow=false;
                   this.lastNav=false
                   this.show=false
                   soshm.popIn({
                   title: self.bookName,
                   digest:this.bookIntroduction,
                   pic:this.bookImg,
                     sites: ['weixin', 'weixintimeline', 'weibo', 'qq','qzone']
                   });
                 }
                 res===5&&this.$vux.toast.text('举报成功!')
                 res===1&&this.$router.replace({path:'/bookDetails',query:{bookId:this.readBookId}});
                 res===2&&this.$router.push({path:'bookComment',query:{bookId:this.readBookId}})
                 if(res===3){
                     if(this.isLogin){
                         this.addBookRack()  
                     }else{
                        this.setshowLoginDate(true)
                        // this.$router.push({path:'/Login',query:{redirect: `${this.$route.path}?bookId=${this.readBookId}&isvip=${this.isvip}&price=${this.price}&chapterId=${this.chapterId}`}})                                                  
                     }
                 } 
                 res===9&&(this.bottomShow=!this.bottomShow)
                 res===10&&this.getNextChapterText()
                 res===7&&this.getPreChapterText()
                 res===8&&this.$router.push({path:'/directory',query:{bookId:this.readBookId,chapterId:this.$route.query.chapterId}})
                    // this.showDirectory=true
                 if(res===4){
                     if(this.isLogin){
                         this.addReadHistory()
                     }else{
                        this.$router.push({path:'/Login',query:{redirect: `${this.$route.path}?bookId=${this.readBookId}&isvip=${this.isvip}&price=${this.price}&chapterId=${this.chapterId}`}})                                                                           
                     }
                 }
             },
             up () {
                  this.feedShow=!this.feedShow
                  this.lastNav=!this.lastNav
                 if(!this.feedShow){
                     this.lastNav=false
                     this.show=false
                     this.shareShow=false                  
                     this.bottomShow=false
                 }
            },
            change (status) { 
                if(this.isLogin){
                    this.handleIsAuto()
                    setTimeout(()=>{
                        this.$Message.info(status?'订阅成功':'订阅取消');
                    },200)
                }else{
                    this.setshowLoginDate(true)
                //  this.$router.push({path:'/Login',query:{redirect:this.$route.fullPath}})                                             
                }
            },
            handleGo () {
                  this.$router.push('/payMoney')
            },
            addReadHistory () {
                let options={
                    userName:this.userInfo.userName,
                    bookId:this.readBookId,
                    bookName:this.bookName,
                    chapterId:this.chapterId,
                    chapterName:this.chapterName
                    }
               Post_formData2(this,options,'/api/person-addBookReadRecord',res=>{
                    // this.$vux.toast.text('添加书签成功!')
               }) 
            },
            buyChapter () {
                if(this.isLogin){
                    let options={
                        userName:this.userInfo.pseudonym,
                        bookId:this.readBookId,
                        bookName:this.bookName,
                        bookChapterId:this.chapterId,
                        bookChapterName:this.chapterName	
                }
                Post_formData2(this,options,'/api/book-subscription',res=>{
                    if (res.returnCode===200) {
                         this.btn=true
                         this.bookText=res.data.chapterContent.replace(/<LG>[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}<\/LG>/g,'<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')
                         this.isLogin&&(this.dialogshow=false)
                         let feedPepper=this.feedPepper-this.price
                         this.setfeedPepper(feedPepper)
                    }else if(res.returnCode===300){
                        this.$vux.toast.show({text:res.msg})
                        this.btn=false
                    }
                  })
                }else{
                    this.dialogshow=false
                    this.setshowLoginDate(true)
                }
            },
            handleIsAuto (type='update') {
                 let options = {
                    bookid:this.readBookId,
                    type:type,
                    isSelect:this.btnShow?1:0
                }
                Post_formData2(this,options,'/api/userRmemberChose',res=>{
                    if(res.returnCode==200){ 
                        res.data.isClose==1?this.btnShow=true:this.btnShow=false
                    }
                 })
            },
            handleClickAuto () {
                this.btnShow=!this.btnShow
                this.btnShow?this.isSelect=1:this.isSelect=0
                this.handleIsAuto()
            },
            isBookRack(){
              Param_Get_Resful(this,'/api/bookshelf-bookshelfIsSave/'+this.readBookId,res=>{
                if(res.returnCode==500){
                 this.navList[2].text='已在书架'
                 this.isBook=true
              } else{
                  this.navList[2].text='加入书架'
                  this.isBook=false
              }
           })  
            }, 
            menu() {
                this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
                this.clientHeight=document.documentElement.clientHeight||document.body.clientHeight;
                this.scrollHeight=document.body.scrollHeight||document.documentElement.scrollHeight            
                if ( this.scroll+ this.clientHeight>this.scrollHeight-100) {
                    　　this.lastNav=true;
                        this.feedShow=true;
                    }else{
                        this.lastNav=false;
                        this.feedShow=false;
                }
            }, 
        },

        mounted () {
            if(this.isLogin){
                this.handleIsAuto('search')
                this.isBookRack()
                this.addReadHistory() 
                // this.btnShow&&this.buyChapter()
            }
            //  this.height=document.documentElement.clientHeight||document.body.clientHeight
            this.$nextTick(()=>{
                window.addEventListener('scroll', this.menu)
            })
         },
         destroyed () {
             window.removeEventListener('scroll',this.menu)
         },
        //给body加  padding-bottom
         created(){
            window.scrollTo(0,0)
            this.getBookText()
            this.getNowChapterId()
         }
     }
</script>
<style lang='less' scoped>
     @import '../../css/bookRead';
</style>
