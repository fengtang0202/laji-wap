<template>
   <div> 
       <div class='book_item_wrap' v-for='(item,index) in dataList'  :key='index' @click='handleToDetail(item.bookId)'>
              <img :src="item.bookImage" style='width:.81rem;height:1.08rem' alt="">
              <div class='book_detail'>
                  <p style='font-size:.16rem'>{{item.bookName|str(9)}}</p>
                  <p style='color:#999'>
                      <span>作者:{{item.writerName|str(5)}}</span>
                      <span class='gold' v-if='RankType!=4&&RankType!=5&&RankType!=7'>{{item.tempTicketSum|tempTicketSum}}{{RankType|type}}</span> 
                  </p>
                  <p style='color:#666;'>{{item.bookIntroduction|str(22)}}</p>
                  <img v-if='index===0' class='metal' src="../../assets/images/gold.png" alt="">
                  <img v-if='index===1' class='metal' src="../../assets/images/silver.png" alt="">
                  <img v-if='index===2' class='metal' src="../../assets/images/copper.png" alt="">
              </div>
          </div>
    </div>
</template>
<script>
  export default{
      data(){
         return{

         }
      },
       filters: {
            danwei(res){
             return res==1 && '金票' ||res==2&&'小米椒'||res==3&&'点击'||res==4&&''||res==5&&'' ||res==6&&'条' ||res==7&& '' ||res==8&&'辣椒'||''
            }
        },
      props:{
         dataList:{
             type:Array,
             default:[]
         },
         RankType:{
             type:String,
             default:1
         },
         changeDayColor:0
      },
      methods: {
          handleTapDay(index,key,link){
                // this.changeDayColor=index
                this.dayType=key
                this.$router.replace(link)                        
         },
          handleToDetail(bookId){
                 this.$router.push({path:'/bookDetails',query:{bookId:bookId}});
            },
      },
      created(){
        //   this.changeDayColor=0
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
         overflow: hidden;
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
                    right:0rem;
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
</style>
