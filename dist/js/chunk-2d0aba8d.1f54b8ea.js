(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aba8d"],{"15e8":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("PullRefresh",{attrs:{failed:e.failed},on:{refresh:e.refresh},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[n("transition-group",{staticClass:"items",attrs:{tag:"ul",name:"item"}},e._l(e.items,function(t){return n("li",{key:t.id,staticClass:"item"},[e._v("\n      "+e._s(t.value)+"\n    ")])}),0)],1)},r=[],i=(n("96cf"),n("1da1")),s=n("5ed3");function u(){return new Promise(function(e){var t=10,n=[];while(t--)n.push({id:t,value:(100*Math.random()).toFixed(0)});setTimeout(function(){return e(n)},~~(100*Math.random()+300))})}var o={components:{PullRefresh:s["a"]},data:function(){return{items:[],loading:!0,failed:!1}},methods:{fetchData:function(){return this.failed=!1,u().catch(this.failure)},refresh:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.fetchData();case 2:n=e.sent,this.items=n,t();case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),failure:function(){this.failed=!0}}},l=o,c=n("2877"),f=Object(c["a"])(l,a,r,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0aba8d.1f54b8ea.js.map