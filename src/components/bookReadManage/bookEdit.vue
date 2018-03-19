<template>
    <div class='book_edit'>
           <headerComponent :list='topList'></headerComponent>
           <div style='margin-left:.22rem'>
           <div class='book_wrap' v-for='item in bookList'>
                <img :src="item.img" style='width:.96rem;height:1.27rem' alt="">
                <p>{{item.bookName}}</p>
                <P style='color:#999999'>{{item.author}}</P>
           </div>
           </div>
    </div>
</template>
<script>
import headerComponent from '@/components/common/header'
export default{
    components:{
        headerComponent
    },
    data(){
        return{
            topList:{
                title_1:'我的书架',
                title_2:'删除',
                link:''
            },
            bookList:[
                {bookName:'老公晚上请温柔',img:require('../../assets/images/test.png'),author:'机器猫'},
                {bookName:'老公晚上请温柔',img:require('../../assets/images/test.png'),author:'机器猫'},
                {bookName:'老公晚上请温柔',img:require('../../assets/images/test.png'),author:'机器猫'},
                {bookName:'老公晚上请温柔',img:require('../../assets/images/test.png'),author:'机器猫'},                
                {bookName:'老公晚上请温柔',img:require('../../assets/images/test.png'),author:'机器猫'},               
                {bookName:'老公晚上请温柔',img:require('../../assets/images/test.png'),author:'机器猫'},                
                {bookName:'老公晚上请温柔',img:require('../../assets/images/test.png'),author:'机器猫'},                
                {bookName:'老公晚上请温柔',img:require('../../assets/images/test.png'),author:'机器猫'},                
                {bookName:'老公晚上请温柔',img:require('../../assets/images/test.png'),author:'机器猫'},                                
            ]
        }
    }
}
</script>
<style lang='less' scoped>
  .book_edit{
      width:100%;
      height:100%;
      .book_wrap{
         width:.96rem;
         font-size:.12rem;
         color:#333;
         text-align: center;
         display:inline-block;
         margin-top:.17rem;
         margin-right:.21rem;
      }
  }
</style>
