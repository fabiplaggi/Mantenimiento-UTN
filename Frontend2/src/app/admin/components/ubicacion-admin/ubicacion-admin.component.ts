import { Component, OnInit } from '@angular/core';
import { UbicacionService } from '../../../services/ubicacion.service';

@Component({
  selector: 'app-ubicacion-admin',
  templateUrl: './ubicacion-admin.component.html',
  styleUrl: './ubicacion-admin.component.css'
})
export class UbicacionAdminComponent implements OnInit{
  ubicaciones: any[] = [];      // Todas las ubicaciones
  filteredUbicaciones: any[] = []; // Ubicaciones filtradas
  filterText: string = '';        // Texto de filtro

  constructor(private ubicacionService: UbicacionService) {}

  ngOnInit(): void {
    this.fetchUbicaciones();
  }

  fetchUbicaciones(): void {
    this.ubicacionService.getAllUbicaciones().subscribe(
      data => {
        this.ubicaciones = data;
        this.filteredUbicaciones = data; // Inicialmente sin filtro
      },
      error => {
        console.error('Error al cargar ubicaciones:', error);
      }
    );
  }

  filterUbicaciones(): void {
    if (this.filterText.trim()) {
      // Filtra las ubicaciones por el nombre que contiene el texto del filtro
      this.filteredUbicaciones = this.ubicaciones.filter(ubicacion =>
        ubicacion.nombre.toLowerCase().includes(this.filterText.toLowerCase())
      );
    } else {
      // Si no hay filtro, muestra todas las ubicaciones
      this.filteredUbicaciones = this.ubicaciones;
    }
  }
}
