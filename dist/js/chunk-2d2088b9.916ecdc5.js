(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2088b9"],{a4f6:function(o,n,t){"use strict";t.r(n);var c=function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("div",[t("Navbar",{attrs:{title:"Modal"}}),t("div",{staticClass:"page-spacing"},[t("h4",[o._v("类型")]),t("VButton",{on:{click:function(n){o.confirmShow=!0}}},[o._v(" Confirm ")]),t("VButton",{on:{click:function(n){o.alertShow=!0}}},[o._v("Alert")]),t("VButton",{on:{click:function(n){o.customShow=!0}}},[o._v("自定义")]),t("VModal",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{showCancelButton:""},on:{confirm:function(n){o.confirmShow=!1},cancel:function(n){o.confirmShow=!1}},model:{value:o.confirmShow,callback:function(n){o.confirmShow=n},expression:"confirmShow"}},[t("strong",{attrs:{slot:"header"},slot:"header"},[o._v("活动开启啦")]),t("div",[o._v("你关注的活动已经开启，是否前往报名？")])]),t("VModal",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],on:{confirm:function(n){o.alertShow=!1}},model:{value:o.alertShow,callback:function(n){o.alertShow=n},expression:"alertShow"}},[t("strong",{attrs:{slot:"header"},slot:"header"},[o._v("视频上传失败")]),t("div",[o._v("网络已断开，请检查你的网络设置。")])]),t("VModal",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{showConfirmButton:!1},model:{value:o.customShow,callback:function(n){o.customShow=n},expression:"customShow"}},[o._v("\n      自定义\n    ")]),t("h4",[o._v("属性")]),t("VButton",{on:{click:function(n){o.$modal({overlayClick:!1,body:"点击遮罩层不关闭"})}}},[o._v("\n      点击遮罩层不关闭\n    ")]),t("VButton",{on:{click:function(n){o.$modal({overlay:!1,body:"无遮罩层"})}}},[o._v("\n      无遮罩层\n    ")]),t("br"),t("br"),t("VButton",{on:{click:function(n){o.$modal({body:"修改按钮文案",showCancelButton:!0,confirmText:"Confirm",cancelText:"Cancel"})}}},[o._v("\n      按钮文案\n    ")]),t("VButton",{on:{click:function(n){o.$modal({body:"有头部",header:"提示"})}}},[o._v("\n      有头部\n    ")]),t("br"),t("br"),t("VButton",{on:{click:o.loadingAction}},[o._v(" 等待操作完成 ")])],1)],1)},a=[],e=t("c505"),r={name:"page-modal",components:{VModal:e["a"]},data:function(){return{confirmShow:!1,alertShow:!1,customShow:!1}},methods:{loadingAction:function(){this.$modal({body:"确定后,等待2秒后关闭",overlayClick:!1,showCancelButton:!0,confirm:function(o){o.confirmLoading=!0,setTimeout(function(){o.done()},2e3)}})}}},i=r,l=t("2877"),s=Object(l["a"])(i,c,a,!1,null,null,null);n["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d2088b9.916ecdc5.js.map