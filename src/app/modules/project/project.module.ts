import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { MatIcon } from '@angular/material/icon';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { NewProjectPageComponent } from './pages/new-project-page/new-project-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '@components/header';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    ProjectPageComponent,
    NewProjectPageComponent,
    
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    HeaderComponent,
    MatSelectModule
  ]
})
export class ProjectModule { }
