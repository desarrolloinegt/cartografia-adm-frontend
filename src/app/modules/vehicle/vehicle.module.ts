import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehiclePageComponent } from './pages/vehicle-page/vehicle-page.component';


@NgModule({
  declarations: [
    VehiclePageComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule
  ]
})
export class VehicleModule { }
