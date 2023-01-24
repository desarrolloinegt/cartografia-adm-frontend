import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { UserPageComponent } from './pages/user-page';
import { ReactiveFormsModule } from '@angular/forms';
import { EditUserDialogComponent } from './pages/edit-user-dialog/edit-user-dialog.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NewUserPageComponent } from './pages/new-user-page/new-user-page.component';

@NgModule({
  declarations: [UserPageComponent, EditUserDialogComponent, NewUserPageComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ]
})
export class UserModule { }
