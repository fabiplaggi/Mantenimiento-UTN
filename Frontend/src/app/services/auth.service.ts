import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { AuthCookieService } from './cookie.service';

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
          this.setToken(response.token);
        }
      })
    );
  }

  isLoggedIn(): boolean {
    return this.cookieService.check('token'); 
  }

  setToken(token: string): void {
    const now = new Date();
    const expiresIn = new Date(now.getTime() + 15 * 60 * 1000);
    this.cookieService.set('token', token, { expires: expiresIn });
  }

  getToken(): string {
    return this.cookieService.get('access_token');
  }

  clearTokens() {
    this.cookieService.delete('access_token', '/');
    this.cookieService.delete('refresh_token', '/');
  }

  getCurrentUser() {
    const token = this.getToken(); 
    if (token) {
      return this.decodeToken(token);
    }
    return null;
  }

  getUserRole(): string {
    const token = this.getToken();
    if (token) {
      const payload = this.decodeToken(token);
      return payload.rol;
    }
    return '';
  }

  private decodeToken(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
  }
  getUserUsername(): string {
    const token = this.getToken();
    if (token) {
      const payload = this.decodeToken(token);
      return payload.username;
    }
    return '';
  }

  getProtectedData(): Observable<any> {
    const protectedUrl = 'http://localhost:3000';  
    return this.http.get(protectedUrl, { withCredentials: true });
  }

  logout(): Observable<any> {
    return this.http.post('http://localhost:3000/api/auth/logout', {}).pipe(
      tap(() => {
        this.cookieService.delete('token'); // Elimina la cookie 'token'
      })
    );
  }
}

