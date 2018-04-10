<template>
   <div class='deal_wrap'>
       <headerComponent :list='topList'></headerComponent>
        <tab bar-active-color="#F77583" active-color='#F77583' default-color='#333' :line-width="2">
            <tab-item @on-item-click='handleGo(item.link)' :selected="index===0" v-for='(item,index) in itemList' :key='index'>{{item.title}}</tab-item>
       </tab>
       <router-view></router-view>
   </div>
</template>
<script>
import {Tab,TabItem} from 'vux'
    export default {
       data(){
           return {
               topList:{
                   title_1:'交易记录',
                   title_2:'首页',
                   link:'/'
               },
               itemList:[
                   {title:'充值记录',link:'/dealManage'},
                   {title:'订阅记录',link:'/dealManage/subscriptionRecord'},
                   {title:'金椒记录',link:'/dealManage/pepperRecord'},
                   {title:'打赏记录',link:'/dealManage/rewordRecord'},
                   {title:'小米椒记录',link:'/dealManage/minPepper'}
               ]
           }
       },
       components:{
           Tab,TabItem
       },
       methods:{
           handleGo(res){
               this.$router.replace(res)
           }
       }
    }
</script>
<style lang="less" scoped>

</style>
