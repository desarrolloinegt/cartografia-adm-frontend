import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IGroupUserAssignment } from '@core/interfaces/i-group';
import { IUserList } from '@core/interfaces/i-user';
import { GroupService } from '@modules/groups/services';
import { UserService } from '@modules/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-group-user-edit-dialog',
  templateUrl: './group-user-edit-dialog.component.html',
  styleUrls: ['./group-user-edit-dialog.component.scss']
})
export class GroupUserEditDialogComponent {
  editForm!:FormGroup;
  public checked = false;
  users:IUserList[]=[]

  constructor(private userService:UserService,private groupService:GroupService ,public dialogRef:MatDialogRef<IGroupUserAssignment>, @Inject(MAT_DIALOG_DATA) public data: IGroupUserAssignment, private formBuilder: FormBuilder) {
   
    this.buildForm();
    this.getUsers();
  }
  
  submit(){}

  private buildForm(){
    this.editForm = this.formBuilder.group({
      grupo_id:[this.data.id,[Validators.required]],
      usuarios:[[],[Validators.required]]
    });
  }

  get Roles(){
    return this.editForm.get('roles');
  }

  editGroup(){   
    if(this.editForm.valid){
      this.groupService.editGroupUsers(this.editForm.value).subscribe((resp)=>{
        if(resp.status==true){
          Swal.fire('Ok!', resp.message, 'success');
          this.dialogRef.close(1);
        }
      },(err) => {
        console.log(err);
      });
    }
  }

  getUsers(){
    this.userService.getAllUserListView().subscribe((data)=>{
      this.users=data;
      this.users.forEach(dto=>{
        dto.checked=false;
      });
      this.defaultUsers();
    });
    
  }
  defaultUsers(){
    for (let i = 0; i < this.users.length; i++) {
      for (let j = 0; j < this.data.usuarios.length; j++) {
          if(this.users[i].username==this.data.usuarios[j].username){
            this.users[i].checked=true;
          }
      }
    }

  }
  cancelEdit(){
    this.dialogRef.close();
  }
}
