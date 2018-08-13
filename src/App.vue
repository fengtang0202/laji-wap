<template>
  <div id="app"  v-cloak>
      <!-- <transition :name="transitionName"> -->
           <keep-alive>
             <router-view v-if="$route.meta.keepAlive"></router-view>
           </keep-alive>
           <router-view v-if="!$route.meta.keepAlive"></router-view>
      <!-- </transition> -->
        <!-- <router-view></router-view> -->
        <div v-transfer-dom>
        <popup v-model="showdown"  style='background:transparent;' :show-mask='isshow' position="bottom" max-height="50%">
            <div  style='background:rgba(0,0,0,.4);height:.6rem;color:#fff;box-sizing: border-box;'>
                <div style='margin-left:.12rem;height:100%;float:left'>
                  <img src="./assets/images/downJ.png" style='width:.5rem;height:.5rem;margin-top:.05rem;' alt="">
                </div>
                <div style='float:left;margin-top:.05rem;margin-left:.08rem'>
                    <p style='font-size:.15rem;line-height:.25rem;'>辣鸡小说客户端</p>
                    <p style='font-size:.12rem;line-height:.25rem;'>最萌二次元宅文生产基地</p>
                </div>
                <div style='float:right;margin-right:.05rem;height:.6rem;'>
                    <button @click="handleIsPhone()" style='width:.92rem;height:.34rem;color:#FB5E6F;background:#fff;border:0;outline:0;border-radius:.04rem;font-size:.16rem;margin-top:.13rem;margin-right:.15rem;'>客户端下载</button> 
                    <img @click="closedown()" src="./assets/images/closeDown.png" style='width:.3rem;height:.3rem; vertical-align:middle;' alt=""> 
                </div>
            </div>
      </popup>
          <loginDateDialog></loginDateDialog> 
          <bindPhone></bindPhone>
    </div>
  </div>
</template>
<script>
import {Param_Get_Resful } from '@/config/services'
import { Popup,TransferDom } from 'vux'
import cookie from './config/cookie'
import {handleIsPhone} from './config/common' 
// var wx = require('weixin-js-sdk'); 
export default {
  name: 'app',
    data() {
        return {
            transitionName: 'slide-left',
            showdown:true,
            isshow:false,
            handleIsPhone:handleIsPhone
        }
    },
    components: {
        Popup
    },
     directives: {
       TransferDom
     },
    mounted () {
    },
    created() {
      let a=cookie.get().popped
       if (a==1){ //cookie 中没有 popped 则赋给他一个值（此时弹框显示）
           this.showdown=false
        }else{
           this.showdown = true; //若cookie 中已经有 popped 值，则弹框再不会显示
       }
    },
 watch: {
   '$route'(to,from) {
        let path=to.path  
        if(path.indexOf('/bilibili')!=-1){
            this.showdown=false
        }
        if (_czc) {
        var location = window.location
        var content_url = location.pathname + location.hash
        var referer_url = '/'
        _czc.push(['_trackPageview', content_url, referer_url])
        }
      },
   },
    methods: {
        closedown(){
           this.showdown = false;
            cookie.set({
                        name: 'popped',
                        value:1,
                        path: '/',
                        day: 1
           });
        },
    }
}
</script>
<style lang="less" scoped>
  #app {
    width: 100%;
    height:100%;
    position: relative;
    // 移动端字体设置
    font-family:Helvetica;
    // padding-bottom:.4rem;
    // padding-top:.57rem;
    font-size:.16rem;
    color:#333;
    background:#fff;
  .child-view {
    //   position: absolute;
    //   left: 0;
    //   top: 0;
      width: 100%;
      transition: all .5s cubic-bezier(.55,0,.1,1);
     }
      .slide-left-enter, .slide-right-leave-active {
          opacity: 0;
          -webkit-transform: translate(30px, 0);
          transform: translate(30px, 0);
      }
      .slide-left-leave-active, .slide-right-enter {
          opacity: 0;
          -webkit-transform: translate(-30px, 0);
          transform: translate(-30px, 0);
          
      }
  }
[v-cloak]{ display:none} 
</style>
