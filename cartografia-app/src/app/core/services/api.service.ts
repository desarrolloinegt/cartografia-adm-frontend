import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = '';

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.api.host}`;
  }

  getAll(path: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${path}`);
  }

  getById(path: string, id: number | string): Observable<any> {
    return this.http.get(`${this.apiUrl}${path}/${id}`);
  }

  store(path: string, data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}${path}`, data);
  }

  update(path: string, data: any, id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}${path}/${id}`, data);
  }

  delete(path: string, id: number | string): Observable<any> {
    return this.http.delete(`${this.apiUrl}${path}/${id}`);
  }

  patch(path: string, data: any, id: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}${path}/${id}`, data);
  }
}
