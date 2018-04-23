<template>
    <div id="index">
        <loading :show="isShow"></loading>
        <swiper auto :aspect-ratio='i' dots-position="center">
           <swiper-item v-for='(item,index) in pictureList' :key='index'>
                <img  :src="item.bookImage" @click='handleGo(item.bookId)' style="width:100%;" >
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
        <div class="text_con">
            <div class="book" v-for="item in bookList"  @click="handleGo(item.bookId)">
                <img  :src='item.bookImage' style="width:.96rem;height:1.27rem;">
                <p class="p_one">{{item.bookName}}</p>
                <p class="p_two">{{item.writerName}}</p>
            </div>
        </div>
        <div class="line">
        </div>
    <!-- <div class="edit_d">
            <img src='../../assets/images/newbook@3x.png' class="left_img">
            <span class='le_p'>新书推荐</span>
         </div>
         <div class="text_con">
            <div class="book" :key='index' v-for="(item,index) in bookList" @click="handleGo(item.bookId)">
                <img :src='item.bookImage' style="width:.96rem;height:1.27rem;">
                <p class="p_one" >{{item.bookName}}</p>
                <p class="p_two">{{item.writerName}}</p>
            </div>
        </div> -->
        <div class="line">
        </div>
        <div class="edit_d">
            <img src='../../assets/images/new@3x.png' class="left_img">
            <span class='le_p'>最新小说</span>
        </div>
        <!--  -->
        <div class="text_d" v-for="item in newList" @click="handleGo(item.bookId)">
            <img :src="item.bookImage">
            <div class="con_d">
               <div class="text_one">
                  <span class="one_sp" v-html="item.bookName"></span>
               </div>
               <div class="text_two">
                  <span>作者: </span>
                  <span>{{item.writerName|str(8)}}</span>
                  <p></p>
                  <span  v-html="item.classificationName"></span>
                  <p></p>
                  <span  style='color:#47b2d8;' v-if="item.bookStatus===0">连载中</span>
                  <span  style='color:#ff6f00;' v-if="item.bookStatus===1">已完结</span>
               </div>
               <div class="text_three">
                    <span :style="{color:i.bookColor,border:'1px solid'}" v-for="i in item.booklableList" >{{i.bookLableName}}</span>
               </div>
               <div class="text_four">
                     {{item.bookIntroduction|str(45)}}
               </div>
            </div>
        </div>
        <div class='add_new_book' v-if='addBook'>
             <span @click='manualLoad()'>更多新书</span>
             <img src="../../assets/images/more@3x.png"  alt="">
        </div>
        <!-- <infinite-loading  @infinite="infiniteHandler"  ref="infiniteLoading">
        </infinite-loading> -->
        <!-- <div class="newBook_d" v-for="i  in newList"  @click='handleGo(i.bookId)'>
            <p class="op"></p>
            <span class="span_one">{{i.classificationName|className}}</span>
            <span class="span_two" v-html="i.bookName"></span>
            <img src="../../assets/images/vip@3x.png">
        </div> -->
        <div class="bottom_d">
            <ul>
                <li @click='handleTap(index)' v-for='(item,index) in bottomList' :key='index'>
                   {{item.title}}
                </li>
            </ul>
            <p style="margin-top:.5rem;margin-bottom:.1rem;">Copyright (C) 辣鸡小说网 2004-2017</p>
            <p>浙ICP备12010638号-1</p>
        </div>
    </div>
</template>

<script>
    import { Loading,Swiper ,SwiperItem } from 'vux'
    import { Post_formData2, noParam_Get } from '@/config/services'
    import {mapState,mapActions} from 'vuex'
    export default {
        name: 'index',
        data () {
            return {
                 bookList:[],
                 i:0.4,
                 total:10,
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
                     {title:'联系我们',link:'/contactUs'}
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
                    this.handleNewbook()
               }else{
                   this.addBook=false;
               }
            },
            handleGetbook () {
                this.isShow = true;
                noParam_Get(this,'/api/hot/homePageRecommended',res=>{
                       this.isShow= false;
                        if(res.returnCode==200){
                            this.bookList = res.data.HostXiaoBianRecommend;
                            this.pictureList = res.data.pictureCarousel;
                        }else{
                            this.$vux.toast.text(res.msg);
                        }
                })
            },
            handle(link,msg){
                if(this.isLogin){
                    this.$router.push(link)
                  }else{
                    this.$vux.toast.text(msg)
                }
             },
            handleTap(index){
                  index==0&&this.$router.push('/')
                  index==1&&this.handle('/bookRack','登录后才能看书架')
                  index==2&&this.handle('/payMoney','登录后才能充值')
                  index==3&&this.handleDownApp()
                  index==4&&this.$router.push('/contactUs')
            },
            handleDownApp(){
                var u = navigator.userAgent;
                var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
                var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                if(isAndroid){
                window.location.href='https://www.lajixs.com/apk/app.apk'
                }
                if(isiOS){
                alert('i am ios')
                }
            },
            handleNewbook(){
                this.isShow = true;                
                 noParam_Get(this,'/api/hot/getbooklistList/'+this.page+'/'+this.total,res=>{
                     this.isShow=false;
                        if(res.returnCode==200){
                            this.addBook=true;
                            if(this.newList.length==0){
                                this.newList=res.data.list
                            }else{
                                this.newList= this.newList.concat(res.data.list);
                            }
                            this.lastPage=res.data.lastPage
                      }else{
                            this.$vux.toast.text(res.msg);
                        }
                })
            },
            handleMore(){
                this.$router.push({path:"/editorRecommend"});
            },
            handleGo(id){
                 this.$router.push({path:'/bookDetails',query:{bookId:id}});
            }
        },
        mounted(){
            this.handleGetbook();
            this.handleNewbook();
        }
    }
</script>

<style lang="less" scoped>
  @import '../../css/newBookRecommend';
    #index {
        width:100%;
        box-sizing:border-box;
        font-family:'PingFangSC-Regular';
        .swiper{
            width:3.75rem;
            height:0.98rem;
            margin-top:.1rem;
        }
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
        .text_con{
            width:100%;
            height:3.6rem;
            margin-top:.1rem;
            box-sizing:border-box;
            font-size:.14rem;
            text-align:center;
            .book{
                float:left;
                width:1.25rem;
                height:1.8rem;
            }
            .p_one{
                color:#333;
                white-space: nowrap;
                text-overflow:ellipsis;
                overflow: hidden;
            }
            .p_two{
                color:#999;
                white-space: nowrap;
                text-overflow:ellipsis;
                overflow: hidden;
            }
            img{
                display:block;
                margin:0 auto;
                width:.96rem;
                height:1.27rem;
            }
        }
        .line{
            height:.06rem;
            background:#e9e9e9;
        }
        .newBook_d{
            height:.2rem;
            box-sizing:border-box;
            padding-left:.14rem;
            text-align:left;
            margin-top:.1rem;
            .op{
                width:.15rem;
                height:.14rem;
                font-size:.14rem;
                border-left:2px solid #FB5E6F;
                float:left;
                margin-top:.02rem;
            }
            .span_one{
                font-size:.14rem;
                color:#FB5E6F;
                // float:left;
            }
            .span_two{
                // float:left;
                margin-left:.2rem;
            }
            img{
                width:.12rem;
                height:.12rem;
                float:right;
                margin-right:.65rem;
            }
        }
        .add_new_book{
            text-align: center;
            color:#999;
            font-size: .14rem;
            padding:0 .1rem;
            img{
                width:.12rem;
                height:.2rem;
                vertical-align:middle;  
            }
        }
        .bottom_d{
            width:100%;
            height:1.35rem;
            margin-top:.1rem;
            box-sizing:border-box;
            padding-top:.27rem;
            background:#e9e9e9;
            color:#999;
            text-align:center;
            li{
                font-size:.14rem;
                float:left;
                margin-left:.3rem;
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
