import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RoleService } from '@modules/roles/services/role.service';

export interface Permiso{
  id:number,
  alias:string,
  completed:false,
}
@Component({
  selector: 'app-roles-page',
  templateUrl: './roles-page.component.html',
  styleUrls: ['./roles-page.component.scss']
})
export class RolesPageComponent {
  public permisos:Permiso[]=[];

  constructor(private roleService: RoleService, private formBuilder: FormBuilder, public dialogService: MatDialog) {
    this.cargarPermisos();
  }
  cargarPermisos(){
    this.roleService.getPermisions().subscribe((data)=>{
      this.permisos=data;
    });
  }
}
