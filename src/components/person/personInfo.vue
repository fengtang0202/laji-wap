<template>
    <div class='user_info'>
       <div class='header'>
         <div @click="$router.go(-1)">
             <img src="../../assets/images/back@2x.png" style='width:.4rem;heigh:.4rem;vertical-align: middle;' alt="">
         </div>    
         <div class='title_1'>个人资料</div>
       </div>
       <group class='user_info_list'>
          <cell title="头像" link='{path:"/home"}'>
          <img src="../../assets/images/d-28@3x.png"   alt="" >
          </cell>
          <cell title="昵称">{{personInfo.nike}}</cell>
          <cell title="性别">{{personInfo.sex}}</cell>
          <cell title="个性签名" link='{path:"/home"}'>{{personInfo.signature}}</cell>
          <cell title="账号" link='{path:"/home"}'>{{personInfo.phone}}</cell>
          <cell title="邮箱" link='{path:"/home"}'>{{personInfo.email}}</cell>
       </group>
    </div>
</template>
<script>
 import {Group,Cell} from 'vux'
 export default {
    components:{
        Group,Cell
    },
    data(){
        return{
          personInfo:{
              nike:'小辣椒',
              sex:'男',
              signature:'小辣椒的个性签名',
              phone:'18888888888',
              email:'990959@gmail.com'
          }
        }
    }
 }
    
</script>
<style lang="less" scoped >
    .user_info{
        width:100%;
        font-family: PingFangSC;
        font-size: .16rem;
        color:#333333;
        width:100%;
        .header{
            height:.4rem;
            display:flex;
            flex-direction:row;
             .title_1{
              font-size: .18rem;
              line-height: .4rem;
              margin-left:29.6%;
        }
    }
}
</style>
