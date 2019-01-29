import Vue from 'vue'
import Router from 'vue-router'
const Home = r => require.ensure([], () => r(require('@/components/Home')), 'Home')
const Login=r => require.ensure([], () => r(require('@/components/person/Login')), 'Login')
const Register=r => require.ensure([], () => r(require('@/components/person/Register')), 'Register')
const Password=r => require.ensure([], () => r(require('@/components/person/password')), 'password')
const resetPassword=r => require.ensure([], () => r(require('@/components/person/resetPassword')), 'resetPassword')
const contactUs=r => require.ensure([], () => r(require('@/components/contactUs/contactUs')), 'contactUs')
const feed =r =>require.ensure([],()=>r(require('@/components/feed/feed')))
const index=r => require.ensure([], () => r(require('@/components/index/index')), 'index')
const categoryList=r => require.ensure([], () => r(require('@/components/bookCategory/categoryList')), 'categoryList')
const categoryDetail=r => require.ensure([], () => r(require('@/components/bookCategory/categoryDetail')), 'categoryDetail')
const bookFree=r => require.ensure([], () => r(require('@/components/bookReadManage/bookFree')), 'bookFree')
const editorRecommend=r => require.ensure([], () => r(require('@/components/editorRecommend/editorRecommend')), 'editorRecommend')
const bookDetails=r => require.ensure([], () => r(require('@/components/bookDetail/bookDetails')), 'bookDetails')
const directory= r => require.ensure([], () => r(require('@/components/directory/directory')), 'directory')
const search= r => require.ensure([], () => r(require('@/components/search/search')), 'search')
const feedPepper= r => require.ensure([], () => r(require('@/components/feed/feedPepper')), 'feedPepper')
const person= r => require.ensure([], () => r(require('@/components/person/person')), 'person')
const personInfo= r => require.ensure([], () => r(require('@/components/person/personInfo')), 'personInfo')
const wechatPay= r => require.ensure([], () => r(require('@/components/pay/wechatPay')), 'wechatPay')
const bookRack= r => require.ensure([], () => r(require('@/components/bookReadManage/bookRack')), 'bookRack')
// 排行榜
const bookRank= r => require.ensure([], () => r(require('@/components/bookRank/bookRank')), 'bookRank')
const golden= r => require.ensure([], () => r(require('@/components/bookRank/golden')), 'golden')
const minPaperRank= r => require.ensure([], () => r(require('@/components/bookRank/minPaperRank')), 'minPaperRank')
const clickRank= r => require.ensure([], () => r(require('@/components/bookRank/clickRank')), 'clickRank')
const newBookRank= r => require.ensure([], () => r(require('@/components/bookRank/newBookRank')), 'newBookRank')
const sellRank= r => require.ensure([], () => r(require('@/components/bookRank/sellRank')), 'sellRank')
const debateRank= r => require.ensure([], () => r(require('@/components/bookRank/debateRank')), 'debateRank')
const updateRank= r => require.ensure([], () => r(require('@/components/bookRank/updateRank')), 'updateRank')
const rewardRank= r => require.ensure([], () => r(require('@/components/bookRank/rewardRank')), 'rewardRank')
//
const readHistory= r => require.ensure([], () => r(require('@/components/person/readHistory')), 'readHistory')
const bookRead= r => require.ensure([], () => r(require('@/components/bookRead/bookRead')), 'bookRead')
const bookComment =r=>require.ensure([],()=>r(require('@/components/bookComment/bookComment')),'bookComment')
const bookCommentDetail =r=>require.ensure([],()=>r(require('@/components/bookComment/bookCommentDetail')),'bookCommentDetail')
const buyChapter =r=>require.ensure([],()=>r(require('@/components/pay/buyChapter')),'buyChapter')
const payMoney =r=>require.ensure([],()=>r(require('@/components/pay/payMoney')),'payMoney')
const alipay =r=>require.ensure([],()=>r(require('@/components/pay/alipay')),'alipay')
const gradeSystem =r=>require.ensure([],()=>r(require('@/components/person/gradeSystem')),'gradeSystem')
const myWallet =r=>require.ensure([],()=>r(require('@/components/person/myWallet')),'myWallet')

// 消息管理中心
const MessageManage =r=>require.ensure([],()=>r(require('@/components/Message/MessageManage')),'MessageManage')
const sysMessage =r=>require.ensure([],()=>r(require('@/components/Message/sysMessage')),'sysMessage')
const personalLetter =r=>require.ensure([],()=>r(require('@/components/Message/personalLetter')),'personalLetter')
const commentReply =r=>require.ensure([],()=>r(require('@/components/Message/commentReply')),'commentReply')
const dealManage =r=>require.ensure([],()=>r(require('@/components/dealRecord/dealManage')),'dealManage')

// 子组件
const payRecord =r=>require.ensure([],()=>r(require('@/components/dealRecord/payRecord')),'payRecord')

const subscriptionRecord =r=>require.ensure([],()=>r(require('@/components/dealRecord/subscriptionRecord')),'subscriptionRecord')

const minPepper =r=>require.ensure([],()=>r(require('@/components/dealRecord/minPepper')),'minPepper')

const pepperRecord =r=>require.ensure([],()=>r(require('@/components/dealRecord/pepperRecord')),'pepperRecord')

const rewordRecord =r=>require.ensure([],()=>r(require('@/components/dealRecord/rewordRecord')),'rewordRecord')
const areaCode = r => require.ensure([], () => r(require('@/components/common/areaCode')), 'areaCode')
const userAutograph = r => require.ensure([], () => r(require('@/components/person/userAutograph')),'userAutograph')
const articleActive = r => require.ensure([], () => r(require('@/components/articleActive/articleMain')), 'articleActive')
const city = r => require.ensure([], () => r(require('@/components/articleActive/city')), 'city')
const dream = r => require.ensure([], () => r(require('@/components/articleActive/dream')), 'dream')
const rotten = r => require.ensure([], () => r(require('@/components/articleActive/rotten')), 'rotten')
const dimension = r => require.ensure([], () => r(require('@/components/articleActive/dimension')), 'dimension')
const bilibili = r => require.ensure([], () => r(require('@/components/seo/bilibili')), 'bilibili')
const bilibili1 = r => require.ensure([], () => r(require('@/components/seo/bilibili1')), 'bilibili1')
const bilibili2 = r => require.ensure([], () => r(require('@/components/seo/bilibili2')), 'bilibili2')
const bilibili3 = r => require.ensure([], () => r(require('@/components/seo/bilibili3')), 'bilibili3')
const bilibili4 = r => require.ensure([], () => r(require('@/components/seo/bilibili4')), 'bilibili4')
const bilibili5 = r => require.ensure([], () => r(require('@/components/seo/bilibili5')), 'bilibili5')
const bilibili6 = r => require.ensure([], () => r(require('@/components/seo/bilibili6')), 'bilibili6')
const bilibili7 = r => require.ensure([], () => r(require('@/components/seo/bilibili7')), 'bilibili7')
const bilibili8 = r => require.ensure([], () => r(require('@/components/seo/bilibili8')), 'bilibili8')
const bilibili9 = r => require.ensure([], () => r(require('@/components/seo/bilibili9')), 'bilibili9')
const bilibilibook = r => require.ensure([], () => r(require('@/components/seo/bilibilibook')), 'bilibilibook')
const bilibilibook1 = r => require.ensure([], () => r(require('@/components/seo/bilibilibook1')), 'bilibilibook1')
const bookforweb001 = r => require.ensure([], () => r(require('@/components/seo/bookforweb001')), 'bookforweb001')
//ios h5支付
const iosAlipay = r => require.ensure([], () => r(require('@/components/iosPay/iosAlipay')), 'iosAlipay')
const iosWeChatPay = r => require.ensure([], () => r(require('@/components/iosPay/iosWeChatPay')), 'iosWeChatPay')
const appShare = r => require.ensure([], () => r(require('@/components/appShare/appShare')), 'appShare')
Vue.use(Router)
let routers=[
    {
    path:'/appShare',
    component: appShare
    },
    {
      path: '/iosWeChatPay',
      component: iosWeChatPay
    },
    {
      path:'/iosAlipay',
      component: iosAlipay
    },
   {
       path: '/bookforweb001',
       component: bookforweb001
   },
    {path: '/bilibilibook1',component: bilibilibook1 },
    {path: '/bilibilibook', component: bilibilibook},
    {path:'/bilibili',component:bilibili},
    {path: '/bilibili1',component: bilibili1},
    {path: '/bilibili2',component: bilibili2},
    {path: '/bilibili3',component: bilibili3},
    {path: '/bilibili4',component: bilibili4},
    {
        path: '/bilibili5',
        component: bilibili5
    },
    {
        path: '/bilibili6',
        component: bilibili6
    },
    {
        path: '/bilibili7',
        component: bilibili7
    },
    {
        path: '/bilibili8',
        component: bilibili8
    },
    {
        path: '/bilibili9',
        component: bilibili9
    },
    { path: '/articleActive', component: articleActive},
    { path: '/city', component: city},
    { path: '/dream', component: dream},
    { path: '/rotten', component: rotten},
    { path: '/dimension', component: dimension},
    { path: '/areaCode', component: areaCode},
    { path: '/userAutograph', component: userAutograph},
    {path: '/Login', name: 'Login', component: Login,
    meta: {
      title: '用户登录'
    }
  },
    {path: '/register', name: 'Home', component: Register,
      meta: {
        title: '用户注册'
      }
  },
    {path: '/password', name: 'Password', component: Password,
      meta: {
        title: '忘记密码'
      }
  },
    {path: '/resetPassword', name: 'resetPassword', component: resetPassword,
      meta: {
        title: '找回密码'
      }
  },
    {path: '/contactUs', name: 'contactUs', component: contactUs},
    {path: '/feed', name: 'feed', component:feed, 
     meta: {
        requireAuth: true,
      }
    },  
    {path: '/editorRecommend',component: editorRecommend,
       meta:{
         title:'小编推荐',
         keepAlive:true
       }
  },
    {
      path: '/bookDetails', name: 'bookDetails', component: bookDetails,
      meta:{
         title:'书籍详情'
      }
  },
    {path:'/categoryDetail',component:categoryDetail,
      meta:{
        title:'书籍分类详情',
        // keepAlive: true
      }
    },
    {path: '/',component: Home,
        children:[//子路由
            {path:'/',component:index,
             meta: {
                title: '辣鸡小说',
                keepAlive:true
            }
          },
            {path: 'categoryList', component:categoryList,meta:{
                title:'书籍分类',
                keepAlive: true              
            }},
            {
              path:'bookFree',component:bookFree,meta:{
                title:'书籍限免',
                keepAlive:true
            }
          }
        ]
    },
    {path: '/directory', name: 'directory', component: directory,
     meta:{
       title:'书籍目录'
      }
    },
    {path: '/search', name: 'search', component: search,
      meta: {
        title: '搜索'
      }
  },
    {path: '/feedPepper', name: 'feedPepper', component: feedPepper,
     meta: {
        requireAuth: true,
      }
    },
    {path:'/person',name:'person',component:person, 
    meta: {
        requireAuth: true,
        title:'个人中心'
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
        title:'微信支付'
      }
    },
    {path:'/bookRack',component:bookRack, meta: {
        requireAuth: true,
        title:'我的书架',
        keepAlive:true
      }
    },
    {path:'/bookRank',component:bookRank,
    children:[
      {path:'/',component:golden,
      meta:{
        title:'书籍排行榜',
      }
    },
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
        requireAuth: true,
        title:'阅读记录',
        keepAlive:false
      }
    },  
    {path:'/bookRead',component:bookRead,
     meta:{
       title:'书籍阅读'
     }
  } ,
    {path:'/bookComment',component:bookComment,
    meta:{
      title:'书籍评论',
      keepAlive:true
    }
  },
    {path:'/bookCommentDetail',component:bookCommentDetail,
    meta:{
      title:'评论详情'
    }
  },
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
        requireAuth:true,
        title:'支付宝支付'
       }
    },
     {
      path:'/gradeSystem',component:gradeSystem,
       meta:{
        requireAuth:true,
        title:'等级支付'
      }
    },
    {
         path:'/myWallet',component:myWallet,meta:{
            requireAuth:true ,
            title:'我的钱包'          
         }
    },
    {
        path:'/MessageManage',component:MessageManage,
          children:[//子路由
            { path: '/', component:  sysMessage,meta:{
               title:'我的消息'
            }
          },
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
          {path:'/',component:payRecord,
           meta:{
             title:'交易记录'
           }
        },
          {path:'subscriptionRecord',component:subscriptionRecord},
          {path:'pepperRecord',component:pepperRecord},
          {path:'rewordRecord',component:rewordRecord},   
          {path:'minPepper',component:minPepper}                                                                                        
      ],
       meta:{
            requireAuth:true           
         }
    }
]
const router = new Router({
   scrollBehavior(to, from, savedPosition) {
     setTimeout(()=>{
       if (savedPosition) {
           return savedPosition
       } else {
           return {
               x: 0,
               y: 0
           }
       }
     },0)
    },
     base: '/mob',
     routes: routers,
     mode:'history',
})
export default router
