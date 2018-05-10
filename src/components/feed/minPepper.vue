<template>
    <div id="feed">
        <div class="page_mcbg" @click="handleClose()" v-show="backShow"></div>
        <div class="glod_div"  :class='{show:dilogShow}'>
            <div class='goldpepper'>投喂小米椒</div>
            <p class='computerd'>您的小米椒余额:{{money}}</p>
            <div class="oDiv">
            <p class="op"  @click="subtract()" :class="{off:number==1||number==0}">—</p>
            <p class='pan'>{{number}}</p>
            <p class="op"  @click='handleAdd()'>＋</p>
            <p class="op" @click='number=userInfo.userRecommendTicket' style="margin-left:.15rem;">ALL</p>                 
              <button class="btn" @click='handleReword()'>投喂</button> 
            </div>
        </div>
    </div>
</template>

<script>
    import { Group, XNumber,XButton, Box} from 'vux'
    import {mapState} from 'vuex'
    import { Post_formData2} from '@/config/services'
    import {refshUserInfo} from '../../config/getData'
    export default {
        name: 'feed',
        data () {
            return {
                num:'',
                number:1,
                backShow:false,
                dilogShow:false,
                money:0
            }
        },
        props:['param'],
        components: {
            XNumber,
            Group,
            XButton,
            Box,
        },
        computed : {
            ...mapState(['userInfo','isLogin'])
        },
        methods: {
            change (val) {
                console.log('change', val)
            },
            subtract(){
                if(this.number==1||this.number==0){
                    return false
                }
                this.number--;
            },
            handleAdd(){
                if(this.number==99){
                  return false
                }
                this.number++;
            },
            handleClose(){
                this.backShow = !this.backShow;
                this.dilogShow = !this.dilogShow;                
            },
            handleReword(){
               let options = {
                   recommendTicketCount	: this.number,
                   bookid:this.$route.query.bookId,                   
                   bookName:this.param.bookName,
                   authorId:this.param.authorId
                  }
                    Post_formData2(this,options,'/api/user-RecommendationTicket',res=>{                        
                      if(res.returnCode===200){
                       this.$vux.toast.show({text:res.msg}) 
                    //    这里是有点问题的
                       this.userInfo.userRecommendTicket-=this.number                    
                       this.money-=this.number
                       refshUserInfo()
                       this.backShow = false;
                       this.dilogShow = false;
                        }else if(res.returnCode==500){
                          this.$vux.toast.show({text:res.msg,type:'cancel'}) 
                          this.backShow = false;
                          this.dilogShow = false;
                        }
                        // else if(res.returnCode==400){
                            // this.$vux.toast.show({text:res.msg,type:'warn'})
                            // this.$router.push({path:'/Login',query:{redirect: this.$route.path+'?bookId='+this.$route.query.bookId}})
                    //  }
                 })
             },
            
        },
         created(){
             if(this.isLogin){
                 this.money=this.userInfo.userRecommendTicket 
                }
        }
    }
</script>
<style lang="less">

</style>