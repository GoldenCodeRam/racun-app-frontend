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
import { CreateUserModalComponent } from "./modals/users/create-user-modal/create-user-modal.component";
import { CreateClientModalComponent } from "./modals/clients/create-client-modal/create-client-modal.component";
import { DeleteUserModalComponent } from "./modals/users/delete-user-modal/delete-user-modal/delete-user-modal.component";
import { CreateZoneModalComponent } from "./modals/zones/create-zone-modal/create-zone-modal.component";
import { EditZoneModalComponent } from "./modals/zones/edit-zone-modal/edit-zone-modal.component";
import { DeleteZoneModalComponent } from "./modals/zones/delete-zone-modal/delete-zone-modal.component";
import { DeleteServiceModalComponent } from "./modals/services/delete-service-modal/delete-service-modal.component";
import { CreateServiceModalComponent } from "./modals/services/create-service-modal/create-service-modal.component";
import { EditServiceModalComponent } from "./modals/services/edit-service-modal/edit-service-modal.component";
import { EditClientModalComponent } from "./modals/clients/edit-client-modal/edit-client-modal.component";
import { DeleteClientModalComponent } from "./modals/clients/delete-client-modal/delete-client-modal.component";
import { CreateContractModalComponent } from "./modals/contracts/create-contract-modal/create-contract-modal.component";
import { SelectPlaceModalComponent } from "./modals/places/select-place-modal/select-place-modal.component";
import { SelectServiceModalComponent } from "./modals/services/select-service-modal/select-service-modal.component";
import { CreateInvoiceModalComponent } from "./modals/invoices/create-invoice-modal/create-invoice-modal.component";
import { CreateHardwareModalComponent } from "./modals/hardware/create-hardware-modal/create-hardware-modal.component";
import { DeleteHardwareModalComponent } from "./modals/hardware/delete-hardware-modal/delete-hardware-modal.component";
import { EditHardwareModalComponent } from "./modals/hardware/edit-hardware-modal/edit-hardware-modal.component";
import { SelectHardwareModalComponent } from "./modals/hardware/select-hardware-modal/select-hardware-modal.component";
import { SelectZoneModalComponent } from "./modals/zones/select-zone-modal/select-zone-modal.component";
import { DeleteHardwareOnZoneModalComponent } from "./modals/hardware/delete-hardware-on-zone-modal/delete-hardware-on-zone-modal.component";
import { DeleteHardwareOnClientModalComponent } from "./modals/hardware/delete-hardware-on-client-modal/delete-hardware-on-client-modal.component";
import { InputReadonlyComponent } from "./inputs/input-readonly/input-readonly.component";
import { EditInvoiceDateModalComponent } from './modals/config/edit-invoice-date-modal/edit-invoice-date-modal.component';

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
        DeleteUserModalComponent,
        CreateZoneModalComponent,
        EditZoneModalComponent,
        DeleteZoneModalComponent,
        DeleteServiceModalComponent,
        CreateServiceModalComponent,
        EditServiceModalComponent,
        EditClientModalComponent,
        DeleteClientModalComponent,
        CreateContractModalComponent,
        SelectPlaceModalComponent,
        SelectServiceModalComponent,
        CreateInvoiceModalComponent,
        CreateHardwareModalComponent,
        DeleteHardwareModalComponent,
        EditHardwareModalComponent,
        SelectHardwareModalComponent,
        SelectZoneModalComponent,
        DeleteHardwareOnZoneModalComponent,
        DeleteHardwareOnClientModalComponent,
        InputReadonlyComponent,
        EditInvoiceDateModalComponent,
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
        InputReadonlyComponent,
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
