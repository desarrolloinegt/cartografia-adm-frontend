import { Component, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '@modules/user/services';
import { IUser } from '@core/interfaces/i-user';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog';
import { NewUserPageComponent } from '../new-user-page';
import { IRoleUserAssignment } from '@core/interfaces/i-role';
import { RolesUserDialogComponent } from '../roles-user-dialog/roles-user-dialog.component';
export interface UserData {
  id: string;
  DPI: string;
  nombres: string;
  apellidos: string;
  username: string;
  description: string;
  phone: string;
  email: string;
  codigo_usuario: string;
}

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent {
  hide = true;
  public passwordType = 'password';
  public loading = false;

  displayedColumns: string[] = [
    'codigo_usuario',
    'DPI',
    'nombres',
    'apellidos',
    'description',
    'phone',
    'email',
    'options',
  ];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  roleUserData:IRoleUserAssignment={
    id:0,
    nombre:'',
    roles:[]
  }
  constructor(
    private userServide: UserService,
    private formBuilder: FormBuilder,
    public dialogService: MatDialog
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.userServide.getAllUsers().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  open() {
    const dialogRef = this.dialogService.open(NewUserPageComponent, {
      height: '58rem',
      width: '60rem',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == 1) {
        this.cargarUsuarios();
      }
    });
  }

  editar(
    id: string,
    DPI: string,
    nombres: string,
    apellidos: string,
    description: string,
    phone: string,
    email: string,
    codigo_usuario: string,
    username: string
  ) {
    const dialogRef = this.dialogService.open(EditUserDialogComponent, {
      height: '60rem',
      width: '60rem',
      data: {
        id: id,
        DPI: DPI,
        nombres: nombres,
        apellidos: apellidos,
        description: description,
        phone: phone,
        email: email,
        codigo_usuario: codigo_usuario,
        username: username,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        this.cargarUsuarios();
      }
    });
  }

  rolesUser(id: string, nombre: string) {
    this.roleUserData.id=Number(id),
    this.roleUserData.nombre=nombre;
    this.userServide.getUserPolicys(this.roleUserData.id).subscribe((resp)=>{
      this.roleUserData.roles=resp;
      const dialogRef = this.dialogService.open(RolesUserDialogComponent, {
        height: '40rem',
        width: '40rem',
        data: this.roleUserData,
      });
    });
    
  }

  desactivar(id: string, username: string) {
    Swal.fire({
      title: '¿Esta seguro que desea Desactivar el usuario: ' + username + '?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.userServide.desactiveUser(Number(id)).subscribe(
          (resp) => {
            if (resp.status == true) {
              this.cargarUsuarios();
              Swal.fire('Ok!', 'Usuario Desactivado', 'success');
            }
          },
          (err) => {
            this.loading = false;
            console.log(err);
          }
        );
      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info');
      }
    });
  }
}
export class PasswordValidation {
  static MatchPassword(AC: AbstractControl) {
    const formGroup = AC.parent;
    if (formGroup) {
      const passwordControl = formGroup.get('password'); // to get value in input tag
      const confirmPasswordControl = formGroup.get('passwordConfirm'); // to get value in input tag

      if (passwordControl && confirmPasswordControl) {
        const password = passwordControl.value;
        const confirmPassword = confirmPasswordControl.value;
        if (password !== confirmPassword) {
          return { matchPassword: true };
        } else {
          return null;
        }
      }
    }
    return null;
  }
}

export class PhoneValidation {
  static MatchPhone(AC: AbstractControl) {
    const formGroup = AC.parent;
    if (formGroup) {
      const phoneControl = formGroup.get('phone'); // to get value in input tag
      const confirmPhoneControl = formGroup.get('phoneConfirm'); // to get value in input tag

      if (phoneControl && confirmPhoneControl) {
        const phone = phoneControl.value;
        const confirmPhone = confirmPhoneControl.value;
        if (phone !== confirmPhone) {
          return { matchPhone: true };
        } else {
          return null;
        }
      }
    }
    return null;
  }
}
