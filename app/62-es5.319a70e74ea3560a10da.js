!function(){function e(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=i(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw a}}}}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(c){r=!0,o=c}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}return n}(e,t)||i(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"6aA7":function(i,r,a){"use strict";a.r(r),a.d(r,"EmulationPageModule",function(){return B});var c,u=a("ofXK"),l=a("tyNb"),h=a("mrSG"),d=a("WOYU"),v=a("oOyw"),f=a("fXoL"),b=a("bucj"),m=a("TEn/"),p=((c=function(){function e(t){o(this,e),this.emulationService=t,this.onClick=function(){},this.showHelp=function(){}}return s(e,[{key:"ngOnInit",value:function(){}},{key:"reset",value:function(){this.emulationService.reset(),this.onClick()}},{key:"resetNoExtensions",value:function(){this.emulationService.resetNoExtensions(),this.onClick()}},{key:"resetHard",value:function(){this.emulationService.resetHard(),this.onClick()}},{key:"power",value:function(){this.emulationService.engagePower(),this.onClick()}},{key:"help",value:function(){this.showHelp(),this.onClick()}}]),e}()).\u0275fac=function(e){return new(e||c)(f.Jb(b.a))},c.\u0275cmp=f.Db({type:c,selectors:[["app-emulation-context-menu"]],inputs:{onClick:"onClick",showHelp:"showHelp"},decls:11,vars:9,consts:[["button","",3,"detail","disabled","click"],["button","",3,"detail","click"]],template:function(e,t){1&e&&(f.Mb(0,"ion-list"),f.Mb(1,"ion-item",0),f.Ub("click",function(){return t.power()}),f.hc(2," Power "),f.Lb(),f.Mb(3,"ion-item",0),f.Ub("click",function(){return t.reset()}),f.hc(4," Reset "),f.Lb(),f.Mb(5,"ion-item",0),f.Ub("click",function(){return t.resetNoExtensions()}),f.hc(6," Reset (no extensions) "),f.Lb(),f.Mb(7,"ion-item",0),f.Ub("click",function(){return t.resetHard()}),f.hc(8," Hard reset "),f.Lb(),f.Mb(9,"ion-item",1),f.Ub("click",function(){return t.help()}),f.hc(10," Help "),f.Lb(),f.Lb()),2&e&&(f.zb(1),f.Zb("detail",!1)("disabled",!t.emulationService.isRunning()),f.zb(2),f.Zb("detail",!1)("disabled",!t.emulationService.isRunning()),f.zb(2),f.Zb("detail",!1)("disabled",!t.emulationService.isRunning()),f.zb(2),f.Zb("detail",!1)("disabled",!t.emulationService.isRunning()),f.zb(2),f.Zb("detail",!1))},directives:[m.n,m.i],styles:[""]}),c),g=function(){function e(t,i,r){var a=this;o(this,e),this.canvas=t,this.emulationService=i,this.canvasHelper=r,this.handleMouseDown=function(e){var t;if(0===e.button){var i=a.eventToPalmCoordinates(e);if(i){var r=a.determineArea(i);if(0===r)a.interactionMouse={area:r},(t=a.emulationService).handlePointerMove.apply(t,n(i));else{var o=a.determineButton(i);a.interactionMouse={area:r,button:o},a.emulationService.handleButtonDown(o),a.canvasHelper.drawButtons(a.activeButtons())}}}},this.handleMouseMove=function(e){var t,i;if(1&e.buttons&&0===(null===(i=a.interactionMouse)||void 0===i?void 0:i.area)){var r=a.eventToPalmCoordinates(e,!0);r&&(t=a.emulationService).handlePointerMove.apply(t,n(r))}},this.handeMouseUp=function(e){if(0===e.button){var t=a.interactionMouse;switch(a.interactionMouse=void 0,null==t?void 0:t.area){case 1:a.emulationService.handleButtonUp(t.button),a.canvasHelper.drawButtons(a.activeButtons());break;case 0:a.emulationService.handlePointerUp()}}},this.handleTouchStart=function(e){for(var t=0;t<e.changedTouches.length;t++){var i,r=e.changedTouches.item(t);if(r){var o=a.eventToPalmCoordinates(r);if(o){var s=a.determineArea(o);if(0===s)a.interactionsTouch.set(r.identifier,{area:s}),(i=a.emulationService).handlePointerMove.apply(i,n(o));else{var c=a.determineButton(o);a.interactionsTouch.set(r.identifier,{area:s,button:c}),a.emulationService.handleButtonDown(c),a.canvasHelper.drawButtons(a.activeButtons())}}}}!1!==e.cancelable&&e.preventDefault()},this.handleTouchMove=function(e){for(var t,i=0;i<e.changedTouches.length;i++){var r=e.changedTouches.item(i);if(r&&0===(null===(t=a.interactionsTouch.get(r.identifier))||void 0===t?void 0:t.area)){var o,s=a.eventToPalmCoordinates(r,!0);if(!s)continue;(o=a.emulationService).handlePointerMove.apply(o,n(s))}}!1!==e.cancelable&&e.preventDefault()},this.handleTouchEnd=function(e){for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches.item(t);if(n){var i=a.interactionsTouch.get(n.identifier);switch(a.interactionsTouch.delete(n.identifier),null==i?void 0:i.area){case 1:a.emulationService.handleButtonUp(i.button),a.canvasHelper.drawButtons(a.activeButtons());break;case 0:a.emulationService.handlePointerUp()}}}!1!==e.cancelable&&e.preventDefault()},this.handleKeyDown=function(e){var t=function(e){if(1===e.length&&e.charCodeAt(0)<=255)return e.charCodeAt(0);switch(e){case"ArrowLeft":return 28;case"ArrowRight":return 29;case"ArrowUp":return 30;case"ArrowDown":return 31;case"Backspace":return 8;case"Tab":return 9;case"Enter":return 10;default:return}}(e.key);void 0!==t&&(a.emulationService.handleKeyDown(t,e.ctrlKey),e.preventDefault())},this.interactionsTouch=new Map,this.bound=!1}return s(e,[{key:"bind",value:function(){this.bound||(this.canvas.addEventListener("mousedown",this.handleMouseDown),window.addEventListener("mouseup",this.handeMouseUp),window.addEventListener("mousemove",this.handleMouseMove),this.canvas.addEventListener("touchstart",this.handleTouchStart),this.canvas.addEventListener("touchmove",this.handleTouchMove),this.canvas.addEventListener("touchend",this.handleTouchEnd),this.canvas.addEventListener("touchcancel",this.handleTouchEnd),window.addEventListener("keydown",this.handleKeyDown),this.bound=!0)}},{key:"release",value:function(){this.bound&&(this.canvas.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mouseup",this.handeMouseUp),window.removeEventListener("mousemove",this.handleMouseMove),this.canvas.removeEventListener("touchstart",this.handleTouchStart),this.canvas.removeEventListener("touchmove",this.handleTouchMove),this.canvas.removeEventListener("touchend",this.handleTouchEnd),this.canvas.removeEventListener("touchcancel",this.handleTouchEnd),window.removeEventListener("keydown",this.handleKeyDown),this.bound=!1)}},{key:"eventToPalmCoordinates",value:function(e){var t,n,i,r,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=this.canvas.getBoundingClientRect();a.width/a.height>d.e/d.c?(r=a.height,i=d.e/d.c*a.height,n=a.top,t=a.left+(a.width-i)/2):(i=a.width,r=d.c/d.e*a.width,t=a.left,n=a.top+(a.height-r)/2);var s=Math.floor((e.clientX-t)/i*d.e/d.d)-d.a/d.d,c=Math.floor((e.clientY-n)/r*d.c/d.d)-d.a/d.d;if(c>=161&&(c-=1),o)s<0&&(s=0),s>159&&(s=159),c<0&&(c=0),c>249&&(c=249);else if(s<0||s>=160||c<0||c>=250)return;return[s,c]}},{key:"determineArea",value:function(e){return t(e,2)[1]>=220?1:0}},{key:"determineButton",value:function(e){var n=t(e,2),i=n[0],r=n[1];return i>=130?3:i>=100?2:i>=60?r>=236?5:4:i>=30?1:0}},{key:"activeButtons",value:function(){var e,t=Array.from(this.interactionsTouch.values()).filter(function(e){return 1===e.area}).map(function(e){return e.button});return 1===(null===(e=this.interactionMouse)||void 0===e?void 0:e.area)&&t.push(this.interactionMouse.button),t}}]),e}(),w=a("7yca"),y=a("Ld/c"),k=a("xOb2"),S=a("4otK"),M=a("hq03"),x=a("shLW"),C=["canvas"];function L(e,t){if(1&e){var n=f.Nb();f.Mb(0,"ion-button",4),f.Ub("click",function(){return f.cc(n),f.Wb().mute(!1)}),f.Kb(1,"ion-icon",11),f.Lb()}}function E(e,t){if(1&e){var n=f.Nb();f.Mb(0,"ion-button",4),f.Ub("click",function(){return f.cc(n),f.Wb().mute(!0)}),f.Kb(1,"ion-icon",12),f.Lb()}}function T(e,t){1&e&&(f.Mb(0,"div",13),f.Mb(1,"div"),f.hc(2,"No session selected"),f.Lb(),f.Lb())}var H,I,P,A=[{path:"",component:(H=function(){function t(e,n,i,r,a,s,c,u,l,h){var d=this;o(this,t),this.emulationService=e,this.emulationState=n,this.storageService=i,this.audioService=r,this.popoverController=a,this.modalController=s,this.alertService=c,this.fileService=u,this.loadingController=l,this.ngZone=h,this.onNewFrame=function(e){d.canvasHelper.drawEmulationCanvas(e)}}return s(t,[{key:"ngAfterViewInit",value:function(){var e=this.canvasRef.nativeElement;this.canvasHelper=new d.b(e),this.eventHandler=new g(e,this.emulationService,this.canvasHelper)}},{key:"canvasWidth",get:function(){return d.e}},{key:"canvasHeight",get:function(){return d.c}},{key:"cssWidth",get:function(){return this.canvasWidth/devicePixelRatio+"px"}},{key:"cssHeight",get:function(){return this.canvasHeight/devicePixelRatio+"px"}},{key:"ionViewDidEnter",value:function(){return Object(h.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t,n,i=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.emulationState.getCurrentSession(),n=Object(v.b)(),e.t0=t||void 0===n,e.t0){e.next=7;break}return e.next=6,this.storageService.getSession(n);case 6:t=e.sent;case 7:this.canvasHelper.clear(t),this.onNewFrame(this.emulationService.getCanvas()),this.emulationService.newFrameEvent.addHandler(this.onNewFrame),this.emulationService.resume(),this.ngZone.runOutsideAngular(function(){return i.eventHandler.bind()});case 12:case"end":return e.stop()}},e,this)}))}},{key:"ionViewWillLeave",value:function(){this.emulationService.pause(),this.emulationService.newFrameEvent.removeHandler(this.onNewFrame),this.eventHandler.release()}},{key:"openContextMenu",value:function(e){return Object(h.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.popoverController.create({component:p,event:e,backdropDismiss:!0,showBackdrop:!1,componentProps:{onClick:function(){return n.dismiss()},showHelp:function(){return i.showHelp()}}});case 2:(n=t.sent).present();case 4:case"end":return t.stop()}},t,this)}))}},{key:"installFiles",value:function(){this.fileService.openFiles(this.processFilesForInstallation.bind(this))}},{key:"showHelp",value:function(){return Object(h.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:w.a,componentProps:{url:"assets/doc/emulation.md"}});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}},e,this)}))}},{key:"installFileDisabled",get:function(){return!this.emulationService.isRunning()||this.emulationService.isPowerOff()||!this.emulationService.isUiInitialized()}},{key:"title",get:function(){var e;return(null===(e=this.emulationState.getCurrentSession())||void 0===e?void 0:e.name)||""}},{key:"isMuted",get:function(){return!this.audioService.isInitialized()||this.audioService.isMuted()}},{key:"mute",value:function(e){e?this.audioService.mute(!0):this.audioService.isInitialized()?this.audioService.mute(!1):this.audioService.initialize()}},{key:"processFilesForInstallation",value:function(t){return Object(h.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var i,r,o,a,s,c,u,l;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.loadingController.create({message:"Installing..."});case 2:return i=n.sent,n.next=5,i.present();case 5:r=[],o=[],n.prev=6,a=e(t),n.prev=8,a.s();case 10:if((s=a.n()).done){n.next=25;break}if(c=s.value,n.t0=/\.(prc|pdb)$/i.test(c.name),!n.t0){n.next=18;break}return n.next=16,this.emulationService.installFile(c.content);case 16:n.t1=n.sent,n.t0=0==n.t1;case 18:if(!n.t0){n.next=22;break}r.push(c.name),n.next=23;break;case 22:o.push(c.name);case 23:n.next=10;break;case 25:n.next=30;break;case 27:n.prev=27,n.t2=n.catch(8),a.e(n.t2);case 30:return n.prev=30,a.f(),n.finish(30);case 33:return n.prev=33,i.dismiss(),n.finish(33);case 36:n.t3=r.length,n.next=0===n.t3?39:1===n.t3?41:43;break;case 39:return u="",n.abrupt("break",44);case 41:return u="Installation of ".concat(r[0]," successful."),n.abrupt("break",44);case 43:u="Installation of ".concat(r.length," files successful.");case 44:n.t4=(o.length>0&&(u+="<br/><br/>"),o.length),n.next=0===n.t4?47:1===n.t4?48:50;break;case 47:return n.abrupt("break",51);case 48:return u+="Installation of ".concat(o[0]," failed."),n.abrupt("break",51);case 50:u+="Installation of ".concat(o.slice(0,o.length>3?3:o.length-1).join(", ")," and ").concat(o.length>3?o.length-3+" more files":o[o.length-1]," failed.");case 51:l=0===o.length?"Installation successful":0===r.length?"Installation failed":"Installation errors",this.alertService.message(l,u);case 52:case"end":return n.stop()}},n,this,[[6,,33,36],[8,27,30,33]])}))}}]),t}(),H.\u0275fac=function(e){return new(e||H)(f.Jb(b.a),f.Jb(y.a),f.Jb(k.b),f.Jb(S.a),f.Jb(m.y),f.Jb(m.x),f.Jb(M.a),f.Jb(x.a),f.Jb(m.w),f.Jb(f.B))},H.\u0275cmp=f.Db({type:H,selectors:[["app-emulation"]],viewQuery:function(e,t){var n;1&e&&f.lc(C,1),2&e&&f.ac(n=f.Vb())&&(t.canvasRef=n.first)},decls:17,vars:15,consts:[["slot","end"],[3,"disabled","click"],["name","download-outline"],["slot","start"],[3,"click"],["name","ellipsis-vertical-outline"],[3,"click",4,"ngIf"],[1,"container","running-session"],[3,"width","height"],["canvas",""],["class","container no-session",4,"ngIf"],["name","volume-mute-outline"],["name","volume-high-outline"],[1,"container","no-session"]],template:function(e,t){1&e&&(f.Mb(0,"ion-header"),f.Mb(1,"ion-toolbar"),f.Mb(2,"ion-title"),f.hc(3),f.Lb(),f.Mb(4,"ion-buttons",0),f.Mb(5,"ion-button",1),f.Ub("click",function(){return t.installFiles()}),f.Kb(6,"ion-icon",2),f.Lb(),f.Lb(),f.Mb(7,"ion-buttons",3),f.Mb(8,"ion-button",4),f.Ub("click",function(e){return t.openContextMenu(e)}),f.Kb(9,"ion-icon",5),f.Lb(),f.gc(10,L,2,0,"ion-button",6),f.gc(11,E,2,0,"ion-button",6),f.Lb(),f.Lb(),f.Lb(),f.Mb(12,"ion-content"),f.Mb(13,"div",7),f.Kb(14,"canvas",8,9),f.Lb(),f.gc(16,T,3,0,"div",10),f.Lb()),2&e&&(f.zb(3),f.ic(t.title),f.zb(2),f.Zb("disabled",t.installFileDisabled),f.zb(5),f.Zb("ngIf",t.isMuted),f.zb(1),f.Zb("ngIf",!t.isMuted),f.zb(2),f.fc("display",t.emulationState.getCurrentSession()?void 0:"none"),f.zb(1),f.fc("width",t.cssWidth)("height",t.cssHeight)("display",t.emulationState.getCurrentSession()?"block":"none"),f.Zb("width",t.canvasWidth)("height",t.canvasHeight),f.zb(2),f.Zb("ngIf",!t.emulationState.getCurrentSession()))},directives:[m.f,m.t,m.s,m.d,m.c,m.g,u.i,m.e],styles:["ion-title[_ngcontent-%COMP%]{text-align:center}.container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;padding:3px}.container.running-session[_ngcontent-%COMP%]{background:radial-gradient(circle,#ccc 0,#eee 100%)}@media (prefers-color-scheme:dark){.container.running-session[_ngcontent-%COMP%]{background:none}}canvas[_ngcontent-%COMP%]{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}"]}),H)}],O=((I=function e(){o(this,e)}).\u0275mod=f.Hb({type:I}),I.\u0275inj=f.Gb({factory:function(e){return new(e||I)},imports:[[l.i.forChild(A)],l.i]}),I),R=a("3Pt+"),j=a("vy64"),B=((P=function e(){o(this,e)}).\u0275mod=f.Hb({type:P}),P.\u0275inj=f.Gb({factory:function(e){return new(e||P)},imports:[[u.b,R.e,m.u,O,j.a]]}),P)}}])}();