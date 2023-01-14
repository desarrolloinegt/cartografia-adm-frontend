import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesPageComponent } from './pages';

const routes: Routes = [{
    path:'',
    component:RolesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
