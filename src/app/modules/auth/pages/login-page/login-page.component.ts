import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  hide = true;

  public passwordType = 'password';
  public loading = false;

  loginForm!: FormGroup;

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.buildForm();
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigateByUrl('/home');
    }
  }

  get Username() {
    return this.loginForm.get('username');
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
            localStorage.setItem('projects', JSON.stringify(resp.proyectos));
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

  changePasswordType() {
    this.passwordType = this.passwordType == 'text' ? 'password' : 'text';
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
