(function(t){function e(e){for(var n,a,l=e[0],s=e[1],c=e[2],u=0,p=[];u<l.length;u++)a=l[u],o[a]&&p.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);f&&f(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var l=r[a];0!==o[l]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},o={app:0},i=[];function l(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"56e9113e"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r={about:1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise(function(e,r){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"c4b46393"}[t]+".css",o=s.p+n,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var c=i[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===o))return e()}var p=document.getElementsByTagName("style");for(l=0;l<p.length;l++){c=p[l],u=c.getAttribute("data-href");if(u===n||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[t],f.parentNode.removeChild(f),r(i)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){a[t]=0}));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,r){n=o[t]=[e,r]});e.push(n[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=l(t),c=function(e){u.onerror=u.onload=null,clearTimeout(p);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+a+")");i.type=n,i.request=a,r[1](i)}o[t]=void 0}};var p=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/utp/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var f=u;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=r("bb71");r("da64");n["a"].use(a["a"],{iconfont:"md"});var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{staticStyle:{"background-color":"white"},attrs:{id:"inspire"}},[r("v-toolbar",{attrs:{color:"black",dark:"",fixed:"",app:"","clipped-right":""}},[r("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),r("v-toolbar-title",[t._v("UTP")]),r("v-spacer")],1),r("v-navigation-drawer",{attrs:{id:"drawer",dark:"",fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{staticClass:"mt-5",attrs:{dense:""}},[r("v-list-tile",{attrs:{to:"/"}},[r("v-list-tile-action",[r("v-icon",[t._v("home")])],1),r("v-list-tile-content",[r("v-list-tile-title",[t._v("main-menu")])],1)],1),r("v-list-tile",{attrs:{to:"/intro"}},[r("v-list-tile-action",[r("v-icon",[t._v("exit_to_app")])],1),r("v-list-tile-content",[r("v-list-tile-title",[t._v("demo-component")])],1)],1)],1)],1),r("v-content",[r("v-container",{attrs:{fluid:"","fill-height":""}},[r("router-view")],1)],1)],1)},i=[],l={data:function(){return{drawer:!1,left:!1}},props:{source:String}},s=l,c=(r("57b6"),r("2877")),u=r("6544"),p=r.n(u),f=r("7496"),d=r("a523"),b=r("549c"),v=r("132d"),g=r("8860"),h=r("ba95"),m=r("40fe"),y=r("5d23"),w=r("f774"),x=r("9910"),_=r("71d9"),j=r("706c"),V=r("2a7f"),C=Object(c["a"])(s,o,i,!1,null,"3aee0c14",null),S=C.exports;p()(C,{VApp:f["a"],VContainer:d["a"],VContent:b["a"],VIcon:v["a"],VList:g["a"],VListTile:h["a"],VListTileAction:m["a"],VListTileContent:y["a"],VListTileTitle:y["b"],VNavigationDrawer:w["a"],VSpacer:x["a"],VToolbar:_["a"],VToolbarSideIcon:j["a"],VToolbarTitle:V["a"]});var T=r("8c4f"),k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"main-container",attrs:{fluid:""}},[r("v-layout",{attrs:{"justify-center":""}},[r("v-flex",{attrs:{xs12:""}},[r("video",{staticStyle:{width:"100%",height:"100%"},attrs:{controls:"true",autoplay:"true",loop:""}},[r("source",{attrs:{src:"movie.mp4",type:"video/mp4"}})])])],1),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("v-layout",{staticClass:"mt-4",attrs:{"justify-center":""}},t._l(t.subjects_obj,function(t,e){return r("v-flex",{key:e,attrs:{xs4:""}},[r("app-subject-btn",{attrs:{src:t.src,label:t.label,to:t.to}})],1)}),1)],1)},L=[],O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[r("v-flex",{staticStyle:{"text-align":"center"},attrs:{xs12:""}},[r("v-btn",{staticClass:"mx-0 ma-3 text-center",staticStyle:{"border-radius":"50%",height:"180px",width:"190px","border-color":"white"},attrs:{outline:"",fab:"",color:"black",to:t.to}},[r("v-img",{staticStyle:{"border-radius":"50%",height:"250px",width:"250px"},attrs:{contain:"",position:"center center",src:t.src}})],1)],1),r("v-flex",{attrs:{xs12:""}},[r("h1",{staticClass:"sub-heading text-xs-center",staticStyle:{"margin-top":"55px"}},[t._v(t._s(t.label))])])],1),r("br"),r("br")],1)},E=[],P={props:["src","label","to"]},A=P,N=(r("91de"),r("8336")),B=r("0e8f"),I=r("adda"),M=r("a722"),$=Object(c["a"])(A,O,E,!1,null,"f95e41a6",null),D=$.exports;p()($,{VBtn:N["a"],VContainer:d["a"],VFlex:B["a"],VImg:I["a"],VLayout:M["a"]});var F={data:function(){return{utptitle:"אוטופיה",btn1:"מקרא",btn2:"הסבר",subjects_obj:[{src:"logo_meteorology.jpg",label:"מטאורולוגיה",to:"/geology"},{src:"logo_biology.jpg",label:"ביולוגיה",to:"/geology"},{src:"logo_geology.jpg",label:"גאולוגיה",to:"/geology"}]}},components:{"app-subject-btn":D}},q=F,J=(r("a8b8"),Object(c["a"])(q,k,L,!1,null,"7d766318",null)),U=J.exports;p()(J,{VContainer:d["a"],VFlex:B["a"],VLayout:M["a"]}),n["a"].use(T["a"]);var H=new T["a"]({routes:[{path:"/",name:"home",component:U},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/intro",name:"intro",component:function(){return r.e("about").then(r.bind(null,"a27e"))}},{path:"/geology",name:"geology",component:function(){return r.e("about").then(r.bind(null,"4b42"))}}]}),K=r("2f62");n["a"].use(K["a"]);var z=new K["a"].Store({state:{label:"",activeClass:"label"},getters:{getLabel:function(t){return t.label},getClass:function(t){return t.activeClass}},mutations:{setLabel:function(t,e){t.label=e},setClass:function(t,e){t.activeClass=e}},actions:{}});n["a"].config.productionTip=!1,new n["a"]({router:H,store:z,render:function(t){return t(S)}}).$mount("#app")},"57b6":function(t,e,r){"use strict";var n=r("5edd"),a=r.n(n);a.a},"5edd":function(t,e,r){},"7da8":function(t,e,r){},"916f":function(t,e,r){},"91de":function(t,e,r){"use strict";var n=r("916f"),a=r.n(n);a.a},a8b8:function(t,e,r){"use strict";var n=r("7da8"),a=r.n(n);a.a}});
//# sourceMappingURL=app.e20e53c6.js.map