<template>
<div>
  <div class='pay_wrap' v-if='show'>
              <div class='pay_title'>
                <p style='margin-left:.2rem;'>时间</p>
                <p style='margin-left:.4rem;'>充值途径</p>
                <p>金额</p>
                <p>状态</p>
              </div>
          <div class='pay_list' v-for='item in payRecordList'>
                <p >{{item.dateTimes|dateFormat}}</p>
                <p>{{item.rechargeType|payType}}</p>
                <p>{{item.money}}</p>
                <p>{{item.isOK|status}}</p>
          </div>
  </div>
    <no-content v-if='!show' :source='source'></no-content>
  </div>
</template>
<script>
import {Post_formData2} from '../../config/services'
import {mapState} from 'vuex'
import {dateFormat } from 'vux'
export default{
    data(){
        return {
            payRecordList:[],
            show:true,
             source:{
                img:require('../../assets/images/1.png'),
                text:'没有相关数据'
            }
        }  
     },
     filters: {
         dateFormat,
         status(res){
           return res==0?'失败':'成功'
         },
         payType(res){
              let type='';
              res==110&&(type='支付宝')
              res==111&&(type='微信支付')
              res==112&&(type='苹果支付')
              return res=type
         }
     },
     computed:{
        ...mapState(['userInfo'])
     },
     methods:{
         getPayList(){
             let options={
                startpage:1,
                userid:this.userInfo.userId,
                page:1
             }
             Post_formData2(this,options,'/api/user-RechargeRecord',res=>{
                 if(res.returnCode==200){
                     this.payRecordList=res.data.list
                 }else{
                     this.show=false
                 }
             })
         }
     },
     mounted () {
         this.getPayList()
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
