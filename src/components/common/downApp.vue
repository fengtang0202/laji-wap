<template>
   <div class="btn_top" @click="handleIsPhone()">下载APP</div>
</template>
<script>
import {handleIsPhone} from '../../config/common'
     export default{
         data(){
            return{
                handleIsPhone:handleIsPhone
            }
         },
         methods: {
           
         }
     }
</script>
<style lang="less" scoped>
     .btn_top{
                width:.66rem;
                height:.24rem;
                border-radius:5px;
                background:#FB5E6F;
                font-size:.14rem;
                color:#fff;
                text-align:center;
                line-height:.24rem;
                float:left;
                margin:.12rem .14rem 0;
            }
</style>
