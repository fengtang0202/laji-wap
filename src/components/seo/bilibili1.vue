<template>
    <bcommon :bgImg=bgImg :bgbtn=bgbtn channelId='LG20180703003'></bcommon>
</template>
<script>
    import bcommon from './bcommon.vue'
    export default{
        components: {
            bcommon
        },
        data(){
            return{
               bgImg:require('../../assets/images/tgbg1.jpg') ,
               bgbtn:require('../../assets/images/tgbtn1.gif')
            }
        }
    }
</script>