import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IGroup } from '@core/interfaces/i-group';
import { IRoleList } from '@core/interfaces/i-role';
import { GroupService } from '@modules/groups/services';
import { RoleService } from '@modules/roles/services/role.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-group-role-pages',
  templateUrl: './new-group-role-pages.component.html',
  styleUrls: ['./new-group-role-pages.component.scss']
})
export class NewGroupRolePagesComponent {
  rolForm!:FormGroup;
  grupos:IGroup[]=[];
  roles:IRoleList[]=[]
  constructor(private roleService: RoleService, private groupService:GroupService,private formBuilder: FormBuilder) {
    this.cargarRoles();
    this.cargarGrupos();
    this.buildForm();
  }
  private buildForm(){
    this.rolForm=this.formBuilder.group({
      grupo_id:['', Validators.required],
      roles:['',[Validators.required]]
    });
  }
  get Grupo() {
    return this.rolForm.get('grupo_id');
  }
  get Roles() {
    return this.rolForm.get('roles');
  }

  cargarRoles(){
    this.roleService.getRoles().subscribe(data=>{
      this.roles=data;
      this.roles.forEach(rol=>{
        rol.checked=false;
      })
    })
  }

  cargarGrupos(){
    this.groupService.getGroupWithoutRoles().subscribe(data=>{
      this.grupos=data;
    })
  }

  createAssignment(){ 
    this.groupService.assignGroupRoles(this.rolForm.value).subscribe((resp)=>{
      if(resp.status==true){
            Swal.fire('Ok!', resp.message, 'success');
            this.cargarGrupos();
        }
      },(err) => {
        console.log(err);
      });
  }
}
