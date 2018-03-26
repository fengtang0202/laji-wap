<template>
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
         <li v-for='item in navList' @click='handleTap(item.key)'>{{item.text}}</li>
     </ul>
    <ul class='share_list' :class='{show:shareShow}'>
        <li v-for='(item,index) in shareList' :key='index'>
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
                  <li v-for='item in colorList' @click='changebgColor(item)' :style='{"backgroundColor":item}'></li>
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
            color='#333'
            @on-cancel="onCancel"
            @on-confirm="onConfirm">
          <p style="text-align:center;color:#333333;font-size:.16rem;">{{message}}</p>
          </confirm>
      </div>
    </div>
    <!-- <div style='text-align:center;padding-top:.1rem;' v-if='preShow'>
         <button  class='next_btn' @click='getPreChapterText()'>加载上一章</button>
    </div> -->
    <v-touch @press='up' @touchmove.native='handlea()' @touchstart='getTouchStartXY(e)'>
      <div class='book_content' ref='content' :style='{"fontSize":fontSize+"px","backgroundColor":backgroundColor,"color":fontColor}' v-html='bookText' :class='{changeColor:show}'>
      </div>
    </v-touch>
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
</template>
<script>
import { Post_formData2, noParam_Get,Param_Get_Resful } from '@/config/services'
import { setTimeout } from 'timers';
import {TransferDomDirective as TransferDom,Confirm} from 'vux'
import {mapState,mapActions} from 'vuex'
     export default{
         data(){
            return{
               bookText:'',
               fontSize:18,
               fontColor:'#000',
               backgroundColor:'#fff',
               show:false,
               message:'',
               ConfirmShow:false,
               chapterIdNum:0,
               touchstartX:0,
               touchstartY:0,
               chapterList:[],
               bottomShow:false,
               shareShow:false,
               navShow:false,
               preNextShow:false,
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
               colorList:['#F7F7F7','#E5DFCA','#C3D3E9','#C2D9BE','#E5CAC2','#000'],
               bottomNavList:[
                   {img:require('../../assets/images/pre@3x.png'),text:'上一章',key:7},
                   {img:require('../../assets/images/Combined Shape@3x.png'),text:'目录',key:8},
                   {img:require('../../assets/images/Combined Shape1@3x.png'),text:'设置',key:9},
                   {img:require('../../assets/images/nextCopy@3x.png'),text:'下一章',key:10}
               ]
            }
         },
         components:{
             Confirm
         },
         computed: {
             ...mapState(['readBookId','chapterId']),              
         },
         directives: {
             TransferDom
         },
         methods:{
             ...mapActions(['setChapterId']),
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
                if(color=="#000"){
                this.fontColor='#fff'
                }else{
                    this.fontColor='#000'
                }
             },
             getBookText(){
                 Post_formData2(this,{chapterId:this.chapterId,readType:1},'/api/book-read',res=>{
                     if(res.returnCode==200){
                         this.bookText=res.data.chapterInfo.chapterContent.replace(/<LG>[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}<\/LG>/g,'<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')
                         this.preNextShow=true
                   }
              })    
             },
             onConfirm(){
                 //确定以后的操作
               console.log(0)
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
                  let n=this.chapterList.length-1
                   this.chapterIdNum++                  
                  if(this.chapterIdNum<n){
                    this.getNowChapterId()                 
                    this.setChapterId(this.chapterList[this.chapterIdNum].id)
                    this.getBookText()
                    this.$refs.content.scrollIntoView();
                    console.log(this.chapterIdNum)
                  }else{
                    this.message='目前最后一章'
                    this.ConfirmShow=true
                  }
             },
            getPreChapterText () {
                 if(this.chapterIdNum>0){
                    this.chapterIdNum--  
                    this.setChapterId(this.chapterList[this.chapterIdNum].id) 
                    this.getBookText()
                    this.$refs.content.scrollIntoView();
                    console.log(this.chapterIdNum)                                       
                 }else{
                     this.message='第一章了'
                     this.ConfirmShow=true  
                 }
            },
             handleTap(res){
                 if (res===6) {
                     this.shareShow=!this.shareShow
                     this.bottomShow=false
                 }
                 if(res===1){
                 this.$router.push({path:'/bookDetails'});
                 }
                 if(res==2){
                     this.$router.push({path:'bookComment'})
                 }
                 if(res==10){
                     this.getNextChapterText()
                 }
                 if(res==7){
                     this.getPreChapterText()
                 }
                 if(res==8){
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
            }
         },
         mounted(){
            this.getBookText()
            this.getNowChapterId()
            console.log(this.chapterIdNum)
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
            height:1.98rem;
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
