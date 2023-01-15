import { Component } from '@angular/core';
import { SpinnerService } from '@core/services/spinner.service';

@Component({
  selector: 'app-spinner',
  template: `<div class="overlay" *ngIf="isLoading$ | async">
    <mat-spinner color='warn'></mat-spinner>
  </div> `,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  isLoading$ = this.spinnerServ.isLoading$;
  constructor(private spinnerServ: SpinnerService) {}
}

 