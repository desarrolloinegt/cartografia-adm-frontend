import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestaPageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component:EncuestaPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncuestaRoutingModule {}
