import{o as $,E as j,$ as N,G as P,f as y,V as G,a as J,y as h,J as X,g as C,p as T,a0 as H,a1 as Q,L as W,s as Y,_ as B,r as f,h as v,i as S,j as n,w as d,l as x,X as k,t as V,P as Z,q as ee,R as te,k as R}from"../index45929.js";const ae={setup(){$(()=>{i.value=!0,e.value={first:0,rows:M.value.rows,sortField:null,sortOrder:null,filters:b.value},j.register("myfilter",(t,o)=>t===o),g()});const u=N(),l=P(),p=y(()=>u.responseUsers),a=y(()=>u.userRoles),D=y(()=>u.status),_=G(),U=y(()=>_.submitDialog),c=y(()=>_.cancelDialog),w=J(),M=h(),m=h(),b=h({global:{value:null,matchMode:"like"},email:{value:"",matchMode:"like"},created_at:{value:"",matchMode:"like"},birthdate:{value:"",matchMode:"like"},role:{value:"",matchMode:"eq"},enabled:{value:"",matchMode:"eq"},wp_id:{value:"",matchMode:"eq"}}),i=h(!0),e=h(),s=h(0),r=h([{label:"My Filter",value:"myfilter"}]);function g(){i.value=!0;let t=new Map;t=X(b,t),t.delete("location_eq"),t.delete("global"),t.set("page",e.value.page+1),t.set("per_page",e.value.rows),e.value.sortField&&(e.value.sortOrder==1?t.set("sorted_by",e.value.sortField+"_asc"):t.set("sorted_by",e.value.sortField+"_desc")),setTimeout(()=>{I(t)},Math.random()*1e3+250)}const I=async function(t){await u.fetchAllUsers(t).then(()=>{i.value=!1}).catch(o=>{i.value=!1,C(w,o)})},K=t=>{e.value=t,g()},O=t=>{e.value=t,g()},q=()=>{e.value.page=0,e.value.filters=b.value,g()},z=function(t){l.setDetailType("user",!1,"Dettaglio utente",t.id),l.updateSidebar(!0)},A=function(t,o){m.value=o;let F="";o.enabled?F="Sei sicuro di voler attivare l'utente <b>"+(o==null?void 0:o.email)+"</b> ?":F="Sei sicuro di voler disattivare l'utente <b>"+(o==null?void 0:o.email)+"</b> ?",_.setDialog("Cambia stato","Conferma","Annulla",F),_.setDynamicDialogVisibility(!0)},E=async function(){var o;i.value=!0;const t={user_id:m.value.id,user:{enabled:(o=m.value)==null?void 0:o.enabled}};await u.updateUser(t).then(()=>{i.value=!1,Y(w,{message:"Stato aggiornato correttamente",error:!1}),g()}).catch(F=>{i.value=!1,C(w,F)})},L=function(t){return t!=null&&t.cluster?t.cluster:""};return T(U,()=>{E()}),T(c,()=>{m.value.enabled=!m.value.enabled}),{dt:M,responseUsers:p,filters:b,loading:i,totalRecords:s,lazyParams:e,matchModes:r,userRoles:a,currentUser:m,status:D,onPage:K,onSort:O,onFilter:q,showSidebar:z,loadLazyData:g,onChangeStatus:A,getRowClass:L,prettyUserRole:H,formatPrettyDate:Q,formatDataFromUnixTimestamps:W}},components:{}};const oe={class:"user-table"},le={key:0},se={key:1};function ne(u,l,p,a,D,_){const U=f("InputText"),c=f("Column"),w=f("Calendar"),M=f("Dropdown"),m=f("Badge"),b=f("InputSwitch"),i=f("DataTable");return v(),S("div",oe,[n(i,{value:a.responseUsers.users,totalRecords:a.responseUsers.total,lazy:!0,paginator:!0,rows:30,filters:a.filters,"onUpdate:filters":l[0]||(l[0]=e=>a.filters=e),ref:"dt",dataKey:"id",loading:a.loading,onPage:l[1]||(l[1]=e=>a.onPage(e)),onSort:l[2]||(l[2]=e=>a.onSort(e)),onFilter:l[3]||(l[3]=e=>a.onFilter()),filterDisplay:"row",removableSort:"",stripedRows:"",rowClass:a.getRowClass},{empty:d(()=>[x(" Nessun utente trovato. ")]),default:d(()=>[n(c,{field:"email",header:"Email",filterMatchMode:"contains",ref:"email",sortable:!1,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:d(({filterModel:e,filterCallback:s})=>[n(U,{type:"text",modelValue:e.value,"onUpdate:modelValue":r=>e.value=r,onKeydown:k(r=>s(),["enter"]),class:"p-column-filter",placeholder:"Filtra per email"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512),n(c,{field:"full_name",header:"Nome Cognome"}),n(c,{header:"Data di nascita",field:"birthdate",ref:"birthdate"},{body:d(({data:e})=>[e.birthdate?(v(),S("span",le,V(a.formatPrettyDate(e==null?void 0:e.birthdate)),1)):(v(),S("span",se,"-"))]),_:1},512),n(c,{header:"Data creazione",field:"created_at",filterMatchMode:"contains",ref:"created_at",sortable:!0,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:d(({filterModel:e,filterCallback:s})=>[n(w,{inputId:"dateformat",modelValue:e.value,"onUpdate:modelValue":r=>e.value=r,dateFormat:"dd/mm/yy",onKeydown:k(r=>s(),["enter"]),manualInput:!1,placeholder:"Filtra per data",onDateSelect:r=>s()},null,8,["modelValue","onUpdate:modelValue","onKeydown","onDateSelect"])]),body:d(({data:e})=>[x(V(a.formatDataFromUnixTimestamps(e==null?void 0:e.created_at)),1)]),_:1},512),n(c,{header:"Ruolo",ref:"role",field:"role",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,sortable:""},{filter:d(({filterModel:e,filterCallback:s})=>[n(M,{modelValue:e.value,"onUpdate:modelValue":r=>e.value=r,options:a.userRoles,optionLabel:"name",optionValue:"value",onChange:r=>s(),placeholder:"Filtra per ruolo"},null,8,["modelValue","onUpdate:modelValue","options","onChange"])]),body:d(({data:e})=>[e&&e.role?(v(),Z(m,{key:0,value:a.prettyUserRole(e.role),class:ee(["px-4 border-round-lg h-auto font-medium line-height-4",e.role])},null,8,["value","class"])):te("",!0)]),_:1},512),n(c,{header:"Stato",filterMatchMode:"contains",ref:"enabled",field:"enabled",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{body:d(({data:e})=>[n(b,{modelValue:e.enabled,"onUpdate:modelValue":s=>e.enabled=s,onChange:s=>a.onChangeStatus(s,e)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1},512)]),_:1},8,["value","totalRecords","filters","loading","rowClass"])])}const re=B(ae,[["render",ne]]),ie={setup(){const u=N(),l=y(()=>u.getTotalUsers),p=P();return{totalUser:l,showSidebar:function(){p.setDetailType("user",!0,"Nuovo utente",null),p.updateSidebar(!0),p.setShowDetail(!0)}}},components:{UsersTable:re}},ue={class:"flex justify-content-between align-items-center"},de={class:""},ce={key:0},me={key:1};function fe(u,l,p,a,D,_){const U=f("UsersTable");return v(),S("div",null,[R("div",ue,[R("h1",de,[a.totalUser==1?(v(),S("span",ce," 1 Utente")):(v(),S("span",me,V(a.totalUser)+" Utenti",1))])]),n(U)])}const he=B(ie,[["render",fe]]);export{he as default};
