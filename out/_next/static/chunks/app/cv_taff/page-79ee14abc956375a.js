(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[300],{4518:(e,s,l)=>{Promise.resolve().then(l.bind(l,2281))},2281:(e,s,l)=>{"use strict";l.r(s),l.d(s,{default:()=>j});var i=l(5155),r=l(2115),t=l(5781),a=l(6472);let o=e=>{let{children:s}=e;return(0,i.jsx)("h2",{className:"text-lg font-semibold",children:s})};t.t1.register(t.Bs);let n=e=>{let s,{data_skills:l}=e,t={labels:[],datasets:[{label:"Comp\xe9tences",data:[],backgroundColor:[],hoverOffset:10}]};for(let e=0;e<l.length;e++)t.labels.push(l[e].name),t.datasets[0].data.push(l[e].pourcentage),t.datasets[0].backgroundColor.push(l[e].backgroundColor);let n=(0,r.useRef)(null),[d,c]=(0,r.useState)(null);return(0,i.jsxs)("div",{className:"grid grid-rows-2 gap-2 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-1 lg:grid-rows-2 min-h-[500px] md:min-h-[246px] lg:min-h-[370px]",children:[(0,i.jsx)("div",{className:"m-0",children:(0,i.jsx)(a.nu,{ref:n,data:t,options:{responsive:!0,plugins:{legend:{display:!1}},animation:{duration:2e3},maintainAspectRatio:!1},onMouseMove:e=>{if(!(s=n.current))return;let l=s.getElementsAtEventForMode(e,"nearest",{intersect:!0},!1);0!==l.length?c(l[0].index):null!==d&&c(null)},onMouseLeave:()=>c(null)})}),(0,i.jsx)("div",{className:"bg-black m-5 p-5 rounded-box text-base-content",children:null!==d?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o,{children:l[d].name}),(0,i.jsx)("p",{className:"text-white",children:l[d].exemple})]}):(0,i.jsx)("p",{className:"text-lg font-semibold",children:"S\xe9lectionnez une comp\xe9tence"})})]})},d=e=>{let{children:s}=e,l=(0,r.useRef)(null),[t,a]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=new IntersectionObserver((e,s)=>{let[l]=e;l.isIntersecting&&(a(!0),s.unobserve(l.target))},{threshold:.1});return l.current&&e.observe(l.current),()=>{l.current&&e.disconnect()}},[]),(0,i.jsx)("section",{ref:l,className:"bg-base-100 flex py-5 flex-col gap-5 md:grid grid-cols-2 rounded-box shadow-lg border border-base-300 ".concat(t?"opacity-100 transition-opacity duration-500":"opacity-0"),children:s})},c=e=>{let{children:s,addClass:l=""}=e;return(0,i.jsx)("div",{className:"px-5 rounded-box text-base-content"+l,children:s})},u=e=>{let{children:s}=e;return(0,i.jsx)("h3",{className:"font-bold",children:s})};var m=l(3418),x=l(9448),h=l(5032),p=l(5055);function j(){let[e,s]=(0,r.useState)(null),[l,t]=(0,r.useState)(null);if((0,r.useEffect)(()=>{fetch("/data/data_json.json").then(e=>{if(!e.ok)throw Error("HTTP error! status: ".concat(e.status));return e.json()}).then(e=>{s(e)}).catch(e=>{t(e.message)})},[]),l)return(0,i.jsxs)("div",{children:["Error: ",l]});if(null===e)return(0,i.jsx)("div",{children:"Loading..."});let a=e.listSocial.map((e,s)=>(0,i.jsx)("li",{children:(0,i.jsx)("a",{className:"transition duration-300 ease-in-out transform will-change-transform w-full hover:scale-125 text-center",target:e.target?e.target:"_blank",rel:"noopener noreferrer","aria-label":e.ariaLabel,href:e.href,children:(0,i.jsx)(m.g,{icon:e.icon,className:"link-hover text-4xl md:text-6xl"})})},s));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d,{className:"bg-base-100 flex py-5 flex-col gap-5 md:grid grid-cols-2 rounded-box shadow-lg border border-base-300",children:[(0,i.jsx)("div",{className:"p-2 md:col-start-2 md:flex flex-col justify-center rounded-box",children:(0,i.jsx)("ul",{className:"flex justify-around",children:a})}),(0,i.jsx)("div",{className:"bg-primary h-64 w-64 mx-auto md:col-start-1 md:row-start-1 rounded-box"}),(0,i.jsx)(c,{children:(0,i.jsx)("h1",{className:"text-xl font-bold",children:"Lorem ipsum"})}),(0,i.jsx)(c,{children:(0,i.jsx)(o,{className:"text-lg font-semibold",children:"Loremipsum"})}),(0,i.jsx)(c,{addClass:" md:col-span-2",children:(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nisi iure! Suscipit saepe nostrum exercitationem similique dolores quae ducimus debitis, id natus, nihil aperiam fugit qui excepturi, soluta obcaecati omnis!"})})]}),(0,i.jsxs)(d,{className:"bg-base-100 min-h-fulls flex py-5 flex-col gap-5 lg:grid grid-cols-2 rounded-box shadow-lg border border-base-300",children:[(0,i.jsx)(c,{addClass:" lg:col-span-2",children:(0,i.jsx)(o,{className:"text-lg font-semibold",children:"Titre Section"})}),(0,i.jsx)(c,{addClass:" md:col-span-2 lg:col-span-1",children:(0,i.jsxs)("ul",{className:"flex flex-col gap-5",children:[(0,i.jsxs)("li",{children:[(0,i.jsx)(u,{className:"font-bold",children:"Lorem, ipsum dolor sit"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(u,{className:"font-bold",children:"Lorem, ipsum dolor sit"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(u,{className:"font-bold",children:"Lorem, ipsum dolor sit"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(u,{className:"font-bold",children:"Lorem, ipsum dolor sit"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."})]})]})}),(0,i.jsx)("div",{className:"rounded-box text-base-content md:col-span-2 lg:col-span-1",children:(0,i.jsx)(n,{data_skills:e.skills.technicalSkills})})]}),(0,i.jsxs)(d,{className:"bg-base-100 min-h-fulls flex py-5 flex-col gap-5 rounded-box shadow-lg border border-base-300",children:[(0,i.jsx)(c,{children:(0,i.jsx)(o,{className:"text-lg font-semibold",children:"Titre Section"})}),(0,i.jsx)(c,{addClass:" md:col-span-2",children:(0,i.jsxs)("ul",{className:"flex flex-col gap-5",children:[(0,i.jsxs)("li",{children:[(0,i.jsx)(u,{className:"font-bold",children:"Lorem, ipsum dolor sit"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(u,{className:"font-bold",children:"Lorem, ipsum dolor sit"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(u,{className:"font-bold",children:"Lorem, ipsum dolor sit"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(u,{className:"font-bold",children:"Lorem, ipsum dolor sit"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."})]})]})})]}),(0,i.jsxs)(d,{className:"bg-base-100 min-h-fulls flex py-5 flex-col gap-5 rounded-box shadow-lg border border-base-300",children:[(0,i.jsx)(c,{children:(0,i.jsx)(o,{className:"text-lg font-semibold",children:"Titre Section"})}),(0,i.jsx)(c,{addClass:" lg:col-span-2",children:(0,i.jsxs)("ul",{className:"flex justify-around",children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{className:"bg-primary w-10 h-10 rounded-full"})}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{className:"bg-primary w-10 h-10 rounded-full"})}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{className:"bg-primary w-10 h-10 rounded-full"})})]})})]})]})}x.Yv.add(h.Vz1,h.IAJ,h._X9,p.KKr,p.muz,p.y_8,p.e68,p.lEd,p.Hzw)}},e=>{var s=s=>e(e.s=s);e.O(0,[647,266,802,510,441,517,358],()=>s(4518)),_N_E=e.O()}]);