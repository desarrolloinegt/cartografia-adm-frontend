import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { AuthModule } from './modules';
import { NgxPermissionsGuard } from 'ngx-permissions';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('@modules/home').then((m) => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('@modules/auth').then((m) => AuthModule)
  },
  {
    path: 'user',
    loadChildren: () => import ('@modules/user').then((m)=> m.UserModule),
    canActivate: [NgxPermissionsGuard],
    data:{
      permissions: {
        only: ['ver-usuario'],
        redirectTo: 'home'
      }
    }
  },
  {
    path: 'rol',
    loadChildren: () => import ('@modules/roles').then((m)=> m.RolesModule),
    canActivate: [NgxPermissionsGuard],
    data:{
      permissions: {
        only: ['ver-rol'],
        redirectTo: 'home'
      }
    }
  },
  {
    path: 'surveys',
    loadChildren: () => import ('@modules/surveys').then((m)=>m.SurveysModule),
    canActivate: [NgxPermissionsGuard],
    data:{
      permissions: {
        only: ['ver-encuesta'],
        redirectTo: 'home'
      }
    }
  },
  {
    path: 'project',
    loadChildren: () => import ('@modules/project').then((m)=>m.ProjectModule),
    canActivate: [NgxPermissionsGuard],
    data:{
      permissions: {
        only: ['ver-proyecto'],
        redirectTo: 'home'
      }
    }
  },

  {
    path: 'group',
    loadChildren: () => import ('@modules/groups').then((m)=>m.GroupsModule),
    canActivate: [NgxPermissionsGuard],
    data:{
      permissions: {
        only: ['ver-grupo'],
        redirectTo: 'home'
      }
    }
  },

  {
    path: 'vehicle',
    loadChildren: ()=>import ('@modules/vehicle').then((m)=>m.VehicleModule),
    canActivate: [NgxPermissionsGuard],
    data:{
      permissions: {
        only: ['ver-vehiculo'],
        redirectTo: 'home'
      }
    }
  },
  {
    path: 'projectHome',
    loadChildren: ()=>import ('@modules/project-home').then((m)=>m.ProjecHometModule),
  },
  
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/auth/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
