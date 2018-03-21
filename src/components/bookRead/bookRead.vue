<template>
  <div class='bookRead'>
     <div class='feed'>
            <div style='float:left'>
               <img :src="item.img"   class='pepper' :key='index' v-for='(item,index) in feedList' alt="">
            </div>
            <div class='nav' @touchend='handleshow()'>
              <img src="../../assets/images/dropdown@3x.png"   alt="">
            </div>
     </div>
     <ul class='nav_list' :class='{show:show}'>
         <li v-for='item in navList'>{{item.text}}</li>
     </ul>
     <div class='book_content' v-html='bookText'></div>
  </div>
</template>
<script>
    import { Post_formData2, noParam_Get,handleScroll } from '@/config/services'
import { setTimeout } from 'timers';
     export default{
         data(){
            return{
               chapterId:this.$route.query.chapterId,
               bookText:'',
               show:false,
               feedList:[
                   {img:require('../../assets/images/Group 3@3x.png')},
                   {img:require('../../assets/images/Group 2@3x.png')},
                   {img:require('../../assets/images/Group@3x.png')}                   
               ],
               navList:[
                   {text:'书籍详情',link:'/bookDetails'},
                   {text:'查看书评',link:''},
                   {text:'加入书架',link:''},
                   {text:'添加书签',link:''},
                   {text:'举报本章',link:''},
                   {text:'分享本书',link:''}
               ]
            }
         },
         methods:{
             getBookText(){
                 Post_formData2(this,{chapterId:this.chapterId,readType:1},'/api/book-read',res=>{
                   this.bookText=res.data.chapterInfo.chapterContent.replace(/<LG>[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}<\/LG>/g,'<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')
                   console.log(res.data.bookInfo)
               })
             },
             handleshow(){
                     this.show=!this.show
             }
         },
         mounted(){
            this.getBookText()
            // window.addEventListener('scroll',()=>{ handleScroll(this,'.nav')})            
         },
         destroyed () {
            // window.removeEventListener('scroll',()=>{ handleScroll(this,'.nav')})
        }
     }
</script>
<style lang='less' scoped>
     .bookRead{
         position: relative;
         width:100%;
         overflow-x:hidden;
         -webkit-overflow-scrolling:touch;
        .feed{
            height:.64rem;
            background-color: #3D3D3D;
            .pepper{
                width:.78rem;
                height:.3rem;
                margin-top:.17rem;
                margin-left:.2rem;
            }
            .nav{
                width:.8rem;
                height:.64rem;
                float: left;
                text-align: center;
                img{
                    width:.07rem;
                    height:.23rem;
                    margin-top:.2rem;
                }
            }
        }
        .book_content{
            font-size:.18rem;
            letter-spacing:.04rem; 
            text-indent: 2em; 
            margin-top:.1rem; 
            padding:0 .1rem
        }
        .nav_list{
            width:.88rem;
            height:2.2rem;
            position: absolute;
            right:0;
            background-color: #fff;
            transition: all .5s ;
            transform: translate(0.88rem, 0);                            
            li{
                height:.36rem;
                text-align: center;
                line-height:.36rem;
                list-style: none;
                border-bottom:1px solid #EFEFEF;
            }
        }
        .show{
             transform: translate(0, 0);                
            }
          .isFixed{
            position: fixed;
            top:.4rem;
         }
       }
</style>
