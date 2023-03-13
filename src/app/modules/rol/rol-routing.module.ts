import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolPagesComponent } from './pages';

import { NewRolPagesComponent } from './pages/new-rol-pages';

const routes: Routes = [
  {
    path:'',
    component:RolPagesComponent,
  },
  {
    path:'create',
    component:NewRolPagesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolRoutingModule { }
