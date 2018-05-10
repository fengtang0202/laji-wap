<template>
  <div class='gradeSystem'>
      <headerComponent :list='topList'></headerComponent>
     <div>
       <!-- <tab :line-width=2 active-color='#F77583' v-model="index">
         <tab-item class="vux-center" :selected="content === index" v-for="(item, index) in navlist" @click="content=index" :key="index">{{item}}</tab-item>
      </tab> -->
      <div class='tab'>
          <div v-for='(item,index) in navlist' :class='{add:content==index}' @click='handleTap(index)'  :key='index'>
             {{item}}
          </div>
      </div>
          <div class="" v-if='content==0'>
             <ul class='list'>
                 <li>
                     <span>级别</span>
                     <span>所需积分</span>
                 </li>
                 <li v-for='(item,index) in gradeList' :key='index'>
                     <span>{{item.fansLevel}}</span>
                     <span>{{item.fansIntegral}}</span>
                 </li>
             </ul>
          </div>
          <div class="" v-if='content==1'>
             <ul class='list'>
                 <li v-for='(item,index) in scoreList'  :key='index'>
                     <span>{{item.title}}</span>
                     <span>{{item.values}}</span>
                 </li>
             </ul>
          <p class='tips'>
             <img src="../../assets/images/gradeS@3x.png" alt="">{{message}}
          </p>
          </div>
    </div>
  </div>
</template>
<script>
    import {Param_Get_Resful} from '@/config/services'
     export default {
         data(){
             return {
                 topList:{
                     title_1:'等级制度',
                     title_2:'首页',
                     link:'/'
                 },
                    navlist:['等级制度','积分规则'],
                    content:0,
                    gradeList:[],
                    scoreList:[],
                    message:'',
              }    
         },
         methods: {
            handleTap(index){
               this.content=index
            //    this.show=!this.show
             }
         },
         mounted () {
             Param_Get_Resful(this,'/api/getUserLevenInfo',res=>{
                 if(res.returnCode==200){
                     this.gradeList=res.data
                 }
             })
             Param_Get_Resful(this,'/api/getUserLevenInfoSource',res=>{
                 if(res.returnCode===200){
                   this.scoreList=res.data.sorceInfo
                   this.message=res.data.explainInfo
                 }
             })
         }
     }
</script>
<style lang='less'>
.tab{
    height:.44rem;
    width:100%;
    border:1px solid #e9e9e9;
    div{
        width:50%;
        text-align: center;
        float: left;
        height:.44rem;
        line-height: .44rem;
    }
    .add{
        border-bottom:2px solid #F77583;
        color:#F77583;
    }
}
     .gradeSystem{
         height:100%;
         width:100%;
          li{
              list-style: none;
          }
          .list{
              li{
                  color:#333;
                  font-size:.14rem;
                  height:.46rem;
                  line-height: .46rem;
                  border-bottom:1px solid #e9e9e9;
                  span{
                    display:block;
                    width:50%;
                    float:left;
                    text-align: center;
                  }
              }
          }
          .tips{
              padding:0.3rem;
              font-size:.14rem;
              color:#4b4b4b;
              img{
                  width:.16rem;
                  height:.16rem;
              }
          }
         }
</style>
