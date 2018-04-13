<template>
<div>
 <div class='book_rcak_wrap'>
    <headerComponent  :list='topList'>
    </headerComponent>
    <div class='readNow'>
         <p>正在阅读{{`(${bookRack.length})`}}</p>
         <div class='book_detail_wrap' v-for='item in bookRack' @click="handleBookDetail(item.bookId)">
            <img :src="item.bookImage" style='width:1.04rem;height:1.35rem' alt="">
            <span style='font-size:.16rem;'>{{item.bookName|bookName}}</span>
            <span class='icon_update' v-if='item.bookStatus==0?true:false'>更新</span>
         </div>
         <div class='add_book' @click="handleGo()">
             <img  src="../../assets/images/addBook@3x.png" alt="">
         </div>         
    </div>
    <div class='commendRead'>
         <p>推荐阅读{{`(${commendReadList.length})`}}</p>
         <div class='commend_book_wrap'  @click="handleBookDetail(item.bookId)" v-for='item in commendReadList'>
            <img :src="item.bookImage" style='width:1.04rem;height:1.35rem' alt="">
            <p style='font-size:.16rem;'>{{item.bookName|bookName}}</p>   
            <p class='is_update' :style="{ 'color': item.bookStatus==0?'#FF6F00':'#47B2D8' }">{{item.isUpdate==0?'已完结':'连载中'}}</p>         
         </div>    
    </div>
 </div>
 </div>
</template>
<script>
import { Post_formData2,Post_formData} from '@/config/services'
import { join } from 'path';
import {mapActions,mapState} from 'vuex'
    export default {
        data(){
            return{
                topList:{
                    title_1:'我的书架',
                    title_2:'编辑',
                    link:'/bookEdit'
                },
                source:{
                img:require('../../assets/images/1.png'),
                text:'没有阅读记录'
               },
                commendReadList:[]
            }
        },
        computed:{
            ...mapState(['bookRack','userInfo'])
        },
        filters:{
            bookName:name=>name.length>6?(name.slice(0,5)+'....'):name
        },
        methods: {
            ...mapActions(['getBookRack']),
            getCommendBook(){
                Post_formData2(this,'','/api/bookshelf-recommendPosition',res=>{
                    this.commendReadList=res.data
                })
            },
            getReadNow(){
                Post_formData(this,{userid:this.userInfo.userId,startpage:1},'/api/bookshelf-getuserbookshelf',res=>{
                   res.returnCode==200&&this.getBookRack(res.data.list)
                })
            },
            handleBookDetail(bookId){
                 this.$router.push({path:'/bookDetails',query:{bookId:bookId}});
            },
            handleGo(){
                this.$router.push({path:'/editorRecommend'})
            }
        },
        mounted(){
            this.getCommendBook()
            this.getReadNow()
        }
    }
</script>
<style lang='less' scoped>
  .book_rcak_wrap{
      width:100%;
      .readNow{
          margin-left:.18rem;
          margin-top:.12rem;
          margin-bottom:.12rem;
          overflow: hidden;
         .book_detail_wrap{
             width:1.04rem;
             float: left;
             text-align: center;
             color:#666666;
             border-radius:.05rem;
             margin-right:.14rem;
             margin-top:.12rem;
             position: relative;
             overflow: hidden;
             .icon_update{
               position: absolute;
               top:0;
               right:-.03rem;
               background-color: #6EC282;
               width:.32rem;
               height:.18rem;
               font-size:.1rem;
               border-radius: .1rem;
               color:#fff;
             }
         }
          .add_book{
               width:1.04rem;
               height:1.36rem;
               text-align:center;
               border:1px dashed #FF8E8E;
               float: left;
               margin-top:.1rem;
               border-radius: .05rem;
               img{
                width:.6rem;
                height:.6rem;
                margin-top:.38rem;
               }
            }
       }
       .commendRead{
           clear: both;
           margin-left:.18rem;
         .commend_book_wrap{
            width:1.04rem;
            text-align: center;
            float: left;
            margin-right:.14rem;
            .is_update{
                text-align: right;
                font-size: .1rem;
            }
         }
       }
  }
</style>
