import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveysRoutingModule } from './surveys-routing.module';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { SurveyPagesComponent } from './pages';
import { NewSurveyPagesComponent } from './pages/new-survey-pages/new-survey-pages.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SurveyEditDialogComponent } from './pages/survey-edit-dialog/survey-edit-dialog.component';

@NgModule({
  declarations: [
    SurveyPagesComponent,
    NewSurveyPagesComponent,
    SurveyEditDialogComponent,
  ],
  imports: [
    CommonModule,
    SurveysRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ],
})
export class SurveysModule {}
