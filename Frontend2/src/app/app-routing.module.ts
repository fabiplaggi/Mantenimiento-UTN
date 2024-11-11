import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { TrabajadorGuard } from './guards/trabajador.guard';

import { LoginComponent } from './components/login/login.component';
import { DashbardWorkerComponent } from './components/dashboard-worker/dashbard-worker.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { InicioAdminComponent } from './components/inicio-admin/inicio-admin.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    {
        path: 'dashboardWorker',
        component: DashbardWorkerComponent,
        canActivate: [TrabajadorGuard]
    },
    {
        path: 'dashboardAdmin',
        component: DashboardAdminComponent,
        canActivate: [AdminGuard]
    },
    {
        path: 'inicioAdmin',
        component: InicioAdminComponent,
        canActivate: [AdminGuard]
    },
    { path: '**', redirectTo: '/login' }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }