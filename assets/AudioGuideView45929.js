import{o as P,y as b,z as q,A as $,B as U,C as j,f as S,D as E,_ as O,r as g,h as n,i as r,k as a,j as i,w as f,t as x,E as ie,G as I,H as ne,a as re,J as de,g as V,K as ce,L as ue,M as fe,N as L,O as B,P as z,l as D,Q as _e,q as N,R as me,S as ge}from"../index45929.js";const pe={props:["filters"],setup(p,l){P(()=>{p.filters&&(_.value=Object.assign({},p.filters))});const _=b({}),o=q(),w=$(),C=U(),y=j(),v=S(()=>w.responseCategories),d=S(()=>o.allTags),k=S(()=>C.allGuides),m=S(()=>y.status);return{form:_,categories:v,tags:d,guides:k,statuses:m,prettyCategoryGroup:E,saveData:function(){},toggleCancel:function(){},resetFilter:function(){_.value=null,l.emit("onSaveFilter",_.value)}}}},ve={class:"filter-component"},he={class:"col-12 flex m-0 p-0 align-items-center justify-content-between filter-header"},ye=a("h2",{class:"m-0"},"Filtri",-1),be={class:"formgrid grid mt-4 flex flex-column px-2"},xe={class:"field"},Se=a("label",{for:"category"},"Categoria",-1),Ae={class:"flex align-items-center"},we={class:"field flex flex-column"},Ce=a("label",{for:"tag"},"Tag",-1),Ge={class:"field flex flex-column"},ke=a("label",{for:"guide"},"Guida",-1),Me={class:"field flex flex-column"},Te=a("label",{for:"status"},"Stato",-1);function Fe(p,l,_,o,w,C){const y=g("Button"),v=g("Dropdown");return n(),r("div",ve,[a("div",he,[ye,a("div",null,[i(y,{label:"Annulla",text:"",rounded:"",class:"mr-3",size:"small",onClick:l[0]||(l[0]=d=>o.resetFilter())}),i(y,{label:"Applica",outlined:"",rounded:"",size:"small",onClick:l[1]||(l[1]=d=>p.$emit("onSaveFilter",o.form))})])]),a("div",be,[a("div",xe,[Se,i(v,{id:"category",modelValue:o.form.category_id,"onUpdate:modelValue":l[2]||(l[2]=d=>o.form.category_id=d),options:o.categories,optionLabel:"flat_translations.it",optionGroupLabel:"group",optionGroupChildren:"items",placeholder:"",class:"w-full"},{optiongroup:f(d=>[a("div",Ae,[a("div",null,x(o.prettyCategoryGroup(d.option.group)),1)])]),_:1},8,["modelValue","options"])]),a("div",we,[Ce,i(v,{id:"tag",modelValue:o.form.tag,"onUpdate:modelValue":l[3]||(l[3]=d=>o.form.tag=d),options:o.tags,optionLabel:"flat_translations.it",placeholder:""},null,8,["modelValue","options"])]),a("div",Ge,[ke,i(v,{id:"guide",modelValue:o.form.guide,"onUpdate:modelValue":l[4]||(l[4]=d=>o.form.guide=d),options:o.guides,optionLabel:"full_name",placeholder:""},null,8,["modelValue","options"])]),a("div",Me,[Te,i(v,{id:"status",modelValue:o.form.status,"onUpdate:modelValue":l[5]||(l[5]=d=>o.form.status=d),options:o.statuses,optionLabel:"name",optionValue:"value",placeholder:""},null,8,["modelValue","options"])])])])}const Ve=O(pe,[["render",Fe]]),Re={setup(){P(()=>{u.value=!0,h.value={first:0,rows:M.value.rows,sortField:null,sortOrder:null,filters:s.value},ie.register("myfilter",(t,c)=>t===c),G(),Q(),X(),W(),se()});const p=j(),l=I(),_=$(),o=U(),w=q(),C=ne(),y=S(()=>p.status),v=S(()=>p.responseAudioGuide),d=S(()=>_.responseCategories),k=S(()=>o.allGuides),m=S(()=>w.allTags),A=re(),M=b(),R=b(),T=b(),F=b(),e=b(),s=b({global:{value:null,matchMode:"like"},name:{value:"",matchMode:"like"},category_id:{value:"",matchMode:"eq"},created_at:{value:"",matchMode:"like"},tag:{value:"",matchMode:"eq"},location:{value:"",matchMode:"eq"},guide:{value:"",matchMode:"eq"},status:{value:"",matchMode:"eq"}}),u=b(!0),h=b(),K=b(0),H=b([{label:"My Filter",value:"myfilter"}]);function G(){var c;u.value=!0;let t=new Map;(c=s.value.global)!=null&&c.value&&t.set("it_title_like",s.value.global.value),t=de(s,t),t.delete("location_eq"),t.delete("global"),t.set("page",h.value.page+1),t.set("per_page",h.value.rows),h.value.sortField&&(h.value.sortOrder==1?t.set("sorted_by",h.value.sortField+"_asc"):t.set("sorted_by",h.value.sortField+"_desc")),setTimeout(()=>{J(t)},Math.random()*1e3+250)}const J=async function(t){await p.fetchAllAudioGuides(t).then(()=>{u.value=!1}).catch(c=>{u.value=!1,V(A,c)})},Q=async function(){let t=new Map;await _.fetchAllCategories(t).then(()=>{u.value=!1}).catch(c=>{u.value=!1,V(A,c)})},W=async function(){let t=new Map;await o.fetchAllGuides(t).then(()=>{u.value=!1}).catch(c=>{u.value=!1,V(A,c)})},X=async function(){await w.fetchAllTags().then(()=>{u.value=!1}).catch(t=>{u.value=!1,V(A,t)})},Y=t=>{h.value=t,G()},Z=t=>{h.value=t,G()},ee=function(t){l.setDetailType("audio_tour",!1,"Dettaglio audio itinerario",t.id),l.updateSidebar(!0)},te=function(t){return t!=null&&t.cluster?t.cluster:""},oe=t=>{T.value.toggle(t)},le=t=>{if(e.value=0,F.value=Object.assign({},t),t)for(const[c,nt]of Object.entries(t))c=="category_id"||c=="tag"||c=="guide"?s.value[c].value=t[c].id:s.value[c].value=t[c],e.value+=1;G(),T.value.hide()},ae=t=>{delete F.value[t],G(),e.value-=1},se=async function(){await C.fetchAllLanguages().catch(t=>{V(A,t)})};return{dt:M,responseAudioGuides:v,filters:s,loading:u,totalRecords:K,lazyParams:h,matchModes:H,currentAudioGuide:R,status:y,categories:d,guides:k,tags:m,op:T,form_filter:F,num_filter:e,onPage:Y,onSort:Z,showSidebar:ee,loadLazyData:G,getRowClass:te,prettyCategoryGroup:E,toggleFilters:oe,prettyStatus:ce,onSaveFilter:le,onRemove:ae,formatDataFromUnixTimestamps:ue}},components:{AudioGuideFilters:Ve}};const Le={class:"user-table"},Be={class:"w-full mb-3 chip-filters"},De={class:"flex justify-content-between align-items-center"},ze={class:"p-input-icon-left w-full mr-3"},je={class:"flex align-items-center py-2"},Oe=a("i",{class:"pi pi-search"},null,-1),Ne={class:"flex flex-column line-height-3"},Pe={class:"flex flex-column line-height-3"},qe={class:"flex align-items-center line-height-3"},$e=["alt"],Ue={key:0,class:"text-right"},Ee={key:0},Ie={key:1,class:"flex flex-column"},Ke={class:"line-through"},He={key:1,class:"text-right"},Je=a("div",{class:"flex justify-content-center w-full"},"Durata",-1),Qe={class:"flex justify-content-center"},We={key:0},Xe={key:1},Ye={class:"flex align-items-center"};function Ze(p,l,_,o,w,C){const y=g("Chip"),v=g("InputText"),d=g("AudioGuideFilters"),k=g("OverlayPanel"),m=g("Column"),A=g("Avatar"),M=g("Badge"),R=g("Button"),T=g("DataTable"),F=fe("tooltip");return n(),r("div",Le,[a("div",Be,[(n(!0),r(L,null,B(o.form_filter,(e,s)=>{var u;return n(),r("span",{key:s},[e.full_name?(n(),z(y,{key:0,label:e.full_name,removable:"",class:"capitalize mr-2",onRemove:h=>o.onRemove(s)},null,8,["label","onRemove"])):(n(),z(y,{key:1,label:e.flat_translations?(u=e.flat_translations)==null?void 0:u.it:e,removable:"",class:"capitalize mr-2",onRemove:h=>o.onRemove(s)},null,8,["label","onRemove"]))])}),128))]),i(T,{value:o.responseAudioGuides.audio_guides,totalRecords:o.responseAudioGuides.total,lazy:!0,paginator:!0,rows:30,ref:"dt",dataKey:"id",loading:o.loading,onPage:l[2]||(l[2]=e=>o.onPage(e)),onSort:l[3]||(l[3]=e=>o.onSort(e)),removableSort:"",stripedRows:"",rowClass:o.getRowClass},{header:f(()=>[a("div",De,[a("div",ze,[a("span",je,[Oe,i(v,{modelValue:o.filters.global.value,"onUpdate:modelValue":l[0]||(l[0]=e=>o.filters.global.value=e),placeholder:"Ricerca per nome",class:"border-none w-full pl-2",onChange:o.loadLazyData},null,8,["modelValue","onChange"])])])]),i(k,{ref:"op",class:"p-2",style:{"min-width":"24rem"},dismissable:!1},{default:f(()=>[i(d,{onOnSaveFilter:l[1]||(l[1]=e=>o.onSaveFilter(e)),filters:o.form_filter},null,8,["filters"])]),_:1},512)]),empty:f(()=>[D(" Nessun audio itinerario trovato. ")]),default:f(()=>[i(m,{field:"name",header:"Nome",ref:"name",sortable:!1},{body:f(({data:e})=>{var s,u;return[D(x(((u=(s=e==null?void 0:e.translations.it)==null?void 0:s.title)==null?void 0:u.text)||"-"),1)]}),_:1},512),i(m,{header:"Location",filterMatchMode:"contains",ref:"location",field:"location"},{body:f(({data:e})=>[D(x(e.location||"-"),1)]),_:1},512),i(m,{header:"Categoria",ref:"category",field:"category"},{body:f(({data:e})=>[a("div",Ne,[(n(!0),r(L,null,B(e.categories,s=>(n(),r("span",{key:s.id},x(s.flat_translations.it),1))),128))])]),_:1},512),i(m,{header:"Tag",ref:"tag",field:"tag"},{body:f(({data:e})=>[a("div",Pe,[(n(!0),r(L,null,B(e.tags,s=>(n(),r("span",{key:s.id},x(s.flat_translations.it),1))),128))])]),_:1},512),i(m,{header:"Lingue",filterMatchMode:"contains",ref:"location",field:"location"},{body:f(({data:e})=>[a("div",qe,[(n(!0),r(L,null,B(e.languages,s=>(n(),r("span",{key:s.id},[a("img",{alt:s.code,src:_e,class:N(`mr-2 flag flag-${s.code}`),style:{width:"18px"}},null,10,$e)]))),128))])]),_:1},512),i(m,{header:"Prezzo",ref:"price",field:"price",style:{"min-width":"90px"}},{body:f(({data:e})=>[e.price&&e.price!="0"?(n(),r("div",Ue,[e.discounted_price?(n(),r("div",Ie,[a("span",Ke,"€ "+x((e.price/100).toFixed(2)),1),a("b",null,"€ "+x((+e.discounted_price/100).toFixed(2)),1)])):(n(),r("span",Ee,"€ "+x((+e.price/100).toFixed(2)),1))])):(n(),r("div",He,"€ 0"))]),_:1},512),i(m,{header:"",filterMatchMode:"contains",ref:"location",field:"location"},{header:f(()=>[Je]),body:f(({data:e})=>[a("div",Qe,[e.duration?(n(),r("span",We,x(e.duration)+" min",1)):(n(),r("span",Xe,"-"))])]),_:1},512),i(m,{header:"Guida",ref:"guide",field:"guide"},{body:f(({data:e})=>{var s;return[a("div",Ye,[e.guide&&e.guide.image_url?(n(),z(A,{key:0,image:e.guide.image_url.url,class:"mr-2",shape:"circle"},null,8,["image"])):me("",!0),D(" "+x(((s=e.guide)==null?void 0:s.full_name)||"-"),1)])]}),_:1},512),i(m,{header:"Stato",filterMatchMode:"contains",ref:"enabled",field:"enabled"},{body:f(({data:e})=>[i(M,{value:o.prettyStatus(e.status),class:N(["px-4 border-round-lg h-auto font-medium line-height-4",e.status])},null,8,["value","class"])]),_:1},512),i(m,{header:"",style:{width:"4rem"}},{body:f(({data:e})=>[ge(i(R,{type:"button",onClick:s=>o.showSidebar(e),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"mr-3",icon:"pi pi-arrow-right",text:"",rounded:""},null,8,["onClick"]),[[F,"Modifica",void 0,{top:!0}]])]),_:1})]),_:1},8,["value","totalRecords","loading","rowClass"])])}const et=O(Re,[["render",Ze]]),tt={setup(){const p=j(),l=S(()=>p.getTotalAudioGuide),_=I();return{totalAudioGuide:l,showSidebar:function(){_.setDetailType("audio_tour",!0,"Nuovo audio itinerario",null),_.updateSidebar(!0),_.setShowDetail(!0)}}},components:{AudioGuideTable:et}},ot={class:"flex justify-content-between align-items-center"},lt={class:""},at={key:0},st={key:1};function it(p,l,_,o,w,C){const y=g("Button"),v=g("AudioGuideTable");return n(),r("div",null,[a("div",ot,[a("h1",lt,[o.totalAudioGuide==1?(n(),r("span",at," 1 Audio itinerario")):(n(),r("span",st,x(o.totalAudioGuide)+" Audio itinerari",1))]),i(y,{label:"Aggiungi",onClick:l[0]||(l[0]=d=>o.showSidebar()),class:"mb-3",rounded:"",outlined:"",icon:"pi pi-plus"})]),i(v)])}const dt=O(tt,[["render",it]]);export{dt as default};
