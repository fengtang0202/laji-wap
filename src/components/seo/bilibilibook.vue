<template>
    <bbook chandleId='LG20180703012' :bgImg=bgImg :bgColor=bgColor chapterId='91365'></bbook>
</template>
<script>
import bbook from '../seo/bbook'
export default {
    data(){
        return {
            bgImg:require('../../assets/images/bookbg1.jpg'),
            bgColor:"linear-gradient( #bdd8f4 0%, #fdf3e6 50%, #a5cefb 100%)"
        }
    },
    components: {
        bbook
    }
}
</script>
<style lang="less" scoped>
       
</style>

