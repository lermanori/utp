(function(t){function e(e){for(var o,a,l=e[0],s=e[1],u=e[2],c=0,f=[];c<l.length;c++)a=l[c],r[a]&&f.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},r={app:0},i=[];function l(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7b3dc990"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"ecd259f4"}[t]+".css",r=s.p+o,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var u=i[l],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===o||c===r))return e()}var f=document.getElementsByTagName("style");for(l=0;l<f.length;l++){u=f[l],c=u.getAttribute("data-href");if(c===o||c===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){a[t]=0}));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise(function(e,n){o=r[t]=[e,n]});e.push(o[2]=i);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=l(t),u=function(e){c.onerror=c.onload=null,clearTimeout(f);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+o+": "+a+")");i.type=o,i.request=a,n[1](i)}r[t]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:c})},12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/utp/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"128a":function(t,e,n){"use strict";var o=n("a9f4"),a=n.n(o);a.a},"12c9":function(t,e,n){},"41ad":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),a=n("bb71");n("da64");o["a"].use(a["a"],{iconfont:"md"});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticStyle:{"background-color":"white"},attrs:{id:"inspire"}},[n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("transition",{attrs:{"enter-active-class":"animated fadeInLeft","leave-active-class":"animated fadeOutRight",mode:"out-in",duration:"700"}},[n("router-view")],1),n("app-speed-dial")],1)],1)],1)},i=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-speed-dial",{staticClass:"mr-5",attrs:{bottom:!0,right:!0,direction:"top",fixed:!0,"open-on-hover":!1,transition:"slide-y-reverse-transition"},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-btn",{staticClass:"mt-4",attrs:{color:"indigo darken-4",small:"",dark:"",fab:""},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[n("v-icon",[t._v("menu")]),n("v-icon",[t._v("close")])],1)]},proxy:!0}]),model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},["meteorology"!=this.$route.name?n("v-btn",{attrs:{outline:"",to:"meteorology",fab:"",dark:"",large:"",color:"black"}},[n("v-img",{attrs:{src:t.logo.meteorology}})],1):t._e(),"biology"!=this.$route.name?n("v-btn",{attrs:{outline:"",to:"biology",fab:"",dark:"",large:"",color:"black"}},[n("v-img",{attrs:{src:t.logo.biology}})],1):t._e(),"geology"!=this.$route.name?n("v-btn",{attrs:{outline:"",to:"geology",fab:"",dark:"",large:"",color:"black"}},[n("v-img",{attrs:{src:t.logo.geology}})],1):t._e(),"home"!=this.$route.name?n("v-btn",{attrs:{to:"/",fab:"",dark:"",small:"",color:"indigo darken-4"}},[n("v-icon",[t._v("home")])],1):t._e(),n("v-btn",{attrs:{fab:"",dark:"",small:"",color:"indigo darken-4"},on:{click:function(e){return t.scrollTop()}}},[n("v-icon",[t._v("expand_less")])],1)],1)},s=[],u={data:function(){return{fab:!0,logo:{meteorology:"/meteor!!!.png",geology:"/geo!!!.png",biology:"/biology!!!.png"}}},methods:{scrollTop:function(){window.scroll({top:0,left:0,behavior:"smooth"})}}},c=u,f=(n("924e"),n("2877")),d=n("6544"),p=n.n(d),b=n("8336"),m=n("132d"),v=n("adda"),g=n("c73b"),h=Object(f["a"])(c,l,s,!1,null,"6cf9a1b0",null),y=h.exports;p()(h,{VBtn:b["a"],VIcon:m["a"],VImg:v["a"],VSpeedDial:g["a"]});var _={data:function(){return{drawer:!1,left:!1}},props:{source:String},components:{"app-speed-dial":y}},x=_,w=(n("9780"),n("7496")),k=n("a523"),j=n("549c"),C=Object(f["a"])(x,r,i,!1,null,"b42d5cf8",null),S=C.exports;p()(C,{VApp:w["a"],VContainer:k["a"],VContent:j["a"]});var O=n("8c4f"),V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"main-container",attrs:{fluid:""}},[n("v-layout",{attrs:{"justify-center":""}},[n("v-flex",{attrs:{xs12:""}},[n("video",{staticStyle:{width:"100vw"},attrs:{muted:"",playsinline:"",autoplay:"true",loop:""},domProps:{muted:!0}},[n("source",{attrs:{src:"movie.mp4",type:"video/mp4"}})])])],1),n("br"),n("br"),n("v-layout",{attrs:{"justify-center":""}},[n("v-img",{attrs:{src:t.introduction_src}})],1),n("v-layout",{staticClass:"mt-4",attrs:{"justify-center":""}},t._l(t.subjects_obj,function(t,e){return n("v-flex",{key:e,attrs:{xs4:""}},[n("app-subject-btn",{attrs:{src:t.src,label:t.label,to:t.to,animation:t.animation}})],1)}),1),n("br"),n("br")],1)},E=[],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[n("v-flex",{staticStyle:{"text-align":"center"},attrs:{xs12:""}},[n("v-btn",{staticClass:"mx-0 ma-3 text-center",staticStyle:{"border-radius":"50%",height:"180px",width:"190px","border-color":"white"},attrs:{outline:"",fab:"",color:"black",to:t.to,ripple:!1}},[n("video",{staticStyle:{width:"20vw"},attrs:{muted:"",playsinline:"",autoplay:"true",loop:""},domProps:{muted:!0}},[n("source",{attrs:{src:t.src,type:"video/mp4"}})])])],1),n("v-flex",{attrs:{xs12:""}},[n("h1",{staticClass:"sub-heading text-xs-center",staticStyle:{"margin-top":"55px"}},[t._v(t._s(t.label))])])],1),n("br"),n("br")],1)},T=[],L={data:function(){return{animated:""}},methods:{mouse_over_handler:function(){this.animated=this.animation},mouse_out_handler:function(){this.animated=""}},props:["src","label","to","animation"]},$=L,A=(n("60e4"),n("0e8f")),B=n("a722"),I=Object(f["a"])($,P,T,!1,null,"97c8feca",null),N=I.exports;p()(I,{VBtn:b["a"],VContainer:k["a"],VFlex:A["a"],VLayout:B["a"]});var M={data:function(){return{introduction_src:"intro.png",utptitle:"אוטופיה",btn1:"מקרא",btn2:"הסבר",subjects_obj:[{src:"logo_meteorlogy.mp4",label:"מטאורולוגיה",to:"/meteorology",animation:"animated infinite tada"},{src:"logo_biology.mp4",label:"ביולוגיה",to:"/biology",animation:"animated infinite heartBeat"},{src:"logo_geology.mp4",label:"גאולוגיה",to:"/geology",animation:"animated infinite shake"}]}},components:{"app-subject-btn":N}},D=M,F=(n("128a"),Object(f["a"])(D,V,E,!1,null,"03f9a240",null)),q=F.exports;p()(F,{VContainer:k["a"],VFlex:A["a"],VImg:v["a"],VLayout:B["a"]}),o["a"].use(O["a"]);var J=new O["a"]({routes:[{path:"/",name:"home",component:q},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/intro",name:"intro",component:function(){return n.e("about").then(n.bind(null,"a27e"))}},{path:"/geology",name:"geology",component:function(){return n.e("about").then(n.bind(null,"4b42"))}},{path:"/biology",name:"biology",component:function(){return n.e("about").then(n.bind(null,"b693"))}},{path:"/meteorology",name:"meteorology",component:function(){return n.e("about").then(n.bind(null,"a912"))}}],scrollBehavior:function(){return{x:0,y:0}}}),H=n("2f62");o["a"].use(H["a"]);var K=new H["a"].Store({state:{label:"",activeClass:"label"},getters:{getLabel:function(t){return t.label},getClass:function(t){return t.activeClass}},mutations:{setLabel:function(t,e){t.label=e},setClass:function(t,e){t.activeClass=e}},actions:{}});o["a"].config.productionTip=!1,new o["a"]({router:J,store:K,render:function(t){return t(S)}}).$mount("#app")},"60e4":function(t,e,n){"use strict";var o=n("12c9"),a=n.n(o);a.a},6538:function(t,e,n){},"924e":function(t,e,n){"use strict";var o=n("41ad"),a=n.n(o);a.a},9780:function(t,e,n){"use strict";var o=n("6538"),a=n.n(o);a.a},a9f4:function(t,e,n){}});
//# sourceMappingURL=app.19828a7c.js.map