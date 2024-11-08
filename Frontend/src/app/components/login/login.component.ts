import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        console.log('Login exitoso', response);

        const userUsername = this.authService.getUserUsername();
      
        const userRole = this.authService.getUserRole();
        console.log('Rol del usuario:', userRole);

        if (userRole === 'administrador') {
          this.router.navigate(['/home']);
          alert('Accediste con el rol de ' + userRole)
        } else if (userRole === 'trabajador') {
          this.router.navigate(['/home']);
          alert('Accediste con el rol de ' + userRole)
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
