webpackJsonp([3,15],[,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(33),i=r(o);e["default"]=function(t,e,n){return e in t?(0,i["default"])(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){var r,o;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function n(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r))t.push(n.apply(null,r));else if("object"===o)for(var s in r)i.call(r,s)&&r[s]&&t.push(s)}}return t.join(" ")}var i={}.hasOwnProperty;"undefined"!=typeof t&&t.exports?t.exports=n:(r=[],o=function(){return n}.apply(e,r),!(void 0!==o&&(t.exports=o)))}()},function(t,e,n){var r=n(28)("wks"),o=n(24),i=n(5).Symbol,s="function"==typeof i,u=t.exports=function(t){return r[t]||(r[t]=s&&i[t]||(s?i:o)("Symbol."+t))};u.store=r},function(t,e,n){t.exports=!n(16)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(9),o=n(30),i=n(29),s=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return s(t,e,n)}catch(u){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(6),o=n(12);t.exports=n(4)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(5),o=n(7),i=n(22),s=n(8),u="prototype",a=function(t,e,n){var l,c,f,p=t&a.F,d=t&a.G,v=t&a.S,h=t&a.P,x=t&a.B,y=t&a.W,m=d?o:o[e]||(o[e]={}),b=m[u],g=d?r:v?r[e]:(r[e]||{})[u];d&&(n=e);for(l in n)c=!p&&g&&void 0!==g[l],c&&l in m||(f=c?g[l]:n[l],m[l]=d&&"function"!=typeof g[l]?n[l]:x&&c?i(f,r):y&&g[l]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[u]=t[u],e}(f):h&&"function"==typeof f?i(Function.call,f):f,h&&((m.virtual||(m.virtual={}))[l]=f,t&a.R&&b&&!b[l]&&s(b,l,f)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},,,function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){t.exports={}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(28)("keys"),o=n(24);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(54),o=n(18);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(35);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(10),o=n(5).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(6).f,o=n(11),i=n(3)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(5),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e,n){var r=n(10);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){t.exports=!n(4)&&!n(16)(function(){return 7!=Object.defineProperty(n(23)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(20),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(18);t.exports=function(t){return Object(r(t))}},function(t,e,n){t.exports={"default":n(34),__esModule:!0}},function(t,e,n){n(36);var r=n(7).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(13);r(r.S+r.F*!n(4),"Object",{defineProperty:n(6).f})},function(t,e,n){var r,o;n(66),r=n(46),o=n(67),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},function(t,e,n){var r=n(43),o=n(26);t.exports=Object.keys||function(t){return r(t,o)}},,function(t,e){t.exports=!0},function(t,e,n){"use strict";var r=n(40),o=n(13),i=n(44),s=n(8),u=n(11),a=n(17),l=n(57),c=n(27),f=n(60),p=n(3)("iterator"),d=!([].keys&&"next"in[].keys()),v="@@iterator",h="keys",x="values",y=function(){return this};t.exports=function(t,e,n,m,b,g,_){l(n,e,m);var k,w,X,S=function(t){if(!d&&t in P)return P[t];switch(t){case h:return function(){return new n(this,t)};case x:return function(){return new n(this,t)}}return function(){return new n(this,t)}},j=e+" Iterator",M=b==x,O=!1,P=t.prototype,N=P[p]||P[v]||b&&P[b],C=N||S(b),T=b?M?S("entries"):C:void 0,A="Array"==e?P.entries||N:N;if(A&&(X=f(A.call(new t)),X!==Object.prototype&&(c(X,j,!0),r||u(X,p)||s(X,p,y))),M&&N&&N.name!==x&&(O=!0,C=function(){return N.call(this)}),r&&!_||!d&&!O&&P[p]||s(P,p,C),a[e]=C,a[j]=y,b)if(k={values:M?C:S(x),keys:g?C:S(h),entries:T},_)for(w in k)w in P||i(P,w,k[w]);else o(o.P+o.F*(d||O),e,k);return k}},function(t,e,n){var r=n(9),o=n(59),i=n(26),s=n(19)("IE_PROTO"),u=function(){},a="prototype",l=function(){var t,e=n(23)("iframe"),r=i.length,o="<",s=">";for(e.style.display="none",n(53).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+s+"document.F=Object"+o+"/script"+s),t.close(),l=t.F;r--;)delete l[a][i[r]];return l()};t.exports=Object.create||function(t,e){var n;return null!==t?(u[a]=r(t),n=new u,u[a]=null,n[s]=t):n=l(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(11),o=n(21),i=n(50)(!1),s=n(19)("IE_PROTO");t.exports=function(t,e){var n,u=o(t),a=0,l=[];for(n in u)n!=s&&r(u,n)&&l.push(n);for(;e.length>a;)r(u,n=e[a++])&&(~i(l,n)||l.push(n));return l}},function(t,e,n){t.exports=n(8)},function(t,e,n){"use strict";var r=n(61)(!0);n(41)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i=r(o),s=n(48),u=r(s),a=n(2),l=r(a);e["default"]={props:{prefixCls:{type:String,"default":"button"},types:{type:String,"default":""},status:{type:String,"default":""},shape:{type:String,"default":""},size:{type:String,"default":""},className:{type:String,"default":""}},computed:{classes:function(){var t,e=this,n=[];return 0!==this.types.length&&(n=(0,u["default"])(this.types.split(" "),function(t){return""!==t?e.prefixCls+"-"+t:t}),this.types=n.join(" ")),(0,l["default"])((t={},(0,i["default"])(t,this.className,!!this.className),(0,i["default"])(t,this.prefixCls+"-"+this.status,!!this.status),(0,i["default"])(t,this.prefixCls+"-"+this.shape,!!this.shape),(0,i["default"])(t,this.prefixCls+"-"+this.size,!!this.size),(0,i["default"])(t,this.types,!!this.types),(0,i["default"])(t,this.prefixCls,1),t))}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i=r(o),s=n(2),u=r(s);e["default"]={props:{type:{type:String,"default":""},className:""},computed:{classes:function(){var t;return(0,u["default"])((t={},(0,i["default"])(t,this.className,!!this.className),(0,i["default"])(t,"content-"+this.type,!!this.type),t))}}}},function(t,e,n){t.exports={"default":n(49),__esModule:!0}},function(t,e,n){n(45),n(64),t.exports=n(7).Array.from},function(t,e,n){var r=n(21),o=n(31),i=n(62);t.exports=function(t){return function(e,n,s){var u,a=r(e),l=o(a.length),c=i(s,l);if(t&&n!=n){for(;l>c;)if(u=a[c++],u!=u)return!0}else for(;l>c;c++)if((t||c in a)&&a[c]===n)return t||c||0;return!t&&-1}}},function(t,e,n){var r=n(25),o=n(3)("toStringTag"),i="Arguments"==r(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=s(e=Object(t),o))?n:i?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){"use strict";var r=n(6),o=n(12);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},function(t,e,n){t.exports=n(5).document&&document.documentElement},function(t,e,n){var r=n(25);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(17),o=n(3)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){var r=n(9);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(i){var s=t["return"];throw void 0!==s&&r(s.call(t)),i}}},function(t,e,n){"use strict";var r=n(42),o=n(12),i=n(27),s={};n(8)(s,n(3)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(s,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(3)("iterator"),o=!1;try{var i=[7][r]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(s){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],s=i[r]();s.next=function(){return{done:n=!0}},i[r]=function(){return s},t(i)}catch(u){}return n}},function(t,e,n){var r=n(6),o=n(9),i=n(38);t.exports=n(4)?Object.defineProperties:function(t,e){o(t);for(var n,s=i(e),u=s.length,a=0;u>a;)r.f(t,n=s[a++],e[n]);return t}},function(t,e,n){var r=n(11),o=n(32),i=n(19)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,n){var r=n(20),o=n(18);t.exports=function(t){return function(e,n){var i,s,u=String(o(e)),a=r(n),l=u.length;return a<0||a>=l?t?"":void 0:(i=u.charCodeAt(a),i<55296||i>56319||a+1===l||(s=u.charCodeAt(a+1))<56320||s>57343?t?u.charAt(a):i:t?u.slice(a,a+2):(i-55296<<10)+(s-56320)+65536)}}},function(t,e,n){var r=n(20),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(51),o=n(3)("iterator"),i=n(17);t.exports=n(7).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){"use strict";var r=n(22),o=n(13),i=n(32),s=n(56),u=n(55),a=n(31),l=n(52),c=n(63);o(o.S+o.F*!n(58)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,f,p=i(t),d="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,x=void 0!==h,y=0,m=c(p);if(x&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==m||d==Array&&u(m))for(e=a(p.length),n=new d(e);e>y;y++)l(n,y,x?h(p[y],y):p[y]);else for(f=m.call(p),n=new d;!(o=f.next()).done;y++)l(n,y,x?s(f,h,[o.value,y],!0):o.value);return n.length=y,n}})},function(t,e,n){e=t.exports=n(14)(),e.push([t.id,".button{line-height:1.55rem;height:1.65rem;font-size:.75rem}.button.button-small{height:1.35rem;font-size:.7rem}.button.button-large{font-size:.85rem;height:2.4rem;line-height:2.3rem}.button.button-fill{line-height:1.65rem}.button.button-fill.button-small{line-height:1.35rem}.button.button-fill.button-large{line-height:2.4rem}",""])},function(t,e,n){var r=n(65);"string"==typeof r&&(r=[[t.id,r,""]]);n(15)(r,{});r.locals&&(t.exports=r.locals)},function(t,e){t.exports=" <a :class=classes> <slot></slot> </a> "},function(t,e){t.exports=" <div :class=classes> <slot></slot> </div> "},function(t,e){t.exports=" <div class=pull-to-refresh-layer> <div class=preloader></div> <div class=pull-to-refresh-arrow></div> </div> "},function(t,e,n){var r,o;r=n(47),o=n(68),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},function(t,e,n){var r,o;o=n(69),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i=r(o),s=n(2),u=r(s);e["default"]={props:{prefixCls:{type:String,"default":"buttons"},type:{type:String,require:!0},className:{type:String,"default":""}},computed:{classes:function(){var t;return(0,u["default"])((t={},(0,i["default"])(t,this.className,!!this.className),(0,i["default"])(t,this.prefixCls+"-"+this.type,!!this.type),t))}}}},,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i=r(o),s=n(2),u=r(s);e["default"]={props:{prefixCls:{type:String,"default":"icon"},type:{type:String,require:!0},className:{type:String,"default":""}},computed:{classes:function(){var t;return(0,u["default"])((t={},(0,i["default"])(t,this.prefixCls,1),(0,i["default"])(t,this.prefixCls+"-"+this.type,!!this.type),(0,i["default"])(t,this.className,!!this.className),t))}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{title:"",path:""}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i=r(o),s=n(2),u=r(s);e["default"]={props:{defaultCls:{type:String,"default":"tab"},name:{type:String,require:!0},title:{type:String,require:!0},status:{type:String,"default":""},className:{type:String,"default":""}},created:function(){this.$dispatch("setTabBtn",{href:"#"+this.name,title:this.title,status:this.status})},computed:{classes:function(){var t;return(0,u["default"])((t={},(0,i["default"])(t,this.className,!!this.className),(0,i["default"])(t,this.status,!!this.status),(0,i["default"])(t,this.defaultCls,1),t))}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i=r(o),s=n(88),u=r(s),a=n(37),l=r(a),c=n(2),f=r(c);e["default"]={props:{type:{type:String,require:!0},shape:{type:String,"default":""},className:{type:String,"default":""}},data:function(){return{tabBtn:[]}},events:{setTabBtn:function(t){this.tabBtn.push(t)}},computed:{classes:function(){return(0,f["default"])((0,i["default"])({},this.className,!!this.className))}},components:{VButton:l["default"],VButtonGroup:u["default"]}}},function(t,e,n){e=t.exports=n(14)(),e.push([t.id,".icon-left[_v-37be6c89]{width:2rem}",""])},function(t,e,n){var r=n(79);"string"==typeof r&&(r=[[t.id,r,""]]);n(15)(r,{});r.locals&&(t.exports=r.locals)},function(t,e){t.exports=" <div :class=classes> <slot></slot> </div> "},,,function(t,e){t.exports=" <span :class=classes> <slot></slot> </span> "},function(t,e){t.exports=" <div :id=name :class=classes> <slot></slot> </div> "},function(t,e){t.exports=' <div :class=classes> <v-button-group :type=type> <v-button v-for="btn in tabBtn" :href=btn.href :class=btn.status :shape=shape class-name=tab-link> {{btn.title}} </v-button> </v-button-group> <div class=tabs> <slot></slot> </div> </div> '},function(t,e){t.exports=' <nav class="bar bar-nav" _v-37be6c89=""> <h1 class=title v-text=title _v-37be6c89=""></h1> <a class="button button-link button-nav pull-left" v-link="{path: path, replace: true}" _v-37be6c89=""> <span class="icon icon-left" _v-37be6c89=""></span> </a> </nav> '},function(t,e,n){var r,o;r=n(72),o=n(81),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},,,function(t,e,n){var r,o;r=n(75),o=n(84),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},function(t,e,n){var r,o;n(80),r=n(76),o=n(87),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},function(t,e,n){var r,o;r=n(77),o=n(85),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},function(t,e,n){var r,o;r=n(78),o=n(86),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i=r(o),s=n(2),u=r(s);e["default"]={props:{defaultCls:{type:String,"default":"list-block"},type:{type:String,require:!0},className:{type:String,"default":""}},computed:{classes:function(){var t,e="";return"media"===this.type?e="media-list":""!==this.type&&void 0!==this.type&&(e=this.type+"-block"),(0,u["default"])((t={},(0,i["default"])(t,this.className,!!this.className),(0,i["default"])(t,e,!!e),(0,i["default"])(t,this.defaultCls,1),t))}}}},,function(t,e){t.exports=" <div :class=classes> <ul> <slot></slot> </ul> </div> "},function(t,e,n){var r,o;r=n(95),o=n(97),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(39),i=r(o),s=n(103),u=r(s),a=n(92),l=r(a),c=n(70),f=r(c),p=n(37),d=r(p),v=n(91),h=r(v),x=n(98),y=r(x),m=n(94),b=r(m),g=n(93),_=r(g),k=n(71),w=r(k);e["default"]={ready:function(){i["default"].init()},data:function(){return{title:"排行榜",path:"/home",ranks:[{avatar:"http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg",nickname:"A",point:1300,color:"background-color: red;"},{avatar:"http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg",nickname:"B",point:1200,color:"background-color: blue;"},{avatar:"http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg",nickname:"C",point:1100,color:"background-color: purple;"}]}},methods:{refreshPoint:function(){i["default"].showIndicator(),setTimeout(function(){console.log("refresh"),i["default"].pullToRefreshDone(".pull-to-refresh-content"),i["default"].hideIndicator()},1500)},refreshInvite:function(){i["default"].showIndicator(),setTimeout(function(){console.log("refresh"),i["default"].pullToRefreshDone(".pull-to-refresh-content"),i["default"].hideIndicator()},1500)}},components:{VBar:u["default"],VNav:l["default"],VContent:f["default"],VList:y["default"],VButton:d["default"],VIcon:h["default"],VTabs:b["default"],VTab:_["default"],VLayer:w["default"]}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){e=t.exports=n(14)(),e.push([t.id,".rank{position:absolute;top:0;right:0;bottom:0;left:0;overflow:auto;-webkit-overflow-scrolling:touch}.rank .content-block-title{margin:.75rem .75rem .5rem}.rank .list-block.inset{margin-left:.35rem;margin-right:.35rem}.rank .rank-num{float:right;min-width:1.2rem;line-height:1.2rem;border-radius:50%;padding-left:.35rem;color:#fff;margin-top:-.7rem;vertical-align:top;display:inline-block;font-size:.8rem}.rank-tabs .buttons-tab{z-index:10;margin-top:2.2rem}#invite,#point{top:2.2rem}",""])},,,,,,,,,,,,,,,,function(t,e,n){var r=n(153);"string"==typeof r&&(r=[[t.id,r,""]]);n(15)(r,{});r.locals&&(t.exports=r.locals)},,,,,,,,,,,,,,,,,,,function(t,e){t.exports=' <div class=rank> <v-nav :path=path :title=title></v-nav> <v-tabs type=tab class-name=rank-tabs> <v-tab name=point title=积分排行 status=active distance=55 v-pull-to-refresh=refreshPoint> <v-layer></v-layer> <v-content type=block-title> <span style="float:left;margin-left: .2rem">积分排行榜</span> <span style="float:right;margin-right: .2rem">排名</span> </v-content> <v-list type=media class-name=inset> <li class=item-content v-for="rank in ranks"> <div class=item-media> <img :src=rank.avatar style="width: 2.2rem"> </div> <div class=item-inner> <div class=item-title-row> <div class=item-title v-text=rank.nickname></div> </div> <div class=rank-num :style=rank.color>{{ $index+1 }}</div> <div class=item-subtitle>总积分：{{rank.point}}</div> </div> </li> </v-list> </v-tab> <v-tab name=invite title=邀请排行 distance=55 v-pull-to-refresh=refreshInvite> <v-layer></v-layer> <v-content type=block-title> <span style="float:left;margin-left: .2rem">邀请排行榜</span> <span style="float:right;margin-right: .2rem">排名</span> </v-content> <v-list type=media class-name=inset> <li class=item-content v-for="rank in ranks"> <div class=item-media> <img :src=rank.avatar style="width: 2.2rem"> </div> <div class=item-inner> <div class=item-title-row> <div class=item-title v-text=rank.nickname></div> </div> <div class=rank-num :style=rank.color>{{ $index+1 }}</div> <div class=item-subtitle>总邀请：{{rank.point}}</div> </div> </li> </v-list> </v-tab> </v-tabs> </div> '},,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var r,o;n(169),r=n(124),o=n(188),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)}]);