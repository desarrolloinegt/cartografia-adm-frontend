import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ISurvey } from '@core/interfaces/i-survey';
import { SurveyService } from '@modules/surveys/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-survey-edit-dialog',
  templateUrl: './survey-edit-dialog.component.html',
  styleUrls: ['./survey-edit-dialog.component.scss']
})
export class SurveyEditDialogComponent {
  editForm!:FormGroup;

  constructor(private surveyService:SurveyService,public dialogRef:MatDialogRef<ISurvey>, @Inject(MAT_DIALOG_DATA) public data: ISurvey, private formBuilder: FormBuilder) {
    this.buildForm();
  }
  
  submit(){
  }

  private buildForm(){
    this.editForm = this.formBuilder.group({
      id:[this.data.id,[Validators.required]],
      nombre: [this.data.nombre, [Validators.required]],
      descripcion: [this.data.descripcion, [Validators.required]],
    });
  }

  get Id(){
    return this.editForm.get('id');
  }
  get Nombre() {
    return this.editForm.get('nombre');
  }

  get Descripcion() {
    return this.editForm.get('descripcion');
  }

  editSurvey(){
    if(this.editForm.valid){
      this.surveyService.editSurvey(this.editForm.value).subscribe((resp)=>{
        if(resp.status==true){
          Swal.fire('Ok!', resp.message, 'success');
          this.dialogRef.close(1);
        }
      },(err) => {
        console.log(err);
      });
    }
    
  }
  cancelEdit(){
    this.dialogRef.close();
  }
}
