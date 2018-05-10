<template>
    <div class="text_con">
      <div class="book" v-for="item in data"  @click="handleGo(item.bookId)">
         <img  :src='item.bookImage' >
         <p class="p_one">{{item.bookName}}</p>
         <p class="p_two">{{item.writerName}}</p>
     </div>
    </div> 
</template>
<script>
     export default{
        data(){
         return {
           
         }
       },
        props:{
            data:{
                type:Array,
                default:[]
            } 
         },
       methods:{
           handleGo(id){
              this.$router.push({path:'/bookDetails',query:{bookId:id}});
           }
       }
    }
</script>
<style lang="less" scoped>
       .text_con{
            width:100%;
            height:3.6rem;
            margin-top:.1rem;
            box-sizing:border-box;
            font-size:.14rem;
            text-align:center;
            .book{
                float:left;
                width:1.25rem;
                height:1.8rem;
                img{
                    width:.96rem;
                    height:1.27rem;
                                 
                    border-radius:5px;
                }
            }
            .p_one{
                color:#333;
                white-space: nowrap;
                text-overflow:ellipsis;
                overflow: hidden;
            }
            .p_two{
                color:#999;
                white-space: nowrap;
                text-overflow:ellipsis;
                overflow: hidden;
            }
            img{
                display:block;
                margin:0 auto;
                width:.96rem;
                height:1.27rem;
            }
        }
</style>

