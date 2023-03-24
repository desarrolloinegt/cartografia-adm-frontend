import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarPersonalComponent } from './components/asignar-personal/asignar-personal.component';
import { CartographerComponent } from './components/cartographer/cartographer.component';
import { EncargadoUpmsComponent } from './components/encargado-upms/encargado-upms.component';
import { DialogSupervisorAssignUserComponent, FieldTeamPageComponent, HomeProjectPageComponent, SupervisorComponent } from './pages';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { ControlDashboardDialogComponent } from './components/control-dashboard-dialog/control-dashboard-dialog.component';
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
  },
  {
    path:'assignUserSupervisor',
    component:DialogSupervisorAssignUserComponent,
    canActivate: [NgxPermissionsGuard],
    data:{
      permissions: {
        only: ['asignar-usuario-supervisor'],
        redirectTo: 'projectHome'
      }
    }
  },
  {
    path: 'reportDashboard',
    component: ControlDashboardDialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
