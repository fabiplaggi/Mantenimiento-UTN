import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrdenTrabajoService } from '../../../services/orden-trabajo.service'; // Suponiendo que tienes un servicio de órdenes de trabajo
import { ActivoDetalleService } from '../../../services/activoDetalle.service'; // Suponiendo que tienes un servicio para obtener datos del activo

@Component({
  selector: 'app-orden-trabajo',
  templateUrl: './orden-trabajo.component.html',
  styleUrl: './orden-trabajo.component.css'
})
export class OrdenTrabajoComponent implements OnInit{
  ordenForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ordenTrabajoService: OrdenTrabajoService,
    private activoDetalleService: ActivoDetalleService
  ) {
    this.ordenForm = this.fb.group({
      codigo: ['', Validators.required],
      edificio: [{ value: '', disabled: true }, Validators.required],
      piso_nivel: [{ value: '', disabled: true }, Validators.required],
      sector: [{ value: '', disabled: true }, Validators.required],
      activo: [{ value: '', disabled: true }, Validators.required],
      ubicacion: [{ value: '', disabled: true }, Validators.required],
      descripcion: ['', Validators.required], // Ejemplo de campo adicional para descripción
      // Otros campos de la orden de trabajo
    });
  }

  ngOnInit(): void {}

  onCodigoChange(): void {
    const id_codigo = this.ordenForm.get('id_codigo')?.value;
    if (id_codigo) {
      // Llama a la función que obtiene los datos del activo por código
      this.activoDetalleService.getActivoDetalleByCodigo(id_codigo).subscribe(
        (activo) => {
          if (activo) {
            // Completa automáticamente los campos relacionados
            this.ordenForm.patchValue({
              edificio: activo.id_edificio,
              piso_nivel: activo.id_piso_nivel,
              sector: activo.id_sector,
              activo: activo.id_activo,
              ubicacion: activo.id_ubicacion
            });
          }
        },
        (error) => {
          console.error('Error obteniendo datos del activo:', error);
        }
      );
    }
  }

  onSubmit(): void {
    if (this.ordenForm.valid) {
      this.ordenTrabajoService.createOrdenTrabajo(this.ordenForm.value).subscribe(
        (response) => {
          console.log('Orden de trabajo creada:', response);
          // Aquí puedes agregar lógica para redirigir o notificar al usuario
        },
        (error) => {
          console.error('Error creando la orden de trabajo:', error);
        }
      );
    }
  }
}
