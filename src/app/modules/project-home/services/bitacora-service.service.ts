import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class BitacoraServiceService {

  constructor(private apiService: ApiService) { }


  getLog(data:any){
    return this.apiService.store('bitacoraUpm',data);
  }
}
