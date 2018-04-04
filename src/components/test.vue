<template>
   <div>
       {{bookList}}
   </div>
</template>
<script>
import {getRecommendBookList} from '../config/getData'
    export default{
        data(){
           return {
               bookList:'',
           }
        },
        mounted () {
            getRecommendBookList().then(res=>{
                this.bookList=res.data.data    
                console.log(this.bookList)
             })
        }
    }
</script>
<style lang="less" scoped>
  
</style>
