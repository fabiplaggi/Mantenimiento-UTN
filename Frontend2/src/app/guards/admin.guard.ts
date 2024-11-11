import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const user = this.authService.getCurrentUser(); // Método que obtenga el usuario actual

    if (user && user.rol === 'administrador') {
      return true; // Permite el acceso si el rol es 'operario'
    }

    // Si el rol no es 'operario', redirige a la página de inicio o login
    this.router.navigate(['/login']);
    alert('Acceso denegado')
    return false; // Bloquea el acceso
  }
}
