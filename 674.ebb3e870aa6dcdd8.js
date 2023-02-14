"use strict";(self.webpackChunkcartografia_app=self.webpackChunkcartografia_app||[]).push([[674],{4674:(J,Z,l)=>{l.r(Z),l.d(Z,{RolesModule:()=>_,RolesPageComponent:()=>f,RolesRoutingModule:()=>d});var h=l(8739),b=l(6308),a=l(7155),y=l(5226),c=l.n(y),s=l(4006),t=l(4650),x=l(5357),p=l(7274),g=l(6895),m=l(9549),w=l(4144),P=l(4859),N=l(6338),v=l(4954);function O(i,o){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Nombre de politica es "),t.TgZ(2,"strong"),t._uU(3,"requerido"),t.qZA()())}function D(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.createRol())}),t._uU(1," Guardar Politica "),t.qZA()}if(2&i){const e=t.oxw();t.Q6J("disabled",!e.rolForm.valid)}}function U(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.cancelAdd())}),t._uU(1," Cancelar "),t.qZA()}}function M(i,o){if(1&i&&(t.TgZ(0,"mat-list-option",15),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.alias," ")}}const E=function(){return["crear-rol"]};class R{constructor(o,e,r){this.roleService=o,this.formBuilder=e,this.dialogRef=r,this.permisos=[],this.idRol=0,this.rol={nombre:"",id:0,checked:!1},this.asignacionPermisoRol={id:0,permisos:[]},this.cargarPermisos(),this.buildForm()}cargarPermisos(){this.roleService.getPermisions().subscribe(o=>{this.permisos=o})}buildForm(){this.rolForm=this.formBuilder.group({nombre:["",s.kI.required],permisos:["",[s.kI.required]]})}get Nombre(){return this.rolForm.get("nombre")}get Permisos(){return this.rolForm.get("permisos")}submit(){}createRol(){this.asignacionPermisoRol.permisos=this.selectedPermision,this.rol.nombre=this.Nombre?.value,this.roleService.createRol(this.rol).subscribe(o=>{1==o.status&&(this.asignacionPermisoRol.id=o.id_rol,this.roleService.assignPermisoToRol(this.asignacionPermisoRol).subscribe(e=>{1==e.status&&(c().fire("Ok!","Politica creada correctamente","success"),this.dialogRef.close(1))},e=>{console.log(e)}))})}cancelAdd(){this.dialogRef.close()}permisoSelected(o){this.selectedPermision=o.map(e=>e.value)}}function S(i,o){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Nombre es "),t.TgZ(2,"strong"),t._uU(3,"requerido"),t.qZA()())}function Y(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.editRole())}),t._uU(1," Editar Politica "),t.qZA()}if(2&i){const e=t.oxw();t.Q6J("disabled",!e.editForm.valid)}}R.\u0275fac=function(o){return new(o||R)(t.Y36(x.N),t.Y36(s.qu),t.Y36(p.so))},R.\u0275cmp=t.Xpm({type:R,selectors:[["app-new-role-page"]],decls:21,vars:9,consts:[[1,"card"],[1,"card-body"],[3,"formGroup","submit"],[1,"form-group"],["appearance","outline",1,"full-width-input"],["type","text","formControlName","nombre","matInput","","placeholder","Supervisor","required","",1,"form-control"],[4,"ngIf"],["type","submit","mat-raised-button","","color","primary",3,"disabled","click",4,"ngxPermissionsOnly"],["type","submit","mat-stroked-button","","color","warn",3,"click",4,"ngxPermissionsOnly"],[1,"example-section"],["formControlName","permisos",3,"selectionChange"],["permisosList",""],[3,"value",4,"ngFor","ngForOf"],["type","submit","mat-raised-button","","color","primary",3,"disabled","click"],["type","submit","mat-stroked-button","","color","warn",3,"click"],[3,"value"]],template:function(o,e){if(1&o){const r=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"form",2),t.NdJ("submit",function(){return e.submit()}),t.TgZ(3,"div",3)(4,"mat-form-field",4)(5,"mat-label"),t._uU(6,"Ingrese Nombre de la politica"),t.qZA(),t._UZ(7,"input",5),t.YNc(8,O,4,0,"mat-error",6),t.qZA()(),t.TgZ(9,"div",3),t.YNc(10,D,2,1,"button",7),t._UZ(11,"br"),t.YNc(12,U,2,0,"button",8),t.qZA(),t._UZ(13,"br")(14,"br"),t.TgZ(15,"div",9)(16,"mat-label"),t._uU(17,"Permisos"),t.qZA(),t.TgZ(18,"mat-selection-list",10,11),t.NdJ("selectionChange",function(){t.CHM(r);const u=t.MAs(19);return t.KtG(e.permisoSelected(u.selectedOptions.selected))}),t.YNc(20,M,2,2,"mat-list-option",12),t.qZA()()()()()}2&o&&(t.xp6(2),t.Q6J("formGroup",e.rolForm),t.xp6(3),t.Udp("font-size",16,"px"),t.xp6(3),t.Q6J("ngIf",(null==e.Nombre?null:e.Nombre.touched)&&(null==e.Nombre?null:e.Nombre.hasError("required"))),t.xp6(2),t.Q6J("ngxPermissionsOnly",t.DdM(7,E)),t.xp6(2),t.Q6J("ngxPermissionsOnly",t.DdM(8,E)),t.xp6(8),t.Q6J("ngForOf",e.permisos))},dependencies:[g.sg,g.O5,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.sg,s.u,m.KE,m.hX,m.TO,w.Nt,P.lW,N.Ub,N.vS,v.gE],styles:[".full-width-input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{width:100%;max-width:95%;margin:0 auto;display:flex}.example-section[_ngcontent-%COMP%]{max-width:95%;margin:0 auto;display:flex}.example-margin[_ngcontent-%COMP%]{margin:0 12px}ul[_ngcontent-%COMP%]{list-style-type:none;margin-top:4px}.card[_ngcontent-%COMP%]{padding:2rem}"]});const q=function(){return["editar-rol"]};class C{constructor(o,e,r,n){this.roleService=o,this.dialogRef=e,this.data=r,this.formBuilder=n,this.buildForm()}submit(){}buildForm(){this.editForm=this.formBuilder.group({id:[this.data.id,[s.kI.required]],nombre:[this.data.nombre,[s.kI.required]]})}get Id(){return this.editForm.get("id")}get Nombre(){return this.editForm.get("nombre")}editRole(){this.editForm.valid&&(console.log(this.editForm.value),this.roleService.editRole(this.editForm.value).subscribe(o=>{1==o.status&&(c().fire("Ok!","Politica actualizada","success"),this.dialogRef.close(1))},o=>{console.log(o)}))}cancelEdit(){this.dialogRef.close()}}function Q(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.editRole())}),t._uU(1," Guardar "),t.qZA()}if(2&i){const e=t.oxw();t.Q6J("disabled",!e.editForm.valid)}}function I(i,o){if(1&i&&(t.TgZ(0,"mat-list-option",13),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.Q6J("selected",e.checked)("value",e.id),t.xp6(1),t.hij(" ",e.alias," ")}}C.\u0275fac=function(o){return new(o||C)(t.Y36(x.N),t.Y36(p.so),t.Y36(p.WI),t.Y36(s.qu))},C.\u0275cmp=t.Xpm({type:C,selectors:[["app-roles-edit-dialog"]],decls:17,vars:5,consts:[[1,"card"],["mat-dialog-title",""],[1,"card-body"],[3,"formGroup","submit"],[1,"form-group"],["appearance","outline",1,"full-width-input"],["type","text","formControlName","nombre","matInput","","placeholder","Supervisor","required","",1,"form-control"],[4,"ngIf"],["type","submit","mat-stroked-button","","color","primary",3,"disabled","click",4,"ngxPermissionsOnly"],["type","submit","mat-stroked-button","","color","warn",3,"click"],["type","submit","mat-stroked-button","","color","primary",3,"disabled","click"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"h3",1),t._uU(2),t.qZA(),t._UZ(3,"br")(4,"br"),t.TgZ(5,"div",2)(6,"form",3),t.NdJ("submit",function(){return e.submit()}),t.TgZ(7,"div",4)(8,"mat-form-field",5)(9,"mat-label"),t._uU(10,"Nombre de la politica"),t.qZA(),t._UZ(11,"input",6),t.YNc(12,S,4,0,"mat-error",7),t.qZA()(),t.TgZ(13,"div",4),t.YNc(14,Y,2,1,"button",8),t.TgZ(15,"button",9),t.NdJ("click",function(){return e.cancelEdit()}),t._uU(16," Cancelar "),t.qZA()()()()()),2&o&&(t.xp6(2),t.hij("Politica: ",e.data.nombre,""),t.xp6(4),t.Q6J("formGroup",e.editForm),t.xp6(6),t.Q6J("ngIf",(null==e.Nombre?null:e.Nombre.touched)&&(null==e.Nombre?null:e.Nombre.hasError("required"))),t.xp6(2),t.Q6J("ngxPermissionsOnly",t.DdM(4,q)))},dependencies:[g.O5,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.sg,s.u,m.KE,m.hX,m.TO,w.Nt,P.lW,v.gE],styles:[".mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.full-width-input[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]{width:50%}.card[_ngcontent-%COMP%]{padding:2rem}"]});const B=function(){return["asignar-rol-grupo"]};class T{constructor(o,e,r,n){this.roleService=o,this.dialogRef=e,this.data=r,this.formBuilder=n,this.permisosList=[],this.buildForm(),this.getPermisos()}buildForm(){this.editForm=this.formBuilder.group({id:[this.data.id,[s.kI.required]],permisos:[[],[s.kI.required]]})}get Permisos(){return this.editForm.get("permisos")}getPermisos(){this.roleService.getPermisions().subscribe(o=>{this.permisosList=o,this.permisosList.forEach(e=>{e.checked=!1}),this.defaultPermision()})}defaultPermision(){for(let o=0;o<this.permisosList.length;o++)for(let e=0;e<this.data.permisos.length;e++)this.permisosList[o].alias==this.data.permisos[e].alias&&(this.permisosList[o].checked=!0)}submit(){}editRole(){this.editForm.valid&&this.roleService.assignPermisoToRol(this.editForm.value).subscribe(o=>{1==o.status&&(this.dialogRef.close(1),c().fire("Ok!","Permisos actualizados","success"))})}cancelEdit(){this.dialogRef.close()}}T.\u0275fac=function(o){return new(o||T)(t.Y36(x.N),t.Y36(p.so),t.Y36(p.WI),t.Y36(s.qu))},T.\u0275cmp=t.Xpm({type:T,selectors:[["app-roles-permission-edit-dialog"]],decls:19,vars:6,consts:[[1,"card"],["mat-dialog-title",""],["mat-dialog-subtitle",""],[1,"card-body"],[3,"formGroup","submit"],[1,"form-group"],["type","submit","mat-stroked-button","","color","primary",3,"disabled","click",4,"ngxPermissionsOnly"],["type","submit","mat-stroked-button","","color","warn",3,"click"],[1,"example-section"],["formControlName","permisos"],["permisosLis",""],[3,"selected","value",4,"ngFor","ngForOf"],["type","submit","mat-stroked-button","","color","primary",3,"disabled","click"],[3,"selected","value"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"h3",1),t._uU(2),t.qZA(),t.TgZ(3,"h6",2),t._uU(4),t.qZA(),t._UZ(5,"br")(6,"br"),t.TgZ(7,"div",3)(8,"form",4),t.NdJ("submit",function(){return e.submit()}),t.TgZ(9,"div",5),t.YNc(10,Q,2,1,"button",6),t.TgZ(11,"button",7),t.NdJ("click",function(){return e.cancelEdit()}),t._uU(12," Cancelar "),t.qZA()(),t.TgZ(13,"div",8)(14,"mat-label"),t._uU(15,"Permisos"),t.qZA(),t.TgZ(16,"mat-selection-list",9,10),t.YNc(18,I,2,3,"mat-list-option",11),t.qZA()()()()()),2&o&&(t.xp6(2),t.hij("Grupo: ",e.data.nombre,""),t.xp6(2),t.hij("Id: ",e.data.id,""),t.xp6(4),t.Q6J("formGroup",e.editForm),t.xp6(2),t.Q6J("ngxPermissionsOnly",t.DdM(5,B)),t.xp6(8),t.Q6J("ngForOf",e.permisosList))},dependencies:[g.sg,s._Y,s.JJ,s.JL,s.sg,s.u,m.hX,P.lW,N.Ub,N.vS,v.gE],styles:[".mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.full-width-input[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]{width:50%}.card[_ngcontent-%COMP%]{padding:2rem}"]});var G=l(7392),A=l(266);function L(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"button",23),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.open())}),t._uU(1," Agregar "),t.qZA()}}function H(i,o){1&i&&(t.TgZ(0,"th",24),t._uU(1,"ID"),t.qZA())}function j(i,o){if(1&i&&(t.TgZ(0,"td",25),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.hij(" ",e.id," ")}}function z(i,o){1&i&&(t.TgZ(0,"th",24),t._uU(1,"Nombre"),t.qZA())}function K(i,o){if(1&i&&(t.TgZ(0,"td",25),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.hij(" ",e.nombre," ")}}function W(i,o){1&i&&t._UZ(0,"th",26)}function X(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"button",31),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2).$implicit,u=t.oxw();return t.KtG(u.editar(n.id,n.nombre))}),t.TgZ(1,"mat-icon",32),t._uU(2,"edit"),t.qZA()()}}function $(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"button",33),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2).$implicit,u=t.oxw();return t.KtG(u.desactivar(n.id,n.nombre))}),t.TgZ(1,"mat-icon",34),t._uU(2,"delete"),t.qZA()()}}function V(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"button",35),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2).$implicit,u=t.oxw();return t.KtG(u.verPermisos(n.id,n.nombre))}),t.TgZ(1,"mat-icon"),t._uU(2,"list_alt"),t.qZA()()}}const F=function(){return["editar-rol"]},tt=function(){return["desactivar-rol"]};function et(i,o){1&i&&(t.TgZ(0,"div"),t.YNc(1,X,3,0,"button",28),t.YNc(2,$,3,0,"button",29),t.YNc(3,V,3,0,"button",30),t.qZA()),2&i&&(t.xp6(1),t.Q6J("ngxPermissionsOnly",t.DdM(3,F)),t.xp6(1),t.Q6J("ngxPermissionsOnly",t.DdM(4,tt)),t.xp6(1),t.Q6J("ngxPermissionsOnly",t.DdM(5,F)))}function ot(i,o){if(1&i&&(t.TgZ(0,"td",25),t.YNc(1,et,4,6,"div",27),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.Q6J("ngIf","Administrador"!=e.nombre&&1!=e.id)}}function it(i,o){1&i&&t._UZ(0,"tr",36)}function rt(i,o){1&i&&t._UZ(0,"tr",37)}function nt(i,o){if(1&i&&(t.TgZ(0,"tr",38)(1,"td",39),t._uU(2),t.qZA()()),2&i){t.oxw();const e=t.MAs(11);t.xp6(2),t.hij('No hay resultados de "',e.value,'"')}}const st=function(){return["crear-rol"]},lt=function(){return[5,10,25,100]};class f{constructor(o,e,r){this.roleService=o,this.formBuilder=e,this.dialogService=r,this.rolesPermisos={id:0,nombre:"",permisos:[]},this.rolEdit={nombre:"",id:0,checked:!1},this.displayedColumns=["id","nombre","options"],this.dataSource=new a.by}applyFilter(o){this.dataSource.filter=o.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}editar(o,e){this.rolEdit.id=Number(o),this.rolEdit.nombre=e,this.dialogService.open(C,{height:"15rem",width:"60rem",data:this.rolEdit}).afterClosed().subscribe(n=>{1===n&&this.cargarRoles()})}ngOnInit(){this.cargarRoles()}open(){this.dialogService.open(R,{height:"50rem",width:"60rem"}).afterClosed().subscribe(e=>{1==e&&this.cargarRoles()})}cargarRoles(){this.roleService.getRoles().subscribe(o=>{this.dataSource=new a.by(o)})}desactivar(o,e){c().fire({title:"\xbfEsta seguro que desea Desactivar la politica: "+e+"?",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Si",denyButtonText:"No"}).then(r=>{r.isConfirmed?this.roleService.desactiveRole(Number(o)).subscribe(n=>{1==n.status&&(this.cargarRoles(),c().fire("Ok!","Rol Desactivado","success"))},n=>{console.log(n)}):r.isDenied&&c().fire("Cambios no guardados","","info")})}verPermisos(o,e){this.rolesPermisos.id=Number(o),this.rolesPermisos.nombre=e,this.roleService.getRolesPermisos(this.rolesPermisos.id).subscribe(r=>{this.rolesPermisos.permisos=r,this.dialogService.open(T,{height:"50rem",width:"60rem",data:this.rolesPermisos})})}}f.\u0275fac=function(o){return new(o||f)(t.Y36(x.N),t.Y36(s.qu),t.Y36(p.uw))},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-roles-page"]],viewQuery:function(o,e){if(1&o&&(t.Gf(h.NW,5),t.Gf(b.YE,5)),2&o){let r;t.iGM(r=t.CRH())&&(e.paginator=r.first),t.iGM(r=t.CRH())&&(e.sort=r.first)}},decls:32,vars:11,consts:[[1,"grid-container"],[1,"frow-container"],[1,"frow","row-start"],[1,"col-sm-1-1","col-sm-6-12","col-md-6-12"],[1,"col-sm-1-1","col-sm-3-12","col-md-3-12"],["appearance","outline",1,"fluid"],["matInput","","placeholder","Ejemplo: Jefe-Cartograf\xeda",3,"keyup"],["input",""],["matSuffix",""],[1,"col-sm-1-1","col-sm-3-12","col-md-3-12",2,"text-align","right"],["mat-flat-button","","color","accent","style","margin-right: 8px;",3,"click",4,"ngxPermissionsOnly"],[1,"mat-elevation-z8"],["mat-table","","matSort","",1,"fluid",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["class","cell-pointer","mat-cell","",4,"matCellDef"],["matColumnDef","nombre"],["matColumnDef","options"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["class","selected-row","mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-flat-button","","color","accent",2,"margin-right","8px",3,"click"],["mat-header-cell","","mat-sort-header",""],["mat-cell","",1,"cell-pointer"],["mat-header-cell",""],[4,"ngIf"],["mat-icon-button","","matTooltip","Editar","matTooltipPosition","right","color","primary","class","iconbutton",3,"click",4,"ngxPermissionsOnly"],["mat-icon-button","","matTooltip","Desactivar","matTooltipPosition","right","color","warn","class","iconbutton",3,"click",4,"ngxPermissionsOnly"],["mat-icon-button","","matTooltip","Permisos","matTooltipPosition","right","color","primary","class","iconbutton",3,"click",4,"ngxPermissionsOnly"],["mat-icon-button","","matTooltip","Editar","matTooltipPosition","right","color","primary",1,"iconbutton",3,"click"],["aria-label","Edit"],["mat-icon-button","","matTooltip","Desactivar","matTooltipPosition","right","color","warn",1,"iconbutton",3,"click"],["aria-label","Delete"],["mat-icon-button","","matTooltip","Permisos","matTooltipPosition","right","color","primary",1,"iconbutton",3,"click"],["mat-header-row",""],["mat-row","",1,"selected-row"],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2"),t._uU(5,"Politicas"),t.qZA()(),t.TgZ(6,"div",4)(7,"mat-form-field",5)(8,"mat-label"),t._uU(9,"Buscar"),t.qZA(),t.TgZ(10,"input",6,7),t.NdJ("keyup",function(n){return e.applyFilter(n)}),t.qZA(),t.TgZ(12,"mat-icon",8),t._uU(13,"search"),t.qZA()()(),t.TgZ(14,"div",9),t.YNc(15,L,2,0,"button",10),t.qZA()(),t.TgZ(16,"div",11)(17,"table",12),t.ynx(18,13),t.YNc(19,H,2,0,"th",14),t.YNc(20,j,2,1,"td",15),t.BQk(),t.ynx(21,16),t.YNc(22,z,2,0,"th",14),t.YNc(23,K,2,1,"td",15),t.BQk(),t.ynx(24,17),t.YNc(25,W,1,0,"th",18),t.YNc(26,ot,2,1,"td",15),t.BQk(),t.YNc(27,it,1,0,"tr",19),t.YNc(28,rt,1,0,"tr",20),t.YNc(29,nt,3,1,"tr",21),t.qZA(),t._UZ(30,"br")(31,"mat-paginator",22),t.qZA()()()),2&o&&(t.xp6(7),t.Udp("font-size",12,"px"),t.xp6(1),t.Udp("font-size",14,"px"),t.xp6(7),t.Q6J("ngxPermissionsOnly",t.DdM(9,st)),t.xp6(2),t.Q6J("dataSource",e.dataSource),t.xp6(10),t.Q6J("matHeaderRowDef",e.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",e.displayedColumns),t.xp6(3),t.Q6J("pageSizeOptions",t.DdM(10,lt)))},dependencies:[g.O5,m.KE,m.hX,m.R9,w.Nt,P.lW,P.RK,a.BZ,a.fO,a.as,a.w1,a.Dz,a.nj,a.ge,a.ev,a.XQ,a.Gk,a.Ee,G.Hw,h.NW,A.gM,b.YE,b.nU,v.gE]});var k=l(9132);const at=[{path:"",component:f}];class d{}d.\u0275fac=function(o){return new(o||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[k.Bz.forChild(at),k.Bz]});var ct=l(4320),mt=l(6709);class _{}_.\u0275fac=function(o){return new(o||_)},_.\u0275mod=t.oAB({type:_}),_.\u0275inj=t.cJS({imports:[g.ez,d,s.UX,ct.M,mt.p9,A.AV,v.VI.forChild()]})},5357:(J,Z,l)=>{l.d(Z,{N:()=>a});var h=l(4650),b=l(8443);class a{constructor(c){this.apiService=c}getPermisions(){return this.apiService.getAll("permisos")}createRol(c){return this.apiService.store("rol",c)}assignPermisoToRol(c){return this.apiService.store("asignarPermiso",c)}getRolesPermisos(c){return this.apiService.getById("asignacionesRolPermiso",c)}desactiveRole(c){return this.apiService.desactive("rol",c)}editRole(c){return this.apiService.patch("rol/edit",c)}getRoles(){return this.apiService.getAll("roles")}}a.\u0275fac=function(c){return new(c||a)(h.LFG(b.s))},a.\u0275prov=h.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}}]);