webpackJsonp([64],{305:function(t,e,o){function n(t){o(691)}var i=o(0)(o(504),o(852),n,"data-v-b4f15cda",null);t.exports=i.exports},504:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(31),i=o.n(n),s=o(30),a=o(13),r=o(122),m=o.n(r),d=o(32);e.default={components:{Popup:m.a},directives:{TransferDom:d.a},data:function(){return{is:!0,topList:{title_1:"评论",title_2:"首页",link:"/"},showNoContent:!1,showContent:!1,timer:"",show:!1,replyText:"",hotCommentList:[],hotCommentcount:0,newCommentList:[],newCommentcount:0,bookName:"",readBookId:this.$route.query.bookId,page:1}},computed:i()({},o.i(a.a)(["userInfo","isLogin"])),methods:i()({},o.i(a.b)(["setshowLoginDate"]),{canlce:function(){this.show=!1},getHotComment:function(){var t=this;this.readBookId=this.$route.query.bookId,o.i(s.a)(this,{bookid:this.readBookId},"/api/comm-HotCommentInfo",function(e){200==e.returnCode?(t.hotCommentList=e.data,t.hotCommentcount=e.data.length,t.showContent=!0):800===e.returnCode&&(t.hotCommentList=[],t.showNoContent=!0,t.showContent=!1)})},handleMakeComment:function(){var t=this,e=this.replyText.length;if(/[\ud83c-\ud83e][\udc00-\udfff]|[\u2600-\u27ff]/.test(this.replyText))this.$vux.toast.show({text:"目前不支持表情!",type:"cancel"});else if(e>0){var n={bookId:this.readBookId,commentContext:this.replyText,userName:this.userInfo.pseudonym,bookName:this.bookName};o.i(s.a)(this,n,"/api/add-getcomminfo",function(e){200==e.returnCode?(t.$vux.toast.text("发表成功!"),t.show=!1,t.showContent=!0,t.showNoContent=!1,n.isthumbs=0,n.thumbsCount=0,n.replyCount=0,n.userSex=t.userInfo.userSex,n.userHeadPortraitURL=t.userInfo.userHeadPortraitURL,n.pseudonym=t.userInfo.pseudonym,n.userGrade=t.userInfo.userGrade,n.commentDateTime=t.timer,t.newCommentcount+=1,t.newCommentList.unshift(n),t.replyText=""):t.$vux.toast.text(e.msg)})}else this.$vux.toast.text("评价不能为空!")},infiniteHandler:function(t){var e=this;this.page+=1,this.readBookId=this.$route.query.bookId,o.i(s.a)(this,{id:this.readBookId,type:1,startPage:this.page},"/api/comm-getcomminfo",function(o){200==o.returnCode&&0!=o.data.list.length?(e.newCommentList=e.newCommentList.concat(o.data.list),e.newCommentcount=o.data.total,o.data.lastPage>e.page?t.loaded():t.complete()):t.complete()})},getNewComment:function(){var t=this;this.readBookId=this.$route.query.bookId,o.i(s.a)(this,{id:this.readBookId,type:1,startPage:1},"/api/comm-getcomminfo",function(e){200==e.returnCode&&0!=e.data.list.length?(t.showContent=!0,t.newCommentList=e.data.list,t.newCommentcount=e.data.total,t.bookName=e.data.list[0].bookName,t.showNoContent=!1):(t.newCommentList=[],t.showNoContent=!0)})},getTime:function(){var t=this;o.i(s.b)(this,"/api/sys-getNetWorkDateTime",function(e){t.timer=e.data.beijing})},handlereplyDetail:function(t){},handleShow:function(){this.isLogin?this.show=!this.show:this.setshowLoginDate(!0)},reload:function(){var t=this;this.is=!1,this.$nextTick(function(){return t.is=!0})}}),beforeRouteEnter:function(t,e,o){"/bookDetails"==e.path&&window.scrollTo(0,0),o()},beforeRouteLeave:function(t,e,o){this.isLogin&&"/Login"==t.path&&this.$router.go(-2),o()},created:function(){this.getTime()},activated:function(){this.page=1,this.reload(),this.getHotComment(),this.getNewComment()}}},626:function(t,e,o){e=t.exports=o(29)(!1),e.push([t.i,".book_comment_wrap[data-v-b4f15cda]{width:100%}.book_comment_wrap img[data-v-b4f15cda]{vertical-align:middle}.book_comment_wrap .book_hot_comment p[data-v-b4f15cda]{margin-left:.14rem;margin-top:.19rem;margin-bottom:.18rem}.book_comment_wrap .bottom_x[data-v-b4f15cda]{width:100%;height:.4rem}.book_comment_wrap .replyInput[data-v-b4f15cda]{width:100%;border-top:1px solid #efefef;height:.4rem;background-color:#fff;position:fixed;bottom:0;line-height:.4rem;color:#f77583;text-align:center}.book_comment_wrap .more[data-v-b4f15cda]{font-size:.16rem;color:#f77583;text-align:center;border-bottom:1px solid #efefef}",""])},691:function(t,e,o){var n=o(626);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(51)("13b51fce",n,!0,{})},852:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.is?o("div",{staticClass:"book_comment_wrap"},[o("headerComponent",{attrs:{list:t.topList}}),t._v(" "),t.showContent?o("div",[o("div",{staticClass:"book_hot_comment"},[o("p",{staticStyle:{"font-szie":".18rem"}},[o("span",{staticStyle:{color:"#F77583","font-weight":"600"}},[t._v("|")]),t._v("热门评论("+t._s(t.hotCommentcount)+")")]),t._v(" "),o("commendItem",{attrs:{list:t.hotCommentList}})],1),t._v(" "),o("div",{staticClass:"book_hot_comment"},[o("p",{staticStyle:{"font-szie":".18rem"}},[o("span",{staticStyle:{color:"#F77583","font-weight":"600"}},[t._v("|")]),t._v("最新评论("+t._s(t.newCommentcount)+")")]),t._v(" "),o("commendItem",{attrs:{list:t.newCommentList}}),t._v(" "),o("infinite-loading",{on:{infinite:t.infiniteHandler}},[o("span",{attrs:{slot:"no-more"},slot:"no-more"},[t._v("\n                 目前暂无更多评论\n             ")]),t._v(" "),o("span",{attrs:{slot:"no-results"},slot:"no-results"},[t._v("\n                 目前暂无更多评论\n             ")])])],1)]):t._e(),t._v(" "),t.showNoContent?o("No",{attrs:{message:"暂无评论"}}):t._e(),t._v(" "),o("div",{staticClass:"bottom_x"}),t._v(" "),o("div",{staticClass:"replyInput",on:{click:function(e){t.handleShow()}}},[o("span",[t._v("发表评价")])]),t._v(" "),o("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[o("popup",{model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[o("div",{staticStyle:{overflow:"hidden",height:"1.5rem","font-size":".16rem","background-color":"#fff"}},[o("div",{staticStyle:{"border-bottom":"1px solid #E9E9E9",overflow:"hidden",padding:".08rem .2rem"}},[o("p",{staticStyle:{float:"left"},on:{click:function(e){t.canlce()}}},[t._v("取消")]),t._v(" "),o("p",{staticStyle:{color:"#F77583",float:"right"},on:{click:function(e){t.handleMakeComment()}}},[t._v("发表")])]),t._v(" "),o("div",{staticClass:"text_box"},[o("textarea",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:t.replyText,expression:"replyText"}],staticStyle:{width:"100%",height:"1.2rem",border:"0",outline:"none",padding:".1rem"},attrs:{placeholder:"请输入你对这本书的评价..."},domProps:{value:t.replyText},on:{input:function(e){e.target.composing||(t.replyText=e.target.value)}}})])])])],1)],1):t._e()},staticRenderFns:[]}}});