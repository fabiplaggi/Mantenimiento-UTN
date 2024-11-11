import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private cookieService: CookieService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const token = this.cookieService.get('token');

    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    const userRol = this.authService.getUserRol();

    if (userRol === 'administrador') {
      return true; // El admin tiene acceso a todas las rutas
    } else if (userRol === 'trabajador') {
      if (route.routeConfig?.path === 'dashboard-trabajador') {
        return true; // Permitir acceso a dashboard-op
      } else {
        alert('Acceso Denegado'); // Mostrar mensaje de acceso denegado
        return false; // Bloquear acceso
      }
    }

    // Redirigir a login si el rol no es reconocido
    this.router.navigate(['/login']);
    return false;
  }
}
