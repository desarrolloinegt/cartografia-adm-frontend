import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IFieldTeam } from '@core/interfaces/i-field-team';
import { FieldTeamService } from '@modules/project-home/services/field-team.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-field-team-dialog',
  templateUrl: './field-team-dialog.component.html',
  styleUrls: ['./field-team-dialog.component.scss']
})
export class FieldTeamDialogComponent {
  editForm!: FormGroup;

  constructor(
    private fieldTeamService: FieldTeamService,
    public dialogRef: MatDialogRef<IFieldTeam>,
    @Inject(MAT_DIALOG_DATA) public data: IFieldTeam,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  submit(){}

  private buildForm() {
    this.editForm = this.formBuilder.group({
      id: [this.data.id, [Validators.required]],
      equipo: [this.data.equipo, [Validators.required]],
      supervisor: [this.data.supervisor, [Validators.required]],
      vehiculo: [this.data.vehiculo, [Validators.required]],
      placa: [this.data.placa, [Validators.required]],
      modelo: [this.data.modelo, [Validators.required]],
    });
  }

  get equipo() {
    return this.editForm.get('equipo');
  }

  get supervisor() {
    return this.editForm.get('supervisor');
  }

  get vehiculo() {
    return this.editForm.get('vehiculo');
  }

  get placa() {
    return this.editForm.get('placa');
  }

  get modelo() {
    return this.editForm.get('modelo');
  }

  editFieldTeam() {
    if (this.editForm.valid) {
      this.fieldTeamService.editFieldTeam(this.editForm.value).subscribe((resp) => {
        if (resp.status == true) {
          Swal.fire('Ok!', resp.message, 'success');
          this.dialogRef.close(1);
        }
      }, 
      (error) => {
        console.log(error);
      });
    }
  }

  cancelEdit() {
    this.dialogRef.close();
  }
}
