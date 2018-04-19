<template>
<div class='commendItem'>      
            <div class='book_comment_item'  :key='index' v-for='(item,index) in list '>
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
                 <p class='content'>{{item.commentContext}}</p> 
                 <div class='zhan'>     
                     <p  @click='handleCommentDetail(item)'>
                     <img src="../../assets/images/message@3x.png" alt="">
                     <span>{{item.replyCount}}</span>
                     </p>
                      <p @click='handelLike(item)'>
                     <img v-if='item.isthumbs===0'    src="../../assets/images/zan@3x.png" alt="">
                     <img v-if='item.isthumbs===1'   src="../../assets/images/goodzan@3x.png" alt="">
                     <span>{{item.thumbsCount}}</span>
                     </p>
                 </div>             
              </div>
            </div>  
        </div>
</template>
<script>
    import {mapState,mapActions} from 'vuex'
    import {Post_formData2} from '../../config/services'
      export default{
          props: {
            list: {
            type: Array,
            default: []
            }
        },
        computed: {
          ...mapState(['isLogin'])  
        },
        methods:{
            ...mapActions(['setReadCommentInfo']),
            handleCommentDetail(item){
                this.setReadCommentInfo(item)
                this.$router.push({path:'/bookCommentDetail',query:{bookId:this.$route.query.bookId}})
            },
            // 点赞
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
                    this.$router.push({path:'/Login',query:{redirect: this.$route.path+'?bookId='+this.$route.query.bookId}})
               } 
           },
        }
      }
</script>
<style lang="less" scoped>
    .commendItem{
        .book_comment_item {
               padding-left:.14rem;
               margin-top:.1rem;
               border-bottom:1px solid #EFEFEF;
               overflow: hidden;
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
                      margin-top:.16rem;
                      p{
                          float: right;
                          margin-right:.16rem;
                          padding: .1rem 0;
                      }
                      img{
                          width:.16rem;
                          height:.16rem;
                          vertical-align: middle;
                      }
                      span{
                          margin-left:.05rem;
                          margin-right: .36rem;
                      }
                  }
              }
           }
}
</style>

