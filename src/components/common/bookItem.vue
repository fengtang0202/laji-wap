<template>
<div>
    <div class="text_d" v-for='item in list' :key='item.bookId' @click="handleGo(item.bookId)">
            <img :src="item.bookImage">
            <div class="con_d">
               <div class="text_one">
                  <span class="one_sp">{{item.bookName|str(10)}}</span>
                  <span class="two_sp" >{{item.clickTotal|clickTotal}}万点击</span>
               </div>
               <div class="text_two">
                  <span>作者: </span>
                  <span v-html="item.writerName"></span>
                  <p></p>
                  <span  v-html="item.classificationName"></span>
                  <p></p>
                  <span  style='color:#47b2d8;' v-if="item.bookStatus===0">连载中</span>
                  <span  style='color:#ff6f00;' v-if="item.bookStatus===1">已完结</span>
               </div>
               <div class="text_three">
                    <span :style="{color:i.bookColor,border:'1px solid'}" v-for="i in item.booklableList" v-html="i.bookLableName"></span>
               </div>
               <div class="text_four">
                     {{item.bookIntroduction}}
               </div>
            </div>
        </div>
</div>
</template>
<script>
    import {mapState,mapActions} from 'vuex'
     export default{
         data(){
             return{

             }
         },
          props: {
            list: {
            type: Array,
            default: []
            }
        },
        methods: {
             handleGo(id){
                 this.$router.push({path:'/bookDetails',query:{bookId:id}});
            }
        }
}
</script>

     }
</script>
<style lang="less" scoped>
.text_d{
            box-sizing:border-box;
            padding:0 .15rem;
            height:1.05rem;
            margin-top:.27rem;
            overflow: hidden;
            img{
                width:.78rem;
                height:1.05rem;
                float:left;
            }
            .con_d{
                float:right;
                width:2.54rem;
                height:1.05rem;
            }
            .text_one{
                margin-top:-.02rem;
                .one_sp{
                    font-size:.16rem;
                    color:#333;
                }
                .two_sp{
                    font-size:.12rem;
                    color:#F73D51;
                    margin-left:.14rem;
                }
            }
            .text_two{
                font-size:.12rem;
                color:#999;
                border:1px solid #fff;
                height:.2rem;
                span{
                    float:left;
                }
                .oSpan{
                    color:#2BF6C7;
                }
                p{
                    width:.02rem;
                    height:.1rem;
                    background:#FFAAAA;
                    float:left;
                    margin:.05rem .1rem 0;
                }
            }
            .text_three{
                height:.2rem;
                font-size:.12rem;
                span{
                    float:left;
                    margin-right:.1rem;
                    padding:0 .05rem;
                    border-radius:.2rem;
                    color: #71E281;
                }
            }
            .text_four{
                margin-top:.03rem;
                width:2.54rem;
                font-size:.14rem;
                height:.4rem;
                color:#666;
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
</style>

