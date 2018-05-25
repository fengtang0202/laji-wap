<template>
    <div>
        <img src="../../assets/images/bg2.png" alt="" style='width:100%;height.67rem;'>
        <main class='main'>
            <section class='footer_1'>
                <p class='title'>主题介绍</p>
                <p class='info'>新站新气象,
                  为了鼓励更多的喜爱文字创作的朋友讲出心中的 故事,也为了让我们辣鸡这个“小世界”的故事更加的丰富多彩,现在我们向全网征集优秀的原创故事!勇敢的少年,快来创造奇迹！ </p>
            </section>
            <section class='fonter_2'>
                <p class='title' >征集范围</p>
                <div style='margin: 0.1rem 0 .1rem .44rem'>
                    <img @click='handleGo("/city")' style='margin-right:.16rem;' src="../../assets/images/1@3x.png" alt="">
                    <img @click='handleGo("/dream")' src="../../assets/images/2@3x.png" alt="">
                </div>
                <div>
                     <img @click='handleGo("/dimension")' src="../../assets/images/3@3x.png" style='margin-right:.32rem;' alt="">
                     <img @click='handleGo("/rotten")' src="../../assets/images/4@3x.png" alt="">
                </div>
            </section>
            <section class='fonter_3'>
                <p class='title'>作品要求</p>
                <p class='info'>1.深脑洞，欢乐向，疯吐槽，梗玩年！
  本次征文作品不限定任何背景，任何题材，但上述四大元素，行文风格之中，至少满足其中两点，否则将无法正常参与评奖。
  </p>
                   <p class='info'> 2.原创作品，且作者拥有全部版权，预计篇幅超过百万字的长篇小说。</p>
               <p class='info'>
                 3. 作品必须内容积极向上，不得违反国家政策法规，不得抄袭复制，不得涉政涉黄涉黑，不得侮辱民族宗教信仰极其生活习俗，违者取消资格并承担相应后果。
               </p>
            </section>
            <section class='fonter_4'>
                <p class='title'>作品奖励</p>
                <p class='info'>
                    1：全勤调整为：日更3000字奖励600元，一个月最多可使用3 次请假卡。 
                </p>
                <p class='info'>
                     2：获得网站的优先推广、推荐的权利。
                </p>
                <p class='info'>
                    3：获得有声小说、漫画、出版、影视的优先推荐权。
                </p>                
            </section>
            <section class='fonter_5'>
                  <p class='title'>参加流程</p>
                  <p class='info'>
                      作品需要先签约辣鸡小说，然后由责编来进行评选，符合征文 要求即可享受征文奖励。
                  </p>
            </section>
        </main>

    </div>  
</template>
<script>
    export default{
        methods: {
            handleGo(res){
                this.$router.push(res)
            }
        }
    }
</script>
<style lang="less" scoped>
   .main{
       background:-webkit-gradient(linear, 0  0, 0 bottom, from(#5DBCF2), to(#fff)); 
       padding:.1rem;
          .info{
                  color:#333;
                  font-size:.14rem;
                  line-height: .25rem;
                  letter-spacing:2px;
                  text-indent: 2em;
                  word-break: break-all;
              }
               .title{
                 font-size:.18rem;
                 margin:.1rem; 
                 text-align: center
             }
         .fonter_2{
             margin-top:.1rem;
             img{
                 width:1.31rem;
                 height:.88rem;
             }
         }
         .fonter_5{
             padding-bottom:.5rem;
         }       
   }
</style>
