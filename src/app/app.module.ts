import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ComponentsModule } from "./components/components.module";
import { HomeModule } from "./routes/home/home.module";
import { LoginComponent } from "./routes/login/login.component";
import { RolesComponent } from "./routes/config/roles/roles.component";
import { ClientsComponent } from "./routes/home/clients/clients.component";
import { HomeComponent } from "./routes/home/home/home.component";
import { ConfigComponent } from "./routes/config/config/config.component";
import { AuthService } from "./services/auth/auth.service";
import { ApiService } from "./services/api/api.service";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RolesComponent,
        ClientsComponent,
        HomeComponent,
        ConfigComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgbModule,
        ComponentsModule,
        HomeModule,
    ],
    providers: [AuthService, ApiService],
    bootstrap: [AppComponent],
})
export class AppModule {}
