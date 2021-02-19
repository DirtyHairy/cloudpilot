!function(){function e(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"6aA7":function(n,o,r){"use strict";r.r(o),r.d(o,"EmulationPageModule",function(){return w});var a,c,u,s=r("SVse"),l=r("iInd"),h=r("mrSG"),f=r("8Y7J"),m=r("bucj"),v=r("sZkV"),d=["canvas"],b=[{path:"",component:(a=function(){function n(e){var i=this;t(this,n),this.emulationService=e,this.onNewFrame=function(e){i.canvasRef.nativeElement.getContext("2d").drawImage(e,0,0,480,480)}}var o,r,a;return o=n,(r=[{key:"ngAfterViewInit",value:function(){var e=this.canvasRef.nativeElement.getContext("2d");e.fillStyle="#aaa",e.rect(0,0,this.canvasWidth,this.canvasHeight),e.fill(),e.imageSmoothingEnabled=!1,this.drawSilkscreen()}},{key:"canvasWidth",get:function(){return 480}},{key:"canvasHeight",get:function(){return 750}},{key:"handeMouseEvent",value:function(n){var t,i=this.eventToPalmCoordinates(n);1&n.buttons?i&&(t=this.emulationService).handlePointerMove.apply(t,e(i)):this.emulationService.handlePointerUp()}},{key:"handleTouchEvent",value:function(n){if(n.touches.length>0){var t,i=this.eventToPalmCoordinates(n.touches.item(0));i&&(t=this.emulationService).handlePointerMove.apply(t,e(i))}else this.emulationService.handlePointerUp();n.preventDefault()}},{key:"ionViewDidEnter",value:function(){this.emulationService.newFrame.addHandler(this.onNewFrame),this.emulationService.resume()}},{key:"ionViewWillLeave",value:function(){this.emulationService.pause(),this.emulationService.newFrame.removeHandler(this.onNewFrame)}},{key:"drawSilkscreen",value:function(){return Object(h.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var n,t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Image,e.next=3,new Promise(function(e,t){n.onload=function(){return e()},n.onerror=function(){return t()},n.src="assets/silkscreen.png"});case 3:(t=this.canvasRef.nativeElement.getContext("2d")).imageSmoothingEnabled=!0,t.imageSmoothingQuality="high",t.drawImage(n,0,480,480,180),t.imageSmoothingEnabled=!1;case 5:case"end":return e.stop()}},e,this)}))}},{key:"eventToPalmCoordinates",value:function(e){var n=this.canvasRef.nativeElement.getBoundingClientRect(),t=Math.floor((e.clientX-n.left-5)/(n.width-10)*160),i=Math.floor((e.clientY-n.top-5)/(n.height-10)*250);if(!(t<0||t>=160||i<0||i>=220))return[t,i]}}])&&i(o.prototype,r),a&&i(o,a),n}(),a.\u0275fac=function(e){return new(e||a)(f.Jb(m.a))},a.\u0275cmp=f.Db({type:a,selectors:[["app-emulation"]],viewQuery:function(e,n){var t;1&e&&f.jc(d,1),2&e&&f.ac(t=f.Vb())&&(n.canvasRef=t.first)},decls:18,vars:2,consts:[["slot","end"],["name","power-outline"],["name","add-outline"],["slot","start"],["name","ellipsis-vertical-outline"],["name","checkmark-circle-outline"],[1,"container"],[3,"width","height","mousedown","mouseup","mousemove","touchstart","touchmove","touchend","touchcancel"],["canvas",""]],template:function(e,n){1&e&&(f.Mb(0,"ion-header"),f.Mb(1,"ion-toolbar"),f.Mb(2,"ion-title"),f.fc(3,"Emulator"),f.Lb(),f.Mb(4,"ion-buttons",0),f.Mb(5,"ion-button"),f.Kb(6,"ion-icon",1),f.Lb(),f.Mb(7,"ion-button"),f.Kb(8,"ion-icon",2),f.Lb(),f.Lb(),f.Mb(9,"ion-buttons",3),f.Mb(10,"ion-button"),f.Kb(11,"ion-icon",4),f.Lb(),f.Mb(12,"ion-button"),f.Kb(13,"ion-icon",5),f.Lb(),f.Lb(),f.Lb(),f.Lb(),f.Mb(14,"ion-content"),f.Mb(15,"div",6),f.Mb(16,"canvas",7,8),f.Ub("mousedown",function(e){return n.handeMouseEvent(e)})("mouseup",function(e){return n.handeMouseEvent(e)})("mousemove",function(e){return n.handeMouseEvent(e)})("touchstart",function(e){return n.handleTouchEvent(e)})("touchmove",function(e){return n.handleTouchEvent(e)})("touchend",function(e){return n.handleTouchEvent(e)})("touchcancel",function(e){return n.handleTouchEvent(e)}),f.Lb(),f.Lb(),f.Lb()),2&e&&(f.zb(16),f.Zb("width",n.canvasWidth)("height",n.canvasHeight))},directives:[v.f,v.s,v.r,v.d,v.c,v.g,v.e],styles:["ion-title[_ngcontent-%COMP%]{text-align:center}.container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center}canvas[_ngcontent-%COMP%]{max-width:100%;max-height:100%;padding:5px}"]}),a)}],p=((c=function e(){t(this,e)}).\u0275mod=f.Hb({type:c}),c.\u0275inj=f.Gb({factory:function(e){return new(e||c)},imports:[[l.i.forChild(b)],l.i]}),c),g=r("s7LF"),w=((u=function e(){t(this,e)}).\u0275mod=f.Hb({type:u}),u.\u0275inj=f.Gb({factory:function(e){return new(e||u)},imports:[[s.b,g.a,v.t,p]]}),u)}}])}();