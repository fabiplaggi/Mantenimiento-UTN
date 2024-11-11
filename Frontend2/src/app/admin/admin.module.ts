import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { InicioAdminComponent } from './components/inicio-admin/inicio-admin.component';

@NgModule({
    declarations: [
        HeaderAdminComponent,
        InicioAdminComponent
    ],
    imports: [
      CommonModule,
      AdminRoutingModule
    ]
  })
  export class AdminModule { }