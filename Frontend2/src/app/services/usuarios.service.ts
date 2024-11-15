import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000/api/usuarios';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  updateUsuario(id_usuario: number, username: string, password: string, rol: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id_usuario}`, { username });
  }

  deleteUsuario(id_usuario: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id_usuario}`);
  }
}
