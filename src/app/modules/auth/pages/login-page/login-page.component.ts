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

  loginForm!: FormGroup;

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.buildForm();
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
      this.auth.login(this.loginForm.value).subscribe(
        (resp) => {
          if (resp.status == true) {
            this.router.navigateByUrl('/home');
          } else {
            console.log('Error Inesperado');
          }
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
