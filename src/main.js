import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css';   
import axios from 'axios'
import cookie from './config/cookie'
import FastClick from 'fastclick'
import VueTouch from 'vue-touch';
import  VueLazyload from 'vue-lazyload'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import scrollView from '../src/components/common/scrollView '
import No from '../src/components/common/no'
import downApp from '../src/components/common/downApp'
import { ToastPlugin,WechatPlugin,Cell,Group,Swipeout, SwipeoutItem, SwipeoutButton } from 'vux'
import headerComponent from '@/components/common/header'
import Load from '@/components/common/Load'
import noContent from '@/components/common/noContent'
import InfiniteLoading from 'vue-infinite-loading'
import bookItem from '../src/components/common/bookItem'
import commendItem from '../src/components/common/commendItem'
import bookRankList from '../src/components/bookRank/bookRankList'
import Loading from 'vue'
import bookImg from '../src/components/common/bookImg'
import loginDateDialog from '../src/components/common/loginDateDialog'
import bindPhone from '../src/components/common/bindPhone'
// 注册全局组件
Vue.config.productionTip = false
Vue.use(iView)
Vue.use(WechatPlugin)
Vue.use(VueLazyload)
Vue.component('bindPhone', bindPhone)
Vue.component('loginDateDialog', loginDateDialog)
Vue.component('headerComponent',headerComponent)
Vue.component('appLoad',Load)
Vue.component('Swipeout',Swipeout)
Vue.component('noContent',noContent)
Vue.component('SwipeoutItem',SwipeoutItem)
Vue.component('SwipeoutButton',SwipeoutButton)
Vue.component('InfiniteLoading', InfiniteLoading)
Vue.component('No',No)
Vue.component('bookItem',bookItem)
Vue.component('commendItem',commendItem)
Vue.component('Loading',Loading)
Vue.component('downApp', downApp)
Vue.component('bookRankList',bookRankList)
Vue.component('bookImg',bookImg)
const articleItem = r => require.ensure([], () => r(require('@/components/articleActive/articleItem')), 'articleItem')
Vue.component('articleItem', articleItem)
// Vue.component('scrollView', scrollView)
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(ToastPlugin,Cell,Group)
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.withCredentials = true
axios.interceptors.response.use(
    response => {
        if (response.data.returnCode === 400&&store.state.isLogin){
            store.commit('changeLogin', false)
            store.commit('getUserInfo',null)
            localStorage.removeItem('SESSION')
            store.commit('setshowLoginDate',true)
            // router.push({ path: '/Login', query: { redirect: router.currentRoute.fullPath}})
            return response;
        }else if(response.data.returnCode==500){
            return response;
        }else{  
            return response
        } 
    }
);
Vue.prototype.$http = axios
FastClick.attach(document.body)
FastClick.prototype.focus = function (targetElement) {
        targetElement.focus();
    };
// 注册全局过滤器
import * as filters from '@/config/filters'  
Object.keys(filters).forEach(key => {  
    Vue.filter(key, filters[key])  
})  
String.prototype.Trim = function () {
    return this.replace(/\s+/g, "");
}
import directives from "./config/directives"
Vue.use(directives);
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease-in-out', speed: 600, showSpinner: false })
axios.get(`/api/weChartShareSign?URL=${encodeURIComponent(window.location.href.split('#')[0])}`).then(data=>{
    let config=data.data.data
    Vue.wechat.config({
        debug: false, 
        appId: config.appId,
        timestamp:config.timestamp,
        nonceStr: config.nonceStr,
        signature: config.signature,
        jsApiList: ['onMenuShareTimeline', 'chooseWXPay', 'translateVoice', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone', 'chooseImage'
        ]
    })
})
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
    var agent = navigator.userAgent.toLowerCase();
    let cook = cookie.get().isFirst
    if (agent.match(/MicroMessenger/i) == "micromessenger"&&!cook) {
          if (!store.state.isLogin){
              store.commit('setshowLoginDate', true)
          }
      }
           setTimeout(() => {
                var _hmt = _hmt || [];
                (function () {
                    //每次执行前，先移除上次插入的代码
                    document.getElementById('baidu_tj') && document.getElementById('baidu_tj').remove();
                    var hm = document.createElement("script");
                    hm.src = "https://hm.baidu.com/hm.js?ae2f46c8c11aad77feae3035de5c127e";
                    hm.id = "baidu_tj";
                    var s = document.getElementsByTagName("script")[0];
                    s.parentNode.insertBefore(hm, s);
                 })();
             }, 0); 
        //1 Pc=>Wap  if pi 为true 我就不存sessionStorage 如果没有我就存 
        //2 由于 我的锚链接 会误截取 # 后的然后存在本地 所以得限制截取的文字       
        let str=''  
        if (sessionStorage.getItem('pi')) {
            str = sessionStorage.getItem('pi')
        } else {
            let href = window.location.href
            let i = href.indexOf('#')
            let chanled =href.substring(i + 1, href.length)
            if (chanled.length>3){
                i === -1 ? str : str = chanled
                i === -1 || sessionStorage.setItem("pi", str)
            }
        }
        axios.get(`/api/wapPVUVStatistics?ax001=9527&pi=${str}`).then(res=>{
        // console.log(res.data)
       }) 
    if (to.meta.title) {
        document.title = to.meta.title
    }
    NProgress.start()
    if (to.meta.requireAuth) {// 判断该路由是否需要登录权
        if (store.state.isLogin) {
            next()
        }else{
            next('/Login')
        }
    }else{
       next()
  } 
})
router.afterEach((to, from, next) => {
    // window.scrollTo(0, 0);
    NProgress.done()
});
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
})
