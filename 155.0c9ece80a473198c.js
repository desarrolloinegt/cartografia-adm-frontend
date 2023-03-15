"use strict";(self.webpackChunkcartografia_app=self.webpackChunkcartografia_app||[]).push([[155],{3031:(I,D,i)=>{i.d(D,{a:()=>g,q:()=>C});class g{static getHierarchys(){return[1,2,3,4,5,6,7]}}class C{static getArray(){}}C.array=[{id:1,color:"#5DADE2"},{id:2,color:"#F4D03F"},{id:3,color:"#229954"},{id:4,color:"#E74C3C"}]},9155:(I,D,i)=>{i.r(D),i.d(D,{RolModule:()=>B,RolPagesComponent:()=>G,RolRoutingModule:()=>Y,RolService:()=>Z.m});var g=i(9132),C=i(5861),v=i(8739),_=i(6308),e=i(671),s=i(7941),o=i(7293),M=i(5226),R=i.n(M),N=i(574),A=i(3204),T=i(4006),F=i(3031),t=i(4650),Z=i(6704),y=i(8049),h=i(7274),l=i(6895),m=i(9549),P=i(4144),E=i(4859),J=i(4385),q=i(3238),Q=i(4954);function j(a,r){1&a&&(t.TgZ(0,"mat-error"),t._uU(1,"Nombre de rol es "),t.TgZ(2,"strong"),t._uU(3,"requerido"),t.qZA()())}function k(a,r){if(1&a&&(t.TgZ(0,"mat-option",12),t._uU(1),t.qZA()),2&a){const n=r.$implicit;t.Q6J("value",n.id),t.xp6(1),t.Oqu(n.nombre)}}function K(a,r){1&a&&(t.TgZ(0,"mat-error"),t._uU(1,"Proyecto es "),t.TgZ(2,"strong"),t._uU(3,"requerida"),t.qZA()())}function H(a,r){if(1&a){const n=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(n);const c=t.oxw();return t.KtG(c.createGroup())}),t._uU(1," Guardar Rol "),t.qZA()}if(2&a){const n=t.oxw();t.Q6J("disabled",!n.groupForm.valid)}}const W=function(){return["crear-rol"]};class O{constructor(r,n,u,c){this.rolService=r,this.projectService=n,this.formBuilder=u,this.dialogRef=c,this.projects=[],this.jerarquias=F.a.getHierarchys(),this.buildForm(),this.getProjects()}buildForm(){this.groupForm=this.formBuilder.group({nombre:["",T.kI.required],descripcion:[""],proyecto_id:["",[T.kI.required]]})}get Nombre(){return this.groupForm.get("nombre")}get Descripcion(){return this.groupForm.get("descripcion")}get ProyectoId(){return this.groupForm.get("proyecto_id")}get Jerarquia(){return this.groupForm.get("jerarquia")}getProjects(){this.projectService.getProjectView().subscribe(r=>{this.projects=r})}submit(){}createGroup(){this.groupForm.valid&&(console.log(this.groupForm.value),this.rolService.create(this.groupForm.value).subscribe(r=>{1==r.status&&(R().fire("Ok!",r.message,"success"),this.dialogRef.close(1))}))}cancelAdd(){this.dialogRef.close()}}O.\u0275fac=function(r){return new(r||O)(t.Y36(Z.m),t.Y36(y.Y),t.Y36(T.qu),t.Y36(h.so))},O.\u0275cmp=t.Xpm({type:O,selectors:[["app-new-group-pages"]],decls:26,vars:12,consts:[[1,"card"],[1,"card-body"],[3,"formGroup","submit"],[1,"form-group"],["appearance","outline",1,"full-width-input"],["type","text","formControlName","nombre","matInput","","placeholder","Supervisores ENEI","required","",1,"form-control"],[4,"ngIf"],["type","text","formControlName","descripcion","placeholder","Proyecto 2026","matInput","",1,"form-control"],["formControlName","proyecto_id"],[3,"value",4,"ngFor","ngForOf"],["type","submit","mat-raised-button","","color","primary",3,"disabled","click",4,"ngxPermissionsOnly"],["type","submit","mat-stroked-button","","color","warn",3,"click"],[3,"value"],["type","submit","mat-raised-button","","color","primary",3,"disabled","click"]],template:function(r,n){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2),t.NdJ("submit",function(){return n.submit()}),t.TgZ(3,"div",3)(4,"mat-form-field",4)(5,"mat-label"),t._uU(6,"Ingrese el Nombre del Rol"),t.qZA(),t._UZ(7,"input",5),t.YNc(8,j,4,0,"mat-error",6),t.qZA()(),t.TgZ(9,"div",3)(10,"mat-form-field",4)(11,"mat-label"),t._uU(12,"Descripcion"),t.qZA(),t._UZ(13,"input",7),t.qZA()(),t.TgZ(14,"div",3)(15,"mat-form-field",4)(16,"mat-label"),t._uU(17,"Seleccione un proyecto"),t.qZA(),t.TgZ(18,"mat-select",8),t.YNc(19,k,2,2,"mat-option",9),t.qZA(),t.YNc(20,K,4,0,"mat-error",6),t.qZA()(),t.TgZ(21,"div",3),t.YNc(22,H,2,1,"button",10),t._UZ(23,"br"),t.TgZ(24,"button",11),t.NdJ("click",function(){return n.cancelAdd()}),t._uU(25," Cancelar "),t.qZA()()()()()),2&r&&(t.xp6(2),t.Q6J("formGroup",n.groupForm),t.xp6(3),t.Udp("font-size",16,"px"),t.xp6(3),t.Q6J("ngIf",(null==n.Nombre?null:n.Nombre.touched)&&(null==n.Nombre?null:n.Nombre.hasError("required"))),t.xp6(3),t.Udp("font-size",16,"px"),t.xp6(5),t.Udp("font-size",16,"px"),t.xp6(3),t.Q6J("ngForOf",n.projects),t.xp6(1),t.Q6J("ngIf",(null==n.ProyectoId?null:n.ProyectoId.touched)&&(null==n.ProyectoId?null:n.ProyectoId.hasError("required"))),t.xp6(2),t.Q6J("ngxPermissionsOnly",t.DdM(11,W)))},dependencies:[l.sg,l.O5,m.KE,m.hX,m.TO,P.Nt,E.lW,J.gD,q.ey,T._Y,T.Fj,T.JJ,T.JL,T.Q7,T.sg,T.u,Q.gE],styles:[".full-width-input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{width:100%;max-width:98%;margin:0 auto;display:flex}.example-section[_ngcontent-%COMP%]{max-width:98%;margin:0 auto;display:flex}.example-margin[_ngcontent-%COMP%]{margin:0 12px}ul[_ngcontent-%COMP%]{list-style-type:none;margin-top:4px}.card[_ngcontent-%COMP%]{padding:3rem}"]});var S=i(7392),d=i(266);function p(a,r){if(1&a){const n=t.EpF();t.TgZ(0,"button",26),t.NdJ("click",function(){t.CHM(n);const c=t.oxw();return t.KtG(c.open())}),t.TgZ(1,"mat-icon"),t._uU(2,"add"),t.qZA(),t._uU(3," Crear Rol "),t.qZA()}}function f(a,r){1&a&&(t.TgZ(0,"th",27),t._uU(1,"COD"),t.qZA())}function x(a,r){if(1&a&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&a){const n=r.$implicit;t.xp6(1),t.Oqu(n.id)}}function U(a,r){1&a&&(t.TgZ(0,"th",27),t._uU(1,"Nombre"),t.qZA())}function w(a,r){if(1&a&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&a){const n=r.$implicit;t.xp6(1),t.Oqu(n.nombre)}}function V(a,r){1&a&&(t.TgZ(0,"th",27),t._uU(1,"Descripcion"),t.qZA())}function tt(a,r){if(1&a&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&a){const n=r.$implicit;t.xp6(1),t.Oqu(n.descripcion)}}function ot(a,r){1&a&&(t.TgZ(0,"th",27),t._uU(1,"Jerarquia"),t.qZA())}function et(a,r){if(1&a&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&a){const n=r.$implicit;t.xp6(1),t.Oqu(n.jerarquia)}}function it(a,r){1&a&&(t.TgZ(0,"th",27),t._uU(1,"Proyecto"),t.qZA())}function rt(a,r){if(1&a&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&a){const n=r.$implicit;t.xp6(1),t.Oqu(n.proyecto)}}function nt(a,r){1&a&&t._UZ(0,"th",29)}function at(a,r){if(1&a){const n=t.EpF();t.TgZ(0,"button",36),t.NdJ("click",function(){t.CHM(n);const c=t.oxw().$implicit,b=t.oxw();return t.KtG(b.editar(c.id,c.nombre,c.descripcion,c.jerarquia,c.proyecto_id))}),t.TgZ(1,"mat-icon",37),t._uU(2,"edit"),t.qZA()()}}function st(a,r){if(1&a){const n=t.EpF();t.TgZ(0,"button",38),t.NdJ("click",function(){t.CHM(n);const c=t.oxw().$implicit,b=t.oxw();return t.KtG(b.desactivar(c.id,c.nombre))}),t.TgZ(1,"mat-icon",39),t._uU(2,"delete"),t.qZA()()}}function lt(a,r){if(1&a){const n=t.EpF();t.TgZ(0,"button",40),t.NdJ("click",function(){t.CHM(n);const c=t.oxw().$implicit,b=t.oxw();return t.KtG(b.verUsuarios(c.id,c.nombre))}),t.TgZ(1,"mat-icon"),t._uU(2,"supervised_user_circle"),t.qZA()()}}function ct(a,r){if(1&a){const n=t.EpF();t.TgZ(0,"button",41),t.NdJ("click",function(){t.CHM(n);const c=t.oxw().$implicit,b=t.oxw();return t.KtG(b.addUser(c.id,c.proyecto))}),t.TgZ(1,"mat-icon"),t._uU(2,"add"),t.qZA()()}}function ut(a,r){if(1&a){const n=t.EpF();t.TgZ(0,"button",42),t.NdJ("click",function(){t.CHM(n);const c=t.oxw().$implicit,b=t.oxw();return t.KtG(b.addFile(c.id,c.proyecto))}),t.TgZ(1,"mat-icon"),t._uU(2,"arrow_upward"),t.qZA()()}}function mt(a,r){if(1&a){const n=t.EpF();t.TgZ(0,"button",43),t.NdJ("click",function(){t.CHM(n);const c=t.oxw().$implicit,b=t.oxw();return t.KtG(b.verRoles(c.id,c.nombre))}),t.TgZ(1,"mat-icon"),t._uU(2,"list_alt"),t.qZA()()}}const dt=function(){return["editar-rol"]},pt=function(){return["desactivar-rol"]},gt=function(){return["ver-usuario-rol"]},L=function(){return["asignar-usuario-rol"]},ft=function(){return["asignar-rol-politica"]};function ht(a,r){1&a&&(t.TgZ(0,"td",28),t.YNc(1,at,3,0,"button",30),t.YNc(2,st,3,0,"button",31),t.YNc(3,lt,3,0,"button",32),t.YNc(4,ct,3,0,"button",33),t.YNc(5,ut,3,0,"button",34),t.YNc(6,mt,3,0,"button",35),t.qZA()),2&a&&(t.xp6(1),t.Q6J("ngxPermissionsOnly",t.DdM(6,dt)),t.xp6(1),t.Q6J("ngxPermissionsOnly",t.DdM(7,pt)),t.xp6(1),t.Q6J("ngxPermissionsOnly",t.DdM(8,gt)),t.xp6(1),t.Q6J("ngxPermissionsOnly",t.DdM(9,L)),t.xp6(1),t.Q6J("ngxPermissionsOnly",t.DdM(10,L)),t.xp6(1),t.Q6J("ngxPermissionsOnly",t.DdM(11,ft)))}function _t(a,r){1&a&&t._UZ(0,"tr",44)}function bt(a,r){1&a&&t._UZ(0,"tr",45)}function vt(a,r){if(1&a&&(t.TgZ(0,"tr",46)(1,"td",47),t._uU(2),t.qZA()()),2&a){t.oxw();const n=t.MAs(17);t.xp6(2),t.hij(' No hay resultados de "',n.value,'" ')}}const Tt=function(){return["crear-rol"]},Ct=function(){return[5,10,25,100]};class G{constructor(r,n){this.rolService=r,this.dialogService=n,this.data=[],this.displayedColumns=["id","nombre","descripcion","proyecto","options"],this.groupData={id:0,nombre:"",descripcion:"",jerarquia:0,proyecto:"",proyecto_id:0},this.userRolData={nombres:"",rol_id:0,apellidos:"",codigo_usuario:0,proyecto:""},this.roleData={id:0,nombre:"",roles:[]},this.userDataFile={rol_id:0,usuarios:[],proyecto:""},this.dataSource=new e.by}applyFilter(r){this.dataSource.filter=r.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}editar(r,n,u,c,b){this.groupData.id=Number(r),this.groupData.nombre=n,this.groupData.descripcion=u,this.groupData.jerarquia=Number(c),this.groupData.proyecto_id=Number(b),this.dialogService.open(A.w,{height:"20rem",width:"50rem",data:this.groupData}).afterClosed().subscribe(z=>{1===z&&this.cargarGrupos()})}open(){this.dialogService.open(O,{height:"30rem",width:"50rem"}).afterClosed().subscribe(n=>{1==n&&this.cargarGrupos()})}ngOnInit(){this.cargarGrupos()}cargarGrupos(){this.rolService.getGroups().subscribe(r=>{this.dataSource=new e.by(r),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort})}desactivar(r,n){R().fire({title:"Esta accion eliminara todos los usuarios que se encuentren asignados a este rol y todas las asignaciones de upms y personal a dichos usuarios. \xbfEsta seguro que desea Desactivar el rol: "+n+"?",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Si",denyButtonText:"No"}).then(u=>{u.isConfirmed?this.rolService.desactiveGroup(Number(r)).subscribe(c=>{1==c.status&&(this.cargarGrupos(),R().fire("Ok!","Rol desactivado","success"))}):u.isDenied&&R().fire("Cambios no guardados","","info")})}verUsuarios(r,n){this.userRolData.rol_id=Number(r),this.dialogService.open(s.A,{height:"40rem",width:"50rem",data:this.userRolData})}verRoles(r,n){this.roleData.id=Number(r),this.roleData.nombre=n,this.rolService.getGroupsRoles(this.roleData.id).subscribe(u=>{this.roleData.roles=u,this.dialogService.open(o.a,{height:"30rem",width:"50rem",data:this.roleData})})}addUser(r,n){var u=this;return(0,C.Z)(function*(){const{value:c}=yield R().fire({title:"Usuario",input:"number",inputPlaceholder:"9875",confirmButtonText:"Agregar Usuario",showCancelButton:!0,cancelButtonText:"Cancelar",inputLabel:"Ingrese el codigo de usuario"});c&&(u.userRolData.rol_id=Number(r),u.userRolData.codigo_usuario=c,u.userRolData.proyecto=n,console.log(u.userRolData),u.rolService.addUserToGroup(u.userRolData).subscribe(b=>{1==b.status&&R().fire("Ok!",b.message,"success")}))})()}addFile(r,n){var u=this;return(0,C.Z)(function*(){const{value:c}=yield R().fire({html:"<label>El archivo debe tener una lista con los codigo de usuario</label>",title:"Seleccione archivo",input:"file",inputAttributes:{accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}});if(c){u.userDataFile.rol_id=Number(r),u.userDataFile.proyecto=n;const b=new FileReader;b.onload=$=>{const X=N.ij($.target.result,{type:"binary"});u.data=N.P6.sheet_to_json(X.Sheets[X.SheetNames[0]],{header:1}),u.generateJsonUsers()},b.readAsBinaryString(c)}})()}generateJsonUsers(){this.userDataFile.usuarios=[],this.data.forEach(r=>{this.userDataFile.usuarios.push(r[0])}),this.userDataFile.usuarios=this.userDataFile.usuarios.filter(Boolean),this.rolService.assignGroupUsersFile(this.userDataFile).subscribe(r=>{1==r.status&&R().fire("Ok",r.message,"success")})}}G.\u0275fac=function(r){return new(r||G)(t.Y36(Z.m),t.Y36(h.uw))},G.\u0275cmp=t.Xpm({type:G,selectors:[["app-group-pages"]],viewQuery:function(r,n){if(1&r&&(t.Gf(v.NW,5),t.Gf(_.YE,5)),2&r){let u;t.iGM(u=t.CRH())&&(n.paginator=u.first),t.iGM(u=t.CRH())&&(n.sort=u.first)}},decls:45,vars:11,consts:[[1,"grid-container"],[1,"frow-container"],[1,"frow","row-start"],[1,"col-sm-1-1","col-sm-6-12","col-md-6-12"],[1,"col-sm-1-1","col-sm-3-12","col-md-3-12"],[1,"col-sm-1-1","col-sm-3-12","col-md-3-12",2,"text-align","right"],["mat-flat-button","","color","accent","style","margin-right: 8px;",3,"click",4,"ngxPermissionsOnly"],["appearence","outline",1,"fluid"],["matInput","","placeholder","Ejemplo: Supervisores ENEI",3,"keyup"],["input",""],["matSuffix",""],[1,"mat-elevation-z8"],["mat-table","","matSort","",1,"fluid",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["class","cell-pointer","mat-cell","",4,"matCellDef"],["matColumnDef","nombre"],["matColumnDef","descripcion"],["matColumnDef","jerarquia"],["matColumnDef","proyecto"],["matColumnDef","options"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["class","selected-row","mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-flat-button","","color","accent",2,"margin-right","8px",3,"click"],["mat-header-cell","","mat-sort-header",""],["mat-cell","",1,"cell-pointer"],["mat-header-cell",""],["mat-icon-button","","matTooltip","Editar","matTooltipPosition","right","color","primary","class","iconbutton",3,"click",4,"ngxPermissionsOnly"],["mat-icon-button","","matTooltip","Desactivar","color","warn","class","iconbutton",3,"click",4,"ngxPermissionsOnly"],["mat-icon-button","","matTooltip","Ver usuarios","color","primary","class","iconbutton",3,"click",4,"ngxPermissionsOnly"],["mat-icon-button","","matTooltip","Agregar usuario","color","primary",3,"click",4,"ngxPermissionsOnly"],["mat-icon-button","","matTooltip","Cargar archivo de usuarios","color","primary",3,"click",4,"ngxPermissionsOnly"],["mat-icon-button","","matTooltip","Ver politicas","color","primary","class","iconbutton",3,"click",4,"ngxPermissionsOnly"],["mat-icon-button","","matTooltip","Editar","matTooltipPosition","right","color","primary",1,"iconbutton",3,"click"],["aria-label","Edit"],["mat-icon-button","","matTooltip","Desactivar","color","warn",1,"iconbutton",3,"click"],["aria-label","Delete"],["mat-icon-button","","matTooltip","Ver usuarios","color","primary",1,"iconbutton",3,"click"],["mat-icon-button","","matTooltip","Agregar usuario","color","primary",3,"click"],["mat-icon-button","","matTooltip","Cargar archivo de usuarios","color","primary",3,"click"],["mat-icon-button","","matTooltip","Ver politicas","color","primary",1,"iconbutton",3,"click"],["mat-header-row",""],["mat-row","",1,"selected-row"],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(r,n){1&r&&(t._UZ(0,"br"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"h2"),t._uU(6,"Roles"),t.qZA()(),t._UZ(7,"div",4),t.TgZ(8,"div",5),t.YNc(9,p,4,0,"button",6),t.qZA()(),t._UZ(10,"br")(11,"br")(12,"br"),t.TgZ(13,"mat-form-field",7)(14,"mat-label"),t._uU(15,"Buscar"),t.qZA(),t.TgZ(16,"input",8,9),t.NdJ("keyup",function(c){return n.applyFilter(c)}),t.qZA(),t.TgZ(18,"mat-icon",10),t._uU(19,"search"),t.qZA()(),t.TgZ(20,"div",11)(21,"table",12),t.ynx(22,13),t.YNc(23,f,2,0,"th",14),t.YNc(24,x,2,1,"td",15),t.BQk(),t.ynx(25,16),t.YNc(26,U,2,0,"th",14),t.YNc(27,w,2,1,"td",15),t.BQk(),t.ynx(28,17),t.YNc(29,V,2,0,"th",14),t.YNc(30,tt,2,1,"td",15),t.BQk(),t.ynx(31,18),t.YNc(32,ot,2,0,"th",14),t.YNc(33,et,2,1,"td",15),t.BQk(),t.ynx(34,19),t.YNc(35,it,2,0,"th",14),t.YNc(36,rt,2,1,"td",15),t.BQk(),t.ynx(37,20),t.YNc(38,nt,1,0,"th",21),t.YNc(39,ht,7,12,"td",15),t.BQk(),t.YNc(40,_t,1,0,"tr",22),t.YNc(41,bt,1,0,"tr",23),t.YNc(42,vt,3,1,"tr",24),t.qZA(),t._UZ(43,"br")(44,"mat-paginator",25),t.qZA()()()),2&r&&(t.xp6(9),t.Q6J("ngxPermissionsOnly",t.DdM(9,Tt)),t.xp6(4),t.Udp("font-size",12,"px"),t.xp6(1),t.Udp("font-size",14,"px"),t.xp6(7),t.Q6J("dataSource",n.dataSource),t.xp6(19),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(3),t.Q6J("pageSizeOptions",t.DdM(10,Ct)))},dependencies:[m.KE,m.hX,m.R9,P.Nt,E.lW,E.RK,e.BZ,e.fO,e.as,e.w1,e.Dz,e.nj,e.ge,e.ev,e.XQ,e.Gk,e.Ee,S.Hw,v.NW,d.gM,_.YE,_.nU,Q.gE]});const yt=[{path:"",component:G},{path:"create",component:O}];class Y{}Y.\u0275fac=function(r){return new(r||Y)},Y.\u0275mod=t.oAB({type:Y}),Y.\u0275inj=t.cJS({imports:[g.Bz.forChild(yt),g.Bz]});var Rt=i(4657);class B{}B.\u0275fac=function(r){return new(r||B)},B.\u0275mod=t.oAB({type:B}),B.\u0275inj=t.cJS({imports:[Y,l.ez,Rt.M,S.Ps,d.AV,T.UX,J.LD,Q.VI.forChild()]})},3204:(I,D,i)=>{i.d(D,{w:()=>Z});var g=i(4006),C=i(7274),v=i(3031),_=i(5226),e=i.n(_),s=i(4650),o=i(6704),M=i(8049),R=i(6895),N=i(9549),A=i(4144),T=i(4859);function F(y,h){1&y&&(s.TgZ(0,"mat-error"),s._uU(1,"Nombre de rol es "),s.TgZ(2,"strong"),s._uU(3,"requerido"),s.qZA()())}function t(y,h){1&y&&(s.TgZ(0,"mat-error"),s._uU(1,"Descripcion es "),s.TgZ(2,"strong"),s._uU(3,"requerida"),s.qZA()())}class Z{constructor(h,l,m,P,E){this.rolService=h,this.projectService=l,this.dialogRef=m,this.data=P,this.formBuilder=E,this.projects=[],this.jerarquias=v.a.getHierarchys(),this.buildForm()}submit(){}buildForm(){this.editForm=this.formBuilder.group({id:[this.data.id,[g.kI.required]],nombre:[this.data.nombre,[g.kI.required]],descripcion:[this.data.descripcion]})}get Id(){return this.editForm.get("id")}get Nombre(){return this.editForm.get("nombre")}get Descripcion(){return this.editForm.get("descripcion")}get Jerarquia(){return this.editForm.get("jerarquia")}editGroup(){this.editForm.valid&&this.rolService.editGroup(this.editForm.value).subscribe(h=>{1==h.status&&(e().fire("Ok!","Rol editado correctamente","success"),this.dialogRef.close(1))})}cancelEdit(){this.dialogRef.close()}}Z.\u0275fac=function(h){return new(h||Z)(s.Y36(o.m),s.Y36(M.Y),s.Y36(C.so),s.Y36(C.WI),s.Y36(g.qu))},Z.\u0275cmp=s.Xpm({type:Z,selectors:[["app-edit-rol-dialog"]],decls:24,vars:9,consts:[[1,"card"],["mat-dialog-title",""],[1,"card-body"],[3,"formGroup","submit"],[1,"form-group"],["appearance","outline",1,"full-width-input"],["type","text","formControlName","nombre","matInput","","placeholder","Supervisores ENEI","required","",1,"form-control"],[4,"ngIf"],["type","text","formControlName","descripcion","placeholder","Proyecto 2026","matInput","",1,"form-control"],["type","submit","mat-stroked-button","","color","primary",3,"disabled","click"],["type","submit","mat-stroked-button","","color","warn",3,"click"]],template:function(h,l){1&h&&(s.TgZ(0,"div",0)(1,"h3",1),s._uU(2),s.qZA(),s._UZ(3,"br")(4,"br"),s.TgZ(5,"div",2)(6,"form",3),s.NdJ("submit",function(){return l.submit()}),s.TgZ(7,"div",4)(8,"mat-form-field",5)(9,"mat-label"),s._uU(10,"Ingrese el Nombre del rol"),s.qZA(),s._UZ(11,"input",6),s.YNc(12,F,4,0,"mat-error",7),s.qZA()(),s.TgZ(13,"div",4)(14,"mat-form-field",5)(15,"mat-label"),s._uU(16,"Descripcion"),s.qZA(),s._UZ(17,"input",8),s.YNc(18,t,4,0,"mat-error",7),s.qZA()(),s.TgZ(19,"div",4)(20,"button",9),s.NdJ("click",function(){return l.editGroup()}),s._uU(21," Editar Rol "),s.qZA(),s.TgZ(22,"button",10),s.NdJ("click",function(){return l.cancelEdit()}),s._uU(23," Cancelar "),s.qZA()()()()()),2&h&&(s.xp6(2),s.hij("Rol: ",l.data.nombre,""),s.xp6(4),s.Q6J("formGroup",l.editForm),s.xp6(3),s.Udp("font-size",16,"px"),s.xp6(3),s.Q6J("ngIf",(null==l.Nombre?null:l.Nombre.touched)&&(null==l.Nombre?null:l.Nombre.hasError("required"))),s.xp6(3),s.Udp("font-size",16,"px"),s.xp6(3),s.Q6J("ngIf",(null==l.Descripcion?null:l.Descripcion.touched)&&(null==l.Descripcion?null:l.Descripcion.hasError("required"))),s.xp6(2),s.Q6J("disabled",!l.editForm.valid))},dependencies:[R.O5,N.KE,N.hX,N.TO,A.Nt,T.lW,g._Y,g.Fj,g.JJ,g.JL,g.Q7,g.sg,g.u],styles:[".mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.full-width-input[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]{width:50%}.card[_ngcontent-%COMP%]{padding:2rem}"]})},7293:(I,D,i)=>{i.d(D,{a:()=>y});var g=i(4006),C=i(7274),v=i(5226),_=i.n(v),e=i(4650),s=i(5746),o=i(6704),M=i(6895),R=i(9549),N=i(4859),A=i(6338),T=i(4954);function F(h,l){if(1&h){const m=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(){e.CHM(m);const E=e.oxw();return e.KtG(E.editGroup())}),e._uU(1," Guardar "),e.qZA()}if(2&h){const m=e.oxw();e.Q6J("disabled",!m.editForm.valid)}}function t(h,l){if(1&h&&(e.TgZ(0,"mat-list-option",13),e._uU(1),e.qZA()),2&h){const m=l.$implicit;e.Q6J("selected",m.checked)("value",m.id),e.xp6(1),e.hij(" ",m.nombre," ")}}const Z=function(){return["asignar-rol-politica","asignar-rol-politica-proyecto"]};class y{constructor(l,m,P,E,J){this.policyService=l,this.rolService=m,this.dialogRef=P,this.data=E,this.formBuilder=J,this.checked=!1,this.roles=[],this.buildForm(),this.getRoles()}submit(){}buildForm(){this.editForm=this.formBuilder.group({rol_id:[this.data.id,[g.kI.required]],politicas:[[],[g.kI.required]]})}get Roles(){return this.editForm.get("roles")}editGroup(){this.editForm.valid&&this.rolService.editGroupRoles(this.editForm.value).subscribe(l=>{1==l.status&&(_().fire("Ok!","Politicas guardadas correctamente","success"),this.dialogRef.close(1))})}getRoles(){this.policyService.getPolicysProject().subscribe(l=>{this.roles=l,this.roles.forEach(m=>{m.checked=!1}),this.defaultRoles()})}defaultRoles(){for(let l=0;l<this.roles.length;l++)for(let m=0;m<this.data.roles.length;m++)this.roles[l].nombre==this.data.roles[m].nombre&&(this.roles[l].checked=!0)}cancelEdit(){this.dialogRef.close()}}y.\u0275fac=function(l){return new(l||y)(e.Y36(s.d),e.Y36(o.m),e.Y36(C.so),e.Y36(C.WI),e.Y36(g.qu))},y.\u0275cmp=e.Xpm({type:y,selectors:[["app-group-role-edit-dialog"]],decls:19,vars:6,consts:[[1,"card"],["mat-dialog-title",""],["mat-dialog-subtitle",""],[1,"card-body"],[3,"formGroup","submit"],[1,"form-group"],["type","submit","mat-stroked-button","","color","primary",3,"disabled","click",4,"ngxPermissionsOnly"],["type","submit","mat-stroked-button","","color","warn",3,"click"],[1,"example-section"],["formControlName","politicas"],["rolesList",""],[3,"selected","value",4,"ngFor","ngForOf"],["type","submit","mat-stroked-button","","color","primary",3,"disabled","click"],[3,"selected","value"]],template:function(l,m){1&l&&(e.TgZ(0,"div",0)(1,"h3",1),e._uU(2),e.qZA(),e.TgZ(3,"h6",2),e._uU(4),e.qZA(),e._UZ(5,"br")(6,"br"),e.TgZ(7,"div",3)(8,"form",4),e.NdJ("submit",function(){return m.submit()}),e.TgZ(9,"div",5),e.YNc(10,F,2,1,"button",6),e.TgZ(11,"button",7),e.NdJ("click",function(){return m.cancelEdit()}),e._uU(12," Cancelar "),e.qZA()(),e.TgZ(13,"div",8)(14,"mat-label"),e._uU(15,"Politicas"),e.qZA(),e.TgZ(16,"mat-selection-list",9,10),e.YNc(18,t,2,3,"mat-list-option",11),e.qZA()()()()()),2&l&&(e.xp6(2),e.hij("Rol: ",m.data.nombre,""),e.xp6(2),e.hij("Id: ",m.data.id,""),e.xp6(4),e.Q6J("formGroup",m.editForm),e.xp6(2),e.Q6J("ngxPermissionsOnly",e.DdM(5,Z)),e.xp6(8),e.Q6J("ngForOf",m.roles))},dependencies:[M.sg,R.hX,N.lW,A.Ub,A.vS,g._Y,g.JJ,g.JL,g.sg,g.u,T.gE],styles:[".mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.full-width-input[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]{width:50%}.card[_ngcontent-%COMP%]{padding:2rem}"]})},7941:(I,D,i)=>{i.d(D,{A:()=>S});var g=i(7274),C=i(8739),v=i(6308),_=i(671),e=i(5226),s=i.n(e),o=i(4650),M=i(6122),R=i(6704),N=i(4006),A=i(9549),T=i(4144),F=i(4859),t=i(7392),Z=i(266),y=i(4954);function h(d,p){1&d&&(o.TgZ(0,"th",15),o._uU(1,"Codigo de Usuario"),o.qZA())}function l(d,p){if(1&d&&(o.TgZ(0,"td",16),o._uU(1),o.qZA()),2&d){const f=p.$implicit;o.xp6(1),o.Oqu(f.codigo_usuario)}}function m(d,p){1&d&&(o.TgZ(0,"th",15),o._uU(1,"Nombres"),o.qZA())}function P(d,p){if(1&d&&(o.TgZ(0,"td",16),o._uU(1),o.qZA()),2&d){const f=p.$implicit;o.xp6(1),o.Oqu(f.nombres)}}function E(d,p){1&d&&(o.TgZ(0,"th",15),o._uU(1,"Apellidos"),o.qZA())}function J(d,p){if(1&d&&(o.TgZ(0,"td",16),o._uU(1),o.qZA()),2&d){const f=p.$implicit;o.xp6(1),o.Oqu(f.apellidos)}}function q(d,p){1&d&&(o.TgZ(0,"th",15),o._uU(1,"Acciones"),o.qZA())}function Q(d,p){if(1&d){const f=o.EpF();o.TgZ(0,"button",18),o.NdJ("click",function(){o.CHM(f);const U=o.oxw().$implicit,w=o.oxw();return o.KtG(w.eliminarUsuario(U.codigo_usuario,U.nombres,U.apellidos))}),o.TgZ(1,"mat-icon"),o._uU(2,"delete"),o.qZA()()}}const j=function(){return["eliminar-usuario-rol"]};function k(d,p){1&d&&(o.TgZ(0,"td",16),o.YNc(1,Q,3,0,"button",17),o.qZA()),2&d&&(o.xp6(1),o.Q6J("ngxPermissionsOnly",o.DdM(1,j)))}function K(d,p){1&d&&o._UZ(0,"tr",19)}function H(d,p){1&d&&o._UZ(0,"tr",20)}function W(d,p){if(1&d&&(o.TgZ(0,"tr",21)(1,"td",22),o._uU(2),o.qZA()()),2&d){o.oxw();const f=o.MAs(6);o.xp6(2),o.hij(' No hay resultados de "',f.value,'" ')}}const O=function(){return[5,10,25,100]};class S{constructor(p,f,x,U,w){this.userService=p,this.rolService=f,this.dialogRef=x,this.data=U,this.formBuilder=w,this.userData={rol_id:0,nombres:"",apellidos:"",codigo_usuario:0,proyecto:""},this.displayedColumns=["codigo_usuario","nombres","apellidos","options"],this.dataSource=new _.by,this.getUsers()}submit(){}editGroup(){}getUsers(){this.rolService.getGroupsUsers(this.data.rol_id).subscribe(p=>{this.dataSource=new _.by(p),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort})}cancelEdit(){this.dialogRef.close()}applyFilter(p){this.dataSource.filter=p.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}eliminarUsuario(p,f,x){s().fire({title:"Esta accion eliminara todas las asignaciones de personal y upm en la que se encuentre el usuario \xbfEsta seguro que desea eliminar el usuario: "+f+" "+x+" de este grupo?",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Si",denyButtonText:"No"}).then(U=>{U.isConfirmed?(this.userData.rol_id=this.data.rol_id,this.userData.codigo_usuario=Number(p),this.rolService.deleteUserToGroup(this.userData).subscribe(w=>{1==w.status&&(s().fire("Ok",w.message,"success"),this.getUsers())})):U.isDenied&&s().fire("Cambios no guardados","","info")})}}S.\u0275fac=function(p){return new(p||S)(o.Y36(M.UserService),o.Y36(R.m),o.Y36(g.so),o.Y36(g.WI),o.Y36(N.qu))},S.\u0275cmp=o.Xpm({type:S,selectors:[["app-rol-user-edit-dialog"]],viewQuery:function(p,f){if(1&p&&(o.Gf(C.NW,5),o.Gf(v.YE,5)),2&p){let x;o.iGM(x=o.CRH())&&(f.paginator=x.first),o.iGM(x=o.CRH())&&(f.sort=x.first)}},decls:25,vars:5,consts:[[1,"find"],["matInput","","placeholder","Ejemplo. juan2022",3,"keyup"],["input",""],[1,"mat-elevation-z8","table"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","codigo_usuario"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nombres"],["matColumnDef","apellidos"],["matColumnDef","options"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of users",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","matTooltip","Eliminar","matTooltipPosition","right","color","warn","class","iconbutton",3,"click",4,"ngxPermissionsOnly"],["mat-icon-button","","matTooltip","Eliminar","matTooltipPosition","right","color","warn",1,"iconbutton",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(p,f){1&p&&(o._UZ(0,"br")(1,"br"),o.TgZ(2,"mat-form-field",0)(3,"mat-label"),o._uU(4,"Buscar"),o.qZA(),o.TgZ(5,"input",1,2),o.NdJ("keyup",function(U){return f.applyFilter(U)}),o.qZA()(),o.TgZ(7,"div",3)(8,"table",4),o.ynx(9,5),o.YNc(10,h,2,0,"th",6),o.YNc(11,l,2,1,"td",7),o.BQk(),o.ynx(12,8),o.YNc(13,m,2,0,"th",6),o.YNc(14,P,2,1,"td",7),o.BQk(),o.ynx(15,9),o.YNc(16,E,2,0,"th",6),o.YNc(17,J,2,1,"td",7),o.BQk(),o.ynx(18,10),o.YNc(19,q,2,0,"th",6),o.YNc(20,k,2,2,"td",7),o.BQk(),o.YNc(21,K,1,0,"tr",11),o.YNc(22,H,1,0,"tr",12),o.YNc(23,W,3,1,"tr",13),o.qZA(),o._UZ(24,"mat-paginator",14),o.qZA()),2&p&&(o.xp6(8),o.Q6J("dataSource",f.dataSource),o.xp6(13),o.Q6J("matHeaderRowDef",f.displayedColumns),o.xp6(1),o.Q6J("matRowDefColumns",f.displayedColumns),o.xp6(2),o.Q6J("pageSizeOptions",o.DdM(4,O)))},dependencies:[A.KE,A.hX,T.Nt,F.RK,_.BZ,_.fO,_.as,_.w1,_.Dz,_.nj,_.ge,_.ev,_.XQ,_.Gk,_.Ee,t.Hw,C.NW,Z.gM,v.YE,y.gE],styles:[".mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;margin:0 3rem;display:flex}.table[_ngcontent-%COMP%]{margin:3rem}"]})},6704:(I,D,i)=>{i.d(D,{m:()=>v});var g=i(4650),C=i(8443);class v{constructor(e){this.apiService=e}getGroups(){return this.apiService.getAll("roles")}create(e){return this.apiService.store("rol",e)}editGroup(e){return this.apiService.patch("rol/edit",e)}desactiveGroup(e){return this.apiService.desactive("rol",e)}getGroupsRoles(e){return this.apiService.getById("obtenerRolPoliticas",e)}editGroupRoles(e){return this.apiService.patch("asignarRolPoliticas",e)}getGroupsUsers(e){return this.apiService.getById("obtenerUsuariosRol",e)}addUserToGroup(e){return this.apiService.store("asignacionUsuarioRol",e)}assignGroupUsersFile(e){return this.apiService.store("asignarUsuariosRol",e)}deleteUserToGroup(e){return this.apiService.patch("eliminarUsuarioRol",e)}getGroupsMinor(e){return this.apiService.store("seleccionarRolesMenores",e)}}v.\u0275fac=function(e){return new(e||v)(g.LFG(C.s))},v.\u0275prov=g.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"})}}]);