webpackJsonp([24],{327:function(i,e,t){function a(i){t(660)}var n=t(0)(t(524),t(805),a,"data-v-56070501",null);i.exports=n.exports},361:function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(i){this.$emit("update:show",i)}}}},362:function(i,e,t){e=i.exports=t(29)(!1),e.push([i.i,'.weui-mask{background:rgba(0,0,0,.6)}.weui-mask,.weui-mask_transparent{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0}.weui-toast{position:fixed;z-index:5001;width:7.6em;min-height:7.6em;top:180px;left:50%;margin-left:-3.8em;background:hsla(0,0%,7%,.7);text-align:center;border-radius:5px;color:#fff}.weui-icon_toast{margin:22px 0 0;display:block}.weui-icon_toast.weui-icon-success-no-circle:before{color:#fff;font-size:55px}.weui-toast__content{margin:0 0 15px}.weui-loading{width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:weuiLoading 1s steps(12) infinite;animation:weuiLoading 1s steps(12) infinite;background:transparent url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=") no-repeat;background-size:100%}.weui-loading.weui-loading_transparent{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTAwIDEwMCc+PHBhdGggZmlsbD0nbm9uZScgZD0nTTAgMGgxMDB2MTAwSDB6Jy8+PHJlY3QgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjU2KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC0zMCknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDEwNS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjQzKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA3NS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjM4KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2NSA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjMyKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTguNjYgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4yOCknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoMTUwIDU0LjAyIDY1KScvPjxyZWN0IHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyB4PSc0Ni41JyB5PSc0MCcgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuMjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA1MCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjIpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKC0xNTAgNDUuOTggNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xNyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTEyMCA0MS4zNCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjE0KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtOTAgMzUgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtNjAgMjQuMDIgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4wMyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTMwIC01Ljk4IDY1KScvPjwvc3ZnPgo=")}@-webkit-keyframes weuiLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes weuiLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vux-loading .weui-toast{z-index:5001}.weui-icon_toast.weui-loading{margin:30px 0 0;width:38px;height:38px;vertical-align:baseline;display:inline-block}.vux-mask-enter,.vux-mask-leave-active{opacity:0}.vux-mask-enter-active,.vux-mask-leave-active{-webkit-transition:opacity .3s;transition:opacity .3s}.vux-loading-no-text .weui-toast{min-height:98px}',""])},363:function(i,e,t){var a=t(362);"string"==typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);t(51)("5c70e347",a,!0,{})},364:function(i,e){i.exports={render:function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("transition",{attrs:{name:i.transition}},[t("div",{directives:[{name:"show",rawName:"v-show",value:i.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading",class:i.text?"":"vux-loading-no-text"},[t("div",{staticClass:"weui-mask_transparent"}),i._v(" "),t("div",{staticClass:"weui-toast",style:{position:i.position}},[t("i",{staticClass:"weui-loading weui-icon_toast"}),i._v(" "),i.text?t("p",{staticClass:"weui-toast__content"},[i._v(i._s(i.text||"加载中")),i._t("default")],2):i._e()])])])},staticRenderFns:[]}},365:function(i,e,t){function a(i){t(363)}var n=t(0)(t(361),t(364),a,null,null);i.exports=n.exports},524:function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t(66),n=t.n(a),o=t(32),c=t(365),r=t.n(c),d=t(30);t(13);e.default={name:"directory",data:function(){return{pageNum:1,chapterList:[],volumeList:[],isShow:!1,chapterId:this.$route.query.chapterId,bookName:this.$route.query.bookName,dialogshow:!1,readBookId:this.$route.query.bookId,topList:{title_1:"目录",title_2:"首页",link:"/"},volumeAndChapterlist:[],price:0}},components:{Loading:r.a,Cell:n.a},directives:{TransferDom:o.a},methods:{handleBack:function(){window.history.go(-1)},handleToBookRead:function(i){this.$router.push({path:"/bookRead",query:{bookId:this.readBookId,chapterId:i.id,bookName:this.bookName}})},handleGetVolumeChapter:function(){var i=this;this.isShow=!0,t.i(d.b)(this,"/api/books-volumeChapterList/"+this.readBookId,function(e){if(200===e.returnCode){i.isShow=!1,i.volumeAndChapterlist=e.data.chapterInfo;var t="#a"+i.chapterId;i.goAnchor(t)}})},goAnchor:function(i){var e=this;this.$nextTick(function(){if(e.el=document.querySelector(i),e.el<400)window.scrollTo(0,0);else{var t=e.el.offsetTop-156;window.scrollTo(0,t)}})}},mounted:function(){},created:function(){this.handleGetVolumeChapter()}}},597:function(i,e,t){e=i.exports=t(29)(!1),e.push([i.i,"#directory[data-v-56070501]{width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:PingFangSC-Regular}#directory .readVolumeList .chapter_wrap[data-v-56070501]{position:relative}#directory .readVolumeList .volume_wrap[data-v-56070501]{height:.52rem;font-size:.16rem;color:#333;padding:0 .14rem;border-bottom:1px solid #efefef;line-height:.52rem}#directory .readVolumeList .chapter[data-v-56070501]{font-size:.14rem;padding:0 .24rem}#directory .readVolumeList .chapter .vip[data-v-56070501]{width:.15rem;height:.15rem;margin-left:.2rem}#directory .readVolumeList .chapter .add[data-v-56070501]{color:#999}#directory .readVolumeList .chapter .active[data-v-56070501]{color:#f77583}#directory .readVolumeList .fontLength[data-v-56070501]{border:1px solid #f77583;position:absolute;height:.24rem;padding:0 .05rem;color:#f77583;top:15px;right:15px;border-radius:.15rem}#directory .page[data-v-56070501]{width:100%;height:.62rem;border:1px solid;position:fixed;bottom:0;left:0;background:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 .14rem;font-size:.16rem;line-height:.62rem}#directory .page .page_l[data-v-56070501]{float:left;color:#999}#directory .page .page_n[data-v-56070501]{float:right;color:#f77583}#directory .page .page_i[data-v-56070501]{width:.28rem;margin-left:.48rem}#directory .page .page_i[data-v-56070501],#directory .page .page_p[data-v-56070501]{height:.28rem;color:#666;line-height:.28rem;text-align:center;border:1px solid #f77583}#directory .page .page_p[data-v-56070501]{display:inline-block;width:.53rem;margin:0 .23rem}#directory .page .page_num[data-v-56070501]{color:#999}#directory .words[data-v-56070501]{color:#f77583;border:1px solid #f77583;border-radius:.1rem;position:absolute;padding:0 .04rem;right:.3rem;top:.1rem}",""])},660:function(i,e,t){var a=t(597);"string"==typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);t(51)("6c388927",a,!0,{})},750:function(i,e){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABGdBTUEAALGPC/xhBQAABT9JREFUaAXtWV1oHFUUPufO7MxsirFqECUPpfZFX4ygIqmahhZ/AkZNaIRGEFFQBF+K+CKiCxbqQ0uefCj+UW1LYzRrG6VNY+vaZFsCKvZFEUWjtVK1aSSp+zf3x3NjtoZxZpPNzi4E732Zvfeee8/5vnPuuWdmAUwzDBgGDAOGAcOAYcAwYBgwDBgGDAOGAcOAYcAwYBhY5QxgLfbnO3qeUIgtIJWK2sdiaKOEUWd8+MsomaXGc5t6+izFNgglxT+yStudS0q5F7OH55Zav3jeXtyp9rclASTCTlrHotYyso2D7FZ3dN2Pk0dmo+Sixoud226UvDhgM2h1rAVzEaHAS8U/FR+hdY0D/N319r71v/lbkmj3F8rkByznSoKN2F50vadoaldgumKXwgYLovCIZ9utBcHnlJB7iNvfLQQLFeSlUDMVNwiZrCmk9X5/dT54my3to+Tia3hEZBNgEAp+lCXoaJoc/iXEjtChXPsDrcxOZF1mrStwcSyZTd8XKljFYGQoLnePNZnDnwuQg+SMyCWCiHAYrkcHHlN9fVakYHDCdvuJrHUUPXQw8LXg9Er6NQPWSpMs8QqF7g8WeTKs6YymvY+otvvnRVuYTHBMbey5FpR82kJGVOJJV1pjQZmV9GMBjJmh8xaDHWQa5bDwpr2cAGyhBPaCSqWW1Ju31OOM4Q06L0qFe/D0UD585+pGl1S83O0SzXyQvDzuWtERWyLQRMpDl8a+2lppX3VrdwuFwzbXstGX8gx35bFK8tXMxQYYR0Zy5N0BX6jZqNDWhiUYs22Gz013PdocZWjJczZ7wG7mQh8EmW4+np6Okq12PDbAWrE7nj5EtcGwPnVRzScIRMjtTfl8b5iM6uz0BJPPICKjiDnruWJvmNxKx2IFrI2QblOKwvBclJcVAaYkRPeUfDG3ua81aHhRXn0v0bVpvnhD9S5+MvJzUKaWfuyAkycO/ESZ9VXy8nz9F2acLkYSzNrAuL998bzq6nKFlM/SvYslEBeQ49uL5+P4HTtgbVSi5L1TkmrSYdEJjIBRCY5P+nf33lkGks8nH6bIuIvCGZhir7utianyXFzPugDGyf2UuMTukpKFqPNM1w14zForUD2vIMVSuh4Xqt+1E8mCEBdRyQ9waGjhZSEuuJXKoxp16KNKb1PvOci2+hTCYU2fc6qJcxz9bgHsD1exCcas5oLkh5q23NKLqVT4wrDNljkWnU6XuUElsbmOnpscBScoRK/ThUdYo2sKSlKcAsWmXAv7KeEVQUK3l03HUlkFddYlpMtKrjiZ/kaAGqAkFpnACCBYwDZS2dmvMzjRknXvaTte3iPuZ10Ba2N9nn+jKPgZhzwZ1STB1KFGb1RURsJAPUK5rDvairJEjc8rT49epApxF2VtUen80FWkvTvmQzJbo8qKy+sOWGt3YGaQwIzaEV6e9y4orhjsXztxoOqX+ooIA5MNAYyZDJdKvkTfpGb1x4Bgs+kVkAv1fVEUPwrOxd1vCGBt9JqJD7+gA3qQSuT/VNo6VdEweffjunpX29EwwFpZwS7s9CX/Vnu03Bh53JdwzhHOW+Wxej7/1VxPLQt7X5U5OkW1zm4K7cvaqDABuo7oc+vBXy8P1vFHQwFrHB6399H186m+pvR5zks+Q8mMvok1pjUcsP5Ug8p6mSqvSzZdRXSmjzjW9NeNgdvgM1wGlcy+Py4kpKkg8QHUmzqLl+fq/azpn4dajENQOyhlXvA+a8sApGvZavWsPdvel1w91hpLDQOGAcOAYcAwYBgwDBgGDAP/bwb+Bhec5y7zyBkwAAAAAElFTkSuQmCC"},805:function(i,e,t){i.exports={render:function(){var i=this,e=i.$createElement,a=i._self._c||e;return a("div",[a("div",{attrs:{id:"directory"}},[a("headerComponent",{attrs:{list:i.topList}}),i._v(" "),i._l(i.volumeAndChapterlist,function(e,n){return a("div",{key:n,staticClass:"readVolumeList",staticStyle:{"border-bottom":"1px solid #EFEFEF"}},[a("p",{staticClass:"volume_wrap"},[i._v("\n                   "+i._s(e.volumeName)+"\n               ")]),i._v(" "),i._l(e.resultList,function(e,n){return a("div",{key:n,staticClass:"chapter_wrap",attrs:{id:"a"+e.id},on:{click:function(t){i.handleToBookRead(e)}}},[a("p",{staticClass:"volume_wrap chapter"},[a("span",{class:{add:1==e.chapterIsvip,active:i.chapterId==e.id}},[i._v(i._s(e.chapterTitle))]),i._v(" "),1==e.chapterIsvip?a("img",{staticClass:"vip",attrs:{src:t(750),alt:""}}):i._e()]),i._v(" "),a("span",{staticClass:"fontLength"},[i._v("\n                   "+i._s(e.chapterLength)+"\n                 ")])])})],2)})],2)])},staticRenderFns:[]}}});