import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './projectHome-routing.module';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HomeProjectPageComponent } from './pages/home-project-page/home-project-page.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { MatTabsModule } from '@angular/material/tabs';
import { GroupProjectComponent } from './components/group-project/group-project.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NewGroupProjectComponent } from './components/dialogs/new-group-project/new-group-project.component';
import { UpmsComponent } from './components/upms/upms.component';


@NgModule({
  declarations: [
    
  
    HomeProjectPageComponent,
              GroupProjectComponent,
              NewGroupProjectComponent,
              UpmsComponent,
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTooltipModule,
    NgxPermissionsModule,
    MatTabsModule,
    DragDropModule
  ]
})
export class ProjecHometModule { }
