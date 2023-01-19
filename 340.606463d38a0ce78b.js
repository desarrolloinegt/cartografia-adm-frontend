"use strict";(self.webpackChunkcartografia_app=self.webpackChunkcartografia_app||[]).push([[340],{4911:(de,U,n)=>{n.r(U),n.d(U,{ProjectModule:()=>h,ProjectPageComponent:()=>g,ProjectRoutingModule:()=>d});var C=n(9299),N=n(7974),F=n(6308),m=n(7155),w=n(5226),f=n.n(w),i=n(4006),T=n(7274),e=n(4650),A=n(6246),D=n(6570);class u{constructor(t){this.apiService=t}getProjects(){return this.apiService.getAll("obtenerUpmsProyecto")}desactiveProyect(t){return this.apiService.desactive("proyecto",t)}getUpms(){return this.apiService.getAll("upms")}createProject(t){return this.apiService.store("proyecto",t)}assignUpmToProject(t){return this.apiService.store("asginarUpmsProyecto",t)}editProject(t){return this.apiService.patch("proyecto/edit",t)}}u.\u0275fac=function(t){return new(t||u)(e.LFG(D.s))},u.\u0275prov=e.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"});var p=n(6895),l=n(9549),j=n(4144),v=n(4859),Z=n(6338),y=n(4385),E=n(3238),S=n(6709);function O(r,t){1&r&&(e.TgZ(0,"mat-error"),e._uU(1,"Nombre es "),e.TgZ(2,"strong"),e._uU(3,"requerido"),e.qZA()())}function J(r,t){1&r&&(e.TgZ(0,"mat-error"),e._uU(1,"Fecha es "),e.TgZ(2,"strong"),e._uU(3,"requerida"),e.qZA()())}function x(r,t){if(1&r&&(e.TgZ(0,"mat-option",18),e._uU(1),e.qZA()),2&r){const o=t.$implicit;e.Q6J("value",o.id),e.xp6(1),e.Oqu(o.nombre)}}function M(r,t){1&r&&(e.TgZ(0,"mat-error"),e._uU(1,"Encuesta es "),e.TgZ(2,"strong"),e._uU(3,"requerida"),e.qZA()())}function Y(r,t){if(1&r&&(e.TgZ(0,"mat-list-option",19),e._uU(1),e.qZA()),2&r){const o=t.$implicit;e.Q6J("selected",o.checked)("value",o.id),e.xp6(1),e.AsE(" ",o.nombre,", ",o.municipio," ")}}class _{constructor(t,o,a,s,c){this.surveyService=t,this.projectService=o,this.dialogRef=a,this.data=s,this.formBuilder=c,this.encuestas=[],this.checked=!1,this.selectedUpms=[],this.upmsList=[],this.date=new Date((new Date).getDate()),this.selectedSurvey=0,this.asignacionPermisoRolEditado={id:0,upms:[],encuesta:"",fecha:"",nombre:""},this.buildForm(),this.getUpms(),this.getSurveys(),this.dateDefault()}submit(){}buildForm(){this.editForm=this.formBuilder.group({proyecto_id:[this.data.id,[i.kI.required]],nombre:[this.data.nombre,[i.kI.required]],fecha:[this.data.fecha,i.kI.required],upms:[{value:[],disabled:!0},[i.kI.required]],encuesta_id:["",i.kI.required]})}get Id(){return this.editForm.get("proyecto_idd")}get Nombre(){return this.editForm.get("nombre")}get Encuesta(){return this.editForm.get("encuesta_id")}get Fecha(){return this.editForm.get("fecha")}get Upms(){return this.editForm.get("upms")}getSurveys(){this.surveyService.getSurveys().subscribe(t=>{this.encuestas=t,this.defaulSurvey()})}changeUpmStatus(t){this.checked=t,this.checked?this.Upms?.enable():this.Upms?.disable()}editProject(){this.editForm.valid&&(this.Upms?.disabled&&(this.Upms.setValue(""),this.Upms.enable()),this.projectService.editProject(this.editForm.value).subscribe(t=>{1==t.status&&(f().fire("Ok!",t.message,"success"),this.dialogRef.close(1))},t=>{console.log(t)}))}getUpms(){this.projectService.getUpms().subscribe(t=>{this.upmsList=t,this.upmsList.forEach(o=>{o.checked=!1}),this.defaultUpms()})}defaultUpms(){for(let t=0;t<this.upmsList.length;t++)for(let o=0;o<this.data.upms.length;o++)this.upmsList[t].nombre==this.data.upms[o]&&(this.upmsList[t].checked=!0)}dateDefault(){this.Fecha?.setValue(this.data.fecha)}defaulSurvey(){for(let t=0;t<this.encuestas.length;t++)this.encuestas[t].nombre==this.data.encuesta&&(this.selectedSurvey=this.encuestas[t].id)}permisoSelected(t){this.selectedUpms=t.map(o=>o.value)}cancelEdit(){this.dialogRef.close()}}_.\u0275fac=function(t){return new(t||_)(e.Y36(A.SurveyService),e.Y36(u),e.Y36(T.so),e.Y36(T.WI),e.Y36(i.qu))},_.\u0275cmp=e.Xpm({type:_,selectors:[["app-project-edit-dialog"]],decls:40,vars:10,consts:[[1,"card"],["mat-dialog-title",""],[1,"card-body"],[3,"formGroup","submit"],[1,"form-group"],["appearance","outline",1,"full-width-input"],["type","text","formControlName","nombre","matInput","","placeholder","admin","required","",1,"form-control"],[4,"ngIf"],["type","date","formControlName","fecha","matInput","","required","",1,"form-control"],["formControlName","encuesta_id",3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"example-margin",3,"checked","change"],[1,"example-section"],["formControlName","upms",3,"selectionChange"],["UpmLis",""],[3,"selected","value",4,"ngFor","ngForOf"],["type","submit","mat-stroked-button","","color","primary",3,"disabled","click"],["type","submit","mat-stroked-button","","color","warn",3,"click"],[3,"value"],[3,"selected","value"]],template:function(t,o){if(1&t){const a=e.EpF();e.TgZ(0,"div",0)(1,"h3",1),e._uU(2),e.qZA(),e._UZ(3,"br")(4,"br"),e.TgZ(5,"div",2)(6,"form",3),e.NdJ("submit",function(){return o.submit()}),e.TgZ(7,"div",4)(8,"mat-form-field",5)(9,"mat-label"),e._uU(10,"Nombre del rol"),e.qZA(),e._UZ(11,"input",6),e.YNc(12,O,4,0,"mat-error",7),e.qZA()(),e.TgZ(13,"div",4)(14,"mat-form-field",5)(15,"mat-label"),e._uU(16,"Fecha"),e.qZA(),e._UZ(17,"input",8),e.YNc(18,J,4,0,"mat-error",7),e.qZA()(),e.TgZ(19,"div",4)(20,"mat-form-field",5)(21,"mat-label"),e._uU(22,"Seleccion una encuesta"),e.qZA(),e.TgZ(23,"mat-select",9),e.YNc(24,x,2,2,"mat-option",10),e.qZA(),e.YNc(25,M,4,0,"mat-error",7),e.qZA()(),e.TgZ(26,"div",4)(27,"mat-checkbox",11),e.NdJ("change",function(c){return o.changeUpmStatus(c.checked)}),e._uU(28," Cambiar UPM's "),e.qZA()(),e.TgZ(29,"div",12)(30,"mat-label"),e._uU(31,"UPM's"),e.qZA(),e.TgZ(32,"mat-selection-list",13,14),e.NdJ("selectionChange",function(){e.CHM(a);const c=e.MAs(33);return e.KtG(o.permisoSelected(c.selectedOptions.selected))}),e.YNc(34,Y,2,4,"mat-list-option",15),e.qZA()(),e.TgZ(35,"div",4)(36,"button",16),e.NdJ("click",function(){return o.editProject()}),e._uU(37," Editar Proyecto "),e.qZA(),e.TgZ(38,"button",17),e.NdJ("click",function(){return o.cancelEdit()}),e._uU(39," Cancelar "),e.qZA()()()()()}2&t&&(e.xp6(2),e.hij("Proyecto: ",o.data.nombre,""),e.xp6(4),e.Q6J("formGroup",o.editForm),e.xp6(6),e.Q6J("ngIf",(null==o.Nombre?null:o.Nombre.touched)&&(null==o.Nombre?null:o.Nombre.hasError("required"))),e.xp6(6),e.Q6J("ngIf",(null==o.Fecha?null:o.Fecha.touched)&&(null==o.Fecha?null:o.Fecha.hasError("required"))),e.xp6(5),e.Q6J("value",o.selectedSurvey),e.xp6(1),e.Q6J("ngForOf",o.encuestas),e.xp6(1),e.Q6J("ngIf",(null==o.Encuesta?null:o.Encuesta.touched)&&(null==o.Encuesta?null:o.Encuesta.hasError("required"))),e.xp6(2),e.Q6J("checked",o.checked),e.xp6(7),e.Q6J("ngForOf",o.upmsList),e.xp6(2),e.Q6J("disabled",!o.editForm.valid))},dependencies:[p.sg,p.O5,l.KE,l.hX,l.TO,j.Nt,v.lW,Z.Ub,Z.vS,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.sg,i.u,y.gD,E.ey,S.oG],styles:[".mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.full-width-input[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]{width:50%}.card[_ngcontent-%COMP%]{padding:2rem}"]});var Q=n(7392),q=n(3646);function k(r,t){1&r&&(e.TgZ(0,"th",19),e._uU(1,"ID"),e.qZA())}function I(r,t){if(1&r&&(e.TgZ(0,"td",20),e._uU(1),e.qZA()),2&r){const o=t.$implicit;e.xp6(1),e.Oqu(o.id)}}function G(r,t){1&r&&(e.TgZ(0,"th",19),e._uU(1,"Nombre"),e.qZA())}function B(r,t){if(1&r&&(e.TgZ(0,"td",20),e._uU(1),e.qZA()),2&r){const o=t.$implicit;e.xp6(1),e.Oqu(o.nombre)}}function R(r,t){1&r&&(e.TgZ(0,"th",19),e._uU(1,"Fecha"),e.qZA())}function L(r,t){if(1&r&&(e.TgZ(0,"td",20),e._uU(1),e.qZA()),2&r){const o=t.$implicit;e.xp6(1),e.Oqu(o.fecha)}}function H(r,t){1&r&&(e.TgZ(0,"th",19),e._uU(1,"Encuesta"),e.qZA())}function $(r,t){if(1&r&&(e.TgZ(0,"td",20),e._uU(1),e.qZA()),2&r){const o=t.$implicit;e.xp6(1),e.Oqu(o.encuesta)}}function z(r,t){1&r&&(e.TgZ(0,"th",19),e._uU(1,"UPM's"),e.qZA())}function X(r,t){if(1&r&&(e.TgZ(0,"td",20),e._uU(1),e.qZA()),2&r){const o=t.$implicit;e.xp6(1),e.Oqu(o.upms)}}function K(r,t){1&r&&(e.TgZ(0,"th",19),e._uU(1,"Acciones"),e.qZA())}function W(r,t){if(1&r){const o=e.EpF();e.TgZ(0,"td",20)(1,"button",21),e.NdJ("click",function(){const c=e.CHM(o).$implicit,b=e.oxw();return e.KtG(b.editar(c.id,c.nombre,c.fecha,c.encuesta,c.upms))}),e.TgZ(2,"mat-icon",22),e._uU(3,"edit"),e.qZA()(),e.TgZ(4,"button",23),e.NdJ("click",function(){const c=e.CHM(o).$implicit,b=e.oxw();return e.KtG(b.desactivar(c.id,c.nombre))}),e.TgZ(5,"mat-icon",24),e._uU(6,"delete"),e.qZA()()()}}function V(r,t){1&r&&e._UZ(0,"tr",25)}function ee(r,t){1&r&&e._UZ(0,"tr",26)}function te(r,t){if(1&r&&(e.TgZ(0,"tr",27)(1,"td",28),e._uU(2),e.qZA()()),2&r){e.oxw();const o=e.MAs(11);e.xp6(2),e.hij(' No hay resultados de "',o.value,'" ')}}const oe=function(){return[5,10,25,100]};class g{constructor(t,o){this.projectService=t,this.dialogService=o,this.displayedColumns=["id","nombre","fecha","encuesta","upms","options"],this.date=new Date((new Date).getDate()),this.dataEdit={id:0,nombre:"",fecha:"",upms:[],encuesta:""},this.dataSource=new m.by}applyFilter(t){this.dataSource.filter=t.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}editar(t,o,a,s,c){this.dataEdit.nombre=o,this.dataEdit.id=Number(t),this.dataEdit.upms=c,this.dataEdit.encuesta=s,this.dataEdit.fecha=a,console.log(this.dataEdit.fecha),this.dialogService.open(_,{height:"50rem",width:"60rem",data:this.dataEdit}).afterClosed().subscribe(le=>{1===le&&this.cargarProyectos()})}ngOnInit(){this.cargarProyectos()}cargarProyectos(){this.projectService.getProjects().subscribe(t=>{this.dataSource=new m.by(t)})}desactivar(t,o){f().fire({title:"\xbfEsta seguro que desea Desactivar el Proyecto: "+o+"?",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Si",denyButtonText:"No"}).then(a=>{a.isConfirmed?this.projectService.desactiveProyect(Number(t)).subscribe(s=>{1==s.status&&(this.cargarProyectos(),f().fire("Ok!","Proyecto Desactivado","success"))},s=>{console.log(s)}):a.isDenied&&f().fire("Cambios no guardados","","info")})}}function re(r,t){1&r&&(e.TgZ(0,"mat-error"),e._uU(1,"Nombre de proyecto es "),e.TgZ(2,"strong"),e._uU(3,"requerido"),e.qZA()())}function ie(r,t){1&r&&(e.TgZ(0,"mat-error"),e._uU(1,"Fecha es "),e.TgZ(2,"strong"),e._uU(3,"requerida"),e.qZA()())}function ne(r,t){if(1&r&&(e.TgZ(0,"mat-option",14),e._uU(1),e.qZA()),2&r){const o=t.$implicit;e.Q6J("value",o.id),e.xp6(1),e.Oqu(o.nombre)}}function ae(r,t){1&r&&(e.TgZ(0,"mat-error"),e._uU(1,"Encuesta es "),e.TgZ(2,"strong"),e._uU(3,"requerida"),e.qZA()())}function se(r,t){if(1&r&&(e.TgZ(0,"mat-list-option",14),e._uU(1),e.qZA()),2&r){const o=t.$implicit;e.Q6J("value",o.id),e.xp6(1),e.AsE(" ",o.nombre,", ",o.municipio," ")}}g.\u0275fac=function(t){return new(t||g)(e.Y36(u),e.Y36(T.uw))},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-project-page"]],viewQuery:function(t,o){if(1&t&&(e.Gf(N.NW,5),e.Gf(F.YE,5)),2&t){let a;e.iGM(a=e.CRH())&&(o.paginator=a.first),e.iGM(a=e.CRH())&&(o.sort=a.first)}},decls:36,vars:5,consts:[[1,"header"],["mat-fab","","color","accent","routerLink","create"],["aria-label","add","oncli",""],["matInput","","placeholder","Ej. Proyecto ENEI",3,"keyup"],["input",""],[1,"mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nombre"],["matColumnDef","fecha"],["matColumnDef","encuesta"],["matColumnDef","upms"],["matColumnDef","options"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of users",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","matTooltip","Click para Editar","matTooltipPosition","right","color","primary",1,"iconbutton",3,"click"],["aria-label","Edit"],["mat-icon-button","","matTooltip","Click para desactivar","color","warn",1,"iconbutton",3,"click"],["aria-label","Delete"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(t,o){1&t&&(e._UZ(0,"app-header"),e.TgZ(1,"div",0)(2,"h1"),e._uU(3,"Proyectos"),e.qZA(),e.TgZ(4,"a",1)(5,"mat-icon",2),e._uU(6,"add"),e.qZA()()(),e.TgZ(7,"mat-form-field")(8,"mat-label"),e._uU(9,"Filter"),e.qZA(),e.TgZ(10,"input",3,4),e.NdJ("keyup",function(s){return o.applyFilter(s)}),e.qZA()(),e.TgZ(12,"div",5)(13,"table",6),e.ynx(14,7),e.YNc(15,k,2,0,"th",8),e.YNc(16,I,2,1,"td",9),e.BQk(),e.ynx(17,10),e.YNc(18,G,2,0,"th",8),e.YNc(19,B,2,1,"td",9),e.BQk(),e.ynx(20,11),e.YNc(21,R,2,0,"th",8),e.YNc(22,L,2,1,"td",9),e.BQk(),e.ynx(23,12),e.YNc(24,H,2,0,"th",8),e.YNc(25,$,2,1,"td",9),e.BQk(),e.ynx(26,13),e.YNc(27,z,2,0,"th",8),e.YNc(28,X,2,1,"td",9),e.BQk(),e.ynx(29,14),e.YNc(30,K,2,0,"th",8),e.YNc(31,W,7,0,"td",9),e.BQk(),e.YNc(32,V,1,0,"tr",15),e.YNc(33,ee,1,0,"tr",16),e.YNc(34,te,3,1,"tr",17),e.qZA(),e._UZ(35,"mat-paginator",18),e.qZA()),2&t&&(e.xp6(13),e.Q6J("dataSource",o.dataSource),e.xp6(19),e.Q6J("matHeaderRowDef",o.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",o.displayedColumns),e.xp6(2),e.Q6J("pageSizeOptions",e.DdM(4,oe)))},dependencies:[C.rH,l.KE,l.hX,j.Nt,v.RK,v.EX,m.BZ,m.fO,m.as,m.w1,m.Dz,m.nj,m.ge,m.ev,m.XQ,m.Gk,m.Ee,Q.Hw,N.NW,q.G],styles:["table[_ngcontent-%COMP%]{width:100%;padding:1em}.mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.full-width-input[_ngcontent-%COMP%]{width:100% auto;padding:1em}.example-section[_ngcontent-%COMP%]{margin:12px}.example-margin[_ngcontent-%COMP%]{margin:0 12px}ul[_ngcontent-%COMP%]{list-style-type:none;margin-top:4px}.header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:1.5rem;padding:0 .4rem;font-family:Roboto,Helvetica Neue,sans-serif}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:inline;padding-top:.6rem;font-weight:400}"]});class P{constructor(t,o,a){this.projectService=t,this.formBuilder=o,this.surveyService=a,this.encuestas=[],this.upms=[],this.pipe=new p.uU("es-GT"),this.date=new Date((new Date).getDate()),this.now=Date.now(),this.project={nombre:"",encuesta_id:0,fecha:this.date},this.upmAsignment={proyecto_id:0,upms:[]},this.buildForm(),this.cargarEncuestas(),this.cargarUpms()}buildForm(){this.projectForm=this.formBuilder.group({nombre:["",i.kI.required],fecha:["",[i.kI.required]],encuesta:["",[i.kI.required]],upms:["",[i.kI.required]]})}get Nombre(){return this.projectForm.get("nombre")}get Fecha(){return this.projectForm.get("fecha")}get Encuesta(){return this.projectForm.get("encuesta")}cargarEncuestas(){this.surveyService.getSurveys().subscribe(t=>{this.encuestas=t})}cargarUpms(){this.projectService.getUpms().subscribe(t=>{this.upms=t})}createProject(){this.projectForm.valid&&(this.project.nombre=this.Nombre?.value,this.project.encuesta_id=this.Encuesta?.value,this.project.fecha=this.Fecha?.value,this.upmAsignment.upms=this.upmSelected,this.projectService.createProject(this.project).subscribe(t=>{1==t.status&&(this.upmAsignment.proyecto_id=t.id,this.projectService.assignUpmToProject(this.upmAsignment).subscribe(o=>{1==o.status&&f().fire("Ok!","Proyecto creado Correctamente","success")},o=>{console.log(o)}))}))}upmSelecteds(t){this.upmSelected=t.map(o=>o.value)}}P.\u0275fac=function(t){return new(t||P)(e.Y36(u),e.Y36(i.qu),e.Y36(A.SurveyService))},P.\u0275cmp=e.Xpm({type:P,selectors:[["app-new-project-page"]],decls:33,vars:7,consts:[[1,"card"],[1,"card-body"],[3,"formGroup","submit"],[1,"form-group"],["appearance","outline",1,"full-width-input"],["type","text","formControlName","nombre","matInput","","placeholder","ENEI","required","",1,"form-control"],[4,"ngIf"],["type","date","formControlName","fecha","matInput","","required","",1,"form-control"],["formControlName","encuesta"],[3,"value",4,"ngFor","ngForOf"],["type","submit","mat-raised-button","","color","primary",3,"disabled"],[1,"example-section"],["formControlName","upms",3,"selectionChange"],["upmList",""],[3,"value"]],template:function(t,o){if(1&t){const a=e.EpF();e._UZ(0,"app-header")(1,"br"),e.TgZ(2,"div",0)(3,"div",1)(4,"form",2),e.NdJ("submit",function(){return o.createProject()}),e.TgZ(5,"div",3)(6,"mat-form-field",4)(7,"mat-label"),e._uU(8,"Ingrese el nombre del Proyecto"),e.qZA(),e._UZ(9,"input",5),e.YNc(10,re,4,0,"mat-error",6),e.qZA()(),e.TgZ(11,"div",3)(12,"mat-form-field",4)(13,"mat-label"),e._uU(14,"Fecha"),e.qZA(),e._UZ(15,"input",7),e.YNc(16,ie,4,0,"mat-error",6),e.qZA()(),e.TgZ(17,"div",3)(18,"mat-form-field",4)(19,"mat-label"),e._uU(20,"Seleccion una encuesta"),e.qZA(),e.TgZ(21,"mat-select",8),e.YNc(22,ne,2,2,"mat-option",9),e.qZA(),e.YNc(23,ae,4,0,"mat-error",6),e.qZA()(),e.TgZ(24,"div",3)(25,"button",10),e._uU(26," Guardar Proyecto "),e.qZA()(),e.TgZ(27,"div",11)(28,"mat-label"),e._uU(29,"UPM's"),e.qZA(),e.TgZ(30,"mat-selection-list",12,13),e.NdJ("selectionChange",function(){e.CHM(a);const c=e.MAs(31);return e.KtG(o.upmSelecteds(c.selectedOptions.selected))}),e.YNc(32,se,2,3,"mat-list-option",9),e.qZA()()()()()}2&t&&(e.xp6(4),e.Q6J("formGroup",o.projectForm),e.xp6(6),e.Q6J("ngIf",(null==o.Nombre?null:o.Nombre.touched)&&(null==o.Nombre?null:o.Nombre.hasError("required"))),e.xp6(6),e.Q6J("ngIf",(null==o.Fecha?null:o.Fecha.touched)&&(null==o.Fecha?null:o.Fecha.hasError("required"))),e.xp6(6),e.Q6J("ngForOf",o.encuestas),e.xp6(1),e.Q6J("ngIf",(null==o.Encuesta?null:o.Encuesta.touched)&&(null==o.Encuesta?null:o.Encuesta.hasError("required"))),e.xp6(2),e.Q6J("disabled",!o.projectForm.valid),e.xp6(7),e.Q6J("ngForOf",o.upms))},dependencies:[p.sg,p.O5,l.KE,l.hX,l.TO,j.Nt,v.lW,Z.Ub,Z.vS,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.sg,i.u,q.G,y.gD,E.ey],styles:[".full-width-input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{width:100%}.example-section[_ngcontent-%COMP%]{margin:12px}.example-margin[_ngcontent-%COMP%]{margin:0 12px}ul[_ngcontent-%COMP%]{list-style-type:none;margin-top:4px}"]});const ce=[{path:"",component:g},{path:"create",component:P}];class d{}d.\u0275fac=function(t){return new(t||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[C.Bz.forChild(ce),C.Bz]});var me=n(4657),ue=n(5330);class h{}h.\u0275fac=function(t){return new(t||h)},h.\u0275mod=e.oAB({type:h}),h.\u0275inj=e.cJS({imports:[p.ez,d,me.M,i.UX,ue.G,y.LD,S.p9]})}}]);