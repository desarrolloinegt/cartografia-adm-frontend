import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-roles-edit',
  templateUrl: './roles-edit.component.html',
  styleUrls: ['./roles-edit.component.scss']
})
export class RolesEditComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<string>;
  displayedColumns: string[] = ['idRol', 'rol', 'permisos', 'options'];

  constructor(private formBuilder: FormBuilder, public dialogService: MatDialog) {
    this.dataSource = new MatTableDataSource();
    //this.buildForm();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  editar(id: string, DPI: string, nombres: string, apellidos: string, email: string, codigo_usuario: string, username: string) {
    /*const dialogRef = this.dialogService.open(EditUserComponent, {
      height: '50rem',
      width: '60rem',
      data: { id: id, DPI: DPI, nombres: nombres, apellidos: apellidos, email: email, codigo_usuario: codigo_usuario, username: username }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result===1){
        this.cargarUsuarios();
      } 
    });*/
  }
  ngOnInit() {
    this.cargarRoles();
  }

  cargarRoles(){

  }
  desactivar(id: string, rol: string) {
    Swal.fire({
      title: '¿Esta seguro que desea Desactivar el rol: ' + rol + '?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      /*if (result.isConfirmed) {
        this.userServide.desactiveUser(Number(id)).subscribe((resp) => {
          if (resp.status == true) {
            this.cargarUsuarios();
            Swal.fire('Ok!', 'Usuario Desactivado', 'success')  
          }
        },(err) => {
          this.loading = false;
          console.log(err);
        }); 
      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info')
      }*/
    })
  }
}
