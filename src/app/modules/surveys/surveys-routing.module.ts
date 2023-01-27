import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSurveyPagesComponent, SurveyPagesComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: SurveyPagesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveysRoutingModule { }
