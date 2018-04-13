<template>
<div>
  <div class='pay_wrap' v-if='show'>
              <div class='pay_title'>
                <p style='margin-left:.2rem;'>时间</p>
                <p style='margin-left:.4rem;'>章节名</p>
                <p>作品名称</p>
                <p>辣椒</p>
              </div>
          <div class='pay_list' v-for='item in payRecordList'>
                <p >{{item.subscriptionDateTime|dateFormat}}</p>
                <p>{{item.bookChapterName|str}}</p>
                <p>{{item.bookName|str}}</p>
                <p>{{item.subscriptionPrice}}</p>
          </div>
  </div>
  <no-content :source='source'  v-if='!show'></no-content>
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
         str(res){
             return res.length>6?res.slice(0,6)+'...':res
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
             }
             Post_formData2(this,options,'/api/userSubscriptionRecord',res=>{
                 if(res.returnCode===200){
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
               min-width:13%;
               height:.4rem;
               line-height: .4rem;
               border-bottom:1px solid #E9E9E9;               
            }
       }
   }
  
</style>
