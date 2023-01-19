"use strict";(self.webpackChunkcartografia_app=self.webpackChunkcartografia_app||[]).push([[449],{1449:(Ae,b,i)=>{i.r(b),i.d(b,{EditUserDialogComponent:()=>c,NewUserPageComponent:()=>_,PasswordValidation:()=>q,UserModule:()=>h,UserPageComponent:()=>f,UserRoutingModule:()=>p,UserService:()=>m});var I=i(7974),N=i(6308),u=i(7155),v=i(5226),U=i.n(v),a=i(4006),C=i(7274),e=i(4650),D=i(529),y=i(6570);class m{constructor(o){this.apiService=o}newUser(o){return this.apiService.store("registro",o)}getAllUsers(o,r){let n=new D.LE;return o&&r&&(n=n.set("limit",o),n=n.set("offset",r)),this.apiService.getAll("usuarios")}desactiveUser(o){return this.apiService.desactive("usuario",o)}editUser(o){return this.apiService.patch("usuario/edit",o)}}m.\u0275fac=function(o){return new(o||m)(e.LFG(y.s))},m.\u0275prov=e.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"});var P=i(6895),d=i(9549),T=i(4144),Z=i(4859),A=i(6709);function E(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"DPI es "),e.TgZ(2,"strong"),e._uU(3,"requerido"),e.qZA()())}function F(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"DPI es debe contener"),e.TgZ(2,"strong"),e._uU(3,"13 digitos"),e.qZA()())}function Y(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Nombres son "),e.TgZ(2,"strong"),e._uU(3,"requeridos"),e.qZA()())}function k(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Apellidos son "),e.TgZ(2,"strong"),e._uU(3,"requeridos"),e.qZA()())}function J(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Email es "),e.TgZ(2,"strong"),e._uU(3,"requerido"),e.qZA()())}function Q(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Codigo de usuario es "),e.TgZ(2,"strong"),e._uU(3,"requerido"),e.qZA()())}function S(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Nombre de usuario es "),e.TgZ(2,"strong"),e._uU(3,"requerido"),e.qZA()())}function M(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Contrase\xf1a debe tener al menos "),e.TgZ(2,"strong"),e._uU(3," 8 caracteres, letras minusculas, letras mayusculas, numeros y caracteres especiales "),e.qZA()())}function O(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Contrase\xf1a debe tener al menos "),e.TgZ(2,"strong"),e._uU(3," 8 caracteres, letras minusculas, letras mayusculas, numeros y caracteres especiales "),e.qZA()())}function B(t,o){1&t&&(e.TgZ(0,"mat-error")(1,"strong"),e._uU(2," Las contrase\xf1as no coinciden "),e.qZA()())}class c{constructor(o,r,n,s){this.dialogRef=o,this.data=r,this.userService=n,this.formBuilder=s,this.hide=!0,this.passwordType="password",this.loading=!1,this.checked=!1,this.buildForm()}ngOnInit(){}buildForm(){this.editForm=this.formBuilder.group({id:[this.data.id,[a.kI.required]],DPI:[this.data.DPI,[a.kI.required,a.kI.pattern(/^((\\+91-?)|0)?[0-9]{13}$/)]],nombres:[this.data.nombres,[a.kI.required]],apellidos:[this.data.apellidos,[a.kI.required]],email:[this.data.email,[a.kI.required,a.kI.email]],codigo_usuario:[this.data.codigo_usuario,[a.kI.required]],password:[{value:"",disabled:!0},[a.kI.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=.*[$@$!%*?&])(?=[^A-Z]*[A-Z]).{8,30}$/)]],passwordConfirm:[{value:"",disabled:!0},[a.kI.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=.*[$@$!%*?&])(?=[^A-Z]*[A-Z]).{8,30}$/),q.MatchPassword]],username:[this.data.username,[a.kI.required]]})}get Id(){return this.editForm.get("id")}get DPI(){return this.editForm.get("DPI")}get Nombres(){return this.editForm.get("nombres")}get Email(){return this.editForm.get("email")}get CodigoUsuario(){return this.editForm.get("codigo_usuario")}get Password(){return this.editForm.get("password")}get PasswordConfirm(){return this.editForm.get("passwordConfirm")}get Username(){return this.editForm.get("username")}get Apellidos(){return this.editForm.get("apellidos")}submit(){}cancelEdit(){this.dialogRef.close()}passwordStatus(o){this.checked=o,this.checked?(this.Password?.enable(),this.PasswordConfirm?.enable()):(this.Password?.disable(),this.PasswordConfirm?.disable())}editUser(){this.editForm.valid&&(this.Password?.disabled&&(this.Password.setValue(""),this.Password.enable()),this.userService.editUser(this.editForm.value).subscribe(o=>{1==o.status&&(U().fire("Ok!",o.message,"success"),this.dialogRef.close(1))},o=>{this.loading=!1,console.log(o)}),this.Password?.disable())}}c.\u0275fac=function(o){return new(o||c)(e.Y36(C.so),e.Y36(C.WI),e.Y36(m),e.Y36(a.qu))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-edit-user-dialog"]],decls:64,vars:14,consts:[[1,"card"],["mat-dialog-title",""],[1,"card-body"],[3,"formGroup","submit"],[1,"form-group"],["appearance","outline",1,"full-width-input"],["type","number","formControlName","DPI","matInput","","placeholder","2320 55634 0103","required","",1,"form-control"],[4,"ngIf"],["type","text","matInput","","formControlName","nombres","placeholder","Primer Nombre, Segundo Nombre...","required","",1,"form-control"],["type","text","formControlName","apellidos","matInput","","placeholder","Primer Apellido, Segundo Apellido...","required","",1,"form-control"],["type","email","formControlName","email","matInput","","placeholder","ejemplo.correo@gmail.com","required","",1,"form-control"],["type","number","formControlName","codigo_usuario","matInput","","placeholder","0985","required","",1,"form-control"],["type","text","formControlName","username","matInput","","placeholder","usuario2023","required","",1,"form-control"],[1,"example-margin",3,"checked","change"],["type","password","formControlName","password","matInput","","required","",1,"form-control"],["type","password","formControlName","passwordConfirm","matInput","","required","",1,"form-control"],["type","submit","mat-stroked-button","","color","primary",3,"disabled","click"],["type","submit","mat-stroked-button","","color","warn",3,"click"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0)(1,"h3",1),e._uU(2),e.qZA(),e._UZ(3,"br"),e.TgZ(4,"div",2)(5,"form",3),e.NdJ("submit",function(){return r.submit()}),e.TgZ(6,"div",4)(7,"mat-form-field",5)(8,"mat-label"),e._uU(9,"Ingrese su DPI"),e.qZA(),e._UZ(10,"input",6),e.YNc(11,E,4,0,"mat-error",7),e.YNc(12,F,4,0,"mat-error",7),e.qZA()(),e.TgZ(13,"div",4)(14,"mat-form-field",5)(15,"mat-label"),e._uU(16,"Ingrese su Nombre"),e.qZA(),e._UZ(17,"input",8),e.YNc(18,Y,4,0,"mat-error",7),e.qZA()(),e.TgZ(19,"div",4)(20,"mat-form-field",5)(21,"mat-label"),e._uU(22,"Ingrese su Apellido"),e.qZA(),e._UZ(23,"input",9),e.YNc(24,k,4,0,"mat-error",7),e.qZA()(),e.TgZ(25,"div",4)(26,"mat-form-field",5)(27,"mat-label"),e._uU(28,"Ingrese su Email"),e.qZA(),e._UZ(29,"input",10),e.YNc(30,J,4,0,"mat-error",7),e.qZA()(),e.TgZ(31,"div",4)(32,"mat-form-field",5)(33,"mat-label"),e._uU(34,"Ingrese el Codigo de Usuario"),e.qZA(),e._UZ(35,"input",11),e.YNc(36,Q,4,0,"mat-error",7),e.qZA()(),e.TgZ(37,"div",4)(38,"mat-form-field",5)(39,"mat-label"),e._uU(40,"Ingrese el nombre de Usuario"),e.qZA(),e._UZ(41,"input",12),e.YNc(42,S,4,0,"mat-error",7),e.qZA()(),e.TgZ(43,"div",4)(44,"mat-checkbox",13),e.NdJ("change",function(s){return r.passwordStatus(s.checked)}),e._uU(45," Cambiar Contrase\xf1a "),e.qZA()(),e.TgZ(46,"div",4)(47,"mat-form-field",5)(48,"mat-label"),e._uU(49,"Ingrese contrase\xf1a"),e.qZA(),e._UZ(50,"input",14),e.YNc(51,M,4,0,"mat-error",7),e.qZA()(),e.TgZ(52,"div",4)(53,"mat-form-field",5)(54,"mat-label"),e._uU(55,"Confirme contrase\xf1a"),e.qZA(),e._UZ(56,"input",15),e.YNc(57,O,4,0,"mat-error",7),e.YNc(58,B,3,0,"mat-error",7),e.qZA()(),e.TgZ(59,"div",4)(60,"button",16),e.NdJ("click",function(){return r.editUser()}),e._uU(61," Editar Usuario "),e.qZA(),e.TgZ(62,"button",17),e.NdJ("click",function(){return r.cancelEdit()}),e._uU(63," Cancelar "),e.qZA()()()()()),2&o&&(e.xp6(2),e.hij("Usuario: ",r.data.username,""),e.xp6(3),e.Q6J("formGroup",r.editForm),e.xp6(6),e.Q6J("ngIf",(null==r.DPI?null:r.DPI.touched)&&(null==r.DPI?null:r.DPI.hasError("required"))),e.xp6(1),e.Q6J("ngIf",(null==r.DPI?null:r.DPI.touched)&&(null==r.DPI?null:r.DPI.hasError("pattern"))),e.xp6(6),e.Q6J("ngIf",(null==r.Nombres?null:r.Nombres.touched)&&(null==r.Nombres?null:r.Nombres.hasError("required"))),e.xp6(6),e.Q6J("ngIf",(null==r.Apellidos?null:r.Apellidos.touched)&&(null==r.Apellidos?null:r.Apellidos.hasError("required"))),e.xp6(6),e.Q6J("ngIf",(null==r.Email?null:r.Email.touched)&&(null==r.Email?null:r.Email.hasError("required"))),e.xp6(6),e.Q6J("ngIf",(null==r.CodigoUsuario?null:r.CodigoUsuario.touched)&&(null==r.CodigoUsuario?null:r.CodigoUsuario.hasError("required"))),e.xp6(6),e.Q6J("ngIf",(null==r.Username?null:r.Username.touched)&&(null==r.Username?null:r.Username.hasError("required"))),e.xp6(2),e.Q6J("checked",r.checked),e.xp6(7),e.Q6J("ngIf",(null==r.Password?null:r.Password.touched)&&(null==r.Password?null:r.Password.hasError("pattern"))),e.xp6(6),e.Q6J("ngIf",(null==r.PasswordConfirm?null:r.PasswordConfirm.touched)&&(null==r.PasswordConfirm?null:r.PasswordConfirm.hasError("pattern"))),e.xp6(1),e.Q6J("ngIf",(null==r.PasswordConfirm?null:r.PasswordConfirm.touched)&&(null==r.PasswordConfirm?null:r.PasswordConfirm.hasError("matchPassword"))),e.xp6(2),e.Q6J("disabled",!r.editForm.valid))},dependencies:[P.O5,d.KE,d.hX,d.TO,T.Nt,Z.lW,a._Y,a.Fj,a.wV,a.JJ,a.JL,a.Q7,a.sg,a.u,A.oG],styles:[".mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.full-width-input[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]{width:50%}.card[_ngcontent-%COMP%]{padding:2rem}"]});var w=i(9299),$=i(7392);function j(t,o){1&t&&(e.TgZ(0,"th",21),e._uU(1," ID "),e.qZA())}function z(t,o){if(1&t&&(e.TgZ(0,"td",22),e._uU(1),e.qZA()),2&t){const r=o.$implicit;e.xp6(1),e.hij(" ",r.id," ")}}function R(t,o){1&t&&(e.TgZ(0,"th",21),e._uU(1," DPI "),e.qZA())}function G(t,o){if(1&t&&(e.TgZ(0,"td",22),e._uU(1),e.qZA()),2&t){const r=o.$implicit;e.xp6(1),e.hij(" ",r.DPI," ")}}function x(t,o){1&t&&(e.TgZ(0,"th",21),e._uU(1," Nombres "),e.qZA())}function H(t,o){if(1&t&&(e.TgZ(0,"td",22),e._uU(1),e.qZA()),2&t){const r=o.$implicit;e.xp6(1),e.hij(" ",r.nombres," ")}}function X(t,o){1&t&&(e.TgZ(0,"th",21),e._uU(1," Apellidos "),e.qZA())}function L(t,o){if(1&t&&(e.TgZ(0,"td",22),e._uU(1),e.qZA()),2&t){const r=o.$implicit;e.xp6(1),e.hij(" ",r.apellidos," ")}}function V(t,o){1&t&&(e.TgZ(0,"th",21),e._uU(1," Usuario "),e.qZA())}function K(t,o){if(1&t&&(e.TgZ(0,"td",22),e._uU(1),e.qZA()),2&t){const r=o.$implicit;e.xp6(1),e.hij(" ",r.username," ")}}function W(t,o){1&t&&(e.TgZ(0,"th",21),e._uU(1," Email "),e.qZA())}function ee(t,o){if(1&t&&(e.TgZ(0,"td",22),e._uU(1),e.qZA()),2&t){const r=o.$implicit;e.xp6(1),e.hij(" ",r.email," ")}}function re(t,o){1&t&&(e.TgZ(0,"th",21),e._uU(1," Codigo de Usuario "),e.qZA())}function oe(t,o){if(1&t&&(e.TgZ(0,"td",22),e._uU(1),e.qZA()),2&t){const r=o.$implicit;e.xp6(1),e.hij(" ",r.codigo_usuario," ")}}function te(t,o){1&t&&(e.TgZ(0,"th",21),e._uU(1,"Acciones"),e.qZA())}function ae(t,o){if(1&t){const r=e.EpF();e.TgZ(0,"td",22)(1,"button",23),e.NdJ("click",function(){const l=e.CHM(r).$implicit,g=e.oxw();return e.KtG(g.editar(l.id,l.DPI,l.nombres,l.apellidos,l.email,l.codigo_usuario,l.username))}),e.TgZ(2,"mat-icon",24),e._uU(3,"edit"),e.qZA()(),e.TgZ(4,"button",25),e.NdJ("click",function(){const l=e.CHM(r).$implicit,g=e.oxw();return e.KtG(g.desactivar(l.id,l.username))}),e.TgZ(5,"mat-icon",26),e._uU(6,"delete"),e.qZA()()()}}function ne(t,o){1&t&&e._UZ(0,"tr",27)}function ie(t,o){1&t&&e._UZ(0,"tr",28)}function se(t,o){if(1&t&&(e.TgZ(0,"tr",29)(1,"td",30),e._uU(2),e.qZA()()),2&t){e.oxw();const r=e.MAs(10);e.xp6(2),e.hij('No hay resultados de "',r.value,'"')}}const le=function(){return[5,10,25,100]};class f{constructor(o,r,n){this.userServide=o,this.formBuilder=r,this.dialogService=n,this.hide=!0,this.passwordType="password",this.loading=!1,this.displayedColumns=["id","DPI","nombres","apellidos","username","email","codigo_usuario","options"],this.dataSource=new u.by}ngOnInit(){this.cargarUsuarios()}cargarUsuarios(){this.userServide.getAllUsers().subscribe(o=>{this.dataSource=new u.by(o)})}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(o){this.dataSource.filter=o.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}editar(o,r,n,s,l,g,be){this.dialogService.open(c,{height:"50rem",width:"60rem",data:{id:o,DPI:r,nombres:n,apellidos:s,email:l,codigo_usuario:g,username:be}}).afterClosed().subscribe(Ie=>{1===Ie&&this.cargarUsuarios()})}desactivar(o,r){U().fire({title:"\xbfEsta seguro que desea Desactivar el usuario: "+r+"?",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Si",denyButtonText:"No"}).then(n=>{n.isConfirmed?this.userServide.desactiveUser(Number(o)).subscribe(s=>{1==s.status&&(this.cargarUsuarios(),U().fire("Ok!","Usuario Desactivado","success"))},s=>{this.loading=!1,console.log(s)}):n.isDenied&&U().fire("Cambios no guardados","","info")})}}f.\u0275fac=function(o){return new(o||f)(e.Y36(m),e.Y36(a.qu),e.Y36(C.uw))},f.\u0275cmp=e.Xpm({type:f,selectors:[["app-user-page"]],viewQuery:function(o,r){if(1&o&&(e.Gf(I.NW,5),e.Gf(N.YE,5)),2&o){let n;e.iGM(n=e.CRH())&&(r.paginator=n.first),e.iGM(n=e.CRH())&&(r.sort=n.first)}},decls:43,vars:5,consts:[[1,"header"],["mat-fab","","color","accent","routerLink","create"],["aria-label","add"],["matInput","","placeholder","Ejemplo: example_user",3,"keyup"],["input",""],[1,"mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","DPI"],["matColumnDef","nombres"],["matColumnDef","apellidos"],["matColumnDef","username"],["matColumnDef","email"],["matColumnDef","codigo_usuario"],["matColumnDef","options"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Seleccionar usuario por p\xe1gina",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","matTooltip","Click para Editar","matTooltipPosition","right","color","primary",1,"iconbutton",3,"click"],["aria-label","Edit"],["mat-icon-button","","matTooltip","Click para desactivar","color","warn",1,"iconbutton",3,"click"],["aria-label","Delete"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0)(1,"h1"),e._uU(2,"Usuarios"),e.qZA(),e.TgZ(3,"a",1)(4,"mat-icon",2),e._uU(5,"add"),e.qZA()()(),e.TgZ(6,"mat-form-field")(7,"mat-label"),e._uU(8,"Buscar..."),e.qZA(),e.TgZ(9,"input",3,4),e.NdJ("keyup",function(s){return r.applyFilter(s)}),e.qZA()(),e.TgZ(11,"mat-label"),e._uU(12,"Crear Usuario"),e.qZA(),e.TgZ(13,"div",5)(14,"table",6),e.ynx(15,7),e.YNc(16,j,2,0,"th",8),e.YNc(17,z,2,1,"td",9),e.BQk(),e.ynx(18,10),e.YNc(19,R,2,0,"th",8),e.YNc(20,G,2,1,"td",9),e.BQk(),e.ynx(21,11),e.YNc(22,x,2,0,"th",8),e.YNc(23,H,2,1,"td",9),e.BQk(),e.ynx(24,12),e.YNc(25,X,2,0,"th",8),e.YNc(26,L,2,1,"td",9),e.BQk(),e.ynx(27,13),e.YNc(28,V,2,0,"th",8),e.YNc(29,K,2,1,"td",9),e.BQk(),e.ynx(30,14),e.YNc(31,W,2,0,"th",8),e.YNc(32,ee,2,1,"td",9),e.BQk(),e.ynx(33,15),e.YNc(34,re,2,0,"th",8),e.YNc(35,oe,2,1,"td",9),e.BQk(),e.ynx(36,16),e.YNc(37,te,2,0,"th",8),e.YNc(38,ae,7,0,"td",9),e.BQk(),e.YNc(39,ne,1,0,"tr",17),e.YNc(40,ie,1,0,"tr",18),e.YNc(41,se,3,1,"tr",19),e.qZA(),e._UZ(42,"mat-paginator",20),e.qZA()),2&o&&(e.xp6(14),e.Q6J("dataSource",r.dataSource),e.xp6(25),e.Q6J("matHeaderRowDef",r.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",r.displayedColumns),e.xp6(2),e.Q6J("pageSizeOptions",e.DdM(4,le)))},dependencies:[w.rH,d.KE,d.hX,T.Nt,Z.RK,Z.EX,u.BZ,u.fO,u.as,u.w1,u.Dz,u.nj,u.ge,u.ev,u.XQ,u.Gk,u.Ee,$.Hw,I.NW],styles:["table[_ngcontent-%COMP%]{width:100%;padding:1em}.mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{width:25%}.full-width-input[_ngcontent-%COMP%]{width:100% auto;padding:1em}.header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:1.5rem;padding:0 .4rem;font-family:Roboto,Helvetica Neue,sans-serif}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:inline;padding-top:.6rem;font-weight:400}"]});class q{static MatchPassword(o){const r=o.parent;if(r){const n=r.get("password"),s=r.get("passwordConfirm");if(n&&s)return n.value!==s.value?{matchPassword:!0}:null}return null}}var ue=i(3646);function me(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"DPI es "),e.TgZ(2,"strong"),e._uU(3,"requerido"),e.qZA()())}function de(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"DPI debe contener"),e.TgZ(2,"strong"),e._uU(3," 13 digitos"),e.qZA()())}function pe(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Nombres son "),e.TgZ(2,"strong"),e._uU(3,"requeridos"),e.qZA()())}function ge(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Apellidos son "),e.TgZ(2,"strong"),e._uU(3,"requeridos"),e.qZA()())}function ce(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Email es "),e.TgZ(2,"strong"),e._uU(3,"requerido"),e.qZA()())}function fe(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Codigo de usuario es "),e.TgZ(2,"strong"),e._uU(3,"requerido"),e.qZA()())}function _e(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Nombre de usuario es "),e.TgZ(2,"strong"),e._uU(3,"requerido"),e.qZA()())}function he(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Contrase\xf1a es "),e.TgZ(2,"strong"),e._uU(3,"requerido"),e.qZA()())}function Ue(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Contrase\xf1a debe tener al menos "),e.TgZ(2,"strong"),e._uU(3," 8 caracteres, letras minusculas, letras mayusculas, numeros y caracteres especiales "),e.qZA()())}function Ze(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Contrase\xf1a es "),e.TgZ(2,"strong"),e._uU(3,"requerido"),e.qZA()())}function Ce(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Contrase\xf1a debe tener al menos "),e.TgZ(2,"strong"),e._uU(3," 8 caracteres, letras minusculas, letras mayusculas, numeros y caracteres especiales "),e.qZA()())}function Pe(t,o){1&t&&(e.TgZ(0,"mat-error")(1,"strong"),e._uU(2," Las contrase\xf1as no coinciden "),e.qZA()())}class _{constructor(o,r){this.userServide=o,this.formBuilder=r,this.buildForm()}buildForm(){this.registerForm=this.formBuilder.group({DPI:["",[a.kI.required,a.kI.pattern(/^((\\+91-?)|0)?[0-9]{13}$/)]],nombres:["",[a.kI.required]],apellidos:["",[a.kI.required]],email:["",[a.kI.required,a.kI.email]],codigo_usuario:["",[a.kI.required]],password:["",[a.kI.required,a.kI.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=.*[$@$!%*?&])(?=[^A-Z]*[A-Z]).{8,30}$/)]],passwordConfirm:["",[a.kI.required,a.kI.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=.*[$@$!%*?&])(?=[^A-Z]*[A-Z]).{8,30}$/),q.MatchPassword]],username:["",[a.kI.required]]})}registerUser(){this.registerForm.valid&&(this.user=this.registerForm.value,this.userServide.newUser(this.user).subscribe(o=>{1==o.status&&U().fire("Ok!",o.message,"success")},o=>{console.log(o)}))}get DPI(){return this.registerForm.get("DPI")}get Nombres(){return this.registerForm.get("nombres")}get Email(){return this.registerForm.get("email")}get CodigoUsuario(){return this.registerForm.get("codigo_usuario")}get Password(){return this.registerForm.get("password")}get PasswordConfirm(){return this.registerForm.get("passwordConfirm")}get Username(){return this.registerForm.get("username")}get Apellidos(){return this.registerForm.get("apellidos")}}_.\u0275fac=function(o){return new(o||_)(e.Y36(m),e.Y36(a.qu))},_.\u0275cmp=e.Xpm({type:_,selectors:[["app-new-user-page"]],decls:60,vars:14,consts:[[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["appearance","outline",1,"full-width-input"],["type","number","formControlName","DPI","matInput","","placeholder","2320 55634 0103","required","",1,"form-control"],[4,"ngIf"],["type","text","matInput","","formControlName","nombres","placeholder","Primer Nombre, Segundo Nombre...","required","",1,"form-control"],["type","text","formControlName","apellidos","matInput","","placeholder","Primer Apellido, Segundo Apellido...","required","",1,"form-control"],["type","email","formControlName","email","matInput","","placeholder","ejemplo.correo@gmail.com","required","",1,"form-control"],["type","number","formControlName","codigo_usuario","matInput","","placeholder","0985","required","",1,"form-control"],["type","text","formControlName","username","matInput","","placeholder","usuario2023","required","",1,"form-control"],["type","password","formControlName","password","matInput","","required","",1,"form-control"],["type","password","formControlName","passwordConfirm","matInput","","required","",1,"form-control"],["type","submit","mat-raised-button","","color","primary",3,"disabled"]],template:function(o,r){1&o&&(e._UZ(0,"app-header")(1,"br"),e.TgZ(2,"div",0)(3,"div",1)(4,"form",2),e.NdJ("ngSubmit",function(){return r.registerUser()}),e.TgZ(5,"div",3)(6,"mat-form-field",4)(7,"mat-label"),e._uU(8,"Ingrese su DPI"),e.qZA(),e._UZ(9,"input",5),e.YNc(10,me,4,0,"mat-error",6),e.YNc(11,de,4,0,"mat-error",6),e.qZA()(),e.TgZ(12,"div",3)(13,"mat-form-field",4)(14,"mat-label"),e._uU(15,"Ingrese su Nombre"),e.qZA(),e._UZ(16,"input",7),e.YNc(17,pe,4,0,"mat-error",6),e.qZA()(),e.TgZ(18,"div",3)(19,"mat-form-field",4)(20,"mat-label"),e._uU(21,"Ingrese su Apellido"),e.qZA(),e._UZ(22,"input",8),e.YNc(23,ge,4,0,"mat-error",6),e.qZA()(),e.TgZ(24,"div",3)(25,"mat-form-field",4)(26,"mat-label"),e._uU(27,"Ingrese su Email"),e.qZA(),e._UZ(28,"input",9),e.YNc(29,ce,4,0,"mat-error",6),e.qZA()(),e.TgZ(30,"div",3)(31,"mat-form-field",4)(32,"mat-label"),e._uU(33,"Ingrese el Codigo de Usuario"),e.qZA(),e._UZ(34,"input",10),e.YNc(35,fe,4,0,"mat-error",6),e.qZA()(),e.TgZ(36,"div",3)(37,"mat-form-field",4)(38,"mat-label"),e._uU(39,"Ingrese el nombre de Usuario"),e.qZA(),e._UZ(40,"input",11),e.YNc(41,_e,4,0,"mat-error",6),e.qZA()(),e.TgZ(42,"div",3)(43,"mat-form-field",4)(44,"mat-label"),e._uU(45,"Ingrese contrase\xf1a"),e.qZA(),e._UZ(46,"input",12),e.YNc(47,he,4,0,"mat-error",6),e.YNc(48,Ue,4,0,"mat-error",6),e.qZA()(),e.TgZ(49,"div",3)(50,"mat-form-field",4)(51,"mat-label"),e._uU(52,"Confirme contrase\xf1a"),e.qZA(),e._UZ(53,"input",13),e.YNc(54,Ze,4,0,"mat-error",6),e.YNc(55,Ce,4,0,"mat-error",6),e.YNc(56,Pe,3,0,"mat-error",6),e.qZA()(),e.TgZ(57,"div",3)(58,"button",14),e._uU(59," Guardar Usuario "),e.qZA()()()()()),2&o&&(e.xp6(4),e.Q6J("formGroup",r.registerForm),e.xp6(6),e.Q6J("ngIf",(null==r.DPI?null:r.DPI.touched)&&(null==r.DPI?null:r.DPI.hasError("required"))),e.xp6(1),e.Q6J("ngIf",(null==r.DPI?null:r.DPI.touched)&&(null==r.DPI?null:r.DPI.hasError("pattern"))),e.xp6(6),e.Q6J("ngIf",(null==r.Nombres?null:r.Nombres.touched)&&(null==r.Nombres?null:r.Nombres.hasError("required"))),e.xp6(6),e.Q6J("ngIf",(null==r.Apellidos?null:r.Apellidos.touched)&&(null==r.Apellidos?null:r.Apellidos.hasError("required"))),e.xp6(6),e.Q6J("ngIf",(null==r.Email?null:r.Email.touched)&&(null==r.Email?null:r.Email.hasError("required"))),e.xp6(6),e.Q6J("ngIf",(null==r.CodigoUsuario?null:r.CodigoUsuario.touched)&&(null==r.CodigoUsuario?null:r.CodigoUsuario.hasError("required"))),e.xp6(6),e.Q6J("ngIf",(null==r.Username?null:r.Username.touched)&&(null==r.Username?null:r.Username.hasError("required"))),e.xp6(6),e.Q6J("ngIf",(null==r.Password?null:r.Password.touched)&&(null==r.Password?null:r.Password.hasError("required"))),e.xp6(1),e.Q6J("ngIf",(null==r.Password?null:r.Password.touched)&&(null==r.Password?null:r.Password.hasError("pattern"))),e.xp6(6),e.Q6J("ngIf",(null==r.PasswordConfirm?null:r.PasswordConfirm.touched)&&(null==r.PasswordConfirm?null:r.PasswordConfirm.hasError("required"))),e.xp6(1),e.Q6J("ngIf",(null==r.PasswordConfirm?null:r.PasswordConfirm.touched)&&(null==r.PasswordConfirm?null:r.PasswordConfirm.hasError("pattern"))),e.xp6(1),e.Q6J("ngIf",(null==r.PasswordConfirm?null:r.PasswordConfirm.touched)&&(null==r.PasswordConfirm?null:r.PasswordConfirm.hasError("matchPassword"))),e.xp6(2),e.Q6J("disabled",!r.registerForm.valid))},dependencies:[P.O5,ue.G,d.KE,d.hX,d.TO,T.Nt,Z.lW,a._Y,a.Fj,a.wV,a.JJ,a.JL,a.Q7,a.sg,a.u],styles:[".full-width-input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{width:100%}.example-section[_ngcontent-%COMP%]{margin:12px}.example-margin[_ngcontent-%COMP%]{margin:0 12px}ul[_ngcontent-%COMP%]{list-style-type:none;margin-top:4px}"]});const Te=[{path:"",component:f},{path:"create",component:_}];class p{}p.\u0275fac=function(o){return new(o||p)},p.\u0275mod=e.oAB({type:p}),p.\u0275inj=e.cJS({imports:[w.Bz.forChild(Te),w.Bz]});var we=i(5330),qe=i(4657);class h{}h.\u0275fac=function(o){return new(o||h)},h.\u0275mod=e.oAB({type:h}),h.\u0275inj=e.cJS({imports:[P.ez,p,we.G,qe.M,a.UX,A.p9]})}}]);