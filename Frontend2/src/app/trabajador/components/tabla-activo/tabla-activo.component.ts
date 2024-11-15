import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivoService } from '../../../services/activo.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabla-activo',
  templateUrl: './tabla-activo.component.html',
  styleUrls: ['./tabla-activo.component.css']
})
export class TablaActivoComponent {
  @ViewChild('editModal') editModal: any;
  @ViewChild('deleteModal') deleteModal: any;
  activos: any[] = [];
  selectedActivoId: number | null = null;
  nuevoNombre: string = '';

  constructor(private activoService: ActivoService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.activoService.getActivos().subscribe(
      (data) => {
        this.activos = data;
      },
      (error) => {
        console.error('Error al obtener activos:', error);
      }
    );
  }

  openEditModal(activoId: number, nombreActual: string) {
    this.selectedActivoId = activoId;
    this.nuevoNombre = nombreActual;  // Resetear el nombre en cada edición
    this.modalService.open(this.editModal);
  }

  confirmEdit(modal: any) {
    if (this.selectedActivoId && this.nuevoNombre) {
      this.activoService.updateActivo(this.selectedActivoId, this.nuevoNombre).subscribe(
        (response) => {
          console.log('Activo actualizado:', response);
          this.ngOnInit();
          modal.close();
        },
        (error) => {
          console.error('Error al actualizar el activo:', error);
        }
      );
    }
  }

  openDeleteModal(activoId: number) {
    this.selectedActivoId = activoId;
    this.modalService.open(this.deleteModal);
  }
  
  confirmDelete(modal: any) {
    if (this.selectedActivoId) {
      this.activoService.deleteActivo(this.selectedActivoId).subscribe(
        (response) => {
          console.log('Activo eliminado:', response);
          this.ngOnInit();
          modal.close();
        },
        (error) => {
          console.error('Error al eliminar el activo:', error);
        }
      );
    }
  }
}
