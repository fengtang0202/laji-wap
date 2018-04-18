<template>
<div>
    <div id="free">
      <loading :show="isShow"></loading>
      <div v-if='showContent'>
              <bookItem :list='freeList'></bookItem>
        </div>
        <!-- <infinite-loading @infinite="onInfinite" ref="infiniteLoading">
          <span slot="no-more">
            加载完
          </span>
          <span slot="no-results">
            目前暂无更多书籍
          </span>
        </infinite-loading> -->
    </div>
     <No v-if='!showContent'></No>
    </div>
</template>
<script>
    import { Loading } from 'vux'
    import { Post_formData2, noParam_Get } from '@/config/services'
    export default {
        name: 'free',
        data () {
            return {
               isShow:false,
               freeList:[],
               showContent:true,
                source:{
                img:require('../../assets/images/1.png'),
                text:'没有相关数据'
            }
            }
        },
        components: {
            Loading,
        },
        methods:{
            handleMore(){
               this.isShow = true;
                noParam_Get(this,'/api/sys-freetimelimit',res=>{
                    this.isShow = false;
                    if(res.returnCode==200){
                           this.freeList = res.data.data;
                           this.showContent=true
                           console.log(res)
                    }else{
                        this.showContent=false
                    }
                })
            },
            handleGo(id){
                this.$router.push({path:'/bookdetails',query:{bookId:id}})
            },
            // onInfinite($state){
            //             noParam_Get(this,'/api/sys-freetimelimit',res=>{
            //                 console.log(res)
            //                 if(res.returnCode==200){
            //                     // let lists = res.data.data;
            //                     // this.freeList = this.freeList.concat(lists);
            //                 //     if(res.data.length>this.freeList.length){                                   
            //                 //         $state.loaded()
            //                 //     }else {
            //                 //         $state.complete()
            //                 //     }
            //                 // }else{
            //                 //         $state.complete()                                
            //                 }
            //         })
                    
            // }
        },
       created(){
           this.handleMore()
       }
    }
</script>

<style lang="less" scoped>  
    #free{
        width:100%;
        box-sizing:border-box;
        border-top:3px solid #E9E9E9;
        font-family:'PingFangSC-Regular';
    }
</style>