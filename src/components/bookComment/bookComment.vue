<template>
   <div class='book_comment_wrap'>
        <headerComponent :list="topList"></headerComponent>
        <div class='book_hot_comment'>
              <p style='font-szie:.18rem;'><span style='color:#F77583;font-weight:600;'>|</span>热门评论({{hotCommentcount}})</p>
            <div class='book_comment_item'  :key='index' v-for='(item,index) in hotCommentList'>
              <div class='avatar'>
                  <img  :src="item.userHeadPortraitURL" alt="">
              </div>
              <div class='book_comment_item_detail' @click='handleCommentDetail(item.id)'>
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
                 <p class='bookName'>《{{item.bookName}}》</p>  
                 <p class='content'>{{item.commentContext|content}}</p> 
                 <div class='zhan'>
                     <p>
                     <img src="../../assets/images/zan@3x.png" alt="">
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
        <div class='more'>
            <span>更多热评</span>
        </div>
   </div>
</template>
<script>
import headerComponent from '@/components/common/header'
import {Post_formData2,formatDate} from '@/config/services'
import {mapState} from 'vuex'
export default {
    components:{
        headerComponent
    },
    data(){
        return{
          topList:{
              title_1:'评论',
              title_2:'首页',
              link:'/home'
          },
          hotCommentList:[],
          hotCommentcount:0, 
        }
    },
    computed: {
      ...mapState(['readBookId'])  
    },
     filters:{
      formatDate(time){
        let data = new Date(time);
        return formatDate(data,'yyyy-MM-dd');
      },
      content(str){
        return str.length>36?str.slice(0,37)+'...':str 
      }
    },
    methods:{
          getHotComment(){
              Post_formData2(this,{bookid:this.readBookId},'/api/comm-HotCommentInfo',res=>{
                  if(res.returnCode==200){
                      this.hotCommentList=res.data
                      this.hotCommentcount=res.data.length
                  }else{

                  }
              }) 
          }
    },
    mounted() {
        this.getHotComment()
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
           padding:.1rem;
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
                  .i_one{
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
        .more{
            font-size:.16rem;
            color:#F77583;
            text-align: center;
        }
    }
</style>
