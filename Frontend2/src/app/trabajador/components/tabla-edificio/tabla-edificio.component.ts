import { Component, OnInit, ViewChild } from '@angular/core';
import { EdificioService } from '../../../services/edificio.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabla-edificio',
  templateUrl: './tabla-edificio.component.html',
  styleUrl: './tabla-edificio.component.css'
})
export class TablaEdificioComponent {
  @ViewChild('editModal') editModal: any;
  @ViewChild('deleteModal') deleteModal: any;
  edificios: any[] = [];
  selectedEdificioId: number | null = null;
  nuevoNombre: string = '';

  constructor(private edificioService: EdificioService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.edificioService.getEdificios().subscribe(
      (data) => {
        console.log(data);
        this.edificios = data;
      },
      (error) => {
        console.error('Error al obtener edificios:', error);
      }
    );
  }

  openEditModal(edificioId: number, nombreActual: string) {
    this.selectedEdificioId = edificioId;
    this.nuevoNombre = nombreActual;  // Resetear el nombre en cada edición
    this.modalService.open(this.editModal);
  }

  confirmEdit(modal: any) {
    if (this.selectedEdificioId && this.nuevoNombre) {
      this.edificioService.updateEdificio(this.selectedEdificioId, this.nuevoNombre).subscribe(
        (response) => {
          console.log('Edificio actualizado:', response);
          this.ngOnInit();
          modal.close();
        },
        (error) => {
          console.error('Error al actualizar el edificio:', error);
        }
      );
    }
  }

  openDeleteModal(edificioId: number) {
    this.selectedEdificioId = edificioId;
    this.modalService.open(this.deleteModal);
  }
  
  confirmDelete(modal: any) {
    if (this.selectedEdificioId) {
      this.edificioService.deleteEdificio(this.selectedEdificioId).subscribe(
        (response) => {
          console.log('Edificio eliminado:', response);
          this.ngOnInit();
          modal.close();
        },
        (error) => {
          console.error('Error al eliminar el edificio:', error);
        }
      );
    }
  }
}
