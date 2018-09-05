<template>
    <div class='content'>
       <div>
          <img :src="bgImg" style='width:100%;display:block;pointer-events: none; ' alt="">
       </div>
       <div class='bookcontent' :style="{background: bgColor,marginTop:btnImg?'0':'-1rem'}">
           <div class='f_content' v-for='(item,index) in content' :key='index'>
                {{item.trim()}}
           </div>
           <div>
               <button class='btn' @click="handleGo(chandleId)">下一章</button>
           </div>
       </div>
          <!-- <img @click="handleIsPhone1(chandleId)" src="../../assets/images/hslyBottom.jpg" style='width:100%;display:block; ' alt=""> -->
       <!-- <div class='downbtn'>
          <button @click="handleIsPhone1(chandleId)" :style="{backgroundImage: 'url(' + btnImg + ')',}">
            <span v-if="!btnImg">继续阅读全文,下载辣鸡小说></span>
          </button>
       </div>  -->
    </div>
</template>
<script>
import {handleIsPhone1} from '../../config/common'
import axios from 'axios'
export default{
    data(){
        return{
           handleIsPhone1:handleIsPhone1 ,
           content:[]
        }
    },
    props:{
       chandleId:{
           type:String,
           default:''
       },
       chapterId:{
           type:Array,
           default:[]
       },
        bgImg:{
           type:String,
           default:''
      },
      bgColor:{
          type:String,
          default:''
      },
      btnImg:{
          type:String,
          default:''
      },
      p:{
          type:Number,
          default:0
      }
    },
    methods:{
       async  getBookText(chapterIdArray) {
             var str=''
              for(let i=0;i<chapterIdArray.length;i++) {
                await  axios.post(`/api/book-read?chapterId=${chapterIdArray[i]}`).then(res=>{
                      str+=res.data.data.chapterInfo.chapterContent.replace(/<LG>[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}<\/LG>/ig,'<br>').replace(/<br>\s*<br>/ig,'<br>')
                 }) 
              }
         this.content=str.split('<br>')
          if(this.p!=0){
            this.content=this.content.slice(0,-this.p)
          }  
        },
        handleGo(chandleId){
            sessionStorage.setItem('pi',chandleId)
            this.$router.push('/bookRead?bookId=11275&chapterId=102574')
        }
    },
    created() {
      this.getBookText(this.chapterId)
    },
}    
</script>
<style lang="less" scoped>
    @import '../../css/bilibilibook.less';
    .btn{
        width:100%;
        background:rgb(246, 207, 220);
        color:#fff;
        border-radius:.2rem;
        border:0;
    }
</style>
