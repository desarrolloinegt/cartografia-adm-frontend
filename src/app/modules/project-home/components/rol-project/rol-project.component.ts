import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as XLSX from 'xlsx';
import { MatTable } from '@angular/material/table';
import { IGroup, IGroupRoleAssignment, IGroupUserAssignment, IGroupUserAssignmentFile } from '@core/interfaces/i-group';
import { EditRolDialogComponent } from '@modules/rol/pages/edit-rol-dialog/edit-rol-dialog.component';
import { PolicyRoleEditDialogComponent } from '@modules/rol/pages/rol-policy-edit-dialog';
import { RolUserEditDialogComponent } from '@modules/rol/pages/rol-user-edit-dialog';
import { ProjectHomeService } from '@modules/project-home/services/project-home.service';
import Swal from 'sweetalert2';
import { NewRolProjectComponent } from '../dialogs/new-group-project/new-rol-project.component';
import { RolService } from '@modules/rol';
type AOA = any[];
@Component({
  selector: 'app-group-project',
  templateUrl: './rol-project.component.html',
  styleUrls: ['./rol-project.component.scss']
})
export class RolProjectComponent {
  @ViewChild('table', { static: true }) table!: MatTable<IGroup>;
  dataSource!: IGroup[];
  data: AOA = [];
  displayedColumns: string[] = ['nombre','jerarquia', 'descripcion', 'options'];
  dragDisabled = true;
  project: string = '';
  group: IGroup = {
    id: 0,
    jerarquia: 0,
    nombre: '',
    descripcion: '',
    proyecto_id: 0,
    proyecto: ''
  };

  userData: IGroupUserAssignment = {
    nombres: '',
    rol_id: 0,
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

  constructor(private projectHomeService: ProjectHomeService, private rolService: RolService, private dialogService: MatDialog) {
  }

  ngOnInit(): void {
    this.project = localStorage.getItem('project') || '';
    this.cargarGrupos();
  }

  drop(event: CdkDragDrop<string>) {
    let lenght = this.dataSource.length;
    this.dragDisabled = true;
    const group = this.dataSource.find((i) => i == event.item.data) || this.group;
    const previousIndex = this.dataSource.findIndex((i) => i == event.item.data);
    moveItemInArray(this.dataSource, previousIndex, event.currentIndex);
    this.table.renderRows();
    this.ordenarJerarquias();
  }
  ordenarJerarquias() {
    for (let i = 0; i < this.dataSource.length; i++) {
      for (let j = 0; j < this.dataSource.length; j++) {
        if (this.dataSource[i].jerarquia > this.dataSource[j].jerarquia || this.dataSource[i].jerarquia == this.dataSource[j].jerarquia) {
          this.dataSource[i].jerarquia = this.dataSource.length - i;
        }
      }
    }
  }
  desactivar(id: string, nombre: string) {
    Swal.fire({
      title: '¿Está seguro que desea desactivar el rol: ' + nombre + '?',
      text: "¡Esta acción eliminará todos los usuarios que se encuentran asignados a este rol y todas las asignaciones de las tablas Personal y UPM!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Desactivar',
      cancelButtonText: 'Cancelar'
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

  editar(id: string, nombre: string, descripcion: string, proyecto_id: string) {
    this.group.id = Number(id);
    this.group.nombre = nombre;
    this.group.descripcion = descripcion;
    this.group.proyecto_id = Number(proyecto_id);
    const dialogRef = this.dialogService.open(EditRolDialogComponent, {
      height: '20rem',
      width: '50rem',
      data: this.group
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.cargarGrupos();
      }
    });
  }
  async addUser(id: string) {
    const { value: codigo_usuario } = await Swal.fire({
      title: 'Usuario',
      input: "number",
      inputPlaceholder: "juan2022",
      confirmButtonText: 'Agregar Usuario',
      showCancelButton: true,
      cancelButtonText:"Cancelar",
      inputLabel: 'Ingrese el codigo de usuario',
    })
    if (codigo_usuario) {
      this.userData.rol_id = Number(id);
      this.userData.proyecto=this.project;
      this.userData.codigo_usuario = codigo_usuario;
      this.rolService.addUserToGroup(this.userData).subscribe(resp => {
        if (resp.status == true) {
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
      this.userDataFile.proyecto=this.project;
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

  async generateJsonUsers(){
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
  guardarJerarquias() {
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
            Swal.fire('Ok!', "Organizacion Actualizada", 'success')
          }
        });
      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info')
      }
    })
  }
  cargarGrupos() {
    this.projectHomeService.getGroupsProject(this.project).subscribe(data => {
      this.dataSource = data;
    });
  }

  verUsuarios(id: string, nombre: string) {
    this.userData.rol_id = Number(id);
    const dialogRef = this.dialogService.open(RolUserEditDialogComponent, {
      height: '40rem',
      width: '50rem',
      data: this.userData
    });

  }

  verRoles(id: string, nombre: string) {
    this.roleData.id = Number(id);
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

  createGroup() {
    this.projectHomeService.getIdProject(this.project).subscribe(data => {
      let proyecto_id = data;
      const dialogRef = this.dialogService.open(NewRolProjectComponent, {
        height: '22rem',
        width: '50rem',
        data: Number(proyecto_id)
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result === 1) {
          this.cargarGrupos();
        }
      });
    });

  }
}
