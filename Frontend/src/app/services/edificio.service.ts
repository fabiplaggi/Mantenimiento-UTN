import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EdificioService {

  private apiUrl = 'http://localhost:3000/api/edificios';

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Método para obtener las cabeceras con el token
  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getEdificios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`, {
      headers: this.getAuthHeaders() // Agregar encabezado de autorización
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al obtener edificios:', error);
          return throwError(() => new Error('Error al obtener edificios: ' + error.message));
        })
      );
  }

  createEdificio(edificio: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, edificio, {
      headers: this.getAuthHeaders() // Agregar encabezado de autorización
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al crear edificio:', error);
          return throwError(() => new Error('Error al crear edificio: ' + error.message));
        })
      );
  }

  updateEdificio(id: number, edificio: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, edificio, {
      headers: this.getAuthHeaders() // Agregar encabezado de autorización
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al actualizar edificio:', error);
          return throwError(() => new Error('Error al actualizar edificio: ' + error.message));
        })
      );
  }

  deleteEdificio(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders() // Agregar encabezado de autorización
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al eliminar edificio:', error);
          return throwError(() => new Error('Error al eliminar edificio: ' + error.message));
        })
      );
  }
}