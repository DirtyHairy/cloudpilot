!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"/NlI":function(t,i,s){"use strict";s.r(i),s.d(i,"SessionsPageModule",function(){return j});var r,o,a=s("SVse"),c=s("s7LF"),u=s("sZkV"),l=s("iInd"),d=s("mrSG"),m=s("ASsG"),b=s("8Y7J"),v=s("bucj"),f=s("xOb2"),p=((r=function(){function t(n,i,s){e(this,t),this.emulationService=n,this.storageService=i,this.loadingController=s,this.sessions=[],this.updateSessionsFromStorage()}return n(t,[{key:"addSessionFromImage",value:function(e,t){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var i,s;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i={id:-1,name:t,device:e.deviceId,ram:e.memory.length/1024/1024,rom:""},n.next=3,this.loadingController.create({message:"Importing..."});case 3:return s=n.sent,n.next=6,s.present();case 6:return n.next=8,this.storageService.addSession(i,e.rom,e.memory,e.savestate);case 8:return n.next=10,this.updateSessionsFromStorage();case 10:return n.next=12,s.dismiss();case 12:case"end":return n.stop()}},n,this)}))}},{key:"addSessionFromRom",value:function(e,t,n){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function i(){var s,r;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.t0=-1,i.t1=t,i.t2=n,i.next=5,this.emulationService.cloudpilot;case 5:return i.t3=i.sent.minRamForDevice(n),i.t4=i.t3/1024,i.t5=i.t4/1024,s={id:i.t0,name:i.t1,device:i.t2,ram:i.t5,rom:""},i.next=11,this.loadingController.create({message:"Importing..."});case 11:return r=i.sent,i.next=14,r.present();case 14:return i.next=16,this.storageService.addSession(s,e);case 16:return i.next=18,this.updateSessionsFromStorage();case 18:return i.next=20,r.dismiss();case 20:case"end":return i.stop()}},i,this)}))}},{key:"getSessions",value:function(){return this.sessions}},{key:"deleteSession",value:function(e){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.storageService.deleteSession(e);case 2:this.updateSessionsFromStorage();case 3:case"end":return t.stop()}},t,this)}))}},{key:"updateSession",value:function(e){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.storageService.updateSession(e);case 2:this.updateSessionsFromStorage();case 3:case"end":return t.stop()}},t,this)}))}},{key:"updateSessionsFromStorage",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.storageService.getAllSessions();case 2:this.sessions=e.sent.sort(function(e,t){return e.name.localeCompare(t.name)});case 3:case"end":return e.stop()}},e,this)}))}}]),t}()).\u0275fac=function(e){return new(e||r)(b.Qb(v.a),b.Qb(f.b),b.Qb(u.v))},r.\u0275prov=b.Fb({token:r,factory:r.\u0275fac,providedIn:"root"}),r),h=s("shLW"),g=s("hq03"),S=s("Ld/c"),k=((o=function(){function t(){e(this,t),this.onEdit=function(){},this.onSave=function(){},this.onDelete=function(){},this.onReset=function(){}}return n(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=b.Db({type:o,selectors:[["app-session-context-menu"]],inputs:{onEdit:"onEdit",onSave:"onSave",onDelete:"onDelete",onReset:"onReset"},decls:9,vars:4,consts:[["button","",3,"detail","click"]],template:function(e,t){1&e&&(b.Mb(0,"ion-list"),b.Mb(1,"ion-item",0),b.Ub("click",function(){return t.onEdit()}),b.gc(2," Edit "),b.Lb(),b.Mb(3,"ion-item",0),b.Ub("click",function(){return t.onSave()}),b.gc(4," Save "),b.Lb(),b.Mb(5,"ion-item",0),b.Ub("click",function(){return t.onReset()}),b.gc(6," Reset "),b.Lb(),b.Mb(7,"ion-item",0),b.Ub("click",function(){return t.onDelete()}),b.gc(8," Delete "),b.Lb(),b.Lb()),2&e&&(b.zb(1),b.Zb("detail",!1),b.zb(2),b.Zb("detail",!1),b.zb(2),b.Zb("detail",!1),b.zb(2),b.Zb("detail",!1))},directives:[u.m,u.h],styles:[""]}),o),x=s("z9fa");function w(e,t){if(1&e&&(b.Mb(0,"span"),b.gc(1),b.Lb()),2&e){var n=b.Wb();b.zb(1),b.ic(", OS ",null==n.session?null:n.session.osVersion,"")}}var y,M=((y=function(){function t(n){e(this,t),this.popoverController=n,this.selected=!1,this.delete=new b.o,this.reset=new b.o,this.edit=new b.o,this.save=new b.o,this.selectItem=new b.o}return n(t,[{key:"device",get:function(){var e;switch(null===(e=this.session)||void 0===e?void 0:e.device){case x.a.m515:return"Palm m515";case x.a.palmV:return"Palm V";default:throw new Error("bad device ID")}}},{key:"onContextmenu",value:function(e){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.stopPropagation(),e.preventDefault(),t.next=3,this.popoverController.create({component:k,event:e,backdropDismiss:!0,showBackdrop:!1,componentProps:{onEdit:function(){n.dismiss(),i.edit.emit()},onSave:function(){n.dismiss(),i.save.emit()},onDelete:function(){n.dismiss(),i.delete.emit()},onReset:function(){n.dismiss(),i.reset.emit()}}});case 3:(n=t.sent).present();case 5:case"end":return t.stop()}},t,this)}))}}]),t}()).\u0275fac=function(e){return new(e||y)(b.Jb(u.w))},y.\u0275cmp=b.Db({type:y,selectors:[["app-session-item"]],inputs:{session:"session",selected:"selected"},outputs:{delete:"delete",reset:"reset",edit:"edit",save:"save",selectItem:"selectItem"},decls:18,vars:5,consts:[[3,"contextmenu"],["side","start"],["color","primary","icon-only","",3,"click"],["name","create-outline"],["color","secondary","icon-only","",3,"click"],["name","save-outline"],["side","end"],["color","tertiary","icon-only","",3,"click"],["name","attach-outline"],["color","danger","icon-only","",3,"click"],["name","trash-outline"],[3,"color","click"],[4,"ngIf"]],template:function(e,t){1&e&&(b.Mb(0,"ion-item-sliding",0),b.Ub("contextmenu",function(e){return t.onContextmenu(e)}),b.Mb(1,"ion-item-options",1),b.Mb(2,"ion-item-option",2),b.Ub("click",function(){return t.edit.emit(t.session)}),b.Kb(3,"ion-icon",3),b.Lb(),b.Mb(4,"ion-item-option",4),b.Ub("click",function(){return t.save.emit(t.session)}),b.Kb(5,"ion-icon",5),b.Lb(),b.Lb(),b.Mb(6,"ion-item-options",6),b.Mb(7,"ion-item-option",7),b.Ub("click",function(){return t.reset.emit(t.session)}),b.Kb(8,"ion-icon",8),b.Lb(),b.Mb(9,"ion-item-option",9),b.Ub("click",function(){return t.delete.emit(t.session)}),b.Kb(10,"ion-icon",10),b.Lb(),b.Lb(),b.Mb(11,"ion-item",11),b.Ub("click",function(){return t.selectItem.emit()}),b.Mb(12,"ion-label"),b.Mb(13,"h2"),b.gc(14),b.Lb(),b.Mb(15,"p"),b.gc(16),b.fc(17,w,2,1,"span",12),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&e&&(b.zb(11),b.Zb("color",t.selected?"primary":void 0),b.zb(3),b.hc(null==t.session?null:t.session.name),b.zb(2),b.jc("",t.device," ",null==t.session?null:t.session.ram,"MB RAM"),b.zb(1),b.Zb("ngIf",null==t.session?null:t.session.osVersion))},directives:[u.k,u.j,u.i,u.g,u.h,u.l,a.i],styles:["ion-label[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin-top:.75em}ion-item-option[_ngcontent-%COMP%]{font-size:1.5em}ion-item-sliding[_ngcontent-%COMP%]{cursor:pointer}"]}),y);function R(e,t){if(1&e){var n=b.Nb();b.Mb(0,"app-session-item",6),b.Ub("delete",function(){b.bc(n);var e=t.$implicit;return b.Wb().deleteSession(e)})("selectItem",function(){b.bc(n);var e=t.$implicit;return b.Wb().launchSession(e)})("edit",function(){b.bc(n);var e=t.$implicit;return b.Wb().editSession(e)})("save",function(){b.bc(n);var e=t.$implicit;return b.Wb().saveSession(e)})("reset",function(){b.bc(n);var e=t.$implicit;return b.Wb().resetSession(e)}),b.Lb()}if(2&e){var i=t.$implicit,s=b.Wb();b.Zb("session",i)("selected",s.currentSessionId===i.id)}}var L,O,C,F=[{path:"",component:(L=function(){function t(n,i,s,r,o,a,c,u){e(this,t),this.sessionService=n,this.fileService=i,this.alertController=s,this.alertService=r,this.emulationService=o,this.emulationState=a,this.storageService=c,this.router=u}return n(t,[{key:"sessions",get:function(){return this.sessionService.getSessions().sort(function(e,t){return e.name.localeCompare(t.name)})}},{key:"deleteSession",value:function(e){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({header:"Warning",message:"Deleting the session '".concat(e.name,"' will remove all associated data. This cannot be undone. Are you sure you want to continue?"),buttons:[{text:"Cancel",role:"cancel"},{text:"Delete",handler:function(){return i.sessionService.deleteSession(e)}}]});case 2:return n=t.sent,t.next=5,n.present();case 5:case"end":return t.stop()}},t,this)}))}},{key:"editSession",value:function(e){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.queryName(e.name);case 2:void 0!==(n=t.sent)&&this.sessionService.updateSession(Object.assign(Object.assign({},e),{name:n}));case 4:case"end":return t.stop()}},t,this)}))}},{key:"loadFile",value:function(){this.fileService.openFile(this.processFile.bind(this))}},{key:"saveSession",value:function(e){this.fileService.saveSession(e)}},{key:"launchSession",value:function(e){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.currentSessionOverride=e.id,t.next=3,this.emulationService.switchSession(e.id);case 3:this.currentSessionOverride=void 0,this.router.navigateByUrl("/tab/emulation");case 5:case"end":return t.stop()}},t,this)}))}},{key:"resetSession",value:function(e){var t;return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var i,s;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(i=e.id===(null===(t=this.emulationState.getCurrentSession())||void 0===t?void 0:t.id),n.t0=i,!n.t0){n.next=5;break}return n.next=5,this.emulationService.stop();case 5:return n.next=7,this.storageService.deleteStateForSession(e);case 7:if(n.t1=i,!n.t1){n.next=11;break}return n.next=11,this.emulationService.switchSession(e.id);case 11:return n.next=13,this.alertController.create({header:"Done",message:"State for session ".concat(e.name," has been reset."),buttons:[{text:"Close",role:"cancel"}]});case 13:return s=n.sent,n.next=16,s.present();case 16:case"end":return n.stop()}},n,this)}))}},{key:"currentSessionId",get:function(){var e,t;return null!==(e=this.currentSessionOverride)&&void 0!==e?e:null===(t=this.emulationState.getCurrentSession())||void 0===t?void 0:t.id}},{key:"processFile",value:function(e){var t,n;return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function i(){var s,r,o,a;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(/\.(img|rom|bin)$/i.test(e.name)){i.next=2;break}return i.abrupt("return",void this.alertService.errorMessage("Unsupported file suffix. Supported suffixes are .bin, .img and .rom."));case 2:if(!(s=Object(m.a)(e.content))){i.next=10;break}return i.next=6,this.queryName(this.disambiguateSessionName(null!==(n=null===(t=s.metadata)||void 0===t?void 0:t.name)&&void 0!==n?n:e.name));case 6:void 0!==(r=i.sent)&&this.sessionService.addSessionFromImage(s,r),i.next=21;break;case 10:return i.next=12,this.emulationService.cloudpilot;case 12:if(o=i.sent.getRomInfo(e.content)){i.next=15;break}return i.abrupt("return",void this.alertService.errorMessage("Not a valid session file or ROM image."));case 15:if(0!==o.supportedDevices.length){i.next=17;break}return i.abrupt("return",void this.alertService.errorMessage("No supported device for this ROM."));case 17:return i.next=19,this.queryName(this.disambiguateSessionName(e.name));case 19:void 0!==(a=i.sent)&&this.sessionService.addSessionFromRom(e.content,a,o.supportedDevices[0]);case 21:case"end":return i.stop()}},i,this)}))}},{key:"queryName",value:function(e){var t=this;return new Promise(function(n){return Object(d.a)(t,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({header:"Session Name",backdropDismiss:!1,inputs:[{type:"textarea",name:"name",placeholder:"Session name",value:e,label:"Name"}],buttons:[{text:"Cancel",role:"cancel",handler:function(){return n(void 0)}},{text:"Continue",handler:function(e){return n(e.name)}}]});case 2:t.sent.present();case 3:case"end":return t.stop()}},t,this)}))})}},{key:"disambiguateSessionName",value:function(e){for(var t=this.sessionService.getSessions(),n=e,i=1;t.some(function(e){return e.name===n});)n="".concat(e," (").concat(i++,")");return n}}]),t}(),L.\u0275fac=function(e){return new(e||L)(b.Jb(p),b.Jb(h.a),b.Jb(u.a),b.Jb(g.a),b.Jb(v.a),b.Jb(S.a),b.Jb(f.b),b.Jb(l.g))},L.\u0275cmp=b.Db({type:L,selectors:[["app-sessions"]],decls:14,vars:1,consts:[["slot","primary"],[3,"click"],["name","add-outline"],["collapse","condense"],["size","large"],[3,"session","selected","delete","selectItem","edit","save","reset",4,"ngFor","ngForOf"],[3,"session","selected","delete","selectItem","edit","save","reset"]],template:function(e,t){1&e&&(b.Mb(0,"ion-header"),b.Mb(1,"ion-toolbar"),b.Mb(2,"ion-title"),b.gc(3,"Sessions"),b.Lb(),b.Mb(4,"ion-buttons",0),b.Mb(5,"ion-button",1),b.Ub("click",function(){return t.loadFile()}),b.Kb(6,"ion-icon",2),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Mb(7,"ion-content"),b.Mb(8,"ion-header",3),b.Mb(9,"ion-toolbar"),b.Mb(10,"ion-title",4),b.gc(11,"Sessions"),b.Lb(),b.Lb(),b.Lb(),b.Mb(12,"ion-list"),b.fc(13,R,1,2,"app-session-item",5),b.Lb(),b.Lb()),2&e&&(b.zb(13),b.Zb("ngForOf",t.sessions))},directives:[u.f,u.s,u.r,u.d,u.c,u.g,u.e,u.m,a.h,M],styles:[""]}),L)}],I=((C=function t(){e(this,t)}).\u0275mod=b.Hb({type:C}),C.\u0275inj=b.Gb({factory:function(e){return new(e||C)},imports:[[l.i.forChild(F)],l.i]}),C),j=((O=function t(){e(this,t)}).\u0275mod=b.Hb({type:O}),O.\u0275inj=b.Gb({factory:function(e){return new(e||O)},imports:[[a.b,c.a,u.t,I]]}),O)}}])}();