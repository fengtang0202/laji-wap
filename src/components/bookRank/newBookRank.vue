<template>
   <div>
       <div class='day'>
           <span class='day_btn' v-for='(item,index) in dayList' :key='item.key' :style='{"color":changeDayColor===index?"#FE5C6C":"#000"}' @click='handleTapDay(index,item.key,item.link)'>{{item.day}}</span>
       </div> 
     <bookRankList :dataList='rankBookList' :dayList='dayList' RankType='4'></bookRankList>
      <infinite-loading @infinite="infiniteHandler">
           <span slot="no-more">
            目前暂无更多书籍
          </span>
          <span slot="no-results">
            目前暂无更多书籍
          </span>
      </infinite-loading>
   </div>
</template>
<script>
import {Post_formData2} from '@/config/services'
     export default{
        data(){
           return{
             dayType:this.$route.query.dayType,
             rankBookList:[],
             dayList:[
                 {day:'总',key:'total',link:'newBookRank?dayType=total'}
             ], 
             page:0,
             changeDayColor:0
           }
        },
        methods:{
             infiniteHandler($state){
                let self = this;
                self.page+=1
                Post_formData2(self,{type:4,page:self.page},'/api/ranking-book',res=>{
                             let lists=null
                          if(res.returnCode==200){
                                  lists=res.data.newBookRankingList.list
                                  console.log(res)
                                  self.rankBookList = self.rankBookList.concat(lists);
                                if(res.data.newBookRankingList.lastPage>self.page){ 
                                        $state.loaded()
                                    }else{
                                        $state.complete()
                                 }
                              }else{
                              $state.complete()                                
                         }
                    })
              },
               handleTapDay(index,key){
                this.changeDayColor=index
                this.dayType=key
                this.handleBook()
                window.scrollTo(0,0)                             
            },
              handleBook(){
                Post_formData2(this,{type:4,page:1},'/api/ranking-book',res=>{
                 if(res.returnCode==200){
                  //  this.rankBookList = res.data[this.dayType].list
                  console.log(res.data.newBookRankingList)
                }
             })
           }
        },
        created(){
          this.handleBook()
        }
     }
</script>
<style lang="less" scoped>
.day{
         height:.44rem;
         text-align: right;
         line-height: .44rem;
         font-size:.16rem;
         .day_btn{
             padding:.15rem;
         }
}
</style>
