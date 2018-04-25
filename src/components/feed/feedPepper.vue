<template>  
    <div id="feedPepper">
        <div class="page_mcbg" v-if="backpepperShow" @click="handleClosepepper()"></div>
        <div class="container"  :class='{show:dilogpepperShow}'>
                <div class="paypepper">打赏辣椒</div>
                <div class='con'>
                    <div class="lajiao">
                        <p class='op' >您的辣椒余额:{{money}}</p>
                        <div class="btn" @click='handleGo()'>充值</div>
                    </div>
                    <div class="check">
                        <div class="laNum" :key='index' :class="{active:iscode===index}" v-for="(item,index) in pepperList" @click="handleCheck(item.key,index)">
                            <img :src="item.url" >
                            <p v-html="item.name"></p>
                        </div>
                    </div>
                    <div class="obtn" @click='handleReward()'>打赏</div>
                </div> 
        </div>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
import { Post_formData2} from '@/config/services'
    export default {
        name: 'feedPepper',
        data () {
            return {
                money:'',
                iscode:0,
                keyNum:188,
                pepperList:[
                    {url: require('../../assets/images/188@2x.png'),name:'188辣椒',key:'188'},
                    {url:require('../../assets/images/288@2x.png'),name:'288辣椒',key:'288'},
                    {url:require('../../assets/images/588@2x.png'),name:'588辣椒',key:'588'},
                    {url:require('../../assets/images/888@2x.png'),name:'888辣椒',key:'888'},
                    {url:require('../../assets/images/1888@2x.png'),name:'1888辣椒',key:'1888'},
                    {url:require('../../assets/images/8888@2x.png'),name:'8888辣椒',key:'8888'},
                ],
                backpepperShow:false,
                dilogpepperShow:false,
                money:0
            }
        },
        props:['param'],
        computed : {
           ...mapState(['userInfo','isLogin'])
        },
        components: {

        },
        methods: {
           handleCheck(res,index){
                this.iscode = index;
                this.keyNum = res;
           },
           handleGo(){
              this.$router.push('/payMoney')
           },
           handleReward() {
               let options={
                   spicyiTicketCount:this.keyNum,
                   bookid:this.$route.query.bookId,                                   
                   bookName:this.param.bookName,
                   authorId:this.param.authorId
               }
               Post_formData2(this,options,'/api/user-SpicyiRewardTicket',res=>{
                   if(res.returnCode===200){
                       this.$vux.toast.show({text:res.msg})
                       this.userInfo.userMoney-=this.keyNum
                       this.money-=this.keyNum
                       this.backpepperShow = false
                       this.dilogpepperShow = false
                     }else if(res.returnCode===500){
                       this.backpepperShow = false
                       this.dilogpepperShow = false
                       this.$vux.toast.show({text:res.msg,type:'cancel'})
                     }else if(res.returnCode===400&&this.isLogin){
                    //    this.$vux.toast.show({text:res.msg,type:'warn'})
                        //这里还没有测试 
                            this.$router.push({path:'/Login',query:{redirect: this.$route.path+'?bookId='+this.$route.query.bookId}})
                     }
                     else if(res.returnCode===1000){
                       this.$vux.toast.show({text:res.msg,type:'warn'})
                    }
               })
           },
           handleClosepepper(){
               this.backpepperShow = !this.backpepperShow;
               this.dilogpepperShow = !this.dilogpepperShow;
           }
        },
         mounted(){
              if(this.isLogin){
                  this.money=this.userInfo.userMoney
              }
              console.log(this.$route.query.bookId)
           }
    }
</script>
<style lang="less">
     @import '../../css/feedPepper';
</style>