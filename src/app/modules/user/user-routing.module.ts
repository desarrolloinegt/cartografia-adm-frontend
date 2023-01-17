import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserPageComponent } from './pages/new-user-page';
import { UserPageComponent } from './pages/user-page';

const routes: Routes = [
  {
    path: '',
    component: UserPageComponent
  },
  {
    path: 'create',
    component: NewUserPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
