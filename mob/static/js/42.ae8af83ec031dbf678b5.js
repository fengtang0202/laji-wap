webpackJsonp([42],{281:function(a,e,t){function n(a){t(547)}var i=t(0)(t(449),t(663),n,"data-v-09443876",null);a.exports=i.exports},449:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t(45);e.default={data:function(){return{dayType:this.$route.query.dayType,rankBookList:[],dayList:[{day:"周",key:"week",link:"minPaperRank?dayType=week"},{day:"月",key:"month",link:"minPaperRank?dayType=month"},{day:"总",key:"total",link:"minPaperRank?dayType=total"}],page:0,changeDayColor:0}},watch:{"$route.params":function(){this.handleInitDay()}},methods:{infiniteHandler:function(a){var e=this;e.page+=1,t.i(n.a)(e,{type:2,page:e.page},"/api/ranking-book",function(t){200==t.returnCode?(console.log(t.data.week),e.rankBookList=e.rankBookList.concat(t.data[e.dayType].list),t.data[e.dayType].lastPage>e.page?a.loaded():a.complete()):a.complete()})},handleInitDay:function(){switch(this.$route.query.dayType){case"week":this.changeDayColor=0;break;case"month":this.changeDayColor=1;break;case"total":this.changeDayColor=2}},handleTapDay:function(a,e,t){this.dayType=e,this.page=1,this.handleBook(),this.$router.replace({path:t}),window.scrollTo(0,0)},handleBook:function(){var a=this;t.i(n.a)(this,{type:2,page:1},"/api/ranking-book",function(e){200==e.returnCode&&(a.rankBookList=e.data[a.dayType].list)})}},created:function(){this.handleInitDay()}}},494:function(a,e,t){e=a.exports=t(43)(!1),e.push([a.i,".day[data-v-09443876]{height:.44rem;text-align:right;line-height:.44rem;font-size:.16rem}.day .day_btn[data-v-09443876]{padding:.15rem}",""])},547:function(a,e,t){var n=t(494);"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);t(44)("76be450c",n,!0,{})},663:function(a,e){a.exports={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("div",{staticClass:"day"},a._l(a.dayList,function(e,n){return t("span",{key:e.key,staticClass:"day_btn",style:{color:a.changeDayColor===n?"#FE5C6C":"#000"},on:{click:function(t){a.handleTapDay(n,e.key,e.link)}}},[a._v(a._s(e.day))])})),a._v(" "),t("bookRankList",{attrs:{dataList:a.rankBookList,infiniteHandler:a.infiniteHandler,dayList:a.dayList,RankType:"2"}})],1)},staticRenderFns:[]}}});