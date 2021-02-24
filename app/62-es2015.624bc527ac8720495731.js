(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"/NlI":function(e,i,t){"use strict";t.r(i),t.d(i,"SessionsPageModule",function(){return M});var n=t("SVse"),s=t("s7LF"),o=t("sZkV"),r=t("iInd"),c=t("mrSG"),l=t("8Y7J"),a=t("bucj"),d=t("xOb2");let u=(()=>{class e{constructor(e,i,t){this.emulationService=e,this.storageService=i,this.loadingController=t,this.sessions=[],this.updateSessionsFromStorage()}addSessionFromImage(e,i){return Object(c.a)(this,void 0,void 0,function*(){const t={id:-1,name:i,device:e.deviceId,ram:e.memory.length/1024/1024,rom:""},n=yield this.loadingController.create({message:"Importing..."});yield n.present(),yield this.storageService.addSession(t,e.rom,e.memory,e.savestate),yield this.updateSessionsFromStorage(),yield n.dismiss()})}addSessionFromRom(e,i,t){return Object(c.a)(this,void 0,void 0,function*(){const n={id:-1,name:i,device:t,ram:(yield this.emulationService.cloudpilot).minRamForDevice(t)/1024/1024,rom:""},s=yield this.loadingController.create({message:"Importing..."});yield s.present(),yield this.storageService.addSession(n,e),yield this.updateSessionsFromStorage(),yield s.dismiss()})}getSessions(){return this.sessions}deleteSession(e){return Object(c.a)(this,void 0,void 0,function*(){yield this.storageService.deleteSession(e),this.updateSessionsFromStorage()})}updateSession(e){return Object(c.a)(this,void 0,void 0,function*(){yield this.storageService.updateSession(e),this.updateSessionsFromStorage()})}updateSessionsFromStorage(){return Object(c.a)(this,void 0,void 0,function*(){this.sessions=(yield this.storageService.getAllSessions()).sort((e,i)=>e.name.localeCompare(i.name))})}}return e.\u0275fac=function(i){return new(i||e)(l.Qb(a.a),l.Qb(d.a),l.Qb(o.v))},e.\u0275prov=l.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var m=t("shLW"),b=t("hq03");let v=(()=>{class e{constructor(){this.onEdit=()=>{},this.onSave=()=>{},this.onDelete=()=>{}}ngOnInit(){}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=l.Db({type:e,selectors:[["app-session-context-menu"]],inputs:{onEdit:"onEdit",onSave:"onSave",onDelete:"onDelete"},decls:10,vars:3,consts:[["button","",3,"detail","click"],["name","create-outline","slot","end"],["name","download-outline","slot","end"],["name","trash-outline","slot","end"]],template:function(e,i){1&e&&(l.Mb(0,"ion-list"),l.Mb(1,"ion-item",0),l.Ub("click",function(){return i.onEdit()}),l.fc(2," Edit "),l.Kb(3,"ion-icon",1),l.Lb(),l.Mb(4,"ion-item",0),l.Ub("click",function(){return i.onSave()}),l.fc(5," Save "),l.Kb(6,"ion-icon",2),l.Lb(),l.Mb(7,"ion-item",0),l.Ub("click",function(){return i.onDelete()}),l.fc(8," Delete "),l.Kb(9,"ion-icon",3),l.Lb(),l.Lb()),2&e&&(l.zb(1),l.Zb("detail",!1),l.zb(3),l.Zb("detail",!1),l.zb(3),l.Zb("detail",!1))},directives:[o.m,o.h,o.g],styles:[""]}),e})();var h=t("z9fa");function p(e,i){if(1&e&&(l.Mb(0,"span"),l.fc(1),l.Lb()),2&e){const e=l.Wb();l.zb(1),l.hc(", OS ",null==e.session?null:e.session.osVersion,"")}}let S=(()=>{class e{constructor(e){this.popoverController=e,this.selected=!1,this.delete=new l.o,this.edit=new l.o,this.save=new l.o,this.selectItem=new l.o}get device(){var e;switch(null===(e=this.session)||void 0===e?void 0:e.device){case h.a.m515:return"Palm m515";case h.a.palmV:return"Palm V";default:throw new Error("bad device ID")}}onContextmenu(e){return Object(c.a)(this,void 0,void 0,function*(){e.stopPropagation(),e.preventDefault();const i=yield this.popoverController.create({component:v,event:e,backdropDismiss:!0,showBackdrop:!1,componentProps:{onEdit:()=>{i.dismiss(),this.edit.emit()},onSave:()=>{i.dismiss(),this.save.emit()},onDelete:()=>{i.dismiss(),this.delete.emit()}}});i.present()})}}return e.\u0275fac=function(i){return new(i||e)(l.Jb(o.w))},e.\u0275cmp=l.Db({type:e,selectors:[["app-session-item"]],inputs:{session:"session",selected:"selected"},outputs:{delete:"delete",edit:"edit",save:"save",selectItem:"selectItem"},decls:16,vars:5,consts:[[3,"contextmenu"],["side","start"],["color","primary","icon-only","",3,"click"],["name","create-outline"],["color","secondary","icon-only","",3,"click"],["name","download-outline"],["side","end"],["color","danger","icon-only","",3,"click"],["name","trash-outline"],[3,"color","click"],[4,"ngIf"]],template:function(e,i){1&e&&(l.Mb(0,"ion-item-sliding",0),l.Ub("contextmenu",function(e){return i.onContextmenu(e)}),l.Mb(1,"ion-item-options",1),l.Mb(2,"ion-item-option",2),l.Ub("click",function(){return i.edit.emit(i.session)}),l.Kb(3,"ion-icon",3),l.Lb(),l.Mb(4,"ion-item-option",4),l.Ub("click",function(){return i.save.emit(i.session)}),l.Kb(5,"ion-icon",5),l.Lb(),l.Lb(),l.Mb(6,"ion-item-options",6),l.Mb(7,"ion-item-option",7),l.Ub("click",function(){return i.delete.emit(i.session)}),l.Kb(8,"ion-icon",8),l.Lb(),l.Lb(),l.Mb(9,"ion-item",9),l.Ub("click",function(){return i.selectItem.emit()}),l.Mb(10,"ion-label"),l.Mb(11,"h2"),l.fc(12),l.Lb(),l.Mb(13,"p"),l.fc(14),l.ec(15,p,2,1,"span",10),l.Lb(),l.Lb(),l.Lb(),l.Lb()),2&e&&(l.zb(9),l.Zb("color",i.selected?"primary":void 0),l.zb(3),l.gc(null==i.session?null:i.session.name),l.zb(2),l.ic("",i.device," ",null==i.session?null:i.session.ram,"MB RAM"),l.zb(1),l.Zb("ngIf",null==i.session?null:i.session.osVersion))},directives:[o.k,o.j,o.i,o.g,o.h,o.l,n.i],styles:["ion-label[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin-top:.75em}ion-item-option[_ngcontent-%COMP%]{font-size:1.5em}ion-item-sliding[_ngcontent-%COMP%]{cursor:pointer}"]}),e})();function f(e,i){if(1&e){const e=l.Nb();l.Mb(0,"app-session-item",6),l.Ub("delete",function(){l.bc(e);const t=i.$implicit;return l.Wb().deleteSession(t)})("selectItem",function(){l.bc(e);const t=i.$implicit;return l.Wb().launchSession(t)})("edit",function(){l.bc(e);const t=i.$implicit;return l.Wb().editSession(t)}),l.Lb()}if(2&e){const e=i.$implicit,t=l.Wb();l.Zb("session",e)("selected",t.currentSessionId===e.id)}}const g=[{path:"",component:(()=>{class e{constructor(e,i,t,n,s,o){this.sessionService=e,this.fileService=i,this.alertController=t,this.alertService=n,this.emulationService=s,this.router=o}get sessions(){return this.sessionService.getSessions().sort((e,i)=>e.name.localeCompare(i.name))}deleteSession(e){return Object(c.a)(this,void 0,void 0,function*(){const i=yield this.alertController.create({header:"Warning",message:`Deleting the session '${e.name}' will remove all associated data. This cannot be undone. Are you sure you want to continue?`,buttons:[{text:"Cancel",role:"cancel"},{text:"Delete",handler:()=>this.sessionService.deleteSession(e)}]});yield i.present()})}editSession(e){return Object(c.a)(this,void 0,void 0,function*(){const i=yield this.queryName(e.name);void 0!==i&&this.sessionService.updateSession(Object.assign(Object.assign({},e),{name:i}))})}loadFile(){this.fileService.openFile(this.processFile.bind(this))}launchSession(e){return Object(c.a)(this,void 0,void 0,function*(){this.currentSessionOverride=e.id,yield this.emulationService.switchSession(e.id),this.currentSessionOverride=void 0,this.router.navigateByUrl("/tab/emulation")})}get currentSessionId(){var e,i;return null!==(e=this.currentSessionOverride)&&void 0!==e?e:null===(i=this.emulationService.getCurrentSession())||void 0===i?void 0:i.id}processFile(e){return Object(c.a)(this,void 0,void 0,function*(){if(!/\.(img|rom|bin)$/i.test(e.name))return void this.alertService.errorMessage("Unsupported file suffix. Supported suffixes are .bin, .img and .rom.");const i=this.fileService.parseSessionImage(e.content);if(i){const t=yield this.queryName(e.name);void 0!==t&&this.sessionService.addSessionFromImage(i,t)}else{const i=(yield this.emulationService.cloudpilot).getRomInfo(e.content);if(!i)return void this.alertService.errorMessage("Not a valid session file or ROM image.");if(0===i.supportedDevices.length)return void this.alertService.errorMessage("No supported device for this ROM.");const t=yield this.queryName(e.name);void 0!==t&&this.sessionService.addSessionFromRom(e.content,t,i.supportedDevices[0])}})}queryName(e){return new Promise(i=>Object(c.a)(this,void 0,void 0,function*(){(yield this.alertController.create({header:"Session Name",inputs:[{type:"textarea",name:"name",placeholder:"Session name",value:e,label:"Name"}],buttons:[{text:"Cancel",role:"cancel",handler:()=>i(void 0)},{text:"Continue",handler:e=>i(e.name)}]})).present()}))}}return e.\u0275fac=function(i){return new(i||e)(l.Jb(u),l.Jb(m.a),l.Jb(o.a),l.Jb(b.a),l.Jb(a.a),l.Jb(r.g))},e.\u0275cmp=l.Db({type:e,selectors:[["app-sessions"]],decls:14,vars:1,consts:[["slot","primary"],[3,"click"],["name","add-outline"],["collapse","condense"],["size","large"],[3,"session","selected","delete","selectItem","edit",4,"ngFor","ngForOf"],[3,"session","selected","delete","selectItem","edit"]],template:function(e,i){1&e&&(l.Mb(0,"ion-header"),l.Mb(1,"ion-toolbar"),l.Mb(2,"ion-title"),l.fc(3,"Sessions"),l.Lb(),l.Mb(4,"ion-buttons",0),l.Mb(5,"ion-button",1),l.Ub("click",function(){return i.loadFile()}),l.Kb(6,"ion-icon",2),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Mb(7,"ion-content"),l.Mb(8,"ion-header",3),l.Mb(9,"ion-toolbar"),l.Mb(10,"ion-title",4),l.fc(11,"Sessions"),l.Lb(),l.Lb(),l.Lb(),l.Mb(12,"ion-list"),l.ec(13,f,1,2,"app-session-item",5),l.Lb(),l.Lb()),2&e&&(l.zb(13),l.Zb("ngForOf",i.sessions))},directives:[o.f,o.s,o.r,o.d,o.c,o.g,o.e,o.m,n.h,S],styles:[""]}),e})()}];let y=(()=>{class e{}return e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(i){return new(i||e)},imports:[[r.i.forChild(g)],r.i]}),e})(),M=(()=>{class e{}return e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(i){return new(i||e)},imports:[[n.b,s.a,o.t,y]]}),e})()}}]);