<template>
    <div id="feed">
        <div class="page_mcbg" @click="handleClose()" v-show="backShow"></div>
        <div class="glod_div"  :class='{show:dilogShow}'>
            <div class='goldpepper'>投喂金椒</div>
            <p class='computerd'>您的金椒余额:{{money}}</p>
            <div class="oDiv">
            <p class="op"  @click="subtract()" :class="{off:number==1}">—</p>
            <p class='pan'>{{number}}</p>
            <p class="op"  @click='handleAdd()'>＋</p>
            <p class="op" @click='number=money' style="margin-left:.15rem;">ALL</p>                 
            <button class="btn" @click='handleReword()'>投喂</button> 
            </div>
        </div>
    </div>
</template>
<script>
    import { Group, XNumber,XButton, Box} from 'vux'
    import {mapState} from 'vuex'
    import { Post_formData2} from '@/config/services'
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
            ...mapState(['userInfo','readBookId','isLogin'])
        },
        methods: {
            change (val) {
                // console.log('change', val)
            },
            subtract(){
                let self=this;
                if(self.number==1){
                    return false
                }
                self.number--;
            },
            handleAdd(){
                let self=this;
                if(self.number==99){
                return false
                }
                self.number++;
            },
            handleClose(){
                this.backShow = !this.backShow;
                this.dilogShow = !this.dilogShow;
            },
            handleReword(){
               let options = {
                   goldenTicketCount:this.number,
                   bookid:this.$route.query.bookId,                   
                   bookName:this.param.bookName,
                   authorId:this.param.authorId
               }
                      Post_formData2(this,options,'/api/user-RewardGonderTicket',res=>{
                      if(res.returnCode===200){
                       this.$vux.toast.show({text:res.msg}) 
                       this.userInfo.userGoldenTicket-=this.number
                       this.money-=this.number
                        this.backShow = false;
                        this.dilogShow = false;
                        }else if(res.returnCode==500){
                          this.$vux.toast.show({text:res.msg,type:'cancel'}) 
                        }else if(res.returnCode==400){
                            this.$router.push({path:'/Login',query:{redirect: this.$route.path+'?bookId='+this.$route.query.bookId}})                            
                        }
                     })
             }
        },
        mounted(){
            if(this.isLogin){
                this.money=this.userInfo.userGoldenTicket
            }
        }
    }
</script>

<style lang="less">
    @import '../../css/paper';
</style>