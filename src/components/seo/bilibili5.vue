<template>
    <bcommon :bgImg=bgImg :bgbtn=bgbtn channelId='LG20180703007'></bcommon>
</template>
<script>
    import bcommon from './bcommon.vue'
    export default{
        components: {
            bcommon
        },
        data(){
            return{
               bgImg:require('../../assets/images/tgbg.jpg') ,
               bgbtn:require('../../assets/images/tgbtn.gif')
            }
        }
    }
</script>