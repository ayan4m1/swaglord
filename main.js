/*! For license information please see main.js.LICENSE.txt */
!function(){"use strict";var e,n={82:function(e,n,t){var r=t(935),o=t(839),a=t.n(o),i=t(901),l=t.p+"0425cd0446f8b442dafb.png",u=t(294);var s=t(54);var c=t(893);function f(){const{translate:e}=function(){let{width:e,height:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{width:0,height:0};const t=(0,u.useRef)(),[r,o]=(0,u.useState)({translate:{x:0,y:0},speed:{x:-Math.max(.5,Math.ceil(3*Math.random())),y:-Math.max(.5,Math.ceil(3*Math.random()))}}),a=(0,u.useCallback)((()=>o((r=>{const o={...r.speed},{translate:i}=r;(i.x<=0||i.x+e>=window.innerWidth)&&(o.x*=-1),(i.y<=0||i.y+n>=window.innerHeight)&&(o.y*=-1);const l={x:i.x+o.x,y:i.y+o.y};return t.current=requestAnimationFrame(a),{translate:l,speed:o}}))),[n,e]);return(0,u.useEffect)((()=>(t.current=requestAnimationFrame(a),()=>cancelAnimationFrame(t.current))),[]),r}({width:350,height:300}),n=function(e,n){let t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:32;return(0,u.useMemo)((()=>{const o=[],a=t?s.q:s.Z;for(let t=0;t<=1;t+=1/r)o.push(a(e,n)(t));for(let t=0;t<=1;t+=1/r)o.push(a(n,e)(t));return o}),[e,n,r,t])}("#B38184","#F0B49E"),{x:t,y:r}=e;return(0,c.jsx)("div",{className:"sl-root",children:(0,c.jsxs)(a(),{className:"sl-background",colors:n,duration:.1,delay:0,timingFunction:"ease-in",children:[(0,c.jsx)("div",{className:"sl-curves",children:(0,c.jsx)(i.Z,{fill:"url(#gradient)",height:window.innerHeight/2,points:5,children:(0,c.jsx)("defs",{children:(0,c.jsxs)("linearGradient",{id:"gradient",gradientTransform:"rotate(90)",children:[(0,c.jsx)("stop",{offset:"0%",stopColor:n[31]}),(0,c.jsx)("stop",{offset:"90%",stopColor:n[0]})]})})})}),(0,c.jsx)("div",{className:"sl-text",style:{transform:`translate(${t}px, ${r}px)`},children:(0,c.jsx)("img",{src:l,alt:"hex's face",height:300,width:350})})]})})}r.render((0,c.jsx)(f,{}),document.getElementById("root"))},418:function(e){var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,l,u=o(e),s=1;s<arguments.length;s++){for(var c in i=Object(arguments[s]))t.call(i,c)&&(u[c]=i[c]);if(n){l=n(i);for(var f=0;f<l.length;f++)r.call(i,l[f])&&(u[l[f]]=i[l[f]])}}return u}},53:function(e,n){var t,r,o,a;if("object"==typeof performance&&"function"==typeof performance.now){var i=performance;n.unstable_now=function(){return i.now()}}else{var l=Date,u=l.now();n.unstable_now=function(){return l.now()-u}}if("undefined"==typeof window||"function"!=typeof MessageChannel){var s=null,c=null,f=function(){if(null!==s)try{var e=n.unstable_now();s(!0,e),s=null}catch(e){throw setTimeout(f,0),e}};t=function(e){null!==s?setTimeout(t,0,e):(s=e,setTimeout(f,0))},r=function(e,n){c=setTimeout(e,n)},o=function(){clearTimeout(c)},n.unstable_shouldYield=function(){return!1},a=n.unstable_forceFrameRate=function(){}}else{var d=window.setTimeout,p=window.clearTimeout;if("undefined"!=typeof console){var h=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!=typeof h&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var b=!1,v=null,m=-1,y=5,w=0;n.unstable_shouldYield=function(){return n.unstable_now()>=w},a=function(){},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<e?Math.floor(1e3/e):5};var g=new MessageChannel,x=g.port2;g.port1.onmessage=function(){if(null!==v){var e=n.unstable_now();w=e+y;try{v(!0,e)?x.postMessage(null):(b=!1,v=null)}catch(e){throw x.postMessage(null),e}}else b=!1},t=function(e){v=e,b||(b=!0,x.postMessage(null))},r=function(e,t){m=d((function(){e(n.unstable_now())}),t)},o=function(){p(m),m=-1}}function j(e,n){var t=e.length;e.push(n);e:for(;;){var r=t-1>>>1,o=e[r];if(!(void 0!==o&&0<O(o,n)))break e;e[r]=n,e[t]=o,t=r}}function k(e){return void 0===(e=e[0])?null:e}function _(e){var n=e[0];if(void 0!==n){var t=e.pop();if(t!==n){e[0]=t;e:for(var r=0,o=e.length;r<o;){var a=2*(r+1)-1,i=e[a],l=a+1,u=e[l];if(void 0!==i&&0>O(i,t))void 0!==u&&0>O(u,i)?(e[r]=u,e[l]=t,r=l):(e[r]=i,e[a]=t,r=a);else{if(!(void 0!==u&&0>O(u,t)))break e;e[r]=u,e[l]=t,r=l}}}return n}return null}function O(e,n){var t=e.sortIndex-n.sortIndex;return 0!==t?t:e.id-n.id}var T=[],M=[],P=1,C=null,F=3,E=!1,I=!1,N=!1;function q(e){for(var n=k(M);null!==n;){if(null===n.callback)_(M);else{if(!(n.startTime<=e))break;_(M),n.sortIndex=n.expirationTime,j(T,n)}n=k(M)}}function A(e){if(N=!1,q(e),!I)if(null!==k(T))I=!0,t(S);else{var n=k(M);null!==n&&r(A,n.startTime-e)}}function S(e,t){I=!1,N&&(N=!1,o()),E=!0;var a=F;try{for(q(t),C=k(T);null!==C&&(!(C.expirationTime>t)||e&&!n.unstable_shouldYield());){var i=C.callback;if("function"==typeof i){C.callback=null,F=C.priorityLevel;var l=i(C.expirationTime<=t);t=n.unstable_now(),"function"==typeof l?C.callback=l:C===k(T)&&_(T),q(t)}else _(T);C=k(T)}if(null!==C)var u=!0;else{var s=k(M);null!==s&&r(A,s.startTime-t),u=!1}return u}finally{C=null,F=a,E=!1}}var B=a;n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_continueExecution=function(){I||E||(I=!0,t(S))},n.unstable_getCurrentPriorityLevel=function(){return F},n.unstable_getFirstCallbackNode=function(){return k(T)},n.unstable_next=function(e){switch(F){case 1:case 2:case 3:var n=3;break;default:n=F}var t=F;F=n;try{return e()}finally{F=t}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=B,n.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var t=F;F=e;try{return n()}finally{F=t}},n.unstable_scheduleCallback=function(e,a,i){var l=n.unstable_now();switch("object"==typeof i&&null!==i?i="number"==typeof(i=i.delay)&&0<i?l+i:l:i=l,e){case 1:var u=-1;break;case 2:u=250;break;case 5:u=1073741823;break;case 4:u=1e4;break;default:u=5e3}return e={id:P++,callback:a,priorityLevel:e,startTime:i,expirationTime:u=i+u,sortIndex:-1},i>l?(e.sortIndex=i,j(M,e),null===k(T)&&e===k(M)&&(N?o():N=!0,r(A,i-l))):(e.sortIndex=u,j(T,e),I||E||(I=!0,t(S))),e},n.unstable_wrapCallback=function(e){var n=F;return function(){var t=F;F=n;try{return e.apply(this,arguments)}finally{F=t}}}},840:function(e,n,t){e.exports=t(53)}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={exports:{}};return n[e](a,a.exports,r),a.exports}r.m=n,e=[],r.O=function(n,t,o,a){if(!t){var i=1/0;for(c=0;c<e.length;c++){t=e[c][0],o=e[c][1],a=e[c][2];for(var l=!0,u=0;u<t.length;u++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](t[u])}))?t.splice(u--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var s=o();void 0!==s&&(n=s)}}return n}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[t,o,a]},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,{a:n}),n},r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e}(),function(){var e={179:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,a,i=t[0],l=t[1],u=t[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(u)var c=u(r)}for(n&&n(t);s<i.length;s++)a=i[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},t=self.webpackChunkswaglord=self.webpackChunkswaglord||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var o=r.O(void 0,[146,270],(function(){return r(82)}));o=r.O(o)}();