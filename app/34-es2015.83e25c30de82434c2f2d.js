(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{qCuA:function(o,e,t){"use strict";t.r(e),t.d(e,"ion_popover",function(){return m});var i=t("A36C"),r=t("Zgba"),n=(t("QPqR"),t("z1RL")),s=t("S0TR"),p=(t("B4Jq"),t("oLNq")),a=t("74mu"),c=t("ZaV5");const l=(o,e)=>{let t="top",i="left";const r=o.querySelector(".popover-content"),s=r.getBoundingClientRect(),p=s.width,a=s.height,c=o.ownerDocument.defaultView.innerWidth,l=o.ownerDocument.defaultView.innerHeight,h=e&&e.target&&e.target.getBoundingClientRect(),v=null!=h&&"top"in h?h.top:l/2-a/2,b=null!=h&&"left"in h?h.left:c/2,m=h&&h.width||0,f=h&&h.height||0,u=o.querySelector(".popover-arrow"),x=u.getBoundingClientRect(),g=x.width,w=x.height;null==h&&(u.style.display="none");const y={top:v+f,left:b+m/2-g/2},k={top:v+f+(w-1),left:b+m/2-p/2};let j=!1,O=!1;k.left<d+25?(j=!0,k.left=d):p+d+k.left+25>c&&(O=!0,k.left=c-p-d,i="right"),v+f+a>l&&v-a>0?(y.top=v-(w+1),k.top=v-a-(w-1),o.className=o.className+" popover-bottom",t="bottom"):v+f+a>l&&(r.style.bottom=d+"%"),u.style.top=y.top+"px",u.style.left=y.left+"px",r.style.top=k.top+"px",r.style.left=k.left+"px",j&&(r.style.left=`calc(${k.left}px + var(--ion-safe-area-left, 0px))`),O&&(r.style.left=`calc(${k.left}px - var(--ion-safe-area-right, 0px))`),r.style.transformOrigin=t+" "+i;const D=Object(n.a)(),P=Object(n.a)(),E=Object(n.a)();return P.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),E.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),D.addElement(o).easing("ease").duration(100).addAnimation([P,E])},d=5,h=o=>{const e=Object(n.a)(),t=Object(n.a)(),i=Object(n.a)();return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),e.addElement(o).easing("ease").duration(500).addAnimation([t,i])},v=(o,e)=>{const t=o.ownerDocument,i="rtl"===t.dir;let r="top",s=i?"right":"left";const p=o.querySelector(".popover-content"),a=p.getBoundingClientRect(),c=a.width,l=a.height,d=t.defaultView.innerWidth,h=t.defaultView.innerHeight,v=e&&e.target&&e.target.getBoundingClientRect(),b=null!=v&&"bottom"in v?v.bottom:h/2-l/2,m=v&&v.height||0,f={top:b,left:null!=v&&"left"in v?i?v.left-c+v.width:v.left:d/2-c/2};f.left<12?(f.left=12,s="left"):c+12+f.left>d&&(f.left=d-c-12,s="right"),b+m+l>h&&b-l>0?(f.top=b-l-m,o.className=o.className+" popover-bottom",r="bottom"):b+m+l>h&&(p.style.bottom="12px");const u=Object(n.a)(),x=Object(n.a)(),g=Object(n.a)(),w=Object(n.a)(),y=Object(n.a)();return x.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),g.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),w.addElement(p).beforeStyles({top:`${f.top}px`,left:`${f.left}px`,"transform-origin":`${r} ${s}`}).fromTo("transform","scale(0.001)","scale(1)"),y.addElement(o.querySelector(".popover-viewport")).fromTo("opacity",.01,1),u.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([x,g,w,y])},b=o=>{const e=Object(n.a)(),t=Object(n.a)(),i=Object(n.a)();return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),e.addElement(o).easing("ease").duration(500).addAnimation([t,i])},m=class{constructor(o){Object(i.o)(this,o),this.didPresent=Object(i.g)(this,"ionPopoverDidPresent",7),this.willPresent=Object(i.g)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(i.g)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(i.g)(this,"ionPopoverDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=o=>{o.stopPropagation(),o.preventDefault(),this.dismiss()},this.onBackdropTap=()=>{this.dismiss(void 0,p.a)},this.onLifecycle=o=>{const e=this.usersElement,t=f[o.type];if(e&&t){const i=new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:o.detail});e.dispatchEvent(i)}}}connectedCallback(){Object(p.f)(this.el)}async present(){if(this.presented)return;const o=this.el.querySelector(".popover-content");if(!o)throw new Error("container is undefined");const e=Object.assign(Object.assign({},this.componentProps),{popover:this.el});return this.usersElement=await Object(c.a)(this.delegate,o,this.component,["popover-viewport",this.el["s-sc"]],e),await Object(s.f)(this.usersElement),Object(p.e)(this,"popoverEnter",l,v,this.event)}async dismiss(o,e){const t=await Object(p.g)(this,o,e,"popoverLeave",h,b,this.event);return t&&await Object(c.b)(this.delegate,this.usersElement),t}onDidDismiss(){return Object(p.h)(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return Object(p.h)(this.el,"ionPopoverWillDismiss")}render(){const o=Object(r.b)(this),{onLifecycle:e}=this;return Object(i.j)(i.c,{"aria-modal":"true","no-router":!0,tabindex:"-1",style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign(Object.assign({},Object(a.b)(this.cssClass)),{[o]:!0,"popover-translucent":this.translucent}),onIonPopoverDidPresent:e,onIonPopoverWillPresent:e,onIonPopoverWillDismiss:e,onIonPopoverDidDismiss:e,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(i.j)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(i.j)("div",{tabindex:"0"}),Object(i.j)("div",{class:"popover-wrapper ion-overlay-wrapper"},Object(i.j)("div",{class:"popover-arrow"}),Object(i.j)("div",{class:"popover-content"})),Object(i.j)("div",{tabindex:"0"}))}get el(){return Object(i.k)(this)}},f={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};m.style={ios:'.sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:100ms;transition-delay:100ms}"}}}]);