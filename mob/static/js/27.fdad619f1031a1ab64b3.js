webpackJsonp([27],{360:function(t,e,r){function n(t){r(678)}var o=r(0)(r(560),r(839),n,"data-v-79430ca1",null);t.exports=o.exports},374:function(t,e,r){"use strict";e.__esModule=!0;var n=r(115),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,r){function n(i,a){try{var c=e[i](a),u=c.value}catch(t){return void r(t)}if(!c.done)return o.default.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}return n("next")})}}},375:function(t,e,r){t.exports=r(376)},376:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(377),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},377:function(t,e){!function(e){"use strict";function r(t,e,r,n){var i=e&&e.prototype instanceof o?e:o,a=Object.create(i.prototype),c=new d(n||[]);return a._invoke=s(t,r,c),a}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function c(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function u(t){function e(r,o,i,a){var c=n(t[r],t,o);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&m.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){u.value=t,i(u)},a)}a(c.arg)}function r(t,r){function n(){return new Promise(function(n,o){e(t,r,n,o)})}return o=o?o.then(n,n):n()}var o;this._invoke=r}function s(t,e,r){var o=E;return function(i,a){if(o===O)throw new Error("Generator is already running");if(o===G){if("throw"===i)throw a;return v()}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=f(c,r);if(u){if(u===R)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===E)throw o=G,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=O;var s=n(t,e,r);if("normal"===s.type){if(o=r.done?G:j,s.arg===R)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=G,r.method="throw",r.arg=s.arg)}}}function f(t,e){var r=t.iterator[e.method];if(r===g){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=g,f(t,e),"throw"===e.method))return R;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return R}var o=n(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,R;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=g),e.delegate=null,R):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,R)}function l(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function h(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function d(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function p(t){if(t){var e=t[w];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(m.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=g,e.done=!0,e};return n.next=n}}return{next:v}}function v(){return{value:g,done:!0}}var g,y=Object.prototype,m=y.hasOwnProperty,b="function"==typeof Symbol?Symbol:{},w=b.iterator||"@@iterator",x=b.asyncIterator||"@@asyncIterator",_=b.toStringTag||"@@toStringTag",k="object"==typeof t,L=e.regeneratorRuntime;if(L)return void(k&&(t.exports=L));L=e.regeneratorRuntime=k?t.exports:{},L.wrap=r;var E="suspendedStart",j="suspendedYield",O="executing",G="completed",R={},I={};I[w]=function(){return this};var P=Object.getPrototypeOf,N=P&&P(P(p([])));N&&N!==y&&m.call(N,w)&&(I=N);var F=a.prototype=o.prototype=Object.create(I);i.prototype=F.constructor=a,a.constructor=i,a[_]=i.displayName="GeneratorFunction",L.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},L.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,_ in t||(t[_]="GeneratorFunction")),t.prototype=Object.create(F),t},L.awrap=function(t){return{__await:t}},c(u.prototype),u.prototype[x]=function(){return this},L.AsyncIterator=u,L.async=function(t,e,n,o){var i=new u(r(t,e,n,o));return L.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},c(F),F[_]="Generator",F[w]=function(){return this},F.toString=function(){return"[object Generator]"},L.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},L.values=p,d.prototype={constructor:d,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=g,this.done=!1,this.delegate=null,this.method="next",this.arg=g,this.tryEntries.forEach(h),!t)for(var e in this)"t"===e.charAt(0)&&m.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=g)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=g),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=m.call(o,"catchLoc"),c=m.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&m.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,R):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),R},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),h(r),R}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;h(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:p(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=g),R}}}(function(){return this}()||Function("return this")())},560:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(375),o=r.n(n),i=r(374),a=r.n(i),c=r(52),u=r(22),s=r.n(u);e.default={data:function(){return{handleIsPhone1:c.b,content:[],btns:[{text:"上一章",link:"/bookRead?bookId=16828&chapterId=159588"},{text:"回到首页",link:"/"},{text:"下一章",link:"/bookRead?bookId=16828&chapterId=160322"}]}},methods:{getBookText:function(t){var e=this;return a()(o.a.mark(function r(){var n,i;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:n="",i=0;case 2:if(!(i<t.length)){r.next=8;break}return r.next=5,s.a.post("/api/book-read?chapterId="+t[i]).then(function(t){n+=t.data.data.chapterInfo.chapterContent.replace(/<LG>[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}<\/LG>/gi,"<br>").replace(/<br>\s*<br>/gi,"<br>")});case 5:i++,r.next=2;break;case 8:e.content=n.split("<br>");case 9:case"end":return r.stop()}},r,e)}))()},handleGo:function(t){this.$router.push(t)}},created:function(){this.getBookText([160320,160321]),sessionStorage.setItem("gc","a")}}},613:function(t,e,r){e=t.exports=r(29)(!1),e.push([t.i,".content[data-v-79430ca1]{position:relative;padding-bottom:.58rem}.bookcontent[data-v-79430ca1]{padding:.1rem .24rem .8rem;letter-spacing:.05rem;text-align:justify;line-height:2;background:-webkit-gradient(linear,left top,left bottom,from(#fbfaf8),to(#ddd9d6));background:linear-gradient(#fbfaf8,#ddd9d6);min-height:5rem}.f_content[data-v-79430ca1]{text-indent:2em;margin-top:.2rem}.downbtn[data-v-79430ca1]{width:100%;height:.58rem;background:#fff;color:#fff;position:fixed;bottom:0;padding:.12rem}.downbtn li[data-v-79430ca1]{float:left;width:33%;text-align:center;list-style:none}.downbtn button[data-v-79430ca1]{width:80%;height:.34rem;border:0;outline:none;background:#274963;color:#fff;border-radius:3px}",""])},678:function(t,e,r){var n=r(613);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(51)("649448fc",n,!0,{})},723:function(t,e,r){t.exports=r.p+"static/img/bookbggc.b911f9a.jpg"},839:function(t,e,r){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("div",{staticClass:"bookcontent"},t._l(t.content,function(e,n){return r("div",{key:n,staticClass:"f_content"},[t._v("\n            "+t._s(e.trim())+"\n       ")])})),t._v(" "),r("ul",{staticClass:"downbtn"},t._l(t.btns,function(e,n){return r("li",{key:n},[r("button",{on:{click:function(r){t.handleGo(e.link)}}},[t._v(t._s(e.text))])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{staticStyle:{width:"100%",display:"block","pointer-events":"none"},attrs:{src:r(723),alt:""}})])}]}}});