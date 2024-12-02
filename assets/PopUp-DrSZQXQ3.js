import{g as E,b as h,d as y,ab as V,p as x,y as R,r as O,am as M,L as W,w,a as T,N as q,D as I,ak as N,ae as U,e as j,ac as H,af as X,b6 as Y,b7 as z,ag as Q,f as G,h as J,i as K,Q as Z,R as _,ah as ee,ad as te,ai as ae,bb as oe,bc as ne,aj as se,bf as ie,bg as re,X as le,$ as b,a6 as k,a1 as C,a0 as ce,a3 as P,a4 as ue,a5 as S,bs as de}from"./index-BlP6wHXQ.js";import{m as fe,V as B}from"./VOverlay-DbADL1EJ.js";import{a as p,d as me,s as D,c as ge,g as ve,n as he,b as ye,f as pe}from"./forwardRefs-BAZD3Qkn.js";import"./transition-DPKU98-D.js";const be=x({target:[Object,Array]},"v-dialog-transition"),Pe=E()({name:"VDialogTransition",props:be(),setup(e,r){let{slots:o}=r;const i={onBeforeEnter(t){t.style.pointerEvents="none",t.style.visibility="hidden"},async onEnter(t,c){await new Promise(s=>requestAnimationFrame(s)),await new Promise(s=>requestAnimationFrame(s)),t.style.visibility="";const{x:a,y:l,sx:d,sy:f,speed:n}=A(e.target,t),u=p(t,[{transform:`translate(${a}px, ${l}px) scale(${d}, ${f})`,opacity:0},{}],{duration:225*n,easing:me});L(t)?.forEach(s=>{p(s,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*n,easing:D})}),u.finished.then(()=>c())},onAfterEnter(t){t.style.removeProperty("pointer-events")},onBeforeLeave(t){t.style.pointerEvents="none"},async onLeave(t,c){await new Promise(s=>requestAnimationFrame(s));const{x:a,y:l,sx:d,sy:f,speed:n}=A(e.target,t);p(t,[{},{transform:`translate(${a}px, ${l}px) scale(${d}, ${f})`,opacity:0}],{duration:125*n,easing:ge}).finished.then(()=>c()),L(t)?.forEach(s=>{p(s,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*n,easing:D})})},onAfterLeave(t){t.style.removeProperty("pointer-events")}};return()=>e.target?h(V,y({name:"dialog-transition"},i,{css:!1}),o):h(V,{name:"dialog-transition"},o)}});function L(e){const r=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")?.children;return r&&[...r]}function A(e,r){const o=ve(e),i=he(r),[t,c]=getComputedStyle(r).transformOrigin.split(" ").map(F=>parseFloat(F)),[a,l]=getComputedStyle(r).getPropertyValue("--v-overlay-anchor-origin").split(" ");let d=o.left+o.width/2;a==="left"||l==="left"?d-=o.width/2:(a==="right"||l==="right")&&(d+=o.width/2);let f=o.top+o.height/2;a==="top"||l==="top"?f-=o.height/2:(a==="bottom"||l==="bottom")&&(f+=o.height/2);const n=o.width/i.width,u=o.height/i.height,s=Math.max(1,n,u),m=n/s||0,v=u/s||0,g=i.width*i.height/(window.innerWidth*window.innerHeight),$=g>.12?Math.min(1.5,(g-.12)*10+1):1;return{x:d-(t+i.left),y:f-(c+i.top),sx:m,sy:v,speed:$}}const Ee=x({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...fe({origin:"center center",scrollStrategy:"block",transition:{component:Pe},zIndex:2400})},"VDialog"),xe=E()({name:"VDialog",props:Ee(),emits:{"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,r){let{emit:o,slots:i}=r;const t=R(e,"modelValue"),{scopeId:c}=ye(),a=O();function l(n){const u=n.relatedTarget,s=n.target;if(u!==s&&a.value?.contentEl&&a.value?.globalTop&&![document,a.value.contentEl].includes(s)&&!a.value.contentEl.contains(s)){const m=q(a.value.contentEl);if(!m.length)return;const v=m[0],g=m[m.length-1];u===v?g.focus():v.focus()}}M(()=>{document.removeEventListener("focusin",l)}),W&&w(()=>t.value&&e.retainFocus,n=>{n?document.addEventListener("focusin",l):document.removeEventListener("focusin",l)},{immediate:!0});function d(){o("afterEnter"),a.value?.contentEl&&!a.value.contentEl.contains(document.activeElement)&&a.value.contentEl.focus({preventScroll:!0})}function f(){o("afterLeave")}return w(t,async n=>{n||(await I(),a.value.activatorEl?.focus({preventScroll:!0}))}),T(()=>{const n=B.filterProps(e),u=y({"aria-haspopup":"dialog"},e.activatorProps),s=y({tabindex:-1},e.contentProps);return h(B,y({ref:a,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},n,{modelValue:t.value,"onUpdate:modelValue":m=>t.value=m,"aria-modal":"true",activatorProps:u,contentProps:s,height:e.fullscreen?void 0:e.height,width:e.fullscreen?void 0:e.width,maxHeight:e.fullscreen?void 0:e.maxHeight,maxWidth:e.fullscreen?void 0:e.maxWidth,role:"dialog",onAfterEnter:d,onAfterLeave:f},c),{activator:i.activator,default:function(){for(var m=arguments.length,v=new Array(m),g=0;g<m;g++)v[g]=arguments[g];return h(N,{root:"VDialog"},{default:()=>[i.default?.(...v)]})}})}),pe({},a)}}),Ve=x({color:String,...U(),...j(),...H(),...X(),...Y(),...z(),...Q(),...G(),...J()},"VSheet"),we=E()({name:"VSheet",props:Ve(),setup(e,r){let{slots:o}=r;const{themeClasses:i}=K(e),{backgroundColorClasses:t,backgroundColorStyles:c}=Z(_(e,"color")),{borderClasses:a}=ee(e),{dimensionStyles:l}=te(e),{elevationClasses:d}=ae(e),{locationStyles:f}=oe(e),{positionClasses:n}=ne(e),{roundedClasses:u}=se(e);return T(()=>h(e.tag,{class:["v-sheet",i.value,t.value,a.value,d.value,n.value,u.value,e.class],style:[c.value,l.value,f.value,e.style]},o)),{}}}),ke={key:1},Le={__name:"PopUp",props:ie({widget:{type:Object,default:void 0}},{modelValue:{type:Boolean,required:!0,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const r=re(e,"modelValue"),o=e,[i]=le([o?.widget]);return(t,c)=>(b(),k("span",null,[h(xe,{"max-width":"500px","max-height":"500px",absolute:"",scrollable:"","scroll-strategy":"block","close-on-back":"",modelValue:r.value,"onUpdate:modelValue":c[0]||(c[0]=a=>r.value=a)},{default:C(()=>[h(we,null,{default:C(()=>[e.widget?(b(),ce(ue(P(i).component),y({key:P(i).id},P(i).props),null,16)):S("",!0),t.$slots.default?(b(),k("span",ke,[de(t.$slots,"default")])):S("",!0)]),_:3})]),_:3},8,["modelValue"])]))}};export{Le as default};