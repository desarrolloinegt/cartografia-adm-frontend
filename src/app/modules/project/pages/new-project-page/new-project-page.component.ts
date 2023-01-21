import { DatePipe, formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatListOption } from '@angular/material/list';
import { ISurvey } from '@core/interfaces/i-survey';
import { IProjectCreate } from '@core/interfaces/i-project';
import { IUpm } from '@core/interfaces/i-upm';
import { IUpmAssignment } from '@core/interfaces/i-upm-assignment';
import { ProjectService } from '@modules/project/services/project.service';
import { SurveyService } from '@modules/surveys';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-project-page',
  templateUrl: './new-project-page.component.html',
  styleUrls: ['./new-project-page.component.scss']
})
export class NewProjectPageComponent {
  projectForm!: FormGroup;
  encuestas: ISurvey[] = [];
  upmSelected!: number[];
  upms: IUpm[] = [];
  pipe = new DatePipe('es-GT');
  date = new Date((new Date()).getDate());
  now = Date.now();
  project: IProjectCreate = {
    nombre: '',
    encuesta_id: 0,
    year:''
  };
  upmAsignment: IUpmAssignment = {
    proyecto_id: 0,
    upms: []
  }
  constructor(private projectService: ProjectService, private formBuilder: FormBuilder, private surveyService: SurveyService) {
    this.buildForm();
    this.cargarEncuestas();
    this.cargarUpms();
  }

  private buildForm() {
    this.projectForm = this.formBuilder.group({
      year: ['', [Validators.required, Validators.pattern(/^((\\+91-?)|0)?[0-9]{4}$/)]],
      encuesta: ['', [Validators.required]],
      upms: ['', [Validators.required]]
    });
  }
  get Year() {
    return this.projectForm.get('year');
  }

  get Encuesta() {
    return this.projectForm.get('encuesta');
  }

  cargarEncuestas() {
    this.surveyService.getSurveys().subscribe((data) => {
      this.encuestas = data;
    });
  }
  cargarUpms() {
    this.projectService.getUpms().subscribe((data) => {
      this.upms = data
    });
  }
  createProject() {
    if (this.projectForm.valid) {
      let valueEncuesta = this.Encuesta?.value.split(',');
      this.project.nombre = valueEncuesta[1] + ' ' + this.Year?.value;
      this.project.encuesta_id = valueEncuesta[0];
      this.project.year = this.Year?.value;
      this.upmAsignment.upms = this.upmSelected;
      if (Number(this.project.encuesta_id)) {
        this.projectService.createProject(this.project).subscribe((resp) => {
          if (resp.status == true) {
            this.upmAsignment.proyecto_id = resp.id;
            this.projectService.assignUpmToProject(this.upmAsignment).subscribe((res) => {
              if (res.status == true) {
                Swal.fire('Ok!', 'Proyecto creado Correctamente', 'success');
              }
            }, (err) => {
              console.log(err);
            });
          }
        });
      }

    }
  }
  upmSelecteds(options: MatListOption[]) {
    this.upmSelected = options.map(o => o.value);
  }
}
