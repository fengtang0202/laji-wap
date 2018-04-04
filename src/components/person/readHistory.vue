<template>
   <div class='read_history'>
      <div class='commendRead'>
         <div class='commend_book_wrap'  @click="handleBookDetail(item.bookId)" v-for='item in ReadHistoryList'>
            <img :src="item.bookImage" style='width:1.04rem;height:1.35rem' alt="">
            <p>{{item.bookName|bookName}}</p> 
            <P style='color:#999'>{{item.writerName}}</P>  
            <!-- <p class='is_update' :style="{ 'color': item.bookStatus==0?'#FF6F00':'#47B2D8' }">{{item.isUpdate==0?'已完结':'连载中'}}</p>          -->
         </div>    
      </div>
      <div v-if='showNoData' style='text-align:center;margin-top:.2rem;'>
          <span>你还有没阅读一本书</span>
      </div>
   </div>
</template>
<script>
import {Post_formData} from '@/config/services'
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return {
            ReadHistoryList:[],
            showNoData:false
        }
    },
    computed: {
        ...mapState(['userInfo'])
    },
    filters: {
      bookName(res){
          return res.length>6?res.slice(0,6)+'...' : res
      }  
    },
    methods:{
        ...mapActions(['setReadBookId']),
        handleBookDetail(bookId){
                 this.setReadBookId(bookId)
                 this.$router.push({path:'/bookDetails'});
            },
        handleReadBookList(){
                //this.userId  : 1082 测试
                Post_formData(this,{userid:this.userInfo.userId,startpage:1},'/api/person-UserBookReadRecord',res=>{
                    if(res.returnCode==200){
                        this.ReadHistoryList=res.data.list
                        this.showNoData=false;                       
                    }else{
                        this.showNoData=true;
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
         }
       }
   }
</style>
