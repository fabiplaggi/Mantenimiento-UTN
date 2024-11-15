import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EdificioService {
  private apiUrl = 'http://localhost:3000/api/edificios';

  constructor(private http: HttpClient) {}

  getEdificios(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  updateEdificio(id_edificio: number, nombre: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id_edificio}`, { nombre });
  }

  deleteEdificio(id_edificio: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id_edificio}`);
  }
}
