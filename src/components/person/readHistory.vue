<template>
<div>
    <div class='header'>
         <div @click="$router.go(-1)">
             <img src="../../assets/images/back@2x.png" style='width:.4rem;heigh:.4rem;vertical-align: middle;' alt="">
         </div>    
         <div class='title_1'>阅读记录</div>
         <div>
            <span class='title_2' @click='hanldeShow()'>{{word}}</span>
            <span class='title_2' @click='showNoData?show=true:show=false' v-if='delShow'>删除</span>
         </div>
    </div>
   <div class='read_history' v-if='showNoData'>
      <div class='commendRead'>
         <div class='commend_book_wrap'  @click="handleBookDetail(item.bookId)" v-for='item in ReadHistoryList'>
            <img :src="item.bookImage" alt="">
            <p>{{item.bookName|str(6)}}</p> 
            <P style='color:#999'>{{item.writerName|str(6)}}</P>  
            <!-- <p class='is_update' :style="{ 'color': item.bookStatus==0?'#FF6F00':'#47B2D8' }">{{item.isUpdate==0?'已完结':'连载中'}}</p>          -->
            <input type="checkbox" v-model="item.checked" v-if='delShow' class='del_btn'>            
         </div>
          <infinite-loading @infinite="infiniteHandler">
                        <span slot="no-more">
                            目前暂无更多阅读记录
                        </span>
                        <span slot="no-results">
                            目前暂无更多阅读记录
                        </span>
            </infinite-loading>      
      </div>
   </div>
   <No v-if='!showNoData' message='还有没有阅读记录'></No>
   <div v-transfer-dom>
          <confirm v-model="show"
            color='#333'
            @on-cancel="onCancel"
            @on-confirm="onConfirm">
         <p style="text-align:center;color:#333333;font-size:.16rem;">阅读记录就是你的书签哦,确定要删除么?</p>
       </confirm>
    </div>
</div>
</template>
<script>
import {Post_formData,Post_formData2} from '@/config/services'
import {mapState,mapActions} from 'vuex'
import {TransferDomDirective as TransferDom,Confirm} from 'vux'
export default {
    data(){
        return {
            ReadHistoryList:[],
            showNoData:true,
            word:'编辑',
            delShow:false,
            delId:[],
            show:false,
            page:0
        }
    },
    computed: {
        ...mapState(['userInfo'])
    },
    components:{
     Confirm
    },
     directives: {
         TransferDom
    },
    methods:{
        onCancel(){
       
        },
        onConfirm(){
           this.handleDelBook()
        },
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
        infiniteHandler($state){
                this.page+=1
                Post_formData2(this,{userid:this.userInfo.userId,startpage:this.page},'/api/person-UserBookReadRecord',res=>{
                          if(res.returnCode==200&&res.data.list.length!=0){
                               this.ReadHistoryList = this.ReadHistoryList.concat(res.data.list);
                               this.ReadHistoryList.forEach(value=>{
                                    value.checked=false 
                                })
                                if(res.data.lastPage>this.page){ 
                                    $state.loaded()
                                  }else{
                                    $state.complete()
                                }
                              }else{
                              $state.complete()                                
                         }
                    })
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
