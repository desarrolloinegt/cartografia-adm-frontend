import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '@modules/user/services';
import Swal from 'sweetalert2';
import { PasswordValidation } from '../user-page';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss']
})
export class EditUserDialogComponent {
  hide = true;
  public passwordType = 'password';
  public loading = false;
  public checked = false;
  constructor(public dialogRef:MatDialogRef<EditUserDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private userService: UserService, private formBuilder: FormBuilder) {
    this.buildForm();
  }
  ngOnInit() {}

  editForm!: FormGroup;
  private buildForm() {
    this.editForm = this.formBuilder.group({
      id:[this.data.id,[Validators.required]],
      DPI: [this.data.DPI, [Validators.required, Validators.pattern(/^((\\+91-?)|0)?[0-9]{13}$/)]],
      nombres: [this.data.nombres, [Validators.required]],
      apellidos: [this.data.apellidos, [Validators.required]],
      descripcion: [this.data.description],
      telefono: [this.data.phone, [Validators.required,Validators.pattern(/^((\\+91-?)|0)?[0-9]{8}$/)]],
      email: [this.data.email, [Validators.required, Validators.email]],
      codigo_usuario: [this.data.codigo_usuario, [Validators.required]],
      password: [{value:'',disabled:true}, [ Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=.*[$@$!%*?&])(?=[^A-Z]*[A-Z]).{8,30}$/)]],
      passwordConfirm: [{value:'',disabled:true}, [Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=.*[$@$!%*?&])(?=[^A-Z]*[A-Z]).{8,30}$/), PasswordValidation.MatchPassword]],
      username: [this.data.username, [Validators.required]]
    });
  }
  get Id(){
    return this.editForm.get('id');
  }

  get DPI() {
    return this.editForm.get('DPI');
  }

  get Nombres() {
    return this.editForm.get('nombres');
  }
  
  get Email() {
    return this.editForm.get('email');
  }

  get CodigoUsuario() {
    return this.editForm.get('codigo_usuario');
  }

  get Password() {
    return this.editForm.get('password');
  }

  get PasswordConfirm() {
    return this.editForm.get('passwordConfirm');
  }

  get Username() {
    return this.editForm.get('username');
  }

  get Apellidos() {
    return this.editForm.get('apellidos');
  }

  get Description() {
    return this.editForm.get('descripcion');
  }

  get Phone() {
    return this.editForm.get('telefono');
  }
  submit(){

  }
  cancelEdit(){
    this.dialogRef.close();
  }
  passwordStatus(status:boolean){
    this.checked=status;
    if(this.checked){
      this.Password?.enable();
      this.PasswordConfirm?.enable();
    }else{
      this.Password?.disable();
      this.PasswordConfirm?.disable();
    }
  }

  editUser(){
    if(this.editForm.valid){
      if(this.Password?.disabled){
        this.Password.setValue("");
        this.Password.enable();
      }
      this.userService.editUser(this.editForm.value).subscribe((data)=>{
        if(data.status==true){
          Swal.fire('Ok!', data.message, 'success');
          this.dialogRef.close(1);
        }
      });
      this.Password?.disable();
    }
  }
}
