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
// import bookStacks from '@/components/bookStacks'
import categoryList from '@/components/bookCategory/categoryList'
import categoryDetail from '@/components/bookCategory/categoryDetail'
import free from '@/components/free'
import editorRecommend from '@/components/editorRecommend/editorRecommend'
import bookDetails from '@/components/bookDetail/bookDetails'
import directory from '@/components/directory/directory'
import download from '@/components/download/download'
import search from '@/components/search/search'
import feedPepper from '@/components/feed/feedPepper'
import person from '@/components/person/person'
import personInfo from '@/components/person/personInfo'
import wechatPay from '@/components/pay/wechatPay'
import bookRack from '@/components/bookReadManage/bookRack'
import bookEdit from '@/components/bookReadManage/bookEdit'
import bookRank from '@/components/bookRank/bookRank'
import readHistory from '@/components/person/readHistory'
import bookRead from '@/components/bookRead/bookRead'
import bookComment from '@/components/bookComment/bookComment'
import bookCommentDetail from '@/components/bookComment/bookCommentDetail'
import buyChapter from '@/components/pay/buyChapter'
import payMoney from '@/components/pay/payMoney'
Vue.use(Router)
let routers=[
    {path: '/', name: 'Login', component: Login},
    {path: '/register', name: 'Home', component: Register},
    {path: '/password', name: 'Password', component: Password},
    {path: '/resetPassword', name: 'resetPassword', component: resetPassword},
    {path: '/noAuthor', name: 'noAuthor', component: noAuthor},
    {path: '/appAuthor', name: 'appAuthor', component: appAuthor},
    {path: '/contactUs', name: 'contactUs', component: contactUs},
    {path: '/feed', name: 'feed', component:feed, 
    meta: {
        requireAuth: true,
      }
    },
    {path: '/editorRecommend',component: editorRecommend},
    {path: '/bookDetails', name: 'bookDetails', component: bookDetails},
    {path:'/categoryDetail',component:categoryDetail},
    {path: '/home',component: Home,
        children:[//子路由
            {path:'/',component:index},
            {path: 'categoryList', component:categoryList},
            {path:'free',component:free}
        ]
    },
    {path: '/directory', name: 'directory', component: directory},
    {path: '/download', name: 'download', component: download},
    {path: '/search', name: 'search', component: search},
    {path: '/feedPepper', name: 'feedPepper', component: feedPepper,
    meta: {
        requireAuth: true,
      }
    },
    {path:'/person',name:'person',component:person, 
    meta: {
        requireAuth: true,
      }
    },
    {path:'/personInfo',name:'personInfo',component:personInfo,
     meta: {
        requireAuth: true,
      }
    },
    {path:'/wechatPay',component:wechatPay,
    meta: {
        requireAuth: true,
      }
    },
    // {path:'/bookStacks',component:bookStacks},
    {path:'/bookRack',component:bookRack, meta: {
        requireAuth: true
      }
    },
    {path:'/bookEdit',component:bookEdit, meta: {
        requireAuth: true
      }
    },
    {path:'/bookRank',component:bookRank},
    {path:'/readHistory',component:readHistory, meta: {
        requireAuth: true
      }
    },  
    {path:'/bookRead',component:bookRead} ,
    {path:'/bookComment',component:bookComment},
    {path:'/bookCommentDetail',component:bookCommentDetail},
    {path:'/buyChapter',component:buyChapter,meta:{
        requireAuth: true
    }
    },
     {
      path:'/payMoney',component:payMoney,meta:{
        requireAuth:true
     }
    }
]
const router = new Router({
    routes: routers
})
export default router
