import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  private apiUrl = 'http://localhost:3000/api/ubicaciones';

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Método para obtener las cabeceras con el token
  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getUbicaciones(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`, {
      headers: this.getAuthHeaders() // Agregar encabezado de autorización
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al obtener ubicaciones:', error);
          return throwError(() => new Error('Error al obtener ubicaciones: ' + error.message));
        })
      );
  }

  createUbicacion(ubicacion: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, ubicacion, {
      headers: this.getAuthHeaders() // Agregar encabezado de autorización
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al crear ubicacion:', error);
          return throwError(() => new Error('Error al crear ubicacion: ' + error.message));
        })
      );
  }

  updateUbicacion(id: number, ubicacion: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, ubicacion, {
      headers: this.getAuthHeaders() // Agregar encabezado de autorización
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al actualizar ubicacion:', error);
          return throwError(() => new Error('Error al actualizar ubicacion: ' + error.message));
        })
      );
  }

  deleteUbicacion(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders() // Agregar encabezado de autorización
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al eliminar ubicacion:', error);
          return throwError(() => new Error('Error al eliminar ubicacion: ' + error.message));
        })
      );
  }
}