import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupRolePagesComponent } from './group-role-pages';
import { NewGroupRolePagesComponent } from './new-group-role-pages/new-group-role-pages.component';

const routes: Routes = [
  {
    path:'',
    component:GroupRolePagesComponent,
  },
  {
    path:'create',
    component:NewGroupRolePagesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
