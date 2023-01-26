import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupPagesComponent } from './pages';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
