<template>
   <div class='bookRank_wrap'>
       <headerComponent :list='topList'></headerComponent>
       <div class='day'>
           <span class='day_btn' v-for='(item,index) in dayList' :key='item.key' :style='{"color":changeDayColor===index?"#FE5C6C":"#000"}' @click='handleTapDay(index,item.key)'>{{item.day}}</span>
       </div>
       <div class='nav' :class="searchBarFixed == true ? 'isFixed' :''">
          <ul>
              <li v-for='(item,index) in rankList' @click='handleTapItem(index,item.key)' :class='{isAdd:index===changeItemColor}' :key='item.key'><span>{{item.name}}</span></li>
          </ul>
       </div>
       <div class='book_list_wrap'>
          <div class='book_item_wrap' v-for='item in rankBookList' :key='item.bookId' @click='handleToDetail(item.bookId)'>
              <img :src="item.bookImage" style='width:.81rem;height:1.08rem' alt="">
              <div class='book_detail'>
                  <p style='font-size:.16rem'>{{item.bookName|bookName}}</p>
                  <p style='color:#999'>作者：{{item.writerName}}<span>304金票</span> </p>
                  <p style='color:#666'>我是简介我是简介我是简介 我是简介我是简介我是简介</p>
              </div>
          </div>
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
                 {day:'周',key:'week'},
                 {day:'月',key:'month'},
                 {day:'总',key:'total'}
             ],
             changeDayColor:0,
             changeItemColor:0,
             rankBookList:[],
             RankType:2,
             dayType:'week',
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
            bookName(res){
              return  res.length>10? res.slice(0,8)+"...":res 
            }
        },
        methods:{
            handleTapDay(index,key){
                this.changeDayColor=index
                this.dayType=key
                this.hanleRankBook()
            },
            handleTapItem (index,key) {
              this.changeItemColor=index
              this.RankType=key
              this.hanleRankBook()              
            },
            hanleRankBook () {
                 Post_formData2(this,{type:this.RankType},'/api/ranking-book',res=>{
                     if(res.data[this.dayType]!==undefined){
                        this.rankBookList=res.data[this.dayType].list
                     }else{
                        return this.rankBookList
                   }
                })
             },
              
             handleToDetail(bookId){
                 this.$router.push({path:'/bookDetails',query:{bookId:bookId}});
             },
        },
        mounted () {
            this.hanleRankBook()
            window.addEventListener('scroll',()=>{ handleScroll(this,'.nav')})
        },
        destroyed () {
            window.removeEventListener('scroll',()=>{ handleScroll(this,'.nav')})
        }
    }
</script>
<style lang='less' scoped>
   .bookRank_wrap {
       width:100%;
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
        box-shadow: 0 0 .05rem rgba(0,0,0,0.5);
        border-radius: .05rem;
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
         margin-right:.1rem;
         .book_item_wrap{
             height:1.08rem;
             margin-bottom:.2rem;
             .book_detail{
                 width:1.76rem;
                 float: right;
                 margin-left:.1rem;
                 font-size:.14rem;
                 p{
                   margin-top: .02rem;     
                }
             }
         }
     }
      .isFixed{
            position: fixed;
            top:.4rem;
        }
   }
</style>
