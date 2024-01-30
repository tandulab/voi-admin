import{o as I,E,U as j,G as q,V as G,f as P,a as J,y as m,J as W,W as X,g as z,L as $,_ as B,r as f,M as H,h as _,i as b,j as a,w as s,k as h,l as x,X as A,t as y,R as L,S as O,P as N}from"../index45929.js";const Q={setup(){I(()=>{r.value=!0,i.value={first:0,rows:g.value.rows,sortField:null,sortOrder:null,filters:w.value},E.register("myfilter",(t,u)=>t===u),e()});const v=j(),n=q(),d=G(),o=P(()=>v.status),C=P(()=>v.responseReviews),R=J(),g=m(),p=m(),V=m(),M=m(),w=m({global:{value:null,matchMode:"like"},name:{value:"",matchMode:"like"},users_email_like:{value:"",matchMode:"link"},created_at:{value:"",matchMode:"like"},role:{value:"",matchMode:"eq"},location:{value:"",matchMode:"eq"},enabled:{value:"",matchMode:"eq"}}),r=m(!0),i=m(),k=m(0),S=m([{label:"My Filter",value:"myfilter"}]);function e(){var u;r.value=!0;let t=new Map;(u=w.value.global)!=null&&u.value&&t.set("users_email_like",w.value.global.value),t=W(w,t),t.delete("location_eq"),t.delete("global_like"),t.set("page",i.value.page+1),t.set("per_page",i.value.rows),i.value.sortField&&(i.value.sortOrder==1?t.set("sorted_by",i.value.sortField+"_asc"):t.set("sorted_by",i.value.sortField+"_desc")),setTimeout(()=>{l(t)},Math.random()*1e3+250)}const l=async function(t){await v.fetchAllReviews(t).then(()=>{console.log(X(C.value.reviews)),r.value=!1}).catch(u=>{r.value=!1,z(R,u)})};return{dt:g,responseReviews:C,filters:w,loading:r,totalRecords:k,lazyParams:i,matchModes:S,currentReview:p,status:o,onPage:t=>{i.value=t,e()},onSort:t=>{i.value=t,e()},onFilter:()=>{i.value.page=0,i.value.filters=w.value,e()},showSidebar:function(t){n.setDetailType("review",!1,"Dettaglio recensione",t.id),n.updateSidebar(!0)},loadLazyData:e,changeStatus:async function(t){},getRowClass:function(t){return t!=null&&t.cluster?t.cluster:""},approveReview:function(t){if(t.approved==null){const u="Approva recensione",F="Sei sicuro di voler approvare questa recensione?",D="Annulla",T="Conferma";d.setDialog(u,T,D,F,async()=>{await v.approveReview(t).then(()=>{r.value=!1}).catch(U=>{r.value=!1,z(R,U)}),e()}),d.setDynamicDialogVisibility(!0)}},rejectReview:function(t){if(t.approved==null){const u="Rifiuta recensione",F="Sei sicuro di voler rifiutare questa recensione?",D="Annulla",T="Conferma";d.setDialog(u,T,D,F,async U=>{t.unapproved_text=U,await v.unapproveReview(t).then(()=>{r.value=!1}).catch(K=>{r.value=!1,z(R,K)}),e()},void 0,!0,"Commento","Il commento è obbligatorio"),d.setDynamicDialogVisibility(!0)}},op:V,toggleComment:(t,u)=>{M.value=u,V.value.toggle(t)},commentData:M,formatDataFromUnixTimestamps:$}},components:{}};const Y={class:"user-table"},Z={class:"flex justify-content-between align-items-center"},ee={class:"p-input-icon-left w-full mr-3 py-2"},te=h("i",{class:"pi pi-search"},null,-1),oe=h("div",{class:"text-center w-full"},"Stato",-1),le={key:0,class:"text-center"},ae={key:0,class:"pi pi-check-circle text-green-500 text-xl"},ne={key:1,class:"pi pi-times-circle text-red-500 text-xl"},se={class:"flex align-items-center"};function ie(v,n,d,o,C,R){const g=f("InputText"),p=f("Column"),V=f("Calendar"),M=f("vue3-star-ratings"),w=f("Dropdown"),r=f("Button"),i=f("OverlayPanel"),k=f("DataTable"),S=H("tooltip");return _(),b("div",Y,[a(k,{value:o.responseReviews.reviews,totalRecords:o.responseReviews.total,lazy:!0,paginator:!0,rows:30,filters:o.filters,"onUpdate:filters":n[1]||(n[1]=e=>o.filters=e),ref:"dt",dataKey:"id",loading:o.loading,onPage:n[2]||(n[2]=e=>o.onPage(e)),onSort:n[3]||(n[3]=e=>o.onSort(e)),onFilter:n[4]||(n[4]=e=>o.onFilter()),removableSort:"",stripedRows:"",rowClass:o.getRowClass},{header:s(()=>[h("div",Z,[h("span",ee,[te,a(g,{modelValue:o.filters.global.value,"onUpdate:modelValue":n[0]||(n[0]=e=>o.filters.global.value=e),placeholder:"Ricerca per email",class:"border-none w-full",onChange:o.loadLazyData},null,8,["modelValue","onChange"])])])]),empty:s(()=>[x(" Nessuna recensione trovata.")]),default:s(()=>[a(p,{field:"name",header:"Nome Cognome",filterMatchMode:"contains",ref:"name",sortable:!1,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:s(({filterModel:e,filterCallback:l})=>[a(g,{type:"text",modelValue:e.value,"onUpdate:modelValue":c=>e.value=c,onKeydown:A(c=>l(),["enter"]),class:"p-column-filter",placeholder:"Filtra per cognome"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),body:s(({data:e})=>{var l,c;return[x(y((l=e==null?void 0:e.user)==null?void 0:l.first_name)+" "+y((c=e==null?void 0:e.user)==null?void 0:c.last_name),1)]}),_:1},512),a(p,{field:"users_email_like",header:"Email",filterMatchMode:"contains",ref:"email"},{body:s(({data:e})=>{var l;return[x(y(((l=e==null?void 0:e.user)==null?void 0:l.email)||"-"),1)]}),_:1},512),a(p,{header:"Data creazione",field:"created_at",filterMatchMode:"contains",ref:"created_at",sortable:!1,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:s(({filterModel:e,filterCallback:l})=>[a(V,{inputId:"dateformat",modelValue:e.value,"onUpdate:modelValue":c=>e.value=c,dateFormat:"dd/mm/yy",onKeydown:A(c=>l(),["enter"]),manualInput:!1,placeholder:"Filtra per data",onDateSelect:c=>l()},null,8,["modelValue","onUpdate:modelValue","onKeydown","onDateSelect"])]),body:s(({data:e})=>[x(y(o.formatDataFromUnixTimestamps(e==null?void 0:e.created_at)),1)]),_:1},512),a(p,{header:"Audio itinerario"},{body:s(({data:e})=>[x(y(e.audio_guide.flat_translations.it.title),1)]),_:1}),a(p,{header:"Testo",filterMatchMode:"contains",ref:"text",field:"text"},null,512),a(p,{header:"Voto",field:"rating"},{body:s(({data:e})=>[a(M,{modelValue:e.rating,"onUpdate:modelValue":l=>e.rating=l,starSize:16,starColor:"#ff9800",inactiveColor:"#e6e5e5",numberOfStars:5,disableClick:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(p,{header:"",filterMatchMode:"contains",ref:"approved",field:"approved",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{header:s(()=>[oe]),filter:s(({filterModel:e,filterCallback:l})=>[a(w,{modelValue:e.value,"onUpdate:modelValue":c=>e.value=c,options:o.status,optionLabel:"name",optionValue:"value",onChange:c=>l(),placeholder:"Filtra per stato"},null,8,["modelValue","onUpdate:modelValue","options","onChange"])]),body:s(({data:e})=>[e.approved!=null?(_(),b("div",le,[e.approved?(_(),b("i",ae)):(_(),b("i",ne))])):L("",!0)]),_:1},512),a(p,{header:"",style:{width:"4rem"}},{body:s(({data:e})=>[h("div",null,[h("div",se,[O(a(r,{disabled:e.approved!=null,type:"button",onClick:l=>o.approveReview(e),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"mr-2",icon:"pi pi-thumbs-up",text:"",rounded:""},null,8,["disabled","onClick"]),[[S,"Approva",void 0,{top:!0}]]),e.approved==null||e.approved==!0?O((_(),N(r,{key:0,disabled:e.approved!=null,type:"button",onClick:l=>o.rejectReview(e),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"mr-3",icon:"pi pi-thumbs-down",text:"",rounded:""},null,8,["disabled","onClick"])),[[S,"Rifiuta",void 0,{top:!0}]]):L("",!0),e.approved==!1?O((_(),N(r,{key:1,type:"button",onClick:l=>o.toggleComment(l,e),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"mr-2",icon:"pi pi-comment",text:"",rounded:""},null,8,["onClick"])),[[S,"Visualizza commento",void 0,{top:!0}]]):L("",!0),a(i,{ref:"op"},{default:s(()=>[h("div",null,y(o.commentData.unapproved_text),1)]),_:1},512)])])]),_:1})]),_:1},8,["value","totalRecords","filters","loading","rowClass"])])}const re=B(Q,[["render",ie]]),ce={setup(){const v=j(),n=P(()=>v.getTotalReviews),d=q();return{totalReviews:n,showSidebar:function(){d.setDetailType("review",!0,"Nuova recensione",null),d.updateSidebar(!0),d.setShowDetail(!0)}}},components:{ReviewsTable:re}},ue={class:"flex justify-content-between align-items-center"},de={class:""},pe={key:0},ve={key:1};function me(v,n,d,o,C,R){const g=f("ReviewsTable");return _(),b("div",null,[h("div",ue,[h("h1",de,[o.totalReviews==1?(_(),b("span",pe," 1 Recensione")):(_(),b("span",ve,y(o.totalReviews)+" Recensioni",1))])]),a(g)])}const xe=B(ce,[["render",me]]);export{xe as default};
