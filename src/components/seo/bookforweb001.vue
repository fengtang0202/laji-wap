<template>
    <div class='content'>
       <div>
          <img src="../../assets/images/bookbggc.jpg" style='width:100%;display:block;pointer-events: none; ' alt="">
       </div>
       <div class='bookcontent'>
           <div class='f_content' v-for='(item,index) in content' :key='index'>
                {{item.trim()}}
           </div>
       </div>
          <!-- <img src="../../assets/images/nsbottom.jpg" style='width:100%;display:block; ' alt=""> -->
       <ul class='downbtn'>
           <li v-for="(btn,index) in btns" :key=index>
               <button  @click="handleGo(btn.link)">{{btn.text}}</button>
           </li>
       </ul> 
    </div>
</template>
<script>
import {handleIsPhone1} from '../../config/common'
import axios from 'axios'
import { setTimeout } from 'timers';
export default{
    data(){
        return{
           handleIsPhone1:handleIsPhone1 ,
           content:[],
           btns:[
               {text:'上一章',link:'/bookRead?bookId=16828&chapterId=159588'},
               {text:'回到首页',link:'/'},
               {text:'下一章',link:'/bookRead?bookId=16828&chapterId=160322'}
           ]
        }
    },
    methods: {
      async  getBookText(chapterIdArray) {
             var str=''
              for(let i=0;i<chapterIdArray.length;i++) {
                await  axios.post(`/api/book-read?chapterId=${chapterIdArray[i]}`).then(res=>{
                      str+=res.data.data.chapterInfo.chapterContent.replace(/<LG>[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}<\/LG>/ig,'<br>').replace(/<br>\s*<br>/ig,'<br>')
                 }) 
              }
         this.content=str.split('<br>')  
        },
        handleGo(res){
            this.$router.push(res)
        }  
    },
    created() {
       this.getBookText([160320,160321])
       sessionStorage.setItem('gc','a')
    },
}    
</script>
<style lang="less" scoped>
    .content{
      position: relative;
      padding-bottom:.58rem;
  }
  .bookcontent{
            padding:.1rem .24rem .8rem .24rem;
            letter-spacing:.05rem; 
            text-align: justify;
            line-height: 2; 
            background: linear-gradient( #fbfaf8 0%, #ddd9d6 100%);
            min-height:5rem;
  }
  .f_content{
       text-indent: 2em; 
       margin-top:.2rem;
  }
  .downbtn{
      width:100%;
      height:.58rem;
      background: #fff;
      color:#fff;
      position: fixed;
      bottom:0;
      padding:.12rem;
      li{
          float: left;
          width:33%;
          text-align: center;
          list-style: none;
      }
    button {
        width:80%;
        height:.34rem;
        border:0;
        outline: none;
        background:#274963; 
        color:#fff;
        border-radius: 3px;    
    }
  }
</style>
