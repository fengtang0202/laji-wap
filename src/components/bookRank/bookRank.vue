<template>
   <div class='bookRank_wrap'>
       <headerComponent :list='topList'></headerComponent>
       <div class='nav' id='nav'  :class="searchBarFixed == true ? 'isFixed' :''">
          <ul>
              <li v-for='(item,index) in rankList' @click='handleTapItem(index,item.key,item.link)' :class='{isAdd:index===changeItemColor}' :key='item.key'><span>{{item.name}}</span></li>
          </ul>
       </div>
       <div class='book_list_wrap'>
           <router-view></router-view>
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
             page:0,
             rankList:[
                    {name:"金椒榜",key:1,link:'/bookRank?dayType=month'},
                    {name:"小米椒",key:2,link:'/bookRank/minPaperRank?dayType=week'},
                    {name:"点击榜",key:3,link:'/bookRank/clickRank?dayType=week'},
                    {name:"新书榜",key:4,link:'/bookRank/newBookRank'},
                    {name:"畅销榜",key:5,link:'/bookRank/sellRank?dayType=week'},
                    {name:"吐槽榜",key:6,link:'/bookRank/debateRank?dayType=week'},
                    {name:"更新榜",key:7,link:'/bookRank/updateRank?dayType=week'},
                    {name:"打赏榜",key:8,link:'/bookRank/rewardRank?dayType=week'}
             ]
            }
        },
        filters: {
            danwei(res){
             return res==1 && '金票' ||res==2&&'小米椒'||res==3&&'点击'||res==4&&''||res==5&&'' ||res==6&&'条' ||res==7&& '' ||res==8&&'辣椒'||''
            }
        },
        watch:{
             '$route'(to,from){
               this.handleInitItemIndex()
            }
        },
        methods:{
            handleInitItemIndex(){
                let path=this.$route.path
                console.log(path)
                   switch(path){
                    case '/bookRank':
                     this.changeItemColor=0
                     break;
                     case '/bookRank/minPaperRank':
                     this.changeItemColor=1
                     break;
                     case '/bookRank/clickRank':
                     this.changeItemColor=2
                     break;                     
                     case '/bookRank/newBookRank':
                     this.changeItemColor=3
                     break;
                     case '/bookRank/sellRank':
                     this.changeItemColor=4
                     break;                     
                     case '/bookRank/debateRank':
                     this.changeItemColor=5
                     break;                     
                     case '/bookRank/updateRank':
                     this.changeItemColor=6
                     break;                     
                     case '/bookRank/rewardRank':
                     this.changeItemColor=7
                     break;
                }              
            },
            handleTapDay(index,key){
                // this.changeDayColor=index
                this.dayType=key
                if(this.dayList.length!==1){
                    this.hanleRankBook()
                }
                window.scrollTo(0,0)                             
            },
            handleToDetail(bookId){
                 this.$router.push({path:'/bookDetails',query:{bookId:bookId}});
             },
            handleTapItem (index,key,link) {
              this.changeItemColor=index
              this.changeDayColor=0
              this.$router.replace({path:link})
            },
        },
        mounted () {
            // this.hanleRankBook()
            let self=this
            this.$nextTick(()=>{
                window.addEventListener('scroll',this.handleScroll)
            })
            this.handleInitItemIndex()
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
        position: fixed;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        top:.88rem;
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