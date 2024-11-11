import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { TrabajadorGuard } from './guards/trabajador.guard';

import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canActivate: [AdminGuard],
      },
      {
        path: 'trabajador',
        loadChildren: () => import('./trabajador/trabajador.module').then(m => m.TrabajadorModule),
        canActivate: [TrabajadorGuard],
      },
    { path: '**', redirectTo: '/login' }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }