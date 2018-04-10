<template>
   <div id="search">
        <loading :show="isShow"></loading>
        <div class="search_top">
           <input type="text" placeholder="搜索作者或者作品" v-model="keyword" >
           <img src="../../assets/images/search@2x.png">
           <span @click="handleBack()">取消</span>
        </div>
        <div v-if="hotLabel">
                <div class="label">
                    <p class="label_p">大家热搜</p>
                    <div class="label_text">
                        <span @click='handleHotLabel(item.bookLableName)' v-for="(item,index) in labelList" :key='index' v-html="item.bookLableName" :style="{color:item.bookColor}"></span>
                    </div>
                </div>
                <div class="line">
                </div>
                <div class="hostroy" >
                    <div class="hostroy_p">历史搜索</div>
                    <div class="hostroy_text" @click='handleHotLabel(item)' v-for="(item,index) in hotwordList"  :key='index'>
                       <img src="../../assets/images/copy@2x.png">
                       <span >{{item}}</span>
                    </div>
                </div>
        </div>
        <div v-if="!hotLabel" class="search_list">
             <div v-if="message">
                    <div class="line_img"></div>
                    <div class="text_d" v-for="(item,index) in searchList" :key='index' @click="handleGo(item.bookId)">
                        <img :src="item.bookImage">
                        <div class="con_d">
                            <div class="text_one">
                                <span class="one_sp" v-html="item.bookName"></span>
                                <span class="two_sp" >{{item.clickTotal}}万点击</span>
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
                                <span :style="{color:i.bookColor,border:'1px solid'}" v-for="(i,index) in item.booklableList" :key='index' v-html="i.bookLableName"></span>
                            </div>
                            <div class="text_four" v-html="item.bookIntroduction">
                                
                            </div>
                        </div>
                    </div>
             </div>
             <div v-if="!message" style='text-align:center;margin-top:.1rem;'>暂无相关数据</div>
        </div>
       
   </div>
</template>
<script>
    import { Loading } from 'vux'
    import { Post_formData2, noParam_Get } from '@/config/services'
import { mapActions, mapState } from 'vuex';
   export default {
        name: 'search',
        data () {
            return {
                 labelList:[],
                 isShow:false,
                 keyword:'',
                 searchList:[],
                 message:true,
                 hotLabel:true,
                 hotwordList:[]
            }
        },
         components: {
            Loading,
        },
        computed: {
          ...mapState(['userInfo'])  
        },
        methods:{
             ...mapActions(['setReadBookId']),
            handleDownload(){
                 this.$router.push({path:"/download"});
            },
            handleBack(){
                if(this.keyword!=''){
                   this.keyword=''
                }else{
                   this.$router.push({path:"/"});
                }
            },
            handleGo(id){
                 this.$router.push({path:'/bookDetails',query:{bookId:id}});
                //当点击去书籍详情页,我就默认用户输入的keyword加入搜索关键字  
                 if(this.userInfo!==null){
                    this.hotwordList.unshift(this.keyword)
                    localStorage.setItem(this.userInfo.userId,JSON.stringify(Array.from(new Set(this.hotwordList))))
                } 
            },
            handleInit(){
                 this.isShow = true;
                 setTimeout(() => {
                     this.isShow = false;
                 },5000);
                 noParam_Get(this,'/api/stacks-hotLable',res=>{
                        if(res.returnCode==200){
                            this.isShow= false;
                            this.labelList = res.data;
                        }                         
                })            
            },
            handleHotLabel(res){
              this.keyword=res
            },
            // handleHostry(){
            //      this.isShow = true;
            //      setTimeout(() => {
            //          this.isShow = false;
            //      },5000);
            //      noParam_Get(this,'/api/sys-hotwords',res=>{
            //             if(res.returnCode==200){
            //                 this.isShow= false;
            //                 this.hotwordList = res.data;
            //           }                         
            //     })
            // },
            handleSearch(){
                if(this.keyword !==''){
                     this.hotLabel = false;
                }else{
                    this.hotLabel = true;
                }
                let options = {
                    keyWord:this.keyword,
                    startPage:1,
                    isHotWorld:1
                }
                Post_formData2(this,options,'/api/stacks-search',res=>{
                    if(res.returnCode==200){
                          if(res.data.list.length>0){
                              this.message = true;
                              this.searchList = res.data.list;
                          }else{
                              this.message = false;
                          }                  
                    }
                })
            }
        },
        watch:{
            keyword(){
                this.handleSearch();
            }
        },
        mounted(){
             this.handleInit();
             if(this.userInfo!==null){
                if(localStorage.getItem(this.userInfo.userId)){
                 this.hotwordList=JSON.parse(localStorage.getItem(this.userInfo.userId))
                }
             }
        }
   }
</script>
<style lang="less" scoped>
  @import '../../css/bookSearch';
</style>