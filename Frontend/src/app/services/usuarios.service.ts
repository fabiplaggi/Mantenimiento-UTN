import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000/api/usuarios'; // Ruta del AdminUsuarioController

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Método para obtener las cabeceras con el token
  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  // Obtener todos los usuarios
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`, {
      headers: this.getAuthHeaders() // Agregar encabezado de autorización
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al obtener usuarios:', error);
          return throwError(() => new Error('Error al obtener usuarios: ' + error.message));
        })
      );
  }

  // Crear un nuevo usuario
  createUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, user, {
      headers: this.getAuthHeaders() // Agregar encabezado de autorización
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al crear usuario:', error);
          return throwError(() => new Error('Error al crear usuario: ' + error.message));
        })
      );
  }

  // Actualizar un usuario existente
  updateUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, user, {
      headers: this.getAuthHeaders() // Agregar encabezado de autorización
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al actualizar usuario:', error);
          return throwError(() => new Error('Error al actualizar usuario: ' + error.message));
        })
      );
  }

  // Eliminar un usuario
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders() // Agregar encabezado de autorización
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al eliminar usuario:', error);
          return throwError(() => new Error('Error al eliminar usuario: ' + error.message));
        })
      );
  }
}
