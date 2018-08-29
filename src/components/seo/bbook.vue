<template>
    <div class='content'>
       <div>
          <img :src="bgImg" style='width:100%;display:block;pointer-events: none; ' alt="">
       </div>
       <div class='bookcontent' :style="{background: bgColor,marginTop:btnImg?'0':'-1rem'}">
           <div class='f_content' v-for='(item,index) in content' :key='index'>
                {{item.trim()}}
           </div>
       </div>
          <img @click="handleIsPhone1(chandleId)" src="../../assets/images/hslyBottom.jpg" style='width:100%;display:block; ' alt="">
       <div class='downbtn'>
          <button @click="handleIsPhone1(chandleId)" :style="{backgroundImage: 'url(' + btnImg + ')',}">
            <span v-if="!btnImg">继续阅读全文,下载辣鸡小说></span>
          </button>
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
