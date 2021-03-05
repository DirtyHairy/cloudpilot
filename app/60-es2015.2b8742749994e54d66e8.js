(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"6aA7":function(e,t,n){"use strict";n.r(t),n.d(t,"EmulationPageModule",function(){return O});var i=n("ofXK"),s=n("tyNb"),o=n("mrSG"),a=n("z9fa"),r=n("bucj");const c=r.b[2],l=r.b[0],h=3*devicePixelRatio,u=Math.round(1*h),d=160*h+2*u,v=251*h+2*u;function b(e){return new Promise((t,n)=>{const i=new Image;i.onload=()=>t(i),i.onerror=()=>n(),i.src=e})}function m(e){return Object(o.a)(this,void 0,void 0,function*(){const t=document.createElement("canvas");t.width=160*h,t.height=30*h;const n=t.getContext("2d");if(!n)throw new Error("get a new browser");return n.drawImage(yield b(e),0,0,160*h,30*h),t})}const f=b("assets/silkscreen-default.svg"),g=b("assets/silkscreen-m515.svg"),w=m("assets/hard-buttons-default.svg"),p=m("assets/hard-buttons-m515.svg");class S{constructor(e){this.canvas=e;const t=e.getContext("2d");if(!t)throw new Error("get a new browser");this.ctx=t}clear(e){return Object(o.a)(this,void 0,void 0,function*(){this.session=e,this.fillCanvasRect(0,0,d,v,this.backgroundColor()),yield this.drawSilkscreen(),yield this.drawButtons()})}drawSilkscreen(){return Object(o.a)(this,void 0,void 0,function*(){const e=yield this.silkscreenImage();this.fillRect(0,161,160,60,c),this.ctx.imageSmoothingEnabled=!0,this.ctx.imageSmoothingQuality="high",this.ctx.drawImage(e,u,u+161*h,160*h,60*h)})}drawButtons(e=[]){return Object(o.a)(this,void 0,void 0,function*(){this.ctx.drawImage(yield this.buttonsImage(),u,u+221*h,160*h,30*h),e.includes(0)&&this.fillRect(0,221,30,30,"rgba(0,0,0,0.2)"),e.includes(1)&&this.fillRect(30,221,30,30,"rgba(0,0,0,0.2)"),e.includes(2)&&this.fillRect(100,221,30,30,"rgba(0,0,0,0.2)"),e.includes(3)&&this.fillRect(130,221,30,30,"rgba(0,0,0,0.2)"),e.includes(4)&&this.fillRect(60,221,40,15,"rgba(0,0,0,0.2)"),e.includes(5)&&this.fillRect(60,236,40,15,"rgba(0,0,0,0.2)")})}drawEmulationCanvas(e){this.ctx.imageSmoothingEnabled=!1,this.ctx.drawImage(e,u,u,160*h,160*h)}fillRect(e,t,n,i,s){this.ctx.beginPath(),this.ctx.rect(u+h*e,u+h*t,h*n,h*i),this.ctx.fillStyle=s,this.ctx.fill()}fillCanvasRect(e,t,n,i,s){this.ctx.beginPath(),this.ctx.rect(e,t,n,i),this.ctx.fillStyle=s,this.ctx.fill()}textCenteredAt(e,t,n){const i=this.ctx.measureText(n);this.ctx.textBaseline="middle",this.ctx.fillText(n,u+h*e-i.width/2,u+h*t)}silkscreenImage(){var e;switch(null===(e=this.session)||void 0===e?void 0:e.device){case a.a.m515:return g;default:return f}}buttonsImage(){var e;switch(null===(e=this.session)||void 0===e?void 0:e.device){case a.a.m515:return p;default:return w}}backgroundColor(){var e;switch(null===(e=this.session)||void 0===e?void 0:e.device){case a.a.m515:return"white";default:return l}}}var M=n("oOyw"),x=n("fXoL"),C=n("TEn/");let k=(()=>{class e{constructor(e){this.emulationService=e,this.onClick=()=>{}}ngOnInit(){}reset(){this.emulationService.reset(),this.onClick()}resetNoExtensions(){this.emulationService.resetNoExtensions(),this.onClick()}resetHard(){this.emulationService.resetHard(),this.onClick()}}return e.\u0275fac=function(t){return new(t||e)(x.Jb(r.a))},e.\u0275cmp=x.Db({type:e,selectors:[["app-emulation-context-menu"]],inputs:{onClick:"onClick"},decls:7,vars:6,consts:[["button","",3,"detail","disabled","click"]],template:function(e,t){1&e&&(x.Mb(0,"ion-list"),x.Mb(1,"ion-item",0),x.Ub("click",function(){return t.reset()}),x.gc(2," Reset "),x.Lb(),x.Mb(3,"ion-item",0),x.Ub("click",function(){return t.resetNoExtensions()}),x.gc(4," Reset (no extensions) "),x.Lb(),x.Mb(5,"ion-item",0),x.Ub("click",function(){return t.resetHard()}),x.gc(6," Hard reset "),x.Lb(),x.Lb()),2&e&&(x.zb(1),x.Zb("detail",!1)("disabled",!t.emulationService.isRunning()),x.zb(2),x.Zb("detail",!1)("disabled",!t.emulationService.isRunning()),x.zb(2),x.Zb("detail",!1)("disabled",!t.emulationService.isRunning()))},directives:[C.m,C.h],styles:[""]}),e})();class y{constructor(e,t,n){this.canvas=e,this.emulationService=t,this.canvasHelper=n,this.handleMouseDown=e=>{if(0!==e.button)return;const t=this.eventToPalmCoordinates(e);if(!t)return;const n=this.determineArea(t);if(0===n)this.interactionMouse={area:n},this.emulationService.handlePointerMove(...t);else{const e=this.determineButton(t);this.interactionMouse={area:n,button:e},this.emulationService.handleButtonDown(e),this.canvasHelper.drawButtons(this.activeButtons())}},this.handleMouseMove=e=>{var t;if(!(1&e.buttons)||0!==(null===(t=this.interactionMouse)||void 0===t?void 0:t.area))return;const n=this.eventToPalmCoordinates(e,!0);n&&this.emulationService.handlePointerMove(...n)},this.handeMouseUp=e=>{if(0!==e.button)return;const t=this.interactionMouse;switch(this.interactionMouse=void 0,null==t?void 0:t.area){case 1:this.emulationService.handleButtonUp(t.button),this.canvasHelper.drawButtons(this.activeButtons());break;case 0:this.emulationService.handlePointerUp()}},this.handleTouchStart=e=>{for(let t=0;t<e.changedTouches.length;t++){const n=e.changedTouches.item(t);if(!n)continue;const i=this.eventToPalmCoordinates(n);if(!i)continue;const s=this.determineArea(i);if(0===s)this.interactionsTouch.set(n.identifier,{area:s}),this.emulationService.handlePointerMove(...i);else{const e=this.determineButton(i);this.interactionsTouch.set(n.identifier,{area:s,button:e}),this.emulationService.handleButtonDown(e),this.canvasHelper.drawButtons(this.activeButtons())}}!1!==e.cancelable&&e.preventDefault()},this.handleTouchMove=e=>{var t;for(let n=0;n<e.changedTouches.length;n++){const i=e.changedTouches.item(n);if(i&&0===(null===(t=this.interactionsTouch.get(i.identifier))||void 0===t?void 0:t.area)){const e=this.eventToPalmCoordinates(i,!0);if(!e)continue;this.emulationService.handlePointerMove(...e)}}!1!==e.cancelable&&e.preventDefault()},this.handleTouchEnd=e=>{for(let t=0;t<e.changedTouches.length;t++){const n=e.changedTouches.item(t);if(!n)continue;const i=this.interactionsTouch.get(n.identifier);switch(this.interactionsTouch.delete(n.identifier),null==i?void 0:i.area){case 1:this.emulationService.handleButtonUp(i.button),this.canvasHelper.drawButtons(this.activeButtons());break;case 0:this.emulationService.handlePointerUp()}}!1!==e.cancelable&&e.preventDefault()},this.handleKeyDown=e=>{const t=function(e){if(1===e.length&&e.charCodeAt(0)<=255)return e.charCodeAt(0);switch(e){case"ArrowLeft":return 28;case"ArrowRight":return 29;case"ArrowUp":return 30;case"ArrowDown":return 31;case"Backspace":return 8;case"Tab":return 9;case"Enter":return 10;default:return}}(e.key);void 0!==t&&(this.emulationService.handleKeyDown(t,e.ctrlKey),e.preventDefault())},this.interactionsTouch=new Map,this.bound=!1}bind(){this.bound||(this.canvas.addEventListener("mousedown",this.handleMouseDown),window.addEventListener("mouseup",this.handeMouseUp),window.addEventListener("mousemove",this.handleMouseMove),this.canvas.addEventListener("touchstart",this.handleTouchStart),this.canvas.addEventListener("touchmove",this.handleTouchMove),this.canvas.addEventListener("touchend",this.handleTouchEnd),this.canvas.addEventListener("touchcancel",this.handleTouchEnd),window.addEventListener("keydown",this.handleKeyDown),this.bound=!0)}release(){this.bound&&(this.canvas.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mouseup",this.handeMouseUp),window.removeEventListener("mousemove",this.handleMouseMove),this.canvas.removeEventListener("touchstart",this.handleTouchStart),this.canvas.removeEventListener("touchmove",this.handleTouchMove),this.canvas.removeEventListener("touchend",this.handleTouchEnd),this.canvas.removeEventListener("touchcancel",this.handleTouchEnd),window.removeEventListener("keydown",this.handleKeyDown),this.bound=!1)}eventToPalmCoordinates(e,t=!1){const n=this.canvas.getBoundingClientRect();let i,s,o,a;n.width/n.height>d/v?(a=n.height,o=d/v*n.height,s=n.top,i=n.left+(n.width-o)/2):(o=n.width,a=v/d*n.width,i=n.left,s=n.top+(n.height-a)/2);let r=Math.floor((e.clientX-i)/o*d/h)-u/h,c=Math.floor((e.clientY-s)/a*v/h)-u/h;if(c>=161&&(c-=1),t)r<0&&(r=0),r>159&&(r=159),c<0&&(c=0),c>249&&(c=249);else if(r<0||r>=160||c<0||c>=250)return;return[r,c]}determineArea([,e]){return e>=220?1:0}determineButton([e,t]){return e>=130?3:e>=100?2:e>=60?t>=236?5:4:e>=30?1:0}activeButtons(){var e;const t=Array.from(this.interactionsTouch.values()).filter(e=>1===e.area).map(e=>e.button);return 1===(null===(e=this.interactionMouse)||void 0===e?void 0:e.area)&&t.push(this.interactionMouse.button),t}}var L=n("Ld/c"),E=n("xOb2"),T=n("hq03"),B=n("shLW");const H=["canvas"];function P(e,t){1&e&&(x.Mb(0,"div",12),x.Mb(1,"div"),x.gc(2,"No session selected"),x.Lb(),x.Lb())}const I=[{path:"",component:(()=>{class e{constructor(e,t,n,i,s,o,a,r){this.emulationService=e,this.emulationState=t,this.storageService=n,this.popoverController=i,this.alertService=s,this.fileService=o,this.loadingController=a,this.ngZone=r,this.onNewFrame=e=>{this.canvasHelper.drawEmulationCanvas(e)}}ngAfterViewInit(){const e=this.canvasRef.nativeElement;this.canvasHelper=new S(e),this.eventHandler=new y(e,this.emulationService,this.canvasHelper)}get canvasWidth(){return d}get canvasHeight(){return v}get cssWidth(){return this.canvasWidth/devicePixelRatio+"px"}get cssHeight(){return this.canvasHeight/devicePixelRatio+"px"}powerButtonDown(){return Object(o.a)(this,void 0,void 0,function*(){this.emulationService.handleButtonDown(6)})}powerButtonUp(){return Object(o.a)(this,void 0,void 0,function*(){this.emulationService.handleButtonUp(6)})}ionViewDidEnter(){return Object(o.a)(this,void 0,void 0,function*(){let e=this.emulationState.getCurrentSession();const t=Object(M.b)();e||void 0===t||(e=yield this.storageService.getSession(t)),this.canvasHelper.clear(e),this.onNewFrame(this.emulationService.getCanvas()),this.emulationService.newFrame.addHandler(this.onNewFrame),this.emulationService.resume(),this.ngZone.runOutsideAngular(()=>this.eventHandler.bind())})}ionViewWillLeave(){this.emulationService.pause(),this.emulationService.newFrame.removeHandler(this.onNewFrame),this.eventHandler.release()}openContextMenu(e){return Object(o.a)(this,void 0,void 0,function*(){const t=yield this.popoverController.create({component:k,event:e,backdropDismiss:!0,showBackdrop:!1,componentProps:{onClick:()=>t.dismiss()}});t.present()})}installFiles(){this.fileService.openFiles(this.processFilesForInstallation.bind(this))}get installFileDisabled(){return!this.emulationService.isRunning()||this.emulationService.isPowerOff()||!this.emulationService.isUiInitialized()}get title(){var e;return(null===(e=this.emulationState.getCurrentSession())||void 0===e?void 0:e.name)||""}processFilesForInstallation(e){return Object(o.a)(this,void 0,void 0,function*(){const t=yield this.loadingController.create({message:"Installing..."});yield t.present();const n=[],i=[];try{for(const t of e)/\.(prc|pdb)$/i.test(t.name)&&0==(yield this.emulationService.installFile(t.content))?n.push(t.name):i.push(t.name)}finally{t.dismiss()}let s,o;switch(n.length){case 0:s="";break;case 1:s=`Installation of ${n[0]} successful.`;break;default:s=`Installation of ${n.length} files successful.`}switch(i.length>0&&(s+="<br/><br/>"),i.length){case 0:break;case 1:s+=`Installation of ${i[0]} failed.`;break;default:s+=`Installation of ${i.slice(0,i.length>3?3:i.length-1).join(", ")} and ${i.length>3?i.length-3+" more files":i[i.length-1]} failed.`}o=0===i.length?"Installation successful":0===n.length?"Installation failed":"Installation errors",this.alertService.message(o,s)})}}return e.\u0275fac=function(t){return new(t||e)(x.Jb(r.a),x.Jb(L.a),x.Jb(E.b),x.Jb(C.w),x.Jb(T.a),x.Jb(B.a),x.Jb(C.v),x.Jb(x.B))},e.\u0275cmp=x.Db({type:e,selectors:[["app-emulation"]],viewQuery:function(e,t){if(1&e&&x.kc(H,1),2&e){let e;x.ac(e=x.Vb())&&(t.canvasRef=e.first)}},decls:17,vars:14,consts:[["slot","end"],[3,"disabled","mousedown","mouseup"],["name","power-outline"],[3,"disabled","click"],["name","download-outline"],["slot","start"],[3,"click"],["name","ellipsis-vertical-outline"],[1,"container","running-session"],[3,"width","height"],["canvas",""],["class","container no-session",4,"ngIf"],[1,"container","no-session"]],template:function(e,t){1&e&&(x.Mb(0,"ion-header"),x.Mb(1,"ion-toolbar"),x.Mb(2,"ion-title"),x.gc(3),x.Lb(),x.Mb(4,"ion-buttons",0),x.Mb(5,"ion-button",1),x.Ub("mousedown",function(){return t.powerButtonDown()})("mouseup",function(){return t.powerButtonUp()}),x.Kb(6,"ion-icon",2),x.Lb(),x.Mb(7,"ion-button",3),x.Ub("click",function(){return t.installFiles()}),x.Kb(8,"ion-icon",4),x.Lb(),x.Lb(),x.Mb(9,"ion-buttons",5),x.Mb(10,"ion-button",6),x.Ub("click",function(e){return t.openContextMenu(e)}),x.Kb(11,"ion-icon",7),x.Lb(),x.Lb(),x.Lb(),x.Lb(),x.Mb(12,"ion-content"),x.Mb(13,"div",8),x.Kb(14,"canvas",9,10),x.Lb(),x.fc(16,P,3,0,"div",11),x.Lb()),2&e&&(x.zb(3),x.hc(t.title),x.zb(2),x.Zb("disabled",!t.emulationService.isRunning()),x.zb(2),x.Zb("disabled",t.installFileDisabled),x.zb(6),x.ec("display",t.emulationState.getCurrentSession()?void 0:"none"),x.zb(1),x.ec("width",t.cssWidth)("height",t.cssHeight)("display",t.emulationState.getCurrentSession()?"block":"none"),x.Zb("width",t.canvasWidth)("height",t.canvasHeight),x.zb(2),x.Zb("ngIf",!t.emulationState.getCurrentSession()))},directives:[C.f,C.s,C.r,C.d,C.c,C.g,C.e,i.i],styles:["ion-title[_ngcontent-%COMP%]{text-align:center}.container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;padding:3px}@media (prefers-color-scheme:light){.container.running-session[_ngcontent-%COMP%]{background:#a8a8a8}}canvas[_ngcontent-%COMP%]{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}"]}),e})()}];let R=(()=>{class e{}return e.\u0275mod=x.Hb({type:e}),e.\u0275inj=x.Gb({factory:function(t){return new(t||e)},imports:[[s.i.forChild(I)],s.i]}),e})();var D=n("3Pt+");let O=(()=>{class e{}return e.\u0275mod=x.Hb({type:e}),e.\u0275inj=x.Gb({factory:function(t){return new(t||e)},imports:[[i.b,D.a,C.t,R]]}),e})()}}]);