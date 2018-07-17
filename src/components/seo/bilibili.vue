<template>
    <bcommon :bgImg=bgImg :bgbtn=bgbtn android='https://www.lajixs.com/api/appDownLoad?channelid=LG20180703002'></bcommon>
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

