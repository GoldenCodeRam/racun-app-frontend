import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateRoleModalComponent } from "./modals/roles/create-role-modal/create-role-modal.component";
import { EditRoleModalComponent } from "./modals/roles/edit-role-modal/edit-role-modal.component";
import { FormsModule } from "@angular/forms";
import { MainNavbarComponent } from "./navbars/main-navbar/main-navbar.component";
import { AppRoutingModule } from "../app-routing.module";
import { LoaderComponent } from './loaders/loader/loader.component';
import { SearchListComponent } from './search/search-list/search-list.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        CreateRoleModalComponent,
        EditRoleModalComponent,
        MainNavbarComponent,
        LoaderComponent,
        SearchListComponent,
    ],
    exports: [
        CreateRoleModalComponent,
        EditRoleModalComponent,
        MainNavbarComponent,
        SearchListComponent,
        LoaderComponent,
    ],
    imports: [CommonModule, FormsModule, AppRoutingModule, HttpClientModule],
})
export class ComponentsModule {}
