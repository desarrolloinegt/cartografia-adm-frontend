import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesEditComponent, RolesPageComponent } from './pages';

const routes: Routes = [{
    path:'',
    component:RolesPageComponent
  },{
    path:'edit',
    component:RolesEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
