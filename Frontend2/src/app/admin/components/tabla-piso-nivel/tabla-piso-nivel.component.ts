import { Component, OnInit, ViewChild } from '@angular/core';
import { PisoNivelService } from '../../../services/piso_nivel.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabla-piso-nivel',
  templateUrl: './tabla-piso-nivel.component.html',
  styleUrl: './tabla-piso-nivel.component.css'
})
export class TablaPisoNivelComponent {
  @ViewChild('editModal') editModal: any;
  @ViewChild('deleteModal') deleteModal: any;
  pisosNiveles: any[] = [];
  selectedPisoNivelId: number | null = null;
  nuevoNombre: string = '';

  constructor(private pisoNivelService: PisoNivelService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.pisoNivelService.getPisosNiveles().subscribe(
      (data) => {
        this.pisosNiveles = data;
      },
      (error) => {
        console.error('Error al obtener pisos/niveles:', error);
      }
    );
  }

  openEditModal(pisoNivelId: number, nombreActual: string) {
    this.selectedPisoNivelId = pisoNivelId;
    this.nuevoNombre = nombreActual;  // Resetear el nombre en cada edición
    this.modalService.open(this.editModal);
  }

  confirmEdit(modal: any) {
    if (this.selectedPisoNivelId && this.nuevoNombre) {
      this.pisoNivelService.updatePisoNivel(this.selectedPisoNivelId, this.nuevoNombre).subscribe(
        (response) => {
          console.log('Piso/Nivel actualizado:', response);
          this.ngOnInit();
          modal.close();
        },
        (error) => {
          console.error('Error al actualizar el piso/nivel:', error);
        }
      );
    }
  }

  openDeleteModal(pisoNivelId: number) {
    this.selectedPisoNivelId = pisoNivelId;
    this.modalService.open(this.deleteModal);
  }
  
  confirmDelete(modal: any) {
    if (this.selectedPisoNivelId) {
      this.pisoNivelService.deletePisoNivel(this.selectedPisoNivelId).subscribe(
        (response) => {
          console.log('Piso/Nivel eliminado:', response);
          this.ngOnInit();
          modal.close();
        },
        (error) => {
          console.error('Error al eliminar el piso/nivel:', error);
        }
      );
    }
  }
}
