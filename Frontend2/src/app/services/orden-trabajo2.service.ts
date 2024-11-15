import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdenDeTrabajo } from '../admin/models/orden-trabajo.model';
@Injectable({
  providedIn: 'root'
})
export class OrdenDeTrabajoService {
  private apiUrl = 'http://localhost:3000/api/ordenes-trabajo'; // Ajusta la URL si es necesario

  constructor(private http: HttpClient) { }

  crearOrden(ordenDeTrabajo: OrdenDeTrabajo): Observable<OrdenDeTrabajo> {
    return this.http.post<OrdenDeTrabajo>(`${this.apiUrl}/ordenes`, ordenDeTrabajo  );
  }

  listarOrdenes(): Observable<OrdenDeTrabajo[]> {
    return this.http.get<OrdenDeTrabajo[]>(`${this.apiUrl}/ordenes`);
  }
}
