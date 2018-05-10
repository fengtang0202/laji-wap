<template>
    <div class='user_info'>
       <headerComponent :list='topList'></headerComponent>
        <div style='oveflow:hidden;'>
       <!-- <group class='user_info_list'> -->
          <cell title="头像" class='arrow_wrap'>
          <cropper :headerImage="headerImage"  @getHeaderImage="newHeaderImage"></cropper>
          <!-- <img src="../../assets/images/more@3x.png"  style='top:40%;right:.2rem;' class='arrow' alt=""> -->
          </cell>
          <cell title="昵称" style='padding-right:.5rem;'>{{userInfo.pseudonym}}</cell>
          <cell title="性别" style='padding-right:.6rem;'>
              <img v-if='userInfo.userSex==0' src="../../assets/images/sex-02_03@3x.png" style='width:.3rem;height:.3rem' alt="">
              <img v-if='userInfo.userSex==1' src="../../assets/images/sex-03@3x.png" style='width:.3rem;height:.3rem' alt="">
          </cell>
          <cell title="个性签名"  style='padding-right:.6rem;' class='arrow_wrap'>
              {{userInfo.userAutograph|str(12)}}
              <div class='arrow' @click='handleGo({path:"/userAutograph"})'>
                <img   src="../../assets/images/more@3x.png" alt="">
              </div>
          </cell>
          <cell title="账号" style='padding-right:.4rem;'>{{userInfo.userPhone}}</cell>
          <cell title="邮箱" style='padding-right:.4rem;'>
              {{userInfo.userEmail}}
          </cell>
        <!-- </group> -->
    </div>
     <div  class='updatepwd'>
         <span>修改密码</span>
         <div class='arrow_wrap update_link' @click='handleGo({path:"/password",query:{value:86}})'>
             <img src="../../assets/images/more@3x.png" alt="">
        </div>
    </div>
    </div>    
</template>
<script>
 import {Group,Cell} from 'vux'
 import {mapState} from 'vuex' 	
 import cropper from "@/components/common/cropper"
 export default {
    components:{
        cropper,
        Group,Cell,
    },
    computed : {
        ...mapState(['userInfo'])
    },
    data(){
        return{
          topList:{
              title_1:'个人信息',
              title_2:'首页',
              link:'/'
          },
           headerImage:''      
        }
    },
    methods:{
      newHeaderImage(newImg){
         this.headerImage = newImg;
      },
      handleGo(res){
          this.$router.push(res)
      }  
    },
    mounted () {
       
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
     .arrow_wrap{
        position: relative;
        img{
            width:.27rem;
            height:.27rem;
        }
     }
    .arrow{
        position: absolute;
        right:.1rem;
        top:0rem;
        width:.44rem;
        height:.44rem;
        text-align: center;
        line-height: .44rem;
    }
    .updatepwd{
        position: relative;
        width:100%;
        height:.44rem;
        border-bottom:1px solid #EFEFEF;
        border-top:1px solid #EFEFEF;
        line-height: .44rem;
        padding:0 .15rem;
       .update_link{
           float:right;
           width:1rem;
           text-align: right;
       }
    }
}
</style>
