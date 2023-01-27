import { Component } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
import { AuthService } from './modules';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  opened = true;
  permissionsAdmin:string[]=[];
  constructor(private router: Router,private auth:AuthService,private permissionService:NgxPermissionsService) {}

  get token() {
    return localStorage.getItem('token') || '';
  }

  get usuario() {
    return localStorage.getItem('usuario') || '';
  }

  get project(){
    return localStorage.getItem('project')||'';
  }
  get id(){
    return localStorage.getItem('id')||'';
  }

  ngOnInit() {
    this.permissionService.flushPermissions();
    if(this.id){
      this.auth.getPermissionAdmin(Number(this.id)).subscribe(data=>{
        this.permissionsAdmin=data;
        this.permissionService.addPermission(this.permissionsAdmin);
      })
    }
  }
}
