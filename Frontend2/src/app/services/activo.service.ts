import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivoService {
  private apiUrl = 'http://localhost:3000/api/activos';

  constructor(private http: HttpClient) {}

  getActivos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  updateActivo(id_activo: number, nombre: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id_activo}`, { nombre });
  }

  deleteActivo(id_activo: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id_activo}`);
  }
}
