(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"6aA7":function(t,e,n){"use strict";n.r(e),n.d(e,"EmulationPageModule",function(){return f});var i=n("SVse"),s=n("iInd"),o=n("mrSG");const a=3*devicePixelRatio;class c{constructor(t){this.canvas=t;const e=t.getContext("2d");if(!e)throw new Error("get a new browser");this.ctx=e}clear(){this.fillRect(0,0,160,250,"#d2d2d2"),this.drawSilkscreen(),this.drawButtons()}drawSilkscreen(){return Object(o.a)(this,void 0,void 0,function*(){const t=new Image;yield new Promise((e,n)=>{t.onload=()=>e(),t.onerror=()=>n(),t.src="assets/silkscreen.png"}),this.fillRect(0,160,160,60,"#bbb"),this.ctx.imageSmoothingEnabled=!0,this.ctx.imageSmoothingQuality="high",this.ctx.drawImage(t,0,160*a,160*a,60*a)})}drawButtons(t=[]){this.fillRect(0,220,160,30,"#d2d2d2"),t.includes(0)&&this.fillRect(0,220,30,30,"#777"),t.includes(1)&&this.fillRect(30,220,30,30,"#777"),t.includes(2)&&this.fillRect(100,220,30,30,"#777"),t.includes(3)&&this.fillRect(130,220,30,30,"#777"),t.includes(4)&&this.fillRect(60,220,40,15,"#777"),t.includes(5)&&this.fillRect(60,235,40,15,"#777"),this.ctx.beginPath(),this.ctx.lineWidth=Math.round(.5*a),this.ctx.strokeStyle="black",[[0,220,160,220],[30,220,30,250],[60,220,60,250],[130,220,130,250],[100,220,100,250],[60,235,100,235]].forEach(([t,e,n,i])=>{this.ctx.moveTo(a*t,a*e),this.ctx.lineTo(a*n,a*i)}),this.ctx.stroke(),this.ctx.font=10*a+"px sans",this.ctx.fillStyle="black",this.textCenteredAt(15*a,235*a,"D"),this.textCenteredAt(45*a,235*a,"P"),this.textCenteredAt(115*a,235*a,"T"),this.textCenteredAt(145*a,235*a,"N")}drawEmulationCanvas(t){this.ctx.imageSmoothingEnabled=!1,this.ctx.drawImage(t,0,0,160*a,160*a)}fillRect(t,e,n,i,s){this.ctx.beginPath(),this.ctx.rect(a*t,a*e,a*n,a*i),this.ctx.fillStyle=s,this.ctx.fill()}textCenteredAt(t,e,n){const i=this.ctx.measureText(n);this.ctx.textBaseline="middle",this.ctx.fillText(n,t-i.width/2,e)}}class h{constructor(t,e,n){this.canvas=t,this.emulationService=e,this.canvasHelper=n,this.handleMouseDown=t=>{if(0!==t.button)return;const e=this.eventToPalmCoordinates(t);if(!e)return;const n=this.determineArea(e);if(0===n)this.interactionMouse={area:n},this.emulationService.handlePointerMove(...e);else{const t=this.determineButton(e);this.interactionMouse={area:n,button:t},this.emulationService.handleButtonDown(t),this.canvasHelper.drawButtons(this.activeButtons())}},this.handleMouseMove=t=>{var e;if(!(1&t.buttons)||0!==(null===(e=this.interactionMouse)||void 0===e?void 0:e.area))return;const n=this.eventToPalmCoordinates(t);n&&this.emulationService.handlePointerMove(...n)},this.handeMouseUp=t=>{if(0!==t.button)return;const e=this.interactionMouse;switch(this.interactionMouse=void 0,null==e?void 0:e.area){case 1:this.emulationService.handleButtonUp(e.button),this.canvasHelper.drawButtons(this.activeButtons());break;case 0:this.emulationService.handlePointerUp()}},this.handleTouchStart=t=>{for(let e=0;e<t.changedTouches.length;e++){const n=t.changedTouches.item(e);if(!n)continue;const i=this.eventToPalmCoordinates(n);if(!i)continue;const s=this.determineArea(i);if(0===s)this.interactionsTouch.set(n.identifier,{area:s}),this.emulationService.handlePointerMove(...i);else{const t=this.determineButton(i);this.interactionsTouch.set(n.identifier,{area:s,button:t}),this.emulationService.handleButtonDown(t),this.canvasHelper.drawButtons(this.activeButtons())}}t.preventDefault()},this.handleTouchMove=t=>{var e;for(let n=0;n<t.changedTouches.length;n++){const i=t.changedTouches.item(n);if(i&&0===(null===(e=this.interactionsTouch.get(i.identifier))||void 0===e?void 0:e.area)){const t=this.eventToPalmCoordinates(i);if(!t)continue;this.emulationService.handlePointerMove(...t)}}t.preventDefault()},this.handleTouchEnd=t=>{for(let e=0;e<t.changedTouches.length;e++){const n=t.changedTouches.item(e);if(!n)continue;const i=this.interactionsTouch.get(n.identifier);switch(this.interactionsTouch.delete(n.identifier),null==i?void 0:i.area){case 1:this.emulationService.handleButtonUp(i.button),this.canvasHelper.drawButtons(this.activeButtons());break;case 0:this.emulationService.handlePointerUp()}}t.preventDefault()},this.interactionsTouch=new Map}bind(){this.canvas.addEventListener("mousedown",this.handleMouseDown),this.canvas.addEventListener("mouseup",this.handeMouseUp),this.canvas.addEventListener("mousemove",this.handleMouseMove),this.canvas.addEventListener("touchstart",this.handleTouchStart),this.canvas.addEventListener("touchmove",this.handleTouchMove),this.canvas.addEventListener("touchend",this.handleTouchEnd),this.canvas.addEventListener("touchcancel",this.handleTouchEnd)}release(){this.canvas.removeEventListener("mousedown",this.handleMouseDown),this.canvas.removeEventListener("mouseup",this.handeMouseUp),this.canvas.removeEventListener("mousemove",this.handleMouseMove),this.canvas.removeEventListener("touchstart",this.handleTouchStart),this.canvas.removeEventListener("touchmove",this.handleTouchMove),this.canvas.removeEventListener("touchend",this.handleTouchEnd),this.canvas.removeEventListener("touchcancel",this.handleTouchEnd)}eventToPalmCoordinates(t){const e=this.canvas.getBoundingClientRect();let n,i,s,o;e.width/e.height>.64?(o=e.height,s=.64*e.height,i=e.top,n=e.left+(e.width-s)/2):(s=e.width,o=1.5625*e.width,n=e.left,i=e.top+(e.height-o)/2);const a=Math.floor((t.clientX-n)/s*160),c=Math.floor((t.clientY-i)/o*250);if(!(a<0||a>=160||c<0||c>=250))return[a,c]}determineArea([,t]){return t>=220?1:0}determineButton([t,e]){return t>=130?3:t>=100?2:t>=60?e>=235?5:4:t>=30?1:0}activeButtons(){var t;const e=Array.from(this.interactionsTouch.values()).filter(t=>1===t.area).map(t=>t.button);return 1===(null===(t=this.interactionMouse)||void 0===t?void 0:t.area)&&e.push(this.interactionMouse.button),e}}var r=n("8Y7J"),u=n("bucj"),l=n("sZkV");const d=["canvas"],v=[{path:"",component:(()=>{class t{constructor(t,e){this.emulationService=t,this.ngZone=e,this.onNewFrame=t=>{this.canvasHelper.drawEmulationCanvas(t)}}ngOnDestroy(){this.eventHandler&&this.eventHandler.release()}ngAfterViewInit(){const t=this.canvasRef.nativeElement;this.canvasHelper=new c(t),this.eventHandler=new h(t,this.emulationService,this.canvasHelper),this.canvasHelper.clear(),this.ngZone.runOutsideAngular(()=>this.eventHandler.bind())}get canvasWidth(){return 160*a}get canvasHeight(){return 250*a}powerButtonDown(){return Object(o.a)(this,void 0,void 0,function*(){this.emulationService.handleButtonDown(6)})}powerButtonUp(){return Object(o.a)(this,void 0,void 0,function*(){this.emulationService.handleButtonUp(6)})}ionViewDidEnter(){this.emulationService.newFrame.addHandler(this.onNewFrame),this.emulationService.resume()}ionViewWillLeave(){this.emulationService.pause(),this.emulationService.newFrame.removeHandler(this.onNewFrame)}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(u.a),r.Jb(r.B))},t.\u0275cmp=r.Db({type:t,selectors:[["app-emulation"]],viewQuery:function(t,e){if(1&t&&r.jc(d,1),2&t){let t;r.ac(t=r.Vb())&&(e.canvasRef=t.first)}},decls:18,vars:2,consts:[["slot","end"],[3,"mousedown","mouseup"],["name","power-outline"],["name","add-outline"],["slot","start"],["name","ellipsis-vertical-outline"],["name","checkmark-circle-outline"],[1,"container"],[3,"width","height"],["canvas",""]],template:function(t,e){1&t&&(r.Mb(0,"ion-header"),r.Mb(1,"ion-toolbar"),r.Mb(2,"ion-title"),r.fc(3,"Emulator"),r.Lb(),r.Mb(4,"ion-buttons",0),r.Mb(5,"ion-button",1),r.Ub("mousedown",function(){return e.powerButtonDown()})("mouseup",function(){return e.powerButtonUp()}),r.Kb(6,"ion-icon",2),r.Lb(),r.Mb(7,"ion-button"),r.Kb(8,"ion-icon",3),r.Lb(),r.Lb(),r.Mb(9,"ion-buttons",4),r.Mb(10,"ion-button"),r.Kb(11,"ion-icon",5),r.Lb(),r.Mb(12,"ion-button"),r.Kb(13,"ion-icon",6),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(14,"ion-content"),r.Mb(15,"div",7),r.Kb(16,"canvas",8,9),r.Lb(),r.Lb()),2&t&&(r.zb(16),r.Zb("width",e.canvasWidth)("height",e.canvasHeight))},directives:[l.f,l.s,l.r,l.d,l.c,l.g,l.e],styles:["ion-title[_ngcontent-%COMP%]{text-align:center}.container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;padding:5px;background:#000}canvas[_ngcontent-%COMP%]{max-width:100%;max-height:100%;height:750px;width:480px;-o-object-fit:contain;object-fit:contain}"]}),t})()}];let m=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(e){return new(e||t)},imports:[[s.i.forChild(v)],s.i]}),t})();var b=n("s7LF");let f=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(e){return new(e||t)},imports:[[i.b,b.a,l.t,m]]}),t})()}}]);