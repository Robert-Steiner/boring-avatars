!function(e,t){if("object"===typeof exports&&"object"===typeof module)module.exports=t(require("react"));else if("function"===typeof define&&define.amd)define(["react"],t);else{var r="object"===typeof exports?t(require("react")):t(e.react);for(var l in r)("object"===typeof exports?exports:e)[l]=r[l]}}(this,(function(e){return function(e){var t={};function r(l){if(t[l])return t[l].exports;var a=t[l]={i:l,l:!1,exports:{}};return e[l].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(l,a,function(t){return e[t]}.bind(null,a));return l},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=1)}([function(t,r){t.exports=e},function(e,t,r){e.exports=r(2)},function(e,t,r){"use strict";r.r(t);var l=r(0),a=r.n(l);const i=e=>{for(var t=0,r=0;r<e.length;r++){t=(t<<5)-t+e.charCodeAt(r),t&=t}return Math.abs(t)},n=(e,t)=>Math.floor(e/Math.pow(10,t)%10),c=(e,t)=>!(n(e,t)%2),h=(e,t,r)=>{let l=e%t;return r&&n(e,r)%2===0?-l:l},o=(e,t,r)=>t[e%r];var s=e=>{const t=function(e,t){const r=i(e),l=t&&t.length;return Array.from({length:4},(e,a)=>({color:o(r+a,t,l),translateX:h(r*(a+1),40-(a+17),1),translateY:h(r*(a+1),40-(a+17),2),rotate:h(r*(a+1),360),isSquare:c(r,2)}))}(e.name,e.colors),r=l.useId();return l.createElement("svg",{viewBox:"0 0 80 80",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size},e.title&&l.createElement("title",null,e.name),l.createElement("mask",{id:r,maskUnits:"userSpaceOnUse",x:0,y:0,width:80,height:80},l.createElement("rect",{width:80,height:80,rx:e.square?void 0:160,fill:"#FFFFFF"})),l.createElement("g",{mask:"url(#".concat(r,")")},l.createElement("rect",{width:80,height:80,fill:t[0].color}),l.createElement("rect",{x:10,y:30,width:80,height:t[1].isSquare?80:10,fill:t[1].color,transform:"translate("+t[1].translateX+" "+t[1].translateY+") rotate("+t[1].rotate+" 40 40)"}),l.createElement("circle",{cx:40,cy:40,fill:t[2].color,r:16,transform:"translate("+t[2].translateX+" "+t[2].translateY+")"}),l.createElement("line",{x1:0,y1:40,x2:80,y2:40,strokeWidth:2,stroke:t[3].color,transform:"translate("+t[3].translateX+" "+t[3].translateY+") rotate("+t[3].rotate+" 40 40)"})))};var m=e=>{const t=function(e,t){const r=i(t),l=e&&e.length,a=Array.from({length:5},(t,a)=>o(r+a,e,l)),n=[];return n[0]=a[0],n[1]=a[1],n[2]=a[1],n[3]=a[2],n[4]=a[2],n[5]=a[3],n[6]=a[3],n[7]=a[0],n[8]=a[4],n}(e.colors,e.name),r=a.a.useId();return a.a.createElement("svg",{viewBox:"0 0 90 90",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size},e.title&&a.a.createElement("title",null,e.name),a.a.createElement("mask",{id:r,maskUnits:"userSpaceOnUse",x:0,y:0,width:90,height:90},a.a.createElement("rect",{width:90,height:90,rx:e.square?void 0:180,fill:"#FFFFFF"})),a.a.createElement("g",{mask:"url(#".concat(r,")")},a.a.createElement("path",{d:"M0 0h90v45H0z",fill:t[0]}),a.a.createElement("path",{d:"M0 45h90v45H0z",fill:t[1]}),a.a.createElement("path",{d:"M83 45a38 38 0 00-76 0h76z",fill:t[2]}),a.a.createElement("path",{d:"M83 45a38 38 0 01-76 0h76z",fill:t[3]}),a.a.createElement("path",{d:"M77 45a32 32 0 10-64 0h64z",fill:t[4]}),a.a.createElement("path",{d:"M77 45a32 32 0 11-64 0h64z",fill:t[5]}),a.a.createElement("path",{d:"M71 45a26 26 0 00-52 0h52z",fill:t[6]}),a.a.createElement("path",{d:"M71 45a26 26 0 01-52 0h52z",fill:t[7]}),a.a.createElement("circle",{cx:45,cy:45,r:23,fill:t[8]})))};var f=e=>{const t=function(e,t){const r=i(e),l=t&&t.length;return Array.from({length:64},(e,a)=>o(r%(a+1),t,l))}(e.name,e.colors),r=l.useId();return l.createElement("svg",{viewBox:"0 0 80 80",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size},e.title&&l.createElement("title",null,e.name),l.createElement("mask",{id:r,"mask-type":"alpha",maskUnits:"userSpaceOnUse",x:0,y:0,width:80,height:80},l.createElement("rect",{width:80,height:80,rx:e.square?void 0:160,fill:"#FFFFFF"})),l.createElement("g",{mask:"url(#".concat(r,")")},l.createElement("rect",{width:10,height:10,fill:t[0]}),l.createElement("rect",{x:20,width:10,height:10,fill:t[1]}),l.createElement("rect",{x:40,width:10,height:10,fill:t[2]}),l.createElement("rect",{x:60,width:10,height:10,fill:t[3]}),l.createElement("rect",{x:10,width:10,height:10,fill:t[4]}),l.createElement("rect",{x:30,width:10,height:10,fill:t[5]}),l.createElement("rect",{x:50,width:10,height:10,fill:t[6]}),l.createElement("rect",{x:70,width:10,height:10,fill:t[7]}),l.createElement("rect",{y:10,width:10,height:10,fill:t[8]}),l.createElement("rect",{y:20,width:10,height:10,fill:t[9]}),l.createElement("rect",{y:30,width:10,height:10,fill:t[10]}),l.createElement("rect",{y:40,width:10,height:10,fill:t[11]}),l.createElement("rect",{y:50,width:10,height:10,fill:t[12]}),l.createElement("rect",{y:60,width:10,height:10,fill:t[13]}),l.createElement("rect",{y:70,width:10,height:10,fill:t[14]}),l.createElement("rect",{x:20,y:10,width:10,height:10,fill:t[15]}),l.createElement("rect",{x:20,y:20,width:10,height:10,fill:t[16]}),l.createElement("rect",{x:20,y:30,width:10,height:10,fill:t[17]}),l.createElement("rect",{x:20,y:40,width:10,height:10,fill:t[18]}),l.createElement("rect",{x:20,y:50,width:10,height:10,fill:t[19]}),l.createElement("rect",{x:20,y:60,width:10,height:10,fill:t[20]}),l.createElement("rect",{x:20,y:70,width:10,height:10,fill:t[21]}),l.createElement("rect",{x:40,y:10,width:10,height:10,fill:t[22]}),l.createElement("rect",{x:40,y:20,width:10,height:10,fill:t[23]}),l.createElement("rect",{x:40,y:30,width:10,height:10,fill:t[24]}),l.createElement("rect",{x:40,y:40,width:10,height:10,fill:t[25]}),l.createElement("rect",{x:40,y:50,width:10,height:10,fill:t[26]}),l.createElement("rect",{x:40,y:60,width:10,height:10,fill:t[27]}),l.createElement("rect",{x:40,y:70,width:10,height:10,fill:t[28]}),l.createElement("rect",{x:60,y:10,width:10,height:10,fill:t[29]}),l.createElement("rect",{x:60,y:20,width:10,height:10,fill:t[30]}),l.createElement("rect",{x:60,y:30,width:10,height:10,fill:t[31]}),l.createElement("rect",{x:60,y:40,width:10,height:10,fill:t[32]}),l.createElement("rect",{x:60,y:50,width:10,height:10,fill:t[33]}),l.createElement("rect",{x:60,y:60,width:10,height:10,fill:t[34]}),l.createElement("rect",{x:60,y:70,width:10,height:10,fill:t[35]}),l.createElement("rect",{x:10,y:10,width:10,height:10,fill:t[36]}),l.createElement("rect",{x:10,y:20,width:10,height:10,fill:t[37]}),l.createElement("rect",{x:10,y:30,width:10,height:10,fill:t[38]}),l.createElement("rect",{x:10,y:40,width:10,height:10,fill:t[39]}),l.createElement("rect",{x:10,y:50,width:10,height:10,fill:t[40]}),l.createElement("rect",{x:10,y:60,width:10,height:10,fill:t[41]}),l.createElement("rect",{x:10,y:70,width:10,height:10,fill:t[42]}),l.createElement("rect",{x:30,y:10,width:10,height:10,fill:t[43]}),l.createElement("rect",{x:30,y:20,width:10,height:10,fill:t[44]}),l.createElement("rect",{x:30,y:30,width:10,height:10,fill:t[45]}),l.createElement("rect",{x:30,y:40,width:10,height:10,fill:t[46]}),l.createElement("rect",{x:30,y:50,width:10,height:10,fill:t[47]}),l.createElement("rect",{x:30,y:60,width:10,height:10,fill:t[48]}),l.createElement("rect",{x:30,y:70,width:10,height:10,fill:t[49]}),l.createElement("rect",{x:50,y:10,width:10,height:10,fill:t[50]}),l.createElement("rect",{x:50,y:20,width:10,height:10,fill:t[51]}),l.createElement("rect",{x:50,y:30,width:10,height:10,fill:t[52]}),l.createElement("rect",{x:50,y:40,width:10,height:10,fill:t[53]}),l.createElement("rect",{x:50,y:50,width:10,height:10,fill:t[54]}),l.createElement("rect",{x:50,y:60,width:10,height:10,fill:t[55]}),l.createElement("rect",{x:50,y:70,width:10,height:10,fill:t[56]}),l.createElement("rect",{x:70,y:10,width:10,height:10,fill:t[57]}),l.createElement("rect",{x:70,y:20,width:10,height:10,fill:t[58]}),l.createElement("rect",{x:70,y:30,width:10,height:10,fill:t[59]}),l.createElement("rect",{x:70,y:40,width:10,height:10,fill:t[60]}),l.createElement("rect",{x:70,y:50,width:10,height:10,fill:t[61]}),l.createElement("rect",{x:70,y:60,width:10,height:10,fill:t[62]}),l.createElement("rect",{x:70,y:70,width:10,height:10,fill:t[63]})))};var d=e=>{const t=function(e,t){const r=i(e),l=t&&t.length,a=o(r,t,l),n=h(r,10,1),s=n<5?n+4:n,m=h(r,10,2),f=m<5?m+4:m;var d;return{wrapperColor:a,faceColor:(d=a,"#"===d.slice(0,1)&&(d=d.slice(1)),(299*parseInt(d.substr(0,2),16)+587*parseInt(d.substr(2,2),16)+114*parseInt(d.substr(4,2),16))/1e3>=128?"#000000":"#FFFFFF"),backgroundColor:o(r+13,t,l),wrapperTranslateX:s,wrapperTranslateY:f,wrapperRotate:h(r,360),wrapperScale:1+h(r,3)/10,isMouthOpen:c(r,2),isCircle:c(r,1),eyeSpread:h(r,5),mouthSpread:h(r,3),faceRotate:h(r,10,3),faceTranslateX:s>6?s/2:h(r,8,1),faceTranslateY:f>6?f/2:h(r,7,2)}}(e.name,e.colors),r=l.useId();return l.createElement("svg",{viewBox:"0 0 36 36",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size},e.title&&l.createElement("title",null,e.name),l.createElement("mask",{id:r,maskUnits:"userSpaceOnUse",x:0,y:0,width:36,height:36},l.createElement("rect",{width:36,height:36,rx:e.square?void 0:72,fill:"#FFFFFF"})),l.createElement("g",{mask:"url(#".concat(r,")")},l.createElement("rect",{width:36,height:36,fill:t.backgroundColor}),l.createElement("rect",{x:"0",y:"0",width:36,height:36,transform:"translate("+t.wrapperTranslateX+" "+t.wrapperTranslateY+") rotate("+t.wrapperRotate+" 18 18) scale("+t.wrapperScale+")",fill:t.wrapperColor,rx:t.isCircle?36:6}),l.createElement("g",{transform:"translate("+t.faceTranslateX+" "+t.faceTranslateY+") rotate("+t.faceRotate+" 18 18)"},t.isMouthOpen?l.createElement("path",{d:"M15 "+(19+t.mouthSpread)+"c2 1 4 1 6 0",stroke:t.faceColor,fill:"none",strokeLinecap:"round"}):l.createElement("path",{d:"M13,"+(19+t.mouthSpread)+" a1,0.75 0 0,0 10,0",fill:t.faceColor}),l.createElement("rect",{x:14-t.eyeSpread,y:14,width:1.5,height:2,rx:1,stroke:"none",fill:t.faceColor}),l.createElement("rect",{x:20+t.eyeSpread,y:14,width:1.5,height:2,rx:1,stroke:"none",fill:t.faceColor}))))};var g=e=>{const t=function(e,t){const r=i(e),l=t&&t.length;return Array.from({length:4},(e,a)=>o(r+a,t,l))}(e.name,e.colors),r=e.name.replace(/\s/g,""),a=l.useId();return l.createElement("svg",{viewBox:"0 0 80 80",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size},e.title&&l.createElement("title",null,e.name),l.createElement("mask",{id:a,maskUnits:"userSpaceOnUse",x:0,y:0,width:80,height:80},l.createElement("rect",{width:80,height:80,rx:e.square?void 0:160,fill:"#FFFFFF"})),l.createElement("g",{mask:"url(#".concat(a,")")},l.createElement("path",{fill:"url(#gradient_paint0_linear_"+r+")",d:"M0 0h80v40H0z"}),l.createElement("path",{fill:"url(#gradient_paint1_linear_"+r+")",d:"M0 40h80v40H0z"})),l.createElement("defs",null,l.createElement("linearGradient",{id:"gradient_paint0_linear_"+r,x1:40,y1:0,x2:40,y2:40,gradientUnits:"userSpaceOnUse"},l.createElement("stop",{stopColor:t[0]}),l.createElement("stop",{offset:1,stopColor:t[1]})),l.createElement("linearGradient",{id:"gradient_paint1_linear_"+r,x1:40,y1:40,x2:40,y2:80,gradientUnits:"userSpaceOnUse"},l.createElement("stop",{stopColor:t[2]}),l.createElement("stop",{offset:1,stopColor:t[3]}))))};var u=e=>{const t=function(e,t){const r=i(e),l=t&&t.length;return Array.from({length:3},(e,a)=>({color:o(r+a,t,l),translateX:h(r*(a+1),8,1),translateY:h(r*(a+1),8,2),scale:1.2+h(r*(a+1),4)/10,rotate:h(r*(a+1),360,1)}))}(e.name,e.colors),r=l.useId(),a=r;return l.createElement("svg",{viewBox:"0 0 80 80",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size},e.title&&l.createElement("title",null,e.name),l.createElement("mask",{id:r,maskUnits:"userSpaceOnUse",x:0,y:0,width:80,height:80},l.createElement("rect",{width:80,height:80,rx:e.square?void 0:160,fill:"#FFFFFF"})),l.createElement("g",{mask:"url(#".concat(r,")")},l.createElement("rect",{width:80,height:80,fill:t[0].color}),l.createElement("path",{filter:"url(#prefix__filter".concat(a,")"),d:"M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z",fill:t[1].color,transform:"translate("+t[1].translateX+" "+t[1].translateY+") rotate("+t[1].rotate+" 40 40) scale("+t[2].scale+")"}),l.createElement("path",{filter:"url(#prefix__filter".concat(a,")"),style:{mixBlendMode:"overlay"},d:"M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z",fill:t[2].color,transform:"translate("+t[2].translateX+" "+t[2].translateY+") rotate("+t[2].rotate+" 40 40) scale("+t[2].scale+")"})),l.createElement("defs",null,l.createElement("filter",{id:"prefix__filter".concat(a),filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},l.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),l.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),l.createElement("feGaussianBlur",{stdDeviation:7,result:"effect1_foregroundBlur"}))))};const E=["pixel","bauhaus","ring","beam","sunset","marble"],w={geometric:"beam",abstract:"bauhaus"};var x=({variant:e="marble",colors:t=["#92A1C6","#146A7C","#F0AB3D","#C271B4","#C20D90"],name:r="Clara Barton",square:l=!1,title:i=!1,size:n=40,...c})=>{const h={colors:t,name:r,title:i,size:n,square:l,...c};return{pixel:a.a.createElement(f,h),bauhaus:a.a.createElement(s,h),ring:a.a.createElement(m,h),beam:a.a.createElement(d,h),sunset:a.a.createElement(g,h),marble:a.a.createElement(u,h)}[Object.keys(w).includes(e)?w[e]:E.includes(e)?e:"marble"]};t.default=x}])}));