webpackJsonp([28],{358:function(t,e,n){var o=n(0)(n(552),n(843),null,null,null);t.exports=o.exports},378:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(52),a=n(21),r=n.n(a);e.default={data:function(){return{handleIsPhone1:o.b,content:[]}},props:{chandleId:{type:String,default:""},chapterId:{type:String,default:""},bgImg:{type:String,default:""},bgColor:{type:String,default:""},btnImg:{type:String,default:""}},created:function(){var t=this;r.a.post("/api/book-read?chapterId="+this.chapterId).then(function(e){t.content=e.data.data.chapterInfo.chapterContent.replace(/<LG>[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}<\/LG>/gi,"<br>").replace(/<br>\s*<br>/gi,"<br>").split("<br>")})}}},379:function(t,e,n){e=t.exports=n(29)(!1),e.push([t.i,".content[data-v-4837a04f]{position:relative;padding-bottom:.58rem}.bookcontent[data-v-4837a04f]{padding:.1rem .24rem .3rem;letter-spacing:.01rem;text-align:justify;line-height:2;margin-top:-1rem;min-height:5rem}.f_content[data-v-4837a04f]{text-indent:2em;margin-top:.2rem}.downbtn[data-v-4837a04f]{width:100%;height:.58rem;background:#fff;color:#fff;position:fixed;bottom:0;padding:.12rem;text-align:center}.downbtn button[data-v-4837a04f]{width:93%;height:.34rem;border:0;outline:none;color:#fff;background:#5a89bf;border-radius:3px;background-size:cover;background-position:50%;background-repeat:no-repeat}",""])},380:function(t,e,n){var o=n(379);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(51)("c5dcf11c",o,!0,{})},381:function(t,e,n){t.exports=n.p+"static/img/hslyBottom.6fcb1a6.jpg"},382:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content"},[o("div",[o("img",{staticStyle:{width:"100%",display:"block","pointer-events":"none"},attrs:{src:t.bgImg,alt:""}})]),t._v(" "),o("div",{staticClass:"bookcontent",style:{background:t.bgColor}},t._l(t.content,function(e,n){return o("div",{key:n,staticClass:"f_content"},[t._v("\n            "+t._s(e.trim())+"\n       ")])})),t._v(" "),o("img",{staticStyle:{width:"100%",display:"block"},attrs:{src:n(381),alt:""},on:{click:function(e){t.handleIsPhone1(t.chandleId)}}}),t._v(" "),o("div",{staticClass:"downbtn"},[o("button",{style:{backgroundImage:"url("+t.btnImg+")"},on:{click:function(e){t.handleIsPhone1(t.chandleId)}}},[t.btnImg?t._e():o("span",[t._v("继续阅读全文,下载辣鸡小说>")])])])])},staticRenderFns:[]}},386:function(t,e,n){function o(t){n(380)}var a=n(0)(n(378),n(382),o,"data-v-4837a04f",null);t.exports=a.exports},454:function(t,e,n){t.exports=n.p+"static/img/bookbg.aed0e40.jpg"},552:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(386),a=n.n(o);e.default={data:function(){return{bgImg:n(454),bgColor:"linear-gradient(to bottom, #B3EAFF, #f6f4fd 50%, #FFF8FF)"}},components:{bbook:a.a}}},843:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("bbook",{attrs:{chandleId:"LG20180703013",bgColor:t.bgColor,bgImg:t.bgImg,chapterId:"7362"}})},staticRenderFns:[]}}});