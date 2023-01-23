import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SurveyService } from '@modules/surveys/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-survey-pages',
  templateUrl: './new-survey-pages.component.html',
  styleUrls: ['./new-survey-pages.component.scss'],
})
export class NewSurveyPagesComponent {
  surveyForm!: FormGroup;

  constructor(
    private surveyService: SurveyService,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }
  private buildForm() {
    this.surveyForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', [Validators.required]],
    });
  }
  get Nombre() {
    return this.surveyForm.get('nombre');
  }
  get Descripcion() {
    return this.surveyForm.get('descripcion');
  }

  createSurvey() {
    if (this.surveyForm.valid) {
      this.surveyService.create(this.surveyForm.value).subscribe(
        (resp) => {
          if (resp.status == true) {
            Swal.fire('Ok!', resp.message, 'success');
          }
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
