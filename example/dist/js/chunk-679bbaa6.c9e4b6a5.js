(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-679bbaa6","chunk-46998404"],{"013f":function(t,e,n){"use strict";function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return i}))},"0293":function(t,e,n){var i=n("241e"),o=n("53e2");n("ce7e")("getPrototypeOf",(function(){return function(t){return o(i(t))}}))},"061b":function(t,e,n){t.exports=n("fa99")},1770:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var i,o=n("bd86"),s=n("d225"),a=n("b0b4"),r=n("308d"),c=n("6bb5"),u=n("013f"),h=n("4e2b"),p=(n("28a5"),n("ac6a"),Array.prototype.slice),l=function(){function t(){Object(s["a"])(this,t),this.listeners={}}return Object(a["a"])(t,[{key:"on",value:function(t,e,n){var i=this;return t.split(" ").forEach((function(t){i.listeners[t]||(i.listeners[t]=[]),e&&i.listeners[t].push({fn:e,once:n})})),this}},{key:"emit",value:function(t){var e=this,n=p.call(arguments,1);return t.split(" ").forEach((function(t){var i=e.listeners[t];if(i)for(var o=i.length,s=0;s<o;s++){var a=i[s];a&&(i[s].fn.apply(e,n),i[s].once&&i.splice(s--,1))}})),this}},{key:"off",value:function(t,e){var n=this.listeners[t];if(n){if(!e)return this.listeners[t]=[],this;for(var i=n.length,o=0;o<i;o++)if(n[o]&&n[o].fn===e)return n.splice(o,1),this}return t||(this.listeners={}),this}}]),t}(),v=n("f6da");function f(t){return t.touches?t.touches:[t]}function d(t,e){return t+e}function y(t){return{x:t.map((function(t){return t.x})).reduce(d)/t.length,y:t.map((function(t){return t.y})).reduce(d)/t.length}}function m(t,e){var n=e.x-t.x,i=e.y-t.y;return Math.sqrt(n*n+i*i)}function _(t,e){return m(e[0],e[1])/m(t[0],t[1])}function b(t,e){var n=t.x-e.x,i=t.y-e.y;return 180*Math.atan2(i,n)/Math.PI}function O(t,e,n){var i=e.x-t.x,o=e.y-t.y,s=1-n/t.scale,a=t.x+i*s,r=t.y+o*s;return{x:a,y:r}}var g=function(t){function e(t){var n;return Object(s["a"])(this,e),n=Object(r["a"])(this,Object(c["a"])(e).call(this)),n.data={position:{x:0,y:0,scale:1,rotation:0}},n.options=Object.assign({},e.defaultOptions,t),n.startPosition={x:0,y:0,scale:1,rotation:0},n.options.el&&n.bind(),Object(r["a"])(n,Object(u["a"])(n))}return Object(h["a"])(e,t),Object(a["a"])(e,[{key:"setOptions",value:function(t){return Object.assign(this.options,t),this}},{key:"bind",value:function(){return this._touchEvents(v["a"]),this}},{key:"unbind",value:function(){return this._touchEvents(v["m"]),this}},{key:"handleEvent",value:function(t){switch(t.type){case"touchstart":this.down(t);break;case"touchmove":this.move(t);break;case"touchend":this.up(t);break}}},{key:"down",value:function(t){var e=f(t);this.moving=!1,this.touchesLength=e.length,this._startTouchesLength=this.touchesLength;var n=e[this.touchesLength-1],i=n.clientX,o=n.clientY;this.data.clientX=i,this.data.clientY=o,this.emit(this.options.eventTypes.down,t,this.data)}},{key:"move",value:function(t){var e=this.options,n=e.lockDirection,i=e.eventTypes,o=this._hasListeners(i.pinchmove),s=this._hasListeners(i.rotatemove),a=this._hasListeners(i.panmove),r=f(t);2===this.touchesLength&&(o||s)?this._gesturechange(r,t,o,s):(a||n)&&this._panmove(r,t),this.moved=this.moving=!0}},{key:"up",value:function(t){var e=this.options.eventTypes,n=e.up,i=e.pinchmove,o=e.rotatemove,s=f(t),a=this.data.type;this.touchesLength=s.length,this.emit(n,t,this.data),this.moved?(a&&-1!==a.indexOf("pan")?this._panend(t):(a===i&&this._pinchend(t),a===o&&this._rotateend(t)),this.moving=!1):1===this._startTouchesLength?this._mockDoubleTap(t):this.data.type=""}},{key:"is",value:function(t){return this.action===t}},{key:"destroy",value:function(){this.options.el&&this.unbind()}},{key:"_touchEvents",value:function(t){var e=this.options,n=e.el,i=e.touchstartEventOptions,o=e.touchmoveEventOptions,s=e.touchendEventOptions;t(n,"touchstart",this,i),t(n,"touchmove",this,o),t(n,"touchend",this,s)}},{key:"_mockDoubleTap",value:function(t){var e=this,n=this.options,i=n.eventTypes,o=n.tapDelay,s=this._hasListeners(i.tap),a=this._hasListeners(i.doubletap);a?(this._tapCount=this._tapCount||0,this._tapCount++,clearTimeout(this._tapTimer),2===this._tapCount?(this._tapCount=0,this._emit(i.doubletap,t)):this._tapTimer=setTimeout((function(){e._tapCount=0,e._emit(i.tap,t)}),o)):s&&this._emit(i.tap,t)}},{key:"_verifyDirection",value:function(){var t=this.options.lockDirection;return!1===t||t&&t===this.direction}},{key:"_setDirection",value:function(t,n){if(0!==t||0!==n){var i=Math.abs(t)>=Math.abs(n);i?(this.direction=e.HORIZONTAL,this._setAction(t)):(this.direction=e.VERTICAL,this._setAction(n))}}},{key:"_setAction",value:function(t){this.action=e.propsMap[this.direction][t<=0?0:1],this.isSwipe=Math.abs(t)>this.options.threshold}},{key:"_panstart",value:function(t,e){var n=t[this.touchesLength-1],i=n.clientX,o=n.clientY,s=this.options,a=s.eventTypes,r=s.position,c=r(),u=c.x,h=c.y,p=i-this.data.clientX,l=o-this.data.clientY;this._setDirection(p,l),this._verifyDirection()&&(this.startPosition={x:u,y:h},this.isSwipe=!1,this.timeStamp=e.timeStamp,Object.assign(this.data,{clientX:i,clientY:o,vx:p,vy:l,deltaX:0,deltaY:0,time:0}),this._emit(a.panstart,e))}},{key:"_panmove",value:function(t,n){var i=t[this.touchesLength-1],o=i.clientX,s=i.clientY,a=this.options,r=a.lockDirection,c=a.eventTypes;if(this.moving||this._panstart(t,n),this._verifyDirection()){var u=this.data,h=o-u.clientX,p=s-u.clientY;if(h||p){var l=u.deltaX+h,v=u.deltaY+p,f=this.startPosition,d=f.x,y=f.y,m={x:d+l,y:y+v},_=n.timeStamp-this.timeStamp;if(this.timeStamp=n.timeStamp,r){var b=this.direction===e.HORIZONTAL?h:p;this._setAction(b)}else this._setDirection(h,p);Object.assign(this.data,{vx:h,vy:p,deltaX:l,deltaY:v,clientX:o,clientY:s,time:_,position:m}),r?this._emit(this.action,n):this._emit(c.panmove,n)}}}},{key:"_panend",value:function(t){(this.touchesLength||this._verifyDirection())&&(this._emit(this.options.eventTypes.panend,t),this.moved=!1)}},{key:"_gesturechange",value:function(t,e,n,i){var o=Object(v["j"])(t).map((function(t){return{x:t.clientX,y:t.clientY}}));n&&this._pinchmove(o,e),i&&this._rotatemove(o,e),this.data.zoom=o}},{key:"_pinchstart",value:function(t,e,n){var i=this.options,o=i.eventTypes,s=i.position,a=s(),r=a.x,c=a.y,u=a.scale;this.startPosition={x:r,y:c,scale:u},Object.assign(this.data,{zoom:t,center:e,scale:1,vx:0,vy:0,deltaX:0,deltaY:0,position:{x:r,y:c,scale:u}}),this._emit(o.pinchstart,n)}},{key:"_pinchmove",value:function(t,e){var n=this.options,i=n.eventTypes,o=n.origin,s=n.zoomMove,a=n.maxScale,r=n.minScale,c=y(t);this.moving||this._pinchstart(t,c,e);var u=this.data,h=_(u.zoom,t)-1,p=u.scale+=h,l=c.x-u.center.x,v=c.y-u.center.y,f=u.deltaX+l,d=u.deltaY+v,m=this.startPosition,b=m.x,g=m.y,x=m.scale,k=p*x;a&&k>a?k=a:r&&k<r&&(k=r);var T={};if(o){var j="function"===typeof o?o(e,u,c,t):c,w=O(u.position,j,k);T.x=w.x,T.y=w.y,T.scale=k,s&&(T.x+=l,T.y+=v)}else T={x:b,y:g,scale:k},s&&(T.x=b+f,T.y=g+d);Object.assign(this.data,{center:c,scale:p,vx:l,vy:v,deltaX:f,deltaY:d,position:T}),this._emit(i.pinchmove,e)}},{key:"_pinchend",value:function(t){this._emit(this.options.eventTypes.pinchend,t),this.moved=!1}},{key:"_rotatestart",value:function(t,e){var n=this.options,i=n.eventTypes,o=n.position,s=o(),a=s.rotation;this.startPosition.rotation=a,this.data.rotation=0,this.data.zoom=t,this._emit(i.rotatestart,e)}},{key:"_rotatemove",value:function(t,e){var n=this.options.eventTypes;this.moving||this._rotatestart(t,e);var i=this.data,o=b(t[0],t[1])-b(i.zoom[0],i.zoom[1]),s=i.rotation+=o,a=this.startPosition.rotation,r=s+a;i.position.rotation=r,i.rotation=s,this._emit(n.rotatemove,e)}},{key:"_rotateend",value:function(t){this._emit(this.options.eventTypes.rotateend,t),this.moved=!1}},{key:"_emit",value:function(t,e){this.data.type=t,this._input(e),this.emit(t,e,this.data)}},{key:"_input",value:function(t){var e=this.options.eventTypes.input;this._hasListeners(e)&&this.emit(e,t,this.data)}},{key:"_hasListeners",value:function(t){var e=this.listeners[t];return e&&e.length}}]),e}(l),x={passive:!1};g.defaultOptions={el:null,touchstartEventOptions:x,touchmoveEventOptions:x,touchendEventOptions:x,lockDirection:!1,eventTypes:{down:"down",up:"up",panstart:"panstart",panmove:"panmove",panend:"panend",pinchstart:"pinchstart",pinchmove:"pinchmove",pinchend:"pinchend",rotatestart:"rotatestart",rotatemove:"rotatemove",rotateend:"rotateend",panleft:"panleft",panright:"panright",panup:"panup",pandown:"pandown",tap:"tap",doubletap:"doubletap",input:"input"},tapDelay:200,threshold:3,origin:!1,zoomMove:!0,position:function(){return{x:0,y:0,scale:1,rotation:0}},maxScale:null,minScale:null},g.HORIZONTAL="horizontal",g.VERTICAL="vertical",g.propsMap=(i={},Object(o["a"])(i,g.HORIZONTAL,[g.defaultOptions.eventTypes.panleft,g.defaultOptions.eventTypes.panright]),Object(o["a"])(i,g.VERTICAL,[g.defaultOptions.eventTypes.panup,g.defaultOptions.eventTypes.pandown]),i),g.rAFThrottle=v["l"],g.originZoom=O,g.preventDefault=function(t){t.cancelable&&t.preventDefault()}},"1df8":function(t,e,n){var i=n("63b6");i(i.S,"Object",{setPrototypeOf:n("ead6").set})},"25b0":function(t,e,n){n("1df8"),t.exports=n("584a").Object.setPrototypeOf},"2db6":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar",{attrs:{title:"ImageViewer"}}),n("ImageViewerModule")],1)},o=[],s=n("729c"),a={components:{ImageViewerModule:s["default"]}},r=a,c=n("2877"),u=Object(c["a"])(r,i,o,!1,null,null,null);e["default"]=u.exports},"308d":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("7618"),o=n("013f");function s(t,e){return!e||"object"!==Object(i["a"])(e)&&"function"!==typeof e?Object(o["a"])(t):e}},"4aa6":function(t,e,n){t.exports=n("dc62")},"4d16":function(t,e,n){t.exports=n("25b0")},"4e2b":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("4aa6"),o=n.n(i),s=n("4d16"),a=n.n(s);function r(t,e){return r=a.a||function(t,e){return t.__proto__=e,t},r(t,e)}function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=o()(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"6bb5":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("061b"),o=n.n(i),s=n("4d16"),a=n.n(s);function r(t){return r=a.a?o.a:function(t){return t.__proto__||o()(t)},r(t)}},9427:function(t,e,n){var i=n("63b6");i(i.S,"Object",{create:n("a159")})},b0b4:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("85f2"),o=n.n(i);function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),o()(t,i.key,i)}}function a(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}},ce7e:function(t,e,n){var i=n("63b6"),o=n("584a"),s=n("294c");t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],a={};a[t]=e(n),i(i.S+i.F*s((function(){n(1)})),"Object",a)}},d225:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return i}))},dc62:function(t,e,n){n("9427");var i=n("584a").Object;t.exports=function(t,e){return i.create(t,e)}},ead6:function(t,e,n){var i=n("f772"),o=n("e4ae"),s=function(t,e){if(o(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=n("d864")(Function.call,n("bf0b").f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return s(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:s}},fa99:function(t,e,n){n("0293"),t.exports=n("584a").Object.getPrototypeOf}}]);