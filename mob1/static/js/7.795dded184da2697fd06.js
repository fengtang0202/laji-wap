webpackJsonp([7],{329:function(t,i,e){function n(t){e(630)}var o=e(0)(e(523),e(775),n,"data-v-11f7820b",null);t.exports=o.exports},361:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}}},362:function(t,i,e){i=t.exports=e(29)(!1),i.push([t.i,'.weui-mask{background:rgba(0,0,0,.6)}.weui-mask,.weui-mask_transparent{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0}.weui-toast{position:fixed;z-index:5001;width:7.6em;min-height:7.6em;top:180px;left:50%;margin-left:-3.8em;background:hsla(0,0%,7%,.7);text-align:center;border-radius:5px;color:#fff}.weui-icon_toast{margin:22px 0 0;display:block}.weui-icon_toast.weui-icon-success-no-circle:before{color:#fff;font-size:55px}.weui-toast__content{margin:0 0 15px}.weui-loading{width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:weuiLoading 1s steps(12) infinite;animation:weuiLoading 1s steps(12) infinite;background:transparent url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=") no-repeat;background-size:100%}.weui-loading.weui-loading_transparent{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTAwIDEwMCc+PHBhdGggZmlsbD0nbm9uZScgZD0nTTAgMGgxMDB2MTAwSDB6Jy8+PHJlY3QgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjU2KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC0zMCknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDEwNS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjQzKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA3NS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjM4KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2NSA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjMyKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTguNjYgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4yOCknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoMTUwIDU0LjAyIDY1KScvPjxyZWN0IHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyB4PSc0Ni41JyB5PSc0MCcgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuMjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA1MCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjIpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKC0xNTAgNDUuOTggNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xNyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTEyMCA0MS4zNCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjE0KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtOTAgMzUgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtNjAgMjQuMDIgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4wMyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTMwIC01Ljk4IDY1KScvPjwvc3ZnPgo=")}@-webkit-keyframes weuiLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes weuiLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vux-loading .weui-toast{z-index:5001}.weui-icon_toast.weui-loading{margin:30px 0 0;width:38px;height:38px;vertical-align:baseline;display:inline-block}.vux-mask-enter,.vux-mask-leave-active{opacity:0}.vux-mask-enter-active,.vux-mask-leave-active{-webkit-transition:opacity .3s;transition:opacity .3s}.vux-loading-no-text .weui-toast{min-height:98px}',""])},363:function(t,i,e){var n=e(362);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(51)("5c70e347",n,!0,{})},364:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("transition",{attrs:{name:t.transition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading",class:t.text?"":"vux-loading-no-text"},[e("div",{staticClass:"weui-mask_transparent"}),t._v(" "),e("div",{staticClass:"weui-toast",style:{position:t.position}},[e("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),t.text?e("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2):t._e()])])])},staticRenderFns:[]}},365:function(t,i,e){function n(t){e(363)}var o=e(0)(e(361),e(364),n,null,null);t.exports=o.exports},374:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAAaNJREFUeAHt2rFKxEAQxvFLUtn6QDbWFj6EhVokpBFBKwWxCUkhFvcQFjY2Nj6QrVUSZ+HSCCJclt1v8L/NbLND9pfZQIbdbBgIIIAAAggggAACCCCAAAIIIIAAAggggAACkQSKSHlWpem67sIS3BVFsW2a5trivCphxMVlxFxrUp3O83w4TdOVYT3ZXOLFhQ1JAJVlGarnayd8roQkAWTH6qOqqhNFJJlSDtUzDMPxOI6vdsQOdtX03LbtZc5vkhSQIpIckBqSJJASkiyQCpI0kAKSPFBuJBdAOZHcAOVCcgWUA8kdUGokl0ApkdwCpUKS+JsPm91n1HX9/rML0Pf9wz65flvjGihsKiBZuF82aJ2As2UeI7oHCi0Sg7hZMKw1sl3mMSLfoD8U3QKlaq65BEqFE4rLHVBKHHdAqXFcAeXAcQOUC8cFUE4ceaDcONJACjiyQCo4kkBKOHJAajhSQIo4MkDW5Dqyy1NvSrc6Ak4YEv0gw7lVxJEBsgd5sUbXp900e8x9HyigMBBAAAEEEEAAAQQQQAABBBBAAAEE/q/AN1UJkD+PgrakAAAAAElFTkSuQmCC"},442:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={name:"swiper-item",mounted:function(){var t=this;this.$nextTick(function(){t.$parent.rerender()})},beforeDestroy:function(){var t=this.$parent;this.$nextTick(function(){t.rerender()})}}},443:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(56),o=e.n(n),s=e(445),a=e(116);i.default={name:"swiper",created:function(){this.index=this.value||0,this.index&&(this.current=this.index)},mounted:function(){var t=this;this.hasTwoLoopItem(),this.$nextTick(function(){t.list&&0===t.list.length||t.render(t.index),t.xheight=t.getHeight(),t.$emit("on-get-height",t.xheight)})},methods:{hasTwoLoopItem:function(){2===this.list.length&&this.loop?this.listTwoLoopItem=this.list:this.listTwoLoopItem=[]},clickListItem:function(t){e.i(a.a)(t.url,this.$router),this.$emit("on-click-list-item",JSON.parse(o()(t)))},buildBackgroundUrl:function(t){return t.fallbackImg?"url("+t.img+"), url("+t.fallbackImg+")":"url("+t.img+")"},render:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.swiper&&this.swiper.destroy(),this.swiper=new s.a({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on("swiped",function(i,e){t.current=e%t.length,t.index=e%t.length}),i>0&&this.swiper.go(i)},rerender:function(){var t=this;this.$el&&!this.hasRender&&(this.hasRender=!0,this.hasTwoLoopItem(),this.$nextTick(function(){t.index=t.value||0,t.current=t.value||0,t.length=t.list.length||t.$children.length,t.destroy(),t.render(t.value)}))},destroy:function(){this.hasRender=!1,this.swiper&&this.swiper.destroy()},getHeight:function(){var t=parseInt(this.height,10);return t?this.height:t?void 0:this.aspectRatio?this.$el.offsetWidth*this.aspectRatio+"px":"180px"}},props:{list:{type:Array,default:function(){return[]}},direction:{type:String,default:"horizontal"},showDots:{type:Boolean,default:!0},showDescMask:{type:Boolean,default:!0},dotsPosition:{type:String,default:"right"},dotsClass:String,auto:Boolean,loop:Boolean,interval:{type:Number,default:3e3},threshold:{type:Number,default:50},duration:{type:Number,default:300},height:{type:String,default:"auto"},aspectRatio:Number,minMovingDistance:{type:Number,default:0},value:{type:Number,default:0}},data:function(){return{hasRender:!1,current:this.index||0,xheight:"auto",length:this.list.length,index:0,listTwoLoopItem:[]}},watch:{auto:function(t){t?this.swiper&&this.swiper._auto():this.swiper&&this.swiper.stop()},list:function(t){this.rerender()},current:function(t){this.index=t,this.$emit("on-index-change",t)},index:function(t){var i=this;t!==this.current&&this.$nextTick(function(){i.swiper&&i.swiper.go(t)}),this.$emit("input",t)},value:function(t){this.index=t}},beforeDestroy:function(){this.destroy()}}},445:function(t,i,e){"use strict";var n=e(446),o=e.n(n),s=e(447),a=e.n(s),r=e(35),c=e.n(r),d=function(t){return Array.prototype.slice.call(t)},l=function(){function t(i){if(o()(this,t),this._default={container:".vux-swiper",item:".vux-swiper-item",direction:"vertical",activeClass:"active",threshold:50,duration:300,auto:!1,loop:!1,interval:3e3,height:"auto",minMovingDistance:0},this._options=c()(this._default,i),this._options.height=this._options.height.replace("px",""),this._start={},this._move={},this._end={},this._eventHandlers={},this._prev=this._current=this._goto=0,this._width=this._height=this._distance=0,this._offset=[],this.$box=this._options.container,this.$container=this._options.container.querySelector(".vux-swiper"),this.$items=this.$container.querySelectorAll(this._options.item),this.count=this.$items.length,this.realCount=this.$items.length,this._position=[],this._firstItemIndex=0,this.count)return this._init(),this._auto(),this._bind(),this._onResize(),this}return a()(t,[{key:"_auto",value:function(){var t=this;t.stop(),t._options.auto&&(t.timer=setTimeout(function(){t.next()},t._options.interval))}},{key:"updateItemWidth",value:function(){this._width=this.$box.offsetWidth||document.documentElement.offsetWidth,this._distance="horizontal"===this._options.direction?this._width:this._height}},{key:"stop",value:function(){this.timer&&clearTimeout(this.timer)}},{key:"_loop",value:function(){return this._options.loop&&this.realCount>=3}},{key:"_onResize",value:function(){var t=this;this.resizeHandler=function(){setTimeout(function(){t.updateItemWidth(),t._setOffset(),t._setTransform()},100)},window.addEventListener("orientationchange",this.resizeHandler,!1)}},{key:"_init",value:function(){this._height="auto"===this._options.height?"auto":this._options.height-0,this.updateItemWidth(),this._initPosition(),this._activate(this._current),this._setOffset(),this._setTransform(),this._loop()&&this._loopRender()}},{key:"_initPosition",value:function(){for(var t=0;t<this.realCount;t++)this._position.push(t)}},{key:"_movePosition",value:function(t){var i=this;if(t>0){var e=i._position.splice(0,1);i._position.push(e[0])}else if(t<0){var n=i._position.pop();i._position.unshift(n)}}},{key:"_setOffset",value:function(){var t=this,i=t._position.indexOf(t._current);t._offset=[],d(t.$items).forEach(function(e,n){t._offset.push((n-i)*t._distance)})}},{key:"_setTransition",value:function(t){t=t||this._options.duration||"none";var i="none"===t?"none":t+"ms";d(this.$items).forEach(function(t,e){t.style.webkitTransition=i,t.style.transition=i})}},{key:"_setTransform",value:function(t){var i=this;t=t||0,d(i.$items).forEach(function(e,n){var o=i._offset[n]+t,s="translate3d("+o+"px, 0, 0)";"vertical"===i._options.direction&&(s="translate3d(0, "+o+"px, 0)"),e.style.webkitTransform=s,e.style.transform=s})}},{key:"_bind",value:function(){var t=this,i=this;i.touchstartHandler=function(t){i.stop(),i._start.x=t.changedTouches[0].pageX,i._start.y=t.changedTouches[0].pageY,i._setTransition("none")},i.touchmoveHandler=function(e){if(1!==i.count){i._move.x=e.changedTouches[0].pageX,i._move.y=e.changedTouches[0].pageY;var n=i._move.x-i._start.x,o=i._move.y-i._start.y,s=o,a=Math.abs(n)>Math.abs(o);"horizontal"===i._options.direction&&a&&(s=n),t._options.loop||t._current!==t.count-1&&0!==t._current||(s/=3),(i._options.minMovingDistance&&Math.abs(s)>=i._options.minMovingDistance||!i._options.minMovingDistance)&&a&&i._setTransform(s),a&&e.preventDefault()}},i.touchendHandler=function(t){if(1!==i.count){i._end.x=t.changedTouches[0].pageX,i._end.y=t.changedTouches[0].pageY;var e=i._end.y-i._start.y;"horizontal"===i._options.direction&&(e=i._end.x-i._start.x),e=i.getDistance(e),0!==e&&i._options.minMovingDistance&&Math.abs(e)<i._options.minMovingDistance||(e>i._options.threshold?i.move(-1):e<-i._options.threshold?i.move(1):i.move(0),i._loopRender())}},i.transitionEndHandler=function(t){i._activate(i._current);var e=i._eventHandlers.swiped;e&&e.apply(i,[i._prev%i.count,i._current%i.count]),i._auto(),i._loopRender(),t.preventDefault()},i.$container.addEventListener("touchstart",i.touchstartHandler,!1),i.$container.addEventListener("touchmove",i.touchmoveHandler,!1),i.$container.addEventListener("touchend",i.touchendHandler,!1),i.$items[1]&&i.$items[1].addEventListener("webkitTransitionEnd",i.transitionEndHandler,!1)}},{key:"_loopRender",value:function(){var t=this;t._loop()&&(0===t._offset[t._offset.length-1]?(t.$container.appendChild(t.$items[0]),t._loopEvent(1)):0===t._offset[0]&&(t.$container.insertBefore(t.$items[t.$items.length-1],t.$container.firstChild),t._loopEvent(-1)))}},{key:"_loopEvent",value:function(t){var i=this;i._itemDestoy(),i.$items=i.$container.querySelectorAll(i._options.item),i.$items[1]&&i.$items[1].addEventListener("webkitTransitionEnd",i.transitionEndHandler,!1),i._movePosition(t),i._setOffset(),i._setTransform()}},{key:"getDistance",value:function(t){return this._loop()?t:t>0&&0===this._current?0:t<0&&this._current===this.realCount-1?0:t}},{key:"_moveIndex",value:function(t){0!==t&&(this._prev=this._current,this._current+=this.realCount,this._current+=t,this._current%=this.realCount)}},{key:"_activate",value:function(t){var i=this._options.activeClass;Array.prototype.forEach.call(this.$items,function(e,n){e.classList.remove(i),t===Number(e.dataset.index)&&e.classList.add(i)})}},{key:"go",value:function(t){var i=this;return i.stop(),t=t||0,t+=this.realCount,t%=this.realCount,t=this._position.indexOf(t)-this._position.indexOf(this._current),i._moveIndex(t),i._setOffset(),i._setTransition(),i._setTransform(),i._auto(),this}},{key:"next",value:function(){return this.move(1),this}},{key:"move",value:function(t){return this.go(this._current+t),this}},{key:"on",value:function(t,i){return this._eventHandlers[t]&&console.error("[swiper] event "+t+" is already register"),"function"!=typeof i&&console.error("[swiper] parameter callback must be a function"),this._eventHandlers[t]=i,this}},{key:"_itemDestoy",value:function(){var t=this;this.$items.length&&d(this.$items).forEach(function(i){i.removeEventListener("webkitTransitionEnd",t.transitionEndHandler,!1)})}},{key:"destroy",value:function(){if(this.stop(),this._current=0,this._setTransform(0),window.removeEventListener("orientationchange",this.resizeHandler,!1),this.$container.removeEventListener("touchstart",this.touchstartHandler,!1),this.$container.removeEventListener("touchmove",this.touchmoveHandler,!1),this.$container.removeEventListener("touchend",this.touchendHandler,!1),this._itemDestoy(),this._options.loop&&2===this.count){var t=this.$container.querySelector(this._options.item+"-clone");t&&this.$container.removeChild(t),t=this.$container.querySelector(this._options.item+"-clone"),t&&this.$container.removeChild(t)}}}]),t}();i.a=l},446:function(t,i,e){"use strict";i.__esModule=!0,i.default=function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}},447:function(t,i,e){"use strict";i.__esModule=!0;var n=e(135),o=function(t){return t&&t.__esModule?t:{default:t}}(n);i.default=function(){function t(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,o.default)(t,n.key,n)}}return function(i,e,n){return e&&t(i.prototype,e),n&&t(i,n),i}}()},449:function(t,i,e){i=t.exports=e(29)(!1),i.push([t.i,".vux-slider{overflow:hidden;position:relative}.vux-slider .vux-indicator-right,.vux-slider>.vux-indicator{position:absolute;right:15px;bottom:10px}.vux-slider .vux-indicator-right>a,.vux-slider>.vux-indicator>a{float:left;margin-left:6px}.vux-slider .vux-indicator-right>a>.vux-icon-dot,.vux-slider>.vux-indicator>a>.vux-icon-dot{display:inline-block;vertical-align:middle;width:6px;height:6px;border-radius:3px;background-color:#d0cdd1}.vux-slider .vux-indicator-right>a>.vux-icon-dot.active,.vux-slider>.vux-indicator>a>.vux-icon-dot.active{background-color:#04be02}.vux-slider>.vux-indicator-center{right:50%;-webkit-transform:translateX(50%);transform:translateX(50%)}.vux-slider>.vux-indicator-left{left:15px;right:auto}.vux-slider>.vux-swiper{overflow:hidden;position:relative}.vux-slider>.vux-swiper>.vux-swiper-item{position:absolute;top:0;left:0;width:100%;height:100%}.vux-slider>.vux-swiper>.vux-swiper-item>a{display:block;width:100%;height:100%}.vux-slider>.vux-swiper>.vux-swiper-item>a>.vux-img{display:block;width:100%;height:100%;background:50% no-repeat;background-size:cover}.vux-slider>.vux-swiper>.vux-swiper-item>a>.vux-swiper-desc{position:absolute;left:0;right:0;bottom:0;height:1.4em;font-size:16px;padding:20px 50px 12px 13px;margin:0;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,transparent),to(rgba(0,0,0,.7)));background-image:linear-gradient(180deg,transparent 0,rgba(0,0,0,.7));color:#fff;text-shadow:0 1px 0 rgba(0,0,0,.5);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}",""])},451:function(t,i,e){var n=e(449);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(51)("41d284d3",n,!0,{})},464:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"vux-slider"},[e("div",{staticClass:"vux-swiper",style:{height:t.xheight}},[t._t("default"),t._v(" "),t._l(t.list,function(i,n){return e("div",{staticClass:"vux-swiper-item",attrs:{"data-index":n},on:{click:function(e){t.clickListItem(i)}}},[e("a",{attrs:{href:"javascript:"}},[e("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(i)}}),t._v(" "),t.showDescMask?e("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(i.title))]):t._e()])])}),t._v(" "),t._l(t.listTwoLoopItem,function(i,n){return t.listTwoLoopItem.length>0?e("div",{staticClass:"vux-swiper-item vux-swiper-item-clone",attrs:{"data-index":n},on:{click:function(e){t.clickListItem(i)}}},[e("a",{attrs:{href:"javascript:"}},[e("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(i)}}),t._v(" "),t.showDescMask?e("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(i.title))]):t._e()])]):t._e()})],2),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showDots,expression:"showDots"}],class:[t.dotsClass,"vux-indicator","vux-indicator-"+t.dotsPosition]},t._l(t.length,function(i){return e("a",{attrs:{href:"javascript:"}},[e("i",{staticClass:"vux-icon-dot",class:{active:i-1===t.current}})])}))])},staticRenderFns:[]}},465:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{staticClass:"vux-swiper-item"},[t._t("default")],2)},staticRenderFns:[]}},467:function(t,i,e){var n=e(0)(e(442),e(465),null,null,null);t.exports=n.exports},468:function(t,i,e){function n(t){e(451)}var o=e(0)(e(443),e(464),n,null,null);t.exports=o.exports},523:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(31),o=e.n(n),s=e(365),a=e.n(s),r=e(468),c=e.n(r),d=e(467),l=e.n(d),h=e(30),u=e(52),g=e(13);i.default={name:"index",data:function(){return{showContent:!1,bookList:[],i:.4,total:10,newBook:0,newList:[],distance:!1,newRecommendList:[],pictureList:[],isShow:!1,page:1,lastPage:0,addBook:!1,bottomList:[{title:"首页",link:"/"},{title:"书架",link:"/bookRack"},{title:"充值",link:"/payMoney"},{title:"客户端",link:"/download"},{title:"联系我们",link:"/contactUs"},{title:"电脑版"}]}},components:{Loading:a.a,Swiper:c.a,SwiperItem:l.a},computed:o()({},e.i(g.b)(["isLogin"])),methods:{manualLoad:function(){this.page<this.lastPage?(this.page+=1,this.isShow=!0,this.handleNewbook()):this.addBook=!1},handleGetbook:function(){var t=this;e.i(h.d)(this,"/api/hot/homePageRecommended",function(i){200==i.returnCode&&(t.showContent=!0,t.bookList=i.data.HostXiaoBianRecommend,t.pictureList=i.data.pictureCarouselVersionTow)})},handle:function(t,i){this.$router.push(t)},handleScrollTop:function(){this.scroll=document.documentElement.scrollTop||document.body.scrollTop,this.scroll>0&&(this.handleNewbook(),window.removeEventListener("scroll",this.handleScrollTop))},handleTap:function(t){0==t&&this.$router.push("/"),1==t&&this.handle("/bookRack"),2==t&&this.handle("/payMoney"),3==t&&e.i(u.a)(),4==t&&this.$router.push("/contactUs"),5==t&&(window.location.href="https://www.lajixs.com#fromapp")},handleNewbook:function(){var t=this;e.i(h.d)(this,"/api/hot/getbooklistList/"+this.page+"/"+this.total,function(i){200==i.returnCode&&(t.addBook=!0,t.isShow=!1,0==t.newList.length?t.newList=i.data.list:t.newList=t.newList.concat(i.data.list),t.lastPage=i.data.lastPage)})},handleMore:function(){this.$router.push({path:"/editorRecommend"})},handleGo:function(t){0!=t.bookId?this.$router.push({path:"/bookDetails",query:{bookId:t.bookId}}):window.location.href=t.detailsImgAndPageURL}},mounted:function(){},created:function(){this.handleGetbook(),window.addEventListener("scroll",this.handleScrollTop)},destroyed:function(){window.removeEventListener("scroll",this.handleScrollTop)}}},567:function(t,i,e){i=t.exports=e(29)(!1),i.push([t.i,"#index[data-v-11f7820b]{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:PingFangSC-Regular}#index .edit_d[data-v-11f7820b]{height:.25rem;margin-top:.1rem;margin-bottom:.1rem;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 .14rem}#index .edit_d .left_img[data-v-11f7820b]{width:.24rem;height:.24rem;float:left}#index .edit_d .le_p[data-v-11f7820b]{font-size:.18rem;color:#333;margin-left:.05rem}#index .edit[data-v-11f7820b]{height:.25rem;margin-top:.1rem;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 .14rem}#index .edit .left_img[data-v-11f7820b]{width:.24rem;height:.24rem;float:left}#index .edit .le_p[data-v-11f7820b]{font-size:.18rem;color:#333;float:left}#index .edit .r_d[data-v-11f7820b]{float:right;height:.25rem}#index .edit .r_d .ri_p[data-v-11f7820b]{color:#666;font-size:.14rem;float:left;margin-top:.03rem}#index .edit .r_d img[data-v-11f7820b]{width:.24rem;height:.24rem}#index .line[data-v-11f7820b]{height:.06rem;background:#e9e9e9}#index .add_new_book[data-v-11f7820b]{text-align:center;color:#999;font-size:.14rem;margin-top:.2rem;height:.44rem;line-height:.44rem;border-top:1px solid #e9e9e9}#index .add_new_book img[data-v-11f7820b]{width:.12rem;height:.2rem;vertical-align:middle}#index .bottom_d[data-v-11f7820b]{width:100%;padding-bottom:.1rem;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:.27rem;background:#e9e9e9;color:#999;text-align:center}#index .bottom_d li[data-v-11f7820b]{font-size:.14rem;float:left;margin-left:.17rem;list-style:none}#index .bottom_d p[data-v-11f7820b]{font-size:.12rem}",""])},630:function(t,i,e){var n=e(567);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(51)("f573aeca",n,!0,{})},734:function(t,i){t.exports="data:image/png;base64,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"},743:function(t,i){t.exports="data:image/png;base64,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"},775:function(t,i,e){t.exports={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("keep-alive",[t.showContent?n("div",{attrs:{id:"index"}},[n("loading",{attrs:{show:t.isShow}}),t._v(" "),n("swiper",{attrs:{auto:"","aspect-ratio":t.i,"dots-position":"center"}},t._l(t.pictureList,function(i,e){return n("swiper-item",{key:e},[n("img",{staticStyle:{width:"100%"},attrs:{src:i.activityImgURL},on:{click:function(e){t.handleGo(i)}}})])})),t._v(" "),n("div",{staticClass:"edit"},[n("img",{staticClass:"left_img",attrs:{src:e(743)}}),t._v(" "),n("p",{staticClass:"le_p"},[t._v("小编推荐")]),t._v(" "),n("div",{attrs:{cLass:"r_d"},on:{click:function(i){t.handleMore()}}},[n("p",{staticClass:"ri_p"},[t._v("更多")]),t._v(" "),n("img",{attrs:{src:e(374)}})])]),t._v(" "),n("bookImg",{attrs:{data:t.bookList}}),t._v(" "),n("div",{staticClass:"line"}),t._v(" "),n("div",{ref:"newBook",staticClass:"edit_d"},[n("img",{staticClass:"left_img",attrs:{src:e(734)}}),t._v(" "),n("span",{staticClass:"le_p"},[t._v("最新小说")])]),t._v(" "),n("bookItem",{attrs:{list:t.newList}}),t._v(" "),t.addBook?n("div",{staticClass:"add_new_book",on:{click:function(i){t.manualLoad()}}},[n("span",[t._v("更多新书")]),t._v(" "),n("img",{attrs:{src:e(374),alt:""}})]):t._e(),t._v(" "),n("div",{staticClass:"bottom_d"},[n("ul",t._l(t.bottomList,function(i,e){return n("li",{key:e,on:{click:function(i){t.handleTap(e)}}},[t._v("\r\n                   "+t._s(i.title)+"\r\n                ")])})),t._v(" "),n("p",{staticStyle:{"margin-top":".5rem","margin-bottom":".1rem"}},[t._v("COPYRIGHT©辣鸡小说网 2017-2027，版权所有 杭州樱熊网络科技有限公司")]),t._v(" "),n("p",[t._v("浙ICP备16023962号-2")])])],1):t._e()])},staticRenderFns:[]}}});