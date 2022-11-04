import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { HomeComponent } from "./routes/home/home/home.component";
import { PageNotFoundComponent } from "./routes/home/page-not-found/page-not-found.component";
import { LoginComponent } from "./routes/login/login.component";
import { RolesComponent } from "./routes/config/roles/roles.component";
import { ClientsComponent } from "./routes/home/clients/clients.component";
import { ZonesComponent } from "./routes/home/zones/zones.component";
import { ConfigComponent } from "./routes/config/config/config.component";
import { UsersComponent } from "./routes/home/users/users.component";
import { HardwareComponent } from "./routes/home/hardware/hardware.component";
import { ShowUserComponent } from "./routes/home/users/show-user/show-user.component";
import { ShowClientComponent } from "./routes/home/clients/show-client/show-client.component";
import { ShowZoneComponent } from "./routes/home/zones/show-zone/show-zone.component";
import { ShowHardwareComponent } from "./routes/home/hardware/show-hardware/show-hardware.component";

const routes: Routes = [
    {
        path: "home",
        component: HomeComponent,
        canActivate: [AuthGuard],
    },
    {
        path: "users",
        component: UsersComponent,
        canActivate: [AuthGuard],
    },
    {
        path: "users/:userId",
        component: ShowUserComponent,
        canActivate: [AuthGuard],
    },
    {
        path: "clients",
        component: ClientsComponent,
        canActivate: [AuthGuard],
    },
    {
        path: "clients/:clientId",
        component: ShowClientComponent,
        canActivate: [AuthGuard],
    },
    {
        path: "zones",
        component: ZonesComponent,
        canActivate: [AuthGuard],
    },
    {
        path: "zones/:zoneId",
        component: ShowZoneComponent,
        canActivate: [AuthGuard],
    },
    {
        path: "hardware",
        component: HardwareComponent,
        canActivate: [AuthGuard],
    },
    {
        path: "hardware/:hardwareId",
        component: ShowHardwareComponent,
        canActivate: [AuthGuard],
    },
    {
        path: "config",
        component: ConfigComponent,
        canActivate: [AuthGuard],
    },
    {
        path: "config/roles",
        component: RolesComponent,
        canActivate: [AuthGuard],
    },
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full",
    },
    {
        path: "**",
        component: PageNotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
