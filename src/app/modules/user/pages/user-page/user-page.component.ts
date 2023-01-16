import { Component, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '@modules/user/services';
import { IUser } from '@core/interfaces/i-user';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { EditUserComponent } from '@modules/user/pages/edit-user/edit-user.component';
export interface UserData {
  id: string;
  DPI: string;
  nombres: string;
  apellidos: string;
  username: string;
  email: string;
  codigo_usuario: string;
}

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {
  hide = true;
  public passwordType = 'password';
  public loading = false;

  registerForm!: FormGroup;
  displayedColumns: string[] = ['id', 'DPI', 'nombres', 'apellidos', 'username', 'email', 'codigo_usuario', 'options'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userServide: UserService, private formBuilder: FormBuilder, public dialogService: MatDialog) {
    this.dataSource = new MatTableDataSource();
    this.buildForm();
  }
  ngOnInit() {
    this.cargarUsuarios();
  }


  private buildForm() {
    this.registerForm = this.formBuilder.group({
      DPI: ['', [Validators.required, Validators.pattern(/^((\\+91-?)|0)?[0-9]{13}$/)]],
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      codigo_usuario: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=.*[$@$!%*?&])(?=[^A-Z]*[A-Z]).{8,30}$/)]],
      passwordConfirm: ['', [Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=.*[$@$!%*?&])(?=[^A-Z]*[A-Z]).{8,30}$/), PasswordValidation.MatchPassword]],
      username: ['', [Validators.required]]
    });
  }
  cargarUsuarios() {
    this.userServide.getAllUsers().subscribe(data => {
      this.dataSource =new MatTableDataSource(data);
    });
  }
  get DPI() {
    return this.registerForm.get('DPI');
  }

  get Nombres() {
    return this.registerForm.get('nombres');
  }
  get Email() {
    return this.registerForm.get('email');
  }
  get CodigoUsuario() {
    return this.registerForm.get('codigo_usuario');
  }
  get Password() {
    return this.registerForm.get('password');
  }
  get PasswordConfirm() {
    return this.registerForm.get('passwordConfirm');
  }
  get Username() {
    return this.registerForm.get('username');
  }
  get Apellidos() {
    return this.registerForm.get('apellidos');
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
  user!: IUser;
  registerUser() {
    if (this.registerForm.valid) {
      this.user = this.registerForm.value;
      this.userServide.newUser(this.user).subscribe((resp) => {
        if (resp.status == true) {
          this.cargarUsuarios();
          Swal.fire('Ok!', resp.message, 'success')
        }
      }, (err) => {
        this.loading = false;
        console.log(err);
      });
    }
  }

  editar(id: string, DPI: string, nombres: string, apellidos: string, email: string, codigo_usuario: string, username: string) {
    const dialogRef = this.dialogService.open(EditUserComponent, {
      height: '50rem',
      width: '60rem',
      data: { id: id, DPI: DPI, nombres: nombres, apellidos: apellidos, email: email, codigo_usuario: codigo_usuario, username: username }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result===1){
        this.cargarUsuarios();
      } 
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
      }
    })
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

