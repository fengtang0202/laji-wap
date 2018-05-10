<template>
    <div class='categoryDetail_wrap'>
        <!-- <loading :show="isShow"></loading>         -->
         <headerComponent :list="topList"></headerComponent>
         <div class='fixbar'>
            <!-- <div class="search_top">
            <input type="text" placeholder="搜索作者或者作品" v-model="keyword" >
            <img src="../../assets/images/search@2x.png">
           </div> -->
         <div class='filter_nav' :class="searchBarFixed == true ? 'isFixed' :''">
            <div class='filter_btn_wrap'  @click='handleOrder()'>
             <span>排行</span>
              <img v-if='!direction' src="../../assets/images/Combine@3x.png" :style="{ 'transform':direction?'rotate(180deg)':'rotate(0deg)'}" alt="">
              <img v-if='direction' src="../../assets/images/d-38@3x.png" :style="{ 'transform':direction?'rotate(180deg)':'rotate(0deg)'}" alt="">
            </div>
            <div class='filter_btn_wrap' @click='handleFilterBtn()'>
             <span>筛选</span>
              <img v-if='!direction1' src="../../assets/images/Combine@3x.png" :style="{ 'transform':direction1?'rotate(180deg)':'rotate(0deg)'}" alt="">             
              <img  v-if='direction1' class='filter' :style="{ 'transform':direction1?'rotate(180deg)':'rotate(0deg)'}" src="../../assets/images/d-38@3x.png" alt="">
            </div>
        </div>
        <div class='filter_wrap'>
            <v-touch @swipeup='up_1'>    
         <div class='orderList_wrap'  :style="{'height':direction?'1.3rem':'0'}">
          <div class="select" style="height:1.1rem;">          
           <ul>
              <li style="font-size:.18rem;color:#333;width:.73rem;margin-top:.16rem;">排行榜</li>
              <li  style='margin-top:.16rem;' :style='{"margin-left":index==0?".08rem":".17rem;"}' v-for = '(item,index) in category' :class="{ red:categoryRed == index}" :key='index' @click="getCategory(item.key,index)"><span v-html="item.name"></span></li>        
           </ul>
        </div>
         </div>
            </v-touch>
        <v-touch @swipeup='up'>         
         <div class='orderList_wrap'  :style="{'height':direction1?'3.5rem':'0'}">
             <div class="select" style="height:1.4rem;">          
                <ul>
                    <li style="font-size:.18rem;color:#333;width:.73rem;">作品类别</li>
                    <li style='margin-bottom:.1rem'  v-for="(item,index) in classList" :key='index' :class="{ red:changeRed == index}" @click="getData(item.id,index,item)"><span v-html="item.classificationName"></span></li>             
                </ul>
             </div>
            <div class="select" style="height:.8rem;">          
           <ul>
              <li style="font-size:.18rem;color:#333;">作品字数</li>
              <li style='margin-bottom:.1rem' v-for="(item,index) in words" :key='index' :class="{ red:numRed == index}" @click="getWords(item.key,index)"><span v-html="item.name"></span></li>
           </ul>
          </div>
          <div class="select" style="height:.5rem;">          
           <ul>
              <li style="font-size:.18rem;color:#333;">作品状态</li>
              <li style='margin-bottom:.1rem' v-for="(item,index) in status" :key='index' :class="{ red:statusRed == index}" @click="getStutas(item.key,index)"><span v-html="item.name"></span></li>        
           </ul>
         </div>
        <div class="select" style="height:.8rem;">          
           <ul>
              <li style="font-size:.18rem;color:#333;">更新时间</li>
              <li style='margin-bottom:.1rem' v-for="(item,index) in time" :key='index' :class="{ red:timeRed == index}" @click="getTime(item.key,index)"><span v-html="item.name"></span></li>
           </ul>
        </div>
         </div>
        </v-touch>
        </div>
        </div>
         <div class="book_text" @click='handleToBookDetail(item.bookId)' v-for="(item,index) in filterList" :key='index'>
            <img :src="item.bookImage" style='border-radius:5px;'>
            <div class="con-text">
               <p class="p_one" v-html="item.bookName"></p>
               <p class="p_two"><span>作者 : </span>
               <span   style="margin:0 .05rem;">{{item.writerName|str(7)}}</span>
               <span v-html="item.classificationName"></span>
               <span  style='color:#47b2d8; margin-left:.03rem;' v-if="item.bookStatus===0">连载中</span>
               <span  style='color:#ff6f00;margin-left:.03rem;' v-if="item.bookStatus===1">已完结</span>
               <!-- <span style='color:#57B0FF;'>{{item.bookStatus===0?'连载中':''}}</span> -->
               </p>
               <p class="p_three" v-html="item.bookIntroduction"></p>
            </div>
        </div> 
        <infinite-loading  @infinite="infiniteHandler" >
            <span slot='no-results'>
                暂无匹配到相关书籍                
            </span>
            <span slot="no-more">
                暂无更多相关书籍
            </span>
        </infinite-loading>
    </div>
</template>
<script>
import { Post_formData2, noParam_Get } from '@/config/services'
import { Loading } from 'vux'
import { setTimeout } from 'timers';
import {mapActions} from 'vuex'
    export default {
        components:{
           Loading
        },
        data(){
            return{
                topList:{
                    title_1:this.$route.query.classificationName,
                    title_2:'首页',
                    link:'/'
                },
                filterList:[],
                keyword:'',
                direction:false,
                direction1:false,
                // 
                worksClass:this.$route.query.categoryId,
                worksCategory:this.$route.query.order,
                worksNum:this.$route.query.word,
                worksStatus:this.$route.query.status,
                worksTime:this.$route.query.updateTime,
                // 
                categoryRed:0,
                changeRed:0,
                statusRed:0,
                numRed:0,
                timeRed:0,
                isShow:false,
                searchBarFixed:false,
                classList:[],
                category:[ 
                    {name:"不限",key:0},
                    {name:"金椒榜",key:1},
                    {name:"推荐榜",key:2},
                    {name:"点击榜",key:3},
                    {name:"新书榜",key:4},
                    {name:"畅销榜",key:5},
                    {name:"吐槽榜",key:6},
                    {name:"更新榜",key:7},
                    {name:"打赏榜",key:8}
                ],
                 words:[
                    {name:"不限",key:0},
                    {name:"30万以下",key:1},
                    {name:"30-50万",key:2},
                    {name:"50-100万",key:3},
                    {name:"100-200万",key:4},
                    {name:"200万以上",key:5}
                ],
                 status:[
                    {name:"不限",key:0},
                    {name:"连载中",key:0},
                    {name:"已完结",key:2},
                ],
                time:[
                    {name:"不限",key:0},
                    {name:"本日",key:1},
                    {name:"三日",key:2},
                    {name:"七日",key:3},
                    {name:"半个月",key:4},
                    {name:"一月内",key:5},
                ],
                page:0,
                
            }
        },
        methods:{
            infiniteHandler($state){
                this.page+=1
                let options = {
                    startPage:this.page,
                }
                // 分类
                // if (this.worksClass) {
                    options.bookClassificationid = this.worksClass;
                // }
                // 字数
                // if(this.worksNum){
                   options.bookWorldCount = this.worksNum;
                // }
                // 状态
                // if(this.worksStatus){
                   options.bookCheckStatus = this.worksStatus;
                // }
                // 时间
                // if(this.worksTime){
                   options.updateTime = this.worksTime;
                // }
                // 排行榜
                // if(this.worksCategory){
                   options.order = this.worksCategory;
                // }
                Post_formData2(this,options,'/api/stacks-bookFiltering',res=>{ 
                    if(res.returnCode==200){
                    let lists=res.data.list                 
                        this.isShow = false;
                        this.filterList=this.filterList.concat(lists)
                        if(res.data.lastPage>this.page){
                            $state.loaded()
                        }else{
                            $state.complete()
                        }
                      }else{
                            $state.complete()
                    }
                })
            },
            // handleSearch(){
            //     let options = {
            //         keyWord:this.keyword,
            //         startPage:1,
            //         isHotWorld:1,
            //         bookClassificationid:this.worksClass
            //     }
            //       Post_formData2(this,options,'/api/stacks-search',res=>{
            //         if(res.returnCode==200){
            //             console.log(res.data)
            //               if(res.data.list.length>0){
            //                   this.message = true;
            //                   this.filterList = res.data.list;
            //               }else{
            //                   this.message = false;
            //               }                  
            //         }
            //     })
            // }, 
             up(){
              this.direction1=false;
            },
            up_1(){
              this.direction=false;
            },           
            handleOrder(){
                (this.direction=!this.direction)&&(this.direction1=false)        
            },
            handleFilterBtn(){
                (this.direction1=!this.direction1)&&(this.direction=false)
            },
             getData(res,index,data){
                this.worksClass = res;
                this.changeRed = index;
                this.topList.title_1=data.classificationName
                this.handleFilter();
            },
            getWords(res,index){
                this.worksNum = res;
                this.numRed = index;
                this.handleFilter();
            },
            getTime(res,index){
                this.worksTime =res;
                this.timeRed = index;
                this.handleFilter();
            },
             getStutas(res,index){
                this.worksStatus = res;
                this.statusRed = index;
                this.handleFilter();
            },
            getCategory(res,index){
                this.worksCategory = res;
                this.categoryRed = index;
                this.handleFilter();
            },
             handleClass(){
                this.isShow= true;
                let cate = {
                    id:0,
                    classificationName:'全部'
                }
                noParam_Get(this,'/api/ranking-classification',res=>{
                        this.isShow= false;
                        if(res.returnCode==200){
                            this.classList = res.data;
                            this.classList.unshift(cate);
                         }else{
                            this.$vux.toast.text(res.msg);
                        }                            
                })
            },
             handleFilter(){
                this.isShow= true;
                let options={
                    startPage:1,
                }
                // 分类
                // if (this.worksClass) {
                    options.bookClassificationid = this.worksClass;
                // }
                // 字数
                // if(this.worksNum){
                   options.bookWorldCount = this.worksNum;
                // }
                // 状态
                // if(this.worksStatus){
                   options.bookStatus = this.worksStatus;
                // }
                // 时间
                // if(this.worksTime){
                   options.updateTime = this.worksTime;
                // }
                // 排行榜
                // if(this.worksCategory){
                   options.order = this.worksCategory;
                // }
                Post_formData2(this,options,'/api/stacks-bookFiltering',res=>{                  
                    if(res.returnCode==200){
                        this.isShow = false;
                        if(res.data.list.length>0){
                            this.filterList = res.data.list;
                            this.$router.replace({path:'/categoryDetail',query:{
                               order:this.worksCategory,
                               categoryId:this.worksClass,
                               word:this.worksNum,
                               updateTime:this.worksTime,
                               status:this.worksStatus,
                               classificationName:this.classList[this.changeRed].classificationName
                            }})
                        }else{
                            // this.filterList = [];
                            this.$vux.toast.text('暂无匹配数据!');
                        }
                    }else{
                        this.$vux.toast.text(res.msg);
                    }
                })
            },
             handleClass(){
                this.isShow= true;
                let cate = {
                    id:0,
                    classificationName:'全部'
                }
                noParam_Get(this,'/api/ranking-classification',res=>{
                        this.isShow= false;
                        if(res.returnCode==200){
                            this.classList = res.data;
                            this.classList.unshift(cate);
                            //   this.$nextTick(()=>{
                                for(let i in this.classList){
                                    if(this.classList[i].id==this.worksClass){
                                        this.changeRed=i
                                    }
                                }
                        //    })
                         }else{
                            this.$vux.toast.text(res.msg);
                     }                            
                })
            },
             handleToBookDetail(bookId){
                //  this.setReadBookId(bookId)
                 this.$router.push({path:'/bookDetails',query:{bookId:bookId}});
            }
        },
        mounted(){
            // this.handleFilter()
            this.handleClass()
            this.categoryRed = this.worksCategory
            this.statusRed = this.worksStatus
            this.numRed = this.worksNum
            this.timeRed = this.worksTime
        }
    }
</script>
<style lang='less' scoped>
   @import '../../css/categoryDetail';
</style>
