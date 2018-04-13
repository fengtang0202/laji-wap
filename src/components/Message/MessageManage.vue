<template>
  <div class='message_wrap'>
      <headerComponent :list='topList'></headerComponent>
     <div>
       <div class='tabs'>
           <div class='tabs_item' @click='hanldeTabs(index,item.link)' :class='{active:showRouter==index}' v-for='(item,index) in tabList' :key='index'>
               {{item.title}}
           </div>
       </div>
    </div>
    <!-- <transition :name="transitionName">     -->
       <router-view></router-view>
    <!-- </transition> -->
  </div>
</template>
<script>
import {Tab,TabItem,Swiper,SwiperItem} from 'vux'
import {Param_Get_Resful,Post_formData2,formatDate} from '@/config/services'
     export default {
         data(){
             return {
                 topList:{
                     title_1:'我的消息',
                     title_2:'首页',
                     link:'/'
                 },
                 transitionName: 'slide-left',
                    tabList:[
                        {title:'通知',link:'/MessageManage'},
                        {title:'私信',link:'/MessageManage/personalLetter'},
                        {title:'评论',link:'/MessageManage/commentReply'}
                    ],
                    content:0,
                    showRouter:0,
                    messageList:[],
                    sysMessageList:[]

               }    
         },
         wacth:{
            '$route'(){
                console.log(1)
            }
         },
         components: {
             Tab,TabItem,Swiper,SwiperItem
         },
         methods: {
            hanldeTabs(index,link){
                console.log(index)
                this.$router.replace(link)
                this.getIndex()
            },
            getIndex(){
               let i=this.$route.path
                switch(i){
                    case '/MessageManage':
                       this.showRouter=0
                       break;
                    case '/MessageManage/personalLetter':
                        this.showRouter=1
                        break;
                    case '/MessageManage/commentReply':
                        this.showRouter=2
                }
            }
         },
         mounted () {
             this.getIndex()
             Post_formData2(this,'','/api/person-messageCount',res=>{
               console.log(res)
             })
             Post_formData2(this,{startpage:1},'api/sys-getsystemmsg',res=>{
                 this.sysMessageList=res.data.list
             })
         }
     }
</script>
<style lang='less'>
     .message_wrap{
         .tabs{
             height:.4rem;
             width:100%;
             border-bottom:1px solid #EFEFEF;
             display: flex;
             flex-direction: row;
             justify-content:space-around;
             .tabs_item{
                 height:.4rem;
                 line-height: .4rem;
                 float: left;
                 font-size: .16rem;
                 padding:0 .1rem;
             }
             .active{
                 border-bottom:2px solid #FB5E6F;
             }
         }
     }
</style>
