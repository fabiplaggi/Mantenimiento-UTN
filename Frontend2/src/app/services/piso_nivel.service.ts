import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PisoNivelService {
  private apiUrl = 'http://localhost:3000/api/pisos';

  constructor(private http: HttpClient) {}

  getPisosNiveles(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  updatePisoNivel(id_piso_nivel: number, nombre: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id_piso_nivel}`, { nombre });
  }

  deletePisoNivel(id_piso_nivel: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id_piso_nivel}`);
  }
}
