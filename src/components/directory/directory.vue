<template>
 <div>
    <div id="directory">
    <!-- <Loading :show="isShow"></Loading> -->
        <headerComponent :list='topList'></headerComponent>
       <div class='readVolumeList' style='border-bottom:1px solid #EFEFEF;' :key='index' v-for='(item,index) in volumeAndChapterlist'>
                <p class='volume_wrap'>
                    {{item.volumeName}}
                </p>
         <div class='chapter_wrap'  :id='"a"+i.id' @click='handleToBookRead(i)' v-for="(i,index) in item.resultList" :key='index'>
                <p class='volume_wrap chapter'>
                   <span :class='{add:i.chapterIsvip==1,active:chapterId==i.id}' >{{i.chapterTitle}}</span>
                   <img class='vip' src="../../assets/images/vip@3x.png" v-if='i.chapterIsvip==1' alt="">
                </p>
                  <span class='fontLength'>
                    {{i.chapterLength}}
                  </span>
         </div>  
        </div>
        <!-- <div style='width:100%;height:.2rem;'></div>
        <div class="page">
            <span class="page_l">上一页</span>
            <span class="page_n">下一页</span>  
            <input type="text" class="page_i" v-model="pageNum">
            <p class="page_p">跳转</p>
            <span class="page_num">1/20</span>
        </div> -->
      </div>
     </div>
</template>
<script>   
    import {Cell,TransferDom ,Loading} from 'vux'
    import { Post_formData2, noParam_Get,Param_Get_Resful} from '@/config/services'
    import {mapState,mapActions} from 'vuex'
    export default {
        name: 'directory',
        data () {
            return {
                pageNum:1,
                chapterList:[],
                volumeList:[],//所有卷
                isShow:false,
                chapterId:this.$route.query.chapterId,
                // showContent:-1,
                dialogshow:false,
                readBookId:this.$route.query.bookId,
                topList:{
                    title_1:'目录',
                    title_2:'首页',
                    link:'/'
                },
                volumeAndChapterlist:null,
                price:0
            }
        },
        components: {
            Loading,Cell
        },
        directives: {
           TransferDom
        },
        methods:{
            handleBack(){
                 window.history.go(-1);
            },
            handleToBookRead (i) {
                  this.$router.push({path:'/bookRead',query:{isvip:i.chapterIsvip,price:i.price,bookId:this.readBookId,chapterId:i.id}});  
            },
            handleGetVolumeChapter(){
                this.isShow=true
                 Param_Get_Resful(this,'/api/books-volumeChapterList/'+this.readBookId,res=>{
                     if(res.returnCode===200){
                         this.isShow=false
                         this.volumeAndChapterlist=res.data.chapterInfo
                         let a="#a"+this.chapterId
                         this.goAnchor(a)
                     }
                 })
            },
             goAnchor(selector) {
                    this.$nextTick(() => {
                    this.el = document.querySelector(selector)
                    if(this.el<400){
                         window.scrollTo(0,0)
                    }else{
                        let height = this.el.offsetTop-156
                        window.scrollTo(0,height)
                    }
                  })
              }
        },
        mounted(){
           
        },
        
        created () {
            // this.handleInit()
            this.handleGetVolumeChapter()
        }
    }
</script>

<style lang="less" scoped>
    #directory{
        width:100%;
        height:100%;
        box-sizing:border-box;
        font-family:'PingFangSC-Regular';
        .readVolumeList{
            .chapter_wrap{
                position: relative;
            }
            .volume_wrap{
                height:.52rem;
                font-size: .16rem;
                color:#333;
                padding:0 .14rem;
                border-bottom:1px solid #EFEFEF;
                line-height: .52rem;
            }
            .chapter{
                font-size:.14rem;
                padding:0 .24rem;
                .vip{
                    width:.15rem;
                    height:.15rem;
                    margin-left:.2rem;
                }
                .add{
                    color:#999;
                }
                .active{
                    color:#F77583;
                }
            }
             .fontLength{
                   border:1px solid #F77583;
                   position: absolute;
                   height:.24rem;
                   padding:0 .05rem;
                   color:#F77583;
                   top:15px;
                   right:15px;
                   border-radius:.15rem;
                }
        }
        .page{
            width:100%;
            height:.62rem;
            border:1px solid;
            position:fixed;
            bottom:0;
            left:0;
            background:#fff;
            box-sizing:border-box;
            padding:0 .14rem;
            font-size:.16rem;
            line-height:.62rem;
            .page_l{
                float:left;
                color:#999;
            }
            .page_n{
                float:right;
                color:#F77583;
            }
            .page_i{
               
                width:.28rem;
                height:.28rem;
                color:#666;
                line-height:.28rem;
                text-align:center;
                border:1px solid #F77583;
                margin-left:.48rem;
            }
            .page_p{
                display:inline-block;
                width:.53rem;
                height:.28rem;
                line-height:.28rem;
                text-align:center;
                border:1px solid #F77583;
                color:#666;
                margin:0 .23rem;
            }
            .page_num{
                color:#999;
            }
        }
        .words{
            color:#F77583;
            border:1px solid #F77583;
            border-radius:.1rem;
            position: absolute;
            padding:0 .04rem;
            right:.3rem;
            top:.1rem;
        }
    }
</style>