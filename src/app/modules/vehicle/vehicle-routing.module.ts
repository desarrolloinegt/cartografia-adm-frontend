import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewVehiclePageComponent, VehiclePageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: VehiclePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
