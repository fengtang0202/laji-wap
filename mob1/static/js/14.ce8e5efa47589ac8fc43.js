webpackJsonp([14],{355:function(t,n,e){function o(t){e(667)}var a=e(0)(e(549),e(822),o,"data-v-77d730b4",null);t.exports=a.exports},378:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(52),a=e(21),r=e.n(a);n.default={data:function(){return{handleIsPhone1:o.b,content:[]}},props:{chandleId:{type:String,default:""},chapterId:{type:String,default:""},bgImg:{type:String,default:""},bgColor:{type:String,default:""},btnImg:{type:String,default:""}},created:function(){var t=this;r.a.post("/api/book-read?chapterId="+this.chapterId).then(function(n){t.content=n.data.data.chapterInfo.chapterContent.replace(/<LG>[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}<\/LG>/gi,"<br>").replace(/<br>\s*<br>/gi,"<br>").split("<br>")})}}},379:function(t,n,e){n=t.exports=e(29)(!1),n.push([t.i,".content[data-v-4837a04f]{position:relative;padding-bottom:.58rem}.bookcontent[data-v-4837a04f]{padding:.1rem .24rem .3rem;letter-spacing:.01rem;text-align:justify;line-height:2;min-height:5rem}.f_content[data-v-4837a04f]{text-indent:2em;margin-top:.2rem}.downbtn[data-v-4837a04f]{width:100%;height:.58rem;background:#fff;color:#fff;position:fixed;bottom:0;padding:.12rem;text-align:center}.downbtn button[data-v-4837a04f]{width:93%;height:.34rem;border:0;outline:none;color:#fff;background:#5a89bf;border-radius:3px;background-size:cover;background-position:50%;background-repeat:no-repeat}",""])},380:function(t,n,e){var o=e(379);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(51)("c5dcf11c",o,!0,{})},381:function(t,n,e){t.exports=e.p+"static/img/hslyBottom.6fcb1a6.jpg"},382:function(t,n,e){t.exports={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"content"},[o("div",[o("img",{staticStyle:{width:"100%",display:"block","pointer-events":"none"},attrs:{src:t.bgImg,alt:""}})]),t._v(" "),o("div",{staticClass:"bookcontent",style:{background:t.bgColor,marginTop:t.btnImg?"0":"-1rem"}},t._l(t.content,function(n,e){return o("div",{key:e,staticClass:"f_content"},[t._v("\n            "+t._s(n.trim())+"\n       ")])})),t._v(" "),o("img",{staticStyle:{width:"100%",display:"block"},attrs:{src:e(381),alt:""},on:{click:function(n){t.handleIsPhone1(t.chandleId)}}}),t._v(" "),o("div",{staticClass:"downbtn"},[o("button",{style:{backgroundImage:"url("+t.btnImg+")"},on:{click:function(n){t.handleIsPhone1(t.chandleId)}}},[t.btnImg?t._e():o("span",[t._v("继续阅读全文,下载辣鸡小说>")])])])])},staticRenderFns:[]}},386:function(t,n,e){function o(t){e(380)}var a=e(0)(e(378),e(382),o,"data-v-4837a04f",null);t.exports=a.exports},453:function(t,n,e){t.exports=e.p+"static/img/bb.ebaf8cd.jpg"},455:function(t,n,e){t.exports=e.p+"static/img/cc.87bb6fb.jpg"},549:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(386),a=e.n(o);n.default={data:function(){return{bgImg:e(453),bgColor:"linear-gradient( #F6CFDC 0%, #A4E4E3 50%, #FCFCFC 100%)",btnImg:e(455)}},components:{bbook:a.a}}},604:function(t,n,e){n=t.exports=e(29)(!1),n.push([t.i,"",""])},667:function(t,n,e){var o=e(604);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(51)("5056dd2b",o,!0,{})},822:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("bbook",{attrs:{chandleId:"LG20180703010",btnImg:t.btnImg,bgImg:t.bgImg,bgColor:t.bgColor,chapterId:"102567"}})},staticRenderFns:[]}}});