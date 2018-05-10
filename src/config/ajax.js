import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
import router from '../router'
export function fetch(url, type = 'GET', data = '',) {
        return new Promise((resolve,reject)=>{
            axios({
                 url:url,
                 method:type,
                 params:data
             }).then(res=>{
                 resolve(res.data)  
            }).catch(err=>{
                 reject(err.data)
            })
     })
}