import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./routes/login/login.component";
import { ClientsFormComponent } from "./routes/clients-form/clients-form.component";
import { AuthService } from "./services/auth/auth.service";
import { RolesComponent } from "./routes/config/roles/roles.component";
import { CreateRoleModalComponent } from "./components/modals/create-role-modal/create-role-modal.component";
import { ApiService } from "./services/api/api.service";
import { MainNavbarComponent } from "./components/navbars/main-navbar/main-navbar.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MainLoaderComponent } from "./components/dynamic/loaders/main-loader/main-loader.component";
import { HomeComponent } from "./routes/home/home/home.component";
import { ClientsComponent } from "./routes/home/clients/clients.component";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RolesComponent,
        ClientsComponent,
        ClientsFormComponent,
        CreateRoleModalComponent,
        MainNavbarComponent,
        MainLoaderComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgbModule,
    ],
    providers: [AuthService, ApiService],
    bootstrap: [AppComponent],
})
export class AppModule {}
