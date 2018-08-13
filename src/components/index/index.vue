<template>
<keep-alive>
    <div id="index" v-if='showContent'>
        <loading :show="isShow"></loading>
        <swiper auto :aspect-ratio='i' dots-position="center">
           <swiper-item v-for='(item,index) in pictureList' :key='index' >
                <img  :src="item.activityImgURL" style='width:100%;' @click='handleGo(item)'>
           </swiper-item>
       </swiper>
        <div class="edit">
            <img src='../../assets/images/recommend@3x.png' class="left_img">
            <p class='le_p'>小编推荐</p>
            <div cLass="r_d" @click="handleMore()">
                <p class='ri_p'>更多</p>
                <img src="../../assets/images/more@3x.png">
            </div>
        </div>
        <bookImg :data='bookList'></bookImg>
        <div class="line"></div>
        <div class="edit_d" ref='newBook'>
            <img src='../../assets/images/new@3x.png' class="left_img">
            <span class='le_p'>最新小说</span>
        </div>
        <bookItem :list='newList' ></bookItem>
        <div class='add_new_book' v-if='addBook' @click='manualLoad()'>
             <span >更多新书</span>
             <img src="../../assets/images/more@3x.png"  alt="">
        </div>
        <div class="bottom_d">
            <ul>
                <li @click='handleTap(index)' v-for='(item,index) in bottomList' :key='index'>
                   {{item.title}}
                </li>
            </ul>
            <p style="margin-top:.5rem;margin-bottom:.1rem;">COPYRIGHT©辣鸡小说网 2017-2027，版权所有 杭州樱熊网络科技有限公司</p>
            <p>浙ICP备16023962号-2</p>
        </div>
    </div>
</keep-alive>    
</template>
<script>
    import { Loading,Swiper ,SwiperItem } from 'vux'
    import { Post_formData2, noParam_Get } from '@/config/services'
    import {handleIsPhone} from '../../config/common'
    import {mapState,mapActions} from 'vuex'
    export default {
        name: 'index',
        data () {
            return {
                 showContent:false,
                 bookList:[],
                 i:0.4,
                 total:10,
                 newBook:0,
                 newList:[],
                 distance:false,
                 newRecommendList:[],
                 pictureList:[],
                 isShow:false,
                 page:1,
                 lastPage:0,
                 addBook:false,
                 bottomList:[
                     {title:'首页',link:'/'},
                     {title:'书架',link:'/bookRack'},
                     {title:'充值',link:'/payMoney'},
                     {title:'客户端',link:'/download'},
                     {title:'联系我们',link:'/contactUs'},
                     {title:'电脑版'}
                 ]
            }
        },
        components: {
            Loading,Swiper,SwiperItem
        },
        computed: {
          ...mapState(['isLogin'])  
        },
        methods:{
            manualLoad() {
                if(this.page<this.lastPage){
                    this.page+=1
                    this.isShow=true                    
                    this.handleNewbook()
               }else{
                   this.addBook=false;
               }
            },
            handleGetbook () {
                noParam_Get(this,'/api/hot/homePageRecommended',res=>{
                        if(res.returnCode==200){
                            this.showContent=true
                            this.bookList = res.data.HostXiaoBianRecommend;
                            this.pictureList=res.data.pictureCarouselVersionTow
                        }else{
                            // this.$vux.toast.text(res.msg);
                        }
                })
            },
            handle(link,msg){
                // if(this.isLogin){
                    this.$router.push(link)
                //   }else{
                    // this.$vux.toast.text(msg)
                // }
             },
            handleScrollTop(){
                this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
                if(this.scroll>0){
                    this.handleNewbook()
                    window.removeEventListener("scroll",this.handleScrollTop)
                }
            },
            handleTap(index){
                  index==0&&this.$router.push('/')
                  index==1&&this.handle('/bookRack')
                  index==2&&this.handle('/payMoney')
                  index==3&&handleIsPhone()
                  index==4&&this.$router.push('/contactUs')
                //   index==5&&(window.location.href='https://www.lajisx.com')
                if(index==5){
                    window.location.href='https://www.lajixs.com#fromapp'
                }
            },
            handleNewbook(){
                 noParam_Get(this,'/api/hot/getbooklistList/'+this.page+'/'+this.total,res=>{
                        if(res.returnCode==200){
                            this.addBook=true;
                            this.isShow=false                            
                            if(this.newList.length==0){
                                this.newList=res.data.list
                            }else{
                                this.newList= this.newList.concat(res.data.list);
                            }
                              this.lastPage=res.data.lastPage
                          }else{
                            //this.$vux.toast.text(res.msg);
                      }
                })
            },
            handleMore() {
                this.$router.push({path:"/editorRecommend"});
            },
            handleGo(item){
                 if(item.bookId!=0){
                    this.$router.push({path:'/bookDetails',query:{bookId:item.bookId}});
                 }else{
                    window.location.href=item.detailsImgAndPageURL
                 }
            }
        },
        mounted(){
            },
        created(){
            this.handleGetbook();
            window.addEventListener('scroll',this.handleScrollTop)
        },
        destroyed () {
            window.removeEventListener('scroll',this.handleScrollTop)
        }
    }
</script>

<style lang="less" scoped>
    #index {
        width:100%;
        box-sizing:border-box;
        font-family:'PingFangSC-Regular';
        .edit_d{
            height:.25rem;
            margin-top:.1rem;
            margin-bottom:.1rem;
            box-sizing:border-box;
            padding:0 .14rem;
            .left_img{
                width:.24rem;
                height:.24rem;
                float:left;
            }
            .le_p{
                font-size:.18rem;
                color:#333;
                margin-left:.05rem;
            }
        }
        .edit{
            height:.25rem;
            margin-top:.1rem;
            box-sizing:border-box;
            padding:0 .14rem;
            .left_img{
                width:.24rem;
                height:.24rem;
                float:left;
            }
            .le_p{
                font-size:.18rem;
                color:#333;
                float:left;
            }
            .r_d{
                 float:right;
                 height:.25rem;
                    .ri_p{
                    color:#666;
                    font-size:.14rem;
                    float:left;
                    margin-top:.03rem;
                }
                img{
                    width:.24rem;
                    height:.24rem;
                }
            }

        }
        .line{
            height:.06rem;
            background:#e9e9e9;
        }
        .add_new_book{
            text-align: center;
            color:#999;
            font-size: .14rem;
            margin-top:.2rem;
            height:.44rem;
            line-height: .44rem;
            border-top:1px solid #e9e9e9;
            img{
                width:.12rem;
                height:.2rem;
                vertical-align:middle;  
            }
        }
        .bottom_d{
            width:100%;
            // height:1.5rem;
            padding-bottom: .1rem;
            box-sizing:border-box;
            padding-top:.27rem;
            background:#e9e9e9;
            color:#999;
            text-align:center;
            li{
                font-size:.14rem;
                float:left;
                margin-left:.17rem;
                list-style: none;
                // border:2px solid;
                // width:.75rem;
            }
            p{
                font-size:.12rem;
            }
        }
    }
    
</style>
