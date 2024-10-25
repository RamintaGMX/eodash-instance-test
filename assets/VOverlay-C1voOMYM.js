import{bt as Ce,bu as Pe,p as X,r as V,L as W,ao as se,w as B,bv as _,bw as Ve,bx as me,by as te,bz as ne,bA as ye,c as P,D as ce,bB as ge,C as F,al as he,ap as ue,bC as Ae,bD as Ie,bo as fe,x as pe,bE as be,d as I,bF as We,s as U,H as je,Z as qe,aB as Te,q as ze,ar as $e,bG as Ye,e as Ge,ac as Ue,h as Xe,g as Ze,y as Je,i as Ke,j as Qe,Q as et,R as tt,ad as nt,am as ot,bH as at,a as rt,b as D,bI as it,t as lt,B as st,v as ct,F as ut,ab as ft,bJ as vt}from"./index-Ct6KLUKT.js";import{g as dt,B as oe,e as we,n as mt,m as yt,u as gt,b as ht,a as bt,s as wt}from"./forwardRefs-Dl3wYU1v.js";import{m as Et,M as St}from"./transition-D21LHqCy.js";const J=new WeakMap;function xt(e,t){Object.keys(t).forEach(n=>{if(Ce(n)){const o=Pe(n),a=J.get(e);if(t[n]==null)a?.forEach(l=>{const[r,c]=l;r===o&&(e.removeEventListener(o,c),a.delete(l))});else if(!a||![...a].some(l=>l[0]===o&&l[1]===t[n])){e.addEventListener(o,t[n]);const l=a||new Set;l.add([o,t[n]]),J.has(e)||J.set(e,l)}}else t[n]==null?e.removeAttribute(n):e.setAttribute(n,t[n])})}function Ot(e,t){Object.keys(t).forEach(n=>{if(Ce(n)){const o=Pe(n),a=J.get(e);a?.forEach(l=>{const[r,c]=l;r===o&&(e.removeEventListener(o,c),a.delete(l))})}else e.removeAttribute(n)})}function Le(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function kt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(t?Ct(e):ve(e))return e;e=e.parentElement}return document.scrollingElement}function K(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(ve(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function ve(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Ct(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}function Pt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function At(){return!0}function Be(e,t,n){if(!e||Re(e,n)===!1)return!1;const o=Le(t);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof n.value=="object"&&n.value.include||(()=>[]))();return a.push(t),!a.some(l=>l?.contains(e.target))}function Re(e,t){return(typeof t.value=="object"&&t.value.closeConditional||At)(e)}function pt(e,t,n){const o=typeof n.value=="function"?n.value:n.value.handler;e.shadowTarget=e.target,t._clickOutside.lastMousedownWasOutside&&Be(e,t,n)&&setTimeout(()=>{Re(e,n)&&o&&o(e)},0)}function Ee(e,t){const n=Le(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const Tt={mounted(e,t){const n=a=>pt(a,e,t),o=a=>{e._clickOutside.lastMousedownWasOutside=Be(a,e,t)};Ee(e,a=>{a.addEventListener("click",n,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:o}},beforeUnmount(e,t){e._clickOutside&&(Ee(e,n=>{if(!n||!e._clickOutside?.[t.instance.$.uid])return;const{onClick:o,onMousedown:a}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",o,!0),n.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[t.instance.$.uid])}};function ae(e,t){return{x:e.x+t.x,y:e.y+t.y}}function Lt(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Se(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:o}=e,a=o==="left"?0:o==="center"?t.width/2:o==="right"?t.width:o,l=n==="top"?0:n==="bottom"?t.height:n;return ae({x:a,y:l},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:o}=e,a=n==="left"?0:n==="right"?t.width:n,l=o==="top"?0:o==="center"?t.height/2:o==="bottom"?t.height:o;return ae({x:a,y:l},t)}return ae({x:t.width/2,y:t.height/2},t)}const Me={static:Mt,connected:Nt},Bt=X({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Me},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Rt(e,t){const n=V({}),o=V();W&&se(()=>!!(t.isActive.value&&e.locationStrategy),l=>{B(()=>e.locationStrategy,l),_(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=e.locationStrategy(t,e,n)?.updateLocation:o.value=Me[e.locationStrategy](t,e,n)?.updateLocation});function a(l){o.value?.(l)}return{contentStyles:n,updateLocation:o}}function Mt(){}function Ft(e,t){const n=mt(e);return t?n.x+=parseFloat(e.style.right||0):n.x-=parseFloat(e.style.left||0),n.y-=parseFloat(e.style.top||0),n}function Nt(e,t,n){(Array.isArray(e.target.value)||Pt(e.target.value))&&Object.assign(n.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:l}=Ve(()=>{const v=me(t.location,e.isRtl.value),f=t.origin==="overlap"?v:t.origin==="auto"?te(v):me(t.origin,e.isRtl.value);return v.side===f.side&&v.align===ne(f).align?{preferredAnchor:ye(v),preferredOrigin:ye(f)}:{preferredAnchor:v,preferredOrigin:f}}),[r,c,u,m]=["minWidth","minHeight","maxWidth","maxHeight"].map(v=>P(()=>{const f=parseFloat(t[v]);return isNaN(f)?1/0:f})),s=P(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const v=t.offset.split(" ").map(parseFloat);return v.length<2&&v.push(0),v}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let N=!1;const S=new ResizeObserver(()=>{N&&x()});B([e.target,e.contentEl],(v,f)=>{let[O,k]=v,[w,b]=f;w&&!Array.isArray(w)&&S.unobserve(w),O&&!Array.isArray(O)&&S.observe(O),b&&S.unobserve(b),k&&S.observe(k)},{immediate:!0}),_(()=>{S.disconnect()});function x(){if(N=!1,requestAnimationFrame(()=>N=!0),!e.target.value||!e.contentEl.value)return;const v=dt(e.target.value),f=Ft(e.contentEl.value,e.isRtl.value),O=K(e.contentEl.value),k=12;O.length||(O.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(f.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),f.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const w=O.reduce((E,h)=>{const d=h.getBoundingClientRect(),y=new oe({x:h===document.documentElement?0:d.x,y:h===document.documentElement?0:d.y,width:h.clientWidth,height:h.clientHeight});return E?new oe({x:Math.max(E.left,y.left),y:Math.max(E.top,y.top),width:Math.min(E.right,y.right)-Math.max(E.left,y.left),height:Math.min(E.bottom,y.bottom)-Math.max(E.top,y.top)}):y},void 0);w.x+=k,w.y+=k,w.width-=k*2,w.height-=k*2;let b={anchor:a.value,origin:l.value};function T(E){const h=new oe(f),d=Se(E.anchor,v),y=Se(E.origin,h);let{x:R,y:M}=Lt(d,y);switch(E.anchor.side){case"top":M-=s.value[0];break;case"bottom":M+=s.value[0];break;case"left":R-=s.value[0];break;case"right":R+=s.value[0];break}switch(E.anchor.align){case"top":M-=s.value[1];break;case"bottom":M+=s.value[1];break;case"left":R-=s.value[1];break;case"right":R+=s.value[1];break}return h.x+=R,h.y+=M,h.width=Math.min(h.width,u.value),h.height=Math.min(h.height,m.value),{overflows:we(h,w),x:R,y:M}}let p=0,L=0;const A={x:0,y:0},i={x:!1,y:!1};let Y=-1;for(;!(Y++>10);){const{x:E,y:h,overflows:d}=T(b);p+=E,L+=h,f.x+=E,f.y+=h;{const y=ge(b.anchor),R=d.x.before||d.x.after,M=d.y.before||d.y.after;let j=!1;if(["x","y"].forEach(C=>{if(C==="x"&&R&&!i.x||C==="y"&&M&&!i.y){const H={anchor:{...b.anchor},origin:{...b.origin}},q=C==="x"?y==="y"?ne:te:y==="y"?te:ne;H.anchor=q(H.anchor),H.origin=q(H.origin);const{overflows:z}=T(H);(z[C].before<=d[C].before&&z[C].after<=d[C].after||z[C].before+z[C].after<(d[C].before+d[C].after)/2)&&(b=H,j=i[C]=!0)}}),j)continue}d.x.before&&(p+=d.x.before,f.x+=d.x.before),d.x.after&&(p-=d.x.after,f.x-=d.x.after),d.y.before&&(L+=d.y.before,f.y+=d.y.before),d.y.after&&(L-=d.y.after,f.y-=d.y.after);{const y=we(f,w);A.x=w.width-y.x.before-y.x.after,A.y=w.height-y.y.before-y.y.after,p+=y.x.before,f.x+=y.x.before,L+=y.y.before,f.y+=y.y.before}break}const ee=ge(b.anchor);return Object.assign(n.value,{"--v-overlay-anchor-origin":`${b.anchor.side} ${b.anchor.align}`,transformOrigin:`${b.origin.side} ${b.origin.align}`,top:F(re(L)),left:e.isRtl.value?void 0:F(re(p)),right:e.isRtl.value?F(re(-p)):void 0,minWidth:F(ee==="y"?Math.min(r.value,v.width):r.value),maxWidth:F(xe(he(A.x,r.value===1/0?0:r.value,u.value))),maxHeight:F(xe(he(A.y,c.value===1/0?0:c.value,m.value)))}),{available:A,contentBox:f}}return B(()=>[a.value,l.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>x()),ce(()=>{const v=x();if(!v)return;const{available:f,contentBox:O}=v;O.height>f.y&&requestAnimationFrame(()=>{x(),requestAnimationFrame(()=>{x()})})}),{updateLocation:x}}function re(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function xe(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ie=!0;const Q=[];function _t(e){!ie||Q.length?(Q.push(e),le()):(ie=!1,e(),le())}let Oe=-1;function le(){cancelAnimationFrame(Oe),Oe=requestAnimationFrame(()=>{const e=Q.shift();e&&e(),Q.length?le():ie=!0})}const Fe={none:null,close:Vt,block:It,reposition:Wt},Ht=X({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in Fe}},"VOverlay-scroll-strategies");function Dt(e,t){if(!W)return;let n;ue(async()=>{n?.stop(),t.isActive.value&&e.scrollStrategy&&(n=Ae(),await new Promise(o=>setTimeout(o)),n.active&&n.run(()=>{typeof e.scrollStrategy=="function"?e.scrollStrategy(t,e,n):Fe[e.scrollStrategy]?.(t,e,n)}))}),_(()=>{n?.stop()})}function Vt(e){function t(n){e.isActive.value=!1}Ne(e.targetEl.value??e.contentEl.value,t)}function It(e,t){const n=e.root.value?.offsetParent,o=[...new Set([...K(e.targetEl.value,t.contained?n:void 0),...K(e.contentEl.value,t.contained?n:void 0)])].filter(r=>!r.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,l=(r=>ve(r)&&r)(n||document.documentElement);l&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((r,c)=>{r.style.setProperty("--v-body-scroll-x",F(-r.scrollLeft)),r.style.setProperty("--v-body-scroll-y",F(-r.scrollTop)),r!==document.documentElement&&r.style.setProperty("--v-scrollbar-offset",F(a)),r.classList.add("v-overlay-scroll-blocked")}),_(()=>{o.forEach((r,c)=>{const u=parseFloat(r.style.getPropertyValue("--v-body-scroll-x")),m=parseFloat(r.style.getPropertyValue("--v-body-scroll-y")),s=r.style.scrollBehavior;r.style.scrollBehavior="auto",r.style.removeProperty("--v-body-scroll-x"),r.style.removeProperty("--v-body-scroll-y"),r.style.removeProperty("--v-scrollbar-offset"),r.classList.remove("v-overlay-scroll-blocked"),r.scrollLeft=-u,r.scrollTop=-m,r.style.scrollBehavior=s}),l&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Wt(e,t,n){let o=!1,a=-1,l=-1;function r(c){_t(()=>{const u=performance.now();e.updateLocation.value?.(c),o=(performance.now()-u)/(1e3/60)>2})}l=(typeof requestIdleCallback>"u"?c=>c():requestIdleCallback)(()=>{n.run(()=>{Ne(e.targetEl.value??e.contentEl.value,c=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{r(c)})})):r(c)})})}),_(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(l),cancelAnimationFrame(a)})}function Ne(e,t){const n=[document,...K(e)];n.forEach(o=>{o.addEventListener("scroll",t,{passive:!0})}),_(()=>{n.forEach(o=>{o.removeEventListener("scroll",t)})})}const jt=Symbol.for("vuetify:v-menu"),qt=X({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function zt(e,t){let n=()=>{};function o(r){n?.();const c=Number(r?e.openDelay:e.closeDelay);return new Promise(u=>{n=Ie(c,()=>{t?.(r),u(r)})})}function a(){return o(!0)}function l(){return o(!1)}return{clearDelay:n,runOpenDelay:a,runCloseDelay:l}}const $t=X({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...qt()},"VOverlay-activator");function Yt(e,t){let{isActive:n,isTop:o,contentEl:a}=t;const l=fe("useActivator"),r=V();let c=!1,u=!1,m=!0;const s=P(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),N=P(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!s.value),{runOpenDelay:S,runCloseDelay:x}=zt(e,i=>{i===(e.openOnHover&&c||s.value&&u)&&!(e.openOnHover&&n.value&&!o.value)&&(n.value!==i&&(m=!0),n.value=i)}),v=V(),f={onClick:i=>{i.stopPropagation(),r.value=i.currentTarget||i.target,n.value||(v.value=[i.clientX,i.clientY]),n.value=!n.value},onMouseenter:i=>{i.sourceCapabilities?.firesTouchEvents||(c=!0,r.value=i.currentTarget||i.target,S())},onMouseleave:i=>{c=!1,x()},onFocus:i=>{We(i.target,":focus-visible")!==!1&&(u=!0,i.stopPropagation(),r.value=i.currentTarget||i.target,S())},onBlur:i=>{u=!1,i.stopPropagation(),x()}},O=P(()=>{const i={};return N.value&&(i.onClick=f.onClick),e.openOnHover&&(i.onMouseenter=f.onMouseenter,i.onMouseleave=f.onMouseleave),s.value&&(i.onFocus=f.onFocus,i.onBlur=f.onBlur),i}),k=P(()=>{const i={};if(e.openOnHover&&(i.onMouseenter=()=>{c=!0,S()},i.onMouseleave=()=>{c=!1,x()}),s.value&&(i.onFocusin=()=>{u=!0,S()},i.onFocusout=()=>{u=!1,x()}),e.closeOnContentClick){const Y=pe(jt,null);i.onClick=()=>{n.value=!1,Y?.closeParents()}}return i}),w=P(()=>{const i={};return e.openOnHover&&(i.onMouseenter=()=>{m&&(c=!0,m=!1,S())},i.onMouseleave=()=>{c=!1,x()}),i});B(o,i=>{i&&(e.openOnHover&&!c&&(!s.value||!u)||s.value&&!u&&(!e.openOnHover||!c))&&!a.value?.contains(document.activeElement)&&(n.value=!1)}),B(n,i=>{i||setTimeout(()=>{v.value=void 0})},{flush:"post"});const b=be();ue(()=>{b.value&&ce(()=>{r.value=b.el})});const T=be(),p=P(()=>e.target==="cursor"&&v.value?v.value:T.value?T.el:_e(e.target,l)||r.value),L=P(()=>Array.isArray(p.value)?void 0:p.value);let A;return B(()=>!!e.activator,i=>{i&&W?(A=Ae(),A.run(()=>{Gt(e,l,{activatorEl:r,activatorEvents:O})})):A&&A.stop()},{flush:"post",immediate:!0}),_(()=>{A?.stop()}),{activatorEl:r,activatorRef:b,target:p,targetEl:L,targetRef:T,activatorEvents:O,contentEvents:k,scrimEvents:w}}function Gt(e,t,n){let{activatorEl:o,activatorEvents:a}=n;B(()=>e.activator,(u,m)=>{if(m&&u!==m){const s=c(m);s&&r(s)}u&&ce(()=>l())},{immediate:!0}),B(()=>e.activatorProps,()=>{l()}),_(()=>{r()});function l(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:c(),m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&xt(u,I(a.value,m))}function r(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:c(),m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&Ot(u,I(a.value,m))}function c(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const m=_e(u,t);return o.value=m?.nodeType===Node.ELEMENT_NODE?m:void 0,o.value}}function _e(e,t){if(!e)return;let n;if(e==="parent"){let o=t?.proxy?.$el?.parentNode;for(;o?.hasAttribute("data-no-activator");)o=o.parentNode;n=o}else typeof e=="string"?n=document.querySelector(e):"$el"in e?n=e.$el:n=e;return n}function Ut(){if(!W)return U(!1);const{ssr:e}=je();if(e){const t=U(!1);return qe(()=>{t.value=!0}),t}else return U(!0)}const ke=Symbol.for("vuetify:stack"),G=Te([]);function Xt(e,t,n){const o=fe("useStack"),a=!n,l=pe(ke,void 0),r=Te({activeChildren:new Set});ze(ke,r);const c=U(+t.value);se(e,()=>{const s=G.at(-1)?.[1];c.value=s?s+10:+t.value,a&&G.push([o.uid,c.value]),l?.activeChildren.add(o.uid),_(()=>{if(a){const N=Ye(G).findIndex(S=>S[0]===o.uid);G.splice(N,1)}l?.activeChildren.delete(o.uid)})});const u=U(!0);a&&ue(()=>{const s=G.at(-1)?.[0]===o.uid;setTimeout(()=>u.value=s)});const m=P(()=>!r.activeChildren.size);return{globalTop:$e(u),localTop:m,stackStyles:P(()=>({zIndex:c.value}))}}function Zt(e){return{teleportTarget:P(()=>{const n=e();if(n===!0||!W)return;const o=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(o==null)return;let a=[...o.children].find(l=>l.matches(".v-overlay-container"));return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function Jt(e){const{modelValue:t,color:n,...o}=e;return D(ft,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&D("div",I({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const Kt=X({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...$t(),...Ge(),...Ue(),...yt(),...Bt(),...Ht(),...Xe(),...Et()},"VOverlay"),nn=Ze()({name:"VOverlay",directives:{ClickOutside:Tt},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Kt()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:o,emit:a}=t;const l=fe("VOverlay"),r=V(),c=V(),u=V(),m=Je(e,"modelValue"),s=P({get:()=>m.value,set:g=>{g&&e.disabled||(m.value=g)}}),{themeClasses:N}=Ke(e),{rtlClasses:S,isRtl:x}=Qe(),{hasContent:v,onAfterLeave:f}=gt(e,s),O=et(P(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:k,localTop:w,stackStyles:b}=Xt(s,tt(e,"zIndex"),e._disableGlobalStack),{activatorEl:T,activatorRef:p,target:L,targetEl:A,targetRef:i,activatorEvents:Y,contentEvents:ee,scrimEvents:E}=Yt(e,{isActive:s,isTop:w,contentEl:u}),{teleportTarget:h}=Zt(()=>{const g=e.attach||e.contained;if(g)return g;const $=T?.value?.getRootNode()||l.proxy?.$el?.getRootNode();return $ instanceof ShadowRoot?$:!1}),{dimensionStyles:d}=nt(e),y=Ut(),{scopeId:R}=ht();B(()=>e.disabled,g=>{g&&(s.value=!1)});const{contentStyles:M,updateLocation:j}=Rt(e,{isRtl:x,contentEl:u,target:L,isActive:s});Dt(e,{root:r,contentEl:u,targetEl:A,isActive:s,updateLocation:j});function C(g){a("click:outside",g),e.persistent?Z():s.value=!1}function H(g){return s.value&&k.value&&(!e.scrim||g.target===c.value||g instanceof MouseEvent&&g.shadowTarget===c.value)}W&&B(s,g=>{g?window.addEventListener("keydown",q):window.removeEventListener("keydown",q)},{immediate:!0}),ot(()=>{W&&window.removeEventListener("keydown",q)});function q(g){g.key==="Escape"&&k.value&&(e.persistent?Z():(s.value=!1,u.value?.contains(document.activeElement)&&T.value?.focus()))}const z=at();se(()=>e.closeOnBack,()=>{vt(z,g=>{k.value&&s.value?(g(!1),e.persistent?Z():s.value=!1):g()})});const de=V();B(()=>s.value&&(e.absolute||e.contained)&&h.value==null,g=>{if(g){const $=kt(r.value);$&&$!==document.scrollingElement&&(de.value=$.scrollTop)}});function Z(){e.noClickAnimation||u.value&&bt(u.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:wt})}function He(){a("afterEnter")}function De(){f(),a("afterLeave")}return rt(()=>D(ut,null,[n.activator?.({isActive:s.value,targetRef:i,props:I({ref:p},Y.value,e.activatorProps)}),y.value&&v.value&&D(it,{disabled:!h.value,to:h.value},{default:()=>[D("div",I({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},N.value,S.value,e.class],style:[b.value,{"--v-overlay-opacity":e.opacity,top:F(de.value)},e.style],ref:r},R,o),[D(Jt,I({color:O,modelValue:s.value&&!!e.scrim,ref:c},E.value),null),D(St,{appear:!0,persisted:!0,transition:e.transition,target:L.value,onAfterEnter:He,onAfterLeave:De},{default:()=>[lt(D("div",I({ref:u,class:["v-overlay__content",e.contentClass],style:[d.value,M.value]},ee.value,e.contentProps),[n.default?.({isActive:s})]),[[st,s.value],[ct("click-outside"),{handler:C,closeConditional:H,include:()=>[T.value]}]])]})])]})])),{activatorEl:T,scrimEl:c,target:L,animateClick:Z,contentEl:u,globalTop:k,localTop:w,updateLocation:j}}});export{nn as V,Kt as m};
