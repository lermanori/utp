(function(t){function e(e){for(var o,a,l=e[0],s=e[1],u=e[2],c=0,f=[];c<l.length;c++)a=l[c],r[a]&&f.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},r={app:0},i=[];function l(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2d725afc"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"987f3be2"}[t]+".css",r=s.p+o,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var u=i[l],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===o||c===r))return e()}var f=document.getElementsByTagName("style");for(l=0;l<f.length;l++){u=f[l],c=u.getAttribute("data-href");if(c===o||c===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){a[t]=0}));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise(function(e,n){o=r[t]=[e,n]});e.push(o[2]=i);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=l(t),u=function(e){c.onerror=c.onload=null,clearTimeout(f);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+o+": "+a+")");i.type=o,i.request=a,n[1](i)}r[t]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:c})},12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/utp/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"12c9":function(t,e,n){},3362:function(t,e,n){},"501e":function(t,e,n){"use strict";var o=n("3362"),a=n.n(o);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),a=n("bb71");n("da64");o["a"].use(a["a"],{iconfont:"md"});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticStyle:{"background-color":"white"},attrs:{id:"inspire"}},[n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("transition",{attrs:{"enter-active-class":"animated fadeInLeft","leave-active-class":"animated fadeOutRight",mode:"out-in",duration:"700"}},[t.$vuetify.breakpoint.lgAndUp?n("router-view"):[n("v-layout",{staticClass:"text-xs-center",attrs:{"justify-center":""}},[n("h1",{staticClass:"mt-5"},[t._v("view on devices from 1000px and up")])])]],2),t.$vuetify.breakpoint.lgAndUp?n("app-speed-dial"):t._e()],1)],1)],1)},i=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-speed-dial",{staticClass:"mr-2",attrs:{bottom:!0,right:!0,direction:"top",fixed:!0,"open-on-hover":!1,transition:"slide-y-reverse-transition"},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-btn",{staticClass:"mt-4",attrs:{color:"indigo darken-4",small:"",dark:"",fab:""},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[n("v-icon",[t._v("menu")]),n("v-icon",[t._v("close")])],1)]},proxy:!0}]),model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},["meteorology"!=this.$route.name?n("v-btn",{attrs:{outline:"",to:"meteorology",fab:"",dark:"",large:"",color:"black"}},[n("v-img",{attrs:{src:t.logo.meteorology}})],1):t._e(),"biology"!=this.$route.name?n("v-btn",{attrs:{outline:"",to:"biology",fab:"",dark:"",large:"",color:"black"}},[n("v-img",{attrs:{src:t.logo.biology}})],1):t._e(),"geology"!=this.$route.name?n("v-btn",{attrs:{outline:"",to:"geology",fab:"",dark:"",large:"",color:"black"}},[n("v-img",{attrs:{src:t.logo.geology}})],1):t._e(),"home"!=this.$route.name?n("v-btn",{attrs:{to:"/",fab:"",dark:"",small:"",color:"indigo darken-4"}},[n("v-icon",[t._v("home")])],1):t._e(),n("v-btn",{attrs:{fab:"",dark:"",small:"",color:"indigo darken-4"},on:{click:function(e){return t.scrollTop()}}},[n("v-icon",[t._v("expand_less")])],1)],1)},s=[],u={data:function(){return{fab:!0,logo:{meteorology:"/utp/meteor!!!.png",geology:"/utp/geo!!!.png",biology:"/utp/biology!!!.png"}}},methods:{scrollTop:function(){window.scroll({top:0,left:0,behavior:"smooth"})}}},c=u,f=(n("501e"),n("2877")),d=n("6544"),p=n.n(d),b=n("8336"),m=n("132d"),v=n("adda"),g=n("c73b"),h=Object(f["a"])(c,l,s,!1,null,"752d7c43",null),y=h.exports;p()(h,{VBtn:b["a"],VIcon:m["a"],VImg:v["a"],VSpeedDial:g["a"]});var _={data:function(){return{drawer:!1,left:!1}},props:{source:String},components:{"app-speed-dial":y}},x=_,w=(n("b785"),n("7496")),k=n("a523"),j=n("549c"),C=n("a722"),S=Object(f["a"])(x,r,i,!1,null,"122ec8b5",null),V=S.exports;p()(S,{VApp:w["a"],VContainer:k["a"],VContent:j["a"],VLayout:C["a"]});var O=n("8c4f"),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"main-container",attrs:{fluid:""}},[n("v-layout",{attrs:{"justify-center":""}},[n("v-flex",{attrs:{xs12:""}},[n("video",{staticStyle:{width:"100vw"},attrs:{muted:"",playsinline:"",autoplay:"true",loop:""},domProps:{muted:!0}},[n("source",{attrs:{src:"movie.mp4",type:"video/mp4"}})])])],1),n("br"),n("br"),n("v-layout",{attrs:{"justify-center":""}},[n("v-img",{attrs:{src:t.introduction_src}})],1),n("v-layout",{staticClass:"mt-4",attrs:{"justify-center":""}},t._l(t.subjects_obj,function(t,e){return n("v-flex",{key:e,attrs:{xs4:""}},[n("app-subject-btn",{attrs:{src:t.src,label:t.label,to:t.to,animation:t.animation}})],1)}),1),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],1)},P=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[n("v-flex",{staticStyle:{"text-align":"center"},attrs:{xs12:""}},[n("v-btn",{staticClass:"mx-0 ma-3 text-center",staticStyle:{"border-radius":"50%",height:"180px",width:"190px","border-color":"white"},attrs:{outline:"",fab:"",color:"black",to:t.to,ripple:!1}},[n("video",{staticStyle:{width:"20vw"},attrs:{muted:"",playsinline:"",autoplay:"true",loop:""},domProps:{muted:!0}},[n("source",{attrs:{src:t.src,type:"video/mp4"}})])])],1),n("v-flex",{attrs:{xs12:""}},[n("h1",{staticClass:"sub-heading text-xs-center",staticStyle:{"margin-top":"55px"}},[t._v(t._s(t.label))])])],1),n("br"),n("br")],1)},L=[],T={data:function(){return{animated:""}},methods:{mouse_over_handler:function(){this.animated=this.animation},mouse_out_handler:function(){this.animated=""}},props:["src","label","to","animation"]},A=T,B=(n("60e4"),n("0e8f")),I=Object(f["a"])(A,$,L,!1,null,"97c8feca",null),N=I.exports;p()(I,{VBtn:b["a"],VContainer:k["a"],VFlex:B["a"],VLayout:C["a"]});var M={data:function(){return{introduction_src:"intro.png",utptitle:"אוטופיה",btn1:"מקרא",btn2:"הסבר",subjects_obj:[{src:"logo_meteorlogy.mp4",label:"מטאורולוגיה",to:"/meteorology",animation:"animated infinite tada"},{src:"logo_biology.mp4",label:"ביולוגיה",to:"/biology",animation:"animated infinite heartBeat"},{src:"logo_geology.mp4",label:"גאולוגיה",to:"/geology",animation:"animated infinite shake"}]}},components:{"app-subject-btn":N}},D=M,F=(n("8c60"),Object(f["a"])(D,E,P,!1,null,"8288c280",null)),U=F.exports;p()(F,{VContainer:k["a"],VFlex:B["a"],VImg:v["a"],VLayout:C["a"]}),o["a"].use(O["a"]);var q=new O["a"]({routes:[{path:"/",name:"home",component:U},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/intro",name:"intro",component:function(){return n.e("about").then(n.bind(null,"a27e"))}},{path:"/geology",name:"geology",component:function(){return n.e("about").then(n.bind(null,"4b42"))}},{path:"/biology",name:"biology",component:function(){return n.e("about").then(n.bind(null,"b693"))}},{path:"/meteorology",name:"meteorology",component:function(){return n.e("about").then(n.bind(null,"a912"))}}],scrollBehavior:function(){return{x:0,y:0}}}),J=n("2f62");o["a"].use(J["a"]);var H=new J["a"].Store({state:{label:"",activeClass:"label"},getters:{getLabel:function(t){return t.label},getClass:function(t){return t.activeClass}},mutations:{setLabel:function(t,e){t.label=e},setClass:function(t,e){t.activeClass=e}},actions:{}});o["a"].config.productionTip=!1,new o["a"]({router:q,store:H,render:function(t){return t(V)}}).$mount("#app")},"60e4":function(t,e,n){"use strict";var o=n("12c9"),a=n.n(o);a.a},"8c60":function(t,e,n){"use strict";var o=n("d855"),a=n.n(o);a.a},b785:function(t,e,n){"use strict";var o=n("f8bc"),a=n.n(o);a.a},d855:function(t,e,n){},f8bc:function(t,e,n){}});
//# sourceMappingURL=app.507c17df.js.map