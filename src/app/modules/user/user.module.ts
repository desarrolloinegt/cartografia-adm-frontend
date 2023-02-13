import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { UserPageComponent } from './pages/user-page';
import { ReactiveFormsModule } from '@angular/forms';
import { EditUserDialogComponent } from './pages/edit-user-dialog/edit-user-dialog.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NewUserPageComponent } from './pages/new-user-page/new-user-page.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RolesUserDialogComponent } from './pages/roles-user-dialog/roles-user-dialog.component';

@NgModule({
  declarations: [UserPageComponent, EditUserDialogComponent, NewUserPageComponent,  RolesUserDialogComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatTooltipModule,
    NgxPermissionsModule.forChild()
  ]
})
export class UserModule { }
