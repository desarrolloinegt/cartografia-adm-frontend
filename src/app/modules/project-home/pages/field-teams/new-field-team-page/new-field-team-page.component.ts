import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FieldTeamService } from '@modules/project-home/services/field-team.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-field-team-page',
  templateUrl: './new-field-team-page.component.html',
  styleUrls: ['./new-field-team-page.component.scss'],
})
export class NewFieldTeamPageComponent {
  fieldTeamForm!: FormGroup;

  constructor(
    private fieldTeamService: FieldTeamService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<NewFieldTeamPageComponent>
  ) {
    this.buildForm();
  }

  private buildForm() {
    this.fieldTeamForm = this.formBuilder.group({
      equipo: ['', Validators.required],
      supervisor: ['', Validators.required],
      vehiculo: ['', Validators.required],
      placa: ['', [Validators.required, Validators.pattern(/^[A-Z]{1}([0-9]){3}[A-Z]{3}$/)]],
      modelo: ['', Validators.required],
    });
  }

  get equipo() {
    return this.fieldTeamForm.get('equipo');
  }

  get supervisor() {
    return this.fieldTeamForm.get('supervisor')
  }

  get vehiculo() {
    return this.fieldTeamForm.get('vehiculo')
  }

  get placa() {
    return this.fieldTeamForm.get('placa')
  }

  get modelo() {
    return this.fieldTeamForm.get('modelo')
  }

  submit(){}

  createFieldTeam() {
    if(this.fieldTeamForm.valid) {
      this.fieldTeamService.createFieldTeam(this.fieldTeamForm.value).subscribe((resp) => {
        if(resp.status == true) {
          Swal.fire('Ok!', resp.message, 'success');
          this.dialogRef.close(1);
        }
      }, (error) => {
        console.log(error);
      });
    }
  }

  cancelAdd(){
    this.dialogRef.close();
  }
}
