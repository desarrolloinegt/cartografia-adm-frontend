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
import { AsignarPersonalComponent } from './components/asignar-personal/asignar-personal.component';
import { EncargadoUpmsComponent } from './components/encargado-upms/encargado-upms.component';
import { SupervisorComponent } from './components/supervisor/supervisor.component';
import { CartographerComponent } from './components/cartographer/cartographer.component';
import { FieldTeamDialogComponent } from './pages/field-teams/field-team-dialog/field-team-dialog.component';
import { FieldTeamPageComponent } from './pages/field-teams/field-team-page/field-team-page.component';
import { NewFieldTeamPageComponent } from './pages/field-teams/new-field-team-page/new-field-team-page.component';

@NgModule({
  declarations: [
    HomeProjectPageComponent,
    GroupProjectComponent,
    NewGroupProjectComponent,
    UpmsComponent,
    AsignarPersonalComponent,
    EncargadoUpmsComponent,
    SupervisorComponent,
    CartographerComponent,
    FieldTeamDialogComponent,
    FieldTeamPageComponent,
    NewFieldTeamPageComponent
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
