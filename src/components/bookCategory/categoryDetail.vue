<template>
    <div class='categoryDetail_wrap'>
        <loading :show="isShow"></loading>        
         <headerComponent :list="topList"></headerComponent>
         <div class='fixbar'>
            <div class="search_top">
            <input type="text" placeholder="搜索作者或者作品" v-model="keyword" >
            <img src="../../assets/images/search@2x.png">
            </div>
         <div class='filter_nav' :class="searchBarFixed == true ? 'isFixed' :''">
            <div class='filter_btn_wrap'  @click='handleOrder()'>
             <span>排行</span>
              <img src="../../assets/images/d-38@3x.png" :style="{ 'transform':direction?'rotate(0deg)':'rotate(180deg)'}" alt="">
            </div>
            <div class='filter_btn_wrap' @click='handleFilterBtn()'>
             <span>筛选</span>
              <img class='filter' :style="{ 'transform':direction1?'rotate(0deg)':'rotate(180deg)'}" src="../../assets/images/d-38@3x.png" alt="">
            </div>
        </div>
        <div class='filter_wrap'>
            <v-touch @swipeup='up_1'>    
         <div class='orderList_wrap'  :style="{'height':direction?'1.3rem':'0'}">
          <div class="select" style="height:1.1rem;">          
           <ul>
              <li style="font-size:.18rem;color:#333;width:.73rem;">排行榜</li>
              <li v-for = '(item,index) in category' :class="{ red:categoryRed == index}" :key='index' @click="getCategory(item.key,index)"><span v-html="item.name"></span></li>        
           </ul>
        </div>
         </div>
            </v-touch>
        <v-touch @swipeup='up'>         
         <div class='orderList_wrap'  :style="{'height':direction1?'3.5rem':'0'}">
             <div class="select" style="height:1.4rem;">          
                <ul>
                    <li style="font-size:.18rem;color:#333;width:.73rem;">作品类别</li>
                    <li v-for="(item,index) in classList" :key='index' :class="{ red:changeRed == index}" @click="getData(item.id,index)"><span v-html="item.classificationName"></span></li>             
                </ul>
             </div>
            <div class="select" style="height:.8rem;">          
           <ul>
              <li style="font-size:.18rem;color:#333;">作品字数</li>
              <li v-for="(item,index) in words" :key='index' :class="{ red:numRed == index}" @click="getWords(item.key,index)"><span v-html="item.name"></span></li>
           </ul>
          </div>
          <div class="select" style="height:.5rem;">          
           <ul>
              <li style="font-size:.18rem;color:#333;">作品状态</li>
              <li v-for="(item,index) in status" :key='index' :class="{ red:statusRed == index}" @click="getStutas(item.key,index)"><span v-html="item.name"></span></li>        
           </ul>
         </div>
        <div class="select" style="height:.8rem;">          
           <ul>
              <li style="font-size:.18rem;color:#333;">更新时间</li>
              <li v-for="(item,index) in time" :key='index' :class="{ red:timeRed == index}" @click="getTime(item.key,index)"><span v-html="item.name"></span></li>
           </ul>
        </div>
         </div>
        </v-touch>
        </div>
        </div>
         <div class="book_text" v-for="(item,index) in filterList" :key='index'>
            <img :src="item.bookImage">
            <div class="con-text">
               <p class="p_one" v-html="item.bookName"></p>
               <p class="p_two"><span>作者 : </span>
               <span  v-html="item.writerName" style="margin-left:.05rem;margin-right:.05rem;"></span>
               <span v-html="item.classificationName"></span>
               <span style='color:#57B0FF;margin-left:.03rem;'>{{item.bookStatus===0?'连载中':''}}</span>
               </p>
               <p class="p_three" v-html="item.bookIntroduction"></p>
            </div>
        </div> 
    </div>
</template>
<script>
import headerComponent from '@/components/common/header'
import { Post_formData2, noParam_Get } from '@/config/services'
import { Loading } from 'vux'
import { setTimeout } from 'timers';
    export default {
        components:{
           headerComponent,Loading
        },
        data(){
            return{
                topList:{
                    title_1:this.$route.query.classificationName,
                    title_2:'首页',
                    link:'/home'
                },
                filterList:[],
                keyword:'',
                direction:false,
                direction1:false,
                worksClass:'',
                categoryId:this.$route.query.categoryId,
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
                    {name:"200万",key:5}
                ],
                 status:[
                    {name:"不限",key:0},
                    {name:"连载中",key:1},
                    {name:"已完结",key:2},
                ],
                time:[
                    {name:"不限",key:0},
                    {name:"本日",key:1},
                    {name:"三日",key:2},
                    {name:"七日",key:3},
                    {name:"半个月",key:4},
                    {name:"一月内",key:5},
                ]
            }
        },
        methods:{
            handleOrder(){
                (this.direction=!this.direction)&&(this.direction1=false)        
            },
            handleFilterBtn(){
                (this.direction1=!this.direction1)&&(this.direction=false)
            },
             getData(res,index){
                this.worksClass = res;
                this.changeRed = index;
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
                console.log(this.worksTime);
                this.handleFilter();
            },
            up(){
              this.direction1=false;
            },
            up_1(){
              this.direction=false;
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
                    startPage:1
                }
                // 分类
                if (this.worksClass) {
                    options.bookClassificationid = this.worksClass;
                }
                // 字数
                if(this.worksNum){
                   options.bookWorldCount = this.worksNum;
                }
                // 状态
                if(this.worksStatus){
                   options.bookStatus = this.worksStatus;
                }
                // 时间
                if(this.worksTime){
                   options.updateTime = this.worksTime;
                }
                // 排行榜
                if(this.worksCategory){
                   options.order = this.worksCategory;
                }
                Post_formData2(this,options,'/api/stacks-bookFiltering',res=>{                  
                    if(res.returnCode==200){
                        this.isShow = false;
                        if(res.data.list.length>0){
                            this.filterList = res.data.list;
                        }else{
                            this.filterList = [];
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
                         }else{
                            this.$vux.toast.text(res.msg);
                        }                            
                })
            },
             
        },
        mounted(){
            this.handleFilter()
            this.handleClass()
        }
    }
</script>
<style lang='less' scoped>
   .categoryDetail_wrap{
       width:100%;
       font-size:.16rem;
       .search_top{
            height:.36rem;
            box-sizing:border-box;
            padding: 0 .14rem;
            margin-top:.1rem;
            img{
                width:.2rem;
                height:.2rem;
                position:absolute;
                top:.62rem;
                left:.25rem;
            }
            input{
                width:3.48rem;
                height:.36rem;
                border-radius:8px;
                border:1px solid #979797;
                outline:none;
                box-sizing:border-box;
                padding-left:.4rem;
                color:#999;
                font-size:.16rem;
            }
            span{
                font-size:.18rem;
                color:#F77583;             
                margin-left:.05rem;
            }
        }
        .filter_nav{
            height:.5rem;
            border-bottom:1px solid #E9E9E9;
            .filter_btn_wrap {
                width:.7rem;
                height:.25rem;
                display:inline-block;
                margin:.125rem 0 0 .85rem;
            }
            img{
                width:.15rem;
                height:.15rem;
                transition:.5s;
            }      
         }
        .filter_wrap{
            position: relative;
            .orderList_wrap{
                height:1.3rem;
                width:100%;
                transition:all .5s linear;
                overflow: hidden;
                position: absolute;
                background-color: #fff;
                top:0;
                left:0;  
                .select{
                    border-bottom:1px solid #e9e9e9;
                    box-sizing:border-box;
                    padding:.12rem;
              li{
                font-size:.16rem;
                color:#999;
                float:left;
                margin-right:.22rem;
                height:.2rem;
                margin-bottom:.1rem;
                list-style: none;
               }
             .red{
                color:#FB5E6F;
               }
              }          
            }
        }
        .book_text{
            height:1.3rem;
            box-sizing:border-box;
            margin-top:.14rem;
            margin-left:.14rem;
            img{
                width:.8rem;
                height:1.02rem;
                margin-right:.16rem;
                float:left;
            }
            .con-text{
                float:left;
            }
            .p_one{
                font-size:.16rem;
                color:#333;
                margin-bottom:.1rem;
            }
            .p_two{
                font-size:.12rem;
                color:#999;
                margin-bottom:.12rem;
                span:not(:first-child):not(:last-child):after{
                   content:'';
                   display: inline-block;
                   width:.02rem;
                   height:.1rem;
                   margin-left:.1rem;
                   background-color: #FFAAAA;
                }
            }
            .p_three{
                width:2.47rem;
                font-size:.14rem;
                color:#666;
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
   }
</style>
