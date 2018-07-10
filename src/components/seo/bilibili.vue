<template>
    <bcommon :bgImg=bgImg :bgbtn=bgbtn android='https://www.lajixs.com/apk/app_LG20180703002.apk'></bcommon>
</template>
<script>
    import bcommon from './bcommon.vue'
    export default{
        components: {
            bcommon
        },
        data(){
            return{
               bgImg:require('../../assets/images/tgbg1.jpg'),
               bgbtn:require('../../assets/images/tgbtn1.gif')
            }
        }
    }
</script>

