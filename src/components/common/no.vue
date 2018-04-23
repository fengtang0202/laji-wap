<template>
   <div  class='no_content'>
      {{message}}
   </div>  
</template>
<script>
    export default {
        props:[
            'message'
        ]        
    }
</script>
<style lang="less" scoped>
    .no_content{
        text-align:center;
        margin-top:50%;
        color:#999;
    }
</style>
