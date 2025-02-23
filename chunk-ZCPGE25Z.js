import{a as f,b as y}from"./chunk-4LTHXHMJ.js";import{e as G}from"./chunk-U7PLRIY5.js";import{$ as c,A as w,Db as z,Ea as q,H as s,I as p,Ia as D,L as u,M as P,P as k,Qa as x,R as _,T as m,Ta as N,V as o,W as n,Wa as A,X as C,_ as F,aa as I,bb as B,da as E,eb as L,f as l,ja as d,jb as V,ka as O,la as T,ob as Y,qa as j,qb as $,ra as g,s as b,sa as R,ta as H,x as S,xb as h,y as M}from"./chunk-7LE56AYD.js";var K=(()=>{class r{constructor(e,i,t,a,v){this._form=e,this._propertyrecordService=i,this._core=t,this._alert=a,this._translate=v,this.form=this._form.getForm("propertyrecord",f),this.load=new w}update(){this._form.modal(this.form,[],this.record).then(e=>{this._core.copy(e,this.record),this._propertyrecordService.update(this.record)})}delete(){this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this record?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>l(this,null,function*(){this._propertyrecordService.delete(this.record).subscribe(()=>{this.load.emit()})})}]})}static{this.\u0275fac=function(i){return new(i||r)(p(h),p(y),p(B),p(V),p(Y))}}static{this.\u0275cmp=u({type:r,selectors:[["app-history"]],inputs:{record:"record"},outputs:{load:"load"},standalone:!1,decls:11,vars:9,consts:[[3,"routerLink"],[1,"documents__title"],[1,"documents__description"],[1,"material-icons",3,"click"]],template:function(i,t){i&1&&(o(0,"a",0)(1,"div",1),d(2),n(),o(3,"div",2),d(4),g(5,"mongodate"),g(6,"date"),n()(),o(7,"span",3),c("click",function(){return t.update()}),d(8,"edit"),n(),o(9,"span",3),c("click",function(){return t.delete()}),d(10,"delete"),n()),i&2&&(E("routerLink","/propertyhistory/",t.record._id,""),s(2),O(t.record.name),s(2),T(" ",H(6,6,R(5,4,t.record._id),"d MMMM y")," "))},dependencies:[N,D,L],encapsulation:2})}}return r})();var ie=()=>["sell / buy payment","service","materials","rent payment","incident"];function re(r,U){if(r&1){let e=F();o(0,"div",16)(1,"app-history",17),c("load",function(){S(e);let t=I();return M(t.load())}),n()()}if(r&2){let e=U.$implicit;s(),_("record",e)}}var Q=(()=>{class r{constructor(e,i,t){this._propertyrecordService=e,this._route=i,this._form=t,this.propertyRecords=[],this.isMenuOpen=!1,this.property_id="",this.form=this._form.getForm("propertyrecord",f),this.type="",this._route.paramMap.subscribe(a=>{this.property_id=a.get("property_id")||"",this.load()})}create(){this._form.modal(this.form,{label:"Create",click:(e,i)=>l(this,null,function*(){i(),this._preCreate(e),this._propertyrecordService.create(e).subscribe(()=>{this.load()})})})}load(){this._propertyrecordService.get({page:1,query:this._query()}).subscribe(e=>{this.propertyRecords.splice(0,this.propertyRecords.length),this.propertyRecords.push(...e)})}_query(){let e="";return this.property_id&&(e+=(e?"&":"")+"property="+this.property_id),this.type&&(e+=(e?"&":"")+"type="+this.type),e}_preCreate(e){delete e.__created,this.property_id&&(e.property=this.property_id),this.type&&(e.property=this.type)}static{this.\u0275fac=function(i){return new(i||r)(p(y),p(x),p(h))}}static{this.\u0275cmp=u({type:r,selectors:[["ng-component"]],standalone:!1,decls:18,vars:13,consts:[[1,"documents-wrapper"],[1,"documents-container"],[1,"documents-list"],[1,"burger-wrap",3,"click"],[1,"burger"],[1,"documents-sidebar"],[1,"documents-sidebar-content"],[1,"documents-sidebar__img"],["src","assets/default.png","alt","Sidebar Image"],[1,"documents-sidebar__title"],[1,"documents-sidebar__description"],[3,"click"],[3,"modelChange","items","placeholder","clearable"],[1,"documents-main"],[1,"documents-main-content"],["class","documents-main-row",4,"ngFor","ngForOf"],[1,"documents-main-row"],[3,"load","record"]],template:function(i,t){i&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),c("click",function(){return t.isMenuOpen=!t.isMenuOpen}),C(4,"div",4),n(),o(5,"div",5)(6,"div",6)(7,"div",7),C(8,"img",8),n(),o(9,"div",9),d(10," Records "),n(),o(11,"div",10)(12,"wbutton",11),c("click",function(){return t.create()}),d(13,"Create"),n(),o(14,"wselect",12),c("modelChange",function(v){return t.type=v,t.load()}),n()()()(),o(15,"div",13)(16,"div",14),k(17,re,2,1,"div",15),n()()()()()),i&2&&(m("documents-wrapper--open",t.isMenuOpen),s(3),m("burger-wrap--open",t.isMenuOpen),s(),m("burger--close",t.isMenuOpen),s(),m("documents-sidebar--open",t.isMenuOpen),s(9),_("items",j(12,ie))("placeholder","Type")("clearable",!0),s(3),_("ngForOf",t.propertyRecords))},dependencies:[z,q,$,K],encapsulation:2})}}return r})();var oe=[{path:":provider_id",component:Q}],Me=(()=>{class r{static{this.\u0275fac=function(i){return new(i||r)}}static{this.\u0275mod=P({type:r})}static{this.\u0275inj=b({imports:[A.forChild(oe),G]})}}return r})();export{Me as PropertieshistoriesModule};
