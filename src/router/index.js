import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/person/Login'
import Register from '@/components/person/Register'
import Password from '@/components/person/password'
import resetPassword from '@/components/person/resetPassword'
import noAuthor from '@/components/author/noAuthor'
import appAuthor from '@/components/author/appAuthor'
import contactUs from '@/components/contactUs/contactUs'
import feed from '@/components/feed/feed'
import cookie from '@/config/cookie'
import index from '@/components/index/index'
// import bookStacks from '@/components/bookStacks'
import categoryList from '@/components/bookCategory/categoryList'
import categoryDetail from '@/components/bookCategory/categoryDetail'
import bookFree from '@/components/bookReadManage/bookFree'
import editorRecommend from '@/components/editorRecommend/editorRecommend'
import bookDetails from '@/components/bookDetail/bookDetails'
import directory from '@/components/directory/directory'
import search from '@/components/search/search'
import feedPepper from '@/components/feed/feedPepper'
import person from '@/components/person/person'
import personInfo from '@/components/person/personInfo'
import wechatPay from '@/components/pay/wechatPay'
import bookRack from '@/components/bookReadManage/bookRack'
// 排行榜
import bookRank from '@/components/bookRank/bookRank'
import golden from '@/components/bookRank/golden'
import minPaperRank from '@/components/bookRank/minPaperRank'
import clickRank from '@/components/bookRank/clickRank'
import newBookRank from '@/components/bookRank/newBookRank'
import sellRank from '@/components/bookRank/sellRank'
import debateRank from '@/components/bookRank/debateRank'
import updateRank from '@/components/bookRank/updateRank'
import rewardRank from '@/components/bookRank/rewardRank'
//
import readHistory from '@/components/person/readHistory'
import bookRead from '@/components/bookRead/bookRead'
import bookComment from '@/components/bookComment/bookComment'
import bookCommentDetail from '@/components/bookComment/bookCommentDetail'
import buyChapter from '@/components/pay/buyChapter'
import payMoney from '@/components/pay/payMoney'
import alipay from '@/components/pay/alipay'
import gradeSystem from '@/components/person/gradeSystem'
import myWallet from '@/components/person/myWallet'
// 消息管理中心
import MessageManage from '@/components/Message/MessageManage'
import sysMessage from '@/components/Message/sysMessage'
import personalLetter from '@/components/Message/personalLetter'
import commentReply from '@/components/Message/commentReply'
import dealManage from '@/components/dealRecord/dealManage'
// 子组件
import payRecord from '@/components/dealRecord/payRecord'
import subscriptionRecord from '@/components/dealRecord/subscriptionRecord'
import minPepper from '@/components/dealRecord/minPepper'
import pepperRecord from '@/components/dealRecord/pepperRecord'
import rewordRecord from '@/components/dealRecord/rewordRecord'

import test from '@/components/test'
Vue.use(Router)
let routers=[
    {path: '/Login', name: 'Login', component: Login},
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
    {path: '/',component: Home,
        children:[//子路由
            {path:'/',component:index},
            {path: 'categoryList', component:categoryList},
            {path:'bookFree',component:bookFree}
        ]
    },
    {path: '/directory', name: 'directory', component: directory},
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
    {path:'/bookRack',component:bookRack, meta: {
        requireAuth: true
      }
    },
    {path:'/bookRank',component:bookRank,
    children:[
      {path:'/',component:golden},
      { path:'minPaperRank',component:minPaperRank},
      { path:'clickRank',component:clickRank},
      { path:'newBookRank',component:newBookRank},
      { path:'sellRank',component:sellRank},
      { path:'debateRank',component:debateRank},           
      { path:'updateRank',component:updateRank},
      { path:'rewardRank',component:rewardRank}           
    ]
  },
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
    },
    {
      path:'/alipay',component:alipay,
       meta:{
        requireAuth:true
       }
    },
     {
      path:'/gradeSystem',component:gradeSystem,
       meta:{
        requireAuth:true
      }
    },
    {
         path:'/myWallet',component:myWallet,meta:{
            requireAuth:true           
         }
    },
    {
        path:'/MessageManage',component:MessageManage,
          children:[//子路由
            { path: '/', component:  sysMessage},
            { path: 'personalLetter', component:personalLetter},
            {path:'commentReply',component:commentReply}
        ],
        meta:{
            requireAuth:true           
         }
      
    },
    {
      path:'/dealManage',component:dealManage,
      children:[
          {path:'/',component:payRecord},
          {path:'subscriptionRecord',component:subscriptionRecord},
          {path:'pepperRecord',component:pepperRecord},
          {path:'rewordRecord',component:rewordRecord},   
          {path:'minPepper',component:minPepper}                                                                                        
      ],
       meta:{
            requireAuth:true           
         }
    },
    {path:'/test',component:test}
]
const router = new Router({
    routes: routers
})
export default router
