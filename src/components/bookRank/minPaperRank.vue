<template>
   <div>
       <div class='day'>
           <span class='day_btn' v-for='(item,index) in dayList' :key='item.key' :style='{"color":changeDayColor===index?"#FE5C6C":"#000"}' @click='handleTapDay(index,item.key,item.link)'>{{item.day}}</span>
       </div> 
     <bookRankList  :dataList='rankBookList' :infiniteHandler='infiniteHandler' :dayList='dayList' RankType='2'></bookRankList>
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
                 {day:'周',key:'week',link:'minPaperRank?dayType=week'},
                 {day:'月',key:'month',link:'minPaperRank?dayType=month'},
                 {day:'总',key:'total',link:'minPaperRank?dayType=total'}
             ], 
             page:0,
             changeDayColor:0
           }
        },
        watch:{
           '$route.params'(){
                this.handleInitDay()
           }
        },
        methods:{
             infiniteHandler($state){
                let self = this;
                 self.page+=1
                Post_formData2(self,{type:2,page:self.page},'/api/ranking-book',res=>{
                          if(res.returnCode==200){
                                  self.rankBookList = self.rankBookList.concat(res.data[self.dayType].list);
                                if(res.data[self.dayType].lastPage>self.page){ 
                                        $state.loaded()
                                    }else{
                                        $state.complete()
                                 }
                              }else{
                              $state.complete()                                
                         }
                    })
              },
              handleInitDay(){
                 let dayType=this.$route.query.dayType
                 switch(dayType){
                     case 'week':
                     this.changeDayColor=0
                     break;
                     case 'month':
                     this.changeDayColor=1
                      break;
                     case 'total':
                     this.changeDayColor=2
                     break;
                 }
              },
               handleTapDay(index,key,link){
                this.dayType=key
                this.page=1
                this.handleBook()
                this.$router.replace({path:link})
                window.scrollTo(0,0)                             
            },
              handleBook(){
                Post_formData2(this,{type:2,page:1},'/api/ranking-book',res=>{
                 if(res.returnCode==200){
                   this.rankBookList = res.data[this.dayType].list
                }
             })
           }
        },
        created(){
        //   this.handleBook()
          this.handleInitDay()  
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
