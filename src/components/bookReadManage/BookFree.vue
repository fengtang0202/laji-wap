<template>
<div>
    <div id="free">
      <div v-if='showContent'>
              <bookItem :list='freeList'></bookItem>
      </div>
    </div>
     <No v-if='!showContent'></No>
     <!-- <div>目前暂无更多书籍</div> -->
    </div>
</template>
<script>
    import { Loading } from 'vux'
    import { Post_formData2, noParam_Get } from '@/config/services'
     export default {
        name: 'free',
        data () {
            return {
               freeList:[],
               showContent:true
            }
        },
        components: {
            Loading
        },
        methods:{
            handleMore(){
                noParam_Get(this,'/api/sys-freetimelimit',res=>{
                    if(res.returnCode==200){
                           this.freeList = res.data.data;
                           this.showContent=true
                           this.isShow=false
                    }else{
                        this.showContent=false
                        this.isShow=false
                    }
                })
            },
            handleGo(id){
                this.$router.push({path:'/bookdetails',query:{bookId:id}})
            }
        },  
      mounted () {
          this.handleMore()
      }
    }
</script>

<style lang="less" scoped>  
    #free{
        width:100%;
        box-sizing:border-box;
        border-top:3px solid #E9E9E9;
        font-family:'PingFangSC-Regular';
        padding-bottom: .5rem;
    }
</style>