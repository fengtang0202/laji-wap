import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css';
import axios from 'axios'
import FastClick from 'fastclick'
import VueTouch from 'vue-touch'
import  { ToastPlugin ,Cell,Group } from 'vux'
Vue.config.productionTip = false
Vue.use(iView)
import headerComponent from '@/components/common/header'
Vue.component('headerComponent',headerComponent)
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(ToastPlugin,Cell,Group)
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.withCredentials = true
Vue.prototype.$http = axios
FastClick.attach(document.body)
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (store.state.isLogin) {  // 通过vuex state获取当前的token是否存在或者
      next();
    }
    else {
      next({
        path: '/',
      })
    }
  }
  else {
    next();
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
