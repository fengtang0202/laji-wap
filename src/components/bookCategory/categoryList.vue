<template>
  <div class='category_wrap'>
     <!-- <loading :show="isShow"></loading> -->
     <div class="category_item_wrap" @click='handleToDetail(item.id,item.classificationName)' :key='index' v-for="(item,index) in categoryList">
         <img  class='categoryPic' :src="item.classificationIco" alt="">
         <span>{{item.classificationName}}</span>
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
                   categoryList:[]
               }
           },
          mounted(){
             this.isShow=true;
             noParam_Get(this,'/api/ranking-classification',res=>{
                 if(res.returnCode==200){
                     this.isShow=false;
                     this.categoryList=res.data
                 }else{
                    // this.$vux.toast.text(res.msg);
                 }
             })
           },
         methods: {
             handleToDetail(res,name){
                this.$router.push({path:'/categoryDetail',query:{categoryId:res,classificationName:name,order:0,word:0,status:0,updateTime:0}})
             }
          }
       }
</script>
<style lang='less' scoped>
    .category_wrap{
        width:100%;
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
</style>
