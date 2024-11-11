import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth/login';

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { username, password }).pipe(
      tap((response: any) => {
        if (response.token) {
          this.setToken(response.token); // Guarda el token en la cookie
        }
      })
    );
  }

  isLoggedIn(): boolean {
    return this.cookieService.check('token'); 
  }

  getCurrentUser() {
    const token = this.getToken(); 
    if (token) {
      return this.decodeToken(token);
    }
    return null;
  }

  setToken(token: string): void {
    const now = new Date();
    const expiresIn = new Date(now.getTime() + 15 * 60 * 1000); // 15 minutos de expiración
    this.cookieService.set('token', token, { expires: expiresIn });
  }

  getToken(): string | null {
    return this.cookieService.get('token');
  }

  getUserRol(): string {
    const token = this.getToken();
    if (token) {
      const payload = this.decodeToken(token);
      return payload.rol;
    }
    return '';
  }

  getUserUsername(): string {
    const token = this.getToken();
    if (token) {
      const payload = this.decodeToken(token);
      return payload.username;
    }
    return '';
  }

  private decodeToken(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
  }

  getProtectedData(): Observable<any> {
    const protectedUrl = 'http://localhost:3000/api/auth';  
    return this.http.get(protectedUrl, { withCredentials: true });
  }
}
