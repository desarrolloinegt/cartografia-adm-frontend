import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotPasswordService } from '@modules/auth/services/forgot-password.service';
import { PasswordValidation } from '@modules/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  passwordType = 'password';
  emailForm!: FormGroup;
  verifyForm!: FormGroup;
  changuePasswordForm!: FormGroup;
  step: number;
  constructor(private router: Router,private formBuilder: FormBuilder, private forgotPassService: ForgotPasswordService) {
    this.step = 0;
    this.buildForm();
  }

  private buildForm() {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  private buildFormVerify() {
    this.verifyForm = this.formBuilder.group({
      email: [this.Email?.value, [Validators.required, Validators.email]],
      token: ['', [Validators.required]]
    });
  }
  changePasswordType() {
    this.passwordType = this.passwordType == 'text' ? 'password' : 'text';
  }
  private buildFormChangePassword() {
    this.changuePasswordForm = this.formBuilder.group({
      email: [this.Email?.value, [Validators.required, Validators.email]],
      token: [this.Token?.value, [Validators.required]],
      password: ['', [Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=.*[$@$!%*?&])(?=[^A-Z]*[A-Z]).{8,30}$/)]],
      passwordConfirm: ['', [Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=.*[$@$!%*?&])(?=[^A-Z]*[A-Z]).{8,30}$/), PasswordValidation.MatchPassword]],
    })
  }
  get Email() {
    return this.emailForm.get('email');
  }

  get Token() {
    return this.verifyForm.get('token');
  }

  get Password() {
    return this.changuePasswordForm.get('password');
  }

  get PasswordConfirm() {
    return this.changuePasswordForm.get('passwordConfirm');
  }
  sendEmail() {
    if (this.emailForm.valid) {
      this.forgotPassService.sendEmail(this.emailForm.value).subscribe((resp) => {
        if (resp.status == true) {
          Swal.fire('Ok!', resp.message, 'success')
          this.step = 1;
          this.buildFormVerify();
        }
      });
    }
  }

  prevStep() {
    this.step = 0;
  }
  verify() {
    if (this.verifyForm.valid) {
      this.forgotPassService.verify(this.verifyForm.value).subscribe((resp) => {
        if (resp.status == true) {
          Swal.fire('Ok!', resp.message, 'success')
          this.step = 2;
          this.buildFormChangePassword();
        }
      });
    }
  }
  changuePassword() {
    if(this.changuePasswordForm.valid){
      this.forgotPassService.changuePassword(this.changuePasswordForm.value).subscribe((resp)=>{
        if(resp.status==true){
          Swal.fire('Ok!', resp.message, 'success');
          this.router.navigateByUrl('auth/login');
        }
      });
    }
  }
  submit() {

  }
}
