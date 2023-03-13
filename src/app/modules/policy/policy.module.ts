import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyRoutingModule } from './policy-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PolicyEditDialogComponent } from './pages/policy-edit-dialog/policy-edit-dialog.component';
import { NewPolicyPageComponent } from './pages/new-policy-page/new-policy-page.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PolicyPermissionEditDialogComponent } from './pages/policy-permission-edit-dialog/policy-permission-edit-dialog.component';
import { PolicyPageComponent } from './pages/policy-page';

@NgModule({
  declarations: [PolicyPageComponent, PolicyEditDialogComponent, NewPolicyPageComponent, PolicyPermissionEditDialogComponent],
  imports: [
    CommonModule,
    PolicyRoutingModule,
    ReactiveFormsModule,
    AppMaterialModule,
    MatCheckboxModule,
    MatTooltipModule,
    NgxPermissionsModule.forChild()
  ]
})
export class PolicyModule { }
