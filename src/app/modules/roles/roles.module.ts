import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesRoutingModule } from './roles-routing.module';
import { HeaderComponent } from '@components/header';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { RolesPageComponent } from './pages';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [RolesPageComponent],
  imports: [
    CommonModule,
    RolesRoutingModule,
    HeaderComponent,
    ReactiveFormsModule,
    AppMaterialModule,
    MatCheckboxModule
  ]
})
export class RolesModule { }
