import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenTrabajoService {
  private apiUrl = 'http://localhost:3000/api/ordenes-trabajo';

  constructor(private http: HttpClient) {}

  createOrdenTrabajo(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, data);
  }
}
