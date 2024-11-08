import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ActivoService {

  private apiUrl = 'http://localhost:3000/api/activos';

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Método para obtener las cabeceras con el token
  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getActivos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`, {
      headers: this.getAuthHeaders() // Agregar encabezado de autorización
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al obtener activos:', error);
          return throwError(() => new Error('Error al obtener activos: ' + error.message));
        })
      );
  }

  createActivo(activo: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, activo, {
      headers: this.getAuthHeaders() // Agregar encabezado de autorización
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al crear activo:', error);
          return throwError(() => new Error('Error al crear activo: ' + error.message));
        })
      );
  }

  updateActivo(id: number, activo: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, activo, {
      headers: this.getAuthHeaders() // Agregar encabezado de autorización
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al actualizar activo:', error);
          return throwError(() => new Error('Error al actualizar activo: ' + error.message));
        })
      );
  }

  deleteActivo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders() // Agregar encabezado de autorización
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al eliminar activo:', error);
          return throwError(() => new Error('Error al eliminar activo: ' + error.message));
        })
      );
  }
}