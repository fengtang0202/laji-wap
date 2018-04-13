<template>
<div>
  <div class='pay_wrap' v-if='show'>
              <div class='pay_title'>
                <p >时间</p>
                <p >作品名称</p>
                <p>数量</p>
              </div>
          <div class='pay_list' v-for='item in payRecordList'>
                <p >{{item.giveDateTime|dateFormat}}</p>
                <p>{{item.bookName}}</p>
                <p>{{item.spicyiTicketCount}}</p>
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
            payRecordList:null,
            show:true,
            source:{
                img:require('../../assets/images/1.png'),
                text:'没有相关数据'
            }
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
             width:33%;
             text-align: center;
         }
       }
       .pay_list{
           overflow: hidden;
           font-size: .14rem;
            p{
               float: left;
               text-align: center;
               height:.4rem;
               min-width:30%;
               line-height: .4rem;
               border-bottom:1px solid #E9E9E9;               
            }
       }
   }
</style>
