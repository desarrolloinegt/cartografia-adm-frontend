"use strict";(self.webpackChunkcartografia_app=self.webpackChunkcartografia_app||[]).push([[102],{9102:(dt,T,i)=>{i.r(T),i.d(T,{HomeProjectPageComponent:()=>d,ProjecHometModule:()=>g,ProjectRoutingModule:()=>m});var C=i(9132),t=i(4650),f=i(9549),N=i(1572),P=i(3848),b=i(1206),w=i(7559),S=i(6525),O=i(3995),A=i(5226),u=i.n(A),s=i(4006),j=i(7274),y=i(4839),M=i(8049),Z=i(6895),U=i(4144),x=i(4859),v=i(4954);function q(r,e){1&r&&(t.TgZ(0,"mat-error"),t._uU(1,"Nombre de rol es "),t.TgZ(2,"strong"),t._uU(3,"requerido"),t.qZA()())}function J(r,e){if(1&r){const o=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.createGroup())}),t._uU(1," Guardar Rol "),t.qZA()}if(2&r){const o=t.oxw();t.Q6J("disabled",!o.groupForm.valid)}}function k(r,e){if(1&r){const o=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.cancelAdd())}),t._uU(1," Cancelar "),t.qZA()}}const G=function(){return["crear-grupo"]};class _{constructor(e,o,a,n,c){this.groupService=e,this.data=o,this.projectService=a,this.formBuilder=n,this.dialogRef=c,this.buildForm()}buildForm(){this.groupForm=this.formBuilder.group({nombre:["",s.kI.required],descripcion:[""],proyecto_id:[this.data,[s.kI.required]]})}get Nombre(){return this.groupForm.get("nombre")}get Descripcion(){return this.groupForm.get("descripcion")}get ProyectoId(){return this.groupForm.get("proyecto_id")}get Jerarquia(){return this.groupForm.get("jerarquia")}submit(){}createGroup(){this.groupForm.valid&&this.groupService.create(this.groupForm.value).subscribe(e=>{1==e.status&&(u().fire("Ok!",e.message,"success"),this.dialogRef.close(1))})}cancelAdd(){this.dialogRef.close()}}_.\u0275fac=function(e){return new(e||_)(t.Y36(y.GroupService),t.Y36(j.WI),t.Y36(M.Y),t.Y36(s.qu),t.Y36(j.so))},_.\u0275cmp=t.Xpm({type:_,selectors:[["app-new-group-project"]],decls:18,vars:10,consts:[[1,"card"],[1,"card-body"],[3,"formGroup","submit"],[1,"form-group"],["appearance","outline",1,"full-width-input"],["type","text","formControlName","nombre","matInput","","placeholder","Supervisores ENEI","required","",1,"form-control"],[4,"ngIf"],["type","text","formControlName","descripcion","placeholder","Grupo 2026","matInput","",1,"form-control"],["type","submit","mat-raised-button","","color","primary",3,"disabled","click",4,"ngxPermissionsOnly"],["type","submit","mat-stroked-button","","color","warn",3,"click",4,"ngxPermissionsOnly"],["type","submit","mat-raised-button","","color","primary",3,"disabled","click"],["type","submit","mat-stroked-button","","color","warn",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2),t.NdJ("submit",function(){return o.submit()}),t.TgZ(3,"div",3)(4,"mat-form-field",4)(5,"mat-label"),t._uU(6,"Ingrese el Nombre del Rol"),t.qZA(),t._UZ(7,"input",5),t.YNc(8,q,4,0,"mat-error",6),t.qZA()(),t.TgZ(9,"div",3)(10,"mat-form-field",4)(11,"mat-label"),t._uU(12,"Descripcion(Opcional)"),t.qZA(),t._UZ(13,"input",7),t.qZA()(),t.TgZ(14,"div",3),t.YNc(15,J,2,1,"button",8),t._UZ(16,"br"),t.YNc(17,k,2,0,"button",9),t.qZA()()()()),2&e&&(t.xp6(2),t.Q6J("formGroup",o.groupForm),t.xp6(3),t.Udp("font-size",16,"px"),t.xp6(3),t.Q6J("ngIf",(null==o.Nombre?null:o.Nombre.touched)&&(null==o.Nombre?null:o.Nombre.hasError("required"))),t.xp6(3),t.Udp("font-size",16,"px"),t.xp6(4),t.Q6J("ngxPermissionsOnly",t.DdM(8,G)),t.xp6(2),t.Q6J("ngxPermissionsOnly",t.DdM(9,G)))},dependencies:[Z.O5,f.KE,f.hX,f.TO,U.Nt,x.lW,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.sg,s.u,v.gE],styles:[".full-width-input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{width:100%;max-width:98%;margin:0 auto;display:flex}.example-section[_ngcontent-%COMP%]{max-width:98%;margin:0 auto;display:flex}.example-margin[_ngcontent-%COMP%]{margin:0 12px}ul[_ngcontent-%COMP%]{list-style-type:none;margin-top:4px}.card[_ngcontent-%COMP%]{padding:3rem}"]});var Y=i(8443);class p{constructor(e){this.apiService=e}getGroupsProject(e){return this.apiService.getById("obtenerGruposProyecto",e)}guardarJerarquias(e){return this.apiService.patch("jerarquias",e)}getIdProject(e){return this.apiService.getById("proyectoId",e)}}p.\u0275fac=function(e){return new(e||p)(t.LFG(Y.s))},p.\u0275prov=t.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"});var l=i(7155),R=i(7392),D=i(266);const F=["table"];function H(r,e){1&r&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"ID"),t.qZA())}function I(r,e){if(1&r&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&r){const o=e.$implicit;t.xp6(1),t.Oqu(o.id)}}function B(r,e){1&r&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"Nombre"),t.qZA())}function Q(r,e){if(1&r){const o=t.EpF();t.TgZ(0,"mat-cell")(1,"mat-icon",17),t.NdJ("mousedown",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.dragDisabled=!1)}),t._uU(2,"reorder"),t.qZA(),t.TgZ(3,"span"),t._uU(4),t.qZA()()}if(2&r){const o=e.$implicit;t.xp6(4),t.Oqu(o.nombre)}}function E(r,e){1&r&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"Jerarquia"),t.qZA())}function z(r,e){if(1&r&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&r){const o=e.$implicit;t.xp6(1),t.Oqu(o.jerarquia)}}function L(r,e){1&r&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"Descripcion"),t.qZA())}function K(r,e){if(1&r&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&r){const o=e.$implicit;t.xp6(1),t.Oqu(o.descripcion)}}function X(r,e){1&r&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"Acciones"),t.qZA())}function $(r,e){if(1&r){const o=t.EpF();t.TgZ(0,"button",22),t.NdJ("click",function(){t.CHM(o);const n=t.oxw().$implicit,c=t.oxw();return t.KtG(c.editar(n.id,n.nombre,n.descripcion,n.proyecto_id))}),t.TgZ(1,"mat-icon",23),t._uU(2,"edit"),t.qZA()()}}function V(r,e){if(1&r){const o=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(o);const n=t.oxw().$implicit,c=t.oxw();return t.KtG(c.desactivar(n.id,n.nombre))}),t.TgZ(1,"mat-icon",25),t._uU(2,"delete"),t.qZA()()}}function W(r,e){if(1&r){const o=t.EpF();t.TgZ(0,"button",26),t.NdJ("click",function(){t.CHM(o);const n=t.oxw().$implicit,c=t.oxw();return t.KtG(c.verUsuarios(n.id,n.nombre))}),t.TgZ(1,"mat-icon"),t._uU(2,"supervised_user_circle"),t.qZA()()}}function tt(r,e){if(1&r){const o=t.EpF();t.TgZ(0,"button",27),t.NdJ("click",function(){t.CHM(o);const n=t.oxw().$implicit,c=t.oxw();return t.KtG(c.verRoles(n.id,n.nombre))}),t.TgZ(1,"mat-icon"),t._uU(2,"list_alt"),t.qZA()()}}const et=function(){return["editar-grupo"]},ot=function(){return["desactivar-grupo"]},rt=function(){return["asignar-usuario-grupo"]},nt=function(){return["asignar-rol-grupo"]};function it(r,e){1&r&&(t.TgZ(0,"mat-cell"),t.YNc(1,$,3,0,"button",18),t.YNc(2,V,3,0,"button",19),t.YNc(3,W,3,0,"button",20),t.YNc(4,tt,3,0,"button",21),t.qZA()),2&r&&(t.xp6(1),t.Q6J("ngxPermissionsOnly",t.DdM(4,et)),t.xp6(1),t.Q6J("ngxPermissionsOnly",t.DdM(5,ot)),t.xp6(1),t.Q6J("ngxPermissionsOnly",t.DdM(6,rt)),t.xp6(1),t.Q6J("ngxPermissionsOnly",t.DdM(7,nt)))}function at(r,e){1&r&&t._UZ(0,"mat-header-row")}function ct(r,e){1&r&&t._UZ(0,"mat-row",28),2&r&&t.Q6J("cdkDragData",e.$implicit)}class h{constructor(e,o,a){this.projectHomeService=e,this.groupService=o,this.dialogService=a,this.displayedColumns=["nombre","jerarquia","descripcion","options"],this.dragDisabled=!0,this.project="",this.group={id:0,jerarquia:0,nombre:"",descripcion:"",proyecto_id:0,proyecto:""},this.userData={id:0,nombre:"",usuarios:[]},this.roleData={id:0,nombre:"",roles:[]}}ngOnInit(){this.project=localStorage.getItem("project")||"",this.cargarGrupos()}drop(e){this.dragDisabled=!0,this.dataSource.find(c=>c==e.item.data);const n=this.dataSource.findIndex(c=>c==e.item.data);(0,b.bA)(this.dataSource,n,e.currentIndex),this.table.renderRows(),this.ordenarJerarquias()}ordenarJerarquias(){for(let e=0;e<this.dataSource.length;e++)for(let o=0;o<this.dataSource.length;o++)(this.dataSource[e].jerarquia>this.dataSource[o].jerarquia||this.dataSource[e].jerarquia==this.dataSource[o].jerarquia)&&(this.dataSource[e].jerarquia=this.dataSource.length-e)}desactivar(e,o){u().fire({title:"\xbfEsta seguro que desea Desactivar el rol: "+o+"?",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Si",denyButtonText:"No"}).then(a=>{a.isConfirmed?this.groupService.desactiveGroup(Number(e)).subscribe(n=>{1==n.status&&(this.cargarGrupos(),u().fire("Ok!","Rol desactivado","success"))}):a.isDenied&&u().fire("Cambios no guardados","","info")})}editar(e,o,a,n){this.group.id=Number(e),this.group.nombre=o,this.group.descripcion=a,this.group.proyecto_id=Number(n),this.dialogService.open(w.e,{height:"30rem",width:"50rem",data:this.group}).afterClosed().subscribe(pt=>{1===pt&&this.cargarGrupos()})}guardarJerarquias(){u().fire({title:"Guardar orden de los roles",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Si",denyButtonText:"No"}).then(e=>{e.isConfirmed?this.projectHomeService.guardarJerarquias(this.dataSource).subscribe(o=>{1==o.status&&(this.cargarGrupos(),u().fire("Ok!","Organizacion Actualizada","success"))}):e.isDenied&&u().fire("Cambios no guardados","","info")})}cargarGrupos(){this.projectHomeService.getGroupsProject(this.project).subscribe(e=>{this.dataSource=e;for(let o=0;o<this.dataSource.length;o++)0==this.dataSource[o].jerarquia&&(this.dataSource[o].jerarquia=this.dataSource.length-o)})}verUsuarios(e,o){this.userData.id=Number(e),this.userData.nombre=o,this.groupService.getGroupsUsers(this.userData.id).subscribe(a=>{this.userData.usuarios=a,this.dialogService.open(O.Z,{height:"30rem",width:"50rem",data:this.userData})})}verRoles(e,o){this.roleData.id=Number(e),this.roleData.nombre=o,this.groupService.getGroupsRoles(this.roleData.id).subscribe(a=>{this.roleData.roles=a,this.dialogService.open(S.a,{height:"30rem",width:"50rem",data:this.roleData})})}createGroup(){this.projectHomeService.getIdProject(this.project).subscribe(e=>{this.dialogService.open(_,{height:"22rem",width:"50rem",data:Number(e)}).afterClosed().subscribe(n=>{1===n&&this.cargarGrupos()})})}}h.\u0275fac=function(e){return new(e||h)(t.Y36(p),t.Y36(y.GroupService),t.Y36(j.uw))},h.\u0275cmp=t.Xpm({type:h,selectors:[["app-group-project"]],viewQuery:function(e,o){if(1&e&&t.Gf(F,7),2&e){let a;t.iGM(a=t.CRH())&&(o.table=a.first)}},decls:31,vars:4,consts:[[1,"header"],["mat-fab","","color","accent",3,"click"],["aria-label","add"],["mat-fab","","color","primary",3,"click"],[1,"mat-elevation-z8","table_div"],[1,"orden_label"],["mat-table","","cdkDropList","","cdkDropListData","datasource",1,"table",3,"dataSource","cdkDropListDisabled","cdkDropListDropped"],["table",""],["matColumnDef","id"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","nombre","sticky",""],["matColumnDef","jerarquia"],["matColumnDef","descripcion"],["matColumnDef","options"],[4,"matHeaderRowDef"],["cdkDrag","",3,"cdkDragData",4,"matRowDef","matRowDefColumns"],[1,"dragCursor",3,"mousedown"],["mat-icon-button","","matTooltip","Editar","matTooltipPosition","right","color","primary","class","iconbutton",3,"click",4,"ngxPermissionsOnly"],["mat-icon-button","","matTooltip","Desactivar","color","warn","class","iconbutton",3,"click",4,"ngxPermissionsOnly"],["mat-icon-button","","matTooltip","Ver usuarios","color","primary","class","iconbutton",3,"click",4,"ngxPermissionsOnly"],["mat-icon-button","","matTooltip","Ver politicas","color","primary","class","iconbutton",3,"click",4,"ngxPermissionsOnly"],["mat-icon-button","","matTooltip","Editar","matTooltipPosition","right","color","primary",1,"iconbutton",3,"click"],["aria-label","Edit"],["mat-icon-button","","matTooltip","Desactivar","color","warn",1,"iconbutton",3,"click"],["aria-label","Delete"],["mat-icon-button","","matTooltip","Ver usuarios","color","primary",1,"iconbutton",3,"click"],["mat-icon-button","","matTooltip","Ver politicas","color","primary",1,"iconbutton",3,"click"],["cdkDrag","",3,"cdkDragData"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return o.createGroup()}),t.TgZ(2,"mat-icon",2),t._uU(3,"add"),t.qZA()(),t.TgZ(4,"button",3),t.NdJ("click",function(){return o.guardarJerarquias()}),t.TgZ(5,"mat-icon"),t._uU(6,"save"),t.qZA()()(),t.TgZ(7,"div",4),t._UZ(8,"br"),t.TgZ(9,"mat-label",5)(10,"strong"),t._uU(11,"Ordene los grupos de mayor a menor"),t.qZA()(),t.TgZ(12,"table",6,7),t.NdJ("cdkDropListDropped",function(n){return o.drop(n)}),t.ynx(14,8),t.YNc(15,H,2,0,"mat-header-cell",9),t.YNc(16,I,2,1,"mat-cell",10),t.BQk(),t.ynx(17,11),t.YNc(18,B,2,0,"mat-header-cell",9),t.YNc(19,Q,5,1,"mat-cell",10),t.BQk(),t.ynx(20,12),t.YNc(21,E,2,0,"mat-header-cell",9),t.YNc(22,z,2,1,"mat-cell",10),t.BQk(),t.ynx(23,13),t.YNc(24,L,2,0,"mat-header-cell",9),t.YNc(25,K,2,1,"mat-cell",10),t.BQk(),t.ynx(26,14),t.YNc(27,X,2,0,"mat-header-cell",9),t.YNc(28,it,5,8,"mat-cell",10),t.BQk(),t.YNc(29,at,1,0,"mat-header-row",15),t.YNc(30,ct,1,1,"mat-row",16),t.qZA()()),2&e&&(t.xp6(12),t.Q6J("dataSource",o.dataSource)("cdkDropListDisabled",o.dragDisabled),t.xp6(17),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns))},dependencies:[f.hX,x.RK,x.cs,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,R.Hw,D.gM,v.gE,b.Wj,b.Zt],styles:[".table[_ngcontent-%COMP%]{width:100%;margin:0 0 3rem}.table_div[_ngcontent-%COMP%]{width:100%}.mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%;max-width:98%;margin:0 auto;display:flex}.full-width-input[_ngcontent-%COMP%]{width:100% auto;padding:1em}.example-section[_ngcontent-%COMP%]{margin:12px}.example-margin[_ngcontent-%COMP%]{margin:0 12px}ul[_ngcontent-%COMP%]{list-style-type:none;margin-top:4px}.header[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;margin:1.5rem;padding:0 .4rem;font-family:Roboto,Helvetica Neue,sans-serif}.orden_label[_ngcontent-%COMP%]{text-align:center;padding-left:2rem;color:red}.dragCursor[_ngcontent-%COMP%]{cursor:move}"]});class d{constructor(e){this.routes=e}ngOnInit(){this.project=localStorage.getItem("project")||""}}d.\u0275fac=function(e){return new(e||d)(t.Y36(C.gz))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-home-project-page"]],decls:19,vars:1,consts:[[1,"header"],["color","primary","mode","determinate","value","45"],["label","Roles"],["label","UPM'S"],["label","Asginar UPM'S a Monitor"],["label","Asginar Personal a Monitor"],["label","Equipos de Campo"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2),t.qZA(),t.TgZ(3,"div")(4,"mat-label"),t._uU(5,"Progreso Total"),t.qZA(),t._UZ(6,"mat-progress-spinner",1),t.qZA()(),t.TgZ(7,"div")(8,"mat-tab-group")(9,"mat-tab",2),t._UZ(10,"app-group-project"),t.qZA(),t.TgZ(11,"mat-tab",3),t._uU(12,"Content 2"),t.qZA(),t.TgZ(13,"mat-tab",4),t._uU(14,"Content 3"),t.qZA(),t.TgZ(15,"mat-tab",5),t._uU(16,"Content 3"),t.qZA(),t.TgZ(17,"mat-tab",6),t._uU(18,"Content 3"),t.qZA()()()),2&e&&(t.xp6(2),t.Oqu(o.project))},dependencies:[f.hX,N.Ou,P.uX,P.SP,h],styles:[".header[_ngcontent-%COMP%]{padding-top:2rem;display:flex;justify-content:space-around;align-items:center}.progress-upms[_ngcontent-%COMP%]{padding-top:3.5rem;display:flex;justify-content:space-around;flex-wrap:wrap}.upm-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;height:12rem;width:14rem}"]});const st=[{path:"",component:d}];class m{}m.\u0275fac=function(e){return new(e||m)},m.\u0275mod=t.oAB({type:m}),m.\u0275inj=t.cJS({imports:[C.Bz.forChild(st),C.Bz]});var lt=i(4657),ut=i(4385),mt=i(6709);class g{}g.\u0275fac=function(e){return new(e||g)},g.\u0275mod=t.oAB({type:g}),g.\u0275inj=t.cJS({imports:[Z.ez,m,lt.M,s.UX,ut.LD,mt.p9,D.AV,v.VI,P.Nh,b._t]})}}]);