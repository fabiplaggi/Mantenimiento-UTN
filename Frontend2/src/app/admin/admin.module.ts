import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms'

import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { InicioAdminComponent } from './components/inicio-admin/inicio-admin.component';
import { TablasComponent } from './components/tablas/tablas.component';
import { TablaActivoComponent } from './components/tabla-activo/tabla-activo.component';
import { TablaEdificioComponent } from './components/tabla-edificio/tabla-edificio.component';
import { TablaPisoNivelComponent } from './components/tabla-piso-nivel/tabla-piso-nivel.component';
import { TablaSectorComponent } from './components/tabla-sector/tabla-sector.component';
import { TablaUbicacionComponent } from './components/tabla-ubicacion/tabla-ubicacion.component';
import { TablaActivoDetallesComponent } from './components/tabla-activo-detalles/tabla-activo-detalles.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuariosCardsComponent } from './components/usuarios-cards/usuarios-cards.component';
import { OrdenTrabajoComponent } from './components/orden-trabajo/orden-trabajo.component';
import { OrdenTrabajo2Component } from './components/orden-trabajo2/orden-trabajo2.component';

@NgModule({
    declarations: [
        AdminComponent,
        HeaderAdminComponent,
        InicioAdminComponent,
        TablasComponent,
        TablaActivoComponent,
        TablaEdificioComponent,
        TablaPisoNivelComponent,
        TablaSectorComponent,
        TablaUbicacionComponent,
        TablaActivoDetallesComponent,
        UsuariosComponent,
        UsuariosCardsComponent,
        OrdenTrabajoComponent,
        OrdenTrabajo2Component
    ],
    imports: [
      CommonModule,
      AdminRoutingModule,
      RouterOutlet,
      FormsModule,
      HttpClientModule,
      MatCardModule,
      ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AdminComponent]
  })
  export class AdminModule { }