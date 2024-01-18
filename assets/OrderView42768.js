import{a1 as x,o as S,E as N,y as b,f as C,G as D,a2 as V,a as k,g as A,a3 as B,a4 as v,_ as M,r as c,M as U,h as p,P as I,w as o,j as r,l as F,t as y,i as w,O as E,N as T,Q as L,k as g}from"../index42768.js";const $={name:"OrdersTable",methods:{formatDataAndHourFromUnixTimestamps:x},setup(){S(()=>{N.register("myfilter",(a,i)=>a===i),s(new Map)});const u=b(!0),n=C(()=>m.allOrders),_=b({global:{value:null,matchMode:v.CONTAINS},"user.email":{value:null,matchMode:v.CONTAINS},created_at:{value:null,matchMode:v.CONTAINS}});b([{label:"My Filter",value:"myfilter"}]);const t=D(),m=V(),f=k(),l=function(a){return B(a)},s=async function(a){await m.fetchAllOrders(a).then(()=>{u.value=!1}).catch(i=>{A(f,i)})};return{isLoading:u,filters:_,getOrderName:l,showSidebar:function(a){t.setDetailType("orders",!1,"Dettaglio ordine",a.id,!1,!1),t.updateSidebar(!0)},orders:n}}};function P(u,n,_,t,m,f){const l=c("InputText"),s=c("Column"),O=c("Button"),a=c("DataTable"),i=U("tooltip");return p(),I(a,{value:t.orders,loading:t.isLoading,filters:t.filters,"onUpdate:filters":n[0]||(n[0]=e=>t.filters=e),filterDisplay:"row"},{default:o(()=>[r(s,{header:"Email utente",field:"Email utente",filterField:"user.email",filterMatchMode:"contains",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:o(({filterModel:e,filterCallback:d})=>[r(l,{modelValue:e.value,"onUpdate:modelValue":h=>e.value=h,type:"text",placeholder:"Filtra per email"},null,8,["modelValue","onUpdate:modelValue"])]),body:o(({data:e})=>[F(y(e.user.email),1)]),_:1}),r(s,{header:"Data",field:"Data",filterField:"created_at",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:o(({filterModel:e,filterCallback:d})=>[r(l,{modelValue:e.value,"onUpdate:modelValue":h=>e.value=h,type:"text",placeholder:"Filtra per data"},null,8,["modelValue","onUpdate:modelValue"])]),body:o(({data:e})=>[F(y(f.formatDataAndHourFromUnixTimestamps(e.created_at)),1)]),_:1}),r(s,{header:"Prodotti",field:"Prodotti"},{body:o(({data:e})=>[(p(!0),w(T,null,E(e.order_items,d=>(p(),w("li",{key:d},y(t.getOrderName(d)),1))),128))]),_:1}),r(s,{header:"",style:{width:"4rem"}},{body:o(({data:e})=>[L(r(O,{type:"button",onClick:d=>t.showSidebar(e),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"mr-3",icon:"pi pi-arrow-right",text:"",rounded:""},null,8,["onClick"]),[[i,"Modifica",void 0,{top:!0}]])]),_:1})]),_:1},8,["value","loading","filters"])}const j=M($,[["render",P]]),G={components:{OrdersTable:j},setup(){}},H=g("div",{class:"flex justify-content-between align-items-center"},[g("h1",null," Ordini ")],-1);function Q(u,n,_,t,m,f){const l=c("OrdersTable");return p(),w(T,null,[H,r(l)],64)}const z=M(G,[["render",Q]]);export{z as default};
