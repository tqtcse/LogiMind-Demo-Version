import{R as D,r as t}from"./index-DtwSxASm.js";import{w as I,I as T,u as W,a as A,s as U,m as E,g as S,U as h,b as M}from"./index-BwWjUWmm.js";const p=T?u=>{u()}:D.startTransition,j=u=>{const[,l]=t.useState({}),o=t.useRef(!1),g=t.useRef(u),i=t.useRef({data:!1,error:!1,isValidating:!1}),f=t.useCallback(s=>{let n=!1;const d=g.current;for(const c in s)if(Object.prototype.hasOwnProperty.call(s,c)){const e=c;d[e]!==s[e]&&(d[e]=s[e],i.current[e]&&(n=!0))}n&&!o.current&&l({})},[]);return M(()=>(o.current=!1,()=>{o.current=!0})),[g,i.current,f]},v=()=>(u,l,o={})=>{const{mutate:g}=A(),i=t.useRef(u),f=t.useRef(l),s=t.useRef(o),n=t.useRef(0),[d,c,e]=j({data:h,error:h,isMutating:!1}),m=d.current,C=t.useCallback(async(k,y)=>{const[R,O]=U(i.current);if(!f.current)throw new Error("Can’t trigger the mutation: missing fetcher.");if(!R)throw new Error("Can’t trigger the mutation: missing key.");const r=E(E({populateCache:!1,throwOnError:!0},s.current),y),w=S();n.current=w,e({isMutating:!0});try{const a=await g(R,f.current(O,{arg:k}),E(r,{throwOnError:!0}));return n.current<=w&&(p(()=>e({data:a,isMutating:!1,error:void 0})),r.onSuccess==null||r.onSuccess.call(r,a,R,r)),a}catch(a){if(n.current<=w&&(p(()=>e({error:a,isMutating:!1})),r.onError==null||r.onError.call(r,a,R,r),r.throwOnError))throw a}},[]),b=t.useCallback(()=>{n.current=S(),e({data:h,error:h,isMutating:!1})},[]);return M(()=>{i.current=u,f.current=l,s.current=o}),{trigger:C,reset:b,get data(){return c.data=!0,m.data},get error(){return c.error=!0,m.error},get isMutating(){return c.isMutating=!0,m.isMutating}}},K=I(W,v);export{K as u};
