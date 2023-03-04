import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ISupervisorUserAssignment } from '@core/interfaces/i-supervisor';
import { IUser } from '@core/interfaces/i-user';
import { SupervisorService } from '@modules/project-home/services/supervisor.service';
import { UserService } from '@modules/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-supervisor-assign-user',
  templateUrl: './dialog-supervisor-assign-user.component.html',
  styleUrls: ['./dialog-supervisor-assign-user.component.scss']
})
export class DialogSupervisorAssignUserComponent {
  userAssignForm!: FormGroup;
  public button = false;
  users: IUser[] = []

  constructor(
    private userService: UserService,
    private supervisorService: SupervisorService,
    public dialogRef: MatDialogRef<DialogSupervisorAssignUserComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: ISupervisorUserAssignment,
    private formBuilder: FormBuilder
  ) {
    this.getUsers();
  }
  submit() {}

  

  getUsers() {
    let data={proyecto_id:this.data.proyecto_id};
    this.supervisorService.getUsersAssigned(data).subscribe((resp) => {
      this.users = resp;
      this.users.forEach(data => {
        data.button = false;
      });
      this.defaultUsers();
    });
  }

  defaultUsers() {
    for (let i = 0; i < this.users.length; i++) {
        if(this.users[i].nombres==this.data.nombre && this.users[i].codigo_usuario==this.data.codigo_usuario)
        this.users[i].button = true;
    }
  }

  editUser(codigo_usuario:number,nombre:string) {
    if(codigo_usuario!=this.data.codigo_usuario && nombre!=this.data.nombre){
      let data={usuario_nuevo:codigo_usuario,proyecto_id:this.data.proyecto_id,upm:this.data.upm};
      this.supervisorService.modifyCartographerUpm(data).subscribe((resp)=>{
        if(resp.status==true){
          this.Toast.fire({icon:'success',title:resp.message});
          this.dialogRef.close(1);
        }
      })
    } else {
      this.Toast.fire({icon:'error',title:"El usuario seleccionado ya es el encargado de el UPM"});
    }
  }

  cancelEdit() {
    this.dialogRef.close();
  }
  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });
} 
