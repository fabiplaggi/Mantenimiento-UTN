import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';

import { AdminComponent } from './admin.component';
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

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: '', redirectTo: 'inicio-admin', pathMatch: 'full' },
            { path: 'inicio-admin', component: InicioAdminComponent },
            { path: 'tablas', component: TablasComponent},
            { path: 'tablas/tabla-activo', component: TablaActivoComponent},
            { path: 'tablas/tabla-edificio', component: TablaEdificioComponent},
            { path: 'tablas/tabla-piso_nivel', component: TablaPisoNivelComponent},
            { path: 'tablas/tabla-sector', component: TablaSectorComponent},
            { path: 'tablas/tabla-ubicacion', component: TablaUbicacionComponent},
            { path: 'tablas/tabla-activo-detalle', component: TablaActivoDetallesComponent},
            { path: 'usuarios', component: UsuariosCardsComponent},
            { path: 'orden-trabajo', component: OrdenTrabajo2Component}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }