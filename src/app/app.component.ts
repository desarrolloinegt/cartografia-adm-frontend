import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
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
  permissionsProject: string[] = [];
  permissionsAdmin: string[] = [];


  constructor(
    private router: Router,
    private auth: AuthService,
    private permissionService: NgxPermissionsService
  ) {
    this.initializeApp();
  }
  

  
  initializeApp() {
    this.auth.authState.subscribe((state) => {
      if (state) {
        //this.router.navigate(['home']);
      }
      else {
        this.router.navigate(['auth/login'])
      }
    });
  }

  get token() {
    return localStorage.getItem('token') || '';
  }

  get usuario() {
    return localStorage.getItem('usuario') || '';
  }

  get project() {
    return localStorage.getItem('project') || '';
  }
  get id() {
    return localStorage.getItem('id') || '';
  }

  ngOnInit() {
    this.permissionService.flushPermissions();
    if (this.id && !this.project) {
      this.auth.getPermissionAdmin(Number(this.id)).subscribe((data) => {
        this.permissionsAdmin = data;
        this.permissionService.addPermission(this.permissionsAdmin);
      });
    } else if (this.id && this.project) {
      this.auth
        .getPermissions(this.project, Number(this.id))
        .subscribe((data) => {
          this.permissionsProject = data;
          this.permissionService.addPermission(this.permissionsProject);
        });
    }
  }
}
