import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
import router from '../router'
const Axios = axios.create({
    timeout: 10000,
    responseType: "json",
    withCredentials: true, 
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    }
});
//添加请求拦截器
// Axios.interceptors.request.use(request=>{
//     if(request.method=='post'||request.method=='get'){
//            request.data=qs.stringify(data)
//     }
// })
// 添加响应拦截器
Axios.interceptors.response.use(response=>{
    if(response.returnCode==400){
        this.$vux.toast.show('登录过期,请重新登录!')
        setTimeout(()=>{
            router.push('/');    
        },1000)
    }else if(response.returnCode==1000){
        this.$vux.toast.show('服务器出错啦!赶快联系程序员小哥哥!');
    }else{
        return response;
    }
})
export function fetch(url, type = 'GET', data = '',) {
        return new Promise((resolve,reject)=>{
             Axios({
                 url:url,
                 method:type,
                 params:qs.stringify(data)
             }).then(res=>{
                 resolve(res)  
            }).catch(err=>{
                 reject(err)
            })
        })
}