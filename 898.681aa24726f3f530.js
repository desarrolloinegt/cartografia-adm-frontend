"use strict";(self.webpackChunkcartografia_app=self.webpackChunkcartografia_app||[]).push([[898],{3898:(q,y,n)=>{n.r(y),n.d(y,{ProjectModule:()=>h,ProjectPageComponent:()=>_,ProjectRoutingModule:()=>f});var P=n(9132),T=n(8739),u=n(6308),l=n(671),c=n(5226),d=n.n(c),g=n(6895),s=n(4006),t=n(4650),x=n(8049),E=n(6246),Z=n(7274),m=n(9549),w=n(4144),C=n(4859),N=n(4385),U=n(3238),A=n(6709),j=n(4954);function F(r,o){if(1&r&&(t.TgZ(0,"mat-option",13),t._uU(1),t.qZA()),2&r){const e=o.$implicit;t.Q6J("value",e.id+","+e.nombre),t.xp6(1),t.Oqu(e.nombre)}}function k(r,o){1&r&&(t.TgZ(0,"mat-error"),t._uU(1,"Encuesta es "),t.TgZ(2,"strong"),t._uU(3,"requerida"),t.qZA()())}function O(r,o){1&r&&(t.TgZ(0,"mat-error"),t._uU(1,"A\xf1o es "),t.TgZ(2,"strong"),t._uU(3,"requerido"),t.qZA()())}function J(r,o){1&r&&(t.TgZ(0,"mat-error")(1,"strong"),t._uU(2,"A\xf1o debe tener 4 numeros"),t.qZA()())}function M(r,o){if(1&r){const e=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.createProject())}),t._uU(1," Guardar Proyecto "),t.qZA()}if(2&r){const e=t.oxw();t.Q6J("disabled",!e.projectForm.valid)}}function Q(r,o){if(1&r){const e=t.EpF();t.TgZ(0,"button",15),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.cancelAdd())}),t._uU(1," Cancelar "),t.qZA()}}const Y=function(){return["crear-proyecto"]};class b{constructor(o,e,a,i){this.projectService=o,this.formBuilder=e,this.surveyService=a,this.dialogRef=i,this.encuestas=[],this.upms=[],this.pipe=new g.uU("es-GT"),this.date=new Date((new Date).getDate()),this.now=Date.now(),this.checked=!1,this.project={nombre:"",encuesta_id:0,year:"",descripcion:"",automatizacion:0},this.upmAsignment={proyecto_id:0,upms:[]},this.buildForm(),this.cargarEncuestas()}buildForm(){this.projectForm=this.formBuilder.group({year:["",[s.kI.required,s.kI.pattern(/^((\\+91-?)|0)?[0-9]{4}$/)]],encuesta:["",[s.kI.required]],descripcion:[""],automatizacion:[0]})}get Year(){return this.projectForm.get("year")}get Encuesta(){return this.projectForm.get("encuesta")}get Descripcion(){return this.projectForm.get("descripcion")}cargarEncuestas(){this.surveyService.getSurveys().subscribe(o=>{this.encuestas=o})}submit(){}createProject(){if(this.projectForm.valid){let o=this.Encuesta?.value.split(",");this.project.nombre=o[1]+" "+this.Year?.value,this.project.encuesta_id=o[0],this.project.year=this.Year?.value,this.project.descripcion=this.Descripcion?.value,Number(this.project.encuesta_id)&&this.projectService.createProject(this.project).subscribe(e=>{1==e.status&&(d().fire("Ok!","Proyecto creado Correctamente","success"),this.dialogRef.close(1))})}}cancelAdd(){this.dialogRef.close()}automatize(o){this.checked=o,this.project.automatizacion=this.checked?1:0}}function I(r,o){if(1&r&&(t.TgZ(0,"mat-option",13),t._uU(1),t.qZA()),2&r){const e=o.$implicit;t.Q6J("value",e.id+","+e.nombre),t.xp6(1),t.Oqu(e.nombre)}}function z(r,o){1&r&&(t.TgZ(0,"mat-error"),t._uU(1,"Encuesta es "),t.TgZ(2,"strong"),t._uU(3,"requerida"),t.qZA()())}function B(r,o){1&r&&(t.TgZ(0,"mat-error"),t._uU(1,"A\xf1o es "),t.TgZ(2,"strong"),t._uU(3,"requerida"),t.qZA()())}function R(r,o){if(1&r){const e=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.editProject())}),t._uU(1," Editar Proyecto "),t.qZA()}if(2&r){const e=t.oxw();t.Q6J("disabled",!e.editForm.valid)}}b.\u0275fac=function(o){return new(o||b)(t.Y36(x.Y),t.Y36(s.qu),t.Y36(E.SurveyService),t.Y36(Z.so))},b.\u0275cmp=t.Xpm({type:b,selectors:[["app-new-project-page"]],decls:29,vars:16,consts:[[1,"card"],[1,"card-body"],[3,"formGroup","submit"],[1,"form-group"],["appearance","outline",1,"full-width-input"],["formControlName","encuesta"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["type","number","formControlName","year","matInput","","placeholder","2022","required","",1,"form-control"],["type","text","formControlName","descripcion","matInput","","placeholder","Proyecto del a\xf1o 2023",1,"form-control"],["formControlName","automatizacion",1,"example-margin",3,"checked","change"],["type","submit","mat-raised-button","","color","primary",3,"disabled","click",4,"ngxPermissionsOnly"],["type","submit","mat-stroked-button","","color","warn",3,"click",4,"ngxPermissionsOnly"],[3,"value"],["type","submit","mat-raised-button","","color","primary",3,"disabled","click"],["type","submit","mat-stroked-button","","color","warn",3,"click"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2),t.NdJ("submit",function(){return e.submit()}),t.TgZ(3,"div",3)(4,"mat-form-field",4)(5,"mat-label"),t._uU(6,"Seleccione una Encuesta"),t.qZA(),t.TgZ(7,"mat-select",5),t.YNc(8,F,2,2,"mat-option",6),t.qZA(),t.YNc(9,k,4,0,"mat-error",7),t.qZA()(),t.TgZ(10,"div",3)(11,"mat-form-field",4)(12,"mat-label"),t._uU(13,"A\xf1o"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,O,4,0,"mat-error",7),t.YNc(16,J,3,0,"mat-error",7),t.qZA()(),t.TgZ(17,"div",3)(18,"mat-form-field",4)(19,"mat-label"),t._uU(20,"Descripcion(Opcional)"),t.qZA(),t._UZ(21,"input",9),t.qZA()(),t.TgZ(22,"div",3)(23,"mat-checkbox",10),t.NdJ("change",function(i){return e.automatize(i.checked)}),t._uU(24," Crear roles basicos: Jefes de actualizacion, Monitores, Supervisores y Cartografos. "),t.qZA()(),t.TgZ(25,"div",3),t.YNc(26,M,2,1,"button",11),t._UZ(27,"br"),t.YNc(28,Q,2,0,"button",12),t.qZA()()()()),2&o&&(t.xp6(2),t.Q6J("formGroup",e.projectForm),t.xp6(3),t.Udp("font-size",16,"px"),t.xp6(3),t.Q6J("ngForOf",e.encuestas),t.xp6(1),t.Q6J("ngIf",(null==e.Encuesta?null:e.Encuesta.touched)&&(null==e.Encuesta?null:e.Encuesta.hasError("required"))),t.xp6(3),t.Udp("font-size",16,"px"),t.xp6(3),t.Q6J("ngIf",(null==e.Year?null:e.Year.touched)&&(null==e.Year?null:e.Year.hasError("required"))),t.xp6(1),t.Q6J("ngIf",(null==e.Year?null:e.Year.touched)&&(null==e.Year?null:e.Year.hasError("pattern"))),t.xp6(3),t.Udp("font-size",16,"px"),t.xp6(4),t.Q6J("checked",e.checked),t.xp6(3),t.Q6J("ngxPermissionsOnly",t.DdM(14,Y)),t.xp6(2),t.Q6J("ngxPermissionsOnly",t.DdM(15,Y)))},dependencies:[g.sg,g.O5,m.KE,m.hX,m.TO,w.Nt,C.lW,N.gD,U.ey,A.oG,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.Q7,s.sg,s.u,j.gE],styles:[".full-width-input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{width:100%;max-width:95%;margin:0 auto;display:flex}.example-section[_ngcontent-%COMP%]{max-width:95%;margin:0 auto;display:flex}.example-margin[_ngcontent-%COMP%]{margin:0 12px}ul[_ngcontent-%COMP%]{list-style-type:none;margin-top:4px}.card[_ngcontent-%COMP%]{padding:3rem}"]});const G=function(){return["editar-proyecto"]};class v{constructor(o,e,a,i,p){this.surveyService=o,this.projectService=e,this.dialogRef=a,this.data=i,this.formBuilder=p,this.encuestas=[],this.checked=!1,this.selectedUpms=[],this.upmsList=[],this.date=new Date((new Date).getDate()),this.selectedSurvey="",this.asignacionPermisoRolEditado={id:0,upms:[],encuesta:"",year:"",nombre:"",progreso:0},this.buildForm(),this.getSurveys()}submit(){}buildForm(){this.editForm=this.formBuilder.group({nombre:[this.data.nombre,[s.kI.required]],proyecto_id:[this.data.id,[s.kI.required]],year:[this.data.year,[s.kI.required,s.kI.pattern(/^((\\+91-?)|0)?[0-9]{4}$/)]],descripcion:[this.data.descripcion],encuesta_id:["",s.kI.required]})}get Id(){return this.editForm.get("proyecto_idd")}get Nombre(){return this.editForm.get("nombre")}get Encuesta(){return this.editForm.get("encuesta_id")}get Year(){return this.editForm.get("year")}getSurveys(){this.surveyService.getSurveys().subscribe(o=>{this.encuestas=o,this.defaulSurvey()})}editProject(){if(this.editForm.valid){let o=this.Encuesta?.value.split(",");this.Encuesta?.setValue(o[0]),this.Nombre?.setValue(o[1]+" "+this.Year?.value),this.projectService.editProject(this.editForm.value).subscribe(e=>{1==e.status&&(d().fire("Ok!",e.message,"success"),this.dialogRef.close(1))},e=>{console.log(e)})}}defaulSurvey(){for(let o=0;o<this.encuestas.length;o++)this.encuestas[o].nombre==this.data.encuesta&&(this.selectedSurvey=this.encuestas[o].id+","+this.encuestas[o].nombre)}cancelEdit(){this.dialogRef.close()}}v.\u0275fac=function(o){return new(o||v)(t.Y36(E.SurveyService),t.Y36(x.Y),t.Y36(Z.so),t.Y36(Z.WI),t.Y36(s.qu))},v.\u0275cmp=t.Xpm({type:v,selectors:[["app-project-edit-dialog"]],decls:29,vars:8,consts:[[1,"card"],["mat-dialog-title",""],[1,"card-body"],[3,"formGroup","submit"],[1,"form-group"],["appearance","outline",1,"full-width-input"],["formControlName","encuesta_id",3,"value"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["type","number","formControlName","year","matInput","","required","",1,"form-control"],["type","text","formControlName","descripcion","matInput","",1,"form-control"],["type","submit","mat-stroked-button","","color","primary",3,"disabled","click",4,"ngxPermissionsOnly"],["type","submit","mat-stroked-button","","color","warn",3,"click"],[3,"value"],["type","submit","mat-stroked-button","","color","primary",3,"disabled","click"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"h3",1),t._uU(2),t.qZA(),t._UZ(3,"br")(4,"br"),t.TgZ(5,"div",2)(6,"form",3),t.NdJ("submit",function(){return e.submit()}),t.TgZ(7,"div",4)(8,"mat-form-field",5)(9,"mat-label"),t._uU(10,"Seleccione una encuesta"),t.qZA(),t.TgZ(11,"mat-select",6),t.YNc(12,I,2,2,"mat-option",7),t.qZA(),t.YNc(13,z,4,0,"mat-error",8),t.qZA()(),t.TgZ(14,"div",4)(15,"mat-form-field",5)(16,"mat-label"),t._uU(17,"A\xf1o"),t.qZA(),t._UZ(18,"input",9),t.YNc(19,B,4,0,"mat-error",8),t.qZA()(),t.TgZ(20,"div",4)(21,"mat-form-field",5)(22,"mat-label"),t._uU(23,"Descripcion(Opcional)"),t.qZA(),t._UZ(24,"input",10),t.qZA()(),t.TgZ(25,"div",4),t.YNc(26,R,2,1,"button",11),t.TgZ(27,"button",12),t.NdJ("click",function(){return e.cancelEdit()}),t._uU(28," Cancelar "),t.qZA()()()()()),2&o&&(t.xp6(2),t.hij("Proyecto: ",e.data.nombre,""),t.xp6(4),t.Q6J("formGroup",e.editForm),t.xp6(5),t.Q6J("value",e.selectedSurvey),t.xp6(1),t.Q6J("ngForOf",e.encuestas),t.xp6(1),t.Q6J("ngIf",(null==e.Encuesta?null:e.Encuesta.touched)&&(null==e.Encuesta?null:e.Encuesta.hasError("required"))),t.xp6(6),t.Q6J("ngIf",(null==e.Year?null:e.Year.touched)&&(null==e.Year?null:e.Year.hasError("required"))),t.xp6(7),t.Q6J("ngxPermissionsOnly",t.DdM(7,G)))},dependencies:[g.sg,g.O5,m.KE,m.hX,m.TO,w.Nt,C.lW,N.gD,U.ey,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.Q7,s.sg,s.u,j.gE],styles:[".mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.full-width-input[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]{width:50%}.card[_ngcontent-%COMP%]{padding:2rem}"]});var H=n(7392),D=n(266);function $(r,o){if(1&r){const e=t.EpF();t.TgZ(0,"button",31),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.openProject())}),t.TgZ(1,"mat-icon"),t._uU(2,"add"),t.qZA(),t._uU(3," Crear Proyecto "),t.qZA()}}function K(r,o){1&r&&(t.TgZ(0,"th",32),t._uU(1,"ID"),t.qZA())}function L(r,o){if(1&r&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&r){const e=o.$implicit;t.xp6(1),t.Oqu(e.id)}}function V(r,o){1&r&&(t.TgZ(0,"th",32),t._uU(1,"Nombre"),t.qZA())}function W(r,o){if(1&r&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&r){const e=o.$implicit;t.xp6(1),t.Oqu(e.nombre)}}function X(r,o){1&r&&(t.TgZ(0,"th",32),t._uU(1,"A\xf1o"),t.qZA())}function tt(r,o){if(1&r&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&r){const e=o.$implicit;t.xp6(1),t.Oqu(e.year)}}function et(r,o){1&r&&(t.TgZ(0,"th",32),t._uU(1,"Encuesta"),t.qZA())}function ot(r,o){if(1&r&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&r){const e=o.$implicit;t.xp6(1),t.Oqu(e.encuesta)}}function rt(r,o){1&r&&(t.TgZ(0,"th",32),t._uU(1,"Descripcion"),t.qZA())}function it(r,o){if(1&r&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&r){const e=o.$implicit;t.xp6(1),t.Oqu(e.descripcion)}}function nt(r,o){1&r&&(t.TgZ(0,"th",32),t._uU(1,"Estado"),t.qZA())}function at(r,o){1&r&&(t.TgZ(0,"button",37),t._uU(1,"En progreso"),t.qZA())}function ct(r,o){1&r&&(t.TgZ(0,"button",38),t._uU(1,"Finalizado"),t.qZA())}function st(r,o){if(1&r&&(t.TgZ(0,"td",33),t.YNc(1,at,2,0,"button",35),t.YNc(2,ct,2,0,"button",36),t.qZA()),2&r){const e=o.$implicit;t.xp6(1),t.Q6J("ngIf",0==e.progreso),t.xp6(1),t.Q6J("ngIf",1==e.progreso)}}function lt(r,o){1&r&&(t.TgZ(0,"th",39),t._uU(1,"Acciones"),t.qZA())}function ut(r,o){if(1&r){const e=t.EpF();t.TgZ(0,"button",44),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2).$implicit,p=t.oxw();return t.KtG(p.editar(i.id,i.nombre,i.year,i.encuesta,i.descripcion))}),t.TgZ(1,"mat-icon",45),t._uU(2,"edit"),t.qZA()()}}const S=function(){return["desactivar-proyecto"]};function mt(r,o){1&r&&(t.TgZ(0,"div"),t.YNc(1,ut,3,0,"button",43),t.qZA()),2&r&&(t.xp6(1),t.Q6J("ngxPermissionsOnly",t.DdM(1,S)))}function pt(r,o){if(1&r){const e=t.EpF();t.TgZ(0,"button",46),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,p=t.oxw();return t.KtG(p.desactivar(i.id,i.nombre))}),t.TgZ(1,"mat-icon",47),t._uU(2,"delete"),t.qZA()()}}function dt(r,o){if(1&r){const e=t.EpF();t.TgZ(0,"button",49),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2).$implicit,p=t.oxw();return t.KtG(p.finalizarProject(i.id,i.nombre))}),t.TgZ(1,"mat-icon",50),t._uU(2,"done"),t.qZA()()}}const gt=function(){return["finalizar-proyecto"]};function ft(r,o){1&r&&(t.TgZ(0,"div"),t.YNc(1,dt,3,0,"button",48),t.qZA()),2&r&&(t.xp6(1),t.Q6J("ngxPermissionsOnly",t.DdM(1,gt)))}function _t(r,o){if(1&r&&(t.TgZ(0,"td",40),t.YNc(1,mt,2,2,"div",41),t.YNc(2,pt,3,0,"button",42),t.YNc(3,ft,2,2,"div",41),t.qZA()),2&r){const e=o.$implicit;t.xp6(1),t.Q6J("ngIf",0==e.progreso),t.xp6(1),t.Q6J("ngxPermissionsOnly",t.DdM(3,S)),t.xp6(1),t.Q6J("ngIf",0==e.progreso)}}function ht(r,o){1&r&&t._UZ(0,"tr",51)}function Pt(r,o){1&r&&t._UZ(0,"tr",52)}function bt(r,o){if(1&r&&(t.TgZ(0,"tr",53)(1,"td",54),t._uU(2),t.qZA()()),2&r){t.oxw();const e=t.MAs(20);t.xp6(2),t.hij(' No hay resultados de "',e.value,'" ')}}const vt=function(){return["crear-proyecto"]},yt=function(){return[5,10,25,100]};class _{constructor(o,e){this.projectService=o,this.dialogService=e,this.data=[[1,2],[3,4]],this.displayedColumns=["id","nombre","year","encuesta","descripcion","progreso","options"],this.date=new Date((new Date).getDate()),this.dataEdit={id:0,nombre:"",year:"",encuesta:"",descripcion:"",automatizacion:0,encuesta_id:0},this.dataSource=new l.by,this.cargarProyectos()}applyFilter(o){this.dataSource.filter=o.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}openProject(){this.dialogService.open(b,{height:"27rem",width:"50rem"}).afterClosed().subscribe(e=>{1==e&&this.cargarProyectos()})}editar(o,e,a,i,p){this.dataEdit.nombre=e,this.dataEdit.id=Number(o),this.dataEdit.encuesta=i,this.dataEdit.year=a,this.dataEdit.descripcion=p,this.dialogService.open(v,{height:"27rem",width:"50rem",data:this.dataEdit}).afterClosed().subscribe(Ct=>{1===Ct&&this.cargarProyectos()})}ngOnInit(){}cargarProyectos(){this.projectService.getProjectView().subscribe(o=>{this.dataSource=new l.by(o),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort})}desactivar(o,e){d().fire({title:"\xbfEst\xe1 seguro que desea desactivar el proyecto: "+e+"?",text:"\xa1Esta acci\xf3n no se podr\xe1 revertir!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Desactivar",cancelButtonText:"Cancelar"}).then(a=>{a.isConfirmed?this.projectService.desactiveProyect(Number(o)).subscribe(i=>{1==i.status&&(this.cargarProyectos(),d().fire("\xa1Desactivado!","Proyecto desactivado","success"))},i=>{console.log(i)}):a.isDenied&&d().fire("Cambios no guardados","","info")})}finalizarProject(o,e){d().fire({title:"\xbfEst\xe1 seguro que desea finalizar el proyecto: "+e+"?",text:"\xa1Esta acci\xf3n no se podr\xe1 revertir!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Finalizar",cancelButtonText:"Cancelar"}).then(a=>{a.isConfirmed?this.projectService.desactiveProyect(Number(o)).subscribe(i=>{1==i.status&&(this.cargarProyectos(),d().fire("\xa1Finalizado!","Proyecto finalizado","success"))},i=>{console.log(i)}):a.isDenied&&d().fire("Cambios no guardados","","info")})}}_.\u0275fac=function(o){return new(o||_)(t.Y36(x.Y),t.Y36(Z.uw))},_.\u0275cmp=t.Xpm({type:_,selectors:[["app-project-page"]],viewQuery:function(o,e){if(1&o&&(t.Gf(T.NW,5),t.Gf(u.YE,5)),2&o){let a;t.iGM(a=t.CRH())&&(e.paginator=a.first),t.iGM(a=t.CRH())&&(e.sort=a.first)}},decls:51,vars:11,consts:[[1,"header"],[1,"grid-container"],[1,"frow-container"],[1,"frow","row-start"],[1,"col-sm-1-1","col-sm-6-12","col-md-6-12"],[1,"col-sm-1-1","col-sm-3-12","col-md-3-12"],[1,"col-sm-1-1","col-sm-3-12","col-md-3-12",2,"text-align","right"],["mat-flat-button","","color","accent","style","margin-right: 8px;",3,"click",4,"ngxPermissionsOnly"],[1,"mat-tab"],["appearence","outline",1,"fluid"],["matInput","","placeholder","Ejemplo: ENEI 2023",3,"keyup"],["input",""],["matSuffix",""],[1,"mat-elevation-z8"],["mat-table","","matSort","",1,"fluid",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["class","cell-pointer","mat-cell","",4,"matCellDef"],["matColumnDef","nombre"],["matColumnDef","year"],["matColumnDef","encuesta"],["matColumnDef","descripcion"],["class","cell-pointer description","mat-cell","",4,"matCellDef"],["matColumnDef","progreso"],["matColumnDef","options"],["mat-header-cell","",4,"matHeaderCellDef"],["class","cell-pointer options","mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["class","cell-pointer","mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-flat-button","","color","accent",2,"margin-right","8px",3,"click"],["mat-header-cell","","mat-sort-header",""],["mat-cell","",1,"cell-pointer"],["mat-cell","",1,"cell-pointer","description"],["mat-stroked-button","","color","warn","class","progres",4,"ngIf"],["mat-stroked-button","","color","primary","class","progres",4,"ngIf"],["mat-stroked-button","","color","warn",1,"progres"],["mat-stroked-button","","color","primary",1,"progres"],["mat-header-cell",""],["mat-cell","",1,"cell-pointer","options"],[4,"ngIf"],["mat-icon-button","","matTooltip","Desactivar","color","warn","class","iconbutton","matTooltipPosition","above",3,"click",4,"ngxPermissionsOnly"],["mat-icon-button","","matTooltip","Editar","matTooltipPosition","right","color","primary","class","iconbutton","matTooltipPosition","above",3,"click",4,"ngxPermissionsOnly"],["mat-icon-button","","matTooltip","Editar","matTooltipPosition","right","color","primary","matTooltipPosition","above",1,"iconbutton",3,"click"],["aria-label","Edit"],["mat-icon-button","","matTooltip","Desactivar","color","warn","matTooltipPosition","above",1,"iconbutton",3,"click"],["aria-label","Delete"],["matTooltip","Finalizar Proyecto","matTooltipPosition","below","mat-icon-button","",3,"click",4,"ngxPermissionsOnly"],["matTooltip","Finalizar Proyecto","matTooltipPosition","below","mat-icon-button","",3,"click"],["aria-label","Home"],["mat-header-row",""],["mat-row","",1,"cell-pointer"],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(o,e){1&o&&(t._UZ(0,"br"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"h2"),t._uU(7,"Proyectos"),t.qZA()(),t._UZ(8,"div",5)(9,"div"),t.TgZ(10,"div",6),t.YNc(11,$,4,0,"button",7),t.qZA()(),t._UZ(12,"br")(13,"br")(14,"br"),t.TgZ(15,"div",8)(16,"mat-form-field",9)(17,"mat-label"),t._uU(18,"Buscar"),t.qZA(),t.TgZ(19,"input",10,11),t.NdJ("keyup",function(i){return e.applyFilter(i)}),t.qZA(),t.TgZ(21,"mat-icon",12),t._uU(22,"search"),t.qZA()(),t.TgZ(23,"div",13)(24,"table",14),t.ynx(25,15),t.YNc(26,K,2,0,"th",16),t.YNc(27,L,2,1,"td",17),t.BQk(),t.ynx(28,18),t.YNc(29,V,2,0,"th",16),t.YNc(30,W,2,1,"td",17),t.BQk(),t.ynx(31,19),t.YNc(32,X,2,0,"th",16),t.YNc(33,tt,2,1,"td",17),t.BQk(),t.ynx(34,20),t.YNc(35,et,2,0,"th",16),t.YNc(36,ot,2,1,"td",17),t.BQk(),t.ynx(37,21),t.YNc(38,rt,2,0,"th",16),t.YNc(39,it,2,1,"td",22),t.BQk(),t.ynx(40,23),t.YNc(41,nt,2,0,"th",16),t.YNc(42,st,3,2,"td",17),t.BQk(),t.ynx(43,24),t.YNc(44,lt,2,0,"th",25),t.YNc(45,_t,4,4,"td",26),t.BQk(),t.YNc(46,ht,1,0,"tr",27),t.YNc(47,Pt,1,0,"tr",28),t.YNc(48,bt,3,1,"tr",29),t.qZA(),t._UZ(49,"br")(50,"mat-paginator",30),t.qZA()()()()()),2&o&&(t.xp6(11),t.Q6J("ngxPermissionsOnly",t.DdM(9,vt)),t.xp6(5),t.Udp("font-size",12,"px"),t.xp6(1),t.Udp("font-size",14,"px"),t.xp6(7),t.Q6J("dataSource",e.dataSource),t.xp6(22),t.Q6J("matHeaderRowDef",e.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",e.displayedColumns),t.xp6(3),t.Q6J("pageSizeOptions",t.DdM(10,yt)))},dependencies:[g.O5,m.KE,m.hX,m.R9,w.Nt,C.lW,C.RK,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,l.Ee,H.Hw,T.NW,D.gM,u.YE,u.nU,j.gE],styles:[".options[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]});const Tt=[{path:"",component:_}];class f{}f.\u0275fac=function(o){return new(o||f)},f.\u0275mod=t.oAB({type:f}),f.\u0275inj=t.cJS({imports:[P.Bz.forChild(Tt),P.Bz]});var Zt=n(4320);class h{}h.\u0275fac=function(o){return new(o||h)},h.\u0275mod=t.oAB({type:h}),h.\u0275inj=t.cJS({imports:[g.ez,f,Zt.M,s.UX,N.LD,A.p9,D.AV,j.VI.forChild()]})},8049:(q,y,n)=>{n.d(y,{Y:()=>u});var P=n(4650),T=n(8443);class u{constructor(c){this.apiService=c}getProjects(){return this.apiService.getAll("obtenerUpmsProyecto")}getProjectView(){return this.apiService.getAll("proyectos")}desactiveProyect(c){return this.apiService.desactive("proyecto",c)}getUpms(c){return this.apiService.getById("obtenerUpmsProyecto",c)}createProject(c){return this.apiService.store("proyecto",c)}assignUpmToProject(c){return this.apiService.store("asginarUpmsProyecto",c)}editProject(c){return this.apiService.patch("proyecto/edit",c)}projectFinish(c){return this.apiService.desactive("finalizarProyecto",c)}sustituirUpm(c){return this.apiService.patch("sustituirUpm",c)}createUpms(c){return this.apiService.store("cargarUpms",c)}createDepartments(c){return this.apiService.store("cargarDepartamentos",c)}createMunicipios(c){return this.apiService.store("cargarMunicipios",c)}getUpmCartographer(c){return this.apiService.store("obtenerUpmCartografo",c)}}u.\u0275fac=function(c){return new(c||u)(P.LFG(T.s))},u.\u0275prov=P.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}}]);