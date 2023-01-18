"use strict";(self.webpackChunkcartografia_app=self.webpackChunkcartografia_app||[]).push([[99],{99:(oe,j,r)=>{r.r(j),r.d(j,{ProjectModule:()=>g,ProjectPageComponent:()=>p,ProjectRoutingModule:()=>u});var P=r(9299),T=r(7974),x=r(6308),i=r(7155),U=r(5226),C=r.n(U),e=r(4650),y=r(6570);class m{constructor(t){this.apiService=t}getProjects(){return this.apiService.getAll("proyectos")}desactiveProyect(t){return this.apiService.desactive("proyecto",t)}getUpms(){return this.apiService.getAll("upms")}}m.\u0275fac=function(t){return new(t||m)(e.LFG(y.s))},m.\u0275prov=e.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"});var S=r(7274),f=r(9549),N=r(4144),v=r(4859),F=r(7392),b=r(3646);function E(o,t){1&o&&(e.TgZ(0,"th",18),e._uU(1,"ID"),e.qZA())}function M(o,t){if(1&o&&(e.TgZ(0,"td",19),e._uU(1),e.qZA()),2&o){const n=t.$implicit;e.xp6(1),e.hij(" ",n.id," ")}}function O(o,t){1&o&&(e.TgZ(0,"th",18),e._uU(1," Nombre "),e.qZA())}function Y(o,t){if(1&o&&(e.TgZ(0,"td",19),e._uU(1),e.qZA()),2&o){const n=t.$implicit;e.xp6(1),e.hij(" ",n.nombre," ")}}function q(o,t){1&o&&(e.TgZ(0,"th",18),e._uU(1,"Fecha"),e.qZA())}function D(o,t){if(1&o&&(e.TgZ(0,"td",19),e._uU(1),e.qZA()),2&o){const n=t.$implicit;e.xp6(1),e.hij(" ",n.fecha," ")}}function J(o,t){1&o&&(e.TgZ(0,"th",18),e._uU(1,"Encuesta"),e.qZA())}function Q(o,t){if(1&o&&(e.TgZ(0,"td",19),e._uU(1),e.qZA()),2&o){const n=t.$implicit;e.xp6(1),e.hij(" ",n.encuesta," ")}}function I(o,t){1&o&&(e.TgZ(0,"th",18),e._uU(1,"Acciones"),e.qZA())}function B(o,t){if(1&o){const n=e.EpF();e.TgZ(0,"td",19)(1,"button",20),e.NdJ("click",function(){const l=e.CHM(n).$implicit,_=e.oxw();return e.KtG(_.editar(l.rol_id,l.nombre,l.permisos))}),e.TgZ(2,"mat-icon",21),e._uU(3,"edit"),e.qZA()(),e.TgZ(4,"button",22),e.NdJ("click",function(){const l=e.CHM(n).$implicit,_=e.oxw();return e.KtG(_.desactivar(l.id,l.nombre))}),e.TgZ(5,"mat-icon",23),e._uU(6,"delete"),e.qZA()()()}}function G(o,t){1&o&&e._UZ(0,"tr",24)}function R(o,t){1&o&&e._UZ(0,"tr",25)}function H(o,t){if(1&o&&(e.TgZ(0,"tr",26)(1,"td",27),e._uU(2),e.qZA()()),2&o){e.oxw();const n=e.MAs(11);e.xp6(2),e.hij('No hay resultados de "',n.value,'"')}}const z=function(){return[5,10,25,100]};class p{constructor(t,n){this.projectService=t,this.dialogService=n,this.displayedColumns=["id","nombre","fecha","encuesta","options"],this.dataSource=new i.by}applyFilter(t){this.dataSource.filter=t.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}editar(t,n,a){}ngOnInit(){this.cargarProyectos()}cargarProyectos(){this.projectService.getProjects().subscribe(t=>{this.dataSource=new i.by(t)})}desactivar(t,n){C().fire({title:"\xbfEsta seguro que desea Desactivar el Proyecto: "+n+"?",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Si",denyButtonText:"No"}).then(a=>{a.isConfirmed?this.projectService.desactiveProyect(Number(t)).subscribe(s=>{1==s.status&&(this.cargarProyectos(),C().fire("Ok!","Proyecto Desactivado","success"))},s=>{console.log(s)}):a.isDenied&&C().fire("Cambios no guardados","","info")})}}p.\u0275fac=function(t){return new(t||p)(e.Y36(m),e.Y36(S.uw))},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-project-page"]],viewQuery:function(t,n){if(1&t&&(e.Gf(T.NW,5),e.Gf(x.YE,5)),2&t){let a;e.iGM(a=e.CRH())&&(n.paginator=a.first),e.iGM(a=e.CRH())&&(n.sort=a.first)}},decls:33,vars:5,consts:[[1,"header"],["mat-fab","","color","accent","routerLink","create"],["aria-label","add","oncli",""],["matInput","","placeholder","Ej. Proyecto ENEI",3,"keyup"],["input",""],[1,"mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nombre"],["matColumnDef","fecha"],["matColumnDef","encuesta"],["matColumnDef","options"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of users",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","matTooltip","Click para Editar","matTooltipPosition","right","color","primary",1,"iconbutton",3,"click"],["aria-label","Edit"],["mat-icon-button","","matTooltip","Click para desactivar","color","warn",1,"iconbutton",3,"click"],["aria-label","Delete"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(t,n){1&t&&(e._UZ(0,"app-header"),e.TgZ(1,"div",0)(2,"h1"),e._uU(3,"Proyectos"),e.qZA(),e.TgZ(4,"a",1)(5,"mat-icon",2),e._uU(6,"add"),e.qZA()()(),e.TgZ(7,"mat-form-field")(8,"mat-label"),e._uU(9,"Filter"),e.qZA(),e.TgZ(10,"input",3,4),e.NdJ("keyup",function(s){return n.applyFilter(s)}),e.qZA()(),e.TgZ(12,"div",5)(13,"table",6),e.ynx(14,7),e.YNc(15,E,2,0,"th",8),e.YNc(16,M,2,1,"td",9),e.BQk(),e.ynx(17,10),e.YNc(18,O,2,0,"th",8),e.YNc(19,Y,2,1,"td",9),e.BQk(),e.ynx(20,11),e.YNc(21,q,2,0,"th",8),e.YNc(22,D,2,1,"td",9),e.BQk(),e.ynx(23,12),e.YNc(24,J,2,0,"th",8),e.YNc(25,Q,2,1,"td",9),e.BQk(),e.ynx(26,13),e.YNc(27,I,2,0,"th",8),e.YNc(28,B,7,0,"td",9),e.BQk(),e.YNc(29,G,1,0,"tr",14),e.YNc(30,R,1,0,"tr",15),e.YNc(31,H,3,1,"tr",16),e.qZA(),e._UZ(32,"mat-paginator",17),e.qZA()),2&t&&(e.xp6(13),e.Q6J("dataSource",n.dataSource),e.xp6(16),e.Q6J("matHeaderRowDef",n.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",n.displayedColumns),e.xp6(2),e.Q6J("pageSizeOptions",e.DdM(4,z)))},dependencies:[P.rH,f.KE,f.hX,N.Nt,v.RK,v.EX,i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk,i.Ee,F.Hw,T.NW,b.G],styles:["table[_ngcontent-%COMP%]{width:100%;padding:1em}.mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.full-width-input[_ngcontent-%COMP%]{width:100% auto;padding:1em}.example-section[_ngcontent-%COMP%]{margin:12px}.example-margin[_ngcontent-%COMP%]{margin:0 12px}ul[_ngcontent-%COMP%]{list-style-type:none;margin-top:4px}.header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:1.5rem;padding:0 .4rem;font-family:Roboto,Helvetica Neue,sans-serif}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:inline;padding-top:.6rem;font-weight:400}"]});var c=r(4006);class d{constructor(t){this.apiService=t}getEncuestas(){return this.apiService.getAll("encuestas")}}d.\u0275fac=function(t){return new(t||d)(e.LFG(y.s))},d.\u0275prov=e.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"});var Z=r(6895),A=r(6338),w=r(4385),$=r(3238);function k(o,t){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Nombre de proyecto es "),e.TgZ(2,"strong"),e._uU(3,"requerido"),e.qZA()())}function L(o,t){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Fecha es "),e.TgZ(2,"strong"),e._uU(3,"requerida"),e.qZA()())}function X(o,t){if(1&o&&(e.TgZ(0,"mat-option",15),e._uU(1),e.qZA()),2&o){const n=t.$implicit;e.xp6(1),e.Oqu(n.nombre)}}function K(o,t){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Encuesta es "),e.TgZ(2,"strong"),e._uU(3,"requerida"),e.qZA()())}function W(o,t){if(1&o&&(e.TgZ(0,"mat-list-option",16),e._uU(1),e.qZA()),2&o){const n=t.$implicit;e.Q6J("value",n.id),e.xp6(1),e.AsE(" ",n.nombre,", ",n.municipio," ")}}class h{constructor(t,n,a){this.projectService=t,this.formBuilder=n,this.encuestaService=a,this.encuestas=[],this.upms=[],this.buildForm(),this.cargarEncuestas()}buildForm(){this.projectForm=this.formBuilder.group({nombre:["",c.kI.required],fecha:["",c.kI.required],encuesta:["",[c.kI.required]],upms:["",[c.kI.required]]})}get Nombre(){return this.projectForm.get("nombre")}get Fecha(){return this.projectForm.get("fecha")}get Encuesta(){return this.projectForm.get("encuesta")}cargarEncuestas(){this.encuestaService.getEncuestas().subscribe(t=>{this.encuestas=t})}createProject(){}permisoSelected(t){this.upmSelected=t.map(n=>n.value)}}h.\u0275fac=function(t){return new(t||h)(e.Y36(m),e.Y36(c.qu),e.Y36(d))},h.\u0275cmp=e.Xpm({type:h,selectors:[["app-new-project-page"]],decls:33,vars:7,consts:[[1,"card"],[1,"card-body"],[3,"formGroup","submit"],[1,"form-group"],["appearance","outline",1,"full-width-input"],["type","text","formControlName","nombre","matInput","","placeholder","ENEI","required","",1,"form-control"],[4,"ngIf"],["type","date","formControlName","fecha","matInput","","required","",1,"form-control"],["formControlName","encuesta"],["value","encuesta.id",4,"ngFor","ngForOf"],[1,"example-section"],["formControlName","upms",3,"selectionChange"],["upmList",""],[3,"value",4,"ngFor","ngForOf"],["type","submit","mat-raised-button","","color","primary",3,"disabled"],["value","encuesta.id"],[3,"value"]],template:function(t,n){if(1&t){const a=e.EpF();e._UZ(0,"app-header")(1,"br"),e.TgZ(2,"div",0)(3,"div",1)(4,"form",2),e.NdJ("submit",function(){return n.createProject()}),e.TgZ(5,"div",3)(6,"mat-form-field",4)(7,"mat-label"),e._uU(8,"Ingrese el nombre del Proyecto"),e.qZA(),e._UZ(9,"input",5),e.YNc(10,k,4,0,"mat-error",6),e.qZA()(),e.TgZ(11,"div",3)(12,"mat-form-field",4)(13,"mat-label"),e._uU(14,"Fecha"),e.qZA(),e._UZ(15,"input",7),e.YNc(16,L,4,0,"mat-error",6),e.qZA()(),e.TgZ(17,"div",3)(18,"mat-form-field",4)(19,"mat-label"),e._uU(20,"Seleccion una encuesta"),e.qZA(),e.TgZ(21,"mat-select",8),e.YNc(22,X,2,1,"mat-option",9),e.qZA(),e.YNc(23,K,4,0,"mat-error",6),e.qZA()(),e.TgZ(24,"div",10)(25,"mat-label"),e._uU(26,"Permisos"),e.qZA(),e.TgZ(27,"mat-selection-list",11,12),e.NdJ("selectionChange",function(){e.CHM(a);const l=e.MAs(28);return e.KtG(n.permisoSelected(l.selectedOptions.selected))}),e.YNc(29,W,2,3,"mat-list-option",13),e.qZA()(),e.TgZ(30,"div",3)(31,"button",14),e._uU(32," Guardar Proyecto "),e.qZA()()()()()}2&t&&(e.xp6(4),e.Q6J("formGroup",n.projectForm),e.xp6(6),e.Q6J("ngIf",(null==n.Nombre?null:n.Nombre.touched)&&(null==n.Nombre?null:n.Nombre.hasError("required"))),e.xp6(6),e.Q6J("ngIf",(null==n.Fecha?null:n.Fecha.touched)&&(null==n.Fecha?null:n.Fecha.hasError("required"))),e.xp6(6),e.Q6J("ngForOf",n.encuestas),e.xp6(1),e.Q6J("ngIf",(null==n.Encuesta?null:n.Encuesta.touched)&&(null==n.Encuesta?null:n.Encuesta.hasError("required"))),e.xp6(6),e.Q6J("ngForOf",n.upms),e.xp6(2),e.Q6J("disabled",!n.projectForm.valid))},dependencies:[Z.sg,Z.O5,f.KE,f.hX,f.TO,N.Nt,v.lW,A.Ub,A.vS,c._Y,c.Fj,c.JJ,c.JL,c.Q7,c.sg,c.u,b.G,w.gD,$.ey],styles:[".full-width-input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{width:100%}.example-section[_ngcontent-%COMP%]{margin:12px}.example-margin[_ngcontent-%COMP%]{margin:0 12px}ul[_ngcontent-%COMP%]{list-style-type:none;margin-top:4px}"]});const V=[{path:"",component:p},{path:"create",component:h}];class u{}u.\u0275fac=function(t){return new(t||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[P.Bz.forChild(V),P.Bz]});var ee=r(4657),te=r(5330);class g{}g.\u0275fac=function(t){return new(t||g)},g.\u0275mod=e.oAB({type:g}),g.\u0275inj=e.cJS({imports:[Z.ez,u,ee.M,c.UX,te.G,w.LD]})}}]);