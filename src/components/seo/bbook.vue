<template>
    <div class='content'>
       <div>
          <img src="../../assets/images/book.png" style='width:3.75rem;display:block;pointer-events: none; ' alt="">
       </div>
       <div class='bookcontent'>
           <div class='f_content' v-for='(item,index) in content' :key='index'>
                {{item.trim()}}
           </div>
       </div>
       <div class='downbtn'>
          <button @click="handleIsPhone1(chandleId)">继续阅读全文,下载辣鸡小说></button>
       </div> 
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
           type:String,
           default:''
       }
    },
    created() {
        axios.post(`/api/book-read?chapterId=${this.chapterId}`).then(res=>{
           this.content=res.data.data.chapterInfo.chapterContent.replace(/<LG>[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}<\/LG>/ig,'<br>').replace(/<br>\s*<br>/ig,'<br>').split('<br>')
       })
    },
}    
</script>
<style lang="less" scoped>
    @import '../../css/bilibilibook.less';
</style>
