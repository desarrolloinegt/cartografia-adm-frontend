import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { HeaderComponent } from '@components/header';
import {  MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GroupPagesComponent } from './pages/group-pages/group-pages.component';
import { NewGroupPagesComponent } from './pages/new-group-pages';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { EditGroupDialogComponent } from './pages/edit-group-dialog/edit-group-dialog.component';
import { GroupUserPagesComponent } from './pages-group-user/group-user-pages/group-user-pages.component';
import { GroupRolePagesComponent } from './pages-group-role/group-role-pages/group-role-pages.component';
import { NewGroupRolePagesComponent } from './pages-group-role/new-group-role-pages/new-group-role-pages.component';
import { GroupRoleEditDialogComponent } from './pages-group-role/group-role-edit-dialog/group-role-edit-dialog.component';
import { NewGroupUserPagesComponent } from './pages-group-user/new-group-user-pages/new-group-user-pages.component';
import { GroupUserEditDialogComponent } from './pages-group-user/group-user-edit-dialog/group-user-edit-dialog.component';



@NgModule({
  declarations: [GroupPagesComponent, NewGroupPagesComponent, EditGroupDialogComponent, GroupUserPagesComponent, GroupRolePagesComponent, NewGroupRolePagesComponent, GroupRoleEditDialogComponent, NewGroupUserPagesComponent, GroupUserEditDialogComponent],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    AppMaterialModule,
    HeaderComponent,
    MatIconModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class GroupsModule { }
