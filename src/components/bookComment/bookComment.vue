<template>
   <div class='book_comment_wrap'>
        <headerComponent :list="topList"></headerComponent>
        <div v-if='showContent'>
        <div class='book_hot_comment'>
              <p style='font-szie:.18rem;'><span style='color:#F77583;font-weight:600;'>|</span>热门评论({{hotCommentcount}})</p>
            <div class='book_comment_item'  :key='index' v-for='(item,index) in hotCommentList'>
              <div class='avatar' >
                  <img  :src="item.userHeadPortraitURL" alt="">
              </div>
              <div class='book_comment_item_detail' >
                <div class='i_one'>
                    <div style='float: left;'>
                        <span style='font-size:.16rem;'>{{item.pseudonym}}</span>
                        <img src="../../assets/images/sex-03@3x.png" v-if='item.userSex==1' alt="">
                        <img src="../../assets/images/sex-02_03@3x.png" v-if='item.userSex==0' alt="">                     
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
                     <img @click='handleCommentDetail(item)' src="../../assets/images/message@3x.png" alt="">
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
              <div class='avatar'>
                  <img  :src="item.userHeadPortraitURL" alt="">
              </div>
              <div class='book_comment_item_detail' >
                <div class='i_one'>
                    <div style='float: left;'>
                        <span style='font-size:.16rem;'>{{item.pseudonym}}</span>
                        <img src="../../assets/images/sex-03@3x.png" v-if='item.userSex==1' alt="">
                        <img src="../../assets/images/sex-02_03@3x.png" v-if='item.userSex==0' alt="">                     
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
                     <img @click='handleCommentDetail(item)' src="../../assets/images/message@3x.png" alt="">
                     <span>{{item.replyCount}}</span>
                     </p>
                 </div>             
              </div>
            </div>  
        </div>
        </div>
        <no-content v-if='!showContent' :source='source'></no-content>
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
              link:'/'
          }, 
           source:{
                img:require('../../assets/images/1.png'),
                text:'没有相关评论'
              },
          showContent:true,
          timer:'',
          show:false,
          replyText:'',
          hotCommentList:[],
          hotCommentcount:0,
          newCommentList:[],
          newCommentcount:0,
          bookName:'',
          readBookId:this.$route.query.bookId
        }
    },
    computed: {
      ...mapState(['userInfo','isLogin'])  
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
                      console.log(res)
                      this.hotCommentList=res.data
                      this.showContent=true
                      this.hotCommentcount=res.data.length
                      console.log(this.hotCommentList)
                  }else if(res.returnCode===800){
                      this.showContent=false                     
                  }
              }) 
          },
          handleMakeComment () {
              let fontCountLength = this.replyText.length
              let reg=/[\ud83c-\ud83e][\udc00-\udfff]|[\u2600-\u27ff]/
             if(!reg.test(this.replyText)){ 
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
                             this.showContent=true
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
             }else{
                  this.$vux.toast.show({text:'目前不支持表情!',type:'cancel'})
             }
          },
          getNewComment(){
               Post_formData2(this,{id:this.readBookId,type:1,startPage:1},'/api/comm-getcomminfo',res=>{
                  if(res.returnCode==200){
                      if(res.data.list.length!=0){
                      this.newCommentList=res.data.list
                      this.newCommentcount=res.data.list.length
                      this.bookName=res.data.list[0].bookName
                      }
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
              this.$router.push({path:'/bookCommentDetail',query:{bookId:this.readBookId}})   
           },
           handelLike(item){
               if(this.isLogin){
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
               }else{
                  this.$vux.toast.text('登录后点赞哦!')
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
    @import '../../css/bookComment';
</style>
