import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './modules';

const routes: Routes = [
  {
    path: 'home',
   loadChildren: () => import('@modules/home').then(m => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('@modules/auth').then(m => AuthModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
