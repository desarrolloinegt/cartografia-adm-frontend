import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  private buildForm() {
    this.vehicleForm = this.formBuilder.group({
      placa: ['', Validators.required],
      modelo: ['', Validators.required],
      year: ['', Validators.required],
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

  createVehicle() {
    if (this.vehicleForm.valid) {
      this.vehicleService.createVehicle(this.vehicleForm.value).subscribe(
        (resp) => {
          if (resp.status == true) {
            Swal.fire('Ok!', resp.message, 'success');
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
