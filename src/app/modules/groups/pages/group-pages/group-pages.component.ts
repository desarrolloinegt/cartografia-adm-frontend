import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IGroup, IGroupRoleAssignment, IGroupUserAssignment, IGroupUserAssignmentFile } from '@core/interfaces/i-group';
import { GroupRoleEditDialogComponent } from '@modules/groups/pages/group-role-edit-dialog/group-role-edit-dialog.component';
import { GroupUserEditDialogComponent } from '@modules/groups/pages/group-user-edit-dialog/group-user-edit-dialog.component';
import { GroupService } from '@modules/groups/services';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import { EditGroupDialogComponent } from '../edit-group-dialog/edit-group-dialog.component';
import { NewGroupPagesComponent } from '../new-group-pages';
type AOA = any[];
@Component({
  selector: 'app-group-pages',
  templateUrl: './group-pages.component.html',
  styleUrls: ['./group-pages.component.scss']
})
export class GroupPagesComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<IGroup>;
  data: AOA = [];
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'proyecto', 'options'];
  groupData: IGroup = {
    id: 0,
    nombre: '',
    descripcion: '',
    jerarquia: 0,
    proyecto: '',
    proyecto_id: 0
  }
  userRolData: IGroupUserAssignment = {
    nombres: '',
    rol_id:0,
    apellidos:'',
    codigo_usuario:0,
    proyecto:''
  }
  roleData: IGroupRoleAssignment = {
    id: 0,
    nombre: '',
    roles: [],
  }
  userDataFile:IGroupUserAssignmentFile={
    rol_id:0,
    usuarios:[],
  }
  constructor(private groupService: GroupService, public dialogService: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editar(id: string, nombre: string, descripcion: string, jerarquia: string, proyecto_id: string) {
    this.groupData.id = Number(id);
    this.groupData.nombre = nombre;
    this.groupData.descripcion = descripcion;
    this.groupData.jerarquia = Number(jerarquia);
    this.groupData.proyecto_id = Number(proyecto_id);
    const dialogRef = this.dialogService.open(EditGroupDialogComponent, {
      height: '20rem',
      width: '50rem',
      data: this.groupData
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
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
      if (result == 1) {
        this.cargarGrupos();
      }
    });
  }

  ngOnInit() {
    this.cargarGrupos();
  }

  cargarGrupos() {
    this.groupService.getGroups().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  desactivar(id: string, nombre: string) {
    Swal.fire({
      title: '¿Esta seguro que desea Desactivar el rol: ' + nombre + '?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.groupService.desactiveGroup(Number(id)).subscribe((resp) => {
          if (resp.status == true) {
            this.cargarGrupos();
            Swal.fire('Ok!', 'Rol desactivado', 'success');
          }
        });
      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info')
      }
    })
  }

  verUsuarios(idProyecto: string, nombre: string) {
    this.userRolData.rol_id = Number(idProyecto);
    const dialogRef = this.dialogService.open(GroupUserEditDialogComponent, {
      height: '40rem',
      width: '50rem',
      data: this.userRolData
    });

  }

  verRoles(idProyecto: string, nombre: string) {
    this.roleData.id = Number(idProyecto);
    this.roleData.nombre = nombre;
    this.groupService.getGroupsRoles(this.roleData.id).subscribe(data => {
      this.roleData.roles = data;
      const dialogRef = this.dialogService.open(GroupRoleEditDialogComponent, {
        height: '30rem',
        width: '50rem',
        data: this.roleData
      });
    })
  }

  async addUser(id:string,proyecto:string){
    const { value: codigo_usuario } = await Swal.fire({
      title: 'Usuario',
      input:"number",
      inputPlaceholder:"9875",
      confirmButtonText: 'Agregar Usuario',
      showCancelButton: true,
      cancelButtonText:"Cancelar",
      inputLabel: 'Ingrese el codigo de usuario',
    })
    if (codigo_usuario) {
      this.userRolData.rol_id=Number(id);
      this.userRolData.codigo_usuario=codigo_usuario;
      this.userRolData.proyecto=proyecto;
      console.log(this.userRolData)
      this.groupService.addUserToGroup(this.userRolData).subscribe(resp=>{
        if(resp.status==true){
          Swal.fire('Ok!', resp.message, 'success');
        }
      });
    }
  }

  async addFile(id:string){
    const { value: file } = await Swal.fire({
      html:'<label>El archivo debe tener una lista con los codigo de usuario</label>',
      title: 'Seleccione archivo',
      input: 'file',
      inputAttributes: {
        'accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      }
    })
    
    if (file) {
      this.userDataFile.rol_id=Number(id);
      const reader: FileReader = new FileReader();
      reader.onload = (e:any) => {
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
  
        /* grab first sheet */
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];
        /* save data */
        this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
        this.generateJsonUsers();
      }
      reader.readAsBinaryString(file);
    }
  }

  generateJsonUsers(){
    this.userDataFile.usuarios=[];
    this.data.forEach(dto=>{
      this.userDataFile.usuarios.push(dto.toString());
    })
    this.userDataFile.usuarios=this.userDataFile.usuarios.filter(Boolean);
    this.groupService.assignGroupUsersFile(this.userDataFile).subscribe(resp=>{
      if(resp.status==true){
        Swal.fire('Ok',resp.message,'success');
      }
    })
  }
}
