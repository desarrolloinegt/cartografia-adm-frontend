"use strict";(self.webpackChunkcartografia_app=self.webpackChunkcartografia_app||[]).push([[535],{3535:(W,N,s)=>{s.r(N),s.d(N,{RolesModule:()=>g,RolesPageComponent:()=>p,RolesRoutingModule:()=>u});var y=s(7974),w=s(6308),m=s(7155),x=s(5226),h=s.n(x),r=s(4006),C=s(7274),e=s(4650),A=s(6570);class c{constructor(t){this.apiService=t}getPermisions(){return this.apiService.getAll("permisos")}createRol(t){return this.apiService.store("rol",t)}assignPermisoToRol(t){return this.apiService.store("asignarPermiso",t)}getRolesPermisos(){return this.apiService.getAll("asignacionesRolPermiso")}desactiveRole(t){return this.apiService.desactive("rol",t)}editRole(t){return this.apiService.patch("rol/edit",t)}}c.\u0275fac=function(t){return new(t||c)(e.LFG(A.s))},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"});var f=s(6895),d=s(9549),P=s(4144),R=s(4859),v=s(6338),S=s(6709);function U(i,t){1&i&&(e.TgZ(0,"mat-error"),e._uU(1,"Nombre es "),e.TgZ(2,"strong"),e._uU(3,"requerido"),e.qZA()())}function F(i,t){if(1&i&&(e.TgZ(0,"mat-list-option",15),e._uU(1),e.qZA()),2&i){const o=t.$implicit;e.Q6J("selected",o.checked)("value",o.id),e.xp6(1),e.hij(" ",o.alias," ")}}class _{constructor(t,o,n,l){this.roleService=t,this.dialogRef=o,this.data=n,this.formBuilder=l,this.checked=!1,this.selectedPermision=[],this.permisosList=[],this.defaultPermisos=[],this.asignacionPermisoRolEditado={rol_id:0,permisos:[]},this.buildForm(),this.getPermisos()}submit(){}buildForm(){this.editForm=this.formBuilder.group({rol_id:[this.data.rol_id,[r.kI.required]],nombre:[this.data.nombre,[r.kI.required]],permisos:[{value:[],disabled:!0},[r.kI.required]]})}get Id(){return this.editForm.get("rol_id")}get Nombre(){return this.editForm.get("nombre")}get Permisos(){return this.editForm.get("permisos")}changePermisoStatus(t){this.checked=t,this.checked?this.Permisos?.enable():this.Permisos?.disable()}editRole(){this.editForm.valid&&(this.Permisos?.disabled&&(this.Permisos.setValue(""),this.Permisos.enable()),this.roleService.editRole(this.editForm.value).subscribe(t=>{1==t.status&&(h().fire("Ok!",t.message,"success"),this.dialogRef.close(1))},t=>{console.log(t)}))}getPermisos(){this.roleService.getPermisions().subscribe(t=>{this.permisosList=t,this.permisosList.forEach(o=>{o.checked=!1}),this.defaultPermision()})}defaultPermision(){for(let t=0;t<this.permisosList.length;t++)for(let o=0;o<this.data.permisos.length;o++)this.permisosList[t].alias==this.data.permisos[o]&&(this.permisosList[t].checked=!0)}permisoSelected(t){this.selectedPermision=t.map(o=>o.value)}cancelEdit(){this.dialogRef.close()}}_.\u0275fac=function(t){return new(t||_)(e.Y36(c),e.Y36(C.so),e.Y36(C.WI),e.Y36(r.qu))},_.\u0275cmp=e.Xpm({type:_,selectors:[["app-roles-edit-dialog"]],decls:27,vars:6,consts:[[1,"card"],["mat-dialog-title",""],[1,"card-body"],[3,"formGroup","submit"],[1,"form-group"],["appearance","outline",1,"full-width-input"],["type","text","formControlName","nombre","matInput","","placeholder","admin","required","",1,"form-control"],[4,"ngIf"],[1,"example-margin",3,"checked","change"],[1,"example-section"],["formControlName","permisos",3,"selectionChange"],["permisosLis",""],[3,"selected","value",4,"ngFor","ngForOf"],["type","submit","mat-stroked-button","","color","primary",3,"disabled","click"],["type","submit","mat-stroked-button","","color","warn",3,"click"],[3,"selected","value"]],template:function(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"div",0)(1,"h3",1),e._uU(2),e.qZA(),e._UZ(3,"br")(4,"br"),e.TgZ(5,"div",2)(6,"form",3),e.NdJ("submit",function(){return o.submit()}),e.TgZ(7,"div",4)(8,"mat-form-field",5)(9,"mat-label"),e._uU(10,"Nombre del rol"),e.qZA(),e._UZ(11,"input",6),e.YNc(12,U,4,0,"mat-error",7),e.qZA()(),e.TgZ(13,"div",4)(14,"mat-checkbox",8),e.NdJ("change",function(a){return o.changePermisoStatus(a.checked)}),e._uU(15," Cambiar Permisos "),e.qZA()(),e.TgZ(16,"div",9)(17,"mat-label"),e._uU(18,"Permisos"),e.qZA(),e.TgZ(19,"mat-selection-list",10,11),e.NdJ("selectionChange",function(){e.CHM(n);const a=e.MAs(20);return e.KtG(o.permisoSelected(a.selectedOptions.selected))}),e.YNc(21,F,2,3,"mat-list-option",12),e.qZA()(),e.TgZ(22,"div",4)(23,"button",13),e.NdJ("click",function(){return o.editRole()}),e._uU(24," Editar Usuario "),e.qZA(),e.TgZ(25,"button",14),e.NdJ("click",function(){return o.cancelEdit()}),e._uU(26," Cancelar "),e.qZA()()()()()}2&t&&(e.xp6(2),e.hij("Rol: ",o.data.nombre,""),e.xp6(4),e.Q6J("formGroup",o.editForm),e.xp6(6),e.Q6J("ngIf",(null==o.Nombre?null:o.Nombre.touched)&&(null==o.Nombre?null:o.Nombre.hasError("required"))),e.xp6(2),e.Q6J("checked",o.checked),e.xp6(7),e.Q6J("ngForOf",o.permisosList),e.xp6(2),e.Q6J("disabled",!o.editForm.valid))},dependencies:[f.sg,f.O5,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.sg,r.u,d.KE,d.hX,d.TO,P.Nt,R.lW,v.Ub,v.vS,S.oG],styles:[".mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.full-width-input[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]{width:50%}.card[_ngcontent-%COMP%]{padding:2rem}"]});var Z=s(9299),M=s(7392);function O(i,t){1&i&&(e.TgZ(0,"th",17),e._uU(1," ID Rol"),e.qZA())}function J(i,t){if(1&i&&(e.TgZ(0,"td",18),e._uU(1),e.qZA()),2&i){const o=t.$implicit;e.xp6(1),e.hij(" ",o.rol_id," ")}}function k(i,t){1&i&&(e.TgZ(0,"th",17),e._uU(1," Rol "),e.qZA())}function D(i,t){if(1&i&&(e.TgZ(0,"td",18),e._uU(1),e.qZA()),2&i){const o=t.$implicit;e.xp6(1),e.hij(" ",o.nombre," ")}}function E(i,t){1&i&&(e.TgZ(0,"th",17),e._uU(1," Permisos "),e.qZA())}function Y(i,t){if(1&i&&(e.TgZ(0,"td",18),e._uU(1),e.qZA()),2&i){const o=t.$implicit;e.xp6(1),e.hij(" ",o.permisos," ")}}function q(i,t){1&i&&(e.TgZ(0,"th",17),e._uU(1,"Acciones"),e.qZA())}function Q(i,t){if(1&i){const o=e.EpF();e.TgZ(0,"td",18)(1,"button",19),e.NdJ("click",function(){const a=e.CHM(o).$implicit,T=e.oxw();return e.KtG(T.editar(a.rol_id,a.nombre,a.permisos))}),e.TgZ(2,"mat-icon",20),e._uU(3,"edit"),e.qZA()(),e.TgZ(4,"button",21),e.NdJ("click",function(){const a=e.CHM(o).$implicit,T=e.oxw();return e.KtG(T.desactivar(a.rol_id,a.nombre,a.permisos))}),e.TgZ(5,"mat-icon",22),e._uU(6,"delete"),e.qZA()()()}}function B(i,t){1&i&&e._UZ(0,"tr",23)}function G(i,t){1&i&&e._UZ(0,"tr",24)}function I(i,t){if(1&i&&(e.TgZ(0,"tr",25)(1,"td",26),e._uU(2),e.qZA()()),2&i){e.oxw();const o=e.MAs(10);e.xp6(2),e.hij('No hay resultados de "',o.value,'"')}}const j=function(){return[5,10,25,100]};class p{constructor(t,o,n){this.roleService=t,this.formBuilder=o,this.dialogService=n,this.rolesPermiso={rol_id:0,nombre:"",permisos:[]},this.displayedColumns=["rol_id","nombre","permisos","options"],this.dataSource=new m.by}applyFilter(t){this.dataSource.filter=t.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}editar(t,o,n){this.rolesPermiso.nombre=o,this.rolesPermiso.rol_id=Number(t),this.rolesPermiso.permisos=n,this.dialogService.open(_,{height:"50rem",width:"60rem",data:this.rolesPermiso}).afterClosed().subscribe(a=>{1===a&&this.cargarRoles()})}ngOnInit(){this.cargarRoles()}cargarRoles(){this.roleService.getRolesPermisos().subscribe(t=>{this.dataSource=new m.by(t)})}desactivar(t,o,n){h().fire({title:"\xbfEsta seguro que desea Desactivar el rol: "+o+"?",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Si",denyButtonText:"No"}).then(l=>{l.isConfirmed?this.roleService.desactiveRole(Number(t)).subscribe(a=>{1==a.status&&(this.cargarRoles(),h().fire("Ok!","Rol Desactivado","success"))},a=>{console.log(a)}):l.isDenied&&h().fire("Cambios no guardados","","info")})}}p.\u0275fac=function(t){return new(t||p)(e.Y36(c),e.Y36(r.qu),e.Y36(C.uw))},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-roles-page"]],viewQuery:function(t,o){if(1&t&&(e.Gf(y.NW,5),e.Gf(w.YE,5)),2&t){let n;e.iGM(n=e.CRH())&&(o.paginator=n.first),e.iGM(n=e.CRH())&&(o.sort=n.first)}},decls:29,vars:5,consts:[[1,"header"],["mat-fab","","color","accent","routerLink","/rol/create"],["aria-label","add","oncli",""],["matInput","","placeholder","Ex. Mia",3,"keyup"],["input",""],[1,"mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","rol_id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nombre"],["matColumnDef","permisos"],["matColumnDef","options"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of users",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","matTooltip","Click para Editar","matTooltipPosition","right","color","primary",1,"iconbutton",3,"click"],["aria-label","Edit"],["mat-icon-button","","matTooltip","Click para desactivar","color","warn",1,"iconbutton",3,"click"],["aria-label","Delete"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"h1"),e._uU(2,"Roles"),e.qZA(),e.TgZ(3,"a",1)(4,"mat-icon",2),e._uU(5,"add"),e.qZA()()(),e.TgZ(6,"mat-form-field")(7,"mat-label"),e._uU(8,"Filter"),e.qZA(),e.TgZ(9,"input",3,4),e.NdJ("keyup",function(l){return o.applyFilter(l)}),e.qZA()(),e.TgZ(11,"div",5)(12,"table",6),e.ynx(13,7),e.YNc(14,O,2,0,"th",8),e.YNc(15,J,2,1,"td",9),e.BQk(),e.ynx(16,10),e.YNc(17,k,2,0,"th",8),e.YNc(18,D,2,1,"td",9),e.BQk(),e.ynx(19,11),e.YNc(20,E,2,0,"th",8),e.YNc(21,Y,2,1,"td",9),e.BQk(),e.ynx(22,12),e.YNc(23,q,2,0,"th",8),e.YNc(24,Q,7,0,"td",9),e.BQk(),e.YNc(25,B,1,0,"tr",13),e.YNc(26,G,1,0,"tr",14),e.YNc(27,I,3,1,"tr",15),e.qZA(),e._UZ(28,"mat-paginator",16),e.qZA()),2&t&&(e.xp6(12),e.Q6J("dataSource",o.dataSource),e.xp6(13),e.Q6J("matHeaderRowDef",o.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",o.displayedColumns),e.xp6(2),e.Q6J("pageSizeOptions",e.DdM(4,j)))},dependencies:[Z.rH,d.KE,d.hX,P.Nt,R.RK,R.EX,m.BZ,m.fO,m.as,m.w1,m.Dz,m.nj,m.ge,m.ev,m.XQ,m.Gk,m.Ee,M.Hw,y.NW],styles:["table[_ngcontent-%COMP%]{width:100%;padding:1em}.mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.full-width-input[_ngcontent-%COMP%]{width:100% auto;padding:1em}.example-section[_ngcontent-%COMP%]{margin:12px}.example-margin[_ngcontent-%COMP%]{margin:0 12px}ul[_ngcontent-%COMP%]{list-style-type:none;margin-top:4px}.header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:1.5rem;padding:0 .4rem;font-family:Roboto,Helvetica Neue,sans-serif}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:inline;padding-top:.6rem;font-weight:400}"]});var L=s(3646);function H(i,t){1&i&&(e.TgZ(0,"mat-error"),e._uU(1,"Nombre de Rol es "),e.TgZ(2,"strong"),e._uU(3,"requerido"),e.qZA()())}function z(i,t){if(1&i&&(e.TgZ(0,"mat-list-option",12),e._uU(1),e.qZA()),2&i){const o=t.$implicit;e.Q6J("value",o.id),e.xp6(1),e.hij(" ",o.alias," ")}}class b{constructor(t,o,n){this.roleService=t,this.formBuilder=o,this.dialogService=n,this.permisos=[],this.idRol=0,this.rol={nombre:""},this.asignacionPermisoRol={rol_id:0,permisos:[]},this.cargarPermisos(),this.buildForm()}cargarPermisos(){this.roleService.getPermisions().subscribe(t=>{this.permisos=t})}buildForm(){this.rolForm=this.formBuilder.group({nombre:["",r.kI.required],permisos:["",[r.kI.required]]})}get Nombre(){return this.rolForm.get("nombre")}get Permisos(){return this.rolForm.get("permisos")}createRol(){this.asignacionPermisoRol.permisos=this.selectedPermision,this.rol.nombre=this.Nombre?.value,this.roleService.createRol(this.rol).subscribe(t=>{1==t.status&&(this.asignacionPermisoRol.rol_id=t.id_rol,this.roleService.assignPermisoToRol(this.asignacionPermisoRol).subscribe(o=>{1==o.status&&h().fire("Ok!",o.message,"success")},o=>{console.log(o)}))})}permisoSelected(t){this.selectedPermision=t.map(o=>o.value)}}b.\u0275fac=function(t){return new(t||b)(e.Y36(c),e.Y36(r.qu),e.Y36(C.uw))},b.\u0275cmp=e.Xpm({type:b,selectors:[["app-new-role-page"]],decls:20,vars:4,consts:[[1,"card"],[1,"card-body"],[3,"formGroup","submit"],[1,"form-group"],["appearance","outline",1,"full-width-input"],["type","text","formControlName","nombre","matInput","","placeholder","qa","required","",1,"form-control"],[4,"ngIf"],["type","submit","mat-raised-button","","color","primary",3,"disabled"],[1,"example-section"],["formControlName","permisos",3,"selectionChange"],["permisosList",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,o){if(1&t){const n=e.EpF();e._UZ(0,"app-header")(1,"br"),e.TgZ(2,"div",0)(3,"div",1)(4,"form",2),e.NdJ("submit",function(){return o.createRol()}),e.TgZ(5,"div",3)(6,"mat-form-field",4)(7,"mat-label"),e._uU(8,"Ingrese el nombre del rol"),e.qZA(),e._UZ(9,"input",5),e.YNc(10,H,4,0,"mat-error",6),e.qZA()(),e.TgZ(11,"div",3)(12,"button",7),e._uU(13," Guardar Rol "),e.qZA()(),e.TgZ(14,"div",8)(15,"mat-label"),e._uU(16,"Permisos"),e.qZA(),e.TgZ(17,"mat-selection-list",9,10),e.NdJ("selectionChange",function(){e.CHM(n);const a=e.MAs(18);return e.KtG(o.permisoSelected(a.selectedOptions.selected))}),e.YNc(19,z,2,2,"mat-list-option",11),e.qZA()()()()()}2&t&&(e.xp6(4),e.Q6J("formGroup",o.rolForm),e.xp6(6),e.Q6J("ngIf",(null==o.Nombre?null:o.Nombre.touched)&&(null==o.Nombre?null:o.Nombre.hasError("required"))),e.xp6(2),e.Q6J("disabled",!o.rolForm.valid),e.xp6(7),e.Q6J("ngForOf",o.permisos))},dependencies:[f.sg,f.O5,L.G,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.sg,r.u,d.KE,d.hX,d.TO,P.Nt,R.lW,v.Ub,v.vS],styles:[".full-width-input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{width:100%}.example-section[_ngcontent-%COMP%]{margin:12px}.example-margin[_ngcontent-%COMP%]{margin:0 12px}ul[_ngcontent-%COMP%]{list-style-type:none;margin-top:4px}"]});const X=[{path:"create",component:b},{path:"",component:p}];class u{}u.\u0275fac=function(t){return new(t||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[Z.Bz.forChild(X),Z.Bz]});var K=s(5330),$=s(4657);class g{}g.\u0275fac=function(t){return new(t||g)},g.\u0275mod=e.oAB({type:g}),g.\u0275inj=e.cJS({imports:[f.ez,u,K.G,r.UX,$.M,S.p9]})}}]);