(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"2ef7":function(t,e,a){"use strict";var n=a("5086"),s=a.n(n);s.a},"3d8a":function(t,e,a){"use strict";var n=a("c032"),s=a.n(n);s.a},"4b42":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{attrs:{xs12:""}},[a("v-img",{attrs:{src:t.geology_img_src}})],1)],1),a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{attrs:{xs12:""}},[a("app-element")],1),a("v-flex",{attrs:{xs12:""}},[a("app-element1",{attrs:{symbols:t.element_obj.symbols,elementName:t.element_obj.elementName,src_hero:t.element_obj.src_hero,src_overlay:t.element_obj.src_overlay}})],1)],1)],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"container",staticStyle:{padding:"0px"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"white my-3 mx-5",staticStyle:{"background-color":"white"},attrs:{xs12:"",sm12:"",md12:""}},[a("v-card",{staticClass:"text-xs-right",staticStyle:{"background-color":"white"},attrs:{color:"white",flat:"",height:"200px"}},[a("v-toolbar",{attrs:{color:t.bar.class,dark:t.bar.dark}},[a("v-btn",{attrs:{icon:""},on:{click:function(e){t.opened=!t.opened}}},[a("v-img",{attrs:{width:"30px",height:"30px",contain:"",src:"/i_icon_image.png"}})],1),a("v-spacer"),a("span",{ref:"label",staticClass:"label pr-3"},[t._v(t._s(t.label))]),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.pickone("מתקיימת בקיץ")}}},[a("v-img",{staticClass:"px-1",attrs:{width:"42px",height:"42px",contain:"",src:"/summer_icon_image.png"}})],1),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.pickone("מתקיימת במיקום ספיציפי")}}},[a("v-img",{staticClass:"px-1",attrs:{width:"42px",height:"42px",contain:"",src:"/specificLocation_icon_image.png"}})],1),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.pickone("תופעה גיאולוגית")}}},[a("v-img",{staticClass:"px-1",attrs:{width:"42px",height:"42px",contain:"",src:"/geology_icon_image.png"}})],1)],1),a("span",{staticClass:"elementName mr-5"},[t._v(t._s(t.elementName))]),a("keep-alive",[t.opened?a("v-img",{key:1,staticClass:"mx-5 my-3",attrs:{contain:"",src:"/blue_rocks.png"}}):t._e(),a("v-img",{directives:[{name:"show",rawName:"v-show",value:!t.opened,expression:"!opened"}],key:2,staticClass:"mx-5 my-3",attrs:{contain:"",src:"/sailing_rocks.png"}})],1)],1)],1)],1)],1)},r=[],o=void 0,c={data:function(){return{arr:[{text:"אחד",active:!0},{text:"שתיים",active:!1}],bar:{class:"elevation-0 white bar px-4"},logo_title:"",activeClass:"label",elementName:"Sailing Rocks | אבנים נעות",opened:!1,label:""}},computed:{activeSubject:function(){return this.activeClass}},methods:{clear:function(){for(var t;t<o.arr.length;t++)o.arr[t].active=!1},pickone:function(t){this.label=t}}},l=c,u=(a("690b"),a("2877")),p=a("6544"),m=a.n(p),v=a("8336"),d=(a("4c94"),a("d0e7"),a("b64a")),h=a("2b0e");function g(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var f=h["a"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation?g({},"elevation-"+this.computedElevation,!0):{}}}}),b=a("23bf"),x=a("6a18"),_=a("58df"),y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},k=Object(_["a"])(d["a"],f,b["a"],x["a"]).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return y({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.$listeners};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}}),w=k,C=a("0d01"),V=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},j=Object(_["a"])(C["a"],w).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return V({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover},w.options.computed.classes.call(this))},styles:function(){var t=V({},w.options.computed.styles.call(this));return this.img&&(t.background='url("'+this.img+'") center center / cover no-repeat'),t}},render:function(t){var e=this.generateRouteLink(this.classes),a=e.tag,n=e.data;return n.style=this.styles,t(a,this.setBackgroundColor(this.color,n),this.$slots.default)}}),S=a("a523"),O=a("0e8f"),N=a("adda"),E=a("a722"),$=a("9910"),B=a("71d9"),L=Object(u["a"])(l,i,r,!1,null,"bc29e3a6",null),F=L.exports;m()(L,{VBtn:v["a"],VCard:j,VContainer:S["a"],VFlex:O["a"],VImg:N["a"],VLayout:E["a"],VSpacer:$["a"],VToolbar:B["a"]});var I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"container",staticStyle:{padding:"0px"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"white my-3 mx-5",staticStyle:{"background-color":"white"},attrs:{xs12:"",sm12:"",md12:""}},[a("v-card",{staticClass:"text-xs-right",staticStyle:{"background-color":"white"},attrs:{color:"white",flat:"",height:"200px"}},[a("v-toolbar",{attrs:{color:t.bar.class,dark:t.bar.dark}},[a("v-btn",{attrs:{icon:""},on:{click:function(e){t.opened=!t.opened}}},[a("v-img",{attrs:{width:"30px",height:"30px",contain:"",src:"/i_icon_image.png"}})],1),a("v-spacer"),a("span",{ref:"label",staticClass:"label pr-3"},[t._v(t._s(t.label))]),t._l(t.symbols,function(e,n){return a("v-btn",{key:n,attrs:{icon:""},on:{click:function(a){return t.pickone(e.text)}}},[a("v-img",{staticClass:"px-1",attrs:{width:"42px",height:"42px",contain:"",src:e.src}})],1)})],2),a("span",{staticClass:"elementName mr-5"},[t._v(t._s(t.elementName))]),a("keep-alive",[t.opened?a("v-img",{key:1,staticClass:"mx-5 my-3",attrs:{contain:"",src:t.src_overlay}}):t._e(),a("v-img",{directives:[{name:"show",rawName:"v-show",value:!t.opened,expression:"!opened"}],key:2,staticClass:"mx-5 my-3",attrs:{contain:"",src:t.src_hero}})],1)],1)],1)],1)],1)},P=[],R=void 0,T={data:function(){return{bar:{class:"elevation-0 white bar px-4"},logo_title:"",activeClass:"label",opened:!1,label:""}},props:["symbols","elementName","src_hero","src_overlay"],computed:{activeSubject:function(){return this.activeClass}},methods:{clear:function(){for(var t;t<R.arr.length;t++)R.arr[t].active=!1},pickone:function(t){this.label=t}}},q=T,J=(a("3d8a"),Object(u["a"])(q,I,P,!1,null,"442d5930",null)),z=J.exports;m()(J,{VBtn:v["a"],VCard:j,VContainer:S["a"],VFlex:O["a"],VImg:N["a"],VLayout:E["a"],VSpacer:$["a"],VToolbar:B["a"]});var A={data:function(){return{geology_img_src:"/geology_img.jpg",element_obj:{symbols:[{text:"מתקיימת בקיץ",src:"/summer_icon_image.png"},{text:"מתקיימת במיקום ספיציפי",src:"/specificLocation_icon_image.png"},{text:"תופעה גיאולוגית",src:"/geology_icon_image.png"}],elementName:"Sailing Rocks | אבנים נעות",src_overlay:"/blue_rocks.png",src_hero:"/sailing_rocks.png"}}},components:{"app-element":F,"app-element1":z}},D=A,G=Object(u["a"])(D,n,s,!1,null,"3f1b20b7",null);e["default"]=G.exports;m()(G,{VContainer:S["a"],VFlex:O["a"],VImg:N["a"],VLayout:E["a"]})},"4c94":function(t,e,a){},5086:function(t,e,a){},"50c9":function(t,e,a){},"690b":function(t,e,a){"use strict";var n=a("50c9"),s=a.n(n);s.a},a27e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",[a("v-flex",[a("h1",{staticClass:"animated bounce 4s mb-5 text-xs-center display-4 font-weight-thin",attrs:{id:"title"}},[t._v("\n                introduction\n            ")]),a("p",{staticClass:"mb-5 text-xs-center display-1 font-weight-black",attrs:{id:"p1"}},[t._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae minima voluptatem sint nesciunt.\n            ")]),a("p",{staticClass:"text-xs-center body-2 weight-medium",attrs:{id:"p2"}},[t._v("\n                 Vel quibusdam aut, nemo asperiores nobis sint nisi quaerat earum architecto repellat ipsum assumenda excepturi optio consectetur.\n            ")]),a("p",{staticClass:"text-xs-center body-2 weight-medium",attrs:{id:"p3"}},[t._v("\n                assets and creativity by rino avidar, code: by ori lerman.\n            ")])])],1)],1)},s=[],i={},r=i,o=(a("2ef7"),a("2877")),c=a("6544"),l=a.n(c),u=a("a523"),p=a("0e8f"),m=a("a722"),v=Object(o["a"])(r,n,s,!1,null,"7ae281d4",null);e["default"]=v.exports;l()(v,{VContainer:u["a"],VFlex:p["a"],VLayout:m["a"]})},c032:function(t,e,a){},d0e7:function(t,e,a){},f820:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],i=a("2877"),r={},o=Object(i["a"])(r,n,s,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=about.b38aaa03.js.map