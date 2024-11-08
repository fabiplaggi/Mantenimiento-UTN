import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { LoginComponent } from './components/login/login.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AdminUsuariosComponent } from './components/admin-usuarios/admin-usuarios.component';
import { AdminOrdenTrabajoComponent } from './components/admin-orden-trabajo/admin-orden-trabajo.component';
import { OrdenTrabajoComponent } from './components/orden-de-trabajo/orden-de-trabajo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminUsuariosComponent,
    AdminOrdenTrabajoComponent,
    OrdenTrabajoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterOutlet,
    SidenavComponent
],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
