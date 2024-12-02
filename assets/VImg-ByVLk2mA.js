import{bn as O,p as W,e as D,ac as G,g as $,ad as J,a as E,b as n,c as h,ag as K,Q as X,R as Y,aj as Z,bo as p,s as f,r as ee,w as C,bp as te,D as ne,am as re,t as U,v as ae,F as se,d as ie,C as le,B as oe}from"./index-QplpET-K.js";import{m as ue,M as y}from"./transition-Dsjh7f1d.js";function ce(e,s){if(!O)return;const i=s.modifiers||{},l=s.value,{handler:d,options:R}=typeof l=="object"?l:{handler:l,options:{}},S=new IntersectionObserver(function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],_=arguments.length>1?arguments[1]:void 0;const r=e._observe?.[s.instance.$.uid];if(!r)return;const a=c.some(v=>v.isIntersecting);d&&(!i.quiet||r.init)&&(!i.once||a||r.init)&&d(a,c,_),a&&i.once?M(e,s):r.init=!0},R);e._observe=Object(e._observe),e._observe[s.instance.$.uid]={init:!1,observer:S},S.observe(e)}function M(e,s){const i=e._observe?.[s.instance.$.uid];i&&(i.observer.unobserve(e),delete e._observe[s.instance.$.uid])}const ve={mounted:ce,unmounted:M};function de(e){return{aspectStyles:h(()=>{const s=Number(e.aspectRatio);return s?{paddingBottom:String(1/s*100)+"%"}:void 0})}}const q=W({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...D(),...G()},"VResponsive"),F=$()({name:"VResponsive",props:q(),setup(e,s){let{slots:i}=s;const{aspectStyles:l}=de(e),{dimensionStyles:d}=J(e);return E(()=>n("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[d.value,e.style]},[n("div",{class:"v-responsive__sizer",style:l.value},null),i.additional?.(),i.default&&n("div",{class:["v-responsive__content",e.contentClass]},[i.default()])])),{}}}),ge=W({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...q(),...D(),...K(),...ue()},"VImg"),Se=$()({name:"VImg",directives:{intersect:ve},props:ge(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,s){let{emit:i,slots:l}=s;const{backgroundColorClasses:d,backgroundColorStyles:R}=X(Y(e,"color")),{roundedClasses:S}=Z(e),c=p("VImg"),_=f(""),r=ee(),a=f(e.eager?"loading":"idle"),v=f(),b=f(),o=h(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),g=h(()=>o.value.aspect||v.value/b.value||0);C(()=>e.src,()=>{z(a.value!=="idle")}),C(g,(t,u)=>{!t&&u&&r.value&&m(r.value)}),te(()=>z());function z(t){if(!(e.eager&&t)&&!(O&&!t&&!e.eager)){if(a.value="loading",o.value.lazySrc){const u=new Image;u.src=o.value.lazySrc,m(u,null)}o.value.src&&ne(()=>{i("loadstart",r.value?.currentSrc||o.value.src),setTimeout(()=>{if(!c.isUnmounted)if(r.value?.complete){if(r.value.naturalWidth||w(),a.value==="error")return;g.value||m(r.value,null),a.value==="loading"&&P()}else g.value||m(r.value),k()})})}}function P(){c.isUnmounted||(k(),m(r.value),a.value="loaded",i("load",r.value?.currentSrc||o.value.src))}function w(){c.isUnmounted||(a.value="error",i("error",r.value?.currentSrc||o.value.src))}function k(){const t=r.value;t&&(_.value=t.currentSrc||t.src)}let I=-1;re(()=>{clearTimeout(I)});function m(t){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const V=()=>{if(clearTimeout(I),c.isUnmounted)return;const{naturalHeight:j,naturalWidth:N}=t;j||N?(v.value=N,b.value=j):!t.complete&&a.value==="loading"&&u!=null?I=window.setTimeout(V,u):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,b.value=1)};V()}const B=h(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),x=()=>{if(!o.value.src||a.value==="idle")return null;const t=n("img",{class:["v-img__img",B.value],style:{objectPosition:e.position},src:o.value.src,srcset:o.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:r,onLoad:P,onError:w},null),u=l.sources?.();return n(y,{transition:e.transition,appear:!0},{default:()=>[U(u?n("picture",{class:"v-img__picture"},[u,t]):t,[[oe,a.value==="loaded"]])]})},A=()=>n(y,{transition:e.transition},{default:()=>[o.value.lazySrc&&a.value!=="loaded"&&n("img",{class:["v-img__img","v-img__img--preload",B.value],style:{objectPosition:e.position},src:o.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),H=()=>l.placeholder?n(y,{transition:e.transition,appear:!0},{default:()=>[(a.value==="loading"||a.value==="error"&&!l.error)&&n("div",{class:"v-img__placeholder"},[l.placeholder()])]}):null,L=()=>l.error?n(y,{transition:e.transition,appear:!0},{default:()=>[a.value==="error"&&n("div",{class:"v-img__error"},[l.error()])]}):null,Q=()=>e.gradient?n("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,T=f(!1);{const t=C(g,u=>{u&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{T.value=!0})}),t())})}return E(()=>{const t=F.filterProps(e);return U(n(F,ie({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!T.value},d.value,S.value,e.class],style:[{width:le(e.width==="auto"?v.value:e.width)},R.value,e.style]},t,{aspectRatio:g.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>n(se,null,[n(x,null,null),n(A,null,null),n(Q,null,null),n(H,null,null),n(L,null,null)]),default:l.default}),[[ae("intersect"),{handler:z,options:e.options},null,{once:!0}]])}),{currentSrc:_,image:r,state:a,naturalWidth:v,naturalHeight:b}}});export{Se as V};