(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-014e9196"],{"0949":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"v-swipe-item"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],ref:"swipeItemContent",staticClass:"v-swipe-item-content"},[t._t("default")],2)])},s=[],a={name:"SwipeItem",data:function(){return{show:!0}},created:function(){this.$parent.optimization&&(this.show=!1)}},o=a,r=(e("e177"),e("2877")),c=Object(r["a"])(o,n,s,!1,null,null,null);i["a"]=c.exports},2318:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("h4",{staticClass:"text-center"},[t._v("Swpie 横向")]),e("Swipe",{staticClass:"demo-swipe",on:{change:t.change},model:{value:t.index,callback:function(i){t.index=i},expression:"index"}},t._l(t.imgs,function(t,i){return e("SwipeItem",{key:i},[e("img",{staticClass:"img",attrs:{src:t}})])}),1),e("h4",{staticClass:"text-center"},[t._v("Swpie 垂直")]),e("Swipe",{staticClass:"demo-swipe",attrs:{vertical:""},on:{change:t.change},model:{value:t.index2,callback:function(i){t.index2=i},expression:"index2"}},t._l(t.imgs,function(t){return e("SwipeItem",{key:t},[e("img",{staticClass:"img",attrs:{src:t}})])}),1)],1)},s=[],a=e("6d6f"),o=e("0949"),r={components:{Swipe:a["a"],SwipeItem:o["a"]},data:function(){return{index:0,index2:0,imgs:[e("d436"),e("f744"),e("7428"),e("e805"),e("2ebf")]}},methods:{change:function(t){console.log(t)}}},c=r,h=(e("a505"),e("2877")),l=Object(h["a"])(c,n,s,!1,null,null,null);i["default"]=l.exports},"26ec":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".demo-swipe{margin:0 auto;width:100%;height:200px;background:#efefef}.demo-swipe .img{max-width:100%}",""])},"2b66":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".v-swipe{position:relative;z-index:2;width:100%;overflow:hidden;-webkit-user-select:none;user-select:none}.v-swipe-items{display:-webkit-box;display:-webkit-flex;display:flex;height:100%;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.v-swipe-dots{position:absolute;bottom:10px;margin:0;padding:0;width:100%;list-style-type:none;text-align:center;font-size:0;-webkit-transform:translateZ(0);transform:translateZ(0)}.v-swipe-dots li{margin:0 3px;display:inline-block;width:6px;height:6px;background:#efefef;border-radius:50%;opacity:.5;-webkit-transition:opacity .3s;transition:opacity .3s}.v-swipe-dots li.v-swipe-dots-active{opacity:1}.v-swipe-vertical .v-swipe-items{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.v-swipe-vertical .v-swipe-item{height:100%}.v-swipe-vertical .v-swipe-dots{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;bottom:auto;left:10px;top:0;height:100%;width:auto}.v-swipe-vertical .v-swipe-dots li{display:block;margin:3px 0}",""])},"2ebf":function(t,i,e){t.exports=e.p+"img/timg5.944ff2fd.jpeg"},4156:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".v-swipe-item{position:relative;-webkit-box-flex:0;-webkit-flex:0 0 100%;flex:0 0 100%}.v-swipe-item-content{height:100%}",""])},"42a5":function(t,i,e){"use strict";e.d(i,"a",function(){return h}),e.d(i,"b",function(){return l});e("f751");var n=e("d4ec"),s=e("bee2"),a=e("ac6e"),o=e("6116");function r(t){return t.touches?t.touches[0]:t}var c={horizontal:["Left","Right"],vertical:["Up","Down"]},h=function(){function t(i){Object(n["a"])(this,t),this.lastX=0,this.lastY=0,this.action="",this.lock="",this.moved=!1,this.touchDelay=3,this.delay=this.touchDelay,this.isPreventDefault=function(){return!1},this.isStopPropagation=function(){return!1},this.debouncer=new a["a"](this.update.bind(this)),i&&Object.assign(this,i)}return Object(s["a"])(t,[{key:"start",value:function(t){var i=r(t);this.lastX=i.clientX,this.lastY=i.clientY,this.delay=this.touchDelay,this.moved=!1,this.debouncer.ticking=!1,this.lock="",this.action=""}},{key:"move",value:function(t){var i=r(t),e=i.clientX,n=i.clientY;if(this.dx=e-this.lastX,this.dy=n-this.lastY,"horizontal"===this.lock)this._setAction(e,this.lastX);else if("vertical"===this.lock)this._setAction(n,this.lastY);else if(0!==this.dx||0!==this.dy){var s=Math.abs(this.dx)>Math.abs(this.dy);s?(this.lock="horizontal",this._setAction(e,this.lastX)):(this.lock="vertical",this._setAction(n,this.lastY))}this.lastX=e,this.lastY=n,this.isPreventDefault()&&t.cancelable&&t.preventDefault(),this.isStopPropagation()&&t.stopPropagation(),this.delay?this.delay--:(this.moved=!0,this["on".concat(this.action)]&&this.debouncer.requestTick())}},{key:"up",value:function(){this.debouncer.cancel()}},{key:"update",value:function(){this["on".concat(this.action)](this.dx,this.dy)}},{key:"is",value:function(t){return this.action===t}},{key:"_setAction",value:function(t,i){this.action=c[this.lock][t<i?0:1]}}]),t}();function l(t,i){function e(){i(),Object(o["j"])(document,"mousemove",t),Object(o["j"])(document,"mouseup",e)}Object(o["a"])(document,"mousemove",t,{passive:!1}),Object(o["a"])(document,"mouseup",e)}},"6d6f":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"v-swipe",class:{"v-swipe-vertical":t.vertical},on:{touchstart:t.pointerdown,touchmove:t.pointermove,touchend:t.pointerup,mousedown:t.onMousedown}},[e("div",{ref:"items",staticClass:"v-swipe-items",style:t.style,on:{webkitTransitionEnd:function(i){return i.target!==i.currentTarget?null:t.transitionend(i)},transitionEnd:function(i){return i.target!==i.currentTarget?null:t.transitionend(i)}}},[t._t("default")],2),t.dot?e("ul",{staticClass:"v-swipe-dots"},t._l(t.items.length,function(i,n){return e("li",{key:i,class:{"v-swipe-dots-active":n===t.value}})}),0):t._e()])},s=[],a=(e("ac6a"),e("c5f6"),e("42a5")),o=e("6116"),r={name:"Swipe",props:{value:{type:Number,default:0},type:{type:String,default:"easeOutStrong"},animationDuration:{type:Number,default:500},threshold:{type:Number,default:10},friction:{type:Number,default:.2},dot:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},playInterval:{type:Number,default:2e3},vertical:{type:Boolean,default:!1},optimization:{type:Boolean,default:!1},stopPropagation:{type:Boolean,default:!0}},data:function(){return{translate:0,duration:0,sliding:!1,items:[]}},computed:{style:function(){return{transitionDuration:"".concat(this.duration,"ms"),transform:this.vertical?"translate3d(0, ".concat(this.translate,"px, 0)"):"translate3d(".concat(this.translate,"px, 0, 0)")}},propsMap:function(){return this.vertical?{prevAction:"Down",nextAction:"Up",axis:"y",size:"height"}:{prevAction:"Right",nextAction:"Left",axis:"x",size:"width"}}},watch:{value:function(t,i){this.isChange||(this.isVaildIndex(t)?(this.showPrevNextItem(this.getVaildIndex(i),t),this.slide(t)):this.$emit("input",this.getVaildIndex(t)))},vertical:function(){this.addActions()},optimization:function(t){t?this.showCurrentItem():this.showAllItems()}},created:function(){this.items=this.$children},mounted:function(){var t=this;this.handler=new a["a"]({touchDelay:2,isPreventDefault:this.isPrevOrNextAction,isStopPropagation:this.isStopPropagation}),this.addActions(),this.showCurrentItem(),this.$nextTick(function(){t.setTranslate(t.value)})},activated:function(){this.autoPlay&&this.play()},deactivated:function(){clearTimeout(this.playTimer)},beforeDestroy:function(){clearTimeout(this.playTimer),this.handler=null},methods:{pointerdown:function(t){this.handler.start(t),clearTimeout(this.playTimer),this.sliding&&(this.sliding=!1,this.duration=0),this.startTranslate=this.translate,this.vector=0},pointermove:function(t){this.handler.move(t)},pointerup:function(){this.handler.up();var t=this.shouldSliding();if(t)return t.restore?this.slide(this.value):t.swipeNext?this.swipeNext():t.swipePrev?this.swipePrev():void 0},onMousedown:function(t){Object(o["i"])()||(t.preventDefault(),this.pointerdown(t),Object(a["b"])(this.pointermove,this.pointerup))},isPrevOrNextAction:function(){return this.handler.is(this.propsMap.nextAction)||this.handler.is(this.propsMap.prevAction)},isStopPropagation:function(){return this.stopPropagation&&this.isPrevOrNextAction()},update:function(t,i){if(!this.sliding){var e=this.hasPrevNext(this.handler.is(this.propsMap.nextAction))?1:this.friction,n=this.vertical?i:t,s=n*e;this.showAdjacentItems(),this.vector=n,this.translate+=s,this.$emit("sliding",this.translate,s)}},slide:function(t){t=this.getVaildIndex(t),this.sliding=!0,this.isChange=t!==this.value,this.$emit("beforeSlide",t),this.isChange&&(this.showPrevNextItem(this.value,t),this.$emit("input",t)),this.duration=this.animationDuration,this.setTranslate(t)},transitionend:function(){this.showCurrentItem(),this.sliding=!1,this.duration=0,this.isChange&&(this.$emit("change",this.value),this.isChange=!1),this.autoPlay&&this.play(),this.$emit("slideStop",this.value)},setTranslate:function(t){this.translate=-t*this.getSwipeRect()[this.propsMap.size]},swipeNext:function(){this.slide(this.value+1)},swipePrev:function(){this.slide(this.value-1)},shouldSliding:function(){var t=this.handler.is(this.propsMap.prevAction),i=this.handler.is(this.propsMap.nextAction);if(this.sliding||!t&&!i)return!1;var e=Math.abs(this.vector)>this.threshold;if(e)return{restore:!1,swipePrev:t,swipeNext:i};var n=this.getSwipeRect()[this.propsMap.size]/4,s=this.translate-this.startTranslate,a=Math.abs(s)<n,o=this.translate<this.startTranslate;return{restore:a,swipeNext:o,swipePrev:!o}},isVaildIndex:function(t){return t>=0&&t<this.items.length},getVaildIndex:function(t){return Math.max(Math.min(t||0,this.items.length-1),0)},getSwipeRect:function(){return this.swipeRect||(this.swipeRect=this.$el.getBoundingClientRect())},getItemRect:function(t){var i=this.getSwipeRect(),e={width:i.width,height:i.height};return this.vertical?(e.left=i.left,e.top=t*i.height+this.translate+i.top):(e.left=t*i.width+this.translate+i.left,e.top=i.top),e},hasPrevNext:function(t){var i=this.value-1>=0,e=this.value+1<this.items.length;return!t&&i||t&&e},play:function(){var t=this;clearTimeout(this.playTimer),this.playTimer=setTimeout(function(){var i=t.value===t.items.length-1;i?t.$emit("input",0):t.swipeNext()},this.playInterval)},addActions:function(){this.vertical?(this.handler.onLeft=null,this.handler.onRight=null):(this.handler.onUp=null,this.handler.onDown=null),this.handler["on".concat(this.propsMap.prevAction)]=this.update,this.handler["on".concat(this.propsMap.nextAction)]=this.update},showPrevNextItem:function(t,i){this.optimization&&(this.items[i].show=!0,this.items[t].show=!0)},showCurrentItem:function(){var t=this;this.optimization&&this.items.forEach(function(i,e){i.show=e==t.value})},showAllItems:function(){this.items.forEach(function(t){return t.show=!0})},showAdjacentItems:function(){if(this.optimization){var t=this.value-1,i=this.value+1,e=this.items[t],n=this.items[i],s=e&&Object(o["g"])(this.getSwipeRect(),this.getItemRect(t)),a=n&&Object(o["g"])(this.getSwipeRect(),this.getItemRect(i));s&&(e.show=!0),a&&(n.show=!0)}}}},c=r,h=(e("9949"),e("2877")),l=Object(h["a"])(c,n,s,!1,null,null,null);i["a"]=l.exports},7428:function(t,i,e){t.exports=e.p+"img/timg3.92276d9c.jpeg"},"8e96":function(t,i,e){var n=e("26ec");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=e("499e").default;s("5946f42f",n,!0,{sourceMap:!1,shadowMode:!1})},"962f":function(t,i,e){var n=e("4156");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=e("499e").default;s("30969546",n,!0,{sourceMap:!1,shadowMode:!1})},9949:function(t,i,e){"use strict";var n=e("edfa"),s=e.n(n);s.a},a505:function(t,i,e){"use strict";var n=e("8e96"),s=e.n(n);s.a},ac6e:function(t,i,e){"use strict";e.d(i,"a",function(){return a});var n=e("d4ec"),s=e("bee2");window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){return setTimeout(t,1e3/60)},window.cancelAnimationFrame=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(t){clearTimeout(t)};var a=function(){function t(i){Object(n["a"])(this,t),this.callback=i,this.ticking=!1,this.timer=null}return Object(s["a"])(t,[{key:"update",value:function(){this.callback&&this.callback(),this.ticking=!1}},{key:"requestTick",value:function(){this.ticking||(this.timer=requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)}},{key:"handleEvent",value:function(){this.requestTick()}},{key:"cancel",value:function(){cancelAnimationFrame(this.timer)}}]),t}()},bee2:function(t,i,e){"use strict";function n(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,i,e){return i&&n(t.prototype,i),e&&n(t,e),t}e.d(i,"a",function(){return s})},d436:function(t,i,e){t.exports=e.p+"img/timg1.592d60b7.jpeg"},d4ec:function(t,i,e){"use strict";function n(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}e.d(i,"a",function(){return n})},e177:function(t,i,e){"use strict";var n=e("962f"),s=e.n(n);s.a},e805:function(t,i,e){t.exports=e.p+"img/timg4.345c5437.jpeg"},edfa:function(t,i,e){var n=e("2b66");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=e("499e").default;s("152beb8f",n,!0,{sourceMap:!1,shadowMode:!1})},f744:function(t,i,e){t.exports=e.p+"img/timg2.4e60382a.jpeg"}}]);
//# sourceMappingURL=chunk-014e9196.d338a2ca.js.map