import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesRoutingModule } from './roles-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { RolesPageComponent } from './pages';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RolesEditDialogComponent } from './pages/roles-edit-dialog/roles-edit-dialog.component';
import { NewRolePageComponent } from './pages/new-role-page/new-role-page.component';

@NgModule({
  declarations: [RolesPageComponent, RolesEditDialogComponent, NewRolePageComponent],
  imports: [
    CommonModule,
    RolesRoutingModule,
    ReactiveFormsModule,
    AppMaterialModule,
    MatCheckboxModule,
  ]
})
export class RolesModule { }
