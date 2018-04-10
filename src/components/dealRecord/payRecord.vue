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
                <p>{{item.rechargeType}}</p>
                <p>{{item.money}}</p>
                <p>{{item.isOK}}</p>
          </div>
  </div>
  <div style='text-align:center;' v-if='!show'>
      <img src="../../assets/images/1.png" alt="">
  </div>
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
            show:true
        }  
     },
     filters: {
         dateFormat
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
