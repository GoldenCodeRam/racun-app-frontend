import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./routes/login/login.component";
import { ClientsComponent } from "./routes/clients/clients.component";
import { ClientsFormComponent } from "./routes/clients-form/clients-form.component";
import { ClientsService } from "./routes/clients/clients.service";
import { AuthService } from "./services/auth/auth.service";
import { RolesComponent } from "./routes/config/roles/roles.component";
import { CreateRoleModalComponent } from "./components/modals/create-role-modal/create-role-modal.component";
import { ApiService } from "./services/api/api.service";
import { MainNavbarComponent } from "./components/navbars/main-navbar/main-navbar.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RolesComponent,
        ClientsComponent,
        ClientsFormComponent,
        CreateRoleModalComponent,
        MainNavbarComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgbModule,
    ],
    providers: [ClientsService, AuthService, ApiService],
    bootstrap: [AppComponent],
})
export class AppModule {}
