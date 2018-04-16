<template> 
  <div class='wechat'>
      <headerComponent :list='topList'></headerComponent>
      <div class='pay_category_wrap'>
            <div class='pay_category'  :key='index'  v-for="(item,index) in payCategoryList" :class="{isAdd:isAddTo===index}" @click='handelTap(index,item.price)'>
                 <p class='price'>{{item.price+'元'}}</p>
                 <p class='price'>{{item.price*100+'小辣椒'}}</p>
                 <p class='gift'>{{item.gift}}</p> 
                 <span class='icon' v-if='item.gift?true:false'>赠送</span>         
            </div>
      </div>  
      <div v-html='formHtml'>
      </div> 
       <!--支付宝弹框-->
    <div v-transfer-dom >
      <popup v-model="show" style='height:2rem;'>
        <div class="popup">
           <p style='color:#FB5E6F;font-size:.28rem;text-align:center;margin:.13rem 0;'>¥{{price}}</p>
           <div style='overflow:hidden;border-bottom:1px solid #EFEFEF;'>
              <p style='color:#666666;font-size:.16rem;float:left;margin-left:.14rem'>可用余额:{{userInfo.userMoney}}</p>
              <p style='color:#4A90E2;font-size:.12rem;float:right;margin-right:.14rem;'>每充值20元送1个金椒</p>
           </div>
            <p style='text-align:center;margin-top:.1rem;'>
              <button @click='pay()' style='border:0;outline:none;background-color:#F77582;width:80%;height:.4rem;border-radius:.4rem;color:#fff;'>立即支付</button>
           </p>
        </div>
      </popup>
    </div>
  </div>
</template>
<script>
    import {mapState} from 'vuex'
    import {Post_formData2} from '../../config/services'
    import {TransferDom,Popup} from 'vux'
export default{
     data(){
      return{
       topList:{
           title_1:'支付宝支付',
           title_2:"首页",
           link:'/'
       },
       price:0,
       formHtml:'',
       isAddTo:0,
       show:false,
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
  components:{
       Popup
  },
   directives: {
    TransferDom
  },
  computed: {
      ...mapState(['userInfo'])
  },
  methods: {
      handelTap(index,price){
           this.isAddTo=index
           this.price=price
           let options={
                username:this.userInfo.userName,
                apymentType:3,
                WIDtotal_amount:price
           }
           Post_formData2(this,options,'/api/payment-alipaywap',res=>{
               if(res.returnCode==200){
                  this.formHtml=res.data
                  this.show=true
               }
           })
      },
      pay () {
          document.forms[0].submit()
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
           position: relative;
           margin-top:.3rem;
           padding-top:.3rem;
           overflow: hidden;
           .gift{
               font-size:.12rem;
               color:#FB5E6F;
           }
           .icon{
                font-size: .1rem;
                position: absolute;
                right:-.2rem;
                top: -.17rem;
                width:.6rem;
                height:.15rem;
                -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
                -webkit-transform-origin: left bottom;
                transform-origin: left bottom;
                color: #fff;
                background-color: #FB5E6F;
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
