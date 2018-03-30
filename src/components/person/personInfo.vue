<template>
    <div class='user_info'>
       <headerComponent :list='topList'></headerComponent>
       <group class='user_info_list'>
          <cell title="头像" link='{path:"/home"}'>
          <img :src="userInfo.userHeadPortraitURL" style='width:.52rem;height:.52rem;'  alt="" >
          </cell>
          <cell title="昵称">{{userInfo.pseudonym}}</cell>
          <cell title="性别">
              <img v-if='userInfo.userSex==0' src="../../assets/images/sex-02_03@3x.png" style='width:.3rem;height:.3rem' alt="">
              <img v-if='userInfo.userSex==1' src="../../assets/images/sex-03@3x.png" style='width:.3rem;height:.3rem' alt="">
          </cell>
          <cell title="个性签名" link='{path:"/home"}'>{{userInfo.userAutograph}}</cell>
          <cell title="账号" link='{path:"/home"}'>{{userInfo.userPhone}}</cell>
          <cell title="邮箱" link='{path:"/home"}'>{{userInfo.userEmail}}</cell>
       </group>
    </div>
</template>
<script>
 import {Group,Cell} from 'vux'
 import {mapState} from 'vuex'
 export default {
    components:{
        Group,Cell
    },
    computed : {
        ...mapState(['userInfo'])
    },
    data(){
        return{
          topList:{
              title_1:'个人信息',
              title_2:'首页',
              link:'/home'
          }
        }
    },
    mounted () {
        console.log(this.userInfo)
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
        img{
            vertical-align: middle;
        }
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
