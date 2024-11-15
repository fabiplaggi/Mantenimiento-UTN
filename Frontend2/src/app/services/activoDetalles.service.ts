// en `activo.service.ts`
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivoDetallesService {
  private apiUrl = 'http://localhost:3000/api/activo-detalles';

  constructor(private http: HttpClient) {}

  getActivoDetalleByCodigo(id_codigo: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id_codigo}`);
  }
}
