import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IGroup, IGroupRoleAssignment, IGroupUserAssignment, IGroupUserAssignmentFile } from '@core/interfaces/i-group';
import { RolUserEditDialogComponent } from '../rol-user-edit-dialog';
import { PolicyRoleEditDialogComponent } from '../rol-policy-edit-dialog';
import { RolService } from '@modules/rol/services';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import { EditRolDialogComponent } from '../edit-rol-dialog/edit-rol-dialog.component';
import { NewRolPagesComponent } from '../new-rol-pages';
type AOA = any[];
@Component({
  selector: 'app-group-pages',
  templateUrl: './rol-pages.component.html',
  styleUrls: ['./rol-pages.component.scss']
})
export class RolPagesComponent {
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
    proyecto:''
  }
  constructor(private rolService: RolService, public dialogService: MatDialog) {
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
    const dialogRef = this.dialogService.open(EditRolDialogComponent, {
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
    const dialogRef = this.dialogService.open(NewRolPagesComponent, {
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
    this.rolService.getGroups().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
  }

  desactivar(id: string, nombre: string) {
    Swal.fire({
      title: 'Esta accion eliminara todos los usuarios que se encuentren asignados a este rol y todas las asignaciones'
      +' de upms y personal a dichos usuarios. ¿Esta seguro que desea Desactivar el rol: ' + nombre + '?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.rolService.desactiveGroup(Number(id)).subscribe((resp) => {
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
    const dialogRef = this.dialogService.open(RolUserEditDialogComponent, {
      height: '40rem',
      width: '50rem',
      data: this.userRolData
    });

  }

  verRoles(idProyecto: string, nombre: string) {
    this.roleData.id = Number(idProyecto);
    this.roleData.nombre = nombre;
    this.rolService.getGroupsRoles(this.roleData.id).subscribe(data => {
      this.roleData.roles = data;
      const dialogRef = this.dialogService.open(PolicyRoleEditDialogComponent, {
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
      this.rolService.addUserToGroup(this.userRolData).subscribe(resp=>{
        if(resp.status==true){
          Swal.fire('Ok!', resp.message, 'success');
        }
      });
    }
  }

  async addFile(id:string,proyecto:string){
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
      this.userDataFile.proyecto=proyecto;
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
      this.userDataFile.usuarios.push(dto[0]);
    })
    this.userDataFile.usuarios=this.userDataFile.usuarios.filter(Boolean);
    this.rolService.assignGroupUsersFile(this.userDataFile).subscribe(resp=>{
      if(resp.status==true){
        Swal.fire('Ok',resp.message,'success');
      }
    })
  }
}
