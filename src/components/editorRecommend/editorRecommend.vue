<template>
    <div id="more">
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
                Post_formData2(this,{},'/api/book-xiaobiantuijian',res=>{
                    if(res.returnCode==200){
                           this.moreList = res.data;
                        //    console.log(JSON.stringify(res.data))
                    }else{
                        // this.$vux.toast.text(res.msg);
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
    }
</style>
