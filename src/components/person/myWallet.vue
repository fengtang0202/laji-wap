<template>
   <div class='wallet'>
     <div class='wallet_wrap'>
         <div class='width:100%;height:.44rem;'  >
             <div class='back' @click="$router.go(-1)">
               <img src="../../assets/images/backw@3x.png" alt="">
             </div>
             <div style='height:.44rem;line-height:.44rem;overflow:hidden;' @click='handleGo("/dealManage")'>
               <span style='margin-left:1rem;font-size:.18rem;'>我的钱包</span>
               <span style='margin-left:.5rem;width:.2rem;' >交易记录</span>
             </div>
         </div>
         <p style='text-align:center;margin-top:.1rem;'>
             <span style='font-size:.3rem;'>{{userInfo.userMoney}}</span>
             <span style='font-size:.12rem'>辣椒</span>
             <img src="../../assets/images/d-28@3x.png"  alt="">
         </p>
         <p class='pay'>
             <button @click="handleGo('/payMoney')">充值</button>
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
import {mapState, mapActions} from 'vuex'
import {Post_formData2} from '@/config/services'
import operationCookie from '../../config/cookie'    
     export default {
         data () {
             return{
               moneyList:[
                   {img:require('../../assets/images/d_18@3x.png'),price:0,type:'金椒',gift:'每充值20元送一张金椒'},
                   {img:require('../../assets/images/d-48@3x.png'),price:0,type:'小米椒',gift:'每日登陆小米椒+1，隔天清零，快去送给你喜欢的作者吧！'},
                   {img:require('../../assets/images/juan@3x.png'),price:0,type:'代金券',gift:'只用于作品订阅，阅读券优先于辣椒使用'}
              ],
              topList:{
                  title_1:'我的钱包',
                  title_2:'首页',
                  link:'/'
              },
              showComponent:true
             }  
         },
         computed : {
              ...mapState(['userInfo'])
        }, 
        beforeRouteLeave(to,from,next){
            next(()=>{
                localStorage.removeItem('SESSION')
            })
        },
        // beforeRouteEnter(to, from, next){
          
        // },
         methods: {
             ...mapActions(['getUserInfo']),
             handleGo(res) {
               this.$router.push(res)
             },
             getUserMoney(){
                      Post_formData2(this,'','/api/person-info',res=>{
                            if(res.returnCode==200){
                                this.getUserInfo(res.data) 
                            }
                      })
                 }
            },
        mounted () {
            let sessionId =localStorage.getItem('SESSION')
            if(sessionId){
                   operationCookie.set({
                        name: 'SESSION',
                        value: sessionId,
                        path: '/',
                        day: 1
                });
            }
            this.getUserMoney()        
            this.moneyList[0].price=this.userInfo.userGoldenTicket
            this.moneyList[1].price=this.userInfo.userRecommendTicket
            this.moneyList[2].price=this.userInfo.userReadTicket

        }
    }
</script>
<style lang='less' scoped>
  .wallet{
      .wallet_wrap{
         height:1.96rem;
         background:-webkit-gradient(linear, 0 0, 0 bottom, from(#F55968), to(#ED9C8C));  
         color:#fff;
         padding-top:.2rem;
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
             outline: none;
             border-radius: .19rem;
             }
         }
      } 
      .back{
          float:left;
          width:.44rem;
          height:.44rem;
          line-height:.44rem;
          text-align:center;
          overflow: hidden;
          img{
              width:.11rem;height:.2rem;
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
