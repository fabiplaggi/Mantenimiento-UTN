import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private apiUrl = 'http://localhost:3000/api/tareas';

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Método para obtener las cabeceras con el token
  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getTareas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`, {
      headers: this.getAuthHeaders() // Agregar encabezado de autorización
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al obtener tareas:', error);
          return throwError(() => new Error('Error al obtener tareas: ' + error.message));
        })
      );
  }

  createTarea(tarea: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, tarea, {
      headers: this.getAuthHeaders() // Agregar encabezado de autorización
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al crear tarea:', error);
          return throwError(() => new Error('Error al crear tarea: ' + error.message));
        })
      );
  }

  updateTarea(id: number, tarea: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, tarea, {
      headers: this.getAuthHeaders() // Agregar encabezado de autorización
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al actualizar tarea:', error);
          return throwError(() => new Error('Error al actualizar tarea: ' + error.message));
        })
      );
  }

  deleteTarea(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders() // Agregar encabezado de autorización
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al eliminar tarea:', error);
          return throwError(() => new Error('Error al eliminar tarea: ' + error.message));
        })
      );
  }
}