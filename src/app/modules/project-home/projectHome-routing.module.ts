import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarPersonalComponent } from './components/asignar-personal/asignar-personal.component';
import { CartographerComponent } from './components/cartographer/cartographer.component';
import { EncargadoUpmsComponent } from './components/encargado-upms/encargado-upms.component';
import { SupervisorComponent } from './components/supervisor/supervisor.component';
import { FieldTeamPageComponent, HomeProjectPageComponent } from './pages';
import { NgxPermissionsGuard } from 'ngx-permissions';
const routes: Routes = [
  {
    path:'',
    component:HomeProjectPageComponent,
  },
  {
    path:'assignPersonal',
    component:AsignarPersonalComponent,
    canActivate: [NgxPermissionsGuard],
    data:{
      permissions: {
        only: ['asignar-personal'],
        redirectTo: 'projectHome'
      }
    }
  },
  {
    path:'assignUpmChief',
    component:EncargadoUpmsComponent,
    canActivate: [NgxPermissionsGuard],
    data:{
      permissions: {
        only: ['asignar-upms-personal'],
        redirectTo: 'projectHome'
      }
    }
  },
  {
    path: 'supervisor',
    component: SupervisorComponent
  },
  {
    path: 'cartografo',
    component: CartographerComponent,
    canActivate: [NgxPermissionsGuard],
    data:{
      permissions: {
        only: ['ver-upms-cartografo'],
        redirectTo: 'projectHome'
      }
    }
  },
  {
    path: 'equipo-campo',
    component: FieldTeamPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
