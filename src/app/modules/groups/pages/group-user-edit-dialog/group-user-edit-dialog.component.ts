import { Component, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IGroupUserAssignment } from '@core/interfaces/i-group';
import { IUserList } from '@core/interfaces/i-user';
import { GroupService } from '@modules/groups/services';
import { UserService } from '@modules/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-group-user-edit-dialog',
  templateUrl: './group-user-edit-dialog.component.html',
  styleUrls: ['./group-user-edit-dialog.component.scss']
})
export class GroupUserEditDialogComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<String>;

  userData: IGroupUserAssignment = {
    rol_id: 0,
    nombres: '',
    apellidos:'',
    codigo_usuario:0,
    proyecto:''
  }
  displayedColumns: string[] = ['codigo_usuario','nombres','apellidos', 'options'];
  constructor(private userService: UserService, private groupService: GroupService, public dialogRef: MatDialogRef<IGroupUserAssignment>, @Inject(MAT_DIALOG_DATA) public data: IGroupUserAssignment, private formBuilder: FormBuilder) {
    this.dataSource = new MatTableDataSource();
    this.getUsers();
  }

  submit() { }

  editGroup() {

  }

  getUsers() {
    this.groupService.getGroupsUsers(this.data.rol_id).subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  cancelEdit() {
    this.dialogRef.close();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  eliminarUsuario(id:string,nombres: string,apellidos:string) {
    Swal.fire({
      title: 'Esta accion eliminara todas las asignaciones de personal y upm en la que se encuentre el usuario'+
      ' ¿Esta seguro que desea eliminar el usuario: ' + nombres +' '+apellidos+ ' de este grupo?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.userData.rol_id = this.data.rol_id;
        this.userData.codigo_usuario = Number(id);
        this.groupService.deleteUserToGroup(this.userData).subscribe(resp => {
          if (resp.status == true) {
            Swal.fire('Ok', resp.message, 'success');
            this.getUsers();
          }
        });
      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info')
      }
    })

  }
}
