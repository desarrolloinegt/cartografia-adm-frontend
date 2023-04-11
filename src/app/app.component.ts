import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Route, Router, Routes } from '@angular/router';
import { ProjectHomeService } from '@modules/project-home/services/project-home.service';
import { NgxPermissionsService } from 'ngx-permissions';
import { AuthService } from './modules';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  opened = true;
  logged = false;
  permissionsProject: string[] = [];
  permissionsAdmin: string[] = [];
  projectId: number = 1;

  constructor(
    private router: Router,
    private auth: AuthService,
    private permissionService: NgxPermissionsService,
    private projectHomeService: ProjectHomeService
  ) {
    this.initializeApp();
  }



  initializeApp() {
    this.auth.authState.subscribe((state) => {
      if (state) {
        this.logged = true;
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
    if (this.project) {
      this.projectHomeService.getIdProject(this.project).subscribe((resp) => {
        this.projectId = resp || -1
        this.getPermissionProject()
      })
    } else {
      this.getPermissionSystem();
    }
  }

  getPermissionSystem() {
    this.auth.getPermissionAdmin(Number(this.id)).subscribe((data) => {
      this.permissionsAdmin = data;
      this.permissionService.addPermission(this.permissionsAdmin);
    });
  }

  getPermissionProject() {
    if (this.project && this.projectId != -1) {
      this.auth.getPermissions(this.project, Number(this.id)).subscribe((data) => {
        this.permissionsProject = data;
        this.permissionService.addPermission(this.permissionsProject);
      });
    } else {
      this.router.navigateByUrl('home');
    }

  }

  getPermission() {
    if (this.id && !this.project) {
      this.auth.getPermissionAdmin(Number(this.id)).subscribe((data) => {
        this.permissionsAdmin = data;
        this.permissionService.addPermission(this.permissionsAdmin);
      });
    } else if (this.id && this.project && this.projectId != -1) {
      this.auth
        .getPermissions(this.project, Number(this.id))
        .subscribe((data) => {
          this.permissionsProject = data;
          this.permissionService.addPermission(this.permissionsProject);
        });
    } else {
      this.router.navigateByUrl('home');
    }
  }
  styleNav() {
    if (this.opened) {
      return { margin: "0.5em" };
    } else {
      return { margin: "0", "text-alignn": "center" };
    }
  }

  toolTip(text:string){
    if(!this.opened){
      return text;
    } else {
      return "";
    }
    
  }
}
