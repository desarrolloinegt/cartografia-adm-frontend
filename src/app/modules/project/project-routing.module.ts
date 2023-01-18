import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectPageComponent } from './pages';
import { NewProjectPageComponent } from './pages/new-project-page/new-project-page.component';

const routes: Routes = [
  {
    path:'',
    component:ProjectPageComponent
  },
  {
    path:'create',
    component:NewProjectPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
