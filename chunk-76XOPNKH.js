import{e as x}from"./chunk-U7PLRIY5.js";import{I as a,L as y,M as v,Qa as S,R as w,Sa as C,Wa as b,X as g,bb as l,f as c,fb as j,gb as P,hb as I,i as n,jb as d,ob as k,r as u,s as _,u as p,vb as M,xb as R}from"./chunk-7LE56AYD.js";var F={formId:"propertytrade",title:"Propertytrade",components:[{name:"Text",key:"name",focused:!0,fields:[{name:"Placeholder",value:"fill propertytrade title"},{name:"Label",value:"Title"}]},{name:"Text",key:"description",fields:[{name:"Placeholder",value:"fill propertytrade description"},{name:"Label",value:"Description"}]}]};var q=(()=>{class i extends j{constructor(e,t,r,s){super({name:"propertytrade"},e,t,r,s)}static{this.\u0275fac=function(t){return new(t||i)(p(I),p(P),p(d),p(l))}}static{this.\u0275prov=u({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var f=(()=>{class i{constructor(e,t,r,s,m,D,A){this._translate=e,this._propertytradeService=t,this._alert=r,this._form=s,this._core=m,this._router=D,this._route=A,this.columns=["name","description"],this.form=this._form.getForm("propertytrade",F),this.config={paginate:this.setRows.bind(this),perPage:20,setPerPage:this._propertytradeService.setPerPage.bind(this._propertytradeService),allDocs:!1,create:this._router.url.includes("propertiestrades/")?()=>{this._form.modal(this.form,{label:"Create",click:(o,h)=>c(this,null,function*(){h(),this._preCreate(o),yield n(this._propertytradeService.create(o)),this.setRows()})})}:null,update:o=>{this._form.modal(this.form,[],o).then(h=>{this._core.copy(h,o),this._propertytradeService.update(o)})},delete:o=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this propertytrade?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>c(this,null,function*(){yield n(this._propertytradeService.delete(o)),this.setRows()})}]})},buttons:[{icon:"cloud_download",click:o=>{this._form.modalUnique("propertytrade","url",o)}}],headerButtons:[{icon:"playlist_add",click:this._bulkManagement(),class:"playlist"},{icon:"edit_note",click:this._bulkManagement(!1),class:"edit"}]},this.rows=[],this.property_id="",this._page=1,this.setRows(),this._route.paramMap.subscribe(o=>{this.property_id=o.get("property_id")||"",console.log(this.property_id)})}setRows(e=this._page){this._page=e,this._core.afterWhile(this,()=>{this._propertytradeService.get({page:e,query:this._query()}).subscribe(t=>{this.rows.splice(0,this.rows.length),this.rows.push(...t)})},250)}_bulkManagement(e=!0){return()=>{this._form.modalDocs(e?[]:this.rows).then(t=>c(this,null,function*(){if(e)for(let r of t)this._preCreate(r),yield n(this._propertytradeService.create(r));else{for(let r of this.rows)t.find(s=>s._id===r._id)||(yield n(this._propertytradeService.delete(r)));for(let r of t){let s=this.rows.find(m=>m._id===r._id);s?(this._core.copy(r,s),yield n(this._propertytradeService.update(s))):(this._preCreate(r),yield n(this._propertytradeService.create(r)))}}this.setRows()}))}}_preCreate(e){e.__created=!1,this.property_id&&(e.property=this.property_id)}_query(){let e="";return this.property_id&&(e+=(e?"&":"")+"property="+this.property_id),e}static{this.\u0275fac=function(t){return new(t||i)(a(k),a(q),a(d),a(R),a(l),a(C),a(S))}}static{this.\u0275cmp=y({type:i,selectors:[["ng-component"]],standalone:!1,decls:1,vars:3,consts:[["title","Trades",3,"columns","config","rows"]],template:function(t,r){t&1&&g(0,"wtable",0),t&2&&w("columns",r.columns)("config",r.config)("rows",r.rows)},dependencies:[M],encapsulation:2})}}return i})();var B=[{path:"",component:f},{path:":property_id",component:f}],Z=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=v({type:i})}static{this.\u0275inj=_({imports:[b.forChild(B),x]})}}return i})();export{Z as PropertiestradesModule};
