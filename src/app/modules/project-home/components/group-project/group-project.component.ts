import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { IGroup, IGroupRoleAssignment, IGroupUserAssignment } from '@core/interfaces/i-group';
import { GroupService } from '@modules/groups';
import { EditGroupDialogComponent } from '@modules/groups/pages/edit-group-dialog/edit-group-dialog.component';
import { GroupRoleEditDialogComponent } from '@modules/groups/pages/group-role-edit-dialog';
import { GroupUserEditDialogComponent } from '@modules/groups/pages/group-user-edit-dialog';
import { ProjectHomeService } from '@modules/project-home/services/project-home.service';
import { ProjectService } from '@modules/project/services/project.service';
import Swal from 'sweetalert2';
import { NewGroupProjectComponent } from '../dialogs/new-group-project/new-group-project.component';

@Component({
  selector: 'app-group-project',
  templateUrl: './group-project.component.html',
  styleUrls: ['./group-project.component.scss']
})
export class GroupProjectComponent {
  @ViewChild('table', { static: true }) table!: MatTable<IGroup>;
  dataSource!:IGroup[];
  displayedColumns: string[] = ['nombre', 'jerarquia','descripcion','options'];
  dragDisabled=true;
  project:string='';
  group:IGroup={
    id:0,
    jerarquia:0,
    nombre:'',
    descripcion:'',
    proyecto_id:0,
    proyecto:''
  };

  userData:IGroupUserAssignment={
    id:0,
    nombre:'',
    usuarios:[]
  }
  roleData:IGroupRoleAssignment={
    id:0,
    nombre:'',
    roles:[],
  }

  constructor(private projectHomeService:ProjectHomeService,private groupService:GroupService,private dialogService:MatDialog){
  }

  ngOnInit(): void{
    this.project=localStorage.getItem('project')||'';
    this.cargarGrupos();
  }

  drop(event: CdkDragDrop<string>){
    let lenght=this.dataSource.length;
    this.dragDisabled=true;
    const group=this.dataSource.find((i)=>i==event.item.data)||this.group;
    const previousIndex=this.dataSource.findIndex((i)=>i==event.item.data);
    moveItemInArray(this.dataSource,previousIndex,event.currentIndex);
    this.table.renderRows();
    this.ordenarJerarquias();
  }
  ordenarJerarquias(){
    for (let i = 0; i < this.dataSource.length; i++) {
      for (let j = 0; j < this.dataSource.length; j++){
        if(this.dataSource[i].jerarquia>this.dataSource[j].jerarquia || this.dataSource[i].jerarquia==this.dataSource[j].jerarquia){
          this.dataSource[i].jerarquia=this.dataSource.length-i;
        }
      }  
    }
  }
  desactivar(id:string,nombre:string){
    Swal.fire({
      title: '¿Esta seguro que desea Desactivar el rol: ' + nombre + '?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.groupService.desactiveGroup(Number(id)).subscribe((resp)=>{
          if(resp.status==true){
            this.cargarGrupos();
            Swal.fire('Ok!','Rol desactivado','success');
          }
        });
      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info')
      }
    })
  }

  editar(id:string,nombre:string,descripcion:string,proyecto_id:string){
    this.group.id=Number(id);
    this.group.nombre=nombre;
    this.group.descripcion=descripcion;
    this.group.proyecto_id=Number(proyecto_id);
    const dialogRef = this.dialogService.open(EditGroupDialogComponent, {
      height: '30rem',
      width: '50rem',
      data: this.group
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result===1){
        this.cargarGrupos();
      } 
    });
  }

  guardarJerarquias(){
    Swal.fire({
      title: 'Guardar orden de los roles',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => { 
      if (result.isConfirmed) {
        this.projectHomeService.guardarJerarquias(this.dataSource).subscribe((resp) => {
          if (resp.status == true) {
            this.cargarGrupos();
            Swal.fire('Ok!',"Organizacion Actualizada", 'success')  
          }
        });
      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info')
      }
    })
  }
  cargarGrupos(){
    this.projectHomeService.getGroupsProject(this.project).subscribe(data=>{
      this.dataSource=data;
      for (let i=0; i<this.dataSource.length; i++) {
          if(this.dataSource[i].jerarquia==0){
            this.dataSource[i].jerarquia=(this.dataSource.length)-i;
          } 
      }
    });
  }

  verUsuarios(id:string, nombre:string){
    this.userData.id=Number(id);
    this.userData.nombre=nombre;
    this.groupService.getGroupsUsers(this.userData.id).subscribe(data=>{
      this.userData.usuarios=data;
      const dialogRef = this.dialogService.open(GroupUserEditDialogComponent, {
        height: '30rem',
        width: '50rem',
        data: this.userData
      });
    })
  }

  verRoles(id:string,nombre:string){
    this.roleData.id=Number(id);
    this.roleData.nombre=nombre;
    this.groupService.getGroupsRoles(this.roleData.id).subscribe(data=>{
      this.roleData.roles=data;
      const dialogRef = this.dialogService.open(GroupRoleEditDialogComponent, {
        height: '30rem',
        width: '50rem',
        data: this.roleData
      }); 
    })  
  }

  createGroup(){
    this.projectHomeService.getIdProject(this.project).subscribe(data=>{
      let proyecto_id=data;
      const dialogRef = this.dialogService.open(NewGroupProjectComponent, {
        height: '22rem',
        width: '50rem',
        data:Number(proyecto_id)
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result===1){
          this.cargarGrupos();
        } 
      });
    });
    
  }
}
