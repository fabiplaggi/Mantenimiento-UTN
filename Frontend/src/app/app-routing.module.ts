import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './components/login/login.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AdminUsuariosComponent } from './components/admin-usuarios/admin-usuarios.component';
import { AdminOrdenTrabajoComponent } from './components/admin-orden-trabajo/admin-orden-trabajo.component';
import { OrdenTrabajoComponent } from './components/orden-de-trabajo/orden-de-trabajo.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: SidenavComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/usuarios',
    component: AdminUsuariosComponent,
    canActivate: [AuthGuard],
    data: { requiresAuth: true, rol: 'administrador' },
  },
  {
    path: 'admin-ordenes',
    component: AdminOrdenTrabajoComponent,
    canActivate: [AuthGuard],
    data: { requiresAuth: true, rol: 'administrador' },
  },
  {
    path: 'ordenes',
    component: OrdenTrabajoComponent,
    canActivate: [AuthGuard],
    data: { requiresAuth: true },
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
