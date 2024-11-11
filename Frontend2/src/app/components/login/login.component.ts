import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        console.log('Login exitoso', response);

        // Guardar el token en la cookie ya se realiza en el AuthService

        // Obtener el rol del usuario del token
        const userRol = this.authService.getUserRol();
        const userUsername = this.authService.getUserUsername();

        console.log('Rol del usuario:', userRol);
        // Redirigir según el rol del usuario
        if (userRol === 'administrador') {
          this.router.navigate(['/dashboardAdmin']);  // Redirige al admin al dashboard
          this.toastr.info('Ingresaste con el rol de administrador.', 'Administrador', {
            timeOut: 3500,
          });
        } else if (userRol === 'trabajador') {
          this.router.navigate(['/dashboardWorker']); // Redirige al operario al dashboard-op
        } else {
          this.errorMessage = 'Rol no reconocido.';
        }
      },
      error => {
        console.error('Error en el login', error);
        this.errorMessage = 'Usuario o contraseña incorrectos.';
      }
    );
  }
}
