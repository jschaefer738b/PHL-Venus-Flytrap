(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{396:function(e,t,_){var n=_(43);e.exports=function(e,t){if(!n(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},397:function(e,t,_){"use strict";var strong=_(398),n=_(396);e.exports=_(399)("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return strong.def(n(this,"Set"),e=0===e?0:e,e)}},strong)},398:function(e,t,_){"use strict";var n=_(44).f,r=_(144),o=_(235),c=_(65),d=_(233),l=_(234),f=_(170),h=_(236),E=_(171),v=_(33),m=_(168).fastKey,w=_(396),M=v?"_s":"size",P=function(e,t){var _,n=m(t);if("F"!==n)return e._i[n];for(_=e._f;_;_=_.n)if(_.k==t)return _};e.exports={getConstructor:function(e,t,_,f){var h=e((function(e,n){d(e,h,t,"_i"),e._t=t,e._i=r(null),e._f=void 0,e._l=void 0,e[M]=0,null!=n&&l(n,_,e[f],e)}));return o(h.prototype,{clear:function(){for(var e=w(this,t),data=e._i,_=e._f;_;_=_.n)_.r=!0,_.p&&(_.p=_.p.n=void 0),delete data[_.i];e._f=e._l=void 0,e[M]=0},delete:function(e){var _=w(this,t),n=P(_,e);if(n){var r=n.n,o=n.p;delete _._i[n.i],n.r=!0,o&&(o.n=r),r&&(r.p=o),_._f==n&&(_._f=r),_._l==n&&(_._l=o),_[M]--}return!!n},forEach:function(e){w(this,t);for(var _,n=c(e,arguments.length>1?arguments[1]:void 0,3);_=_?_.n:this._f;)for(n(_.v,_.k,this);_&&_.r;)_=_.p},has:function(e){return!!P(w(this,t),e)}}),v&&n(h.prototype,"size",{get:function(){return w(this,t)[M]}}),h},def:function(e,t,_){var n,r,o=P(e,t);return o?o.v=_:(e._l=o={i:r=m(t,!0),k:t,v:_,p:n=e._l,n:void 0,r:!1},e._f||(e._f=o),n&&(n.n=o),e[M]++,"F"!==r&&(e._i[r]=o)),e},getEntry:P,setStrong:function(e,t,_){f(e,t,(function(e,_){this._t=w(e,t),this._k=_,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?h(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,h(1))}),_?"entries":"values",!_,!0),E(t)}}},399:function(e,t,_){"use strict";var n=_(25),r=_(24),o=_(46),c=_(235),meta=_(168),d=_(234),l=_(233),f=_(43),h=_(39),E=_(172),v=_(110),m=_(173);e.exports=function(e,t,_,w,M,P){var y=n[e],O=y,D=M?"set":"add",A=O&&O.prototype,L={},k=function(e){var t=A[e];o(A,e,"delete"==e?function(a){return!(P&&!f(a))&&t.call(this,0===a?0:a)}:"has"==e?function(a){return!(P&&!f(a))&&t.call(this,0===a?0:a)}:"get"==e?function(a){return P&&!f(a)?void 0:t.call(this,0===a?0:a)}:"add"==e?function(a){return t.call(this,0===a?0:a),this}:function(a,b){return t.call(this,0===a?0:a,b),this})};if("function"==typeof O&&(P||A.forEach&&!h((function(){(new O).entries().next()})))){var T=new O,U=T[D](P?{}:-0,1)!=T,C=h((function(){T.has(1)})),I=E((function(e){new O(e)})),j=!P&&h((function(){for(var e=new O,t=5;t--;)e[D](t,t);return!e.has(-0)}));I||((O=t((function(t,_){l(t,O,e);var n=m(new y,t,O);return null!=_&&d(_,M,n[D],n),n}))).prototype=A,A.constructor=O),(C||j)&&(k("delete"),k("has"),M&&k("get")),(j||U)&&k(D),P&&A.clear&&delete A.clear}else O=w.getConstructor(t,e,M,D),c(O.prototype,_),meta.NEED=!0;return v(O,e),L[e]=O,r(r.G+r.W+r.F*(O!=y),L),P||w.setStrong(O,e,M),O}},400:function(e,t,_){var n,a;a=this,void 0===(n=function(){return a.returnExportsGlobal=function(){"use strict";function a(){var a,b;this.q=[],this.add=function(a){this.q.push(a)},this.call=function(){for(a=0,b=this.q.length;b>a;a++)this.q[a].call()}}function e(e,_){if(e.resizedAttached){if(e.resizedAttached)return void e.resizedAttached.add(_)}else e.resizedAttached=new a,e.resizedAttached.add(_);e.resizeSensor=document.createElement("div"),e.resizeSensor.className="resize-sensor";var n="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden; opacity: 0;",g="position: absolute; left: 0; top: 0; transition: 0s;";e.resizeSensor.style.cssText=n,e.resizeSensor.innerHTML='<div class="resize-sensor-expand" style="'+n+'"><div style="'+g+'"></div></div><div class="resize-sensor-shrink" style="'+n+'"><div style="'+g+' width: 200%; height: 200%"></div></div>',e.appendChild(e.resizeSensor),"static"==function(a,b){return a.currentStyle?a.currentStyle[b]:window.getComputedStyle?window.getComputedStyle(a,null).getPropertyValue(b):a.style[b]}(e,"position")&&(e.style.position="relative");var r=e.resizeSensor.childNodes[0],i=r.childNodes[0],o=e.resizeSensor.childNodes[1],c=function(){i.style.width=1e5+"px",i.style.height=1e5+"px",r.scrollLeft=1e5,r.scrollTop=1e5,o.scrollLeft=1e5,o.scrollTop=1e5};c();var d=!1,l=function(){e.resizedAttached&&(d&&(e.resizedAttached.call(),d=!1),t(l))};t(l);var f,h,p,q,E=function(){((p=e.offsetWidth)!=f||(q=e.offsetHeight)!=h)&&(d=!0,f=p,h=q),c()},s=function(a,b,e){a.attachEvent?a.attachEvent("on"+b,e):a.addEventListener(b,e)};s(r,"scroll",E),s(o,"scroll",E)}var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(a){return window.setTimeout(a,20)},_=function(a,b){var t=Object.prototype.toString.call(a),_=this._isCollectionTyped="[object Array]"===t||"[object NodeList]"===t||"[object HTMLCollection]"===t||"undefined"!=typeof jQuery&&a instanceof window.jQuery||"undefined"!=typeof Elements&&a instanceof window.Elements;if(this._element=a,_)for(var g=0,n=a.length;n>g;g++)e(a[g],b);else e(a,b)};return _.prototype.detach=function(){var b=this._isCollectionTyped,e=this._element;if(b)for(var t=0,n=e.length;n>t;t++)_.detach(e[t]);else _.detach(e)},_.detach=function(a){a.resizeSensor&&(a.removeChild(a.resizeSensor),delete a.resizeSensor,delete a.resizedAttached)},_}()}.apply(t,[]))||(e.exports=n)},401:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(process){var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(111),core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(50),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(109),core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(397),core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_5__),axios__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(73),axios__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__),resize_sensor__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(400),resize_sensor__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(resize_sensor__WEBPACK_IMPORTED_MODULE_7__);function parseUrl(e){var t=e.match(/^(https?)\:\/\/(([^:\/?#]*)(?:\:([0-9]+))?)(\/[^?#]*)(\?[^#]*|)(#.*|)$/);return t&&{protocol:t[1],host:t[2],hostname:t[3],origin:"".concat(t[1],"://").concat(t[2]),port:t[4],pathname:t[5],search:t[6],hash:t[7]}}__webpack_exports__.default={name:"main-mixin",data:function(){return{essay:void 0}},computed:{html:function(){return this.$store.getters.html},baseUrl:function(){return this.$store.getters.baseUrl},navMenuItems:function(){return this.$store.getters.navigation},navPaths:function(){var e=new Set;return this.navMenuItems.forEach((function(t){return e.add(t.path)})),e},settingsLoaded:function(){return this.$store.getters.settingsLoaded}},methods:{getStaticPage:function(source){var e=this,t="".concat(this.baseUrl,"/").concat(source);return console.log("getStaticPage",t),axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(t).then((function(t){return e.$marked(t.data)})).then((function(html){e.$store.dispatch("setHtml",html),e.$nextTick((function(){e.addStaticPageMetadata(),e.updateLinks()}))}))},addStaticPageMetadata:function(){console.log("addStaticPageMetadata"),this.$refs[this.$options.name].querySelectorAll("var").forEach((function(e){console.log(e)}))},updateLinks:function(){var e=this;this.$refs[this.$options.name]&&(this.$refs[this.$options.name].querySelectorAll("a").forEach((function(link){if(link.href){var t=parseUrl(link.href);console.dir(t),console.log(e.baseUrl),0===e.baseUrl.indexOf(t.origin)&&(link.removeAttribute("href"),link.addEventListener("click",(function(_){e.$router.push(t.pathname)})))}})),this.$refs[this.$options.name].querySelectorAll("img").forEach((function(img){var t=parseUrl(img.src);0===t.pathname.indexOf("/images/")&&e.baseUrl.indexOf(0===t.origin)&&(img.src="".concat(e.baseUrl).concat(t.pathname))})))},getEssay:function(e){var t=this;window.data=void 0;var _="".concat("https://us-central1-visual-essay.cloudfunctions.net","/essay?src=").concat(encodeURIComponent(e),"&nocss");process.env.context&&(_+="&context=".concat(process.env.context)),axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(_).then((function(e){return t.essay=e.data})).then((function(e){return t.onLoaded()}))},onLoaded:function onLoaded(){var _this5=this,essayElem=document.getElementById("visual-essay");if(essayElem){var _this=this;if(new resize_sensor__WEBPACK_IMPORTED_MODULE_7___default.a(essayElem,(function(){var e=document.getElementById("essay-spacer");_this.$store.dispatch("setSpacerHeight",e?e.clientHeight:0)})),!window.data){var jsonld=essayElem.querySelectorAll('script[type="application/ld+json"]');jsonld.length>0&&jsonld.forEach((function(scr){eval(scr)}))}this.addEssayMetadata(),this.updateLinks()}else setTimeout((function(){_this5.onLoaded()}),1e3)},addEssayMetadata:function(){var e=this;window.data?window.data.forEach((function(t){"essay"===t.type&&(t.title&&e.$store.dispatch("setTitle",t.title),t.banner&&e.$store.dispatch("setBanner",t.banner))})):setTimeout((function(){e.addEssayMetadata()}),1e3)}}}}.call(this,__webpack_require__(145))}}]);