import { Component, OnInit, ViewChild } from '@angular/core';
import { SectorService } from '../../../services/sector.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabla-sector',
  templateUrl: './tabla-sector.component.html',
  styleUrl: './tabla-sector.component.css'
})
export class TablaSectorComponent {
  @ViewChild('editModal') editModal: any;
  @ViewChild('deleteModal') deleteModal: any;
  sectores: any[] = [];
  displayedSectores: any[] = [];
  selectedSectorId: number | null = null;
  nuevoNombre: string = '';

  pageIndex: number = 0;
  pageSize: number = 50; // Tamaño de página (50 sectores por página)

  constructor(private sectorService: SectorService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.sectorService.getSectores().subscribe(
      (data) => {
        this.sectores = data;
        this.updateDisplayedSectores();
      },
      (error) => {
        console.error('Error al obtener sectores:', error);
      }
    );
  }
  updateDisplayedSectores(): void {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    this.displayedSectores = this.sectores.slice(start, end);
  }

  // Cambiar a la página siguiente
  nextPage(): void {
    if ((this.pageIndex + 1) * this.pageSize < this.sectores.length) {
      this.pageIndex++;
      this.updateDisplayedSectores();
    }
  }

  // Cambiar a la página anterior
  previousPage(): void {
    if (this.pageIndex > 0) {
      this.pageIndex--;
      this.updateDisplayedSectores();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.sectores.length / this.pageSize);
  }

  openEditModal(sectorId: number, nombreActual: string) {
    this.selectedSectorId = sectorId;
    this.nuevoNombre = nombreActual;  // Resetear el nombre en cada edición
    this.modalService.open(this.editModal);
  }

  confirmEdit(modal: any) {
    if (this.selectedSectorId && this.nuevoNombre) {
      this.sectorService.updateSector(this.selectedSectorId, this.nuevoNombre).subscribe(
        (response) => {
          console.log('Sector actualizado:', response);
          this.ngOnInit();
          modal.close();
        },
        (error) => {
          console.error('Error al actualizar el sector:', error);
        }
      );
    }
  }

  openDeleteModal(sectorId: number) {
    this.selectedSectorId = sectorId;
    this.modalService.open(this.deleteModal);
  }
  
  confirmDelete(modal: any) {
    if (this.selectedSectorId) {
      this.sectorService.deleteSector(this.selectedSectorId).subscribe(
        (response) => {
          console.log('Sector eliminado:', response);
          this.ngOnInit();
          modal.close();
        },
        (error) => {
          console.error('Error al eliminar el sector:', error);
        }
      );
    }
  }
}
