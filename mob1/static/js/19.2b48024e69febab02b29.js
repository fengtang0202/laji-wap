webpackJsonp([19],{303:function(t,e,n){var o=n(0)(n(520),n(784),null,null,null);t.exports=o.exports},340:function(t,e,n){t.exports=n.p+"static/img/tgbg.9783d6e.jpg"},346:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=(n(97),n(43));e.default={data:function(){return{handleIsPhone:o.b}},props:{bgImg:{type:String,default:""},bgbtn:{type:String,default:""},ios:{type:String,default:""},android:{type:String,default:""}}}},347:function(t,e,n){var o=n(99);e=t.exports=n(20)(!1),e.push([t.i,".bg[data-v-157ea2d1]{background-image:url("+o(n(340))+");background-repeat:no-repeat;background-position:50%;background-size:cover;height:100%;width:100%;position:absolute}.bg .down[data-v-157ea2d1]{position:absolute;width:100%;height:.98rem;text-align:center;bottom:0}.bg .down img[data-v-157ea2d1]{width:2.17rem;height:.98rem}",""])},348:function(t,e,n){var o=n(347);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(39)("45336459",o,!0,{})},349:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg",style:{backgroundImage:"url("+t.bgImg+")"}},[n("div",{staticClass:"down"},[n("img",{attrs:{id:"downApp",src:t.bgbtn,alt:""},on:{click:function(e){t.handleIsPhone(t.android,t.ios)}}})])])},staticRenderFns:[]}},350:function(t,e,n){function o(t){n(348)}var a=n(0)(n(346),n(349),o,"data-v-157ea2d1",null);t.exports=a.exports},354:function(t,e,n){t.exports=n.p+"static/img/tgbg1.d110ee5.jpg"},355:function(t,e,n){t.exports=n.p+"static/img/tgbtn1.9ceeb1f.gif"},520:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(350),a=n.n(o);e.default={components:{bcommon:a.a},data:function(){return{bgImg:n(354),bgbtn:n(355)}}}},784:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("bcommon",{attrs:{bgImg:t.bgImg,bgbtn:t.bgbtn,android:"https://www.lajixs.com/api/appDownLoad?channelid=LG20180703006"}})},staticRenderFns:[]}}});