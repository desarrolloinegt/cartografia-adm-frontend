import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolRoutingModule } from './rol-routing.module';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import {  MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RolPagesComponent } from './pages/rol-pages/rol-pages.component';
import {  NewRolPagesComponent } from './pages/new-rol-pages';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {  EditRolDialogComponent } from './pages/edit-rol-dialog/edit-rol-dialog.component';

import { RolUserEditDialogComponent } from './pages/rol-user-edit-dialog/rol-user-edit-dialog.component';
import {  PolicyRoleEditDialogComponent } from './pages/rol-policy-edit-dialog';
import { NgxPermissionsModule } from 'ngx-permissions';



@NgModule({
  declarations: [RolPagesComponent, NewRolPagesComponent, EditRolDialogComponent, RolUserEditDialogComponent,PolicyRoleEditDialogComponent],
  imports: [
    RolRoutingModule,
    CommonModule,
    AppMaterialModule,
    MatIconModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgxPermissionsModule.forChild()
  ]
})
export class RolModule { }
