(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"74mu":function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return o}),e.d(n,"c",function(){return i}),e.d(n,"d",function(){return c});const i=(t,n)=>null!==n.closest(t),r=(t,n)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},n):n,o=t=>{const n={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>n[t]=!0),n},s=/^[a-z][a-z0-9+\-.]*:/,c=async(t,n,e,i)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const r=document.querySelector("ion-router");if(r)return null!=n&&n.preventDefault(),r.push(t,e,i)}return!1}},"7yca":function(t,n,e){"use strict";e.d(n,"a",function(){return a});var i=e("fXoL"),r=e("TEn/"),o=e("ofXK"),s=e("lR5k");function c(t,n){1&t&&(i.Mb(0,"div",6),i.Kb(1,"ion-spinner"),i.Lb())}let a=(()=>{class t{constructor(t){this.modalController=t,this.loading=!0}}return t.\u0275fac=function(n){return new(n||t)(i.Jb(r.y))},t.\u0275cmp=i.Db({type:t,selectors:[["app-help"]],inputs:{url:"url"},decls:10,vars:2,consts:[["translucent",""],["slot","primary"],[3,"click"],["fullscreen",""],["class","loader",4,"ngIf"],[3,"src","load"],[1,"loader"]],template:function(t,n){1&t&&(i.Mb(0,"ion-header",0),i.Mb(1,"ion-toolbar"),i.Mb(2,"ion-title"),i.hc(3,"Help"),i.Lb(),i.Mb(4,"ion-buttons",1),i.Mb(5,"ion-button",2),i.Ub("click",function(){return n.modalController.dismiss()}),i.hc(6,"Close"),i.Lb(),i.Lb(),i.Lb(),i.Lb(),i.Mb(7,"ion-content",3),i.gc(8,c,2,0,"div",4),i.Mb(9,"markdown",5),i.Ub("load",function(){return n.loading=!1}),i.Lb(),i.Lb()),2&t&&(i.zb(8),i.Zb("ngIf",n.loading),i.zb(1),i.Zb("src",n.url))},directives:[r.f,r.u,r.t,r.d,r.c,r.e,o.i,s.a,r.p],styles:["markdown[_ngcontent-%COMP%]{display:block;padding-left:1em;padding-right:1em}.loader[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;align-items:center;justify-content:center}"]}),t})()},A2gu:function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return o});var i=e("Ke8Y");const r=async(t,n,e,r,o)=>{if(t)return t.attachViewToDom(n,e,o,r);if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");const s="string"==typeof e?n.ownerDocument&&n.ownerDocument.createElement(e):e;return r&&r.forEach(t=>s.classList.add(t)),o&&Object.assign(s,o),n.appendChild(s),await new Promise(t=>Object(i.c)(s,t)),s},o=(t,n)=>{if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},h3R7:function(t,n,e){"use strict";e.d(n,"a",function(){return i});const i={bubbles:{dur:1e3,circles:9,fn:(t,n,e)=>{const i=t*n/e-t+"ms",r=2*Math.PI*n/e;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,n,e)=>{const i=n/e,r=t*i-t+"ms",o=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,n)=>({r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,n,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":t*n/e-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,n,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":t*n/e-t+"ms"}})}}},pX2f:function(t,n,e){"use strict";e.d(n,"a",function(){return s});var i=e("2atR"),r=e("iWo5"),o=e("qULd");const s=(t,n)=>{let e,s;const c=(t,i,r)=>{if("undefined"==typeof document)return;const o=document.elementFromPoint(t,i);o&&n(o)?o!==e&&(l(),a(o,r)):l()},a=(t,n)=>{e=t,s||(s=e);const r=e;Object(i.f)(()=>r.classList.add("ion-activated")),n()},l=(t=!1)=>{if(!e)return;const n=e;Object(i.f)(()=>n.classList.remove("ion-activated")),t&&s!==e&&e.click(),e=void 0};return Object(r.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>c(t.currentX,t.currentY,o.a),onMove:t=>c(t.currentX,t.currentY,o.b),onEnd:()=>{l(!0),Object(o.e)(),s=void 0}})}},qULd:function(t,n,e){"use strict";e.d(n,"a",function(){return o}),e.d(n,"b",function(){return s}),e.d(n,"c",function(){return r}),e.d(n,"d",function(){return a}),e.d(n,"e",function(){return c});const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const n=this.getEngine();if(!n)return;const e=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:e})},notification(t){const n=this.getEngine();if(!n)return;const e=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:e})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},r=()=>{i.selection()},o=()=>{i.selectionStart()},s=()=>{i.selectionChanged()},c=()=>{i.selectionEnd()},a=t=>{i.impact(t)}},vy64:function(t,n,e){"use strict";e.d(n,"a",function(){return c});var i=e("ofXK"),r=e("TEn/"),o=e("lR5k"),s=e("fXoL");let c=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({imports:[[i.b,o.b.forChild(),r.v]]}),t})()}}]);