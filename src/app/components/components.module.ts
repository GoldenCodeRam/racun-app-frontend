import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateRoleModalComponent } from "./modals/roles/create-role-modal/create-role-modal.component";
import { EditRoleModalComponent } from "./modals/roles/edit-role-modal/edit-role-modal.component";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MainNavbarComponent } from "./navbars/main-navbar/main-navbar.component";
import { AppRoutingModule } from "../app-routing.module";
import { LoaderComponent } from "./loaders/loader/loader.component";
import { SearchListComponent } from "./search/search-list/search-list.component";
import { HttpClientModule } from "@angular/common/http";
import { EditUserModalComponent } from "./modals/users/edit-user-modal/edit-user-modal.component";
import { SelectRoleModalComponent } from './modals/roles/select-role-modal/select-role-modal.component';
import { MainSidebarComponent } from './sidebars/main-sidebar/main-sidebar.component';

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
    ],
    exports: [
        CreateRoleModalComponent,
        EditRoleModalComponent,
        MainNavbarComponent,
        EditUserModalComponent,
        SearchListComponent,
        LoaderComponent,
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
    ],
})
export class ComponentsModule {}
