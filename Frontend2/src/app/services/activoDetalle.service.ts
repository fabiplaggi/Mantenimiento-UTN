import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivoDetalleService {
  private apiUrl = 'http://localhost:3000/api/activo-detalles';

  constructor(private http: HttpClient) {}

  getActivosDetalles(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getActivosDetalles2(id_codigo: string): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getActivoDetalleByCodigo(id_codigo: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id_codigo}`);
  }
  /*
  updateActivoDetalle(id_activo: number, nombre: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id_activo}`, { nombre });
  }

  deleteActivoDetalles(id_activo: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id_activo}`);
  }
  */
}
