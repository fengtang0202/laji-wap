<template>
     <div class='header'>
         <div @click="$router.go(-1)">
             <img src="../../assets/images/back@2x.png" style='width:.4rem;heigh:.4rem;vertical-align: middle;' alt="">
         </div>    
         <div class='title_1'>{{list.title_1}}</div>
         <router-link class='title_2' @click='hanldeIndex()' :to='list.link'>{{list.title_2}}</router-link>
     </div>
</template>
<script>
import {mapActions} from 'vuex'
      export default {
           data(){
               return{
                 
               }
           },
           props:["list"],
           methods:{
               ...mapActions(['changeIndex']),
              hanldeIndex(){
                  
              } 
           },
           mounted () {
              
           }
      }
</script>
<style lang='less' scoped >
  .header{    
            height:.44rem;
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            border-bottom:.01rem solid #E9E9E9;
             .title_1{
              font-size: .18rem;
          }
          .title_2{
              font-size: .14rem;
              color:#F77583;
              line-height: .44rem;
              margin-right:.3rem;
          }
         div{
            margin:auto .1rem;       
          }
        }
</style>
