<template>
<div>
 <div class='book_rcak_wrap'>
    <div class='header'>
         <div @click="$router.go(-1)">
             <img src="../../assets/images/back@2x.png" style='width:.4rem;heigh:.4rem;vertical-align: middle;' alt="">
         </div>    
         <div class='title_1'>我的书架</div>
         <div>
            <span class='title_2' @click='hanldeShow()'>{{word}}</span>
            <span class='title_2' @click="handleDelBook()" v-if='delShow'>删除</span>
         </div>
    </div>
    <div class='readNow'>
         <p>正在阅读{{`(${ReadNowList.length})`}}</p>
         <div class='book_detail_wrap'  v-for='(item,index) in ReadNowList' :key='index' @click="handleBookDetail(item.bookId)">
            <img :src="item.bookImage" style='width:1.04rem;height:1.35rem' alt="">
            <span style='font-size:.16rem;'>{{item.bookName|str(5)}}</span>
            <img class='icon_update'  src="../../assets/images/updateR.png"  v-if='item.a' alt="">
            <input type="checkbox" v-model="item.checked" v-if='delShow' class='del_btn'>
         </div>
         <div class='add_book' @click="handleGo()">
             <img  src="../../assets/images/addBook@3x.png" alt="">
         </div>          
    </div>
    <div class='commendRead'>
         <p>推荐阅读{{`(${commendReadList.length})`}}</p>
         <div class='commend_book_wrap'  @click="handleBookDetail(item.bookId)" v-for='item in commendReadList'>
            <img :src="item.bookImage"  alt="">
            <p style='font-size:.16rem;'>{{item.bookName|str(5)}}</p>   
            <p class='is_update' :style="{ 'color': item.bookStatus==0?'#FF6F00':'#47B2D8' }">{{item.isUpdate==0?'已完结':'连载中'}}</p>         
         </div>    
    </div>
 </div>
 </div>
</template>
<script>
import { Post_formData2,Post_formData,Param_Get_Resful} from '@/config/services'
import {fetch} from '../../config/ajax'
import {mapActions,mapState} from 'vuex'
import { resolve } from 'url';
import { rejects } from 'assert';
    export default {
        data(){
            return{
                word:'编辑',
                source:{
                img:require('../../assets/images/1.png'),
                text:'没有阅读记录'
               },
                commendReadList:[],
                ReadNowList:[],
                delShow:false,
                delId:[],
                ReadHistoryList:[]
            }
        },
        computed:{
            ...mapState(['userInfo']),
            dataList(){
                return this.getReadNow()
            }

        },
        methods: {
            getCommendBook(){
                Post_formData2(this,'','/api/bookshelf-recommendPosition',res=>{
                    if(res.returnCode==200){
                        this.commendReadList=res.data
                    }
                })
            },
            hanldeShow(){
                 this.delShow=!this.delShow
                 this.delShow?this.word='完成':this.word='编辑'
            },
          handleDelBook(){
            this.ReadNowList.forEach(value=>{
            if(value.checked==true){
                this.delId.push(value.id)
              }
            })
            if(this.delId.length!==0){
             Post_formData2(this,{id:[...new Set(this.delId)].toString()},'/api/bookshelf-deluserbookshelf',res=>{
                   if(res.returnCode==200){
                       this.$vux.toast.text('删除成功!')
                       this.delId=[]
                       this.getReadNow()
                   }
              })
            }
          },
           getReadNow(){
              fetch('/api/bookshelf-getuserbookshelf','post',{userid:this.userInfo.userId,startpage:1}).then(data=>{
                    if(data.returnCode==200){
                         for(let i=0;i<data.data.list.length;i++){
                             data.data.list[i].checked=false
                            Param_Get_Resful(this,'/api/books-volumeChapterList/'+data.data.list[i].bookId,res=>{
                                    if(res.returnCode===200){
                                       let lastList=res.data.chapterInfo.pop().resultList.pop()
                                        if(!lastList||data.data.list[i].nowChapterid==lastList.id){
                                           this.$set(this.ReadNowList[i],'a',false)
                                        }else{
                                           this.$set(this.ReadNowList[i],'a',true)                                           
                                   }
                                }
                            })
                         }
                         this.ReadNowList=data.data.list
                      }else if(res.returnCode==500){
                          this.ReadNowList=[]
                     }
                })
            },
            handleBookDetail(bookId){
                !this.delShow&&this.$router.push({path:'/bookDetails',query:{bookId:bookId}});
            },
            handleGo(){
                this.$router.push({path:'/'})
            }
        },
        activated () {
            this.getReadNow()
            this.getCommendBook() 
        }
    }
</script>
<style lang='less' scoped>
  .book_rcak_wrap{
      width:100%;
        .header{    
            height:.44rem;
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            border-bottom:.01rem solid #E9E9E9;
             .title_1{
              font-size: .18rem;
          }
          .title_2{
              font-size: .14rem;
              color:#F77583;
              line-height: .44rem;
              margin-right:.3rem;
          }
         div{
            margin:auto .1rem;       
          }
        }
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
             .del_btn{
             -webkit-appearance: none;
             outline: none;
             border:0;
             width:.22rem;
             height:.22rem;
             position: absolute;
             background-color:#F77583;
             border-radius: .05rem;
             top:0;
             left:0;
             }
                .del_btn:checked{
                    background:url('../../assets/images/y-checked.png');
                    background-size: .22rem .22rem;
                }
             .icon_update{
               position: absolute;
               top:0;
               right:-.03rem;
               width:.32rem;
               height:.18rem;
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
            img{
                width:1.04rem;height:1.35rem;
                border-radius: 5px;
            }
            .is_update{
                text-align: right;
                font-size: .1rem;
            }
         }
       }
  }
</style>
