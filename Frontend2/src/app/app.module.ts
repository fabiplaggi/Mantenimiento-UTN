import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { LoginComponent } from './components/login/login.component';
import { DashbardWorkerComponent } from './components/dashboard-worker/dashbard-worker.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { InicioAdminComponent } from './components/inicio-admin/inicio-admin.component';

@NgModule({
    declarations: [
      AppComponent,
      LoginComponent,
      DashbardWorkerComponent,
      DashboardAdminComponent,
      InicioAdminComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        RouterOutlet,
        BrowserAnimationsModule,
        ToastrModule.forRoot()
    ],
    providers: [CookieService],
    bootstrap: [AppComponent],
  })
  export class AppModule {}