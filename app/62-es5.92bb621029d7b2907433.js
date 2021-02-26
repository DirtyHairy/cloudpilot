!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"/NlI":function(t,i,r){"use strict";r.r(i),r.d(i,"SessionsPageModule",function(){return I});var s,o,a=r("SVse"),c=r("s7LF"),u=r("sZkV"),l=r("iInd"),d=r("mrSG"),m=r("8Y7J"),b=r("bucj"),v=r("xOb2"),f=((s=function(){function t(n,i,r){e(this,t),this.emulationService=n,this.storageService=i,this.loadingController=r,this.sessions=[],this.updateSessionsFromStorage()}return n(t,[{key:"addSessionFromImage",value:function(e,t){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var i,r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i={id:-1,name:t,device:e.deviceId,ram:e.memory.length/1024/1024,rom:""},n.next=3,this.loadingController.create({message:"Importing..."});case 3:return r=n.sent,n.next=6,r.present();case 6:return n.next=8,this.storageService.addSession(i,e.rom,e.memory,e.savestate);case 8:return n.next=10,this.updateSessionsFromStorage();case 10:return n.next=12,r.dismiss();case 12:case"end":return n.stop()}},n,this)}))}},{key:"addSessionFromRom",value:function(e,t,n){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function i(){var r,s;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.t0=-1,i.t1=t,i.t2=n,i.next=5,this.emulationService.cloudpilot;case 5:return i.t3=i.sent.minRamForDevice(n),i.t4=i.t3/1024,i.t5=i.t4/1024,r={id:i.t0,name:i.t1,device:i.t2,ram:i.t5,rom:""},i.next=11,this.loadingController.create({message:"Importing..."});case 11:return s=i.sent,i.next=14,s.present();case 14:return i.next=16,this.storageService.addSession(r,e);case 16:return i.next=18,this.updateSessionsFromStorage();case 18:return i.next=20,s.dismiss();case 20:case"end":return i.stop()}},i,this)}))}},{key:"getSessions",value:function(){return this.sessions}},{key:"deleteSession",value:function(e){var t;return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=(null===(t=this.emulationService.getCurrentSession())||void 0===t?void 0:t.id)===e.id,!n.t0){n.next=4;break}return n.next=4,this.emulationService.stop();case 4:return n.next=6,this.storageService.deleteSession(e);case 6:this.updateSessionsFromStorage();case 7:case"end":return n.stop()}},n,this)}))}},{key:"updateSession",value:function(e){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.storageService.updateSession(e);case 2:this.updateSessionsFromStorage();case 3:case"end":return t.stop()}},t,this)}))}},{key:"updateSessionsFromStorage",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.storageService.getAllSessions();case 2:this.sessions=e.sent.sort(function(e,t){return e.name.localeCompare(t.name)});case 3:case"end":return e.stop()}},e,this)}))}}]),t}()).\u0275fac=function(e){return new(e||s)(m.Qb(b.a),m.Qb(v.a),m.Qb(u.v))},s.\u0275prov=m.Fb({token:s,factory:s.\u0275fac,providedIn:"root"}),s),p=r("shLW"),h=r("hq03"),g=((o=function(){function t(){e(this,t),this.onEdit=function(){},this.onSave=function(){},this.onDelete=function(){}}return n(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=m.Db({type:o,selectors:[["app-session-context-menu"]],inputs:{onEdit:"onEdit",onSave:"onSave",onDelete:"onDelete"},decls:10,vars:3,consts:[["button","",3,"detail","click"],["name","create-outline","slot","end"],["name","download-outline","slot","end"],["name","trash-outline","slot","end"]],template:function(e,t){1&e&&(m.Mb(0,"ion-list"),m.Mb(1,"ion-item",0),m.Ub("click",function(){return t.onEdit()}),m.gc(2," Edit "),m.Kb(3,"ion-icon",1),m.Lb(),m.Mb(4,"ion-item",0),m.Ub("click",function(){return t.onSave()}),m.gc(5," Save "),m.Kb(6,"ion-icon",2),m.Lb(),m.Mb(7,"ion-item",0),m.Ub("click",function(){return t.onDelete()}),m.gc(8," Delete "),m.Kb(9,"ion-icon",3),m.Lb(),m.Lb()),2&e&&(m.zb(1),m.Zb("detail",!1),m.zb(3),m.Zb("detail",!1),m.zb(3),m.Zb("detail",!1))},directives:[u.m,u.h,u.g],styles:[""]}),o),S=r("z9fa");function k(e,t){if(1&e&&(m.Mb(0,"span"),m.gc(1),m.Lb()),2&e){var n=m.Wb();m.zb(1),m.ic(", OS ",null==n.session?null:n.session.osVersion,"")}}var x,w=((x=function(){function t(n){e(this,t),this.popoverController=n,this.selected=!1,this.delete=new m.o,this.edit=new m.o,this.save=new m.o,this.selectItem=new m.o}return n(t,[{key:"device",get:function(){var e;switch(null===(e=this.session)||void 0===e?void 0:e.device){case S.a.m515:return"Palm m515";case S.a.palmV:return"Palm V";default:throw new Error("bad device ID")}}},{key:"onContextmenu",value:function(e){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.stopPropagation(),e.preventDefault(),t.next=3,this.popoverController.create({component:g,event:e,backdropDismiss:!0,showBackdrop:!1,componentProps:{onEdit:function(){n.dismiss(),i.edit.emit()},onSave:function(){n.dismiss(),i.save.emit()},onDelete:function(){n.dismiss(),i.delete.emit()}}});case 3:(n=t.sent).present();case 5:case"end":return t.stop()}},t,this)}))}}]),t}()).\u0275fac=function(e){return new(e||x)(m.Jb(u.w))},x.\u0275cmp=m.Db({type:x,selectors:[["app-session-item"]],inputs:{session:"session",selected:"selected"},outputs:{delete:"delete",edit:"edit",save:"save",selectItem:"selectItem"},decls:16,vars:5,consts:[[3,"contextmenu"],["side","start"],["color","primary","icon-only","",3,"click"],["name","create-outline"],["color","secondary","icon-only","",3,"click"],["name","download-outline"],["side","end"],["color","danger","icon-only","",3,"click"],["name","trash-outline"],[3,"color","click"],[4,"ngIf"]],template:function(e,t){1&e&&(m.Mb(0,"ion-item-sliding",0),m.Ub("contextmenu",function(e){return t.onContextmenu(e)}),m.Mb(1,"ion-item-options",1),m.Mb(2,"ion-item-option",2),m.Ub("click",function(){return t.edit.emit(t.session)}),m.Kb(3,"ion-icon",3),m.Lb(),m.Mb(4,"ion-item-option",4),m.Ub("click",function(){return t.save.emit(t.session)}),m.Kb(5,"ion-icon",5),m.Lb(),m.Lb(),m.Mb(6,"ion-item-options",6),m.Mb(7,"ion-item-option",7),m.Ub("click",function(){return t.delete.emit(t.session)}),m.Kb(8,"ion-icon",8),m.Lb(),m.Lb(),m.Mb(9,"ion-item",9),m.Ub("click",function(){return t.selectItem.emit()}),m.Mb(10,"ion-label"),m.Mb(11,"h2"),m.gc(12),m.Lb(),m.Mb(13,"p"),m.gc(14),m.fc(15,k,2,1,"span",10),m.Lb(),m.Lb(),m.Lb(),m.Lb()),2&e&&(m.zb(9),m.Zb("color",t.selected?"primary":void 0),m.zb(3),m.hc(null==t.session?null:t.session.name),m.zb(2),m.jc("",t.device," ",null==t.session?null:t.session.ram,"MB RAM"),m.zb(1),m.Zb("ngIf",null==t.session?null:t.session.osVersion))},directives:[u.k,u.j,u.i,u.g,u.h,u.l,a.i],styles:["ion-label[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin-top:.75em}ion-item-option[_ngcontent-%COMP%]{font-size:1.5em}ion-item-sliding[_ngcontent-%COMP%]{cursor:pointer}"]}),x);function y(e,t){if(1&e){var n=m.Nb();m.Mb(0,"app-session-item",6),m.Ub("delete",function(){m.bc(n);var e=t.$implicit;return m.Wb().deleteSession(e)})("selectItem",function(){m.bc(n);var e=t.$implicit;return m.Wb().launchSession(e)})("edit",function(){m.bc(n);var e=t.$implicit;return m.Wb().editSession(e)}),m.Lb()}if(2&e){var i=t.$implicit,r=m.Wb();m.Zb("session",i)("selected",r.currentSessionId===i.id)}}var M,O,R,L=[{path:"",component:(M=function(){function t(n,i,r,s,o,a){e(this,t),this.sessionService=n,this.fileService=i,this.alertController=r,this.alertService=s,this.emulationService=o,this.router=a}return n(t,[{key:"sessions",get:function(){return this.sessionService.getSessions().sort(function(e,t){return e.name.localeCompare(t.name)})}},{key:"deleteSession",value:function(e){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({header:"Warning",message:"Deleting the session '".concat(e.name,"' will remove all associated data. This cannot be undone. Are you sure you want to continue?"),buttons:[{text:"Cancel",role:"cancel"},{text:"Delete",handler:function(){return i.sessionService.deleteSession(e)}}]});case 2:return n=t.sent,t.next=5,n.present();case 5:case"end":return t.stop()}},t,this)}))}},{key:"editSession",value:function(e){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.queryName(e.name);case 2:void 0!==(n=t.sent)&&this.sessionService.updateSession(Object.assign(Object.assign({},e),{name:n}));case 4:case"end":return t.stop()}},t,this)}))}},{key:"loadFile",value:function(){this.fileService.openFile(this.processFile.bind(this))}},{key:"launchSession",value:function(e){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.currentSessionOverride=e.id,t.next=3,this.emulationService.switchSession(e.id);case 3:this.currentSessionOverride=void 0,this.router.navigateByUrl("/tab/emulation");case 5:case"end":return t.stop()}},t,this)}))}},{key:"currentSessionId",get:function(){var e,t;return null!==(e=this.currentSessionOverride)&&void 0!==e?e:null===(t=this.emulationService.getCurrentSession())||void 0===t?void 0:t.id}},{key:"processFile",value:function(e){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n,i,r,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(/\.(img|rom|bin)$/i.test(e.name)){t.next=2;break}return t.abrupt("return",void this.alertService.errorMessage("Unsupported file suffix. Supported suffixes are .bin, .img and .rom."));case 2:if(!(n=this.fileService.parseSessionImage(e.content))){t.next=10;break}return t.next=6,this.queryName(e.name);case 6:void 0!==(i=t.sent)&&this.sessionService.addSessionFromImage(n,i),t.next=21;break;case 10:return t.next=12,this.emulationService.cloudpilot;case 12:if(r=t.sent.getRomInfo(e.content)){t.next=15;break}return t.abrupt("return",void this.alertService.errorMessage("Not a valid session file or ROM image."));case 15:if(0!==r.supportedDevices.length){t.next=17;break}return t.abrupt("return",void this.alertService.errorMessage("No supported device for this ROM."));case 17:return t.next=19,this.queryName(e.name);case 19:void 0!==(s=t.sent)&&this.sessionService.addSessionFromRom(e.content,s,r.supportedDevices[0]);case 21:case"end":return t.stop()}},t,this)}))}},{key:"queryName",value:function(e){var t=this;return new Promise(function(n){return Object(d.a)(t,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({header:"Session Name",inputs:[{type:"textarea",name:"name",placeholder:"Session name",value:e,label:"Name"}],buttons:[{text:"Cancel",role:"cancel",handler:function(){return n(void 0)}},{text:"Continue",handler:function(e){return n(e.name)}}]});case 2:t.sent.present();case 3:case"end":return t.stop()}},t,this)}))})}}]),t}(),M.\u0275fac=function(e){return new(e||M)(m.Jb(f),m.Jb(p.a),m.Jb(u.a),m.Jb(h.a),m.Jb(b.a),m.Jb(l.g))},M.\u0275cmp=m.Db({type:M,selectors:[["app-sessions"]],decls:14,vars:1,consts:[["slot","primary"],[3,"click"],["name","add-outline"],["collapse","condense"],["size","large"],[3,"session","selected","delete","selectItem","edit",4,"ngFor","ngForOf"],[3,"session","selected","delete","selectItem","edit"]],template:function(e,t){1&e&&(m.Mb(0,"ion-header"),m.Mb(1,"ion-toolbar"),m.Mb(2,"ion-title"),m.gc(3,"Sessions"),m.Lb(),m.Mb(4,"ion-buttons",0),m.Mb(5,"ion-button",1),m.Ub("click",function(){return t.loadFile()}),m.Kb(6,"ion-icon",2),m.Lb(),m.Lb(),m.Lb(),m.Lb(),m.Mb(7,"ion-content"),m.Mb(8,"ion-header",3),m.Mb(9,"ion-toolbar"),m.Mb(10,"ion-title",4),m.gc(11,"Sessions"),m.Lb(),m.Lb(),m.Lb(),m.Mb(12,"ion-list"),m.fc(13,y,1,2,"app-session-item",5),m.Lb(),m.Lb()),2&e&&(m.zb(13),m.Zb("ngForOf",t.sessions))},directives:[u.f,u.s,u.r,u.d,u.c,u.g,u.e,u.m,a.h,w],styles:[""]}),M)}],C=((R=function t(){e(this,t)}).\u0275mod=m.Hb({type:R}),R.\u0275inj=m.Gb({factory:function(e){return new(e||R)},imports:[[l.i.forChild(L)],l.i]}),R),I=((O=function t(){e(this,t)}).\u0275mod=m.Hb({type:O}),O.\u0275inj=m.Gb({factory:function(e){return new(e||O)},imports:[[a.b,c.a,u.t,C]]}),O)}}])}();