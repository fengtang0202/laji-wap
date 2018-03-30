<template>
    <div class='book_edit'>
           <!-- <headerComponent :list='topList'></headerComponent> -->
           <div class='header'>
            <div @click="$router.go(-1)">
             <img src="../../assets/images/back@2x.png"  alt="">
            </div>    
          <div class='title_1'>{{list.title_1}}</div>
            <span class='title_2' @click='handleDelBook()' >删除</span>
          </div>
           <div style='margin-left:.22rem'>
                <div class='book_wrap'   :key='index' v-for='(item,index) in bookRack'>
                        <img :src="item.bookImage" style='width:.96rem;height:1.27rem' alt="">
                        <p>{{item.bookName|bookName}}</p>
                        <P style='color:#999999'>{{item.writerName}}</P>
                        <input type="checkbox" v-model="item.checked" class='del_btn'>
                        <!-- <img class='del_btn' v-if='item.checked' src="../../assets/images/Rectangle 61 Copy 2@3x.png" alt=""> -->
                        <!-- <img class='del_btn' v-if='item.checked' src="../../assets/images/Rectangle 61 Copy 4@3x.png" alt="">                   -->
                </div>
           </div>
    </div>
</template>
<script>
import headerComponent from '@/components/common/header'
import {mapState,mapActions} from 'vuex'
import { Post_formData2,Post_formData} from '@/config/services'
export default {
    components:{
        headerComponent
    },
    computed: {
       ...mapState(['bookRack','userInfo'])  
    },
    data(){
        return{
            list:{
                title_1:'我的书架',
                title_2:'删除',
                link:''
            },
            delId:[],
        }
    },
    filters:{
            bookName:name=>name.length>6?(name.slice(0,5)+'....'):name
        },
    methods:{
        ...mapActions(['getBookRack']),
        // handleCheck(id,item){
        //    console.log(item)
        //    item.checked=!item.checked
        // },
        handleDelBook(){
            // console.log(1)
            this.bookRack.forEach(value=>{
            if(value.checked==true){
                this.delId.push(value.id)
              }
            })
            if(this.delId.length!==0){
             Post_formData2(this,{id:[...new Set(this.delId)].toString()},'/api/bookshelf-deluserbookshelf',res=>{
              if (res.returnCode) {
                Post_formData(this,{userid:this.userInfo.userId,startpage:1},'./api/bookshelf-getuserbookshelf',res=>{
                   res.returnCode==200&&this.getBookRack(res.data.list)
                   this.bookRack.forEach(value=>{
                     value.checked=false 
                   })
                })
              }
          })
            }
        }
    },
    mounted () {
         
    }
}
</script>
<style lang='less' scoped>
  .book_edit{
      width:100%;
      height:100%;
      .header{    
            height:.44rem;
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            border-bottom:.01rem solid #E9E9E9;
             .title_1{
              font-size: .18rem;
          }
          .title_2{
              font-size: .14rem;
              color:#F77583;
              line-height: .44rem;
              margin-right:.3rem;
          }
         div{
            margin:auto .1rem;       
          }
          img{
            width:.4rem;
            height:.4rem;
            vertical-align: middle;
          }
        }
      .book_wrap{
          position: relative;
         width:.96rem;
         font-size:.12rem;
         color:#333;
         text-align: center;
         display:inline-block;
         margin-top:.17rem;
         margin-right:.21rem;
         .del_btn{
             -webkit-appearance: none;
                 outline: none;
             width:.22rem;
             height:.22rem;
             position: absolute;
             background-color:#F77583;
             border-radius: .05rem;
             top:0;
             right:0;
         }
         .del_btn:checked{
             background:url('../../assets/images/y-checked.png');
             background-size: .22rem .22rem;
         }
      }
  }
</style>
