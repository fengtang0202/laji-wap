<template>
<div>
    <headerComponent :list='topList' ></headerComponent>
    <textarea class='text' v-model="userAutograph"></textarea>
    <button class='btn_submit' @click='userAutograph=""'>清空</button>
    <button class='btn_submit' @click='handleUpdateInfo()'>保存</button>
</div>  
</template>
<script>
import {mapState} from 'vuex'
import {fetch} from '../../config/ajax'
import {updateInfo, refshUserInfo} from '../../config/getData'
    export default{
        data(){
            return{
               topList:{
                   title_1:'个性签名',
                   title_2:'首页',
                   link:'/'
               },
               userAutograph:''
            }
        },
        computed:{
             ...mapState(['userInfo'])
        },
        methods: {
           handleUpdateInfo(){
               updateInfo({userAutograph:this.userAutograph}).then(res=>{
                   if(res.returnCode==200){
                       refshUserInfo()
                       this.$vux.toast.text('修改成功!')
                       this.$router.go(-1)
                   }
               })
           }
        },
        created () {
            this.userAutograph=this.userInfo.userAutograph
        }
    }
</script>
<style lang="less" scoped>
  .text{
      width:90%;
      height:1.5rem;
      border-radius: 5px;
      margin:.5rem 5%;
      border:1px solid #EFEFEF;
      box-shadow: 0 0 5px rgba(0,0,0,.4);
      padding:.1rem;
      outline: none;
      resize:none;
  }
  .btn_submit{
     width:40%;
     border:0;
     background-color: #F77583;
     color:#fff;
     height:.44rem;
     outline: none;
     border-radius: 10px;
     margin-left:5%;
  }
</style>
