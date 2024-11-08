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

    const userRol = this.authService.getUserRole();

    if (userRol === 'administrador') {
      return true;
    } else if (userRol === 'trabajador') {
      if (route.routeConfig?.path === 'home') {
        return true;
      } else {
        alert('Rol no autorizado');
        return false;
      }
    }
    this.router.navigate(['/login']);
    return false;
  }
}
