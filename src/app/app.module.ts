import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { ClientsComponent } from './clients/clients.component';
import { ClientsFormComponent } from './clients-form/clients-form.component';
import { ClientsService } from './clients/clients.service';
import { ZonesComponent } from './zones/zones.component';
import { ZoneService } from './zones/zone.service';
import { ZonesFormComponent } from './zones-form/zones-form.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientsComponent,
    ClientsFormComponent,
    ZonesComponent,
    ZonesFormComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    ClientsService,
    ZoneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
