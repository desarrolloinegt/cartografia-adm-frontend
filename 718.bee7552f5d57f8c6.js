"use strict";(self.webpackChunkcartografia_app=self.webpackChunkcartografia_app||[]).push([[718],{1718:(K,j,n)=>{n.r(j),n.d(j,{ProjectModule:()=>p,ProjectPageComponent:()=>s,ProjectRoutingModule:()=>m});var h=n(9299),y=n(1581),N=n(6308),a=n(7155),b=n(5226),P=n.n(b),t=n(4650),w=n(6570);class l{constructor(e){this.apiService=e}getProjects(){return this.apiService.getAll("proyectos")}desactiveProyect(e){return this.apiService.desactive("proyecto",e)}}l.\u0275fac=function(e){return new(e||l)(t.LFG(w.s))},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"});var x=n(7274),f=n(9549),_=n(4144),C=n(4859),U=n(7392),T=n(3646);function A(o,e){1&o&&(t.TgZ(0,"th",18),t._uU(1,"ID"),t.qZA())}function F(o,e){if(1&o&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&o){const r=e.$implicit;t.xp6(1),t.hij(" ",r.id," ")}}function M(o,e){1&o&&(t.TgZ(0,"th",18),t._uU(1," Nombre "),t.qZA())}function E(o,e){if(1&o&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&o){const r=e.$implicit;t.xp6(1),t.hij(" ",r.nombre," ")}}function S(o,e){1&o&&(t.TgZ(0,"th",18),t._uU(1,"Fecha"),t.qZA())}function q(o,e){if(1&o&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&o){const r=e.$implicit;t.xp6(1),t.hij(" ",r.fecha," ")}}function Y(o,e){1&o&&(t.TgZ(0,"th",18),t._uU(1,"Encuesta"),t.qZA())}function D(o,e){if(1&o&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&o){const r=e.$implicit;t.xp6(1),t.hij(" ",r.encuesta," ")}}function O(o,e){1&o&&(t.TgZ(0,"th",18),t._uU(1,"Acciones"),t.qZA())}function J(o,e){if(1&o){const r=t.EpF();t.TgZ(0,"td",19)(1,"button",20),t.NdJ("click",function(){const d=t.CHM(r).$implicit,Z=t.oxw();return t.KtG(Z.editar(d.rol_id,d.nombre,d.permisos))}),t.TgZ(2,"mat-icon",21),t._uU(3,"edit"),t.qZA()(),t.TgZ(4,"button",22),t.NdJ("click",function(){const d=t.CHM(r).$implicit,Z=t.oxw();return t.KtG(Z.desactivar(d.id,d.nombre))}),t.TgZ(5,"mat-icon",23),t._uU(6,"delete"),t.qZA()()()}}function Q(o,e){1&o&&t._UZ(0,"tr",24)}function I(o,e){1&o&&t._UZ(0,"tr",25)}function B(o,e){if(1&o&&(t.TgZ(0,"tr",26)(1,"td",27),t._uU(2),t.qZA()()),2&o){t.oxw();const r=t.MAs(11);t.xp6(2),t.hij('No hay resultados de "',r.value,'"')}}const G=function(){return[5,10,25,100]};class s{constructor(e,r){this.projectService=e,this.dialogService=r,this.displayedColumns=["id","nombre","fecha","encuesta","options"],this.dataSource=new a.by}applyFilter(e){this.dataSource.filter=e.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}editar(e,r,c){}ngOnInit(){this.cargarProyectos()}cargarProyectos(){this.projectService.getProjects().subscribe(e=>{this.dataSource=new a.by(e)})}desactivar(e,r){P().fire({title:"\xbfEsta seguro que desea Desactivar el Proyecto: "+r+"?",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Si",denyButtonText:"No"}).then(c=>{c.isConfirmed?this.projectService.desactiveProyect(Number(e)).subscribe(u=>{1==u.status&&(this.cargarProyectos(),P().fire("Ok!","Proyecto Desactivado","success"))},u=>{console.log(u)}):c.isDenied&&P().fire("Cambios no guardados","","info")})}}s.\u0275fac=function(e){return new(e||s)(t.Y36(l),t.Y36(x.uw))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-project-page"]],viewQuery:function(e,r){if(1&e&&(t.Gf(y.NW,5),t.Gf(N.YE,5)),2&e){let c;t.iGM(c=t.CRH())&&(r.paginator=c.first),t.iGM(c=t.CRH())&&(r.sort=c.first)}},decls:33,vars:5,consts:[[1,"header"],["mat-fab","","color","accent","routerLink","create"],["aria-label","add","oncli",""],["matInput","","placeholder","Ej. Proyecto ENEI",3,"keyup"],["input",""],[1,"mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nombre"],["matColumnDef","fecha"],["matColumnDef","encuesta"],["matColumnDef","options"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of users",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","matTooltip","Click para Editar","matTooltipPosition","right","color","primary",1,"iconbutton",3,"click"],["aria-label","Edit"],["mat-icon-button","","matTooltip","Click para desactivar","color","warn",1,"iconbutton",3,"click"],["aria-label","Delete"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(e,r){1&e&&(t._UZ(0,"app-header"),t.TgZ(1,"div",0)(2,"h1"),t._uU(3,"Proyectos"),t.qZA(),t.TgZ(4,"a",1)(5,"mat-icon",2),t._uU(6,"add"),t.qZA()()(),t.TgZ(7,"mat-form-field")(8,"mat-label"),t._uU(9,"Filter"),t.qZA(),t.TgZ(10,"input",3,4),t.NdJ("keyup",function(u){return r.applyFilter(u)}),t.qZA()(),t.TgZ(12,"div",5)(13,"table",6),t.ynx(14,7),t.YNc(15,A,2,0,"th",8),t.YNc(16,F,2,1,"td",9),t.BQk(),t.ynx(17,10),t.YNc(18,M,2,0,"th",8),t.YNc(19,E,2,1,"td",9),t.BQk(),t.ynx(20,11),t.YNc(21,S,2,0,"th",8),t.YNc(22,q,2,1,"td",9),t.BQk(),t.ynx(23,12),t.YNc(24,Y,2,0,"th",8),t.YNc(25,D,2,1,"td",9),t.BQk(),t.ynx(26,13),t.YNc(27,O,2,0,"th",8),t.YNc(28,J,7,0,"td",9),t.BQk(),t.YNc(29,Q,1,0,"tr",14),t.YNc(30,I,1,0,"tr",15),t.YNc(31,B,3,1,"tr",16),t.qZA(),t._UZ(32,"mat-paginator",17),t.qZA()),2&e&&(t.xp6(13),t.Q6J("dataSource",r.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",r.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",r.displayedColumns),t.xp6(2),t.Q6J("pageSizeOptions",t.DdM(4,G)))},dependencies:[h.rH,f.KE,f.hX,_.Nt,C.RK,C.EX,a.BZ,a.fO,a.as,a.w1,a.Dz,a.nj,a.ge,a.ev,a.XQ,a.Gk,a.Ee,U.Hw,y.NW,T.G],styles:["table[_ngcontent-%COMP%]{width:100%;padding:1em}.mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.full-width-input[_ngcontent-%COMP%]{width:100% auto;padding:1em}.example-section[_ngcontent-%COMP%]{margin:12px}.example-margin[_ngcontent-%COMP%]{margin:0 12px}ul[_ngcontent-%COMP%]{list-style-type:none;margin-top:4px}.header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:1.5rem;padding:0 .4rem;font-family:Roboto,Helvetica Neue,sans-serif}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:inline;padding-top:.6rem;font-weight:400}"]});var i=n(4006),v=n(6895);function R(o,e){1&o&&(t.TgZ(0,"mat-error"),t._uU(1,"Nombre de proyecto es "),t.TgZ(2,"strong"),t._uU(3,"requerido"),t.qZA()())}function H(o,e){1&o&&(t.TgZ(0,"mat-error"),t._uU(1,"Fecha es "),t.TgZ(2,"strong"),t._uU(3,"requerida"),t.qZA()())}function z(o,e){1&o&&(t.TgZ(0,"mat-error"),t._uU(1,"Encuesta es "),t.TgZ(2,"strong"),t._uU(3,"requerida"),t.qZA()())}class g{constructor(e,r){this.projectService=e,this.formBuilder=r,this.buildForm()}buildForm(){this.projectForm=this.formBuilder.group({nombre:["",i.kI.required],fecha:["",i.kI.required],encuesta:["",[i.kI.required]]})}get Nombre(){return this.projectForm.get("nombre")}get Fecha(){return this.projectForm.get("fecha")}get Encuesta(){return this.projectForm.get("encuesta")}createProject(){}}g.\u0275fac=function(e){return new(e||g)(t.Y36(l),t.Y36(i.qu))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-new-project-page"]],decls:26,vars:5,consts:[[1,"card"],[1,"card-body"],[3,"formGroup","submit"],[1,"form-group"],["appearance","outline",1,"full-width-input"],["type","text","formControlName","nombre","matInput","","placeholder","ENEI","required","",1,"form-control"],[4,"ngIf"],["type","date","formControlName","fecha","matInput","","required","",1,"form-control"],["type","text","formControlName","encuesta","matInput","","required","",1,"form-control"],["type","submit","mat-raised-button","","color","primary",3,"disabled"]],template:function(e,r){1&e&&(t._UZ(0,"app-header")(1,"br"),t.TgZ(2,"div",0)(3,"div",1)(4,"form",2),t.NdJ("submit",function(){return r.createProject()}),t.TgZ(5,"div",3)(6,"mat-form-field",4)(7,"mat-label"),t._uU(8,"Ingrese el nombre del rol"),t.qZA(),t._UZ(9,"input",5),t.YNc(10,R,4,0,"mat-error",6),t.qZA()(),t.TgZ(11,"div",3)(12,"mat-form-field",4)(13,"mat-label"),t._uU(14,"Fecha"),t.qZA(),t._UZ(15,"input",7),t.YNc(16,H,4,0,"mat-error",6),t.qZA()(),t.TgZ(17,"div",3)(18,"mat-form-field",4)(19,"mat-label"),t._uU(20,"Encuesta"),t.qZA(),t._UZ(21,"input",8),t.YNc(22,z,4,0,"mat-error",6),t.qZA()(),t.TgZ(23,"div",3)(24,"button",9),t._uU(25," Guardar Proyecto "),t.qZA()()()()()),2&e&&(t.xp6(4),t.Q6J("formGroup",r.projectForm),t.xp6(6),t.Q6J("ngIf",(null==r.Nombre?null:r.Nombre.touched)&&(null==r.Nombre?null:r.Nombre.hasError("required"))),t.xp6(6),t.Q6J("ngIf",(null==r.Fecha?null:r.Fecha.touched)&&(null==r.Fecha?null:r.Fecha.hasError("required"))),t.xp6(6),t.Q6J("ngIf",(null==r.Encuesta?null:r.Encuesta.touched)&&(null==r.Encuesta?null:r.Encuesta.hasError("required"))),t.xp6(2),t.Q6J("disabled",!r.projectForm.valid))},dependencies:[v.O5,f.KE,f.hX,f.TO,_.Nt,C.lW,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.sg,i.u,T.G],styles:[".full-width-input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{width:100%}.example-section[_ngcontent-%COMP%]{margin:12px}.example-margin[_ngcontent-%COMP%]{margin:0 12px}ul[_ngcontent-%COMP%]{list-style-type:none;margin-top:4px}"]});const k=[{path:"",component:s},{path:"create",component:g}];class m{}m.\u0275fac=function(e){return new(e||m)},m.\u0275mod=t.oAB({type:m}),m.\u0275inj=t.cJS({imports:[h.Bz.forChild(k),h.Bz]});var X=n(4657),$=n(5330);class p{}p.\u0275fac=function(e){return new(e||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[v.ez,m,X.M,i.UX,$.G]})}}]);