import{o as U,y as B,K as T,A as x,f as V,a as R,B as v,C as K,g as z,D as N,_ as k,r as c,E as q,h as M,i as S,j as s,w as r,k as y,l as g,G as D,t as b,H as A}from"../index53817.js";const O={setup(){U(()=>{d.value=!0,n.value={first:0,rows:w.value.rows,sortField:null,sortOrder:null,filters:l.value},B.register("myfilter",(t,h)=>t===h),p()});const m=T(),a=x(),f=V(()=>m.status),o=V(()=>m.responseGuides),F=R(),w=v(),_=v(),l=v({global:{value:null,matchMode:"like"},name:{value:"",matchMode:"like"},email:{value:"",matchMode:"eq"},created_at:{value:"",matchMode:"like"},role:{value:"",matchMode:"eq"},location:{value:"",matchMode:"eq"},enabled:{value:"",matchMode:"eq"}}),d=v(!0),n=v(),C=v(0),G=v([{label:"My Filter",value:"myfilter"}]);function p(){var h;d.value=!0;let t=new Map;(h=l.value.global)!=null&&h.value&&t.set("name_like",l.value.global.value),t=K(l,t),t.delete("location_eq"),t.delete("global"),t.set("page",n.value.page+1),t.set("per_page",n.value.rows),n.value.sortField&&(n.value.sortOrder==1?t.set("sorted_by",n.value.sortField+"_asc"):t.set("sorted_by",n.value.sortField+"_desc")),setTimeout(()=>{e(t)},Math.random()*1e3+250)}const e=async function(t){await m.fetchAllGuides(t).then(()=>{d.value=!1}).catch(h=>{d.value=!1,z(F,h)})};return{dt:w,responseGuides:o,filters:l,loading:d,totalRecords:C,lazyParams:n,matchModes:G,currentGuide:_,status:f,onPage:t=>{n.value=t,p()},onSort:t=>{n.value=t,p()},onFilter:()=>{n.value.page=0,n.value.filters=l.value,p()},showSidebar:function(t){a.setDetailType("guide",!1,"Dettaglio guida",t.id),a.updateSidebar(!0)},loadLazyData:p,changeStatus:async function(t){},getRowClass:function(t){return t!=null&&t.cluster?t.cluster:""},formatDataFromUnixTimestamps:N}},components:{}};const P={class:"user-table"},I={class:"flex justify-content-between align-items-center"},j={class:"p-input-icon-left w-full mr-3 py-2"},L=y("i",{class:"pi pi-search"},null,-1);function $(m,a,f,o,F,w){const _=c("InputText"),l=c("Column"),d=c("Calendar"),n=c("Dropdown"),C=c("Button"),G=c("DataTable"),p=q("tooltip");return M(),S("div",P,[s(G,{value:o.responseGuides.users,totalRecords:o.responseGuides.total,lazy:!0,paginator:!0,rows:30,filters:o.filters,"onUpdate:filters":a[1]||(a[1]=e=>o.filters=e),ref:"dt",dataKey:"id",loading:o.loading,onPage:a[2]||(a[2]=e=>o.onPage(e)),onSort:a[3]||(a[3]=e=>o.onSort(e)),onFilter:a[4]||(a[4]=e=>o.onFilter()),filterDisplay:"row",removableSort:"",stripedRows:"",rowClass:o.getRowClass},{header:r(()=>[y("div",I,[y("span",j,[L,s(_,{modelValue:o.filters.global.value,"onUpdate:modelValue":a[0]||(a[0]=e=>o.filters.global.value=e),placeholder:"Ricerca per titolo",class:"border-none w-full",onChange:o.loadLazyData},null,8,["modelValue","onChange"])])])]),empty:r(()=>[g(" Nessuna guida trovata. ")]),default:r(()=>[s(l,{field:"name",header:"Nome Cognome",filterMatchMode:"contains",ref:"name",sortable:!1,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:r(({filterModel:e,filterCallback:u})=>[s(_,{type:"text",modelValue:e.value,"onUpdate:modelValue":i=>e.value=i,onKeydown:D(i=>u(),["enter"]),class:"p-column-filter",placeholder:"Filtra per cognome"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),body:r(({data:e})=>[g(b(e==null?void 0:e.first_name)+" "+b(e==null?void 0:e.last_name),1)]),_:1},512),s(l,{header:"Foto",filterMatchMode:"contains",ref:"location",field:"location"},{body:r(({data:e})=>[g(" - ")]),_:1},512),s(l,{header:"Descrizione",filterMatchMode:"contains",ref:"location",field:"location"},{body:r(({data:e})=>[g(" - ")]),_:1},512),s(l,{header:"Data creazione",field:"created_at",filterMatchMode:"contains",ref:"created_at",sortable:!0,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:r(({filterModel:e,filterCallback:u})=>[s(d,{inputId:"dateformat",modelValue:e.value,"onUpdate:modelValue":i=>e.value=i,dateFormat:"dd/mm/yy",onKeydown:D(i=>u(),["enter"]),manualInput:!1,placeholder:"Filtra per data",onDateSelect:i=>u()},null,8,["modelValue","onUpdate:modelValue","onKeydown","onDateSelect"])]),body:r(({data:e})=>[g(b(o.formatDataFromUnixTimestamps(e==null?void 0:e.created_at)),1)]),_:1},512),s(l,{header:"Stato",filterMatchMode:"contains",ref:"enabled",field:"enabled",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:r(({filterModel:e,filterCallback:u})=>[s(n,{modelValue:e.value,"onUpdate:modelValue":i=>e.value=i,options:o.status,optionLabel:"name",optionValue:"value",onChange:i=>u(),placeholder:"Filtra per stato"},null,8,["modelValue","onUpdate:modelValue","options","onChange"])]),body:r(({data:e})=>[g(b(e.enabled?"Attivo":"Disattivo"),1)]),_:1},512),s(l,{header:"",style:{width:"4rem"}},{body:r(({data:e})=>[A(s(C,{type:"button",onClick:u=>o.showSidebar(e),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"mr-3",icon:"pi pi-arrow-right",text:"",rounded:""},null,8,["onClick"]),[[p,"Modifica",void 0,{top:!0}]])]),_:1})]),_:1},8,["value","totalRecords","filters","loading","rowClass"])])}const E=k(O,[["render",$]]),H={setup(){const m=T(),a=V(()=>m.getTotalGuides),f=x();return{totalGuides:a,showSidebar:function(){f.setDetailType("guide",!0,"Nuova guida",null),f.updateSidebar(!0),f.setShowDetail(!0)}}},components:{GuidesTable:E}},J={class:"flex justify-content-between align-items-center"},Q={class:""},W={key:0},X={key:1};function Y(m,a,f,o,F,w){const _=c("Button"),l=c("GuidesTable");return M(),S("div",null,[y("div",J,[y("h1",Q,[o.totalGuides==1?(M(),S("span",W," 1 Guida")):(M(),S("span",X,b(o.totalGuides)+" Guide",1))]),s(_,{label:"Aggiungi guida",onClick:a[0]||(a[0]=d=>o.showSidebar()),class:"mb-3",rounded:"",outlined:""})]),s(l)])}const le=k(H,[["render",Y]]);export{le as default};
