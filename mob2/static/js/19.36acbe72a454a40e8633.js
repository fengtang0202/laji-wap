webpackJsonp([19],{303:function(t,n,e){var o=e(0)(e(520),e(784),null,null,null);t.exports=o.exports},340:function(t,n,e){t.exports=e.p+"static/img/tgbg.9783d6e.jpg"},346:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=(e(97),e(43));n.default={data:function(){return{handleIsPhone:o.b}},props:{bgImg:{type:String,default:""},bgbtn:{type:String,default:""},ios:{type:String,default:""},android:{type:String,default:""}}}},347:function(t,n,e){var o=e(99);n=t.exports=e(20)(!1),n.push([t.i,".bg[data-v-157ea2d1]{background-image:url("+o(e(340))+");background-repeat:no-repeat;background-position:50%;background-size:cover;height:100%;width:100%;position:absolute}.bg .down[data-v-157ea2d1]{position:absolute;width:100%;height:.98rem;text-align:center;bottom:0}.bg .down img[data-v-157ea2d1]{width:2.17rem;height:.98rem}",""])},348:function(t,n,e){var o=e(347);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(39)("45336459",o,!0,{})},349:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"bg",style:{backgroundImage:"url("+t.bgImg+")"}},[e("div",{staticClass:"down"},[e("img",{attrs:{id:"downApp",src:t.bgbtn,alt:""},on:{click:function(n){t.handleIsPhone(t.android,t.ios)}}})])])},staticRenderFns:[]}},350:function(t,n,e){function o(t){e(348)}var a=e(0)(e(346),e(349),o,"data-v-157ea2d1",null);t.exports=a.exports},354:function(t,n,e){t.exports=e.p+"static/img/tgbg1.d110ee5.jpg"},355:function(t,n,e){t.exports=e.p+"static/img/tgbtn1.26bcbc5.gif"},520:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(350),a=e.n(o);n.default={components:{bcommon:a.a},data:function(){return{bgImg:e(354),bgbtn:e(355)}}}},784:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("bcommon",{attrs:{bgImg:t.bgImg,bgbtn:t.bgbtn,android:"https://www.lajixs.com/api/appDownLoad?channelid=LG20180703006"}})},staticRenderFns:[]}}});