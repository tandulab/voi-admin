import{o as U,y as B,J as T,A as x,f as C,a as R,B as _,C as z,g as A,D as K,_ as D,r as p,E as j,h as w,i as k,j as n,w as s,k as v,l as y,G as V,t as u,H as q}from"../index12853.js";const L={setup(){U(()=>{c.value=!0,r.value={first:0,rows:M.value.rows,sortField:null,sortOrder:null,filters:l.value},B.register("myfilter",(t,b)=>t===b),h()});const f=T(),o=x(),m=C(()=>f.status),a=C(()=>f.responsePackage),S=R(),M=_(),g=_(),l=_({global:{value:null,matchMode:"like"},name:{value:"",matchMode:"like"},email:{value:"",matchMode:"eq"},created_at:{value:"",matchMode:"like"},role:{value:"",matchMode:"eq"},location:{value:"",matchMode:"eq"},enabled:{value:"",matchMode:"eq"}}),c=_(!0),r=_(),F=_(0),P=_([{label:"My Filter",value:"myfilter"}]);function h(){var b;c.value=!0;let t=new Map;(b=l.value.global)!=null&&b.value&&t.set("name_like",l.value.global.value),t=z(l,t),t.delete("location_eq"),t.delete("global"),t.set("page",r.value.page+1),t.set("per_page",r.value.rows),r.value.sortField&&(r.value.sortOrder==1?t.set("sorted_by",r.value.sortField+"_asc"):t.set("sorted_by",r.value.sortField+"_desc")),setTimeout(()=>{e(t)},Math.random()*1e3+250)}const e=async function(t){await f.fetchAllPackages(t).then(()=>{c.value=!1}).catch(b=>{c.value=!1,A(S,b)})};return{dt:M,responsePackages:a,filters:l,loading:c,totalRecords:F,lazyParams:r,matchModes:P,currentPackage:g,status:m,onPage:t=>{r.value=t,h()},onSort:t=>{r.value=t,h()},onFilter:()=>{r.value.page=0,r.value.filters=l.value,h()},showSidebar:function(t){o.setDetailType("package",!1,"Dettaglio pacchetto",t.id),o.updateSidebar(!0)},loadLazyData:h,changeStatus:async function(t){},getRowClass:function(t){return t!=null&&t.cluster?t.cluster:""},formatDataFromUnixTimestamps:K}},components:{}};const N={class:"user-table"},O={class:"flex justify-content-between align-items-center"},I={class:"p-input-icon-left w-full mr-3 py-2"},$=v("i",{class:"pi pi-search"},null,-1),E={key:0},G={key:1},H=v("div",{class:"flex justify-content-center w-full"},"Durata (min)",-1),J={class:"flex justify-content-center"};function Q(f,o,m,a,S,M){const g=p("InputText"),l=p("Column"),c=p("Calendar"),r=p("Dropdown"),F=p("Button"),P=p("DataTable"),h=j("tooltip");return w(),k("div",N,[n(P,{value:a.responsePackages.packages,totalRecords:a.responsePackages.total,lazy:!0,paginator:!0,rows:30,filters:a.filters,"onUpdate:filters":o[1]||(o[1]=e=>a.filters=e),ref:"dt",dataKey:"id",loading:a.loading,onPage:o[2]||(o[2]=e=>a.onPage(e)),onSort:o[3]||(o[3]=e=>a.onSort(e)),onFilter:o[4]||(o[4]=e=>a.onFilter()),filterDisplay:"row",removableSort:"",stripedRows:"",rowClass:a.getRowClass},{header:s(()=>[v("div",O,[v("span",I,[$,n(g,{modelValue:a.filters.global.value,"onUpdate:modelValue":o[0]||(o[0]=e=>a.filters.global.value=e),placeholder:"Ricerca per titolo",class:"border-none w-full",onChange:a.loadLazyData},null,8,["modelValue","onChange"])])])]),empty:s(()=>[y(" Nessun pacchetto trovato. ")]),default:s(()=>[n(l,{field:"name",header:"Titolo",filterMatchMode:"contains",ref:"name",sortable:!1,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:s(({filterModel:e,filterCallback:d})=>[n(g,{type:"text",modelValue:e.value,"onUpdate:modelValue":i=>e.value=i,onKeydown:V(i=>d(),["enter"]),class:"p-column-filter",placeholder:"Filtra per titolo"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),body:s(({data:e})=>[y(u(e==null?void 0:e.name),1)]),_:1},512),n(l,{header:"Location",filterMatchMode:"contains",ref:"location",field:"location"},{body:s(({data:e})=>[y(u(e.location||"-"),1)]),_:1},512),n(l,{header:"Lingue",filterMatchMode:"contains",ref:"location",field:"location"},{body:s(({data:e})=>[y(u(e.languages||"-"),1)]),_:1},512),n(l,{header:"Data creazione",field:"created_at",filterMatchMode:"contains",ref:"created_at",sortable:!0,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:s(({filterModel:e,filterCallback:d})=>[n(c,{inputId:"dateformat",modelValue:e.value,"onUpdate:modelValue":i=>e.value=i,dateFormat:"dd/mm/yy",onKeydown:V(i=>d(),["enter"]),manualInput:!1,placeholder:"Filtra per data",onDateSelect:i=>d()},null,8,["modelValue","onUpdate:modelValue","onKeydown","onDateSelect"])]),body:s(({data:e})=>[y(u(a.formatDataFromUnixTimestamps(e==null?void 0:e.created_at)),1)]),_:1},512),n(l,{header:"Prezzo",ref:"price",field:"price"},{body:s(({data:e})=>[e.price?(w(),k("span",E,u(e.price)+"€",1)):(w(),k("span",G,"-"))]),_:1},512),n(l,{header:"",filterMatchMode:"contains",ref:"location",field:"location"},{header:s(()=>[H]),body:s(({data:e})=>[v("div",J,u(e.duration||"-"),1)]),_:1},512),n(l,{header:"Stato",filterMatchMode:"contains",ref:"enabled",field:"enabled",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:s(({filterModel:e,filterCallback:d})=>[n(r,{modelValue:e.value,"onUpdate:modelValue":i=>e.value=i,options:a.status,optionLabel:"name",optionValue:"value",onChange:i=>d(),placeholder:"Filtra per stato"},null,8,["modelValue","onUpdate:modelValue","options","onChange"])]),body:s(({data:e})=>[y(u(e.enabled?"Attivo":"Disattivo"),1)]),_:1},512),n(l,{header:"",style:{width:"4rem"}},{body:s(({data:e})=>[q(n(F,{type:"button",onClick:d=>a.showSidebar(e),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"mr-3",icon:"pi pi-arrow-right",text:"",rounded:""},null,8,["onClick"]),[[h,"Modifica",void 0,{top:!0}]])]),_:1})]),_:1},8,["value","totalRecords","filters","loading","rowClass"])])}const W=D(L,[["render",Q]]),X={setup(){const f=T(),o=C(()=>f.getTotalPackages),m=x();return{totalPackages:o,showSidebar:function(){m.setDetailType("package",!0,"Nuovo pacchetto",null),m.updateSidebar(!0),m.setShowDetail(!0)}}},components:{PackagesTable:W}},Y={class:"flex justify-content-between align-items-center"},Z={class:""},ee={key:0},te={key:1};function ae(f,o,m,a,S,M){const g=p("Button"),l=p("PackagesTable");return w(),k("div",null,[v("div",Y,[v("h1",Z,[a.totalPackages==1?(w(),k("span",ee," 1 Pacchetto")):(w(),k("span",te,u(a.totalPackages)+" Pacchetti",1))]),n(g,{label:"Aggiungi pacchetto",onClick:o[0]||(o[0]=c=>a.showSidebar()),class:"mb-3",rounded:"",outlined:""})]),n(l)])}const ie=D(X,[["render",ae]]);export{ie as default};
