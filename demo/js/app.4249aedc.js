(function(e){function t(t){for(var r,o,l=t[0],u=t[1],i=t[2],d=0,p=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&p.push(c[o][0]),c[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);b&&b(t);while(p.length)p.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==c[l]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function l(e){return u.p+"js/"+({callback:"callback"}[e]||e)+"."+{callback:"bbb37110","chunk-2d20f552":"104641c3","chunk-de545668":"f2f705f6"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={callback:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({callback:"callback"}[e]||e)+"."+{callback:"3a05a9cb","chunk-2d20f552":"31d6cfe0","chunk-de545668":"31d6cfe0"}[e]+".css",c=u.p+r,a=document.getElementsByTagName("link"),l=0;l<a.length;l++){var i=a[l],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===r||d===c))return t()}var p=document.getElementsByTagName("style");for(l=0;l<p.length;l++){i=p[l],d=i.getAttribute("data-href");if(d===r||d===c)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],b.parentNode.removeChild(b),n(a)},b.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=l(e);var p=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(b);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}c[e]=void 0}};var b=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue-component-sandbox/demo/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var b=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("7a23"),o={style:{display:"flex","justify-content":"center"}};function c(e,t){var n=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[Object(r["createVNode"])("div",o,[Object(r["createVNode"])(n,{style:{width:"1024px"}})])])}n("9d1f");const a={};a.render=c;var l=a,u=(n("d3b7"),n("6c02")),i=(n("b0c0"),{key:0,style:{"text-align":"center"}}),d=Object(r["createVNode"])("h1",null,"Vue Component Sandbox",-1),p={id:"nav"},b=Object(r["createTextVNode"])(" | "),f=Object(r["createTextVNode"])("Demo 1"),s=Object(r["createTextVNode"])(" | "),m=Object(r["createTextVNode"])("Demo 2"),h=Object(r["createTextVNode"])(" | "),v=Object(r["createTextVNode"])("Demo 3"),j=Object(r["createTextVNode"])(" | "),O=Object(r["createTextVNode"])("Demo 4"),y=Object(r["createTextVNode"])(" | ");function k(e,t,n,o,c,a){var l=Object(r["resolveComponent"])("router-link"),u=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,["demo"===e.$route.name?(Object(r["openBlock"])(),Object(r["createBlock"])("div",i,[d])):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])("div",p,[b,Object(r["createVNode"])(l,{to:{name:"demo-basic"}},{default:Object(r["withCtx"])((function(){return[f]})),_:1}),s,Object(r["createVNode"])(l,{to:{name:"demo-prop-sync"}},{default:Object(r["withCtx"])((function(){return[m]})),_:1}),h,Object(r["createVNode"])(l,{to:{name:"demo-full-screen-block"}},{default:Object(r["withCtx"])((function(){return[v]})),_:1}),j,Object(r["createVNode"])(l,{to:{name:"demo-prop-callback"}},{default:Object(r["withCtx"])((function(){return[O]})),_:1}),y]),Object(r["createVNode"])(u)])}var g={name:"demo"};g.render=k;var x=g,N=[{path:"/",name:"demo",component:x,children:[{path:"/basic",name:"demo-basic",component:function(){return n.e("callback").then(n.bind(null,"d339"))}},{path:"/prop-sync",name:"demo-prop-sync",component:function(){return n.e("callback").then(n.bind(null,"317d"))}},{path:"/demo-full-screen-block",name:"demo-full-screen-block",component:function(){return n.e("callback").then(n.bind(null,"1392"))}},{path:"/prop-callback",name:"demo-prop-callback",component:function(){return n.e("callback").then(n.bind(null,"b818"))}}]}],w=Object(u["a"])({history:Object(u["b"])(),routes:N}),V=w;Object(r["createApp"])(l).use(V).mount("#app")},"928f":function(e,t,n){},"9d1f":function(e,t,n){"use strict";n("928f")}});
//# sourceMappingURL=app.4249aedc.js.map