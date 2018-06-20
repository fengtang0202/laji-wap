import {fetch} from './ajax'
import store from '../store'
import router from '../router'
import { 
    recommend_book,
    login,
    get_user_info,
    update_user_info
} from './api'
export  function getRecommendBookList() {
     return fetch(recommend_book,'post')
}
export  function userLogin(options){
    return  fetch(login,'post', options)
}
export function refshUserInfo(){
    fetch(get_user_info, "post").then(res=>{
        if(res.returnCode==500){
            store.state.isLogin = false
            store.state.userInfo = null
            router.push({ path: '/Login', query: { redirect: router.currentRoute.fullPath } })
        }else if(res.returnCode==200){
            store.state.isLogin = true            
            store.state.userInfo = res.data
            store.state.feed = res.data.userGoldenTicket
            store.state.feedPepper = res.data.userMoney
            store.state.minPepper = res.data.userRecommendTicket
        }
    })
}
export function updateInfo(options){
    return fetch(update_user_info,'post',options)
}
