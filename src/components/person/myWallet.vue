<template>
   <div class='wallet'>
     <div class='header'>
         <p>
             <span style='margin-left:1.48rem;font-size:.18rem;'>我的钱包</span>
             <span style='margin-left:.76rem;'>交易记录</span>
         </p>
         <p>
             <span style='margin-left:1.7rem;font-size:.3rem;'>{{userInfo.userMoney}}</span>
             <span style='margin-left:.16rem;font-size:.12rem'>辣椒</span>
             <img src="../../assets/images/d-28@3x.png"  alt="">
         </p>
         <p class='pay'>
             <button >充值</button>
         </p>
     </div>
     <div class='peper' v-for='(item,index) in moneyList' :key='index'>
         <p>
         <img :src="item.img" alt="">
         <span>{{item.type}}:</span>
         <span >{{item.price}}</span>
         </p>
         <p class='gift'>{{item.gift}}</p>
     </div>
   </div>
</template>
<script>
import {mapState} from 'vuex'
     export default {
         data () {
             return{
               moneyList:[
                   {img:require('../../assets/images/d_18@3x.png'),type:'金椒',price:9999,gift:'每充值20元送一张金椒'},
                   {img:require('../../assets/images/d-48@3x.png'),type:'小米椒',price:9999,gift:'每日登陆小米椒+1，隔天清零，快去送给你喜欢的作者吧！'},
                   {img:require('../../assets/images/juan@3x.png'),type:'代金券',price:9999,gift:'只用于作品订阅，阅读券优先于辣椒使用'}
              ],
             }  
         },
         computed : {
              ...mapState(['userInfo'])
        }, 
        mounted () {
        //   this.moneyList[0].price=
        }
      }
</script>
<style lang='less' scoped>
  .wallet{
      .header{
         height:1.96rem;
         background:-webkit-gradient(linear, 0 0, 0 bottom, from(#F55968), to(#ED9C8C));  
         color:#fff;
         padding-top:.28rem;
         img{
             width:.12rem;
             height:.18rem;
             vertical-align: middle;
         }
         .pay{
             text-align: center;
             margin-top:.3rem;
             button{
             width:1.2rem;
             height:.3rem;
             font-size:.16rem;
             background-color: #fff;
             border:1px solid #F73D51;
             color:#F73D51;
             border-radius: .19rem;
             }
         }
      } 
      .peper{
         height:.57rem;
         border-bottom: 1px solid #EFEFEF;
         font-size: .16rem;
         margin-top:.2rem;
         img{
             width:.18rem;
             height:.26rem;
             margin:0 .12rem;
             vertical-align: middle;
         }
         .gift{
             color:#999;
             font-size:.12rem;
             margin-left:.49rem;
         }

      }
  }
</style>
