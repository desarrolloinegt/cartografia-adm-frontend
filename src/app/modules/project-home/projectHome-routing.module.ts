import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarPersonalComponent } from './components/asignar-personal/asignar-personal.component';
import { CartographerComponent } from './components/cartographer/cartographer.component';
import { EncargadoUpmsComponent } from './components/encargado-upms/encargado-upms.component';
import { SupervisorComponent } from './components/supervisor/supervisor.component';
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
  },
  {
    path: 'supervisor',
    component: SupervisorComponent
  },
  {
    path: 'cartografo',
    component: CartographerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
