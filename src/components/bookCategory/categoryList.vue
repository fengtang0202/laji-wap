<template>
  <div class='category_wrap'>
     <loading :show="isShow"></loading>
     <!-- <div class="category_item_wrap" @click='handleToDetail(item.id,item.classificationName)' :key='index' v-for="(item,index) in categoryList">
         <img  class='categoryPic' :src="item.classificationIco" alt="">
         <span>{{item.classificationName}}</span>
     </div> -->
     <div class='biaoqian'>
         <p style='font-size:.16rem;'>本周热门</p>
         <ul class='hots'>
             <li v-for="(item,index) in hots" @click='handleToDetail(item.id,item.bookLableName)' :style="{marginRight:index==2&&'0'}" :key='index'>
                 <img :src="item.img" alt="">
                 <span :style='{width:item.bookLableName.length==3&&".43rem",top:item.bookLableName.length!=4&&".18rem"}'>{{item.bookLableName}}</span>
             </li>
         </ul>
         <p style='font-size:.16rem;color:'>更多标签</p>
         <ul class='tabs'>
             <li v-for='(item,index) in tabs' @click='handleToDetail(item.id,item.bookLableName)' :key='index'  :style='{border:"2px solid"+item.bookColor,color:item.bookColor}'>
                   {{item.bookLableName}}
                     <i class='gl' :style='{color:item.bookColor}'>.></i>
             </li>
         </ul>
     </div>
  </div>
</template>
<script>
    import { Loading } from 'vux'
    import { Post_formData2, noParam_Get } from '@/config/services'
    export default{
        components:{
            Loading
        },
           data(){
               return {
                   isShow:false,
                   categoryList:[],
                   hotImg:[
                      require('../../assets/images/Group 11@3x.png'),
                      require( '../../assets/images/Group 15@3x.png'),
                      require('../../assets/images/Group 16@3x.png'),
                   ],
                   hots:[],
                   tabs:[]
               }
           },
          mounted(){
             this.isShow=true;
            //  noParam_Get(this,'/api/ranking-classification',res=>{
            //      if(res.returnCode==200){
            //          this.isShow=false;
            //          this.categoryList=res.data
            //      }else{
            //         // this.$vux.toast.text(res.msg);
            //      }
            //  })
            noParam_Get(this,'/api/stacks-hotLableVersionTow',res=>{
                if(res.returnCode==200){
                    this.isShow=false;                    
                    this.hots=res.data.slice(0,3)
                    for(var i=0;i<this.hots.length;i++){
                        this.hots[i].img=this.hotImg[i]
                    }
                    this.tabs=res.data.slice(3)
                }
            })
           },
         methods: {
             handleToDetail(res,name){
                this.$router.push({path:'/categoryDetail',query:{categoryId:res,classificationName:name,order:3,word:0,status:0,updateTime:0}})
             }
          }
       }
</script>
<style lang='less' scoped>
@font-face {
    font-family: "DFPHaiBaoW12-GB";
    src: url('../../../static/fonts/DFPHaiBaoW12-GB.ttf');
}
    .category_wrap{
        width:100%;
        // font-family: 'DFPHaiBaoW12-GB';
        border-top:3px solid #E9E9E9;
        .category_item_wrap{
             width:.76rem;
             height:1.12rem;
             display:inline-block;
             text-align: center;
             font-size: 16px;
             margin:.16rem 0 0 .16rem;
            }
            .categoryPic{
                width:.74rem;
                height:.74rem;             
            }
    }
    .biaoqian{
        padding:.08rem .14rem;
    }
    .hots{
        overflow: hidden;
        margin-top:.17rem;
        margin-bottom:.24rem;
        li{
           list-style: none;
           float: left;
           width:1rem;
           height:.44rem;
           margin-right:.23rem;
           position: relative;
           span{
               position: absolute;
               top:.12rem;
               left:.12rem;
               width:.3rem;
               font-size:.14rem;
               line-height: 1;
               color:#fff;
               font-family: "DFPHaiBaoW12-GB";   
           }
        }
        img{
            width:1rem;
            height:.44rem;  
        }
    }
    .tabs{
        overflow: hidden;
        li{
            list-style: none;
            float: left;
            width: .8rem;
            height:.33rem;
            // line-height: .33rem;
            padding-top:.05rem;
            text-align: center;
            border-radius: 33px;
            margin-top:.18rem;
            margin-right:.08rem;
            position: relative;
            font-size:.14rem
        }
        li:nth-child(4n){ 
           margin-right:0
       } 
    }
    .arrow{
        width:.2rem;
        height:.2rem;
        text-align: center;
        line-height: .2rem;
        position: absolute;
        top:-.1rem;
        left:.14rem;
        background: #fff;
    }
   .gl{
       position: absolute;
       background: #fff;
       top:-.13rem;
       left:.2rem;
       transform: rotate(50deg);
       font-weight: 600;
   }
</style>
