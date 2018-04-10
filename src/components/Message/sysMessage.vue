<template>
     <div>
          <div style='width:100%;padding:.1rem .1rem;border-bottom:1px solid #EFEFEF' v-for='(item,index) in sysMessageList' :key='index'>
               <div style='overflow:hidden;margin-bottom:.1rem;'>
                <div style='float:left;'>{{item.title}}</div>
                <div style='float:right;'>{{item.dateTimes|formatDate}}</div>
               </div>
               <p>{{item.messageContent}}</p>
           </div>
           
     </div>
</template>
<script>
import {Post_formData2} from '@/config/services'
     export default {
         data(){
            return{
               sysMessageList:[]
            }
         },
         methods:{
          getSysMessage(){
               Post_formData2(this,{startpage:1},'/api/sys-getsystemmsg',res=>{
                 this.sysMessageList=res.data.list
             })
          }
         },
         mounted () {
             this.getSysMessage()
         }
     }
</script>
<style lang='less' scoped>
      
</style>
