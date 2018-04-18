<template>
<div>      
     <div class="comments_d" @click='handleCommentDetail(i)' :key='index' v-for="(i,index) in list">
                  <div style="overflow:hidden;height:100%;margin-top:.1rem;">
                        <img :src="i.userHeadPortraitURL" class="oImg">
                        <img src="../../assets/images/crown@3x.png" class="t-img">
                        <div class="con_r">
                            <div style="margin-bottom:.1rem;">
                                <span class="name" v-html="i.pseudonym"></span>
                                <img src="../../assets/images/sex-02_03@3x.png" class="sex" v-if="i.userSex==0">
                                <img src="../../assets/images/sex-03@3x.png" class="sex" v-if="i.userSex==1">
                                <p class="grade">lv{{i.userGrade}}</p>
                            </div>
                            <div class="text_con" v-html="i.commentContext">
                            </div>
                            <div style="height:.2rem;margin-bottom:.1rem;color:#999;">
                               <p class="r_p">
                               <img   @click='handel()' src="../../assets/images/goodzan@3x.png" alt="">
                               <span v-html="i.thumbsCount" style='margin-right:.36rem;'></span>
                                <img src="../../assets/images/message@3x.png" alt="">
                                <span v-html="i.replyCount"></span>
                               </p>
                            </div>
                        </div>
                  </div>
              </div>
    </div>
</template>
<script>
    import {mapState,mapActions} from 'vuex'
      export default{
          props: {
            list: {
            type: Array,
            default: []
            }
        },
        methods:{
            ...mapActions(['setReadCommentInfo']),
            handleCommentDetail(item){
                this.setReadCommentInfo(item)
                this.$router.push({path:'/bookCommentDetail',query:{bookId:this.readBookId}})
            }
        }
      }
</script>
<style lang="less" scoped>
 .comments_d{
                box-sizing:border-box;
                padding:0 .14rem;
                height:1rem;
                // overflow: hidden;
                border-bottom:1px solid #e9e9e9;                
                .oImg{
                    width:.38rem;
                    height:.38rem;
                    border-radius:50%;
                    margin-top:.1rem;
                    // position:relative;
                }
                .t-img{
                    width:.22rem;
                    height:.22rem;
                    position:absolute;
                    left:.3rem;
                    // top:0rem;
                    z-index:99;
                }
                .con_r{
                    float:right;
                    width:2.92rem;
                    height:100%;
                    .grade{
                      display:inline-block;
                      font-size:8px;
                      background:#7FFFD4;
                      color:#fff;
                      height:.14rem;
                      line-height:.14rem;
                      border-radius:4px;
                      padding:0  .02rem;
                      font-family:"MT-Extra"; 
                      margin-left:.05rem;
                      margin-top:-.05rem; 
                    }
                }
                .name{
                    color:#666;
                    font-size:.16rem;
                    margin-right:.05rem;
                }
                .sex{
                    width:.12rem;
                    height:.12rem;
                }
                .text_con{
                    height:.4rem;
                    color:#333;
                    font-size:.12rem;
                    overflow : hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .r_p{
                    float:right;
                    margin-right:.16rem;
                    margin-bottom:.1rem;
                    img {
                      width:.16rem;
                      height:.16rem;
                    }
                 
                }
            }
</style>

