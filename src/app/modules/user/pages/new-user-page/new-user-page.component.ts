import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '@core/interfaces/i-user';
import { UserService } from '@modules/user/services';
import Swal from 'sweetalert2';
import { PasswordValidation } from '../user-page';

@Component({
  selector: 'app-new-user-page',
  templateUrl: './new-user-page.component.html',
  styleUrls: ['./new-user-page.component.scss']
})
export class NewUserPageComponent {
  registerForm!: FormGroup;
  constructor(private userServide: UserService, private formBuilder: FormBuilder){
    this.buildForm();
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
  user!: IUser;
  registerUser() {
    if (this.registerForm.valid) {
      this.user = this.registerForm.value;
      this.userServide.newUser(this.user).subscribe((resp) => {
        if (resp.status == true) {
          Swal.fire('Ok!', resp.message, 'success')
        }
      }, (err) => {
        console.log(err);
      });
    }
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
}
