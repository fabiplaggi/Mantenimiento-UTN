import { Component, OnInit, ViewChild } from '@angular/core';
import { UbicacionService } from '../../../services/ubicacion.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabla-ubicacion',
  templateUrl: './tabla-ubicacion.component.html',
  styleUrl: './tabla-ubicacion.component.css'
})
export class TablaUbicacionComponent {
  @ViewChild('editModal') editModal: any;
  @ViewChild('deleteModal') deleteModal: any;
  ubicaciones: any[] = [];
  selectedUbicacionId: number | null = null;
  nuevoNombre: string = '';

  constructor(private ubicacionService: UbicacionService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.ubicacionService.getUbicaciones().subscribe(
      (data) => {
        this.ubicaciones = data;
      },
      (error) => {
        console.error('Error al obtener ubicaciones:', error);
      }
    );
  }

  openEditModal(ubicacionId: number, nombreActual: string) {
    this.selectedUbicacionId = ubicacionId;
    this.nuevoNombre = nombreActual;  // Resetear el nombre en cada edición
    this.modalService.open(this.editModal);
  }

  confirmEdit(modal: any) {
    if (this.selectedUbicacionId && this.nuevoNombre) {
      this.ubicacionService.updateUbicacion(this.selectedUbicacionId, this.nuevoNombre).subscribe(
        (response) => {
          console.log('Ubicacion actualizada:', response);
          this.ngOnInit();
          modal.close();
        },
        (error) => {
          console.error('Error al actualizar la ubicación:', error);
        }
      );
    }
  }

  openDeleteModal(ubicacionId: number) {
    this.selectedUbicacionId = ubicacionId;
    this.modalService.open(this.deleteModal);
  }
  
  confirmDelete(modal: any) {
    if (this.selectedUbicacionId) {
      this.ubicacionService.deleteUbicacion(this.selectedUbicacionId).subscribe(
        (response) => {
          console.log('Ubicación eliminada:', response);
          this.ngOnInit();
          modal.close();
        },
        (error) => {
          console.error('Error al eliminar la ubicación:', error);
        }
      );
    }
  }
}
