import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesRoutingModule } from './roles-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { RolesPageComponent } from './pages';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RolesEditDialogComponent } from './pages/roles-edit-dialog/roles-edit-dialog.component';
import { NewRolePageComponent } from './pages/new-role-page/new-role-page.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RolesPermissionEditDialogComponent } from './pages/roles-permission-edit-dialog/roles-permission-edit-dialog.component';

@NgModule({
  declarations: [RolesPageComponent, RolesEditDialogComponent, NewRolePageComponent, RolesPermissionEditDialogComponent],
  imports: [
    CommonModule,
    RolesRoutingModule,
    ReactiveFormsModule,
    AppMaterialModule,
    MatCheckboxModule,
    MatTooltipModule,
    NgxPermissionsModule.forChild()
  ]
})
export class RolesModule { }
