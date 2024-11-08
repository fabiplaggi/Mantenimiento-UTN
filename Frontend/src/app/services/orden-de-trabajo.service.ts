import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrdenDeTrabajoService {
  private apiUrl = 'http://localhost:3000/api/ordenes-trabajo'; // Ajusta la URL si es necesario

  constructor(private http: HttpClient, private authService: AuthService ) { }

  private agregarTokenAHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  crearOrden(ordenDeTrabajo: any): Observable<any> {
    const headers = this.agregarTokenAHeaders();
    return this.http.post(`${this.apiUrl}/crear`, ordenDeTrabajo, { headers });
  }

  obtenerOrden(id: number): Observable<any> {
    const headers = this.agregarTokenAHeaders();
    return this.http.get(`${this.apiUrl}/${id}`, { headers });
  }

  listarOrdenes(): Observable<any[]> {
    return this.http.get<[]>(`${this.apiUrl}/listar`, {
      headers: { Authorization: `Bearer ${this.authService.getToken()}` }
    });
  }
  
}
