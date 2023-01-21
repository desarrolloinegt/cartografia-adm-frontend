import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupPagesComponent } from './pages';
import { GroupRolePagesComponent } from './pages-group-role/group-role-pages/group-role-pages.component';
import { NewGroupRolePagesComponent } from './pages-group-role/new-group-role-pages/new-group-role-pages.component';
import { GroupUserPagesComponent } from './pages-group-user/group-user-pages/group-user-pages.component';
import { NewGroupPagesComponent } from './pages/new-group-pages';

const routes: Routes = [
  {
    path:'',
    component:GroupPagesComponent,
  },
  {
    path:'create',
    component:NewGroupPagesComponent
  },
  {
    path:'role',
    component:GroupRolePagesComponent,  
  },
  {
    path: 'role/assignmentGroupRole',
    component:NewGroupRolePagesComponent
  },
  {
    path:'user',
    component:GroupUserPagesComponent,  
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
