import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IVehicle } from '@core/interfaces/i-vehicle';
import { VehicleService } from '@modules/vehicle/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vehicle-edit-dialog',
  templateUrl: './vehicle-edit-dialog.component.html',
  styleUrls: ['./vehicle-edit-dialog.component.scss'],
})
export class VehicleEditDialogComponent {
  editForm!: FormGroup;

  constructor(
    private vehicleService: VehicleService,
    public dialogRef: MatDialogRef<IVehicle>,
    @Inject(MAT_DIALOG_DATA) public data: IVehicle,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  submit() {}

  private buildForm() {
    this.editForm = this.formBuilder.group({
      id: [this.data.id, [Validators.required]],
      placa: [this.data.placa, [Validators.required]],
      modelo: [this.data.modelo, [Validators.required]],
      year: [this.data.year, [Validators.required]],
    });
  }

  get placa() {
    return this.editForm.get('placa');
  }

  get modelo() {
    return this.editForm.get('modelo');
  }

  get year() {
    return this.editForm.get('year');
  }

  editSurvey() {
    if (this.editForm.valid) {
      this.vehicleService.editVechicle(this.editForm.value).subscribe(
        (resp) => {
          if (resp.status == true) {
            Swal.fire('Ok!', resp.message, 'success');
            this.dialogRef.close(1);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  cancelEdit() {
    this.dialogRef.close();
  }
}
