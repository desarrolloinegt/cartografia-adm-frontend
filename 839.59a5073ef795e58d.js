"use strict";(self.webpackChunkcartografia_app=self.webpackChunkcartografia_app||[]).push([[839],{3031:(Y,Z,r)=>{r.d(Z,{a:()=>_,q:()=>E});class _{static getHierarchys(){return[1,2,3,4,5,6,7]}}class E{static getArray(){}}E.array=[{id:1,color:"#5DADE2"},{id:2,color:"#F4D03F"},{id:3,color:"#229954"},{id:4,color:"#E74C3C"}]},4839:(Y,Z,r)=>{r.r(Z),r.d(Z,{GroupPagesComponent:()=>F,GroupService:()=>P.l,GroupsModule:()=>I,GroupsRoutingModule:()=>B});var _=r(9132),E=r(5861),D=r(8739),h=r(6308),e=r(671),s=r(6525),o=r(3995),N=r(5226),v=r.n(N),M=r(574),A=r(7559),b=r(4006),w=r(3031),t=r(4650),P=r(4476),C=r(8049),g=r(7274),l=r(6895),m=r(9549),G=r(4144),O=r(4859),S=r(4385),Q=r(3238),J=r(4954);function W(n,i){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Nombre de rol es "),t.TgZ(2,"strong"),t._uU(3,"requerido"),t.qZA()())}function L(n,i){if(1&n&&(t.TgZ(0,"mat-option",12),t._uU(1),t.qZA()),2&n){const a=i.$implicit;t.Q6J("value",a.id),t.xp6(1),t.Oqu(a.nombre)}}function q(n,i){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Proyecto es "),t.TgZ(2,"strong"),t._uU(3,"requerida"),t.qZA()())}function j(n,i){if(1&n){const a=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(a);const u=t.oxw();return t.KtG(u.createGroup())}),t._uU(1," Guardar Rol "),t.qZA()}if(2&n){const a=t.oxw();t.Q6J("disabled",!a.groupForm.valid)}}function k(n,i){if(1&n){const a=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(a);const u=t.oxw();return t.KtG(u.cancelAdd())}),t._uU(1," Cancelar "),t.qZA()}}const K=function(){return["crear-grupo"]};class U{constructor(i,a,c,u){this.groupService=i,this.projectService=a,this.formBuilder=c,this.dialogRef=u,this.projects=[],this.jerarquias=w.a.getHierarchys(),this.buildForm(),this.getProjects()}buildForm(){this.groupForm=this.formBuilder.group({nombre:["",b.kI.required],descripcion:[""],proyecto_id:["",[b.kI.required]]})}get Nombre(){return this.groupForm.get("nombre")}get Descripcion(){return this.groupForm.get("descripcion")}get ProyectoId(){return this.groupForm.get("proyecto_id")}get Jerarquia(){return this.groupForm.get("jerarquia")}getProjects(){this.projectService.getProjectView().subscribe(i=>{this.projects=i})}submit(){}createGroup(){this.groupForm.valid&&(console.log(this.groupForm.value),this.groupService.create(this.groupForm.value).subscribe(i=>{1==i.status&&(v().fire("Ok!",i.message,"success"),this.dialogRef.close(1))}))}cancelAdd(){this.dialogRef.close()}}U.\u0275fac=function(i){return new(i||U)(t.Y36(P.l),t.Y36(C.Y),t.Y36(b.qu),t.Y36(g.so))},U.\u0275cmp=t.Xpm({type:U,selectors:[["app-new-group-pages"]],decls:25,vars:14,consts:[[1,"card"],[1,"card-body"],[3,"formGroup","submit"],[1,"form-group"],["appearance","outline",1,"full-width-input"],["type","text","formControlName","nombre","matInput","","placeholder","Supervisores ENEI","required","",1,"form-control"],[4,"ngIf"],["type","text","formControlName","descripcion","placeholder","Proyecto 2026","matInput","",1,"form-control"],["formControlName","proyecto_id"],[3,"value",4,"ngFor","ngForOf"],["type","submit","mat-raised-button","","color","primary",3,"disabled","click",4,"ngxPermissionsOnly"],["type","submit","mat-stroked-button","","color","warn",3,"click",4,"ngxPermissionsOnly"],[3,"value"],["type","submit","mat-raised-button","","color","primary",3,"disabled","click"],["type","submit","mat-stroked-button","","color","warn",3,"click"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2),t.NdJ("submit",function(){return a.submit()}),t.TgZ(3,"div",3)(4,"mat-form-field",4)(5,"mat-label"),t._uU(6,"Ingrese el Nombre del Rol"),t.qZA(),t._UZ(7,"input",5),t.YNc(8,W,4,0,"mat-error",6),t.qZA()(),t.TgZ(9,"div",3)(10,"mat-form-field",4)(11,"mat-label"),t._uU(12,"Descripcion"),t.qZA(),t._UZ(13,"input",7),t.qZA()(),t.TgZ(14,"div",3)(15,"mat-form-field",4)(16,"mat-label"),t._uU(17,"Seleccione un proyecto"),t.qZA(),t.TgZ(18,"mat-select",8),t.YNc(19,L,2,2,"mat-option",9),t.qZA(),t.YNc(20,q,4,0,"mat-error",6),t.qZA()(),t.TgZ(21,"div",3),t.YNc(22,j,2,1,"button",10),t._UZ(23,"br"),t.YNc(24,k,2,0,"button",11),t.qZA()()()()),2&i&&(t.xp6(2),t.Q6J("formGroup",a.groupForm),t.xp6(3),t.Udp("font-size",16,"px"),t.xp6(3),t.Q6J("ngIf",(null==a.Nombre?null:a.Nombre.touched)&&(null==a.Nombre?null:a.Nombre.hasError("required"))),t.xp6(3),t.Udp("font-size",16,"px"),t.xp6(5),t.Udp("font-size",16,"px"),t.xp6(3),t.Q6J("ngForOf",a.projects),t.xp6(1),t.Q6J("ngIf",(null==a.ProyectoId?null:a.ProyectoId.touched)&&(null==a.ProyectoId?null:a.ProyectoId.hasError("required"))),t.xp6(2),t.Q6J("ngxPermissionsOnly",t.DdM(12,K)),t.xp6(2),t.Q6J("ngxPermissionsOnly",t.DdM(13,K)))},dependencies:[l.sg,l.O5,m.KE,m.hX,m.TO,G.Nt,O.lW,S.gD,Q.ey,b._Y,b.Fj,b.JJ,b.JL,b.Q7,b.sg,b.u,J.gE],styles:[".full-width-input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{width:100%;max-width:98%;margin:0 auto;display:flex}.example-section[_ngcontent-%COMP%]{max-width:98%;margin:0 auto;display:flex}.example-margin[_ngcontent-%COMP%]{margin:0 12px}ul[_ngcontent-%COMP%]{list-style-type:none;margin-top:4px}.card[_ngcontent-%COMP%]{padding:3rem}"]});var p=r(7392),d=r(266);function f(n,i){if(1&n){const a=t.EpF();t.TgZ(0,"button",26),t.NdJ("click",function(){t.CHM(a);const u=t.oxw();return t.KtG(u.open())}),t.TgZ(1,"mat-icon"),t._uU(2,"add"),t.qZA(),t._uU(3," Crear Rol "),t.qZA()}}function y(n,i){1&n&&(t.TgZ(0,"th",27),t._uU(1,"COD"),t.qZA())}function x(n,i){if(1&n&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&n){const a=i.$implicit;t.xp6(1),t.Oqu(a.id)}}function R(n,i){1&n&&(t.TgZ(0,"th",27),t._uU(1,"Nombre"),t.qZA())}function V(n,i){if(1&n&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&n){const a=i.$implicit;t.xp6(1),t.Oqu(a.nombre)}}function tt(n,i){1&n&&(t.TgZ(0,"th",27),t._uU(1,"Descripcion"),t.qZA())}function ot(n,i){if(1&n&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&n){const a=i.$implicit;t.xp6(1),t.Oqu(a.descripcion)}}function et(n,i){1&n&&(t.TgZ(0,"th",27),t._uU(1,"Jerarquia"),t.qZA())}function rt(n,i){if(1&n&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&n){const a=i.$implicit;t.xp6(1),t.Oqu(a.jerarquia)}}function it(n,i){1&n&&(t.TgZ(0,"th",27),t._uU(1,"Proyecto"),t.qZA())}function nt(n,i){if(1&n&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&n){const a=i.$implicit;t.xp6(1),t.Oqu(a.proyecto)}}function at(n,i){1&n&&t._UZ(0,"th",29)}function st(n,i){if(1&n){const a=t.EpF();t.TgZ(0,"button",36),t.NdJ("click",function(){t.CHM(a);const u=t.oxw().$implicit,T=t.oxw();return t.KtG(T.editar(u.id,u.nombre,u.descripcion,u.jerarquia,u.proyecto_id))}),t.TgZ(1,"mat-icon",37),t._uU(2,"edit"),t.qZA()()}}function lt(n,i){if(1&n){const a=t.EpF();t.TgZ(0,"button",38),t.NdJ("click",function(){t.CHM(a);const u=t.oxw().$implicit,T=t.oxw();return t.KtG(T.desactivar(u.id,u.nombre))}),t.TgZ(1,"mat-icon",39),t._uU(2,"delete"),t.qZA()()}}function ut(n,i){if(1&n){const a=t.EpF();t.TgZ(0,"button",40),t.NdJ("click",function(){t.CHM(a);const u=t.oxw().$implicit,T=t.oxw();return t.KtG(T.verUsuarios(u.id,u.nombre))}),t.TgZ(1,"mat-icon"),t._uU(2,"supervised_user_circle"),t.qZA()()}}function ct(n,i){if(1&n){const a=t.EpF();t.TgZ(0,"button",41),t.NdJ("click",function(){t.CHM(a);const u=t.oxw().$implicit,T=t.oxw();return t.KtG(T.addUser(u.id,u.proyecto))}),t.TgZ(1,"mat-icon"),t._uU(2,"add"),t.qZA()()}}function mt(n,i){if(1&n){const a=t.EpF();t.TgZ(0,"button",42),t.NdJ("click",function(){t.CHM(a);const u=t.oxw().$implicit,T=t.oxw();return t.KtG(T.addFile(u.id,u.proyecto))}),t.TgZ(1,"mat-icon"),t._uU(2,"arrow_upward"),t.qZA()()}}function pt(n,i){if(1&n){const a=t.EpF();t.TgZ(0,"button",43),t.NdJ("click",function(){t.CHM(a);const u=t.oxw().$implicit,T=t.oxw();return t.KtG(T.verRoles(u.id,u.nombre))}),t.TgZ(1,"mat-icon"),t._uU(2,"list_alt"),t.qZA()()}}const dt=function(){return["editar-grupo"]},_t=function(){return["desactivar-grupo"]},H=function(){return["asignar-usuario-grupo"]},gt=function(){return["asignar-rol-grupo"]};function ft(n,i){1&n&&(t.TgZ(0,"td",28),t.YNc(1,st,3,0,"button",30),t.YNc(2,lt,3,0,"button",31),t.YNc(3,ut,3,0,"button",32),t.YNc(4,ct,3,0,"button",33),t.YNc(5,mt,3,0,"button",34),t.YNc(6,pt,3,0,"button",35),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngxPermissionsOnly",t.DdM(6,dt)),t.xp6(1),t.Q6J("ngxPermissionsOnly",t.DdM(7,_t)),t.xp6(1),t.Q6J("ngxPermissionsOnly",t.DdM(8,H)),t.xp6(1),t.Q6J("ngxPermissionsOnly",t.DdM(9,H)),t.xp6(1),t.Q6J("ngxPermissionsOnly",t.DdM(10,H)),t.xp6(1),t.Q6J("ngxPermissionsOnly",t.DdM(11,gt)))}function ht(n,i){1&n&&t._UZ(0,"tr",44)}function Tt(n,i){1&n&&t._UZ(0,"tr",45)}function Dt(n,i){if(1&n&&(t.TgZ(0,"tr",46)(1,"td",47),t._uU(2),t.qZA()()),2&n){t.oxw();const a=t.MAs(11);t.xp6(2),t.hij(' No hay resultados de "',a.value,'" ')}}const bt=function(){return["crear-grupo"]},Et=function(){return[5,10,25,100]};class F{constructor(i,a){this.groupService=i,this.dialogService=a,this.data=[],this.displayedColumns=["id","nombre","descripcion","proyecto","options"],this.groupData={id:0,nombre:"",descripcion:"",jerarquia:0,proyecto:"",proyecto_id:0},this.userRolData={nombres:"",rol_id:0,apellidos:"",codigo_usuario:0,proyecto:""},this.roleData={id:0,nombre:"",roles:[]},this.userDataFile={rol_id:0,usuarios:[],proyecto:""},this.dataSource=new e.by}applyFilter(i){this.dataSource.filter=i.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}editar(i,a,c,u,T){this.groupData.id=Number(i),this.groupData.nombre=a,this.groupData.descripcion=c,this.groupData.jerarquia=Number(u),this.groupData.proyecto_id=Number(T),this.dialogService.open(A.e,{height:"20rem",width:"50rem",data:this.groupData}).afterClosed().subscribe(z=>{1===z&&this.cargarGrupos()})}open(){this.dialogService.open(U,{height:"30rem",width:"50rem"}).afterClosed().subscribe(a=>{1==a&&this.cargarGrupos()})}ngOnInit(){this.cargarGrupos()}cargarGrupos(){this.groupService.getGroups().subscribe(i=>{this.dataSource=new e.by(i)})}desactivar(i,a){v().fire({title:"Esta accion eliminara todos los usuarios que se encuentren asignados a este rol y todas las asignaciones de upms y personal a dichos usuarios. \xbfEsta seguro que desea Desactivar el rol: "+a+"?",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Si",denyButtonText:"No"}).then(c=>{c.isConfirmed?this.groupService.desactiveGroup(Number(i)).subscribe(u=>{1==u.status&&(this.cargarGrupos(),v().fire("Ok!","Rol desactivado","success"))}):c.isDenied&&v().fire("Cambios no guardados","","info")})}verUsuarios(i,a){this.userRolData.rol_id=Number(i),this.dialogService.open(o.Z,{height:"40rem",width:"50rem",data:this.userRolData})}verRoles(i,a){this.roleData.id=Number(i),this.roleData.nombre=a,this.groupService.getGroupsRoles(this.roleData.id).subscribe(c=>{this.roleData.roles=c,this.dialogService.open(s.a,{height:"30rem",width:"50rem",data:this.roleData})})}addUser(i,a){var c=this;return(0,E.Z)(function*(){const{value:u}=yield v().fire({title:"Usuario",input:"number",inputPlaceholder:"9875",confirmButtonText:"Agregar Usuario",showCancelButton:!0,cancelButtonText:"Cancelar",inputLabel:"Ingrese el codigo de usuario"});u&&(c.userRolData.rol_id=Number(i),c.userRolData.codigo_usuario=u,c.userRolData.proyecto=a,console.log(c.userRolData),c.groupService.addUserToGroup(c.userRolData).subscribe(T=>{1==T.status&&v().fire("Ok!",T.message,"success")}))})()}addFile(i,a){var c=this;return(0,E.Z)(function*(){const{value:u}=yield v().fire({html:"<label>El archivo debe tener una lista con los codigo de usuario</label>",title:"Seleccione archivo",input:"file",inputAttributes:{accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}});if(u){c.userDataFile.rol_id=Number(i),c.userDataFile.proyecto=a;const T=new FileReader;T.onload=$=>{const X=M.ij($.target.result,{type:"binary"});c.data=M.P6.sheet_to_json(X.Sheets[X.SheetNames[0]],{header:1}),c.generateJsonUsers()},T.readAsBinaryString(u)}})()}generateJsonUsers(){this.userDataFile.usuarios=[],this.data.forEach(i=>{this.userDataFile.usuarios.push(i[0])}),this.userDataFile.usuarios=this.userDataFile.usuarios.filter(Boolean),this.groupService.assignGroupUsersFile(this.userDataFile).subscribe(i=>{1==i.status&&v().fire("Ok",i.message,"success")})}}F.\u0275fac=function(i){return new(i||F)(t.Y36(P.l),t.Y36(g.uw))},F.\u0275cmp=t.Xpm({type:F,selectors:[["app-group-pages"]],viewQuery:function(i,a){if(1&i&&(t.Gf(D.NW,5),t.Gf(h.YE,5)),2&i){let c;t.iGM(c=t.CRH())&&(a.paginator=c.first),t.iGM(c=t.CRH())&&(a.sort=c.first)}},decls:41,vars:11,consts:[[1,"grid-container"],[1,"frow-container"],[1,"frow","row-start"],[1,"col-sm-1-1","col-sm-6-12","col-md-6-12"],[1,"col-sm-1-1","col-sm-3-12","col-md-3-12"],["appearence","outline",1,"fluid"],["matInput","","placeholder","Ejemplo: Supervisor",3,"keyup"],["input",""],["matSuffix",""],[1,"col-sm-1-1","col-sm-3-12","col-md-3-12",2,"text-align","right"],["mat-flat-button","","color","accent","style","margin-right: 8px;",3,"click",4,"ngxPermissionsOnly"],[1,"mat-elevation-z8"],["mat-table","","matSort","",1,"fluid",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["class","cell-pointer","mat-cell","",4,"matCellDef"],["matColumnDef","nombre"],["matColumnDef","descripcion"],["matColumnDef","jerarquia"],["matColumnDef","proyecto"],["matColumnDef","options"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["class","selected-row","mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-flat-button","","color","accent",2,"margin-right","8px",3,"click"],["mat-header-cell","","mat-sort-header",""],["mat-cell","",1,"cell-pointer"],["mat-header-cell",""],["mat-icon-button","","matTooltip","Editar","matTooltipPosition","right","color","primary","class","iconbutton",3,"click",4,"ngxPermissionsOnly"],["mat-icon-button","","matTooltip","Desactivar","color","warn","class","iconbutton",3,"click",4,"ngxPermissionsOnly"],["mat-icon-button","","matTooltip","Ver usuarios","color","primary","class","iconbutton",3,"click",4,"ngxPermissionsOnly"],["mat-icon-button","","matTooltip","Agregar usuario","color","primary",3,"click",4,"ngxPermissionsOnly"],["mat-icon-button","","matTooltip","Cargar archivo de usuarios","color","primary",3,"click",4,"ngxPermissionsOnly"],["mat-icon-button","","matTooltip","Ver politicas","color","primary","class","iconbutton",3,"click",4,"ngxPermissionsOnly"],["mat-icon-button","","matTooltip","Editar","matTooltipPosition","right","color","primary",1,"iconbutton",3,"click"],["aria-label","Edit"],["mat-icon-button","","matTooltip","Desactivar","color","warn",1,"iconbutton",3,"click"],["aria-label","Delete"],["mat-icon-button","","matTooltip","Ver usuarios","color","primary",1,"iconbutton",3,"click"],["mat-icon-button","","matTooltip","Agregar usuario","color","primary",3,"click"],["mat-icon-button","","matTooltip","Cargar archivo de usuarios","color","primary",3,"click"],["mat-icon-button","","matTooltip","Ver politicas","color","primary",1,"iconbutton",3,"click"],["mat-header-row",""],["mat-row","",1,"selected-row"],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2"),t._uU(5,"Roles"),t.qZA()(),t.TgZ(6,"div",4)(7,"mat-form-field",5)(8,"mat-label"),t._uU(9,"Buscar"),t.qZA(),t.TgZ(10,"input",6,7),t.NdJ("keyup",function(u){return a.applyFilter(u)}),t.qZA(),t.TgZ(12,"mat-icon",8),t._uU(13,"search"),t.qZA()()(),t.TgZ(14,"div",9),t.YNc(15,f,4,0,"button",10),t.qZA()(),t.TgZ(16,"div",11)(17,"table",12),t.ynx(18,13),t.YNc(19,y,2,0,"th",14),t.YNc(20,x,2,1,"td",15),t.BQk(),t.ynx(21,16),t.YNc(22,R,2,0,"th",14),t.YNc(23,V,2,1,"td",15),t.BQk(),t.ynx(24,17),t.YNc(25,tt,2,0,"th",14),t.YNc(26,ot,2,1,"td",15),t.BQk(),t.ynx(27,18),t.YNc(28,et,2,0,"th",14),t.YNc(29,rt,2,1,"td",15),t.BQk(),t.ynx(30,19),t.YNc(31,it,2,0,"th",14),t.YNc(32,nt,2,1,"td",15),t.BQk(),t.ynx(33,20),t.YNc(34,at,1,0,"th",21),t.YNc(35,ft,7,12,"td",15),t.BQk(),t.YNc(36,ht,1,0,"tr",22),t.YNc(37,Tt,1,0,"tr",23),t.YNc(38,Dt,3,1,"tr",24),t.qZA(),t._UZ(39,"br")(40,"mat-paginator",25),t.qZA()()()),2&i&&(t.xp6(7),t.Udp("font-size",12,"px"),t.xp6(1),t.Udp("font-size",14,"px"),t.xp6(7),t.Q6J("ngxPermissionsOnly",t.DdM(9,bt)),t.xp6(2),t.Q6J("dataSource",a.dataSource),t.xp6(19),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(3),t.Q6J("pageSizeOptions",t.DdM(10,Et)))},dependencies:[m.KE,m.hX,m.R9,G.Nt,O.lW,O.RK,e.BZ,e.fO,e.as,e.w1,e.Dz,e.nj,e.ge,e.ev,e.XQ,e.Gk,e.Ee,p.Hw,D.NW,d.gM,h.YE,h.nU,J.gE]});const Ct=[{path:"",component:F},{path:"create",component:U}];class B{}B.\u0275fac=function(i){return new(i||B)},B.\u0275mod=t.oAB({type:B}),B.\u0275inj=t.cJS({imports:[_.Bz.forChild(Ct),_.Bz]});var vt=r(4657);class I{}I.\u0275fac=function(i){return new(i||I)},I.\u0275mod=t.oAB({type:I}),I.\u0275inj=t.cJS({imports:[l.ez,B,vt.M,p.Ps,d.AV,b.UX,S.LD,J.VI.forChild()]})},7559:(Y,Z,r)=>{r.d(Z,{e:()=>P});var _=r(4006),E=r(7274),D=r(3031),h=r(5226),e=r.n(h),s=r(4650),o=r(4476),N=r(8049),v=r(6895),M=r(9549),A=r(4144),b=r(4859);function w(C,g){1&C&&(s.TgZ(0,"mat-error"),s._uU(1,"Nombre de rol es "),s.TgZ(2,"strong"),s._uU(3,"requerido"),s.qZA()())}function t(C,g){1&C&&(s.TgZ(0,"mat-error"),s._uU(1,"Descripcion es "),s.TgZ(2,"strong"),s._uU(3,"requerida"),s.qZA()())}class P{constructor(g,l,m,G,O){this.groupService=g,this.projectService=l,this.dialogRef=m,this.data=G,this.formBuilder=O,this.projects=[],this.jerarquias=D.a.getHierarchys(),this.buildForm()}submit(){}buildForm(){this.editForm=this.formBuilder.group({id:[this.data.id,[_.kI.required]],nombre:[this.data.nombre,[_.kI.required]],descripcion:[this.data.descripcion]})}get Id(){return this.editForm.get("id")}get Nombre(){return this.editForm.get("nombre")}get Descripcion(){return this.editForm.get("descripcion")}get Jerarquia(){return this.editForm.get("jerarquia")}editGroup(){this.editForm.valid&&this.groupService.editGroup(this.editForm.value).subscribe(g=>{1==g.status&&(e().fire("Ok!","Rol editado correctamente","success"),this.dialogRef.close(1))},g=>{console.log(g)})}cancelEdit(){this.dialogRef.close()}}P.\u0275fac=function(g){return new(g||P)(s.Y36(o.l),s.Y36(N.Y),s.Y36(E.so),s.Y36(E.WI),s.Y36(_.qu))},P.\u0275cmp=s.Xpm({type:P,selectors:[["app-edit-group-dialog"]],decls:24,vars:9,consts:[[1,"card"],["mat-dialog-title",""],[1,"card-body"],[3,"formGroup","submit"],[1,"form-group"],["appearance","outline",1,"full-width-input"],["type","text","formControlName","nombre","matInput","","placeholder","Supervisores ENEI","required","",1,"form-control"],[4,"ngIf"],["type","text","formControlName","descripcion","placeholder","Proyecto 2026","matInput","",1,"form-control"],["type","submit","mat-stroked-button","","color","primary",3,"disabled","click"],["type","submit","mat-stroked-button","","color","warn",3,"click"]],template:function(g,l){1&g&&(s.TgZ(0,"div",0)(1,"h3",1),s._uU(2),s.qZA(),s._UZ(3,"br")(4,"br"),s.TgZ(5,"div",2)(6,"form",3),s.NdJ("submit",function(){return l.submit()}),s.TgZ(7,"div",4)(8,"mat-form-field",5)(9,"mat-label"),s._uU(10,"Ingrese el Nombre del rol"),s.qZA(),s._UZ(11,"input",6),s.YNc(12,w,4,0,"mat-error",7),s.qZA()(),s.TgZ(13,"div",4)(14,"mat-form-field",5)(15,"mat-label"),s._uU(16,"Descripcion"),s.qZA(),s._UZ(17,"input",8),s.YNc(18,t,4,0,"mat-error",7),s.qZA()(),s.TgZ(19,"div",4)(20,"button",9),s.NdJ("click",function(){return l.editGroup()}),s._uU(21," Editar Rol "),s.qZA(),s.TgZ(22,"button",10),s.NdJ("click",function(){return l.cancelEdit()}),s._uU(23," Cancelar "),s.qZA()()()()()),2&g&&(s.xp6(2),s.hij("Rol: ",l.data.nombre,""),s.xp6(4),s.Q6J("formGroup",l.editForm),s.xp6(3),s.Udp("font-size",16,"px"),s.xp6(3),s.Q6J("ngIf",(null==l.Nombre?null:l.Nombre.touched)&&(null==l.Nombre?null:l.Nombre.hasError("required"))),s.xp6(3),s.Udp("font-size",16,"px"),s.xp6(3),s.Q6J("ngIf",(null==l.Descripcion?null:l.Descripcion.touched)&&(null==l.Descripcion?null:l.Descripcion.hasError("required"))),s.xp6(2),s.Q6J("disabled",!l.editForm.valid))},dependencies:[v.O5,M.KE,M.hX,M.TO,A.Nt,b.lW,_._Y,_.Fj,_.JJ,_.JL,_.Q7,_.sg,_.u],styles:[".mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.full-width-input[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]{width:50%}.card[_ngcontent-%COMP%]{padding:2rem}"]})},6525:(Y,Z,r)=>{r.d(Z,{a:()=>C});var _=r(4006),E=r(7274),D=r(5226),h=r.n(D),e=r(4650),s=r(5357),o=r(4476),N=r(6895),v=r(9549),M=r(4859),A=r(6338),b=r(4954);function w(g,l){if(1&g){const m=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(){e.CHM(m);const O=e.oxw();return e.KtG(O.editGroup())}),e._uU(1," Guardar "),e.qZA()}if(2&g){const m=e.oxw();e.Q6J("disabled",!m.editForm.valid)}}function t(g,l){if(1&g&&(e.TgZ(0,"mat-list-option",13),e._uU(1),e.qZA()),2&g){const m=l.$implicit;e.Q6J("selected",m.checked)("value",m.id),e.xp6(1),e.hij(" ",m.nombre," ")}}const P=function(){return["asignar-rol-grupo"]};class C{constructor(l,m,G,O,S){this.roleService=l,this.groupService=m,this.dialogRef=G,this.data=O,this.formBuilder=S,this.checked=!1,this.roles=[],this.buildForm(),this.getRoles()}submit(){}buildForm(){this.editForm=this.formBuilder.group({rol_id:[this.data.id,[_.kI.required]],politicas:[[],[_.kI.required]]})}get Roles(){return this.editForm.get("roles")}editGroup(){this.editForm.valid&&this.groupService.editGroupRoles(this.editForm.value).subscribe(l=>{1==l.status&&(h().fire("Ok!","Politicas guardadas correctamente","success"),this.dialogRef.close(1))})}getRoles(){this.roleService.getPolicys().subscribe(l=>{this.roles=l,this.roles.forEach(m=>{m.checked=!1}),this.defaultRoles()})}defaultRoles(){for(let l=0;l<this.roles.length;l++)for(let m=0;m<this.data.roles.length;m++)this.roles[l].nombre==this.data.roles[m].nombre&&(this.roles[l].checked=!0)}cancelEdit(){this.dialogRef.close()}}C.\u0275fac=function(l){return new(l||C)(e.Y36(s.N),e.Y36(o.l),e.Y36(E.so),e.Y36(E.WI),e.Y36(_.qu))},C.\u0275cmp=e.Xpm({type:C,selectors:[["app-group-role-edit-dialog"]],decls:19,vars:6,consts:[[1,"card"],["mat-dialog-title",""],["mat-dialog-subtitle",""],[1,"card-body"],[3,"formGroup","submit"],[1,"form-group"],["type","submit","mat-stroked-button","","color","primary",3,"disabled","click",4,"ngxPermissionsOnly"],["type","submit","mat-stroked-button","","color","warn",3,"click"],[1,"example-section"],["formControlName","politicas"],["rolesList",""],[3,"selected","value",4,"ngFor","ngForOf"],["type","submit","mat-stroked-button","","color","primary",3,"disabled","click"],[3,"selected","value"]],template:function(l,m){1&l&&(e.TgZ(0,"div",0)(1,"h3",1),e._uU(2),e.qZA(),e.TgZ(3,"h6",2),e._uU(4),e.qZA(),e._UZ(5,"br")(6,"br"),e.TgZ(7,"div",3)(8,"form",4),e.NdJ("submit",function(){return m.submit()}),e.TgZ(9,"div",5),e.YNc(10,w,2,1,"button",6),e.TgZ(11,"button",7),e.NdJ("click",function(){return m.cancelEdit()}),e._uU(12," Cancelar "),e.qZA()(),e.TgZ(13,"div",8)(14,"mat-label"),e._uU(15,"Politicas"),e.qZA(),e.TgZ(16,"mat-selection-list",9,10),e.YNc(18,t,2,3,"mat-list-option",11),e.qZA()()()()()),2&l&&(e.xp6(2),e.hij("Rol: ",m.data.nombre,""),e.xp6(2),e.hij("Id: ",m.data.id,""),e.xp6(4),e.Q6J("formGroup",m.editForm),e.xp6(2),e.Q6J("ngxPermissionsOnly",e.DdM(5,P)),e.xp6(8),e.Q6J("ngForOf",m.roles))},dependencies:[N.sg,v.hX,M.lW,A.Ub,A.vS,_._Y,_.JJ,_.JL,_.sg,_.u,b.gE],styles:[".mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.full-width-input[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]{width:50%}.card[_ngcontent-%COMP%]{padding:2rem}"]})},3995:(Y,Z,r)=>{r.d(Z,{Z:()=>U});var _=r(7274),E=r(8739),D=r(6308),h=r(671),e=r(5226),s=r.n(e),o=r(4650),N=r(2511),v=r(4476),M=r(4006),A=r(9549),b=r(4144),w=r(4859),t=r(7392),P=r(266),C=r(4954);function g(p,d){1&p&&(o.TgZ(0,"th",15),o._uU(1,"Codigo de Usuario"),o.qZA())}function l(p,d){if(1&p&&(o.TgZ(0,"td",16),o._uU(1),o.qZA()),2&p){const f=d.$implicit;o.xp6(1),o.Oqu(f.codigo_usuario)}}function m(p,d){1&p&&(o.TgZ(0,"th",15),o._uU(1,"Nombres"),o.qZA())}function G(p,d){if(1&p&&(o.TgZ(0,"td",16),o._uU(1),o.qZA()),2&p){const f=d.$implicit;o.xp6(1),o.Oqu(f.nombres)}}function O(p,d){1&p&&(o.TgZ(0,"th",15),o._uU(1,"Apellidos"),o.qZA())}function S(p,d){if(1&p&&(o.TgZ(0,"td",16),o._uU(1),o.qZA()),2&p){const f=d.$implicit;o.xp6(1),o.Oqu(f.apellidos)}}function Q(p,d){1&p&&(o.TgZ(0,"th",15),o._uU(1,"Acciones"),o.qZA())}function J(p,d){if(1&p){const f=o.EpF();o.TgZ(0,"button",18),o.NdJ("click",function(){o.CHM(f);const x=o.oxw().$implicit,R=o.oxw();return o.KtG(R.eliminarUsuario(x.codigo_usuario,x.nombres,x.apellidos))}),o.TgZ(1,"mat-icon"),o._uU(2,"delete"),o.qZA()()}}const W=function(){return["eliminar-usuario-grupo"]};function L(p,d){1&p&&(o.TgZ(0,"td",16),o.YNc(1,J,3,0,"button",17),o.qZA()),2&p&&(o.xp6(1),o.Q6J("ngxPermissionsOnly",o.DdM(1,W)))}function q(p,d){1&p&&o._UZ(0,"tr",19)}function j(p,d){1&p&&o._UZ(0,"tr",20)}function k(p,d){if(1&p&&(o.TgZ(0,"tr",21)(1,"td",22),o._uU(2),o.qZA()()),2&p){o.oxw();const f=o.MAs(6);o.xp6(2),o.hij(' No hay resultados de "',f.value,'" ')}}const K=function(){return[5,10,25,100]};class U{constructor(d,f,y,x,R){this.userService=d,this.groupService=f,this.dialogRef=y,this.data=x,this.formBuilder=R,this.userData={rol_id:0,nombres:"",apellidos:"",codigo_usuario:0,proyecto:""},this.displayedColumns=["codigo_usuario","nombres","apellidos","options"],this.dataSource=new h.by,this.getUsers()}submit(){}editGroup(){}getUsers(){this.groupService.getGroupsUsers(this.data.rol_id).subscribe(d=>{this.dataSource=new h.by(d),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort})}cancelEdit(){this.dialogRef.close()}applyFilter(d){this.dataSource.filter=d.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}eliminarUsuario(d,f,y){s().fire({title:"Esta accion eliminara todas las asignaciones de personal y upm en la que se encuentre el usuario \xbfEsta seguro que desea eliminar el usuario: "+f+" "+y+" de este grupo?",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Si",denyButtonText:"No"}).then(x=>{x.isConfirmed?(this.userData.rol_id=this.data.rol_id,this.userData.codigo_usuario=Number(d),this.groupService.deleteUserToGroup(this.userData).subscribe(R=>{1==R.status&&(s().fire("Ok",R.message,"success"),this.getUsers())})):x.isDenied&&s().fire("Cambios no guardados","","info")})}}U.\u0275fac=function(d){return new(d||U)(o.Y36(N.UserService),o.Y36(v.l),o.Y36(_.so),o.Y36(_.WI),o.Y36(M.qu))},U.\u0275cmp=o.Xpm({type:U,selectors:[["app-group-user-edit-dialog"]],viewQuery:function(d,f){if(1&d&&(o.Gf(E.NW,5),o.Gf(D.YE,5)),2&d){let y;o.iGM(y=o.CRH())&&(f.paginator=y.first),o.iGM(y=o.CRH())&&(f.sort=y.first)}},decls:25,vars:5,consts:[[1,"find"],["matInput","","placeholder","Ejemplo. juan2022",3,"keyup"],["input",""],[1,"mat-elevation-z8","table"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","codigo_usuario"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nombres"],["matColumnDef","apellidos"],["matColumnDef","options"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of users",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","matTooltip","Eliminar","matTooltipPosition","right","color","warn","class","iconbutton",3,"click",4,"ngxPermissionsOnly"],["mat-icon-button","","matTooltip","Eliminar","matTooltipPosition","right","color","warn",1,"iconbutton",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(d,f){1&d&&(o._UZ(0,"br")(1,"br"),o.TgZ(2,"mat-form-field",0)(3,"mat-label"),o._uU(4,"Buscar"),o.qZA(),o.TgZ(5,"input",1,2),o.NdJ("keyup",function(x){return f.applyFilter(x)}),o.qZA()(),o.TgZ(7,"div",3)(8,"table",4),o.ynx(9,5),o.YNc(10,g,2,0,"th",6),o.YNc(11,l,2,1,"td",7),o.BQk(),o.ynx(12,8),o.YNc(13,m,2,0,"th",6),o.YNc(14,G,2,1,"td",7),o.BQk(),o.ynx(15,9),o.YNc(16,O,2,0,"th",6),o.YNc(17,S,2,1,"td",7),o.BQk(),o.ynx(18,10),o.YNc(19,Q,2,0,"th",6),o.YNc(20,L,2,2,"td",7),o.BQk(),o.YNc(21,q,1,0,"tr",11),o.YNc(22,j,1,0,"tr",12),o.YNc(23,k,3,1,"tr",13),o.qZA(),o._UZ(24,"mat-paginator",14),o.qZA()),2&d&&(o.xp6(8),o.Q6J("dataSource",f.dataSource),o.xp6(13),o.Q6J("matHeaderRowDef",f.displayedColumns),o.xp6(1),o.Q6J("matRowDefColumns",f.displayedColumns),o.xp6(2),o.Q6J("pageSizeOptions",o.DdM(4,K)))},dependencies:[A.KE,A.hX,b.Nt,w.RK,h.BZ,h.fO,h.as,h.w1,h.Dz,h.nj,h.ge,h.ev,h.XQ,h.Gk,h.Ee,t.Hw,E.NW,P.gM,D.YE,C.gE],styles:[".mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;margin:0 3rem;display:flex}.table[_ngcontent-%COMP%]{margin:3rem}"]})},4476:(Y,Z,r)=>{r.d(Z,{l:()=>D});var _=r(4650),E=r(8443);class D{constructor(e){this.apiService=e}getGroups(){return this.apiService.getAll("roles")}create(e){return this.apiService.store("rol",e)}editGroup(e){return this.apiService.patch("rol/edit",e)}desactiveGroup(e){return this.apiService.desactive("rol",e)}getGroupsRoles(e){return this.apiService.getById("obtenerRolPoliticas",e)}editGroupRoles(e){return this.apiService.patch("asignarRolPoliticas",e)}getGroupsUsers(e){return this.apiService.getById("obtenerUsuariosRol",e)}addUserToGroup(e){return this.apiService.store("asignacionUsuarioRol",e)}assignGroupUsersFile(e){return this.apiService.store("asignarUsuariosRol",e)}deleteUserToGroup(e){return this.apiService.patch("eliminarUsuarioRol",e)}getGroupsMinor(e){return this.apiService.store("seleccionarRolesMenores",e)}}D.\u0275fac=function(e){return new(e||D)(_.LFG(E.s))},D.\u0275prov=_.Yz7({token:D,factory:D.\u0275fac,providedIn:"root"})}}]);