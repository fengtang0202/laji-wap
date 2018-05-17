<template>
<div>
  <div class='pay_wrap' v-if='show'>
              <div class='pay_title'>
                <p style='margin-left:.2rem;'>时间</p>
                <p style='margin-left:.4rem;'>充值途径</p>
                <p>金额</p>
                <p>状态</p>
              </div>
          <div class='pay_list' v-for='item in payRecordList' >
                <p >{{item.dateTimes|formatDate2}}</p>
                <p>{{item.rechargeType|payType}}</p>
                <p>{{item.money}}</p>
                <p>{{item.isOK|status}}</p>
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
    <No v-if='!show'></No>
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
             source:{
                img:require('../../assets/images/1.png'),
                text:''
            }
        }  
     },
     filters: {
         status(res){
           return res==0?'失败':'成功'
         },
         payType(res){
              let type='';
              res==110&&(type='支付宝')
              res==113&&(type='微信')
              res==112&&(type='苹果支付')
              return res=type
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
                page:this.page
             }
             Post_formData2(this,options,'/api/user-RechargeRecord',res=>{
                 if(res.returnCode==200){
                     this.payRecordList=this.payRecordList.concat(res.data.list)
                     console.log(this.payRecordList)
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
         }
     },
     mounted () {
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
           border-bottom:1px solid #E9E9E9;
        //    margin-left:.1rem;
         p {
             float:left;
             width:20%;
             text-align: center;
         }
       }
       .pay_list{
           overflow: hidden;
           font-size: .14rem;
           margin-left:.1rem;
            p{
               float: left;
               text-align: center;
               min-width:20%;
               height:.4rem;
               line-height: .4rem;
               border-bottom:1px solid #E9E9E9;               
            }
       }
   }
</style>
