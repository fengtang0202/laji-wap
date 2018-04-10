<template>
 <div>
    <div id="directory">
        <loading :show="isShow"></loading>
        <headerComponent :list='topList'></headerComponent>
        <div class='readVolumeList' style='border-bottom:1px solid #EFEFEF;' :key='index' v-for='(item,index) in volumeList'>
             <cell
                :title="item.volumeName"
                is-link
                :border-intent="true"
                :arrow-direction="showContent!==index? 'up' : 'down'"
                @click.native="handleTapvolume(index,item.id)">
             </cell>
            <template v-if="showContent===index?true:false">
                <cell-box class='chapterTitle'  :class='{Vip:item.chapterIsvip==1}'  @click.native='handle(item.chapterIsvip,item.id,item.price)' :key='index' v-for='(item,index) in chapterList'>
                    <span>{{item.chapterTitle}}</span>
                    <img src="../../assets/images/vip@3x.png" v-if='item.chapterIsvip==1?true:false' class='vip_icon' alt="">
                 <span class='words'>{{item.chapterLength}}</span>                                    
                </cell-box>
            </template>
        </div>
       <!-- <div>
        <cell-box class='chapterTitle'  :class='{Vip:item.chapterIsvip==1}'  @click.native='handle(item.chapterIsvip,item.id,item.price)' :key='index' v-for='(item,index) in chapterList'>
                    <span>{{item.chapterTitle}}</span>
                    <img src="../../assets/images/vip@3x.png" v-if='item.chapterIsvip==1?true:false' class='vip_icon' alt="">
                 <span class='words'>{{item.chapterLength}}</span>                                    
        </cell-box>
       </div> -->
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
    import { Loading,Group,Cell,CellBox,XButton,TransferDom } from 'vux'
    import { Post_formData2, noParam_Get } from '@/config/services'
    import {mapState,mapActions} from 'vuex'
    export default {
        name: 'directory',
        data () {
            return {
                pageNum:1,
                chapterList:[],
                volumeList:[],//所有卷
                isShow:false,
                showContent:-1,
                dialogshow:false,
                readBookId:this.$route.query.bookId,
                topList:{
                    title_1:'目录',
                    title_2:'首页',
                    link:'/'
                }
            }
        },
        components: {
            Loading,Group,Cell,CellBox
        },
        directives: {
           TransferDom
         },
        methods:{
            ...mapActions(['setChapterId']),
            handleGo(){
                 this.$router.push({path:'/Home'});
            },
            handleBack(){
                 window.history.go(-1);
            },
            handle (isvip,chapterId,price) {
                  this.$router.push({path:'/bookRead',query:{isvip:isvip,price:price,bookId:this.readBookId,chapterId:chapterId}});  
            },
             handleTapvolume(index,volumeId){
                 this.showContent!==index?this.showContent=index:this.showContent=-1
                //  if(!this.showContent){
                     this.chapterList=[]
                //   }
                   Post_formData2(this,{volumeid:volumeId},'/api/books-getVolumeById',res=>{
                       this.chapterList=res.data
                      if (res.data==null) {
                         this.chapterList=[]
                       }
                   })
            },
            handleInit () {
                this.isShow = true;
                Post_formData2(this,{bookId:this.readBookId},'/api/books-getvolume',res=>{
                        this.isShow = false;
                        if(res.returnCode==200){
                            this.volumeList=res.data
                    }
                })
            }
        },
        mounted () {
            this.handleInit();
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
           .chapterTitle{
               font-size:.14rem;
               .vip_icon{
                   width:.15rem;
                   height:.15rem;
                   margin-left:.2rem;
               }
           }
           .Vip{
              color:#999;  
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