import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor( private apiService: ApiService) { }

  sendEmail(data:any){
    return this.apiService.store('generateTokenReset',data);
  }

  verify(data:any){
    return this.apiService.store('verifyToken',data);
  }

  changuePassword(data:any){
    return this.apiService.store('resetPassword',data)
  }
}
