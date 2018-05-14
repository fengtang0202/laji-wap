<template>
    <div id="home" ref='home'>
         <div class="top">
            <img src="../assets/images/ico@2x.png" @click='handleTo({path:"/"})' class="logo_two">
            <downApp></downApp>
            <span class='userId' @click='handleTo({path:"/bookRank"})' >排行榜</span>
            <div class='logo_three' >
                <router-link to='/person'>
                  <img   v-if='isLogin'     :src="userInfo.userHeadPortraitURL" >
                </router-link>
                <router-link to='/Login'>                
                   <img   v-if='!isLogin' src='../assets/images/user@3x.png' >
                </router-link>                 
            </div>
         </div>
         <div class="bottom" @click='handleTo({path:"/search"})'>
             <input type="text" placeholder="搜索作品或作者" class='search' @focus='handleTo({path:"/search"})'/>
             <img src="../assets/images/search@2x.png"  class="logo_four">
         </div>
         <div class="tap">
             <div class="btn" v-for="(item,index) in cate"  :key='index' :class="{isAdd:homeIndex===index}" @click="handleGo(item.res,index)">
                <span v-html="item.name"></span>
             </div>
         </div>
          <keep-alive>
             <router-view style='width:100%;height:100%;'></router-view>
          </keep-alive>  
    </div>
</template>
<script>
 import {mapState,mapActions} from 'vuex'
 import {Post_formData2} from '../config/services'
    export default {
        name: 'home',
        data () {
            return {
               isAddTo:0,
               homeIndex:0,
               cate:[
                   {name:'首页',res:{path:"/"}},
                   {name:'分类',res:{path:"/categoryList"}},
                   {name:'限免',res:{path:"/bookFree"}}
               ]
            }
        },
        computed: {
            ...mapState(['isLogin','userInfo'])
        },
        watch:{
           '$route'(){
               this.getIndex()
           }
        },
        beforeRouteEnter(to,from,next){
            next(vm=>{
                // Post_formData2(vm,'','/api/person-checkLoginState',res=>{
                //     if(res.returnCode==400){
                //         vm.loginAction(false)
                //         vm.getUserInfo(null)
                //     }
                // })
                vm.$refs.home.scrollIntoView()
            })
        },
        methods:{
            ...mapActions(['loginAction','getUserInfo']),
            handleGo(res,index){
                this.$router.push(res);
            },
            getIndex(){
              let i =this.$route.path
               switch(i){
                   case '/':
                     this.homeIndex=0;
                     break;
                   case '/categoryList':
                     this.homeIndex=1
                     break;
                   case '/bookFree' :
                     this.homeIndex=2
            } 
          },
            handleTo(res){
                 this.$router.push(res);
            }
        },
        mounted () {
            this.getIndex()
        }
    }
</script>

<style lang="less" scoped>
    #home{
        width:100%;
        height:1rem;
        box-sizing:border-box;
        font-family:'PingFangSC-Regular';
        .top{
            box-sizing:border-box;
            padding:0 .14rem;
            height:.5rem;
            .logo_one{
                width:.24rem;
                height:.24rem;
                margin-top:.1rem;
                float:left;
            }
            .logo_two{
                width:.92rem;
                height:.24rem;
                margin-top:.1rem;
                float:left;
                vertical-align: middle;
            }
            .btn_top{
                width:.66rem;
                height:.24rem;
                border-radius:5px;
                background:#FB5E6F;
                font-size:.14rem;
                color:#fff;
                text-align:center;
                line-height:.24rem;
                float:left;
                margin:.12rem .14rem 0;
            }
            .userId{
                font-size:.16rem;
                color:#FB5E6F;
                float:left;
                // padding-top:.1rem;
                line-height: .5rem;
                margin-left:.4rem;
            }
            .logo_three{
                float:right;
                height:.5rem;
                width:.5rem;
                text-align: right;
                line-height: .5rem;
                margin-left:.0.08rem;
                cursor:pointer;
                img{
                    width:.34rem;
                    height:.33rem;
                    vertical-align: middle;
                    border-radius: 50%;
                }
            }
        }
        .bottom{
            box-sizing:border-box;
            padding:0 .14rem;
            height:.5rem;
            position:relative;
            .search{
                float:left;
                width:3.48rem;
                height:.36rem;
                border:1px solid #979797;
                border-radius:4px;
                padding-left:.35rem;
                font-size:.16rem;
                color:#999;
                outline:none;
            }
            .logo_four{
                position:absolute;
                top:.09rem;
                left:.2rem;
                width:.2rem;
                height:.2rem;
            }
            button{
                width:.74rem;
                height:.36rem;
                border:none;
                background:#F77583;
                color:#fff;
                font-size:.18rem;
                text-align:center;
                line-height:.36rem;
                border-radius:4px;
                float:right;
            }
        }
        .tap{
            box-sizing:border-box;
            padding:.14rem .14rem;
            display: flex;
            justify-content:space-between;
            .btn{
               font-size:.18rem;
               color:#333;
               width:.54rem;
               height:.26rem;
               line-height: .26rem;
               text-align: center;
               border-radius:2px;               
            }
            .isAdd{
                // text-align:center;
                // line-height:.26rem;
                background:#FB5E6F;
                color:#fff;
            }
        }
    }
</style>
