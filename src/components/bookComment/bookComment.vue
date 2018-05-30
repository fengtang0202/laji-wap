<template>
   <div class='book_comment_wrap' v-if='is'>
        <headerComponent :list="topList"></headerComponent>
        <div v-if='showContent'>
          <div class='book_hot_comment'>
              <p style='font-szie:.18rem;'><span style='color:#F77583;font-weight:600;'>|</span>热门评论({{hotCommentcount}})</p>
            <!-- commendItem -->
        <commendItem :list='hotCommentList'></commendItem>
        </div>
        <!-- <div class='more'>
            <span>更多热评</span>
        </div> -->
        <!-- 最新评论 -->
        <div class='book_hot_comment'>
              <p style='font-szie:.18rem;'><span style='color:#F77583;font-weight:600;'>|</span>最新评论({{newCommentcount}})</p>
            <!-- commend item -->
            <commendItem :list='newCommentList'></commendItem>  
            <infinite-loading @infinite="infiniteHandler">
                <span slot="no-more">
                    目前暂无更多评论
                </span>
                <span slot="no-results">
                    目前暂无更多评论
                </span>
           </infinite-loading>           
        </div>
        <!-- -->
        </div>
        <No v-if='showNoContent' message='暂无评论'></No>
        <div class='bottom_x'>
   
        </div>
        <div class='replyInput' @click='handleShow()'>
            <span >发表评价</span>
        </div>
        <div v-transfer-dom>
            <popup v-model="show">
                <div style='overflow:hidden;height:1.5rem;font-size:.16rem;background-color:#fff;'>
                    <div  style='border-bottom:1px solid #E9E9E9;overflow:hidden;padding:.08rem .2rem'>
                        <p style='float:left' @click='canlce()'>取消</p>
                        <p style='color:#F77583;float:right' @click='handleMakeComment()'>发表</p>
                    </div>
                    <div class='text_box'>
                       <textarea   placeholder='请输入你对这本书的评价...' v-focus v-model='replyText' style='width:100%;height:1.2rem;border:0;outline:none;padding:.1rem' ></textarea>
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
            is:true,
          topList:{
              title_1:'评论',
              title_2:'首页',
              link:'/'
          }, 
          showNoContent:false,
          showContent:false,
          timer:'',
          show:false,
          replyText:'',
          hotCommentList:[],
          hotCommentcount:0,
          newCommentList:[],
          newCommentcount:0,
          bookName:'',
          readBookId:this.$route.query.bookId,
          page:1
        }
    },
    computed: {
      ...mapState(['userInfo','isLogin'])  
    },
    methods:{
            canlce(){
               this.show=false;
            },
          getHotComment () {
              this.readBookId=this.$route.query.bookId              
              Post_formData2(this,{bookid:this.readBookId},'/api/comm-HotCommentInfo',res=>{
                  if(res.returnCode==200){
                      this.hotCommentList=res.data
                      this.hotCommentcount=res.data.length
                      this.showContent=true
                  }else if(res.returnCode===800){
                      this.hotCommentList=null
                      this.showNoContent=true 
                      this.showContent=false
                  }
              }) 
          },
          handleMakeComment () {
              let fontCountLength = this.replyText.length
              let reg=/[\ud83c-\ud83e][\udc00-\udfff]|[\u2600-\u27ff]/
             if(!reg.test(this.replyText)){ 
              if(fontCountLength>0){
                  let options = {
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
                             this.newCommentcount+=1
                             this.newCommentList.unshift(options)
                         }else if(res.returnCode==400){
                             this.$router.push({path:'/Login',query:{redirect: this.$route.path+'?bookId='+this.readBookId}})                             
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
          infiniteHandler($state){
                this.page+=1
                console.log("load:"+this.page)
                this.readBookId=this.$route.query.bookId  
                Post_formData2(this,{id:this.readBookId,type:1,startPage:this.page},'/api/comm-getcomminfo',res=>{
                          if(res.returnCode==200){
                            //   this.showContent=true
                               this.newCommentList = this.newCommentList.concat(res.data.list);
                               this.newCommentcount=res.data.total 
                               console.log("lastPage:"+res.data.lastPage)                             
                                if(res.data.lastPage>this.page){ 
                                    console.log("loadcomplete:"+this.page)
                                    $state.loaded()
                                    }else{
                                    $state.complete()
                                 }
                              }else{
                              $state.complete()                                
                         }
                    })
              },
          getNewComment(){
               this.readBookId=this.$route.query.bookId
               Post_formData2(this,{id:this.readBookId,type:1,startPage:1},'/api/comm-getcomminfo',res=>{
                  if(res.returnCode==200){
                      if(res.data.list.length!=0){
                      this.showContent=true
                      this.newCommentList=res.data.list
                      this.newCommentcount=res.data.total
                      this.bookName=res.data.list[0].bookName
                      this.showNoContent=false
                      }else{
                         this.newCommentList=null
                         this.showNoContent=true                              
                      }
                  }else {
                         this.newCommentList=null
                         this.showNoContent=true    
                  }
              }) 
          },
          getTime(){
               Param_Get_Resful(this,'/api/sys-getNetWorkDateTime',res=>{
                     this.timer=res.data.beijing
               })
          },
          handlereplyDetail(id){
            //   console.log(id)
          },
           handleShow(){
               if(this.isLogin){
                   this.show=!this.show
               }else{
                this.$router.push({path:'/Login',query:{redirect: this.$route.path+'?bookId='+this.readBookId}})
               }
        },
         reload () {
            this.is = false
            this.$nextTick(() => (this.is = true))
     } 
    },
    beforeRouteEnter(to, from, next){  
             from.path=="/bookDetails"&&window.scrollTo(0,0)
             next()
   },
    created(){
        this.getTime()
    },
     activated(){
         this.page=1    
         this.reload()
         this.getHotComment()
         this.getNewComment()
     }
}
</script>
<style lang='less' scoped>
    @import '../../css/bookComment';
</style>
