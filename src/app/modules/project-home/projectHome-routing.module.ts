import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarPersonalComponent } from './components/asignar-personal/asignar-personal.component';
import { EncargadoUpmsComponent } from './components/encargado-upms/encargado-upms.component';
import { HomeProjectPageComponent } from './pages';

const routes: Routes = [
  {
    path:'',
    component:HomeProjectPageComponent
  },
  {
    path:'assignPersonal',
    component:AsignarPersonalComponent
  },
  {
    path:'assignUpmChief',
    component:EncargadoUpmsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
