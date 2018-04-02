<template>
    <v-touch @press='up' @touchmove.native='handlea()' @touchstart='getTouchStartXY(e)'>
        <div>
  <div class='bookRead'>
     <div class='feed' :class='{show:navShow}'>
            <div style='float:left'>
               <img :src="item.img"   class='pepper' :key='index' v-for='(item,index) in feedList' alt="">
            </div>
            <div class='nav' @touchend='show=!show'>
              <img src="../../assets/images/dropdown@3x.png"   alt="">
            </div>
     </div>
     <ul class='nav_list' :class='{show:show}'>
         <li v-for='(item,index) in navList' :key='index' @click='handleTap(item.key)'>{{item.text}}</li>
     </ul>
    <ul class='share_list' :class='{show:shareShow}'>
        <li v-for='(item,index) in shareList'  @click='handleShare(index)' :key='index'>
            <img :src="item.img" alt="">
            <p>{{item.text}}</p>
        </li>
        <li></li>
        <li></li>
    </ul>
    <div class='bottom_nav' :class='{show:bottomShow}'>
         <div class='one_nav'>
             <ul>
                 <li>字号</li>
                 <li class='m' @click='fontSize--' style='font-size:.18rem;'>A-</li>
                 <li class='m' @click='fontSize++' style='font-size:.2rem;'>A+</li>
                 <li>自动订阅</li>
                 <li>
                     <i-switch  @on-change="change"></i-switch>                     
                 </li>
             </ul>
         </div>
         <div class='tow_nav'>
              <ul>
                  <li v-for='(item,index) in colorList' :key='index' @click='changebgColor(item)' :style='{"backgroundColor":item}'></li>
              </ul>
         </div>
         <!-- <div class='last_nav'>
              <ul>
                  <li v-for='item in bottomNavList' @click='handleTap(item.key)'>
                      <div  class='nav_d'>
                         <img :src="item.img" alt="">
                         <span style='font-size:.12rem;'>{{item.text}}</span>
                      </div>
                  </li>
              </ul>
         </div> -->
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
    <!-- <div style='text-align:center;padding-top:.1rem;' v-if='preShow'>
         <button  class='next_btn' @click='getPreChapterText()'>加载上一章</button>
    </div> -->
      <div class='book_content'  ref='content' :style='{"fontSize":fontSize+"px","backgroundColor":backgroundColor,"color":fontColor}' :class='{changeColor:show}'>
      <p class='book_title'>       
         <span>{{bookName}}</span>
         <span>{{chapterName}}</span>
     </p> 
     <p style='font-size:.2rem;text-align:center;'>{{chapterName}}</p>
     <p v-html='bookText'>
     </p>  
      </div>
         <!-- <button  class='next_btn' @click='getNextChapterText()'>加载下一章</button> -->
          <div class='last_nav' v-if='preNextShow'>
              <ul>
                  <li v-for='item in bottomNavList' @click='handleTap(item.key)'>
                      <div  class='nav_d'>
                         <img :src="item.img" alt="">
                         <span style='font-size:.12rem;'>{{item.text}}</span>
                      </div>
                  </li>
              </ul>
         </div>
    </div>
        <div v-transfer-dom>
                <x-dialog   v-model="dialogshow" :dialog-style='{width:"100%"}' class="dialog-demo">
                    <div style="padding:.7rem 0rem;">
                        <!-- 未登录 -->
                        <div v-if='!isLogin'>
                            <img style='width:1rem;height:1.63rem' src="../../assets/images/ns@2x.png" alt="">
                            <p style='color:#333;margin:.1rem'>
                                <span>价格:{{price}}</span>
                                <span>余额{{userInfo.userMoney}}</span>
                            </p>
                            <p  style='#999;' v-if='isvip==1'>本章是VIP章节，需购买后阅读</p>
                            <p>
                            <button @click='buyChapter()' style='width:2rem;height:.4rem;color:#fff;margin:.3rem 0;outline:none;border:0;border-radius:.5rem;background-color:#F77583'>购买本章</button>
                            </p>
                            <p @click='handleClickAuto()'>
                                 <img v-if="!btnShow" style='vertical-align: middle;width:.16rem;height:.16rem;' src="../../assets/images/Combined Shape Copy@3x.png" alt="">
                                 <img v-if="btnShow" style='vertical-align: middle;width:.16rem;height:.16rem;' src="../../assets/images/Oval 8 Copy@3x.png" alt="">
                                  <img src="" alt="">
                                <span>自动购买下一章，不再提醒</span>
                            </p>
                        </div>
                        <!-- 登录 -->
                        <div v-if='isLogin'>
                            <img style='width:1rem;height:1.63rem' src="../../assets/images/ns@2x.png" alt="">
                            <p style='color:#333;font-size:.16rem;'>
                                <span>价格:{{price}}</span>
                            </p>
                            <p style='font-size:.14rem'>
                                <span>余额{{userInfo.userMoney}}辣椒</span>
                                <span style='margin-left:.1rem;'>{{userInfo.userReadTicket}}阅读币</span>
                                </p>
                            <p>
                            <button @click='buyChapter()'  style='font-size:.14rem;width:2rem;height:.4rem;color:#fff;margin:.3rem 0;outline:none;border:0;border-radius:.5rem;background-color:#F77583'>购买本章</button>
                            </p>
                            <p style='font-size:.14rem;' @click='handleClickAuto()'>
                                 <img v-if="!btnShow" style='vertical-align: middle;width:.16rem;height:.16rem;' src="../../assets/images/Combined Shape Copy@3x.png" alt="">
                                 <img v-if="btnShow" style='vertical-align: middle;width:.16rem;height:.16rem;' src="../../assets/images/Oval 8 Copy@3x.png" alt="">
                                  <img src="" alt="">
                                <span>自动购买下一章，不再提醒</span>
                            </p>
                        </div>
                    </div>
                </x-dialog>
         </div>
        </div>
    </v-touch>
</template>
<script>
import { Post_formData2, noParam_Get,Param_Get_Resful } from '@/config/services'
import { setTimeout } from 'timers';
import {TransferDomDirective as TransferDom,Confirm, XDialog} from 'vux'
import {mapState,mapActions} from 'vuex'
import { userInfo } from 'os';
     export default{
         data(){
            return{
               bookText:'',
               isScroll:false,
               fontSize:18,
               fontColor:'#000',
               backgroundColor:'#fff',
               show:false,
               message:'',
               ConfirmShow:false,
               chapterIdNum:0,
               bookName:'',
               messageTitle:'',
               touchstartX:0,
               chapterName:'',
               touchstartY:0,
               chapterList:[],
               bottomShow:false,
               shareShow:false,
               navShow:false,
               confirmKey:0,
               dialogshow:true,
               preNextShow:false,
               isvip:this.$route.query.isvip,
               price:this.$route.query.price,    
               btnShow:false,           
               feedList:[
                   {img:require('../../assets/images/Group 3@3x.png')},
                   {img:require('../../assets/images/Group 2@3x.png')},
                   {img:require('../../assets/images/Group@3x.png')}                   
               ],
               navList:[
                   {text:'书籍详情',key:1},
                   {text:'查看书评',key:2},
                   {text:'加入书架',key:3},
                   {text:'添加书签',key:4},
                   {text:'举报本章',key:5},
                   {text:'分享本书',key:6}
               ],
               shareList:[
                   {text:'新浪微博',img:require('../../assets/images/sinaweibo @3x.png')},
                   {text:'QQ空间',img:require('../../assets/images/qqqzone @3x.png')},
                   {text:'微信好友',img:require('../../assets/images/wechat @3x.png')},
                   {text:'微信朋友圈',img:require('../../assets/images/pengyouqun@3x.png')},
                   {text:'微信收藏',img:require('../../assets/images/wechatfavorite @3x.png')},
                   {text:'QQ',img:require('../../assets/images/qqshare@3x.png')},                   
               ],
               colorList:['#F7F7F7','#E5DFCA','#C3D3E9','#C2D9BE','#E5CAC2','#1F263A'],
               bottomNavList:[
                   {img:require('../../assets/images/pre@3x.png'),text:'上一章',key:7},
                   {img:require('../../assets/images/Combined Shape@3x.png'),text:'目录',key:8},
                   {img:require('../../assets/images/Combined Shape1@3x.png'),text:'设置',key:9},
                   {img:require('../../assets/images/nextCopy@3x.png'),text:'下一章',key:10}
               ]
            }
         },
         components:{
             Confirm,XDialog
        },
         computed: {
             ...mapState(['readBookId','chapterId','userInfo','isLogin']),              
         },
         directives: {
             TransferDom
         },
         methods:{
             ...mapActions(['setChapterId']),
             handleShare(index){
                    //  index==2&&this.handleShareWX()
             },
            handleShareWX(){
            wx.onMenuShareAppMessage({  
            title: '1', // 分享标题  
            desc: '2', // 分享描述  
            link: window.location.href, // 分享链接  
            imgUrl: '', // 分享图标  
            type: 'link', // 分享类型,music、video或link，不填默认为link  
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空  
            success: function () {   
                // 用户确认分享后执行的回调函数  
                //alert('已分享');  
                //window.location.href = "https://www.baidu.com";  
            },  
            cancel: function () {   
                // 用户取消分享后执行的回调函数  
                //alert('已取消');  
            }  
        });  
             },
             getTouchStartXY(){
                 this.touchstartX=event.touches[0].pageX
                 this.touchstartY=event.touches[0].pageY
                 },
             handlea(){
                let touchendX=event.touches[0].pageX
                let touchendY=event.touches[0].pageY
                // distanceX = endX-startX;
                // distanceY = endY-startY;            
             },
             changebgColor(color){
                this.backgroundColor=color
                if(color=="#1F263A"){
                this.fontColor='#fff'
                }else{
                    this.fontColor='#5C6A78'
                }
             },
             getBookText(){
                 Post_formData2(this,{chapterId:this.chapterId,readType:1},'/api/book-read',res=>{
                     if(res.returnCode===200||res.returnCode===500){
                         console.log(res.data)
                         this.bookText=res.data.chapterInfo.chapterContent.replace(/<LG>[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}<\/LG>/g,'<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')
                         this.preNextShow=true
                         this.bookName=res.data.bookInfo.bookName
                         this.chapterName=res.data.chapterInfo.chapterTitle
                        //  console.log(res.data.chapterInfo.chapterTitle)
                   }
              })    
             },
             onConfirm(res){
                 //确定以后的操作
                res==1&&this.addBookRack()
            },
            onCancel(){
                //取消以后的操作
               console.log(1)
            },
             getNowChapterId(){
                   Param_Get_Resful(this,`/api/chapter-allchapters/${this.readBookId}`,res=>{
                      this.chapterList=res.data
                      for(let n in this.chapterList){
                        if(this.chapterList[n].id==this.chapterId){
                            this.chapterIdNum=n
                        }
                      }
                  }) 
             },  
             getNextChapterText () {
                   this.confirmKey=0
                  let n=this.chapterList.length-1
                   this.chapterIdNum++                  
                  if(this.chapterIdNum<n){
                    this.getNowChapterId()                 
                    this.setChapterId(this.chapterList[this.chapterIdNum].id)
                    this.getBookText()
                    this.$refs.content.scrollIntoView();
                  }else{
                    this.messageTitle='目前最后一章'
                    this.ConfirmShow=true
                  }
             },
            getPreChapterText () {
                   this.confirmKey=0                
                 if(this.chapterIdNum>0){
                    this.chapterIdNum--  
                    this.setChapterId(this.chapterList[this.chapterIdNum].id) 
                    this.getBookText()
                    this.$refs.content.scrollIntoView();
                 }else{
                     this.messageTitle='第一章了'
                     this.ConfirmShow=true  
                 }
            },
            addBookRack(){
                    //  this.confirmKey=1
                       Param_Get_Resful(this,'/api/bookshelf-bookshelfIsSave/'+this.readBookId,res=>{
                             if(res.returnCode==500){
                                 this.$vux.toast.text(res.msg)
                                 return;    
                             } else {
                       Post_formData2(this,{userName:this.userInfo.userName,bookId:this.readBookId,bookName:this.bookName},'/api/bookshelf-adduserbookshelf',res=>{
                            // this.ConfirmShow=true
                            this.messageTitle='收藏书籍'
                            this.message='这本书还没有加入书架，现在帮您加入书架吗？'
                            if (res.returnCode==200) {   
                                 this.$vux.toast.text(res.msg)
                            } else if (res.returnCode==400) {
                                this.messageTitle=res.msg
                                this.$router.push('/')
                            }
                         })
                        }
                  })
            },
             handleTap(res){
                 if (res===6) {
                     this.shareShow=!this.shareShow
                     this.bottomShow=false
                 }
                 if(res===1){
                 this.$router.push({path:'/bookDetails'});
                 }
                 if(res===2){
                     this.$router.push({path:'bookComment'})
                 }
                 if(res===3){
                    this.addBookRack()  
                 } 
                 if(res===9){
                    this.bottomShow=!this.bottomShow
                 }
                 if(res===10){
                     this.getNextChapterText()
                 }
                 if(res===7){
                     this.getPreChapterText()
                 }
                 if(res===8){
                     this.$router.push({path:'/directory'})
                 }
             },
             up () {
                 this.navShow=!this.navShow
                 this.bottomShow=!this.bottomShow
                 if(!this.navShow){
                    this.bottomShow=false
                    this.show=false
                    this.shareShow=false
                 }
             },
              change (status) {
                // this.$Message.info('开关状态：' + status);
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
                    // console.log(res)
               }) 
            },
            buyChapter(){
                let options={
                    userName:this.userInfo.userName,
                    bookId:this.readBookId,
                    bookName:this.bookName,
                    bookChapterId:this.chapterId,
                    bookChapterName:this.chapterName	
                }
                Post_formData2(this,options,'/api/book-subscription',res=>{
                    if(res.returnCode===200){
                         this.bookText=res.data.chapterInfo.chapterContent.replace(/<LG>[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}<\/LG>/g,'<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')
                    }
                })
            },
            handleClickAuto(){
                this.btnShow=!this.btnShow
            }
         },
         mounted(){
            this.getBookText()
            this.getNowChapterId()
            this.addReadHistory()
            // this.isvip==1?this.dialogshow=true:this.dialogshow=false
         }
     }
</script>
<style lang='less' scoped>
     .bookRead{
         position: relative;
         width:100%;
         height:100%;
         overflow-x:hidden;
         -webkit-overflow-scrolling:touch;
         li{
             list-style: none;
         }
        .feed{
            height:.64rem;
            background-color: #3D3D3D;
            opacity: 0;
            width:100%;
            position:fixed;
            top:0;
            transition: all .5s;
            transform: translate(0, -.64rem);                                        
            .pepper{
                width:.78rem;
                height:.3rem;
                margin-top:.17rem;
                margin-left:.2rem;
            }
            .nav{
                width:.63rem;
                height:.55rem;
                float: right;
                text-align: center;
                img{
                    width:.07rem;
                    height:.23rem;
                    margin-top:.2rem;
                }
            }
        }
        .book_content{
            letter-spacing:.04rem; 
            text-indent: 2em; 
            padding:.05rem .1rem;
            .book_title{
                font-size: .1rem;
                margin-left:-.3rem;
                color:#999;
            }
         }
        .nav_list{
            width:.88rem;
            height:2.16rem;
            position: fixed;
            right:0;
            top:.64rem;
            background-color: #fff;
            transition: all .5s ;
            opacity: 0;
            transform: translate(0.88rem, 0);                            
            li{
                height:0.36rem;
                text-align: center;
                line-height:.36rem;
                border-bottom:1px solid #EFEFEF;
            }
        }
        .share_list{
            height:1.8rem;
            position: fixed;
            width:100%;
            bottom:0;
            background-color: #fff;
            transition: all .5s ;
            transform: translate(0,1.8rem);   
            opacity: 0;
            li{
                width:25%;
                height:.9rem;
                float:left;
                text-align: center;
                font-size:.12rem;
                border-right:1px solid #EFEFEF;
                border-bottom:1px solid #EFEFEF;
                img{
                    width:.35rem;
                    height: .35rem;
                    margin-top:.2rem;
                }
            }
            li:nth-child(4){
                border-right:0;
            }
            li:last-child{
                border-right:0;
            }
        }
        .bottom_nav{
            width:100%;
            height:1.38rem;
            background-color: #3D3D3D;
            position: fixed;
            bottom:0;
            color:#FFF;
            opacity: 1;
            transform: translate(0,1.98rem); 
            transition: all .5s;                                       
            .one_nav{
            height:.62rem;
            border-bottom:1px solid #333;
             ul{
                 li{
                     float: left;
                     margin-top:.16rem;
                     margin-left:.17rem;
                 }
                 .m{
                     width:.6rem;
                     height:.3rem;
                     border:1px solid #FFF;
                     border-radius: .08rem;
                     text-align:center; 
                }
                .auto_btn{
                    width:.46rem;
                    height:.22rem;
                    background-color: #fff;
                    border-radius:.1rem;
                    border:0;
                }
             }
            }
            .tow_nav{
             height:.74rem;
             border-bottom:1px solid #333;
             li{
                 width:.38rem;
                 height:.38rem;
                 border-radius: 50%;
                 float:left;
                 margin-top:.18rem;
                 margin-left:.2rem;
             }
           }
        //    .last_nav{
        //        img{
        //            width:.36rem;
        //            height:.36rem;
        //            vertical-align: middle;
        //        }
        //        li{
        //         float: left; 
        //         width:25%;
        //         .nav_d{
        //             width:.36rem;
        //             text-align: center;
        //             margin-left:.25rem
        //          }
        //       }
        //    }
        }
        .next_btn{
            background-color:#F77583;
            width:2rem;
            height:.35rem;
            color:#fff;
            font-size:.18rem;
            border-radius: .2rem;
            border:0;
            outline: none;
            
        }
        .show{
             transform: translate(0, 0);
             opacity: 1;                
            }
          .changeColor{
             background-color: #D8D9DC;
          }
          .isFixed{
            position: fixed;
            top:.4rem;
         }
         .last_nav{
             background-color: #3D3D3D;
             overflow: hidden;
             color:#FFF;
             width:100%;
            //  position: fixed;
            //  bottom:0;
               img{
                   width:.36rem;
                   height:.36rem;
                   vertical-align: middle;
               }
               li{
                float: left; 
                width:25%;
                .nav_d{
                    width:.36rem;
                    text-align: center;
                    margin-left:.25rem
                 }
              }
           }
       }
</style>
