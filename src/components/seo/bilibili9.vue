<template>
    <bbook chandleId='LG20180703011' :bgColor='bgColor' :bgImg='bgImg' chapterId='7362'></bbook>
</template>
<script>
import bbook from '../seo/bbook'
export default {
    data(){
    return{
      bgImg:require('../../assets/images/bookbg.jpg') ,
      bgColor:'linear-gradient(to bottom, #B3EAFF, #f6f4fd 50%, #FFF8FF)'   
    }
    },
    components: {
        bbook
    }
}
</script>

