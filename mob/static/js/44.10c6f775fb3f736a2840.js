webpackJsonp([44],{286:function(a,t,e){function n(a){e(566)}var i=e(0)(e(462),e(701),n,"data-v-09443876",null);a.exports=i.exports},462:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(45);t.default={data:function(){return{dayType:this.$route.query.dayType,rankBookList:[],dayList:[{day:"周",key:"week",link:"minPaperRank?dayType=week"},{day:"月",key:"month",link:"minPaperRank?dayType=month"},{day:"总",key:"total",link:"minPaperRank?dayType=total"}],page:0,changeDayColor:0}},watch:{"$route.params":function(){this.handleInitDay()}},methods:{infiniteHandler:function(a){var t=this;t.page+=1,e.i(n.a)(t,{type:2,page:t.page},"/api/ranking-book",function(e){200==e.returnCode?(t.rankBookList=t.rankBookList.concat(e.data[t.dayType].list),e.data[t.dayType].lastPage>t.page?a.loaded():a.complete()):a.complete()})},handleInitDay:function(){switch(this.$route.query.dayType){case"week":this.changeDayColor=0;break;case"month":this.changeDayColor=1;break;case"total":this.changeDayColor=2}},handleTapDay:function(a,t,e){this.dayType=t,this.page=1,this.handleBook(),this.$router.replace({path:e}),window.scrollTo(0,0)},handleBook:function(){var a=this;e.i(n.a)(this,{type:2,page:1},"/api/ranking-book",function(t){200==t.returnCode&&(a.rankBookList=t.data[a.dayType].list)})}},created:function(){this.handleInitDay()}}},507:function(a,t,e){t=a.exports=e(43)(!1),t.push([a.i,".day[data-v-09443876]{height:.44rem;text-align:right;line-height:.44rem;font-size:.16rem}.day .day_btn[data-v-09443876]{padding:.15rem}",""])},566:function(a,t,e){var n=e(507);"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);e(44)("76be450c",n,!0,{})},701:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"day"},a._l(a.dayList,function(t,n){return e("span",{key:t.key,staticClass:"day_btn",style:{color:a.changeDayColor===n?"#FE5C6C":"#000"},on:{click:function(e){a.handleTapDay(n,t.key,t.link)}}},[a._v(a._s(t.day))])})),a._v(" "),e("bookRankList",{attrs:{dataList:a.rankBookList,infiniteHandler:a.infiniteHandler,dayList:a.dayList,RankType:"2"}})],1)},staticRenderFns:[]}}});