import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateRoleModalComponent } from "./modals/roles/create-role-modal/create-role-modal.component";
import { EditRoleModalComponent } from "./modals/roles/edit-role-modal/edit-role-modal.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MainNavbarComponent } from "./navbars/main-navbar/main-navbar.component";
import { AppRoutingModule } from "../app-routing.module";
import { LoaderComponent } from "./loaders/loader/loader.component";
import { SearchListComponent } from "./search/search-list/search-list.component";
import { HttpClientModule } from "@angular/common/http";
import { EditUserModalComponent } from "./modals/users/edit-user-modal/edit-user-modal.component";
import { SelectRoleModalComponent } from "./modals/roles/select-role-modal/select-role-modal.component";
import { MainSidebarComponent } from "./sidebars/main-sidebar/main-sidebar.component";
import { ToastGeneratorComponent } from "./toasts/toast-generator/toast-generator.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SearchTableComponent } from "./search/search-table/search-table.component";
import { CreateUserModalComponent } from './modals/users/create-user-modal/create-user-modal.component';
import { CreateClientModalComponent } from './modals/clients/create-client-modal/create-client-modal.component';

@NgModule({
    declarations: [
        CreateRoleModalComponent,
        EditRoleModalComponent,
        MainNavbarComponent,
        LoaderComponent,
        SearchListComponent,
        EditUserModalComponent,
        SelectRoleModalComponent,
        MainSidebarComponent,
        ToastGeneratorComponent,
        SearchTableComponent,
        CreateUserModalComponent,
        CreateClientModalComponent,
    ],
    exports: [
        CreateRoleModalComponent,
        EditRoleModalComponent,
        MainNavbarComponent,
        EditUserModalComponent,
        SearchListComponent,
        LoaderComponent,
        ToastGeneratorComponent,
        SearchTableComponent,
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        NgbModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
    ],
})
export class ComponentsModule {}
