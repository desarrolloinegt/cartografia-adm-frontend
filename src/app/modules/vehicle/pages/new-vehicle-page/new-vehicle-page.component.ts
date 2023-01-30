import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { VehicleService } from '@modules/vehicle/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-vehicle-page',
  templateUrl: './new-vehicle-page.component.html',
  styleUrls: ['./new-vehicle-page.component.scss'],
})
export class NewVehiclePageComponent {
  vehicleForm!: FormGroup;

  constructor(
    private vehicleService: VehicleService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<NewVehiclePageComponent>
  ) {
    this.buildForm();
  }

  private buildForm() {
    this.vehicleForm = this.formBuilder.group({
      placa: ['', [Validators.required,Validators.pattern(/^[A-Z]{1}([0-9]){3}[A-Z]{3}$/)]],
      modelo: ['', Validators.required],
      year: ['', [Validators.required,Validators.pattern(/^((\\+91-?)|0)?[0-9]{4}$/)]],
    });
  }

  get placa() {
    return this.vehicleForm.get('placa');
  }

  get modelo() {
    return this.vehicleForm.get('modelo');
  }

  get year() {
    return this.vehicleForm.get('year');
  }

  submit(){}
  createVehicle() {
    if (this.vehicleForm.valid) {
      this.vehicleService.createVehicle(this.vehicleForm.value).subscribe(
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
  
  cancelAdd(){
    this.dialogRef.close();
  }
}
