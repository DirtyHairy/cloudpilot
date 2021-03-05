(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"/NlI":function(e,i,t){"use strict";t.r(i),t.d(i,"SessionsPageModule",function(){return O});var s=t("ofXK"),n=t("3Pt+"),o=t("TEn/"),r=t("tyNb"),c=t("mrSG"),a=t("ASsG"),l=t("fXoL"),d=t("bucj"),u=t("xOb2");let m=(()=>{class e{constructor(e,i,t){this.emulationService=e,this.storageService=i,this.loadingController=t,this.sessions=[],this.updateSessionsFromStorage(),this.storageService.sessionChangeEvent.addHandler(this.updateSessionsFromStorage.bind(this))}addSessionFromImage(e,i){var t;return Object(c.a)(this,void 0,void 0,function*(){const s={id:-1,name:i,device:e.deviceId,ram:e.memory.length/1024/1024,rom:"",osVersion:null===(t=null==e?void 0:e.metadata)||void 0===t?void 0:t.osVersion},n=yield this.loadingController.create({message:"Importing..."});yield n.present(),yield this.storageService.addSession(s,e.rom,e.memory,e.savestate),yield this.updateSessionsFromStorage(),yield n.dismiss()})}addSessionFromRom(e,i,t){return Object(c.a)(this,void 0,void 0,function*(){const s={id:-1,name:i,device:t,ram:(yield this.emulationService.cloudpilot).minRamForDevice(t)/1024/1024,rom:""},n=yield this.loadingController.create({message:"Importing..."});yield n.present(),yield this.storageService.addSession(s,e),yield this.updateSessionsFromStorage(),yield n.dismiss()})}getSessions(){return this.sessions}deleteSession(e){return Object(c.a)(this,void 0,void 0,function*(){yield this.storageService.deleteSession(e)})}updateSession(e){return Object(c.a)(this,void 0,void 0,function*(){yield this.storageService.updateSession(e)})}updateSessionsFromStorage(){return Object(c.a)(this,void 0,void 0,function*(){this.sessions=(yield this.storageService.getAllSessions()).sort((e,i)=>e.name.localeCompare(i.name))})}}return e.\u0275fac=function(i){return new(i||e)(l.Qb(d.a),l.Qb(u.b),l.Qb(o.v))},e.\u0275prov=l.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var b=t("shLW"),v=t("hq03"),h=t("Ld/c");let p=(()=>{class e{constructor(){this.onEdit=()=>{},this.onSave=()=>{},this.onDelete=()=>{},this.onReset=()=>{}}ngOnInit(){}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=l.Db({type:e,selectors:[["app-session-context-menu"]],inputs:{onEdit:"onEdit",onSave:"onSave",onDelete:"onDelete",onReset:"onReset"},decls:9,vars:4,consts:[["button","",3,"detail","click"]],template:function(e,i){1&e&&(l.Mb(0,"ion-list"),l.Mb(1,"ion-item",0),l.Ub("click",function(){return i.onEdit()}),l.gc(2," Edit "),l.Lb(),l.Mb(3,"ion-item",0),l.Ub("click",function(){return i.onSave()}),l.gc(4," Save "),l.Lb(),l.Mb(5,"ion-item",0),l.Ub("click",function(){return i.onReset()}),l.gc(6," Reset "),l.Lb(),l.Mb(7,"ion-item",0),l.Ub("click",function(){return i.onDelete()}),l.gc(8," Delete "),l.Lb(),l.Lb()),2&e&&(l.zb(1),l.Zb("detail",!1),l.zb(2),l.Zb("detail",!1),l.zb(2),l.Zb("detail",!1),l.zb(2),l.Zb("detail",!1))},directives:[o.m,o.h],styles:[""]}),e})();var S=t("z9fa");function f(e,i){if(1&e&&(l.Mb(0,"span"),l.gc(1),l.Lb()),2&e){const e=l.Wb();l.zb(1),l.ic(", OS ",e.decodeVersion(null==e.session?null:e.session.osVersion),"")}}let g=(()=>{class e{constructor(e){this.popoverController=e,this.selected=!1,this.delete=new l.o,this.reset=new l.o,this.edit=new l.o,this.save=new l.o,this.selectItem=new l.o}get device(){var e;switch(null===(e=this.session)||void 0===e?void 0:e.device){case S.a.m515:return"Palm m515";case S.a.palmV:return"Palm V";default:throw new Error("bad device ID")}}onContextmenu(e){return Object(c.a)(this,void 0,void 0,function*(){e.stopPropagation(),e.preventDefault();const i=yield this.popoverController.create({component:p,event:e,backdropDismiss:!0,showBackdrop:!1,componentProps:{onEdit:()=>{i.dismiss(),this.edit.emit()},onSave:()=>{i.dismiss(),this.save.emit()},onDelete:()=>{i.dismiss(),this.delete.emit()},onReset:()=>{i.dismiss(),this.reset.emit()}}});i.present()})}decodeVersion(e){if(void 0===e)return"";const i=function(e){return{major:e>>>24&255,minor:e>>>20&15,fix:e>>>16&15,stage:e>>>12&15,build:4095&e}}(e);return`${i.major}.${i.minor}`}}return e.\u0275fac=function(i){return new(i||e)(l.Jb(o.w))},e.\u0275cmp=l.Db({type:e,selectors:[["app-session-item"]],inputs:{session:"session",selected:"selected"},outputs:{delete:"delete",reset:"reset",edit:"edit",save:"save",selectItem:"selectItem"},decls:18,vars:5,consts:[[3,"contextmenu"],["side","start"],["color","primary","icon-only","",3,"click"],["name","create-outline"],["color","secondary","icon-only","",3,"click"],["name","save-outline"],["side","end"],["color","tertiary","icon-only","",3,"click"],["name","attach-outline"],["color","danger","icon-only","",3,"click"],["name","trash-outline"],[3,"color","click"],[4,"ngIf"]],template:function(e,i){1&e&&(l.Mb(0,"ion-item-sliding",0),l.Ub("contextmenu",function(e){return i.onContextmenu(e)}),l.Mb(1,"ion-item-options",1),l.Mb(2,"ion-item-option",2),l.Ub("click",function(){return i.edit.emit(i.session)}),l.Kb(3,"ion-icon",3),l.Lb(),l.Mb(4,"ion-item-option",4),l.Ub("click",function(){return i.save.emit(i.session)}),l.Kb(5,"ion-icon",5),l.Lb(),l.Lb(),l.Mb(6,"ion-item-options",6),l.Mb(7,"ion-item-option",7),l.Ub("click",function(){return i.reset.emit(i.session)}),l.Kb(8,"ion-icon",8),l.Lb(),l.Mb(9,"ion-item-option",9),l.Ub("click",function(){return i.delete.emit(i.session)}),l.Kb(10,"ion-icon",10),l.Lb(),l.Lb(),l.Mb(11,"ion-item",11),l.Ub("click",function(){return i.selectItem.emit()}),l.Mb(12,"ion-label"),l.Mb(13,"h2"),l.gc(14),l.Lb(),l.Mb(15,"p"),l.gc(16),l.fc(17,f,2,1,"span",12),l.Lb(),l.Lb(),l.Lb(),l.Lb()),2&e&&(l.zb(11),l.Zb("color",i.selected?"primary":void 0),l.zb(3),l.hc(null==i.session?null:i.session.name),l.zb(2),l.jc("",i.device," ",null==i.session?null:i.session.ram,"MB RAM"),l.zb(1),l.Zb("ngIf",null==i.session?null:i.session.osVersion))},directives:[o.k,o.j,o.i,o.g,o.h,o.l,s.i],styles:["ion-label[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin-top:.75em}ion-item-option[_ngcontent-%COMP%]{font-size:1.5em}ion-item-sliding[_ngcontent-%COMP%]{cursor:pointer}"]}),e})();function y(e,i){if(1&e){const e=l.Nb();l.Mb(0,"app-session-item",6),l.Ub("delete",function(){l.bc(e);const t=i.$implicit;return l.Wb().deleteSession(t)})("selectItem",function(){l.bc(e);const t=i.$implicit;return l.Wb().launchSession(t)})("edit",function(){l.bc(e);const t=i.$implicit;return l.Wb().editSession(t)})("save",function(){l.bc(e);const t=i.$implicit;return l.Wb().saveSession(t)})("reset",function(){l.bc(e);const t=i.$implicit;return l.Wb().resetSession(t)}),l.Lb()}if(2&e){const e=i.$implicit,t=l.Wb();l.Zb("session",e)("selected",t.currentSessionId===e.id)}}const M=[{path:"",component:(()=>{class e{constructor(e,i,t,s,n,o,r,c){this.sessionService=e,this.fileService=i,this.alertController=t,this.alertService=s,this.emulationService=n,this.emulationState=o,this.storageService=r,this.router=c}get sessions(){return this.sessionService.getSessions().sort((e,i)=>e.name.localeCompare(i.name))}deleteSession(e){return Object(c.a)(this,void 0,void 0,function*(){const i=yield this.alertController.create({header:"Warning",message:`Deleting the session '${e.name}' will remove all associated data. This cannot be undone. Are you sure you want to continue?`,buttons:[{text:"Cancel",role:"cancel"},{text:"Delete",handler:()=>this.sessionService.deleteSession(e)}]});yield i.present()})}editSession(e){return Object(c.a)(this,void 0,void 0,function*(){const i=yield this.queryName(e.name);void 0!==i&&this.sessionService.updateSession(Object.assign(Object.assign({},e),{name:i}))})}loadFile(){this.fileService.openFile(this.processFile.bind(this))}saveSession(e){this.fileService.saveSession(e)}launchSession(e){return Object(c.a)(this,void 0,void 0,function*(){this.currentSessionOverride=e.id,yield this.emulationService.switchSession(e.id),this.currentSessionOverride=void 0,this.router.navigateByUrl("/tab/emulation")})}resetSession(e){var i;return Object(c.a)(this,void 0,void 0,function*(){const t=e.id===(null===(i=this.emulationState.getCurrentSession())||void 0===i?void 0:i.id);t&&(yield this.emulationService.stop()),yield this.storageService.deleteStateForSession(e),t&&(yield this.emulationService.switchSession(e.id));const s=yield this.alertController.create({header:"Done",message:`State for session ${e.name} has been reset.`,buttons:[{text:"Close",role:"cancel"}]});yield s.present()})}get currentSessionId(){var e,i;return null!==(e=this.currentSessionOverride)&&void 0!==e?e:null===(i=this.emulationState.getCurrentSession())||void 0===i?void 0:i.id}processFile(e){var i,t;return Object(c.a)(this,void 0,void 0,function*(){if(!/\.(img|rom|bin)$/i.test(e.name))return void this.alertService.errorMessage("Unsupported file suffix. Supported suffixes are .bin, .img and .rom.");const s=Object(a.a)(e.content);if(s){const n=yield this.queryName(this.disambiguateSessionName(null!==(t=null===(i=s.metadata)||void 0===i?void 0:i.name)&&void 0!==t?t:e.name));void 0!==n&&this.sessionService.addSessionFromImage(s,n)}else{const i=(yield this.emulationService.cloudpilot).getRomInfo(e.content);if(!i)return void this.alertService.errorMessage("Not a valid session file or ROM image.");if(0===i.supportedDevices.length)return void this.alertService.errorMessage("No supported device for this ROM.");const t=yield this.queryName(this.disambiguateSessionName(e.name));void 0!==t&&this.sessionService.addSessionFromRom(e.content,t,i.supportedDevices[0])}})}queryName(e){return new Promise(i=>Object(c.a)(this,void 0,void 0,function*(){(yield this.alertController.create({header:"Session Name",backdropDismiss:!1,inputs:[{type:"textarea",name:"name",placeholder:"Session name",value:e,label:"Name"}],buttons:[{text:"Cancel",role:"cancel",handler:()=>i(void 0)},{text:"Continue",handler:e=>i(e.name)}]})).present()}))}disambiguateSessionName(e){const i=this.sessionService.getSessions();let t=e,s=1;for(;i.some(e=>e.name===t);)t=`${e} (${s++})`;return t}}return e.\u0275fac=function(i){return new(i||e)(l.Jb(m),l.Jb(b.a),l.Jb(o.a),l.Jb(v.a),l.Jb(d.a),l.Jb(h.a),l.Jb(u.b),l.Jb(r.g))},e.\u0275cmp=l.Db({type:e,selectors:[["app-sessions"]],decls:14,vars:1,consts:[["slot","primary"],[3,"click"],["name","add-outline"],["collapse","condense"],["size","large"],[3,"session","selected","delete","selectItem","edit","save","reset",4,"ngFor","ngForOf"],[3,"session","selected","delete","selectItem","edit","save","reset"]],template:function(e,i){1&e&&(l.Mb(0,"ion-header"),l.Mb(1,"ion-toolbar"),l.Mb(2,"ion-title"),l.gc(3,"Sessions"),l.Lb(),l.Mb(4,"ion-buttons",0),l.Mb(5,"ion-button",1),l.Ub("click",function(){return i.loadFile()}),l.Kb(6,"ion-icon",2),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Mb(7,"ion-content"),l.Mb(8,"ion-header",3),l.Mb(9,"ion-toolbar"),l.Mb(10,"ion-title",4),l.gc(11,"Sessions"),l.Lb(),l.Lb(),l.Lb(),l.Mb(12,"ion-list"),l.fc(13,y,1,2,"app-session-item",5),l.Lb(),l.Lb()),2&e&&(l.zb(13),l.Zb("ngForOf",i.sessions))},directives:[o.f,o.s,o.r,o.d,o.c,o.g,o.e,o.m,s.h,g],styles:[""]}),e})()}];let L=(()=>{class e{}return e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(i){return new(i||e)},imports:[[r.i.forChild(M)],r.i]}),e})(),O=(()=>{class e{}return e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(i){return new(i||e)},imports:[[s.b,n.a,o.t,L]]}),e})()}}]);