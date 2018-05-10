<template>
   <div>
       {{bookList}}
   </div>
</template>
<script>
import {getRecommendBookList,login} from '../config/getData'
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
