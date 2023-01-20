import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehiclePageComponent } from './pages/vehicle-page/vehicle-page.component';
import { HeaderComponent } from '@components/header';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VehiclePageComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    HeaderComponent,
    AppMaterialModule,
    ReactiveFormsModule,
  ],
})
export class VehicleModule { }
