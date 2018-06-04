<template>
 <div class='main'>
     <!-- <div class='header'>
        <img src="../../assets/images/a_back.png"  alt="">
        辣鸡二次元主题征文活动
     </div> -->
     <div class='bg'>
          <ul class='nav'>
              <li v-for='(li,index) in navList' :key='index' @click='jump(index)' :class="{isAdd:homeIndex===index}">
                 <!-- <a :href="'#'+li.a">{{li.title}}</a> -->
                 <span>{{li.title}}</span>
              </li>
          </ul>
     </div>
     <div class='content'>
              <div id='a' >
                  <img  style='width:1.16rem;height:.4rem;' src="../../assets/images/ztjs@2x.png" alt="">
                  <p class='top'>
                    新站新气象，为了鼓励更多的喜爱文字创作的朋友讲出心中的故事<br>
                    也为了让我们辣鸡这个“小世界”的故事更加的丰富多彩，现在我们<br>
                    向全网征集优秀的原创故事！勇敢的少年，快来创造奇迹!
                  </p>
              </div>
              <div id='b' >
                   <img src="../../assets/images/zpyq.png" style='width:1.56rem;height:.4rem' alt="">
                   <p class='top'>
                        1、深脑洞，欢乐向，疯吐槽，梗玩年！
                            本次征文作品不限定任何背景，任何题材，但上述四大元素，
                            行文风格之中，至少满足其中两点，否则将无法正常参与评奖。
                            参与时，在辣鸡后台或app新建作品时勾选【辣鸡开站征文辣！
                            】相应征文主题即可参赛。<br>
                        2、原创作品，且作者拥有全部版权，预计篇幅超过百万字的长篇
                        小说。<br>
                        3、作品必须内容积极向上，不得违反国家政策法规，不得抄袭复
                        制，不得涉政涉黄涉黑，不得侮辱民族宗教信仰极其生活习俗，违
                        者取消资格并承担相应后果。
                   </p>
              </div>
              <div id='c' >
                   <img src="../../assets/images/zjfw.png" style='width:.75rem;height:.4rem' alt="">
                    <p class='top'></p>
                  <div>
                      <img src="../../assets/images/btn1.png"  @click='handleGo("/city")'  alt="">
                      <img src="../../assets/images/btn2.png" @click='handleGo("/dream")' alt="">
                  </div>
                  <div>
                      <img src="../../assets/images/btn3.png" @click='handleGo("/dimension")' alt="">
                      <img src="../../assets/images/btn4.png"  @click='handleGo("/rotten")' alt="">
                  </div>
              </div>
              <div id='d' >
                 <img src="../../assets/images/zpjl.png" style='width:.95rem;height:.4rem' alt="">
                 <p class='top'>
1、全勤调整为：日更3000字奖励600元，一个月最多可使用3次
     请假卡。<br>
2、获得网站的优先推广、推荐的权利。<br>
3、获得有声小说、漫画、出版、影视的优先推荐权。
                 </p>
              </div>
              <div id='e' >
                 <img src="../../assets/images/cslc.png" style='width:2.57rem;height:.4rem' alt="">
                 <p class='top'>
                   作品需要先签约辣鸡小说，然后由责编来进行评选，符合征文要求即可享受征文奖励。
                 </p>
              </div>
     </div>
 </div>
</template>
<script>
     export default{
         data(){
             return{
                 navList:[
                     {title:'主题介绍'},
                     {title:'作品要求'},
                     {title:'征集范围'},
                     {title:'作品奖励'},
                     {title:'参赛流程'}                     
                 ],
                 homeIndex:0                    
            }
        },
        methods:{
            changeIndex(){
                    let jump = document.querySelectorAll('.top')
                    let distance = document.documentElement.scrollTop || document.body.scrollTop
                    console.log(distance)
              },
           jump (index) {
                    this.homeIndex=index
                    this.$router.replace({path:'/articleActive#'+index,})
                    let jump = document.querySelectorAll('.top')
                    let total = jump[index].offsetTop-100
                    let distance = document.documentElement.scrollTop || document.body.scrollTop
                    // 平滑滚动，时长500ms，每10ms一跳，共50跳
                    let step = total / 50
              if (total > distance) {
                   smoothDown()
              } else {
                    let newTotal = distance - total
                    step = newTotal / 50
                    smoothUp()
              }
              function smoothDown () {
                   if (distance < total) {
                    distance += step
        　　　　　　　document.body.scrollTop = distance
                     document.documentElement.scrollTop = distance
                     setTimeout(smoothDown, 10)
                 } else {
                    document.body.scrollTop = total
                    document.documentElement.scrollTop = total
                  }
                }
                function smoothUp () {
                if (distance > total) {
                    distance -= step
        　　　　　　　document.body.scrollTop = distance
                     document.documentElement.scrollTop = distance
                     setTimeout(smoothUp, 10)
                } else {
                    document.body.scrollTop = total
                    document.documentElement.scrollTop = total
                        }
                    } 
            },
              handleGo(res){
                this.$router.push(res)
            },
            getIndex(){
              let i =this.$route.fullPath
               switch(i){
                   case '/articleActive#0':
                     this.homeIndex=0;
                     break;
                   case '/articleActive#1':
                     this.homeIndex=1
                     break;
                    case '/articleActive#2' :
                     this.homeIndex=2
                     break;
                      case '/articleActive#3' :
                     this.homeIndex=3
                     break;
                      case '/articleActive#4' :
                     this.homeIndex=4
                     break;
               } 
            }
         },
         mounted () {
             this.getIndex()
            //  this.changeIndex()
             window.addEventListener("scroll",this.changeIndex)
         }
     }
</script>
<style lang="less" scoped>
@font-face {
    font-family: "DFPHaiBaoW12-GB";
    src: url('../../../static/font/DFPHaiBaoW12-GB.ttf');
}
   .main{
       color:#DCDCDC;
       .header{
           text-align:center;
           font-size:.16rem;
           height:.44rem;
           line-height: .44rem;
           color:#333333;
       }
       .bg{
           width:100%;
           height:2.7rem;
           background-image:url("../../assets/images/zwbg.png"); 
           background-repeat:no-repeat; 
           background-size:100% 100%;
           -moz-background-size:100% 100%;
           .nav{
               width:100%;
                height:.37rem;
                line-height: .37rem;
                background:rgba(0,0,0,.5);
                text-align: center;
                position: fixed;
               li{
                   float: left;
                   list-style: none;
                   width:20%;
                   height:.37rem;
                   text-align: center;
                   border-radius: .05rem;
                   span{
                       font-size:.14rem;
                       color:#fff;
                       font-family: "DFPHaiBaoW12-GB";    
                   }
               }
                  .isAdd{
                    background: linear-gradient(to top,#2825AA ,#4B81DD ,#423CB8);
                }
           }
        }
        .content{
            background: #03031F;
            padding:.1rem .17rem;
            font-size:.12rem;
            letter-spacing:.01rem; 
            .top{
                margin-bottom:.33rem; 
            }
            .top::before{
                content:'';
                display: block;
                background-color: #fff;
                width:.59rem;
                height:.025rem;
                margin-top:.205rem;
                margin-bottom:.17rem;
           }
           #c{
               margin-bottom:.33rem;
               div{
                  text-align: center;
               }
               img{
                   width:1.42rem;
                   height:.88rem;
               }
           }
        }

   }
</style>
