import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './projectHome-routing.module';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeProjectPageComponent } from './pages/home-project-page/home-project-page.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { RolProjectComponent } from './components/rol-project/rol-project.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NewRolProjectComponent } from './components/dialogs/new-group-project/new-rol-project.component';
import { UpmsComponent } from './components/upms/upms.component';
import { AsignarPersonalComponent } from './components/asignar-personal/asignar-personal.component';
import { EncargadoUpmsComponent } from './components/encargado-upms/encargado-upms.component';
import { CartographerComponent } from './components/cartographer/cartographer.component';
import { FieldTeamDialogComponent } from './pages/field-teams/field-team-dialog/field-team-dialog.component';
import { FieldTeamPageComponent } from './pages/field-teams/field-team-page/field-team-page.component';
import { NewFieldTeamPageComponent } from './pages/field-teams/new-field-team-page/new-field-team-page.component';
import { DialogSupervisorAssignUserComponent, SupervisorComponent } from './pages';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { DialogBitacoraComponent } from './pages/supervisor/dialog-bitacora/dialog-bitacora.component';
import { ControlDashboardComponent } from './components/control-dashboard/control-dashboard.component';
import { ControlDashboardDialogComponent } from './components/control-dashboard-dialog/control-dashboard-dialog.component';

@NgModule({
  declarations: [
    HomeProjectPageComponent,
    RolProjectComponent,
    NewRolProjectComponent,
    UpmsComponent,
    AsignarPersonalComponent,
    EncargadoUpmsComponent,
    CartographerComponent,
    FieldTeamDialogComponent,
    FieldTeamPageComponent,
    NewFieldTeamPageComponent,
    SupervisorComponent,
    DialogSupervisorAssignUserComponent,
    DialogBitacoraComponent,
    ControlDashboardComponent,
    ControlDashboardDialogComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    AppMaterialModule,
    DragDropModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatListModule,
    ReactiveFormsModule,
    NgxPermissionsModule
  ],
})
export class ProjecHometModule {}
