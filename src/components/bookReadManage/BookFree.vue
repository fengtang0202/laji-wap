<template>
<div>
    <div id="free">
        <!-- <div v-if='showContent'> -->
        <loading :show="isShow"></loading>
        <div class="text_d" v-for="item in freeList" @click="handleGo(item.bookId)">
            <img :src="item.bookImage">
            <div class="con_d">
               <div class="text_one">
                  <span class="one_sp" v-html="item.bookName"></span>
                  <span class="two_sp" >{{item.clickTotal|clickTotal}}万点击</span>
               </div>
               <div class="text_two">
                  <span>作者: </span>
                  <span v-html="item.writerName"></span>
                  <p></p>
                  <span  v-html="item.classificationName"></span>
                  <p></p>
                  <span class="oSpan" v-if="item.bookStatus===0">连载中</span>
                  <span class="oSpan" v-if="item.bookStatus===1">已完结</span>
               </div>
               <div class="text_three">
                    <span :style="{color:i.bookColor,border:'1px solid'}" v-for="i in item.booklableList" v-html="i.bookLableName"></span>
               </div>
               <div class="text_four" v-html="item.bookIntroduction">
                    
               </div>
            </div>
        </div>
        <!-- </div> -->
        <infinite-loading @infinite="onInfinite" ref="infiniteLoading">
          <span slot="no-more">
            加载完
          </span>
          <span slot="no-results">
            目前暂无更多书籍
          </span>
        </infinite-loading>
    </div>
     <!-- <no-content :source='source' v-if='showContent'></no-content> -->
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
            //    this.isShow = true;
                noParam_Get(this,'/api/sys-freetimelimit',res=>{
                    // this.isShow = false;
                    if(res.returnCode==200){
                           this.freeList = res.data.data;
                    }else{
                        this.$vux.toast.text(res.msg);
                    }
                })
            },
            handleGo(id){
                this.$router.push({path:'/bookdetails',query:{bookId:id}})
            },
            onInfinite($state){
                        noParam_Get(this,'/api/sys-freetimelimit',res=>{
                            if(res.returnCode==200){
                                let lists = res.data.data;
                                this.freeList = this.freeList.concat(lists);
                                if(res.data.data.length>this.freeList.length){                                   
                                    $state.loaded()
                                }else {
                                    $state.complete()
                                }
                            }else{
                                    $state.complete()                                
                            }
                    })
            }
        },
        mounted(){
            
        }
    }
</script>

<style lang="less" scoped>  
 @import '../../css/newBookRecommend';
    #free{
        width:100%;
        box-sizing:border-box;
        padding-top:.17rem;
        font-family:'PingFangSC-Regular';
    }
</style>