import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrabajadorRoutingModule } from './trabajador-routing.module';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TrabajadorComponent } from './trabajador.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms'

import { HeaderTrabajadorComponent } from './components/header-trabajador/header-trabajador.component';
import { InicioTrabajadorComponent } from './components/inicio-trabajador/inicio-trabajador.component';
import { OrdenTrabajo2Component } from './components/orden-trabajo2/orden-trabajo2.component';
import { TablaActivoComponent } from './components/tabla-activo/tabla-activo.component';
import { TablaActivoDetallesComponent } from './components/tabla-activo-detalles/tabla-activo-detalles.component';
import { TablaEdificioComponent } from './components/tabla-edificio/tabla-edificio.component';
import { TablaPisoNivelComponent } from './components/tabla-piso-nivel/tabla-piso-nivel.component';
import { TablaSectorComponent } from './components/tabla-sector/tabla-sector.component';
import { TablaUbicacionComponent } from './components/tabla-ubicacion/tabla-ubicacion.component';
import { TablasComponent } from './components/tablas/tablas.component';

@NgModule({
    declarations: [
      TrabajadorComponent,
      HeaderTrabajadorComponent,
      InicioTrabajadorComponent,
      OrdenTrabajo2Component,
      TablaActivoComponent,
      TablaActivoDetallesComponent,
      TablaEdificioComponent,
      TablaPisoNivelComponent,
      TablaSectorComponent,
      TablaUbicacionComponent,
      TablasComponent
    ],
    imports: [
      CommonModule,
      TrabajadorRoutingModule,
      RouterOutlet,
      FormsModule,
      HttpClientModule,
      MatCardModule,
      ReactiveFormsModule
    ]
  })
  export class TrabajadorModule { }