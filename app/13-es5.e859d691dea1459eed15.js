!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"07hj":function(t,o,i){"use strict";i.r(o),i.d(o,"SettingsPageModule",function(){return k});var r,s,c,a=i("3Pt+"),u=i("ofXK"),b=i("TEn/"),l=i("tyNb"),p=i("mrSG"),f=i("7yca"),m=i("fXoL"),v=i("ZW/x"),h=i("ijD4"),d=[{path:"",component:(r=function(){function t(n,o){e(this,t),this.modalController=n,this.kvsService=o}var o,i,r;return o=t,(i=[{key:"ngOnInit",value:function(){this.createFormGroup()}},{key:"showHelp",value:function(){return Object(p.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:f.a,componentProps:{url:"assets/doc/settings.md"}});case 2:return n=e.sent,e.next=5,n.present();case 5:case"end":return e.stop()}},e,this)}))}},{key:"version",get:function(){return"77af3d7"}},{key:"ionViewWillLeave",value:function(){this.kvsService.kvs.volume=this.formGroup.get("volume").value}},{key:"createFormGroup",value:function(){this.formGroup=new a.c({volume:new a.a(this.kvsService.kvs.volume)})}}])&&n(o.prototype,i),r&&n(o,r),t}(),r.\u0275fac=function(e){return new(e||r)(m.Jb(b.z),m.Jb(v.a))},r.\u0275cmp=m.Db({type:r,selectors:[["app-settings"]],decls:20,vars:3,consts:[[3,"translucent"],["slot","secondary"],[3,"click"],["name","help-outline"],["collapse","condense"],["size","large"],[3,"formGroup"],["lines","inset"],["min","0","max","1","step","0.1","formControlName","volume"],[1,"version"]],template:function(e,n){1&e&&(m.Mb(0,"ion-header",0),m.Mb(1,"ion-toolbar"),m.Mb(2,"ion-title"),m.hc(3,"Settings"),m.Lb(),m.Mb(4,"ion-buttons",1),m.Mb(5,"ion-button",2),m.Ub("click",function(){return n.showHelp()}),m.Kb(6,"ion-icon",3),m.Lb(),m.Kb(7,"app-pwa-prompt"),m.Lb(),m.Lb(),m.Lb(),m.Mb(8,"ion-content"),m.Mb(9,"ion-header",4),m.Mb(10,"ion-toolbar"),m.Mb(11,"ion-title",5),m.hc(12,"Settings"),m.Lb(),m.Lb(),m.Lb(),m.Mb(13,"form",6),m.Mb(14,"ion-item",7),m.Mb(15,"ion-label"),m.hc(16,"Volume"),m.Lb(),m.Kb(17,"ion-range",8),m.Lb(),m.Lb(),m.Mb(18,"div",9),m.hc(19),m.Lb(),m.Lb()),2&e&&(m.Zb("translucent",!0),m.zb(13),m.Zb("formGroup",n.formGroup),m.zb(6),m.jc("cloudpilot version ",n.version,""))},directives:[b.f,b.v,b.u,b.d,b.c,b.g,h.a,b.e,a.m,a.j,a.d,b.i,b.m,b.o,b.B,a.i,a.b],styles:[".version[_ngcontent-%COMP%]{position:absolute;width:100%;bottom:1em;text-align:center;font-size:.75em}"]}),r)}],w=((s=function n(){e(this,n)}).\u0275fac=function(e){return new(e||s)},s.\u0275mod=m.Hb({type:s}),s.\u0275inj=m.Gb({imports:[[l.i.forChild(d)],l.i]}),s),g=i("vy64"),k=((c=function n(){e(this,n)}).\u0275fac=function(e){return new(e||c)},c.\u0275mod=m.Hb({type:c}),c.\u0275inj=m.Gb({imports:[[u.b,a.e,b.w,w,g.a,a.e,a.k]]}),c)}}])}();