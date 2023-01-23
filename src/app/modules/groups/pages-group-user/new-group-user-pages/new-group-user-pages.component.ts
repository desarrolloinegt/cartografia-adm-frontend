import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IGroup } from '@core/interfaces/i-group';
import { IUserList } from '@core/interfaces/i-user';
import { GroupService } from '@modules/groups/services';
import { UserService } from '@modules/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-group-user-pages',
  templateUrl: './new-group-user-pages.component.html',
  styleUrls: ['./new-group-user-pages.component.scss']
})
export class NewGroupUserPagesComponent {
  groupUsersForm!:FormGroup;
  grupos:IGroup[]=[];
  users:IUserList[]=[]
  constructor(private userService: UserService, private groupService:GroupService,private formBuilder: FormBuilder) {
    this.cargarUsuarios();
    this.cargarGrupos();
    this.buildForm();
  }
  private buildForm(){
    this.groupUsersForm=this.formBuilder.group({
      grupo_id:['', Validators.required],
      usuarios:['',[Validators.required]]
    });
  }
  get Grupo() {
    return this.groupUsersForm.get('grupo_id');
  }
  get Usuarios() {
    return this.groupUsersForm.get('usuarios');
  }

  cargarUsuarios(){
    this.userService.getAllUserListView().subscribe(data=>{
      this.users=data;
      this.users.forEach(user=>{
        user.checked=false;
      })
    })
  }

  cargarGrupos(){
    this.groupService.getGroupWithoutUsers().subscribe(data=>{
      this.grupos=data;
    })
  }

  createAssignment(){ 
    this.groupService.assignGroupUsers(this.groupUsersForm.value).subscribe((resp)=>{
      if(resp.status==true){
            Swal.fire('Ok!', resp.message, 'success');
            this.cargarGrupos();
        }
      },(err) => {
        console.log(err);
      });
  }
}
