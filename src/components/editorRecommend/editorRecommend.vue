<template>
    <div id="more">
        <loading :show="isShow"></loading>
        <headerComponent :list='topList'></headerComponent>
        <bookItem :list='moreList'></bookItem>
    </div>
</template>
<script>
    import { Loading } from 'vux'
    import { Post_formData2, noParam_Get } from '@/config/services'
    import {mapState,mapActions} from 'vuex'
    export default {
        name: 'more',
        data () {
            return {
               isShow:false,
               moreList:[],
               topList:{
                   title_1:"小编推荐",
                   title_2:'首页',
                   link:'/'
               }
            }
        },
        components: {
            Loading
        },
        methods:{
            handleMore(){
                this.isShow = true;
                Post_formData2(this,{},'/api/book-xiaobiantuijian',res=>{
                    this.isShow = false;
                    console.log(res.data)
                    if(res.returnCode==200){
                           this.moreList = res.data;
                    }else{
                        this.$vux.toast.text(res.msg);
                    }
                })
            },
            handleBack(){
                 window.history.go(-1);
            }
        },
        created(){
            this.handleMore()
        }
    }
</script>

<style lang="less" scoped>
    #more{
        width:100%;
        box-sizing:border-box;
        padding-bottom:.27rem;
        font-family:'PingFangSC-Regular';
        .top_d{
             height:.8rem;
             border-bottom:1px solid #e9e9e9;
             box-sizing:border-box;
             padding-left:.15rem;
             padding-top:.4rem;
             font-size:.18rem;
             color:#333;
             img{
                 float:left;
                 width:.3rem;
                 height:.3rem;
             }
             p{
                 float:left;
                 margin-left:1rem;
                 margin-top:.02rem;
             }
        }
    }
</style>
