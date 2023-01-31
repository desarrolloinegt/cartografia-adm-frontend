import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { AuthModule } from './modules';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('@modules/home').then((m) => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('@modules/auth').then((m) => AuthModule),
  },
  {
    path: 'user',
    loadChildren: () => import ('@modules/user').then((m)=> m.UserModule),
  },
  {
    path: 'rol',
    loadChildren: () => import ('@modules/roles').then((m)=> m.RolesModule),
  },
  {
    path: 'surveys',
    loadChildren: () => import ('@modules/surveys').then((m)=>m.SurveysModule),
  },
  {
    path: 'project',
    loadChildren: () => import ('@modules/project').then((m)=>m.ProjectModule),
  },

  {
    path: 'group',
    loadChildren: () => import ('@modules/groups').then((m)=>m.GroupsModule),
  },

  {
    path: 'vehicle',
    loadChildren: ()=>import ('@modules/vehicle').then((m)=>m.VehicleModule),
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
