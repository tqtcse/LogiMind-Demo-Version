import{r as k,E as y,j as e,u as C}from"./index-DtwSxASm.js";import{u as B,A as M}from"./useTimeOutMessage-CylvASWg.js";import{I as d}from"./Input-BNk8Jtou.js";import{B as q}from"./Button-i5g00eBi.js";import{u as F,F as A,a as c,C as p}from"./index.esm-Cn3F_1Fv.js";import{t as E,z as t}from"./index-DNuGD4fr.js";import{A as T}from"./ActionLink-rgSc-yxd.js";import"./classNames-ePRZs5sB.js";import"./StatusIcon-C3ptiLRj.js";import"./index-CHU72eNV.js";import"./CloseButton-C-zx-kDW.js";import"./proxy-CApU-jHi.js";import"./context-DPxwjVT1.js";import"./isNil-BVBaoyN1.js";const U=t.object({email:t.string({required_error:"Please enter your email"}),userName:t.string({required_error:"Please enter your name"}),password:t.string({required_error:"Password Required"}),confirmPassword:t.string({required_error:"Confirm Password Required"})}).refine(a=>a.password===a.confirmPassword,{message:"Password not match",path:["confirmPassword"]}),I=a=>{var x,f,g,j;const{disableSubmit:u=!1,className:n,setMessage:o}=a,[i,h]=k.useState(!1),{signUp:b}=y(),{handleSubmit:w,formState:{errors:r},control:m}=F({resolver:E(U)}),N=async s=>{const{userName:S,password:v,email:P}=s;if(!u){h(!0);const l=await b({userName:S,password:v,email:P});(l==null?void 0:l.status)==="failed"&&(o==null||o(l.message)),h(!1)}};return e.jsx("div",{className:n,children:e.jsxs(A,{onSubmit:w(N),children:[e.jsx(c,{label:"Tên đăng nhập",invalid:!!r.userName,errorMessage:(x=r.userName)==null?void 0:x.message,children:e.jsx(p,{name:"userName",control:m,render:({field:s})=>e.jsx(d,{type:"text",placeholder:"Tên đăng nhập",autoComplete:"off",...s})})}),e.jsx(c,{label:"Email",invalid:!!r.email,errorMessage:(f=r.email)==null?void 0:f.message,children:e.jsx(p,{name:"email",control:m,render:({field:s})=>e.jsx(d,{type:"email",placeholder:"Email",autoComplete:"off",...s})})}),e.jsx(c,{label:"Mật khẩu",invalid:!!r.password,errorMessage:(g=r.password)==null?void 0:g.message,children:e.jsx(p,{name:"password",control:m,render:({field:s})=>e.jsx(d,{type:"password",autoComplete:"off",placeholder:"Mật khẩu",...s})})}),e.jsx(c,{label:"Xác nhận mật khẩu",invalid:!!r.confirmPassword,errorMessage:(j=r.confirmPassword)==null?void 0:j.message,children:e.jsx(p,{name:"confirmPassword",control:m,render:({field:s})=>e.jsx(d,{type:"password",autoComplete:"off",placeholder:"Nhập lại mật khẩu",...s})})}),e.jsx(q,{block:!0,loading:i,variant:"solid",type:"submit",children:i?"Tạo tài khoản...":"Đăng Ký"})]})})},_=({signInUrl:a="/sign-in",disableSubmit:u})=>{const[n,o]=B();return C(i=>i.mode),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"mb-1",children:"Đăng Ký"}),e.jsx("p",{className:"font-semibold heading-text"})]}),n&&e.jsx(M,{showIcon:!0,className:"mb-4",type:"danger",children:e.jsx("span",{className:"break-all",children:n})}),e.jsx(I,{disableSubmit:u,setMessage:o}),e.jsx("div",{children:e.jsxs("div",{className:"mt-6 text-center",children:[e.jsx("span",{children:"Đã có tài khoản? "}),e.jsx(T,{to:a,className:"heading-text font-bold",themeColor:!1,children:"Đăng nhập"})]})})]})},Z=()=>e.jsx(_,{});export{_ as SignUpBase,Z as default};
