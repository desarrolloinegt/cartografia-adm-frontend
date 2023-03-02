import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarPersonalComponent } from './components/asignar-personal/asignar-personal.component';
import { CartographerComponent } from './components/cartographer/cartographer.component';
import { EncargadoUpmsComponent } from './components/encargado-upms/encargado-upms.component';
import { FieldTeamPageComponent, HomeProjectPageComponent, SupervisorComponent } from './pages';
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
  },
  {
    path: 'supervisores',
    component: SupervisorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
