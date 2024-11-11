import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { InicioAdminComponent } from './components/inicio-admin/inicio-admin.component';

const routes: Routes = [
    {path: '', component: HeaderAdminComponent, children: [
        { path: '', redirectTo: 'inicio-admin', pathMatch: 'full' },
        { path: 'inicio-admin', component: InicioAdminComponent }
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }