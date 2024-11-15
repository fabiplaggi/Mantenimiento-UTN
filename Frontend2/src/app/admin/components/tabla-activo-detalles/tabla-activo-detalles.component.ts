import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivoDetalleService } from '../../../services/activoDetalle.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tabla-activo-detalles',
  templateUrl: './tabla-activo-detalles.component.html',
  styleUrl: './tabla-activo-detalles.component.css'
})
export class TablaActivoDetallesComponent {
  @ViewChild('editModal') editModal: any;
  @ViewChild('deleteModal') deleteModal: any;
  activoDetalles: any[] = [];
  displayedActivoDetalles: any[] = [];
  selectedActivoDetalleId: number | null = null;
  nuevoNombre: string = '';

  pageIndex: number = 0;
  pageSize: number = 50; // Tamaño de página (50 sectores por página)

  constructor(private activoDetalleService: ActivoDetalleService, private modalService: NgbModal, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.activoDetalleService.getActivosDetalles().subscribe(
      (data) => {
        this.activoDetalles = data;
        this.updateDisplayedActivoDetalles();
      },
      (error) => {
        console.error('Error al obtener detalles:', error);
      }
    );
  }
  updateDisplayedActivoDetalles(): void {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    this.displayedActivoDetalles = this.activoDetalles.slice(start, end);
  }

  // Cambiar a la página siguiente
  nextPage(): void {
    if ((this.pageIndex + 1) * this.pageSize < this.activoDetalles.length) {
      this.pageIndex++;
      this.updateDisplayedActivoDetalles();
    }
  }

  // Cambiar a la página anterior
  previousPage(): void {
    if (this.pageIndex > 0) {
      this.pageIndex--;
      this.updateDisplayedActivoDetalles();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.activoDetalles.length / this.pageSize);
  }

  copiarCodigo(id_codigo: string): void {
    // Crea un elemento de texto temporal para seleccionar y copiar el contenido
    const textArea = document.createElement('textarea');
    textArea.value = id_codigo;
    document.body.appendChild(textArea);
    
    // Selecciona el contenido del elemento y lo copia al portapapeles
    textArea.select();
    document.execCommand('copy');
    
    // Elimina el elemento temporal
    document.body.removeChild(textArea);
  
    // Muestra una notificación (opcional)
    this.toastr.success('Código copiado al portapapeles.', 'Portapapeles', {
      timeOut: 3500,
    });
  }
  /**
   openEditModal(activoDetalleId: number, nombreActual: string) {
     this.selectedActivoDetalleId = activoDetalleId;
     this.nuevoNombre = nombreActual;  // Resetear el nombre en cada edición
     this.modalService.open(this.editModal);
   }
   confirmEdit(modal: any) {
     if (this.selectedActivoDetalleId && this.nuevoNombre) {
       this.activoDetalleService.updateActivoDetalle(this.selectedActivoDetalleId, this.nuevoNombre).subscribe(
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
  
   openDeleteModal(activoDetalleId: number) {
     this.selectedActivoDetalleId = activoDetalleId;
     this.modalService.open(this.deleteModal);
   }
   
   confirmDelete(modal: any) {
     if (this.selectedActivoDetalleId) {
       this.activoDetalleService.deleteActivo(this.selectedSectorId).subscribe(
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
  */

}
