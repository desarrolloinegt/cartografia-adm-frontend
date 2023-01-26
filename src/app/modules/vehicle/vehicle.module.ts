import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehiclePageComponent } from './pages/vehicle-page/vehicle-page.component';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NewVehiclePageComponent } from './pages/new-vehicle-page/new-vehicle-page.component';
import { VehicleEditDialogComponent } from './pages/vehicle-edit-dialog/vehicle-edit-dialog.component';
import { NgxPermissionsModule } from 'ngx-permissions';


@NgModule({
  declarations: [
    VehiclePageComponent,
    NewVehiclePageComponent,
    VehicleEditDialogComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    NgxPermissionsModule.forChild()
  ],
})
export class VehicleModule { }
