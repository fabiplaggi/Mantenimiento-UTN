import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  private apiUrl = 'http://localhost:3000/api/sectores';

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Método para obtener las cabeceras con el token
  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getSectores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`, {
      headers: this.getAuthHeaders() // Agregar encabezado de autorización
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al obtener sectores:', error);
          return throwError(() => new Error('Error al obtener sectores: ' + error.message));
        })
      );
  }

  createSector(sector: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, sector, {
      headers: this.getAuthHeaders() // Agregar encabezado de autorización
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al crear sector:', error);
          return throwError(() => new Error('Error al crear sector: ' + error.message));
        })
      );
  }

  updateSector(id: number, sector: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, sector, {
      headers: this.getAuthHeaders() // Agregar encabezado de autorización
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al actualizar sector:', error);
          return throwError(() => new Error('Error al actualizar sector: ' + error.message));
        })
      );
  }

  deleteSector(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders() // Agregar encabezado de autorización
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al eliminar sector:', error);
          return throwError(() => new Error('Error al eliminar sector: ' + error.message));
        })
      );
  }
}