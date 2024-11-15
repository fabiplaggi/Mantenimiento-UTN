import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrabajadorComponent } from './trabajador.component';
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

const routes: Routes = [
  {
    path: '',
    component: TrabajadorComponent,
    children: [
        { path: '', redirectTo: 'inicio-admin', pathMatch: 'full' },
        { path: 'inicio-admin', component: InicioTrabajadorComponent },
        { path: 'tablas', component: TablasComponent},
        { path: 'tablas/tabla-activo', component: TablaActivoComponent},
        { path: 'tablas/tabla-edificio', component: TablaEdificioComponent},
        { path: 'tablas/tabla-piso_nivel', component: TablaPisoNivelComponent},
        { path: 'tablas/tabla-sector', component: TablaSectorComponent},
        { path: 'tablas/tabla-ubicacion', component: TablaUbicacionComponent},
        { path: 'tablas/tabla-activo-detalle', component: TablaActivoDetallesComponent},
        { path: 'orden-trabajo', component: OrdenTrabajo2Component}
    ]
}
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TrabajadorRoutingModule { }