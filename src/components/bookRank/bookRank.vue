<template>
   <div class='bookRank_wrap'>
       <headerComponent :list='topList'></headerComponent>
       <div class='day'>
           <span class='day_btn' v-for='(item,index) in dayList' :key='item.key' :style='{"color":changeDayColor===index?"#FE5C6C":"#000"}' @click='handleTapDay(index,item.key)'>{{item.day}}</span>
       </div>
       <div class='nav' id='nav'  :class="searchBarFixed == true ? 'isFixed' :''">
          <ul>
              <li v-for='(item,index) in rankList' @click='handleTapItem(index,item.key)' :class='{isAdd:index===changeItemColor}' :key='item.key'><span>{{item.name}}</span></li>
          </ul>
       </div>
       <div class='book_list_wrap'>
          <div class='book_item_wrap' v-for='(item,index) in rankBookList'  :key='index' @click='handleToDetail(item.bookId)'>
              <img :src="item.bookImage" style='width:.81rem;height:1.08rem' alt="">
              <div class='book_detail'>
                  <p style='font-size:.16rem'>{{item.bookName|str(9)}}</p>
                  <p style='color:#999'>
                      <span>作者:{{item.writerName|str(5)}}</span>
                      <span class='gold' v-if='item.tempTicketSum>0'>{{item.tempTicketSum|tempTicketSum}}{{RankType|danwei}}</span> 
                  </p>
                  <p style='color:#666;'>{{item.bookIntroduction|str(22)}}</p>
                  <img v-if='index===0' class='metal' src="../../assets/images/gold.png" alt="">
                  <img v-if='index===1' class='metal' src="../../assets/images/silver.png" alt="">
                  <img v-if='index===2' class='metal' src="../../assets/images/copper.png" alt="">
              </div>
          </div>
          <infinite-loading @infinite="onInfinite" ref="infiniteLoading">
          <span slot="no-more">
            目前暂无更多书籍
          </span>
          <span slot="no-results">
            目前暂无更多书籍
          </span>
         </infinite-loading>
       </div>
   </div>
</template>
<script>
import headerComponent from '@/components/common/header'
import {Post_formData2,handleScroll} from '@/config/services'
    export default{
        components:{
            headerComponent
        },
        data(){
            return{
            searchBarFixed:false,
            topList:{
               title_1:'排行榜',
               title_2:'',
               link:''
             },
             dayList:[
                 {day:'月',key:'month'},
                 {day:'总',key:'total'}
             ],
             changeDayColor:0,
             changeItemColor:0,
             rankBookList:[],
             RankType:1,
             dayType:'month',
             page:0,
             rankList:[
                    {name:"金椒榜",key:1},
                    {name:"推荐榜",key:2},
                    {name:"点击榜",key:3},
                    {name:"新书榜",key:4},
                    {name:"畅销榜",key:5},
                    {name:"吐槽榜",key:6},
                    {name:"更新榜",key:7},
                    {name:"打赏榜",key:8}
             ]
            }
        },
        filters: {
            danwei(res){
             return res==1 && '金票' ||res==2&&'小米椒'||res==3&&'点击'||res==4&&''||res==5&&'' ||res==6&&'条' ||res==7&& '' ||res==8&&'辣椒'||''
            }
        },
        methods:{
            handleTapDay(index,key){
                this.changeDayColor=index
                this.dayType=key
                if(this.dayList.length!==1){
                    this.hanleRankBook()
                }
                window.scrollTo(0,0)                             
            },
            handleTapItem (index,key) {
              this.changeItemColor=index
              this.changeDayColor=0
              if(key==1){
                  this.dayType='month'
                  this.dayList=[
                           {day:'月',key:'month'},
                           {day:'总',key:'total'}
                 ]
              }else if(key!==4){
                  this.dayType='week'
                  if(this.dayList[0].day!='周'){
                      this.dayList=[
                           {day:'周',key:'week'},
                           {day:'月',key:'month'},
                           {day:'总',key:'total'}
                      ]
                  }
              }
              if(key==4){
                  this.dayList=[
                           {day:'总',key:'total'}
                      ]
                  this.handleNewBook()
                  return;
              } 
              this.RankType=key
              this.hanleRankBook()
              window.scrollTo(0,0)             
            },
            handleNewBook(){
                 Post_formData2(this,{type:4,page:1},'/api/ranking-book',res=>{
                       this.rankBookList=res.data.newBookRankingList.list
                 })
            },
            hanleRankBook () {
                 Post_formData2(this,{type:this.RankType,page:1},'/api/ranking-book',res=>{
                     console.log(res)
                     if(res.data[this.dayType]!==undefined){
                        this.rankBookList=res.data[this.dayType].list
                     }else{
                        console.log(this.dayType)
                        this.rankBookList=[]
                   }
                })
             },
          onInfinite($state){
                  let self = this;
                  this.page=1
                 function load() {
                  self.page+=1
                        Post_formData2(self,{type:self.RankType,page:self.page},'/api/ranking-book',res=>{
                             let lists=null
                           if(res.returnCode==200){
                                if(self.RankType!=4){
                                     lists = res.data[self.dayType].list
                                }else{
                                     lists=res.data.newBookRankingList.list
                                 }
                                    self.rankBookList = self.rankBookList.concat(lists);
                                if(self.RankType!=4){
                                    if(res.data[self.dayType].lastPage>=self.page){                                   
                                        $state.loaded()
                                   }else {
                                        $state.complete()
                                  }
                                }else{
                                    if(res.data.newBookRankingList.lastPage>=self.page){
                                        $state.loaded()
                                    }else{
                                        $state.complete()
                                    }
                              }
                            }else{
                              $state.complete()                                
                         }
                    })
                 }
                setTimeout(() => {
                    load();
                },500);  
            },
             handleToDetail(bookId){
                 this.$router.push({path:'/bookDetails',query:{bookId:bookId}});
             },
             handleScroll(){
                 handleScroll(this,'#nav')
             }
        },
        mounted () {
            // this.hanleRankBook()
            let self=this
            this.$nextTick(()=>{
                window.addEventListener('scroll',this.handleScroll)
            })
        },
        destroyed () {
            window.removeEventListener('scroll',this.handleScroll)
        }
    }
</script>
<style lang='less' scoped>
   .bookRank_wrap {
       width:100%;
      -webkit-overflow-scrolling:touch;        
     .day{
         height:.44rem;
         text-align: right;
         line-height: .44rem;
         font-size:.16rem;
         .day_btn{
             padding:.15rem;
         }
     }
    .nav{
        width:.72rem;
        height:3.52rem;
        margin-left: .12rem;
        background-color: #fff;
        box-shadow: 0 0 .1rem rgba(0,0,0,0.1);
        border-radius:5px;
        float: left;
        li{
            list-style: none;
            height:.44rem;
            text-align: center;
            span{
                line-height: .44rem;
            }
        }
        .isAdd{
                background-color: #F77583;
                color:#fff;
            }
     }
     .book_list_wrap{
         width:2.7rem;
         float:right;
         margin-right:.05rem;
         .book_item_wrap{
             height:1.24rem;
             margin-bottom:.07rem;
             border-bottom:1px solid #EFEFEF;
             width:100%;
             padding-bottom: .1rem;
             .book_detail{
                 width:1.76rem;
                 float: right;
                 margin-left:.1rem;
                 font-size:.14rem;
                 position: relative;
                 p:not(:first-child){
                   margin-top: .1rem;     
                }
                .gold{
                    color:#F73D51;
                    border:1px solid #F73D51;
                    position: absolute;
                    right:.16rem;
                    border-radius: 4px;
                    font-size: .12rem;
                    padding:0 .04rem;
                }
               
             }
              .metal{
                    width:.19rem;
                    height:.24rem;
                    position: absolute;
                    top:-.05rem;
                    left:-1.03rem;
                }
         }
     }
      .isFixed{
            position: fixed;
            top:.4rem;
        }
   }
</style>