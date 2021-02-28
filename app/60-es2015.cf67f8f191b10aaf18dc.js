(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"6aA7":function(e,t,i){"use strict";i.r(t),i.d(t,"EmulationPageModule",function(){return I});var n=i("SVse"),s=i("iInd"),o=i("mrSG"),a=i("z9fa"),r=i("bucj");const c=r.b[2],l=r.b[0],h=r.b[6],u=3*devicePixelRatio,d=Math.round(1*u),v=160*u+2*d,b=252*u+2*d;function m(e){return new Promise((t,i)=>{const n=new Image;n.onload=()=>t(n),n.onerror=()=>i(),n.src=e})}const f=m("assets/silkscreen-default.svg"),g=m("assets/silkscreen-m515.svg");class p{constructor(e){this.canvas=e;const t=e.getContext("2d");if(!t)throw new Error("get a new browser");this.ctx=t}clear(e){return Object(o.a)(this,void 0,void 0,function*(){this.session=e,this.fillCanvasRect(0,0,v,b,this.backgroundColor()),yield this.drawSilkscreen(),this.drawButtons()})}drawSilkscreen(){return Object(o.a)(this,void 0,void 0,function*(){const e=yield this.silkscreenImage();this.fillRect(0,161,160,60,c),this.ctx.imageSmoothingEnabled=!0,this.ctx.imageSmoothingQuality="high",this.ctx.drawImage(e,d,d+161*u,160*u,60*u)})}drawButtons(e=[]){this.fillRect(0,222,160,30,this.backgroundColor()),e.includes(0)&&this.fillRect(0,222,30,30,h),e.includes(1)&&this.fillRect(30,222,30,30,h),e.includes(2)&&this.fillRect(100,222,30,30,h),e.includes(3)&&this.fillRect(130,222,30,30,h),e.includes(4)&&this.fillRect(60,222,40,15,h),e.includes(5)&&this.fillRect(60,237,40,15,h),this.ctx.beginPath(),this.ctx.lineWidth=Math.round(.5*u),this.ctx.strokeStyle=h,[[30,222,30,252],[60,222,60,252],[130,222,130,252],[100,222,100,252],[60,237,100,237]].forEach(([e,t,i,n])=>{this.ctx.moveTo(d+u*e,d+u*t),this.ctx.lineTo(d+u*i,d+u*n)}),this.ctx.stroke(),this.ctx.font=10*u+"px sans",this.ctx.fillStyle="black",this.textCenteredAt(15,237,"D"),this.textCenteredAt(45,237,"P"),this.textCenteredAt(115,237,"T"),this.textCenteredAt(145,237,"N")}drawEmulationCanvas(e){this.ctx.imageSmoothingEnabled=!1,this.ctx.drawImage(e,d,d,160*u,160*u)}fillRect(e,t,i,n,s){this.ctx.beginPath(),this.ctx.rect(d+u*e,d+u*t,u*i,u*n),this.ctx.fillStyle=s,this.ctx.fill()}fillCanvasRect(e,t,i,n,s){this.ctx.beginPath(),this.ctx.rect(e,t,i,n),this.ctx.fillStyle=s,this.ctx.fill()}textCenteredAt(e,t,i){const n=this.ctx.measureText(i);this.ctx.textBaseline="middle",this.ctx.fillText(i,d+u*e-n.width/2,d+u*t)}silkscreenImage(){var e;switch(null===(e=this.session)||void 0===e?void 0:e.device){case a.a.m515:return g;default:return f}}backgroundColor(){var e;switch(null===(e=this.session)||void 0===e?void 0:e.device){case a.a.m515:return"white";default:return l}}}var w=i("oOyw"),S=i("8Y7J"),M=i("sZkV");let x=(()=>{class e{constructor(e){this.emulationService=e,this.onClick=()=>{}}ngOnInit(){}reset(){this.emulationService.reset(),this.onClick()}resetNoExtensions(){this.emulationService.resetNoExtensions(),this.onClick()}resetHard(){this.emulationService.resetHard(),this.onClick()}}return e.\u0275fac=function(t){return new(t||e)(S.Jb(r.a))},e.\u0275cmp=S.Db({type:e,selectors:[["app-emulation-context-menu"]],inputs:{onClick:"onClick"},decls:7,vars:6,consts:[["button","",3,"detail","disabled","click"]],template:function(e,t){1&e&&(S.Mb(0,"ion-list"),S.Mb(1,"ion-item",0),S.Ub("click",function(){return t.reset()}),S.gc(2," Reset "),S.Lb(),S.Mb(3,"ion-item",0),S.Ub("click",function(){return t.resetNoExtensions()}),S.gc(4," Reset (no extensions) "),S.Lb(),S.Mb(5,"ion-item",0),S.Ub("click",function(){return t.resetHard()}),S.gc(6," Hard reset "),S.Lb(),S.Lb()),2&e&&(S.zb(1),S.Zb("detail",!1)("disabled",!t.emulationService.isRunning()),S.zb(2),S.Zb("detail",!1)("disabled",!t.emulationService.isRunning()),S.zb(2),S.Zb("detail",!1)("disabled",!t.emulationService.isRunning()))},directives:[M.m,M.h],styles:[""]}),e})();class C{constructor(e,t,i){this.canvas=e,this.emulationService=t,this.canvasHelper=i,this.handleMouseDown=e=>{if(0!==e.button)return;const t=this.eventToPalmCoordinates(e);if(!t)return;const i=this.determineArea(t);if(0===i)this.interactionMouse={area:i},this.emulationService.handlePointerMove(...t);else{const e=this.determineButton(t);this.interactionMouse={area:i,button:e},this.emulationService.handleButtonDown(e),this.canvasHelper.drawButtons(this.activeButtons())}},this.handleMouseMove=e=>{var t;if(!(1&e.buttons)||0!==(null===(t=this.interactionMouse)||void 0===t?void 0:t.area))return;const i=this.eventToPalmCoordinates(e,!0);i&&this.emulationService.handlePointerMove(...i)},this.handeMouseUp=e=>{if(0!==e.button)return;const t=this.interactionMouse;switch(this.interactionMouse=void 0,null==t?void 0:t.area){case 1:this.emulationService.handleButtonUp(t.button),this.canvasHelper.drawButtons(this.activeButtons());break;case 0:this.emulationService.handlePointerUp()}},this.handleTouchStart=e=>{for(let t=0;t<e.changedTouches.length;t++){const i=e.changedTouches.item(t);if(!i)continue;const n=this.eventToPalmCoordinates(i);if(!n)continue;const s=this.determineArea(n);if(0===s)this.interactionsTouch.set(i.identifier,{area:s}),this.emulationService.handlePointerMove(...n);else{const e=this.determineButton(n);this.interactionsTouch.set(i.identifier,{area:s,button:e}),this.emulationService.handleButtonDown(e),this.canvasHelper.drawButtons(this.activeButtons())}}!1!==e.cancelable&&e.preventDefault()},this.handleTouchMove=e=>{var t;for(let i=0;i<e.changedTouches.length;i++){const n=e.changedTouches.item(i);if(n&&0===(null===(t=this.interactionsTouch.get(n.identifier))||void 0===t?void 0:t.area)){const e=this.eventToPalmCoordinates(n,!0);if(!e)continue;this.emulationService.handlePointerMove(...e)}}!1!==e.cancelable&&e.preventDefault()},this.handleTouchEnd=e=>{for(let t=0;t<e.changedTouches.length;t++){const i=e.changedTouches.item(t);if(!i)continue;const n=this.interactionsTouch.get(i.identifier);switch(this.interactionsTouch.delete(i.identifier),null==n?void 0:n.area){case 1:this.emulationService.handleButtonUp(n.button),this.canvasHelper.drawButtons(this.activeButtons());break;case 0:this.emulationService.handlePointerUp()}}!1!==e.cancelable&&e.preventDefault()},this.interactionsTouch=new Map,this.bound=!1}bind(){this.bound||(this.canvas.addEventListener("mousedown",this.handleMouseDown),window.addEventListener("mouseup",this.handeMouseUp),window.addEventListener("mousemove",this.handleMouseMove),this.canvas.addEventListener("touchstart",this.handleTouchStart),this.canvas.addEventListener("touchmove",this.handleTouchMove),this.canvas.addEventListener("touchend",this.handleTouchEnd),this.canvas.addEventListener("touchcancel",this.handleTouchEnd),this.bound=!0)}release(){this.bound&&(this.canvas.removeEventListener("mousedown",this.handleMouseDown),this.canvas.removeEventListener("mouseup",this.handeMouseUp),window.removeEventListener("mousemove",this.handleMouseMove),this.canvas.removeEventListener("touchstart",this.handleTouchStart),this.canvas.removeEventListener("touchmove",this.handleTouchMove),this.canvas.removeEventListener("touchend",this.handleTouchEnd),this.canvas.removeEventListener("touchcancel",this.handleTouchEnd),this.bound=!1)}eventToPalmCoordinates(e,t=!1){const i=this.canvas.getBoundingClientRect();let n,s,o,a;i.width/i.height>v/b?(a=i.height,o=v/b*i.height,s=i.top,n=i.left+(i.width-o)/2):(o=i.width,a=b/v*i.width,n=i.left,s=i.top+(i.height-a)/2);let r=Math.floor((e.clientX-n)/o*v/u)-d/u,c=Math.floor((e.clientY-s)/a*b/u)-d/u;if(c>=222?c-=2:c>=161&&(c-=1),t)r<0&&(r=0),r>159&&(r=159),c<0&&(c=0),c>249&&(c=249);else if(r<0||r>=160||c<0||c>=250)return;return[r,c]}determineArea([,e]){return e>=220?1:0}determineButton([e,t]){return e>=130?3:e>=100?2:e>=60?t>=236?5:4:e>=30?1:0}activeButtons(){var e;const t=Array.from(this.interactionsTouch.values()).filter(e=>1===e.area).map(e=>e.button);return 1===(null===(e=this.interactionMouse)||void 0===e?void 0:e.area)&&t.push(this.interactionMouse.button),t}}var k=i("Ld/c"),L=i("xOb2"),T=i("hq03"),E=i("shLW");const y=["canvas"];function B(e,t){1&e&&(S.Mb(0,"div",12),S.Mb(1,"div"),S.gc(2,"No session selected"),S.Lb(),S.Lb())}const P=[{path:"",component:(()=>{class e{constructor(e,t,i,n,s,o,a,r){this.emulationService=e,this.emulationState=t,this.storageService=i,this.popoverController=n,this.alertService=s,this.fileService=o,this.loadingController=a,this.ngZone=r,this.onNewFrame=e=>{this.canvasHelper.drawEmulationCanvas(e)}}ngAfterViewInit(){const e=this.canvasRef.nativeElement;this.canvasHelper=new p(e),this.eventHandler=new C(e,this.emulationService,this.canvasHelper)}get canvasWidth(){return v}get canvasHeight(){return b}get cssWidth(){return this.canvasWidth/devicePixelRatio+"px"}get cssHeight(){return this.canvasHeight/devicePixelRatio+"px"}powerButtonDown(){return Object(o.a)(this,void 0,void 0,function*(){this.emulationService.handleButtonDown(6)})}powerButtonUp(){return Object(o.a)(this,void 0,void 0,function*(){this.emulationService.handleButtonUp(6)})}ionViewDidEnter(){return Object(o.a)(this,void 0,void 0,function*(){let e=this.emulationState.getCurrentSession();const t=Object(w.b)();e||void 0===t||(e=yield this.storageService.getSession(t)),yield this.canvasHelper.clear(e),this.onNewFrame(this.emulationService.getCanvas()),this.emulationService.newFrame.addHandler(this.onNewFrame),this.emulationService.resume(),this.ngZone.runOutsideAngular(()=>this.eventHandler.bind())})}ionViewWillLeave(){this.emulationService.pause(),this.emulationService.newFrame.removeHandler(this.onNewFrame),this.eventHandler.release()}openContextMenu(e){return Object(o.a)(this,void 0,void 0,function*(){const t=yield this.popoverController.create({component:x,event:e,backdropDismiss:!0,showBackdrop:!1,componentProps:{onClick:()=>t.dismiss()}});t.present()})}installFiles(){this.fileService.openFiles(this.processFilesForInstallation.bind(this))}get installFileDisabled(){return!this.emulationService.isRunning()||this.emulationService.isPowerOff()||!this.emulationService.isUiInitialized()}get title(){var e;return(null===(e=this.emulationState.getCurrentSession())||void 0===e?void 0:e.name)||"Emulation"}processFilesForInstallation(e){return Object(o.a)(this,void 0,void 0,function*(){const t=yield this.loadingController.create({message:"Installing..."});yield t.present();const i=[],n=[];try{for(const t of e)/\.(prc|pdb)$/i.test(t.name)&&0==(yield this.emulationService.installFile(t.content))?i.push(t.name):n.push(t.name)}finally{t.dismiss()}let s,o;switch(i.length){case 0:s="";break;case 1:s=`Installation of ${i[0]} successful.`;break;default:s=`Installation of ${i.length} files successful.`}switch(n.length>0&&(s+="<br/><br/>"),n.length){case 0:break;case 1:s+=`Installation of ${n[0]} failed.`;break;default:s+=`Installation of ${n.slice(0,n.length>3?3:n.length-1).join(", ")} and ${n.length>3?n.length-3+" more files":n[n.length-1]} failed.`}o=0===n.length?"Installation successful":0===i.length?"Installation failed":"Installation errors",this.alertService.message(o,s)})}}return e.\u0275fac=function(t){return new(t||e)(S.Jb(r.a),S.Jb(k.a),S.Jb(L.b),S.Jb(M.w),S.Jb(T.a),S.Jb(E.a),S.Jb(M.v),S.Jb(S.B))},e.\u0275cmp=S.Db({type:e,selectors:[["app-emulation"]],viewQuery:function(e,t){if(1&e&&S.kc(y,1),2&e){let e;S.ac(e=S.Vb())&&(t.canvasRef=e.first)}},decls:17,vars:14,consts:[["slot","end"],[3,"disabled","mousedown","mouseup"],["name","power-outline"],[3,"disabled","click"],["name","add-outline"],["slot","start"],[3,"click"],["name","ellipsis-vertical-outline"],[1,"container","running-session"],[3,"width","height"],["canvas",""],["class","container no-session",4,"ngIf"],[1,"container","no-session"]],template:function(e,t){1&e&&(S.Mb(0,"ion-header"),S.Mb(1,"ion-toolbar"),S.Mb(2,"ion-title"),S.gc(3),S.Lb(),S.Mb(4,"ion-buttons",0),S.Mb(5,"ion-button",1),S.Ub("mousedown",function(){return t.powerButtonDown()})("mouseup",function(){return t.powerButtonUp()}),S.Kb(6,"ion-icon",2),S.Lb(),S.Mb(7,"ion-button",3),S.Ub("click",function(){return t.installFiles()}),S.Kb(8,"ion-icon",4),S.Lb(),S.Lb(),S.Mb(9,"ion-buttons",5),S.Mb(10,"ion-button",6),S.Ub("click",function(e){return t.openContextMenu(e)}),S.Kb(11,"ion-icon",7),S.Lb(),S.Lb(),S.Lb(),S.Lb(),S.Mb(12,"ion-content"),S.Mb(13,"div",8),S.Kb(14,"canvas",9,10),S.Lb(),S.fc(16,B,3,0,"div",11),S.Lb()),2&e&&(S.zb(3),S.hc(t.title),S.zb(2),S.Zb("disabled",!t.emulationService.isRunning()),S.zb(2),S.Zb("disabled",t.installFileDisabled),S.zb(6),S.ec("display",t.emulationState.getCurrentSession()?void 0:"none"),S.zb(1),S.ec("width",t.cssWidth)("height",t.cssHeight)("display",t.emulationState.getCurrentSession()?"block":"none"),S.Zb("width",t.canvasWidth)("height",t.canvasHeight),S.zb(2),S.Zb("ngIf",!t.emulationState.getCurrentSession()))},directives:[M.f,M.s,M.r,M.d,M.c,M.g,M.e,n.i],styles:["ion-title[_ngcontent-%COMP%]{text-align:center}.container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;padding:3px}@media (prefers-color-scheme:light){.container.running-session[_ngcontent-%COMP%]{background:#a8a8a8}}canvas[_ngcontent-%COMP%]{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}"]}),e})()}];let H=(()=>{class e{}return e.\u0275mod=S.Hb({type:e}),e.\u0275inj=S.Gb({factory:function(t){return new(t||e)},imports:[[s.i.forChild(P)],s.i]}),e})();var R=i("s7LF");let I=(()=>{class e{}return e.\u0275mod=S.Hb({type:e}),e.\u0275inj=S.Gb({factory:function(t){return new(t||e)},imports:[[n.b,R.a,M.t,H]]}),e})()}}]);