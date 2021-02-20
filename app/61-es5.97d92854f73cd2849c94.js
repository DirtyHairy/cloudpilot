!function(){function e(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],i=!0,o=!1,a=void 0;try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done)&&(n.push(r.value),!t||n.length!==t);i=!0);}catch(c){o=!0,a=c}finally{try{i||null==s.return||s.return()}finally{if(o)throw a}}return n}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"6aA7":function(n,i,a){"use strict";a.r(i),a.d(i,"EmulationPageModule",function(){return S});var s,c,u,h=a("SVse"),l=a("iInd"),d=a("mrSG"),v=3*devicePixelRatio,f=function(){function e(t){o(this,e),this.canvas=t;var n=t.getContext("2d");if(!n)throw new Error("get a new browser");this.ctx=n}return r(e,[{key:"clear",value:function(){this.fillRect(0,0,160,250,"#d2d2d2"),this.drawSilkscreen(),this.drawButtons()}},{key:"drawSilkscreen",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Image,e.next=3,new Promise(function(e,n){t.onload=function(){return e()},t.onerror=function(){return n()},t.src="assets/silkscreen.png"});case 3:this.fillRect(0,160,160,60,"#bbb"),this.ctx.imageSmoothingEnabled=!0,this.ctx.imageSmoothingQuality="high",this.ctx.drawImage(t,0,160*v,160*v,60*v);case 7:case"end":return e.stop()}},e,this)}))}},{key:"drawButtons",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.fillRect(0,220,160,30,"#d2d2d2"),n.includes(0)&&this.fillRect(0,220,30,30,"#777"),n.includes(1)&&this.fillRect(30,220,30,30,"#777"),n.includes(2)&&this.fillRect(100,220,30,30,"#777"),n.includes(3)&&this.fillRect(130,220,30,30,"#777"),n.includes(4)&&this.fillRect(60,220,40,15,"#777"),n.includes(5)&&this.fillRect(60,235,40,15,"#777"),this.ctx.beginPath(),this.ctx.lineWidth=Math.round(.5*v),this.ctx.strokeStyle="black",[[0,220,160,220],[30,220,30,250],[60,220,60,250],[130,220,130,250],[100,220,100,250],[60,235,100,235]].forEach(function(n){var i=t(n,4),o=i[0],a=i[1],r=i[2],s=i[3];e.ctx.moveTo(v*o,v*a),e.ctx.lineTo(v*r,v*s)}),this.ctx.stroke(),this.ctx.font=10*v+"px sans",this.ctx.fillStyle="black",this.textCenteredAt(15*v,235*v,"D"),this.textCenteredAt(45*v,235*v,"P"),this.textCenteredAt(115*v,235*v,"T"),this.textCenteredAt(145*v,235*v,"N")}},{key:"drawEmulationCanvas",value:function(e){this.ctx.imageSmoothingEnabled=!1,this.ctx.drawImage(e,0,0,160*v,160*v)}},{key:"fillRect",value:function(e,t,n,i,o){this.ctx.beginPath(),this.ctx.rect(v*e,v*t,v*n,v*i),this.ctx.fillStyle=o,this.ctx.fill()}},{key:"textCenteredAt",value:function(e,t,n){var i=this.ctx.measureText(n);this.ctx.textBaseline="middle",this.ctx.fillText(n,e-i.width/2,t)}}]),e}(),m=function(){function n(t,i,a){var r=this;o(this,n),this.canvas=t,this.emulationService=i,this.canvasHelper=a,this.handleMouseDown=function(t){var n;if(0===t.button){var i=r.eventToPalmCoordinates(t);if(i){var o=r.determineArea(i);if(0===o)r.interactionMouse={area:o},(n=r.emulationService).handlePointerMove.apply(n,e(i));else{var a=r.determineButton(i);r.interactionMouse={area:o,button:a},r.emulationService.handleButtonDown(a),r.canvasHelper.drawButtons(r.activeButtons())}}}},this.handleMouseMove=function(t){var n,i;if(1&t.buttons&&0===(null===(i=r.interactionMouse)||void 0===i?void 0:i.area)){var o=r.eventToPalmCoordinates(t,!0);o&&(n=r.emulationService).handlePointerMove.apply(n,e(o))}},this.handeMouseUp=function(e){if(0===e.button){var t=r.interactionMouse;switch(r.interactionMouse=void 0,null==t?void 0:t.area){case 1:r.emulationService.handleButtonUp(t.button),r.canvasHelper.drawButtons(r.activeButtons());break;case 0:r.emulationService.handlePointerUp()}}},this.handleTouchStart=function(t){for(var n=0;n<t.changedTouches.length;n++){var i,o=t.changedTouches.item(n);if(o){var a=r.eventToPalmCoordinates(o);if(a){var s=r.determineArea(a);if(0===s)r.interactionsTouch.set(o.identifier,{area:s}),(i=r.emulationService).handlePointerMove.apply(i,e(a));else{var c=r.determineButton(a);r.interactionsTouch.set(o.identifier,{area:s,button:c}),r.emulationService.handleButtonDown(c),r.canvasHelper.drawButtons(r.activeButtons())}}}}!1!==t.cancelable&&t.preventDefault()},this.handleTouchMove=function(t){for(var n,i=0;i<t.changedTouches.length;i++){var o=t.changedTouches.item(i);if(o&&0===(null===(n=r.interactionsTouch.get(o.identifier))||void 0===n?void 0:n.area)){var a,s=r.eventToPalmCoordinates(o,!0);if(!s)continue;(a=r.emulationService).handlePointerMove.apply(a,e(s))}}!1!==t.cancelable&&t.preventDefault()},this.handleTouchEnd=function(e){for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches.item(t);if(n){var i=r.interactionsTouch.get(n.identifier);switch(r.interactionsTouch.delete(n.identifier),null==i?void 0:i.area){case 1:r.emulationService.handleButtonUp(i.button),r.canvasHelper.drawButtons(r.activeButtons());break;case 0:r.emulationService.handlePointerUp()}}}!1!==e.cancelable&&e.preventDefault()},this.interactionsTouch=new Map,this.bound=!1}return r(n,[{key:"bind",value:function(){this.bound||(this.canvas.addEventListener("mousedown",this.handleMouseDown),this.canvas.addEventListener("mouseup",this.handeMouseUp),window.addEventListener("mousemove",this.handleMouseMove),this.canvas.addEventListener("touchstart",this.handleTouchStart),this.canvas.addEventListener("touchmove",this.handleTouchMove),this.canvas.addEventListener("touchend",this.handleTouchEnd),this.canvas.addEventListener("touchcancel",this.handleTouchEnd),this.bound=!0)}},{key:"release",value:function(){this.bound&&(this.canvas.removeEventListener("mousedown",this.handleMouseDown),this.canvas.removeEventListener("mouseup",this.handeMouseUp),window.removeEventListener("mousemove",this.handleMouseMove),this.canvas.removeEventListener("touchstart",this.handleTouchStart),this.canvas.removeEventListener("touchmove",this.handleTouchMove),this.canvas.removeEventListener("touchend",this.handleTouchEnd),this.canvas.removeEventListener("touchcancel",this.handleTouchEnd),this.bound=!1)}},{key:"eventToPalmCoordinates",value:function(e){var t,n,i,o,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.canvas.getBoundingClientRect();r.width/r.height>.64?(o=r.height,i=.64*r.height,n=r.top,t=r.left+(r.width-i)/2):(i=r.width,o=1.5625*r.width,t=r.left,n=r.top+(r.height-o)/2);var s=Math.floor((e.clientX-t)/i*160),c=Math.floor((e.clientY-n)/o*250);if(a)s<0&&(s=0),s>159&&(s=159),c<0&&(c=0),c>249&&(c=249);else if(s<0||s>=160||c<0||c>=250)return;return[s,c]}},{key:"determineArea",value:function(e){return t(e,2)[1]>=220?1:0}},{key:"determineButton",value:function(e){var n=t(e,2),i=n[0],o=n[1];return i>=130?3:i>=100?2:i>=60?o>=235?5:4:i>=30?1:0}},{key:"activeButtons",value:function(){var e,t=Array.from(this.interactionsTouch.values()).filter(function(e){return 1===e.area}).map(function(e){return e.button});return 1===(null===(e=this.interactionMouse)||void 0===e?void 0:e.area)&&t.push(this.interactionMouse.button),t}}]),n}(),b=a("8Y7J"),p=a("bucj"),w=a("sZkV"),g=["canvas"],y=[{path:"",component:(s=function(){function e(t,n){var i=this;o(this,e),this.emulationService=t,this.ngZone=n,this.onNewFrame=function(e){i.canvasHelper.drawEmulationCanvas(e)}}return r(e,[{key:"ngAfterViewInit",value:function(){var e=this.canvasRef.nativeElement;this.canvasHelper=new f(e),this.eventHandler=new m(e,this.emulationService,this.canvasHelper),this.canvasHelper.clear()}},{key:"canvasWidth",get:function(){return 160*v}},{key:"canvasHeight",get:function(){return 250*v}},{key:"powerButtonDown",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.emulationService.handleButtonDown(6);case 1:case"end":return e.stop()}},e,this)}))}},{key:"powerButtonUp",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.emulationService.handleButtonUp(6);case 1:case"end":return e.stop()}},e,this)}))}},{key:"ionViewDidEnter",value:function(){var e=this;this.emulationService.newFrame.addHandler(this.onNewFrame),this.emulationService.resume(),this.ngZone.runOutsideAngular(function(){return e.eventHandler.bind()})}},{key:"ionViewWillLeave",value:function(){this.emulationService.pause(),this.emulationService.newFrame.removeHandler(this.onNewFrame),this.eventHandler.release()}}]),e}(),s.\u0275fac=function(e){return new(e||s)(b.Jb(p.a),b.Jb(b.B))},s.\u0275cmp=b.Db({type:s,selectors:[["app-emulation"]],viewQuery:function(e,t){var n;1&e&&b.jc(g,1),2&e&&b.ac(n=b.Vb())&&(t.canvasRef=n.first)},decls:18,vars:2,consts:[["slot","end"],[3,"mousedown","mouseup"],["name","power-outline"],["name","add-outline"],["slot","start"],["name","ellipsis-vertical-outline"],["name","checkmark-circle-outline"],[1,"container"],[3,"width","height"],["canvas",""]],template:function(e,t){1&e&&(b.Mb(0,"ion-header"),b.Mb(1,"ion-toolbar"),b.Mb(2,"ion-title"),b.fc(3,"Emulator"),b.Lb(),b.Mb(4,"ion-buttons",0),b.Mb(5,"ion-button",1),b.Ub("mousedown",function(){return t.powerButtonDown()})("mouseup",function(){return t.powerButtonUp()}),b.Kb(6,"ion-icon",2),b.Lb(),b.Mb(7,"ion-button"),b.Kb(8,"ion-icon",3),b.Lb(),b.Lb(),b.Mb(9,"ion-buttons",4),b.Mb(10,"ion-button"),b.Kb(11,"ion-icon",5),b.Lb(),b.Mb(12,"ion-button"),b.Kb(13,"ion-icon",6),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Mb(14,"ion-content"),b.Mb(15,"div",7),b.Kb(16,"canvas",8,9),b.Lb(),b.Lb()),2&e&&(b.zb(16),b.Zb("width",t.canvasWidth)("height",t.canvasHeight))},directives:[w.f,w.s,w.r,w.d,w.c,w.g,w.e],styles:["ion-title[_ngcontent-%COMP%]{text-align:center}.container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;padding:5px;background:#000}canvas[_ngcontent-%COMP%]{max-width:100%;max-height:100%;height:750px;width:480px;-o-object-fit:contain;object-fit:contain}"]}),s)}],M=((c=function e(){o(this,e)}).\u0275mod=b.Hb({type:c}),c.\u0275inj=b.Gb({factory:function(e){return new(e||c)},imports:[[l.i.forChild(y)],l.i]}),c),x=a("s7LF"),S=((u=function e(){o(this,e)}).\u0275mod=b.Hb({type:u}),u.\u0275inj=b.Gb({factory:function(e){return new(e||u)},imports:[[h.b,x.a,w.t,M]]}),u)}}])}();