import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { LoginComponent } from './login/login.component';
import { ZonesFormComponent } from './zones-form/zones-form.component';
import { ZonesComponent } from './zones/zones.component';

const routes: Routes = [

  {path: '', redirectTo: '/login',pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'zones', component: ZonesComponent},
  {path: 'zones/add', component: ZonesFormComponent},
  {path: 'zones/edit/:id', component: ZonesFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
