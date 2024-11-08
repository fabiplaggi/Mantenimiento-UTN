import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PisosService {

  private apiUrl = 'http://localhost:3000/api/pisos';

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Método para obtener las cabeceras con el token
  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getPisos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`, {
      headers: this.getAuthHeaders() // Agregar encabezado de autorización
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al obtener pisos:', error);
          return throwError(() => new Error('Error al obtener pisos: ' + error.message));
        })
      );
  }

  createPiso(piso: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, piso, {
      headers: this.getAuthHeaders() // Agregar encabezado de autorización
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al crear piso:', error);
          return throwError(() => new Error('Error al crear piso: ' + error.message));
        })
      );
  }

  updatePiso(id: number, piso: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, piso, {
      headers: this.getAuthHeaders() // Agregar encabezado de autorización
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al actualizar piso:', error);
          return throwError(() => new Error('Error al actualizar piso: ' + error.message));
        })
      );
  }

  deletePiso(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders() // Agregar encabezado de autorización
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al eliminar piso:', error);
          return throwError(() => new Error('Error al eliminar piso: ' + error.message));
        })
      );
  }
}