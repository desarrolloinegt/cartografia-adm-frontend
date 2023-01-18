import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private apiService: ApiService) { }

  getSurveys(){
    return this.apiService.getAll('encuestas');
  }
}
