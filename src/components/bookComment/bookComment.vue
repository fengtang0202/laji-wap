<template>
   <div class='book_comment_wrap'>
        <headerComponent :list="topList"></headerComponent>
        <div class='book_hot_comment'>
              <p style='font-szie:.18rem;'><span style='color:#F77583;font-weight:600;'>|</span>热门评论({{hotCommentcount}})</p>
            <div class='book_comment_item'  :key='index' v-for='(item,index) in hotCommentList'>
              <div class='avatar' @click='handleCommentDetail(item)'>
                  <img  :src="item.userHeadPortraitURL" alt="">
              </div>
              <div class='book_comment_item_detail' >
                <div class='i_one'>
                    <div style='float: left;'>
                        <span style='font-size:.16rem;'>{{item.pseudonym}}</span>
                        <img src="../../assets/images/sex-03@3x.png" v-if='item.userSex==0?true:false' alt="">
                        <img src="../../assets/images/sex-02_03@3x.png" v-if='item.userSex==1?true:false' alt="">                     
                        <span class='grade'>&nbsp;LV{{item.userGrade}}&nbsp;</span>
                     </div>
                     <div style='float:right'>
                        <span style='font-size:.12rem;'>{{item.commentDateTime|formatDate}}</span>
                      </div>
                </div>
                 <!-- <p class='bookName'>《{{item.bookName}}》</p>   -->
                 <p class='content'>{{item.commentContext|content}}</p> 
                 <div class='zhan'>
                     <p>
                     <img v-if='item.isthumbs===0?true:false' @click='handelLike(item)' src="../../assets/images/zan@3x.png" alt="">
                     <img v-if='item.isthumbs===1?true:false' @click='handelLike(item)' src="../../assets/images/goodzan@3x.png" alt="">
                     <span>{{item.thumbsCount}}</span>
                     </p>
                     <p>
                     <img @click='handlereplyDetail(item.id)' src="../../assets/images/message@3x.png" alt="">
                     <span>{{item.replyCount}}</span>
                     </p>
                 </div>             
              </div>
            </div>  
        </div>
        <!-- <div class='more'>
            <span>更多热评</span>
        </div> -->
        <!-- 最新评论 -->
        <div class='book_hot_comment'>
              <p style='font-szie:.18rem;'><span style='color:#F77583;font-weight:600;'>|</span>最新评论({{newCommentcount}})</p>
            <div class='book_comment_item'  :key='index' v-for='(item,index) in newCommentList'>
              <div class='avatar' @click='handleCommentDetail(item)'>
                  <img  :src="item.userHeadPortraitURL" alt="">
              </div>
              <div class='book_comment_item_detail' >
                <div class='i_one'>
                    <div style='float: left;'>
                        <span style='font-size:.16rem;'>{{item.pseudonym}}</span>
                        <img src="../../assets/images/sex-03@3x.png" v-if='item.userSex==0?true:false' alt="">
                        <img src="../../assets/images/sex-02_03@3x.png" v-if='item.userSex==1?true:false' alt="">                     
                        <span class='grade'>&nbsp;LV{{item.userGrade}}&nbsp;</span>
                     </div>
                     <div style='float:right'>
                        <span style='font-size:.12rem;'>{{item.commentDateTime|formatDate}}</span>
                      </div>
                </div>
                 <!-- <p class='bookName'>《{{item.bookName}}》</p>   -->
                 <p class='content'>{{item.commentContext|content}}</p> 
                 <div class='zhan'>
                     <p>
                     <img v-if='item.isthumbs===0?true:false'   @click='handelLike(item)' src="../../assets/images/zan@3x.png" alt="">
                     <img v-if='item.isthumbs===1?true:false'   @click='handelLike(item)'  src="../../assets/images/goodzan@3x.png" alt="">
                     <span>{{item.thumbsCount}}</span>
                     </p>
                     <p>
                     <img src="../../assets/images/message@3x.png" alt="">
                     <span>{{item.replyCount}}</span>
                     </p>
                 </div>             
              </div>
            </div>  
        </div>
        <div class='bottom_x'>

        </div>
        <div class='replyInput'>
            <span @click='handleShow()'>发表评价</span>
        </div>
        <div v-transfer-dom>
            <popup v-model="show">
                <div style='height:1.5rem;font-size:.16rem;background-color:#fff;'>
                    <div  style='border-bottom:1px solid #E9E9E9;overflow:hidden;padding:.08rem .2rem'>
                        <p style='float:left' @click='canlce()'>取消</p>
                        <p style='color:#F77583;float:right' @click='handleMakeComment()'>发表</p>
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
import {Post_formData2,Post_formData,Param_Get_Resful} from '@/config/services'
import {mapState,mapActions} from 'vuex'
import {Popup,TransferDom} from 'vux'
export default {
    components:{
      Popup
    },
     directives: {
        TransferDom
    },
    data () {
        return{
          topList:{
              title_1:'评论',
              title_2:'首页',
              link:'/home'
          },
          timer:'',
          show:false,
          replyText:'',
          hotCommentList:[],
          hotCommentcount:0,
          newCommentList:[],
          newCommentcount:0,
          bookName:''
        }
    },
    computed: {
      ...mapState(['readBookId','userInfo','isLogin'])  
    },
     filters:{
      content(str){
              return str.length>36?str.slice(0,37)+'...':str 
      }
    },
    methods:{
        ...mapActions(['setReadCommentInfo']),
            canlce(){
               this.show=false;
            },
          getHotComment () {
              Post_formData2(this,{bookid:this.readBookId},'/api/comm-HotCommentInfo',res=>{
                  if(res.returnCode==200){
                      this.hotCommentList=res.data
                    //   console.log(res)
                      this.hotCommentcount=res.data.length
                      console.log(this.hotCommentList)
                  }else{
                  this.$vux.toast.text(res.msg)                     
                  }
              }) 
          },
          handleMakeComment () {
              let fontCountLength = this.replyText.length
              console.log(fontCountLength)
              if(fontCountLength>0&&fontCountLength<50){
                  let options={
                      bookId:this.readBookId,
                      commentContext:this.replyText,
                      userName:this.userName,
                      bookName:this.bookName	
                  }
                    Post_formData2(this,options,'/api/add-getcomminfo',res=>{
                         if(res.returnCode==200){
                             this.$vux.toast.text('发表成功!')
                             this.show=false
                             options.isthumbs=0
                             options.thumbsCount=0
                             options.replyCount=0
                             options.userSex=this.userInfo.userSex
                             options.userHeadPortraitURL=this.userInfo.userHeadPortraitURL
                             options.pseudonym=this.userInfo.pseudonym
                             options.userGrade=this.userInfo.userGrade
                             options.commentDateTime=this.timer
                             this.newCommentList.unshift(options)
                         }
                     })
              } else {
                  this.$vux.toast.text('字数不够')
              }
          },
          getNewComment(){
               Post_formData2(this,{id:this.readBookId,type:1,startPage:1},'/api/comm-getcomminfo',res=>{
                  if(res.returnCode==200){
                      this.newCommentList=res.data.list
                      this.newCommentcount=res.data.list.length
                      this.bookName=res.data.list[0].bookName
                    //   console.log(this.bookName)
                  }else{
                       
                  }
              }) 
          },
          getTime(){
               Param_Get_Resful(this,'/api/sys-getNetWorkDateTime',res=>{
                     this.timer=res.data.beijing
               })
          },
          handlereplyDetail(id){
              console.log(id)
          },
          handleCommentDetail(item){
              this.setReadCommentInfo(item)
              this.$router.push({path:'/bookCommentDetail'})   
           },
           handelLike(item){
               Post_formData2(this,{commentId:item.id},'/api/comm-GiveThumbs',res=>{
                   if(res.returnCode==200) {
                       if (item.isthumbs==0) {
                            item.isthumbs=1
                            item.thumbsCount+=1
                        } else {
                            item.thumbsCount-=1                   
                            item.isthumbs=0                 
                        }
                   }
              })
           },
           handleShow(){
               if(this.isLogin){
                   this.show=!this.show
               }else{
                  this.$router.push('/')
               }
           }
    },
    mounted() {
        this.getHotComment()
        this.getNewComment()
        this.getTime()
        // Post_formData2(this,"",'/api/person-checkLoginState',res=>{
        //     console.log(res)
        // })
    }
}
</script>
<style lang='less' scoped>
    .book_comment_wrap{
        width:100%;
        img {
             vertical-align: middle;
            }
        .book_hot_comment {
           padding:.1rem .1rem 0 .1rem;
           .book_comment_item {
               margin-top:.1rem;
               border-bottom:1px solid #EFEFEF;
               overflow: hidden;
               padding-bottom: .1rem;
               width:100%;
              .avatar { 
                  width:.52rem;
                  height:.52rem;
                  border-radius: 50%;
                  float: left;
                  img {
                     width:.52rem;
                     height:.52rem;
                     border-radius: 50%; 
                  }
              }
              .book_comment_item_detail {
                  float: left;
                  margin-left:.2rem;
                  width:2.7rem;
                  .i_one {
                          color:#666;
                          overflow: hidden;                   
                      img {
                          width:.12rem;
                          height:.12rem;
                      }
                      .grade{
                          background-color:#74F3FE;
                          font-size:.08rem;
                          color:#fff;
                          border-radius: .03rem;
                      }
                  }
                  .bookName{
                      font-size: .14rem;
                  }
                  .content{
                      font-size: .14rem;
                      margin:.02rem 0;
                  }
                  .zhan{
                      overflow: hidden;
                      font-size:.12rem;
                      p{
                          float: left;
                          margin-left:.7rem;
                      }
                      img{
                          width:.15rem;
                          height:.15rem;
                      }
                      span{
                          margin-left:.1rem;
                      }
                  }
              }
           }
        }
        .bottom_x{
             width:100%;
             height:.4rem;
        }
        .replyInput{
               width:100%;
               border-top:1px solid #EFEFEF;
               height:.4rem;
               background-color: #fff;
               position:fixed;
               bottom:0;
               line-height: .4rem;
               color:#F77583;
               text-align: center;
           }
        .more{
            font-size:.16rem;
            color:#F77583;
            text-align: center;
            border-bottom:1px solid #EFEFEF;
        }
    }
</style>
