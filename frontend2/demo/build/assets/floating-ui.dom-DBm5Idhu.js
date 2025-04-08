const Tt=Math.min,Lt=Math.max,St={left:"right",right:"left",bottom:"top",top:"bottom"},Dt={start:"end",end:"start"};function at(t,e,o){return Lt(t,Tt(e,o))}function K(t,e){return typeof t=="function"?t(e):t}function k(t){return t.split("-")[0]}function G(t){return t.split("-")[1]}function gt(t){return t==="x"?"y":"x"}function pt(t){return t==="y"?"height":"width"}function J(t){return["top","bottom"].includes(k(t))?"y":"x"}function xt(t){return gt(J(t))}function kt(t,e,o){o===void 0&&(o=!1);const n=G(t),i=xt(t),r=pt(i);let s=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=Y(s)),[s,Y(s)]}function Ft(t){const e=Y(t);return[et(t),e,et(e)]}function et(t){return t.replace(/start|end/g,e=>Dt[e])}function Pt(t,e,o){const n=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:n:e?n:i;case"left":case"right":return e?r:s;default:return[]}}function Mt(t,e,o,n){const i=G(t);let r=Pt(k(t),o==="start",n);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(et)))),r}function Y(t){return t.replace(/left|right|bottom|top/g,e=>St[e])}function Nt(t){return{top:0,right:0,bottom:0,left:0,...t}}function Bt(t){return typeof t!="number"?Nt(t):{top:t,right:t,bottom:t,left:t}}function q(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function ut(t,e,o){let{reference:n,floating:i}=t;const r=J(e),s=xt(e),c=pt(s),l=k(e),f=r==="y",d=n.x+n.width/2-i.width/2,a=n.y+n.height/2-i.height/2,h=n[c]/2-i[c]/2;let u;switch(l){case"top":u={x:d,y:n.y-i.height};break;case"bottom":u={x:d,y:n.y+n.height};break;case"right":u={x:n.x+n.width,y:a};break;case"left":u={x:n.x-i.width,y:a};break;default:u={x:n.x,y:n.y}}switch(G(e)){case"start":u[s]-=h*(o&&f?-1:1);break;case"end":u[s]+=h*(o&&f?-1:1);break}return u}const Vt=async(t,e,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:s}=o,c=r.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let f=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:a}=ut(f,n,l),h=n,u={},g=0;for(let p=0;p<c.length;p++){const{name:x,fn:m}=c[p],{x:w,y,data:v,reset:b}=await m({x:d,y:a,initialPlacement:n,placement:h,strategy:i,middlewareData:u,rects:f,platform:s,elements:{reference:t,floating:e}});if(d=w??d,a=y??a,u={...u,[x]:{...u[x],...v}},b&&g<=50){g++,typeof b=="object"&&(b.placement&&(h=b.placement),b.rects&&(f=b.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):b.rects),{x:d,y:a}=ut(f,h,l)),p=-1;continue}}return{x:d,y:a,placement:h,strategy:i,middlewareData:u}};async function wt(t,e){var o;e===void 0&&(e={});const{x:n,y:i,platform:r,rects:s,elements:c,strategy:l}=t,{boundary:f="clippingAncestors",rootBoundary:d="viewport",elementContext:a="floating",altBoundary:h=!1,padding:u=0}=K(e,t),g=Bt(u),x=c[h?a==="floating"?"reference":"floating":a],m=q(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(x)))==null||o?x:x.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:f,rootBoundary:d,strategy:l})),w=a==="floating"?{...s.floating,x:n,y:i}:s.reference,y=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),v=await(r.isElement==null?void 0:r.isElement(y))?await(r.getScale==null?void 0:r.getScale(y))||{x:1,y:1}:{x:1,y:1},b=q(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:w,offsetParent:y,strategy:l}):w);return{top:(m.top-b.top+g.top)/v.y,bottom:(b.bottom-m.bottom+g.bottom)/v.y,left:(m.left-b.left+g.left)/v.x,right:(b.right-m.right+g.right)/v.x}}const Wt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:i,middlewareData:r,rects:s,initialPlacement:c,platform:l,elements:f}=e,{mainAxis:d=!0,crossAxis:a=!0,fallbackPlacements:h,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:p=!0,...x}=K(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const m=k(i),w=k(c)===c,y=await(l.isRTL==null?void 0:l.isRTL(f.floating)),v=h||(w||!p?[Y(c)]:Ft(c));!h&&g!=="none"&&v.push(...Mt(c,p,g,y));const b=[c,...v],S=await wt(e,x),X=[];let H=((n=r.flip)==null?void 0:n.overflows)||[];if(d&&X.push(S[m]),a){const D=kt(i,s,y);X.push(S[D[0]],S[D[1]])}if(H=[...H,{placement:i,overflows:X}],!X.every(D=>D<=0)){var rt,ct;const D=(((rt=r.flip)==null?void 0:rt.index)||0)+1,ft=b[D];if(ft)return{data:{index:D,overflows:H},reset:{placement:ft}};let $=(ct=H.filter(P=>P.overflows[0]<=0).sort((P,M)=>P.overflows[1]-M.overflows[1])[0])==null?void 0:ct.placement;if(!$)switch(u){case"bestFit":{var lt;const P=(lt=H.map(M=>[M.placement,M.overflows.filter(_=>_>0).reduce((_,Et)=>_+Et,0)]).sort((M,_)=>M[1]-_[1])[0])==null?void 0:lt[0];P&&($=P);break}case"initialPlacement":$=c;break}if(i!==$)return{reset:{placement:$}}}return{}}}};async function Ht(t,e){const{placement:o,platform:n,elements:i}=t,r=await(n.isRTL==null?void 0:n.isRTL(i.floating)),s=k(o),c=G(o),l=J(o)==="y",f=["left","top"].includes(s)?-1:1,d=r&&l?-1:1,a=K(e,t);let{mainAxis:h,crossAxis:u,alignmentAxis:g}=typeof a=="number"?{mainAxis:a,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...a};return c&&typeof g=="number"&&(u=c==="end"?g*-1:g),l?{x:u*d,y:h*f}:{x:h*f,y:u*d}}const $t=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,n;const{x:i,y:r,placement:s,middlewareData:c}=e,l=await Ht(e,t);return s===((o=c.offset)==null?void 0:o.placement)&&(n=c.arrow)!=null&&n.alignmentOffset?{}:{x:i+l.x,y:r+l.y,data:{...l,placement:s}}}}},_t=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:c={fn:x=>{let{x:m,y:w}=x;return{x:m,y:w}}},...l}=K(t,e),f={x:o,y:n},d=await wt(e,l),a=J(k(i)),h=gt(a);let u=f[h],g=f[a];if(r){const x=h==="y"?"top":"left",m=h==="y"?"bottom":"right",w=u+d[x],y=u-d[m];u=at(w,u,y)}if(s){const x=a==="y"?"top":"left",m=a==="y"?"bottom":"right",w=g+d[x],y=g-d[m];g=at(w,g,y)}const p=c.fn({...e,[h]:u,[a]:g});return{...p,data:{x:p.x-o,y:p.y-n}}}}},nt=Math.min,N=Math.max,U=Math.round,j=Math.floor,T=t=>({x:t,y:t});function W(t){return yt(t)?(t.nodeName||"").toLowerCase():"#document"}function A(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function E(t){var e;return(e=(yt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function yt(t){return t instanceof Node||t instanceof A(t).Node}function C(t){return t instanceof Element||t instanceof A(t).Element}function O(t){return t instanceof HTMLElement||t instanceof A(t).HTMLElement}function dt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof A(t).ShadowRoot}function I(t){const{overflow:e,overflowX:o,overflowY:n,display:i}=R(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(i)}function zt(t){return["table","td","th"].includes(W(t))}function Q(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function ot(t){const e=it(),o=R(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function It(t){let e=L(t);for(;O(e)&&!V(e);){if(Q(e))return null;if(ot(e))return e;e=L(e)}return null}function it(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function V(t){return["html","body","#document"].includes(W(t))}function R(t){return A(t).getComputedStyle(t)}function Z(t){return C(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function L(t){if(W(t)==="html")return t;const e=t.assignedSlot||t.parentNode||dt(t)&&t.host||E(t);return dt(e)?e.host:e}function bt(t){const e=L(t);return V(e)?t.ownerDocument?t.ownerDocument.body:t.body:O(e)&&I(e)?e:bt(e)}function z(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const i=bt(t),r=i===((n=t.ownerDocument)==null?void 0:n.body),s=A(i);return r?e.concat(s,s.visualViewport||[],I(i)?i:[],s.frameElement&&o?z(s.frameElement):[]):e.concat(i,z(i,[],o))}function vt(t){const e=R(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const i=O(t),r=i?t.offsetWidth:o,s=i?t.offsetHeight:n,c=U(o)!==r||U(n)!==s;return c&&(o=r,n=s),{width:o,height:n,$:c}}function st(t){return C(t)?t:t.contextElement}function B(t){const e=st(t);if(!O(e))return T(1);const o=e.getBoundingClientRect(),{width:n,height:i,$:r}=vt(e);let s=(r?U(o.width):o.width)/n,c=(r?U(o.height):o.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const Xt=T(0);function At(t){const e=A(t);return!it()||!e.visualViewport?Xt:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function jt(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==A(t)?!1:e}function F(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),r=st(t);let s=T(1);e&&(n?C(n)&&(s=B(n)):s=B(t));const c=jt(r,o,n)?At(r):T(0);let l=(i.left+c.x)/s.x,f=(i.top+c.y)/s.y,d=i.width/s.x,a=i.height/s.y;if(r){const h=A(r),u=n&&C(n)?A(n):n;let g=h,p=g.frameElement;for(;p&&n&&u!==g;){const x=B(p),m=p.getBoundingClientRect(),w=R(p),y=m.left+(p.clientLeft+parseFloat(w.paddingLeft))*x.x,v=m.top+(p.clientTop+parseFloat(w.paddingTop))*x.y;l*=x.x,f*=x.y,d*=x.x,a*=x.y,l+=y,f+=v,g=A(p),p=g.frameElement}}return q({width:d,height:a,x:l,y:f})}function Yt(t){let{elements:e,rect:o,offsetParent:n,strategy:i}=t;const r=i==="fixed",s=E(n),c=e?Q(e.floating):!1;if(n===s||c&&r)return o;let l={scrollLeft:0,scrollTop:0},f=T(1);const d=T(0),a=O(n);if((a||!a&&!r)&&((W(n)!=="body"||I(s))&&(l=Z(n)),O(n))){const h=F(n);f=B(n),d.x=h.x+n.clientLeft,d.y=h.y+n.clientTop}return{width:o.width*f.x,height:o.height*f.y,x:o.x*f.x-l.scrollLeft*f.x+d.x,y:o.y*f.y-l.scrollTop*f.y+d.y}}function qt(t){return Array.from(t.getClientRects())}function Rt(t){return F(E(t)).left+Z(t).scrollLeft}function Ut(t){const e=E(t),o=Z(t),n=t.ownerDocument.body,i=N(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=N(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let s=-o.scrollLeft+Rt(t);const c=-o.scrollTop;return R(n).direction==="rtl"&&(s+=N(e.clientWidth,n.clientWidth)-i),{width:i,height:r,x:s,y:c}}function Kt(t,e){const o=A(t),n=E(t),i=o.visualViewport;let r=n.clientWidth,s=n.clientHeight,c=0,l=0;if(i){r=i.width,s=i.height;const f=it();(!f||f&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:r,height:s,x:c,y:l}}function Gt(t,e){const o=F(t,!0,e==="fixed"),n=o.top+t.clientTop,i=o.left+t.clientLeft,r=O(t)?B(t):T(1),s=t.clientWidth*r.x,c=t.clientHeight*r.y,l=i*r.x,f=n*r.y;return{width:s,height:c,x:l,y:f}}function mt(t,e,o){let n;if(e==="viewport")n=Kt(t,o);else if(e==="document")n=Ut(E(t));else if(C(e))n=Gt(e,o);else{const i=At(t);n={...e,x:e.x-i.x,y:e.y-i.y}}return q(n)}function Ct(t,e){const o=L(t);return o===e||!C(o)||V(o)?!1:R(o).position==="fixed"||Ct(o,e)}function Jt(t,e){const o=e.get(t);if(o)return o;let n=z(t,[],!1).filter(c=>C(c)&&W(c)!=="body"),i=null;const r=R(t).position==="fixed";let s=r?L(t):t;for(;C(s)&&!V(s);){const c=R(s),l=ot(s);!l&&c.position==="fixed"&&(i=null),(r?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||I(s)&&!l&&Ct(t,s))?n=n.filter(d=>d!==s):i=c,s=L(s)}return e.set(t,n),n}function Qt(t){let{element:e,boundary:o,rootBoundary:n,strategy:i}=t;const s=[...o==="clippingAncestors"?Q(e)?[]:Jt(e,this._c):[].concat(o),n],c=s[0],l=s.reduce((f,d)=>{const a=mt(e,d,i);return f.top=N(a.top,f.top),f.right=nt(a.right,f.right),f.bottom=nt(a.bottom,f.bottom),f.left=N(a.left,f.left),f},mt(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Zt(t){const{width:e,height:o}=vt(t);return{width:e,height:o}}function te(t,e,o){const n=O(e),i=E(e),r=o==="fixed",s=F(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const l=T(0);if(n||!n&&!r)if((W(e)!=="body"||I(i))&&(c=Z(e)),n){const a=F(e,!0,r,e);l.x=a.x+e.clientLeft,l.y=a.y+e.clientTop}else i&&(l.x=Rt(i));const f=s.left+c.scrollLeft-l.x,d=s.top+c.scrollTop-l.y;return{x:f,y:d,width:s.width,height:s.height}}function tt(t){return R(t).position==="static"}function ht(t,e){return!O(t)||R(t).position==="fixed"?null:e?e(t):t.offsetParent}function Ot(t,e){const o=A(t);if(Q(t))return o;if(!O(t)){let i=L(t);for(;i&&!V(i);){if(C(i)&&!tt(i))return i;i=L(i)}return o}let n=ht(t,e);for(;n&&zt(n)&&tt(n);)n=ht(n,e);return n&&V(n)&&tt(n)&&!ot(n)?o:n||It(t)||o}const ee=async function(t){const e=this.getOffsetParent||Ot,o=this.getDimensions,n=await o(t.floating);return{reference:te(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function ne(t){return R(t).direction==="rtl"}const oe={convertOffsetParentRelativeRectToViewportRelativeRect:Yt,getDocumentElement:E,getClippingRect:Qt,getOffsetParent:Ot,getElementRects:ee,getClientRects:qt,getDimensions:Zt,getScale:B,isElement:C,isRTL:ne};function ie(t,e){let o=null,n;const i=E(t);function r(){var c;clearTimeout(n),(c=o)==null||c.disconnect(),o=null}function s(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),r();const{left:f,top:d,width:a,height:h}=t.getBoundingClientRect();if(c||e(),!a||!h)return;const u=j(d),g=j(i.clientWidth-(f+a)),p=j(i.clientHeight-(d+h)),x=j(f),w={rootMargin:-u+"px "+-g+"px "+-p+"px "+-x+"px",threshold:N(0,nt(1,l))||1};let y=!0;function v(b){const S=b[0].intersectionRatio;if(S!==l){if(!y)return s();S?s(!1,S):n=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{o=new IntersectionObserver(v,{...w,root:i.ownerDocument})}catch{o=new IntersectionObserver(v,w)}o.observe(t)}return s(!0),r}function se(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,f=st(t),d=i||r?[...f?z(f):[],...z(e)]:[];d.forEach(m=>{i&&m.addEventListener("scroll",o,{passive:!0}),r&&m.addEventListener("resize",o)});const a=f&&c?ie(f,o):null;let h=-1,u=null;s&&(u=new ResizeObserver(m=>{let[w]=m;w&&w.target===f&&u&&(u.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var y;(y=u)==null||y.observe(e)})),o()}),f&&!l&&u.observe(f),u.observe(e));let g,p=l?F(t):null;l&&x();function x(){const m=F(t);p&&(m.x!==p.x||m.y!==p.y||m.width!==p.width||m.height!==p.height)&&o(),p=m,g=requestAnimationFrame(x)}return o(),()=>{var m;d.forEach(w=>{i&&w.removeEventListener("scroll",o),r&&w.removeEventListener("resize",o)}),a==null||a(),(m=u)==null||m.disconnect(),u=null,l&&cancelAnimationFrame(g)}}const re=$t,ce=_t,le=Wt,fe=(t,e,o)=>{const n=new Map,i={platform:oe,...o},r={...i.platform,_c:n};return Vt(t,e,{...i,platform:r})};export{se as a,fe as c,le as f,z as g,re as o,ce as s};
