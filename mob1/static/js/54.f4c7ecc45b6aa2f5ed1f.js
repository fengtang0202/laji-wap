webpackJsonp([54],{263:function(a,e,t){function n(a){t(620)}var i=t(0)(t(476),t(757),n,"data-v-54a127e6",null);a.exports=i.exports},476:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t(40);e.default={data:function(){return{dayType:this.$route.query.dayType,rankBookList:[],dayList:[{day:"周",key:"week",link:"debateRank?dayType=week"},{day:"月",key:"month",link:"debateRank?dayType=month"},{day:"总",key:"total",link:"debateRank?dayType=total"}],page:0,changeDayColor:0}},watch:{"$route.params":function(){this.handleInitDay()}},methods:{handleInitDay:function(){switch(this.$route.query.dayType){case"week":this.changeDayColor=0;break;case"month":this.changeDayColor=1;break;case"total":this.changeDayColor=2}},infiniteHandler:function(a){var e=this;e.page+=1,t.i(n.a)(e,{type:6,page:e.page},"/api/ranking-book",function(t){var n=null;200==t.returnCode?(n=t.data[e.dayType].list,e.rankBookList=e.rankBookList.concat(n),t.data[e.dayType].lastPage>e.page?a.loaded():a.complete()):a.complete()})},handleTapDay:function(a,e,t){this.changeDayColor=a,this.dayType=e,this.page=1,this.handleBook(),this.$router.replace(t),window.scrollTo(0,0)},handleBook:function(){var a=this;t.i(n.a)(this,{type:6,page:this.page},"/api/ranking-book",function(e){200==e.returnCode&&(a.rankBookList=e.data[a.dayType].list)})}},created:function(){this.handleInitDay()}}},561:function(a,e,t){e=a.exports=t(20)(!1),e.push([a.i,".day[data-v-54a127e6]{height:.44rem;text-align:right;line-height:.44rem;font-size:.16rem}.day .day_btn[data-v-54a127e6]{padding:.15rem}",""])},620:function(a,e,t){var n=t(561);"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);t(39)("7d9c31a2",n,!0,{})},757:function(a,e){a.exports={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("div",{staticClass:"day"},a._l(a.dayList,function(e,n){return t("span",{key:e.key,staticClass:"day_btn",style:{color:a.changeDayColor===n?"#FE5C6C":"#000"},on:{click:function(t){a.handleTapDay(n,e.key,e.link)}}},[a._v(a._s(e.day))])})),a._v(" "),t("bookRankList",{attrs:{dataList:a.rankBookList,infiniteHandler:a.infiniteHandler,dayList:a.dayList,RankType:"6"}})],1)},staticRenderFns:[]}}});