import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from '../../../services/usuarios.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  @ViewChild('editModal') editModal: any;
  @ViewChild('deleteModal') deleteModal: any;
  usuarios: any[] = [];
  selectedUsuarioId: number | null = null;
  nuevoUsername: string = '';
  nuevoPassword: string = '';
  nuevoRol: string = '';

  constructor(private usuarioService: UsuarioService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(
      (data) => {
        this.usuarios = data;
      },
      (error) => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }

  openEditModal(usuarioId: number, usernameActual: string, passwordActual: string, rolActual: string) {
    this.selectedUsuarioId = usuarioId;
    this.nuevoUsername = usernameActual;  // Resetear el nombre en cada edición
    this.nuevoPassword = passwordActual;
    this.nuevoRol = rolActual;
    this.modalService.open(this.editModal);
  }

  confirmEdit(modal: any) {
    if (this.selectedUsuarioId && this.nuevoUsername && this.nuevoPassword && this.nuevoRol) {
      this.usuarioService.updateUsuario(this.selectedUsuarioId, this.nuevoUsername, this.nuevoPassword, this.nuevoRol).subscribe(
        (response) => {
          console.log('Usuario actualizado:', response);
          this.ngOnInit();
          modal.close();
        },
        (error) => {
          console.error('Error al actualizar el usuario:', error);
        }
      );
    }
  }

  openDeleteModal(usuarioId: number) {
    this.selectedUsuarioId = usuarioId;
    this.modalService.open(this.deleteModal);
  }
  
  confirmDelete(modal: any) {
    if (this.selectedUsuarioId) {
      this.usuarioService.deleteUsuario(this.selectedUsuarioId).subscribe(
        (response) => {
          console.log('Usuario eliminado:', response);
          this.ngOnInit();
          modal.close();
        },
        (error) => {
          console.error('Error al eliminar el usuario:', error);
        }
      );
    }
  }
}
