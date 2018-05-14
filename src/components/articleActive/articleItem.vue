<template>
   <div class='main'>
            <p class='title'>{{headTitle}}</p>
        <div v-for='item in articleList'>
            <p class='title' style='margin-bottom:.13rem'>{{item.title}}</p>
            <p class='info'>
                {{item.content}}
            </p>
            <ul>
            <li>列文:</li>
            <li v-for='i in item.dataList'>{{i}}</li>
         </ul>
        </div>
          
   </div>
</template>
<script>
    export default{
        data(){
            return{
              
            }
        },
        props:{
             headTitle:{
                 type:String,
                 default:''
             },
            articleList:Array,
            default:[]
        }
    } 
</script>
<style lang="less" scoped>
   .main{
       background:-webkit-gradient(linear, 0  0, 0 bottom, from(#5DBCF2), to(#fff)); 
       padding:.3rem .1rem;  
        .info{
                  color:#333;
                  font-size:.14rem;
                  line-height: .25rem;
                  letter-spacing:2px;
                  text-indent: 2em;
                  word-break: break-all;
              }
                      ul{
                          font-size:.14rem;
                          overflow: hidden;
                          margin-top:.2rem;
                          li{
                              list-style: none;
                              float: left;
                              
                          }
                      }
               .title{
                 font-size:.18rem;
                 margin-top:.1rem; 
                 text-align: center
             }    
   }
</style>
