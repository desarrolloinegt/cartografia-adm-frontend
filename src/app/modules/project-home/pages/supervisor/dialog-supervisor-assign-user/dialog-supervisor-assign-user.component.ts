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
    public dialogRef: MatDialogRef<ISupervisorUserAssignment>, 
    @Inject(MAT_DIALOG_DATA),
    public data: ISupervisorUserAssignment,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
    this.getUsers();
  }

  submit() {}

  private buildForm() {
    this.userAssignForm = this.formBuilder.group({
      user_id: [this.data.id, [Validators.required]],

    })
  }

  get Users() {
    return this.userAssignForm.get('users');
  }

  getUsers() {
    this.userService.getUserPolicys().subscribe((resp) => {
      this.users = resp;
      this.users.forEach(data => {
        data.button = false;
      });
      this.defaultUsers();
    });
  }

  defaultUsers() {
    for (let i = 0; i < this.users.length; i++) {
      for (let j = 0; j < this.data.users.length; j++) {
        if(this.users[i].nombres==this.data.users[j].username)
        this.users[i].button = true;
      }
    }
  }

  editForm() {
    if(this.userAssignForm.valid) {
      this.supervisorService.editUserSupervisor(this.userAssignForm.value).subscribe((resp) => {
        if(resp.status==true) {
          Swal.fire('Ok!', 'Usuario asignado guardado correctamente', 'success');
          this.dialogRef.close(1);
        }
      });
    }
  }

  cancelEdit() {
    this.dialogRef.close();
  }

} 
