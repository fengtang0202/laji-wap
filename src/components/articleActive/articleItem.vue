<template>
     <div class='main'>
          <div class='header'>
                {{headTitle}}
                 <div  class='back' @click='$router.go(-1)'>
                    <img  src="../../assets/images/a_back.png"  alt="">
                 </div>
          </div>
          <div class='content'>
            <ul class='nav'>
                <li :style='{"width":width,"margin":articleList.length==1&&"0 auto","float":articleList.length>1&&"left"}'   v-for='(li,index) in articleList' :key='index' class='li' @click='handleTap(index)' :class="{isAdd:homeIndex===index}">{{li.title}}</li>
            </ul>
            <p v-html='articleList[homeIndex].content' style='letter-spacing:.2em; margin-left:.16rem'></p>
            <ul class='books'>
                 <li>列文:</li>
                 <li v-for='(li,index) in articleList[homeIndex].dataList' style='float:left' :key='index'>{{li}}</li>
            </ul>
          </div>
     </div>
</template>
<script>
    export default{
        data(){
            return{
                homeIndex:0,
                list:['平行都市','日常都市','超现实都市'],
                books:["《变身之萝莉主播》","《变身透视校花》","《大牧场主》","《我在东瀛画工口本子》","《我在日本当轻小说大师》","《东京影姬》","《女装大佬》"]}
        },
        methods: {
            handleTap(index){
                this.homeIndex=index
            }  
        },
        props:{
           articleList:{
               type:Array,
               default:[],
           },
           headTitle:{
               type:String,
               default:''
           },
           width:{
               type:String,
               default:''
           }
        }
    } 
</script>
<style lang="less" scoped>
  .main{
       li{
              list-style: none;
            //   float: left;
              font-size:.14rem;
              color:#DCDCDC;
          }
      .header{
          width:100%;
          height:.44rem;
          position: relative;
          text-align: center;
          line-height: .44rem;
          font-size:.16rem;
          .back{
              height:.44rem;
              width:.44rem;
              img{
                  width:.13rem;
                  height:.21rem;
                  vertical-align: middle;
                }
                position: absolute;
                left:0;
                top:0;
          }
      }
      .content{
          background-color: #03031F;
          height:100vh;
          font-size: .12rem;
          color:#DCDCDC;
        .nav{
          text-align: center;
          height:.32rem;
          background-color:rgba(0, 0,0 ,.5);
          line-height: .32rem;
          margin-bottom: .25rem;
          li{
              color:#fff;
              margin:0 auto;
          }
         .isAdd{
             border-bottom:2px solid #4C86E8;
             color:#4C86E8;
         }
       }
       .books{
           margin-top:.3rem;
           padding:0 .16rem;
         li{
             font-size: .12rem;
         }
       }
    }
  }
</style>


