<template>
  <div id="app"  v-cloak>
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
    //    this.$nextTick(()=>{
    //        document.querySelector('#app').scrollIntoView()
    //    })
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
