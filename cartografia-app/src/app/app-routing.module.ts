import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./Modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./Modules/users/new-user/new-user.module').then((m)=> m.NewUserModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
