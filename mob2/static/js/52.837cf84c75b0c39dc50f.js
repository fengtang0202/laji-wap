webpackJsonp([52],{267:function(a,t,e){function n(a){e(626)}var i=e(0)(e(483),e(765),n,"data-v-548bb24b",null);a.exports=i.exports},483:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(40);t.default={data:function(){return{dayType:this.$route.query.dayType,rankBookList:[],dayList:[{day:"周",key:"week",link:"rewardRank?dayType=week"},{day:"月",key:"month",link:"rewardRank?dayType=month"},{day:"总",key:"total",link:"rewardRank?dayType=total"}],page:0,changeDayColor:0}},watch:{"$route.params":function(){this.handleInitDay()}},methods:{handleInitDay:function(){switch(this.$route.query.dayType){case"week":this.changeDayColor=0;break;case"month":this.changeDayColor=1;break;case"total":this.changeDayColor=2}},infiniteHandler:function(a){var t=this;t.page+=1,e.i(n.a)(t,{type:8,page:t.page},"/api/ranking-book",function(e){var n=null;200==e.returnCode?(n=e.data[t.dayType].list,t.rankBookList=t.rankBookList.concat(n),e.data[t.dayType].lastPage>t.page?a.loaded():a.complete()):a.complete()})},handleTapDay:function(a,t,e){this.dayType=t,this.page=1,this.handleBook(),this.$router.replace(e),window.scrollTo(0,0)},handleBook:function(){var a=this;e.i(n.a)(this,{type:8,page:this.page},"/api/ranking-book",function(t){200==t.returnCode&&(a.rankBookList=t.data[a.dayType].list)})}},created:function(){this.handleInitDay()}}},565:function(a,t,e){t=a.exports=e(20)(!1),t.push([a.i,".day[data-v-548bb24b]{height:.44rem;text-align:right;line-height:.44rem;font-size:.16rem}.day .day_btn[data-v-548bb24b]{padding:.15rem}",""])},626:function(a,t,e){var n=e(565);"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);e(39)("7f906220",n,!0,{})},765:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"day"},a._l(a.dayList,function(t,n){return e("span",{key:t.key,staticClass:"day_btn",style:{color:a.changeDayColor===n?"#FE5C6C":"#000"},on:{click:function(e){a.handleTapDay(n,t.key,t.link)}}},[a._v(a._s(t.day))])})),a._v(" "),e("bookRankList",{attrs:{dataList:a.rankBookList,infiniteHandler:a.infiniteHandler,dayList:a.dayList,RankType:"8"}})],1)},staticRenderFns:[]}}});