<template>
<div>
    <div class='header'>
         <div @click="$router.go(-1)">
             <img src="../../assets/images/back@2x.png" style='width:.4rem;heigh:.4rem;vertical-align: middle;' alt="">
         </div>    
         <div class='title_1'>阅读记录</div>
         <div>
            <span class='title_2' @click='hanldeShow()'>{{word}}</span>
            <span class='title_2' @click="handleDelBook()" v-if='delShow'>删除</span>
         </div>
    </div>
   <div class='read_history' v-if='showNoData'>
      <div class='commendRead'>
         <div class='commend_book_wrap'  @click="handleBookDetail(item.bookId)" v-for='item in ReadHistoryList'>
            <img :src="item.bookImage" alt="">
            <p>{{item.bookName|str(6)}}</p> 
            <P style='color:#999'>{{item.writerName}}</P>  
            <!-- <p class='is_update' :style="{ 'color': item.bookStatus==0?'#FF6F00':'#47B2D8' }">{{item.isUpdate==0?'已完结':'连载中'}}</p>          -->
            <input type="checkbox" v-model="item.checked" v-if='delShow' class='del_btn'>            
         </div>    
      </div>
   </div>
   <No v-if='!showNoData' message='还有没有阅读记录'></No>
</div>
</template>
<script>
import {Post_formData,Post_formData2} from '@/config/services'
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return {
            ReadHistoryList:[],
            showNoData:true,
             word:'编辑',
             delShow:false,
             source:{
                img:require('../../assets/images/1.png'),
                text:'没有阅读记录'
            },
            delId:[]
        }
    },
    computed: {
        ...mapState(['userInfo'])
    },
    methods:{
        handleBookDetail(bookId){
            !this.delShow&&this.$router.push({path:'/bookDetails',query:{bookId:bookId}});
         },
          handleDelBook(){
            this.ReadHistoryList.forEach(value=>{
            if(value.checked==true){
                this.delId.push(value.id)
              }
            })
            if(this.delId.length!==0){
             Post_formData2(this,{id:[...new Set(this.delId)].toString()},'/api/person-delBookReadRecord',res=>{
                  if(res.returnCode==200){
                      this.delId=[]
                      this.handleReadBookList()
                      this.$vux.toast.text(res.msg)                      
                  }else{
                      this.$vux.toast.text(res.msg)
                  }
              })
            }else{
               this.$vux.toast.text('选择要删除的书籍') 
            }
        },
        hanldeShow(){
                 this.delShow=!this.delShow
                 this.delShow?this.word='完成':this.word='编辑'
        },
        handleReadBookList(){
                Post_formData(this,{userid:this.userInfo.userId,startpage:1},'/api/person-UserBookReadRecord',res=>{
                    if(res.returnCode==200){
                        this.ReadHistoryList=res.data.list
                        this.ReadHistoryList.forEach(value=>{
                          value.checked=false 
                     })
                    }else{
                        this.showNoData=false;
                   }
                })
        }    
    },
    mounted () {
        this.handleReadBookList()
    }
}
</script>
<style lang='less' scoped>
   .read_history{
       width:100%;
       .commendRead{
           margin-left:.18rem;
         .commend_book_wrap{
            width:1.04rem;
            text-align: center;
            float: left;
            font-size:.14rem;
            margin-top:.18rem;            
            margin-right:.14rem;
            position: relative;
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
             img{
                 width:1.04rem;height:1.35rem;
                 border-radius:5px;
             }
                .del_btn:checked{
                    background:url('../../assets/images/y-checked.png');
                    background-size: .22rem .22rem;
                }
         }
       }
   }
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
</style>
