<template>
    <div id="home">
         <div class="top">
            <img src="../assets/images/ico@2x.png" @click='handleTo({path:"/home"})' class="logo_two">
            <div class="btn_top" @click="handleTo({path:'/download'})">下载APP</div>
            <p class='userId'>{{userName}}</p>
            <img :src="avatar" @click="handleTo({path:'/person'})" class="logo_three">
         </div>
         <div class="bottom">
             <input type="text" placeholder="搜索作品或作者" class='search' @focus='handleTo({path:"/search"})'/>
             <img src="../assets/images/search@2x.png" class="logo_four">
             <button>搜索</button>
         </div>
         <div class="tap">
             <div class="btn" v-for="(item,index) in cate"  :class="{isAdd:isAddTo===index}" @click="handleGo(item.res,index)">
                <span v-html="item.name"></span>
             </div>
         </div>
           <router-view style='width:100%;height:100%;'></router-view>
    </div>
</template>
<script>
 import {mapState} from 'vuex'
    export default {
        name: 'home',
        data () {
            return {
               userId:'未知身份',
               isAddTo:0,
               cate:[
                   {name:'首页',res:{path:"/home"}},
                   {name:'分类',res:{path:"/home/categoryList"}},
                   {name:'限免',res:{path:"/home/free"}}
               ]
            }
        },
        computed: {
            ...mapState(["userName","avatar"])
        },
        methods:{
            handleGo(res,index){
                this.isAddTo = index;
                this.$router.push(res);
            },
            handleTo(res){
                 this.$router.push(res);
            }
        }
    }
</script>

<style lang="less" scoped>
    #home{
        width:100%;
        height:1rem;
        box-sizing:border-box;
        font-family:'PingFangSC-Regular';
        .top{
            box-sizing:border-box;
            padding:0 .14rem;
            height:.5rem;
            .logo_one{
                width:.24rem;
                height:.24rem;
                margin-top:.1rem;
                float:left;
            }
            .logo_two{
                width:.92rem;
                height:.24rem;
                margin-top:.1rem;
                float:left;
                vertical-align: middle;
            }
            .btn_top{
                width:.66rem;
                height:.24rem;
                border-radius:5px;
                background:#FB5E6F;
                font-size:.14rem;
                color:#fff;
                text-align:center;
                line-height:.24rem;
                float:left;
                margin:.1rem .14rem 0;
            }
            .userId{
                width:.64rem;
                font-size:.16rem;
                color:#FB5E6F;
                margin-top:.1rem;
                float:left;
                margin-left:.2rem;
            }
            .logo_three{
                width:.34rem;
                height:.33rem;
                float:right;
                margin-top:.08rem;
            }
        }
        .bottom{
            box-sizing:border-box;
            padding:0 .14rem;
            height:.5rem;
            position:relative;
            .search{
                float:left;
                width:2.5rem;
                height:.36rem;
                border:1px solid #979797;
                border-radius:4px;
                padding-left:.35rem;
                font-size:.16rem;
                color:#999;
                outline:none;
            }
            .logo_four{
                position:absolute;
                top:.09rem;
                left:.2rem;
                width:.2rem;
                height:.2rem;
            }
            button{
                width:.74rem;
                height:.36rem;
                border:none;
                background:#F77583;
                color:#fff;
                font-size:.18rem;
                text-align:center;
                line-height:.36rem;
                border-radius:4px;
                float:right;
            }
        }
        .tap{
            box-sizing:border-box;
            padding:0 .14rem;
            display: flex;
            justify-content:space-between;
            .btn{
               font-size:.18rem;
               color:#333;
            }
            .isAdd{
                width:.54rem;
                height:.26rem;
                color:#fff;
                text-align:center;
                line-height:.26rem;
                background:#FB5E6F;
                border-radius:2px;
            }
        }
    }
</style>
