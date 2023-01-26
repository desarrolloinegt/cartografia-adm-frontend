import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import {  MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GroupPagesComponent } from './pages/group-pages/group-pages.component';
import { NewGroupPagesComponent } from './pages/new-group-pages';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { EditGroupDialogComponent } from './pages/edit-group-dialog/edit-group-dialog.component';

import { GroupUserEditDialogComponent } from './pages/group-user-edit-dialog/group-user-edit-dialog.component';
import { GroupRoleEditDialogComponent } from './pages/group-role-edit-dialog';
import { NgxPermissionsModule } from 'ngx-permissions';



@NgModule({
  declarations: [GroupPagesComponent, NewGroupPagesComponent, EditGroupDialogComponent, GroupUserEditDialogComponent,GroupRoleEditDialogComponent],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    AppMaterialModule,
    MatIconModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgxPermissionsModule.forChild()
  ]
})
export class GroupsModule { }
