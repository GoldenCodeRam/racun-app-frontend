import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { HomeComponent } from "./routes/home/home/home.component";
import { PageNotFoundComponent } from "./routes/home/page-not-found/page-not-found.component";
import { LoginComponent } from "./routes/login/login.component";
import { RolesComponent } from "./routes/config/roles/roles.component";
import { ClientsComponent } from "./routes/home/clients/clients.component";

const routes: Routes = [
    {
        path: "home",
        component: HomeComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {
                path: "clients",
                component: ClientsComponent,
            },
        ]
    },
    {
        path: "config",
        canActivateChild: [AuthGuard],
        children: [
            {
                path: "roles",
                component: RolesComponent,
            }
        ]
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
export class AppRoutingModule { }
