<template> 
  <div class='wechat'>
      <headerComponent :list='topList'></headerComponent>
      <div class='pay_category_wrap'>
            <div class='pay_category'  v-for="(item,index) in payCategoryList" :class="{isAdd:isAddTo===index}" @click='handelTap(index)'>
                 <p class='price'>{{item.price+'元'}}</p>
                 <p class='price'>{{item.price*100+'小辣椒'}}</p>
                 <p class='gift'>{{item.gift}}</p>    
            </div>
      </div>    
  </div>
</template>
<script>
import headerComponent from '@/components/common/header'
export default{
    components:{
          headerComponent
    },
     data(){
      return{
       topList:{
           title_1:"微信支付",
           title_2:"首页",
           link:'/home'
       },
       isAddTo:0,
       payCategoryList:[
           {price:6,gift:''},
           {price:12,gift:''},
           {price:30,gift:'送150辣椒券'},
           {price:50,gift:'送300辣椒券'},
           {price:98,gift:'送800辣椒券'},
           {price:198,gift:'送1800辣椒券'},           
       ]
    }  
  },
  methods: {
      handelTap(index){
           this.isAddTo=index
      }
  }
}
</script>
<style scoped lang='less'>
   .wechat{
       width:100%;
       color: #333333;
       font-size:.16rem;
       .pay_category_wrap{
           display:flex;
           flex-direction: row;
           justify-content: space-around;
           flex-wrap:wrap;
           padding:.3rem .1rem;
       .pay_category{
           width:1.06rem;
           height:1.06rem;
           text-align: center;
           border:.01rem solid #FB5E6F;
           border-radius: .05rem;
           margin-top:.3rem;
           padding-top:.3rem;
           .gift{
               font-size:.12rem;
               color:#FB5E6F;
           }
         }
         .isAdd{
             background-color:#FB5E6F;
             color:#fff;
             .gift{
                 color:#fff;
             }
         }
       }
   }
</style>
