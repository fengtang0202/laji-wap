<template>
    <bbook chandleId='LG20180703010' :p=p :btnImg=btnImg :bgImg=bgImg :bgColor=bgColor :chapterId=chapterId></bbook>
</template>
<script>
  import bbook from '../seo/bbook'
export default {
    data(){
        return{
            bgImg:require('../../assets/images/bb.jpg'),
            bgColor:"linear-gradient( #F6CFDC 0%, #A4E4E3 50%, #FCFCFC 100%)",
            btnImg:require('../../assets/images/cc.jpg'),
            chapterId:[102567,102574],
            p:55
        }
    },
    components: {
        bbook,
    }
}
</script>
<style lang="less" scoped>
       
</style>

