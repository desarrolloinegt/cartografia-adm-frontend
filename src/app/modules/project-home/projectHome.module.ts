import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './projectHome-routing.module';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeProjectPageComponent } from './pages/home-project-page/home-project-page.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { GroupProjectComponent } from './components/group-project/group-project.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NewGroupProjectComponent } from './components/dialogs/new-group-project/new-group-project.component';
import { UpmsComponent } from './components/upms/upms.component';
import { PersonalMonitorComponent } from './components/personal-monitor/personal-monitor.component';
import { PersonalUpmsComponent } from './components/personal-upms/personal-upms.component';

@NgModule({
  declarations: [
    HomeProjectPageComponent,
    GroupProjectComponent,
    NewGroupProjectComponent,
    UpmsComponent,
    PersonalMonitorComponent,
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    NgxPermissionsModule,
    DragDropModule,
  ],
})
export class ProjecHometModule {}
