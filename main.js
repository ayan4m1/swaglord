!function(){"use strict";var e,r={1933:function(e,r,t){t(8594),t(5666);var n=t(3935),o=t(4942),a=t(8152),i=t(7294),c=t(4861),u=t.n(c),s=t(2294),l=t(3368),f=t(5893);function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(){var e=(0,i.useRef)(),r=(0,i.useState)({translate:{x:0,y:0},speed:{x:-Math.max(.5,Math.ceil(3*Math.random())),y:-Math.max(.5,Math.ceil(3*Math.random()))}}),t=(0,a.Z)(r,2),n=t[0],c=t[1],d=(0,i.useMemo)((function(){for(var e=[],r=0;r<=1;r+=1/32)e.push((0,s.q)("red","blue")(r));for(var t=0;t<=1;t+=1/32)e.push((0,s.q)("blue","red")(t));return e}),[]),h=function r(){c((function(t){var n=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},t);return(t.translate.x<=0||t.translate.x+350>=window.innerWidth)&&(n.speed.x*=-1),(t.translate.y<=0||t.translate.y+300>=window.innerHeight)&&(n.speed.y*=-1),n.translate={x:t.translate.x+n.speed.x,y:t.translate.y+n.speed.y},e.current=requestAnimationFrame(r),n}))};(0,i.useEffect)((function(){return e.current=requestAnimationFrame(h),function(){return cancelAnimationFrame(e.current)}}),[]);var b=n.translate,v=b.x,y=b.y;return(0,f.jsx)("div",{className:"sl-root",children:(0,f.jsx)(u(),{className:"sl-background",colors:d,duration:.5,delay:0,timingFunction:"ease-in",children:(0,f.jsx)("div",{className:"sl-text",style:{transform:"translate(".concat(v,"px, ").concat(y,"px)")},children:(0,f.jsx)("img",{src:l,alt:"hex's face",height:300,width:350})})})})}n.render((0,f.jsx)(d,{}),document.getElementById("root"))},3368:function(e,r,t){e.exports=t.p+"0425cd0446f8b442dafb.png"}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={exports:{}};return r[e](a,a.exports,n),a.exports}n.m=r,e=[],n.O=function(r,t,o,a){if(!t){var i=1/0;for(l=0;l<e.length;l++){t=e[l][0],o=e[l][1],a=e[l][2];for(var c=!0,u=0;u<t.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](t[u])}))?t.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(l--,1);var s=o();void 0!==s&&(r=s)}}return r}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[t,o,a]},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,{a:r}),r},n.d=function(e,r){for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){var e;n.g.importScripts&&(e=n.g.location+"");var r=n.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e}(),function(){var e={179:0};n.O.j=function(r){return 0===e[r]};var r=function(r,t){var o,a,i=t[0],c=t[1],u=t[2],s=0;if(i.some((function(r){return 0!==e[r]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var l=u(n)}for(r&&r(t);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[i[s]]=0;return n.O(l)},t=self.webpackChunkswaglord=self.webpackChunkswaglord||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var o=n.O(void 0,[270,736],(function(){return n(1933)}));o=n.O(o)}();