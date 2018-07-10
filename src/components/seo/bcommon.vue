<template>
   <div class='bg' :style="{backgroundImage: 'url(' + bgImg + ')'}">
       <div class='down'>
          <img :src="bgbtn" @click="handleIsPhone(android,ios)" alt=""> 
       </div> 
   </div>  
</template>
<script>
import cookie from '../../config/cookie'
import {handleIsPhone1} from '../../config/common'
    export default{
         data(){
             return{
               handleIsPhone:handleIsPhone1
             }
         },
         props:{
             bgImg:{
                 type:String,
                 default:''
             },
             bgbtn:{
                 type:String,
                 default:''
             },
             ios:{
                 type:String,
                 default:''
             },
             android:{
                 type:String,
                 default:''
             }
         }
}
</script>
<style lang="less" scoped>
 .bg {
        background-image: url('../../assets/images/tgbg.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 100%;
        width:100%;
        position: absolute;
     .down{
           position: absolute;
           width:100%;
           height:.98rem;
           text-align: center;
           bottom:0;
          img{
            width:2.17rem;
            height:.98rem;
        }
     }
 }

</style>

