import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IGroup, IGroupRoleAssignment, IGroupUserAssignment } from '@core/interfaces/i-group';
import { GroupRoleEditDialogComponent } from '@modules/groups/pages/group-role-edit-dialog/group-role-edit-dialog.component';
import { GroupUserEditDialogComponent } from '@modules/groups/pages/group-user-edit-dialog/group-user-edit-dialog.component';
import { GroupService } from '@modules/groups/services';
import Swal from 'sweetalert2';
import { EditGroupDialogComponent } from '../edit-group-dialog/edit-group-dialog.component';
import { NewGroupPagesComponent } from '../new-group-pages';

@Component({
  selector: 'app-group-pages',
  templateUrl: './group-pages.component.html',
  styleUrls: ['./group-pages.component.scss']
})
export class GroupPagesComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<IGroup>;
  displayedColumns: string[] = ['id', 'nombre', 'descripcion','proyecto','options'];
  groupData:IGroup={
    id:0,
    nombre:'',
    descripcion:'',
    jerarquia:0,
    proyecto:'',
    proyecto_id:0
  }
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

  constructor(private groupService:GroupService, public dialogService: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editar(id:string, nombre: string, descripcion:string,jerarquia:string,proyecto_id:string) {
    this.groupData.id=Number(id);
    this.groupData.nombre=nombre;
    this.groupData.descripcion=descripcion;
    this.groupData.jerarquia=Number(jerarquia);
    this.groupData.proyecto_id=Number(proyecto_id);
    console.log(this.groupData)
    
    const dialogRef = this.dialogService.open(EditGroupDialogComponent, {
      height: '30rem',
      width: '50rem',
      data: this.groupData
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result===1){
        this.cargarGrupos();
      } 
    });
  }

  open() {
    const dialogRef = this.dialogService.open(NewGroupPagesComponent, {
      height: '30rem',
      width: '50rem',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result==1){
        this.cargarGrupos();
      } 
    });
  }
  
  ngOnInit() {
    this.cargarGrupos();
  }

  cargarGrupos(){
    this.groupService.getGroups().subscribe((data)=>{ 
      this.dataSource=new MatTableDataSource(data);
    });
  }

  desactivar(id: string, nombre: string) {
    Swal.fire({
      title: '¿Esta seguro que desea Desactivar el grupo: ' + nombre + '?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        /*this.surveyService.desactiveSurvey(Number(id)).subscribe((resp) => {
          if (resp.status == true) {
            this.cargarEncuestas();
            Swal.fire('Ok!', resp.message, 'success')  
          }
        },(err) => {
          console.log(err);
        }); */
      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info')
      }
    })
  }

  verUsuarios(idProyecto:string,nombre:string){
    this.userData.id=Number(idProyecto);
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

  verRoles(idProyecto:string,nombre:string){
    this.roleData.id=Number(idProyecto);
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
}
