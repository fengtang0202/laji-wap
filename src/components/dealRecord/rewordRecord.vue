<template>
<div>
  <div class='pay_wrap' v-if='show'>
              <div class='pay_title'>
                <p >时间</p>
                <p >作品名称</p>
                <p>数量</p>
              </div>
          <div class='pay_list' v-for='item in payRecordList'>
                <p >{{item.giveDateTime|formatDate2}}</p>
                <p>{{item.bookName|str(10)}}</p>
                <p class='add'>{{item.spicyiTicketCount}}</p>
          </div>
           <infinite-loading spinner='bubbles' @infinite="onInfinite" ref="infiniteLoading">
          <span slot="no-more">
            目前暂无更多记录
          </span>
          <span slot="no-results">
            目前暂无更多记录
          </span>
         </infinite-loading>
  </div>
  <No v-if='!show' message='没有相关数据'></No>
  </div>
</template>
<script>
import {Post_formData2} from '../../config/services'
import {mapState} from 'vuex'
export default{
    data(){
        return {
            payRecordList:[],
            show:true,
            page:0,
        }  
     },
     computed:{
        ...mapState(['userInfo'])
     },
     methods:{
         onInfinite($state){
             this.page+=1
             let options={
                startpage:this.page,
                userid:this.userInfo.userId,
             }
             Post_formData2(this,options,'/api/spicyirewardticketlogByUserId',res=>{
                 if(res.returnCode==200){
                     this.payRecordList=this.payRecordList.concat(res.data.list)
                     if(res.data.lastPage>this.page){
                         $state.loaded()
                        }else{
                         $state.complete()                             
                         }
                     }else{
                     $state.complete()
                     this.show=false
                 }
             })
         },
         getPayList(){
             let options={
                startpage:1,
                userid:this.userInfo.userId,
             }
             Post_formData2(this,options,'/api/spicyirewardticketlogByUserId',res=>{
                 if(res.returnCode==200){
                     this.payRecordList=res.data.list
                 }else{
                     this.show=false
                 }
             })
         }
     },
     mounted () {
        //  this.getPayList()
     }
}
</script>
<style lang="less" scoped>
   .pay_wrap{
       width:100%;
       .pay_title{
           overflow: hidden;
           height:.3rem;
           width:100%;
           margin-top:.1rem;
           line-height: .3rem;
         p {
             float:left;
             width:33%;
             text-align: center;
         }
       }
       .pay_list{
           overflow: hidden;
           font-size: .14rem;
           position: relative;
           border-bottom:1px solid #E9E9E9;           
            p{
               float: left;
               text-align: center;
               height:.4rem;
               min-width:30%;
               line-height: .4rem;
            }
            .add{
                position: absolute;
                right:.1rem;
            }
       }
   }
</style>
