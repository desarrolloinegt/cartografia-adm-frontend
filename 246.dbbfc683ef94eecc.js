"use strict";(self.webpackChunkcartografia_app=self.webpackChunkcartografia_app||[]).push([[246],{6246:(L,T,i)=>{i.r(T),i.d(T,{NewSurveyPagesComponent:()=>g,SurveyPagesComponent:()=>p,SurveyService:()=>c,SurveysModule:()=>f,SurveysRoutingModule:()=>d});var N=i(7974),P=i(6308),s=i(7155),w=i(5226),v=i.n(w),n=i(4006),b=i(7274),e=i(4650),E=i(6570);class c{constructor(t){this.apiService=t}getSurveys(){return this.apiService.getAll("encuestas")}desactiveSurvey(t){return this.apiService.desactive("encuesta",t)}create(t){return this.apiService.store("encuesta",t)}editSurvey(t){return this.apiService.patch("encuesta/edit",t)}}c.\u0275fac=function(t){return new(t||c)(e.LFG(E.s))},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"});var C=i(6895),l=i(9549),S=i(4144),h=i(4859);function U(o,t){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Nombre es "),e.TgZ(2,"strong"),e._uU(3,"requerido"),e.qZA()())}function A(o,t){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Descripcion es "),e.TgZ(2,"strong"),e._uU(3,"requerido"),e.qZA()())}class y{constructor(t,r,a,u){this.surveyService=t,this.dialogRef=r,this.data=a,this.formBuilder=u,this.buildForm()}submit(){}buildForm(){this.editForm=this.formBuilder.group({id:[this.data.id,[n.kI.required]],nombre:[this.data.nombre,[n.kI.required]],descripcion:[this.data.descripcion,[n.kI.required]]})}get Id(){return this.editForm.get("id")}get Nombre(){return this.editForm.get("nombre")}get Descripcion(){return this.editForm.get("descripcion")}editSurvey(){this.editForm.valid&&this.surveyService.editSurvey(this.editForm.value).subscribe(t=>{1==t.status&&(v().fire("Ok!",t.message,"success"),this.dialogRef.close(1))},t=>{console.log(t)})}cancelEdit(){this.dialogRef.close()}}y.\u0275fac=function(t){return new(t||y)(e.Y36(c),e.Y36(b.so),e.Y36(b.WI),e.Y36(n.qu))},y.\u0275cmp=e.Xpm({type:y,selectors:[["app-survey-edit-dialog"]],decls:24,vars:5,consts:[[1,"card"],["mat-dialog-title",""],[1,"card-body"],[3,"formGroup","submit"],[1,"form-group"],["appearance","outline",1,"full-width-input"],["type","text","formControlName","nombre","matInput","","placeholder","admin","required","",1,"form-control"],[4,"ngIf"],["type","text","formControlName","descripcion","matInput","","placeholder","admin","required","",1,"form-control"],["type","submit","mat-stroked-button","","color","primary",3,"disabled","click"],["type","submit","mat-stroked-button","","color","warn",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"h3",1),e._uU(2),e.qZA(),e._UZ(3,"br")(4,"br"),e.TgZ(5,"div",2)(6,"form",3),e.NdJ("submit",function(){return r.submit()}),e.TgZ(7,"div",4)(8,"mat-form-field",5)(9,"mat-label"),e._uU(10,"Nombre de la Encuesta "),e.qZA(),e._UZ(11,"input",6),e.YNc(12,U,4,0,"mat-error",7),e.qZA()(),e.TgZ(13,"div",4)(14,"mat-form-field",5)(15,"mat-label"),e._uU(16,"Descripcion"),e.qZA(),e._UZ(17,"input",8),e.YNc(18,A,4,0,"mat-error",7),e.qZA()(),e.TgZ(19,"div",4)(20,"button",9),e.NdJ("click",function(){return r.editSurvey()}),e._uU(21," Editar Encuesta "),e.qZA(),e.TgZ(22,"button",10),e.NdJ("click",function(){return r.cancelEdit()}),e._uU(23," Cancelar "),e.qZA()()()()()),2&t&&(e.xp6(2),e.hij("Encuesta: ",r.data.nombre,""),e.xp6(4),e.Q6J("formGroup",r.editForm),e.xp6(6),e.Q6J("ngIf",(null==r.Nombre?null:r.Nombre.touched)&&(null==r.Nombre?null:r.Nombre.hasError("required"))),e.xp6(6),e.Q6J("ngIf",(null==r.Descripcion?null:r.Descripcion.touched)&&(null==r.Descripcion?null:r.Descripcion.hasError("required"))),e.xp6(2),e.Q6J("disabled",!r.editForm.valid))},dependencies:[C.O5,l.KE,l.hX,l.TO,S.Nt,h.lW,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.sg,n.u],styles:[".mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.full-width-input[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]{width:50%}.card[_ngcontent-%COMP%]{padding:2rem}"]});var _=i(9299),D=i(3646),q=i(7392);function x(o,t){1&o&&(e.TgZ(0,"th",17),e._uU(1,"ID"),e.qZA())}function F(o,t){if(1&o&&(e.TgZ(0,"td",18),e._uU(1),e.qZA()),2&o){const r=t.$implicit;e.xp6(1),e.hij(" ",r.id," ")}}function M(o,t){1&o&&(e.TgZ(0,"th",17),e._uU(1," Nombre "),e.qZA())}function O(o,t){if(1&o&&(e.TgZ(0,"td",18),e._uU(1),e.qZA()),2&o){const r=t.$implicit;e.xp6(1),e.hij(" ",r.nombre," ")}}function J(o,t){1&o&&(e.TgZ(0,"th",17),e._uU(1,"Descripcion"),e.qZA())}function Y(o,t){if(1&o&&(e.TgZ(0,"td",18),e._uU(1),e.qZA()),2&o){const r=t.$implicit;e.xp6(1),e.hij(" ",r.descripcion," ")}}function I(o,t){1&o&&(e.TgZ(0,"th",17),e._uU(1,"Acciones"),e.qZA())}function Q(o,t){if(1&o){const r=e.EpF();e.TgZ(0,"td",18)(1,"button",19),e.NdJ("click",function(){const m=e.CHM(r).$implicit,Z=e.oxw();return e.KtG(Z.editar(m.id,m.nombre,m.descripcion))}),e.TgZ(2,"mat-icon",20),e._uU(3,"edit"),e.qZA()(),e.TgZ(4,"button",21),e.NdJ("click",function(){const m=e.CHM(r).$implicit,Z=e.oxw();return e.KtG(Z.desactivar(m.id,m.nombre))}),e.TgZ(5,"mat-icon",22),e._uU(6,"delete"),e.qZA()()()}}function k(o,t){1&o&&e._UZ(0,"tr",23)}function R(o,t){1&o&&e._UZ(0,"tr",24)}function B(o,t){if(1&o&&(e.TgZ(0,"tr",25)(1,"td",26),e._uU(2),e.qZA()()),2&o){e.oxw();const r=e.MAs(11);e.xp6(2),e.hij('No hay resultados de "',r.value,'"')}}const G=function(){return[5,10,25,100]};class p{constructor(t,r){this.surveyService=t,this.dialogService=r,this.displayedColumns=["id","nombre","descripcion","options"],this.surveyData={id:0,nombre:"",descripcion:""},this.dataSource=new s.by}applyFilter(t){this.dataSource.filter=t.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}editar(t,r,a){this.surveyData.nombre=r,this.surveyData.descripcion=a,this.surveyData.id=Number(t),this.dialogService.open(y,{height:"30rem",width:"50rem",data:this.surveyData}).afterClosed().subscribe(m=>{1===m&&this.cargarEncuestas()})}ngOnInit(){this.cargarEncuestas()}cargarEncuestas(){this.surveyService.getSurveys().subscribe(t=>{this.dataSource=new s.by(t)})}desactivar(t,r){v().fire({title:"\xbfEsta seguro que desea Desactivar el Proyecto: "+r+"?",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Si",denyButtonText:"No"}).then(a=>{a.isConfirmed?this.surveyService.desactiveSurvey(Number(t)).subscribe(u=>{1==u.status&&(this.cargarEncuestas(),v().fire("Ok!",u.message,"success"))},u=>{console.log(u)}):a.isDenied&&v().fire("Cambios no guardados","","info")})}}function j(o,t){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Nombre de Encuesta es "),e.TgZ(2,"strong"),e._uU(3,"requerido"),e.qZA()())}function z(o,t){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Descripcion es "),e.TgZ(2,"strong"),e._uU(3,"requerida"),e.qZA()())}p.\u0275fac=function(t){return new(t||p)(e.Y36(c),e.Y36(b.uw))},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-survey-pages"]],viewQuery:function(t,r){if(1&t&&(e.Gf(N.NW,5),e.Gf(P.YE,5)),2&t){let a;e.iGM(a=e.CRH())&&(r.paginator=a.first),e.iGM(a=e.CRH())&&(r.sort=a.first)}},decls:30,vars:5,consts:[[1,"header"],["mat-fab","","color","accent","routerLink","create"],["aria-label","add","oncli",""],["matInput","","placeholder","Ej. ENEI",3,"keyup"],["input",""],[1,"mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nombre"],["matColumnDef","descripcion"],["matColumnDef","options"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of users",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","matTooltip","Click para Editar","matTooltipPosition","right","color","primary",1,"iconbutton",3,"click"],["aria-label","Edit"],["mat-icon-button","","matTooltip","Click para desactivar","color","warn",1,"iconbutton",3,"click"],["aria-label","Delete"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(t,r){1&t&&(e._UZ(0,"app-header"),e.TgZ(1,"div",0)(2,"h1"),e._uU(3,"Encuestas"),e.qZA(),e.TgZ(4,"a",1)(5,"mat-icon",2),e._uU(6,"add"),e.qZA()()(),e.TgZ(7,"mat-form-field")(8,"mat-label"),e._uU(9,"Filter"),e.qZA(),e.TgZ(10,"input",3,4),e.NdJ("keyup",function(u){return r.applyFilter(u)}),e.qZA()(),e.TgZ(12,"div",5)(13,"table",6),e.ynx(14,7),e.YNc(15,x,2,0,"th",8),e.YNc(16,F,2,1,"td",9),e.BQk(),e.ynx(17,10),e.YNc(18,M,2,0,"th",8),e.YNc(19,O,2,1,"td",9),e.BQk(),e.ynx(20,11),e.YNc(21,J,2,0,"th",8),e.YNc(22,Y,2,1,"td",9),e.BQk(),e.ynx(23,12),e.YNc(24,I,2,0,"th",8),e.YNc(25,Q,7,0,"td",9),e.BQk(),e.YNc(26,k,1,0,"tr",13),e.YNc(27,R,1,0,"tr",14),e.YNc(28,B,3,1,"tr",15),e.qZA(),e._UZ(29,"mat-paginator",16),e.qZA()),2&t&&(e.xp6(13),e.Q6J("dataSource",r.dataSource),e.xp6(13),e.Q6J("matHeaderRowDef",r.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",r.displayedColumns),e.xp6(2),e.Q6J("pageSizeOptions",e.DdM(4,G)))},dependencies:[_.rH,D.G,l.KE,l.hX,S.Nt,h.RK,h.EX,s.BZ,s.fO,s.as,s.w1,s.Dz,s.nj,s.ge,s.ev,s.XQ,s.Gk,s.Ee,q.Hw,N.NW],styles:["table[_ngcontent-%COMP%]{width:100%;padding:1em}.mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.full-width-input[_ngcontent-%COMP%]{width:100% auto;padding:1em}.example-section[_ngcontent-%COMP%]{margin:12px}.example-margin[_ngcontent-%COMP%]{margin:0 12px}ul[_ngcontent-%COMP%]{list-style-type:none;margin-top:4px}.header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:1.5rem;padding:0 .4rem;font-family:Roboto,Helvetica Neue,sans-serif}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:inline;padding-top:.6rem;font-weight:400}"]});class g{constructor(t,r){this.surveyService=t,this.formBuilder=r,this.buildForm()}buildForm(){this.surveyForm=this.formBuilder.group({nombre:["",n.kI.required],descripcion:["",[n.kI.required]]})}get Nombre(){return this.surveyForm.get("nombre")}get Descripcion(){return this.surveyForm.get("descripcion")}createSurvey(){this.surveyForm.valid&&this.surveyService.create(this.surveyForm.value).subscribe(t=>{1==t.status&&v().fire("Ok!",t.message,"success")},t=>{console.log(t)})}}g.\u0275fac=function(t){return new(t||g)(e.Y36(c),e.Y36(n.qu))},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-new-survey-pages"]],decls:20,vars:4,consts:[[1,"card"],[1,"card-body"],[3,"formGroup","submit"],[1,"form-group"],["appearance","outline",1,"full-width-input"],["type","text","formControlName","nombre","matInput","","placeholder","ENEI","required","",1,"form-control"],[4,"ngIf"],["type","text","formControlName","descripcion","placeholder","Encuesta creada para proyecto ENEI a\xf1o 2024","matInput","","required","",1,"form-control"],["type","submit","mat-raised-button","","color","primary",3,"disabled"]],template:function(t,r){1&t&&(e._UZ(0,"app-header")(1,"br"),e.TgZ(2,"div",0)(3,"div",1)(4,"form",2),e.NdJ("submit",function(){return r.createSurvey()}),e.TgZ(5,"div",3)(6,"mat-form-field",4)(7,"mat-label"),e._uU(8,"Ingrese el nombre del la Encuesta"),e.qZA(),e._UZ(9,"input",5),e.YNc(10,j,4,0,"mat-error",6),e.qZA()(),e.TgZ(11,"div",3)(12,"mat-form-field",4)(13,"mat-label"),e._uU(14,"Descripcion"),e.qZA(),e._UZ(15,"input",7),e.YNc(16,z,4,0,"mat-error",6),e.qZA()(),e.TgZ(17,"div",3)(18,"button",8),e._uU(19," Guardar Encuesta "),e.qZA()()()()()),2&t&&(e.xp6(4),e.Q6J("formGroup",r.surveyForm),e.xp6(6),e.Q6J("ngIf",(null==r.Nombre?null:r.Nombre.touched)&&(null==r.Nombre?null:r.Nombre.hasError("required"))),e.xp6(6),e.Q6J("ngIf",(null==r.Descripcion?null:r.Descripcion.touched)&&(null==r.Descripcion?null:r.Descripcion.hasError("required"))),e.xp6(2),e.Q6J("disabled",!r.surveyForm.valid))},dependencies:[C.O5,D.G,l.KE,l.hX,l.TO,S.Nt,h.lW,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.sg,n.u],styles:[".full-width-input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{width:100%}.example-section[_ngcontent-%COMP%]{margin:12px}.example-margin[_ngcontent-%COMP%]{margin:0 12px}ul[_ngcontent-%COMP%]{list-style-type:none;margin-top:4px}"]});const H=[{path:"",component:p},{path:"create",component:g}];class d{}d.\u0275fac=function(t){return new(t||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[_.Bz.forChild(H),_.Bz]});var X=i(5330),K=i(4657);class f{}f.\u0275fac=function(t){return new(t||f)},f.\u0275mod=e.oAB({type:f}),f.\u0275inj=e.cJS({imports:[C.ez,d,X.G,K.M,n.UX]})}}]);