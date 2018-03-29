<template>
  <div id="app">
      <!-- <transition :name="transitionName"> -->
      <router-view class="child-view"></router-view>
      <!-- </transition> -->
  </div>
</template>

<script>
import {Param_Get_Resful } from '@/config/services'

var wx = require('weixin-js-sdk'); 
export default {
  name: 'app',
    data() {
        return {
            transitionName: 'slide-left'
        }
    },
    mounted () {
        // let targetUrl=encodeURIComponent(location.href.split("#")[0]);
        // alert(location.href.split('#')[0]) 
        // Param_Get_Resful(this,'http://192.168.0.136:8081/weChartShareSign?URL='+targetUrl+'&JS_API=onMenuShareAppMessage',res=>{
        //   console.log(res.data)
        //    wx.config({
        // debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        // appId: 'wx0d80269db309ad18', // 必填，公众号的唯一标识
        // timestamp:res.data.timestamp, // 必填，生成签名的时间戳
        // nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
        // signature:res.data.signature,// 必填，签名
        // jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone'] // 必填，需要使用的JS接口列表
        //  });
    //  })
    },
    //监听路由的路径，可以通过不同的路径去选择不同的切换效果
    watch: {
        '$route' (to, from) {
            if(to.path == '/'){
                this.transitionName = 'slide-right';
            }else{
                this.transitionName = 'slide-left';
            }
        }
    }
}
</script>
<style lang="less" scoped>
  #app {
    width: 100%;
    height:100%;
    // 移动端字体设置
    font-family:Helvetica;
    font-size:.16rem;
    color:#333;
    background:#fff;
  .child-view {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
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

</style>
