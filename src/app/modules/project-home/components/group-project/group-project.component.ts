import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as XLSX from 'xlsx';
import { MatTable } from '@angular/material/table';
import { IGroup, IGroupRoleAssignment, IGroupUserAssignment, IGroupUserAssignmentFile } from '@core/interfaces/i-group';
import { GroupService } from '@modules/groups';
import { EditGroupDialogComponent } from '@modules/groups/pages/edit-group-dialog/edit-group-dialog.component';
import { GroupRoleEditDialogComponent } from '@modules/groups/pages/group-role-edit-dialog';
import { GroupUserEditDialogComponent } from '@modules/groups/pages/group-user-edit-dialog';
import { ProjectHomeService } from '@modules/project-home/services/project-home.service';
import Swal from 'sweetalert2';
import { NewGroupProjectComponent } from '../dialogs/new-group-project/new-group-project.component';
type AOA = any[];
@Component({
  selector: 'app-group-project',
  templateUrl: './group-project.component.html',
  styleUrls: ['./group-project.component.scss']
})
export class GroupProjectComponent {
  @ViewChild('table', { static: true }) table!: MatTable<IGroup>;
  dataSource!: IGroup[];
  data: AOA = [];
  displayedColumns: string[] = ['nombre', 'descripcion', 'options'];
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
    username: '',
    grupo_id: 0,
  }
  roleData: IGroupRoleAssignment = {
    id: 0,
    nombre: '',
    roles: [],
  }

  userDataFile:IGroupUserAssignmentFile={
    grupo_id:0,
    usuarios:[],
  }

  constructor(private projectHomeService: ProjectHomeService, private groupService: GroupService, private dialogService: MatDialog) {
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

  editar(id: string, nombre: string, descripcion: string, proyecto_id: string) {
    this.group.id = Number(id);
    this.group.nombre = nombre;
    this.group.descripcion = descripcion;
    this.group.proyecto_id = Number(proyecto_id);
    const dialogRef = this.dialogService.open(EditGroupDialogComponent, {
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
    const { value: username } = await Swal.fire({
      title: 'Usuario',
      input: "text",
      inputPlaceholder: "juan2022",
      confirmButtonText: 'Agregar Usuario',
      showCancelButton: true,
      inputLabel: 'Ingrese el nombre de usuario',
    })
    if (username) {
      this.userData.grupo_id = Number(id);
      this.userData.username = username;
      this.groupService.addUserToGroup(this.userData).subscribe(resp => {
        if (resp.status == true) {
          Swal.fire('Ok!', resp.message, 'success');
        }
      });
    }
  }
  async addFile(id:string){
    const { value: file } = await Swal.fire({
      title: 'Seleccione archivo',
      input: 'file',
      inputAttributes: {
        'accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      }
    })
    
    if (file) {
      this.userDataFile.grupo_id=Number(id);
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
    this.data.forEach(dto=>{
      this.userDataFile.usuarios.push(dto.toString());
    })
    
    this.groupService.assignGroupUsersFile(this.userDataFile).subscribe(resp=>{
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
      for (let i = 0; i < this.dataSource.length; i++) {
        if (this.dataSource[i].jerarquia == 0) {
          this.dataSource[i].jerarquia = (this.dataSource.length) - i;
        }
      }
    });
  }

  verUsuarios(id: string, nombre: string) {
    this.userData.grupo_id = Number(id);
    const dialogRef = this.dialogService.open(GroupUserEditDialogComponent, {
      height: '40rem',
      width: '50rem',
      data: this.userData
    });

  }

  verRoles(id: string, nombre: string) {
    this.roleData.id = Number(id);
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

  createGroup() {
    this.projectHomeService.getIdProject(this.project).subscribe(data => {
      let proyecto_id = data;
      const dialogRef = this.dialogService.open(NewGroupProjectComponent, {
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
