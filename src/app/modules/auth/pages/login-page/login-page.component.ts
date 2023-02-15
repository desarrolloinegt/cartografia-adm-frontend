import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  hide = true;

  public passwordType = 'password';
  public loading = false;
  permissionsAdmin:string[]=[];
  loginForm!: FormGroup;

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private permissionService:NgxPermissionsService
  ) {
    this.buildForm();
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigateByUrl('/home');
    }
  }

  get CodigoUsuario() {
    return this.loginForm.get('codigo_usuario');
  }

  get Password() {
    return this.loginForm.get('password');
  }

  ngOnInit() {}

  sendLogin() {
    if (this.loginForm.valid) {
      this.loading = true;
      this.auth.login(this.loginForm.value).subscribe(
        (resp) => {
          if (resp.status == true) {
            this.router.navigateByUrl('/home');
            console.log(resp.proyectos);
            localStorage.setItem('id', resp.id);
            this.charguePermissionAdmin(resp.id);
          } else {
            console.log('Error Inesperado');
          }
        },
        (err) => {
          this.loading = false;
        }
      );
    }
  }

  charguePermissionAdmin(id:string){
    this.auth.getPermissionAdmin(Number(id)).subscribe(data=>{
      this.permissionsAdmin=data;
      this.permissionService.addPermission(this.permissionsAdmin);
    })
  }
  changePasswordType() {
    this.passwordType = this.passwordType == 'text' ? 'password' : 'text';
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      codigo_usuario: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
