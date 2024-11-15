import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  private apiUrl = 'http://localhost:3000/api/ubicaciones';

  constructor(private http: HttpClient) {}

  getUbicaciones(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  updateUbicacion(id_ubicacion: number, nombre: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id_ubicacion}`, { nombre });
  }

  deleteUbicacion(id_ubicacion: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id_ubicacion}`);
  }
}
