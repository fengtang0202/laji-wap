import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Password from '@/components/password'
import resetPassword from '@/components/resetPassword'
import noAuthor from '@/components/author/noAuthor'
import appAuthor from '@/components/author/appAuthor'
import contactUs from '@/components/contactUs/contactUs'
import feed from '@/components/feed/feed'
import cookie from '@/config/cookie'
import index from '@/components/index'
import bookStacks from '@/components/bookStacks'
import free from '@/components/free'
import more from '@/components/more/more'
import bookDetails from '@/components/bookDetail/bookDetails'
import directory from '@/components/directory/directory'
import download from '@/components/download/download'
import search from '@/components/search/search'
import feedPepper from '@/components/feed/feedPepper'
import person from '@/components/person/person'
import personInfo from '@/components/person/personInfo'
import wechatPay from '@/components/pay/wechatPay'
Vue.use(Router)
let routers=[
    {path: '/', name: 'Login', component: Login},
    {path: '/register', name: 'Home', component: Register},
    {path: '/password', name: 'Password', component: Password},
    {path: '/resetPassword', name: 'resetPassword', component: resetPassword},
    {path: '/noAuthor', name: 'noAuthor', component: noAuthor},
    {path: '/appAuthor', name: 'appAuthor', component: appAuthor},
    {path: '/contactUs', name: 'contactUs', component: contactUs},
    {path: '/feed', name: 'feed', component:feed},
    {path: '/more', name: 'more', component: more},
    {path: '/bookDetails', name: 'bookDetails', component: bookDetails},
    {path: '/home', name: 'Home', component: Home,
        children:[//子路由
            {path:'index',component:index},
            {path:'bookStacks',component:bookStacks},
            {path:'free',component:free}
        ]
    },
    {path: '/directory', name: 'directory', component: directory},
    {path: '/download', name: 'download', component: download},
    {path: '/search', name: 'search', component: search},
    {path: '/feedPepper', name: 'feedPepper', component: feedPepper},
    {path:'/person',name:'person',component:person},
    {path:'/personInfo',name:'personInfo',component:personInfo},
    {path:'/wechatPay',component:wechatPay}
]
const router = new Router({
    routes: routers
})
// router.beforeEach((to, from, next) => {
//     if (cookie.get().token) {
//         next()
//     } else {
//         if (from.path!='/') {
//             next({path:'/'})
//         }
//     }
// })
export default router
