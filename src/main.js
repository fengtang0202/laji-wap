import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css';
import '../static/js/swipe/swiper.min.css'
import axios from 'axios'
import FastClick from 'fastclick'
import VueTouch from 'vue-touch'
import { ToastPlugin,WechatPlugin,Cell,Group,Swipeout, SwipeoutItem, SwipeoutButton } from 'vux'
Vue.config.productionTip = false
Vue.use(iView)
Vue.use(WechatPlugin)
import headerComponent from '@/components/common/header'
import Load from '@/components/common/Load'
import noContent from '@/components/common/noContent'
import InfiniteLoading from 'vue-infinite-loading';
// 注册全局组件
Vue.component('headerComponent',headerComponent)
Vue.component('appLoad',Load)
Vue.component('Swipeout',Swipeout)
Vue.component('noContent',noContent)
Vue.component('SwipeoutItem',SwipeoutItem)
Vue.component('SwipeoutButton',SwipeoutButton)
Vue.component('InfiniteLoading', InfiniteLoading)
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(ToastPlugin,Cell,Group)
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.withCredentials = true
Vue.prototype.$http = axios
FastClick.attach(document.body)
// 注册全局过滤器
import * as filters from '@/config/filters'  
Object.keys(filters).forEach(key => {  
    Vue.filter(key, filters[key])  
})  
axios.get('/api/weChartShareSign?URL=https://www.lajixs.com').then(data=>{
    let config=data.data.data
    console.log(config  )
    Vue.wechat.config({
        debug: false, 
        appId: config.appId,
        timestamp:config.timestamp,
        nonceStr: config.nonceStr,
        signature: config.signature,
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone', 'chooseImage']
    })
})
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {// 判断该路由是否需要登录权限
     axios.post('/api/person-checkLoginState').then(res=>{
       if(res.data.returnCode==200){
         if (store.state.isLogin) {  
             next();
         }
       }else{
           if(store.state.isLogin){
               Vue.$vux.toast.show({text:'登录过期',type:'warn'})
           }else{
               Vue.$vux.toast.show({text:'请先登录',type:'cancel'})
           }
          store.state.userInfo=null
          store.state.isLogin=false
          next({path: '/Login'})
       }
    })
  }else{
    next()
  } 
})
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
})
