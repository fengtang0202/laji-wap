webpackJsonp([61],{307:function(e,a,o){function t(e){o(688)}var n=o(0)(o(503),o(843),t,"data-v-e6c79bf6",null);e.exports=n.exports},503:function(e,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=o(65),n=o.n(t);o(30);a.default={components:{headerComponent:n.a},data:function(){return{searchBarFixed:!1,topList:{title_1:"排行榜",title_2:"",link:""},dayList:[{day:"月",key:"month"},{day:"总",key:"total"}],changeDayColor:0,changeItemColor:0,rankBookList:[],page:0,rankList:[{name:"金椒榜",key:1,link:"/bookRank?dayType=month"},{name:"小米椒",key:2,link:"/bookRank/minPaperRank?dayType=week"},{name:"点击榜",key:3,link:"/bookRank/clickRank?dayType=week"},{name:"新书榜",key:4,link:"/bookRank/newBookRank"},{name:"畅销榜",key:5,link:"/bookRank/sellRank?dayType=week"},{name:"吐槽榜",key:6,link:"/bookRank/debateRank?dayType=week"},{name:"更新榜",key:7,link:"/bookRank/updateRank?dayType=week"},{name:"打赏榜",key:8,link:"/bookRank/rewardRank?dayType=week"}]}},filters:{danwei:function(e){return 1==e&&"金票"||2==e&&"小米椒"||3==e&&"点击"||4==e&&""||5==e&&""||6==e&&"条"||7==e&&""||8==e&&"辣椒"||""}},watch:{$route:function(e,a){this.handleInitItemIndex()}},methods:{handleInitItemIndex:function(){switch(this.$route.path){case"/bookRank":this.changeItemColor=0;break;case"/bookRank/minPaperRank":this.changeItemColor=1;break;case"/bookRank/clickRank":this.changeItemColor=2;break;case"/bookRank/newBookRank":this.changeItemColor=3;break;case"/bookRank/sellRank":this.changeItemColor=4;break;case"/bookRank/debateRank":this.changeItemColor=5;break;case"/bookRank/updateRank":this.changeItemColor=6;break;case"/bookRank/rewardRank":this.changeItemColor=7}},handleTapDay:function(e,a){this.dayType=a,1!==this.dayList.length&&this.hanleRankBook(),window.scrollTo(0,0)},handleToDetail:function(e){this.$router.push({path:"/bookDetails",query:{bookId:e}})},handleTapItem:function(e,a,o){this.changeItemColor=e,this.changeDayColor=0,this.$router.replace({path:o})}},mounted:function(){this.handleInitItemIndex()}}},625:function(e,a,o){a=e.exports=o(29)(!1),a.push([e.i,".bookRank_wrap[data-v-e6c79bf6]{width:100%;-webkit-overflow-scrolling:touch}.bookRank_wrap .day[data-v-e6c79bf6]{height:.44rem;text-align:right;line-height:.44rem;font-size:.16rem}.bookRank_wrap .day .day_btn[data-v-e6c79bf6]{padding:.15rem}.bookRank_wrap .nav[data-v-e6c79bf6]{width:.72rem;height:3.52rem;margin-left:.12rem;background-color:#fff;-webkit-box-shadow:0 0 .1rem rgba(0,0,0,.1);box-shadow:0 0 .1rem rgba(0,0,0,.1);border-radius:5px;float:left;position:fixed;-webkit-transform:translateZ(0);transform:translateZ(0);top:.88rem}.bookRank_wrap .nav li[data-v-e6c79bf6]{list-style:none;height:.44rem;text-align:center}.bookRank_wrap .nav li span[data-v-e6c79bf6]{line-height:.44rem}.bookRank_wrap .nav .isAdd[data-v-e6c79bf6]{background-color:#f77583;color:#fff}.bookRank_wrap .book_list_wrap[data-v-e6c79bf6]{width:2.7rem;float:right;margin-right:.05rem}.bookRank_wrap .book_list_wrap .book_item_wrap[data-v-e6c79bf6]{height:1.24rem;margin-bottom:.07rem;border-bottom:1px solid #efefef;width:100%;padding-bottom:.1rem}.bookRank_wrap .book_list_wrap .book_item_wrap .book_detail[data-v-e6c79bf6]{width:1.76rem;float:right;margin-left:.1rem;font-size:.14rem;position:relative}.bookRank_wrap .book_list_wrap .book_item_wrap .book_detail p[data-v-e6c79bf6]:not(:first-child){margin-top:.1rem}.bookRank_wrap .book_list_wrap .book_item_wrap .book_detail .gold[data-v-e6c79bf6]{color:#f73d51;border:1px solid #f73d51;position:absolute;right:.16rem;border-radius:4px;font-size:.12rem;padding:0 .04rem}.bookRank_wrap .book_list_wrap .book_item_wrap .metal[data-v-e6c79bf6]{width:.19rem;height:.24rem;position:absolute;top:-.05rem;left:-1.03rem}.bookRank_wrap .isFixed[data-v-e6c79bf6]{position:fixed;top:.4rem}",""])},688:function(e,a,o){var t=o(625);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);o(51)("4f86c909",t,!0,{})},843:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"bookRank_wrap"},[o("headerComponent",{attrs:{list:e.topList}}),e._v(" "),o("div",{staticClass:"nav",class:1==e.searchBarFixed?"isFixed":"",attrs:{id:"nav"}},[o("ul",e._l(e.rankList,function(a,t){return o("li",{key:a.key,class:{isAdd:t===e.changeItemColor},on:{click:function(o){e.handleTapItem(t,a.key,a.link)}}},[o("span",[e._v(e._s(a.name))])])}))]),e._v(" "),o("div",{staticClass:"book_list_wrap"},[o("router-view")],1)],1)},staticRenderFns:[]}}});