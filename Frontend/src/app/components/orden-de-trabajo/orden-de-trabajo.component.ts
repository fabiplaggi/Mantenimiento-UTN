import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ActivoService } from '../../services/activo.service';
import { EdificioService } from '../../services/edificio.service';
import { PisosService } from '../../services/pisos.service';
import { SectorService } from '../../services/sector.service';
import { TareaService } from '../../services/tarea.service';
import { UbicacionService } from '../../services/ubicacion.service';
import { UsuarioService } from '../../services/usuarios.service';
import { OrdenDeTrabajoService } from '../../services/orden-de-trabajo.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-orden-de-trabajo',
  templateUrl: './orden-de-trabajo.component.html',
  styleUrls: ['./orden-de-trabajo.component.css']
})
export class OrdenTrabajoComponent implements OnInit {

  activos: any[] = [];
  edificios: any[] = [];
  pisos: any[] = [];
  sectores: any[] = [];
  tareas: any[] = [];
  ubicaciones: any[] = [];
  usuarios: any[] = [];

  Activo: any = null;
  Edificio: any = null;
  Piso: any = null;
  Sector: any = null;
  Tareas: any = null;
  Ubicacion: any = null;
  Usuario: any = null;

  constructor(
    private activoService: ActivoService,
    private edificioService: EdificioService,
    private pisoService: PisosService,
    private sectorService: SectorService,
    private tareaService: TareaService,
    private ubicacionService: UbicacionService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.cargarActivos();
    this.cargarEdificios();
    this.cargarPisos();
    this.cargarSectores();
    this.cargarTareas();
    this.cargarUbicaciones();
    this.cargarUsuarios();
  }

  cargarActivos(): void {
    this.activoService.getActivos.apply(
      (data: any[]) => {
        this.activos = data;
      }
    );
  }

  cargarEdificios(): void {
    this.edificioService.getEdificios.apply(
      (data: any[]) => {
        this.edificios = data;
      }
    );
  }

  cargarPisos(): void {
    this.pisoService.getPisos.apply(
      (data: any[]) => {
        this.pisos = data;
      }
    );
  }

  cargarSectores(): void {
    this.sectorService.getSectores.apply(
      (data: any[]) => {
        this.sectores = data;
      }
    );
  }

  cargarTareas(): void {
    this.tareaService.getTareas.apply(
      (data: any[]) => {
        this.tareas = data;
      }
    );
  }

  cargarUbicaciones(): void {
    this.ubicacionService.getUbicaciones.apply(
      (data: any[]) => {
        this.ubicaciones = data;
      }
    );
  }

  cargarUsuarios(): void {
    this.usuarioService.getUsers.apply(
      (data: any[]) => {
        this.usuarios = data;
      }
    );
  }

  ordenId: number | null = null;
  ordenMostrada: OrdenDeTrabajo | null = null;

  @ViewChild('ordenModal') ordenModal!: TemplateRef<any>;

  onSubmit() {
    this.OrdenDeTrabajoService.crearOrden(this.ordenDeTrabajo).subscribe((respuesta) => {
      alert('Orden creada con éxito');
    });
  }

  mostrarOrden() {
    if (this.ordenId) {
      this.OrdenDeTrabajoService.obtenerOrden(this.ordenId).subscribe((orden) => {
        this.ordenMostrada = orden;
        this.modalService.open(this.ordenModal);
      });
    }
  }

  closeModal() {
    this.modalService.dismissAll();
  }
}
