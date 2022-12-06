import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersComponent } from "./users/users.component";
import { HardwareComponent } from "./hardware/hardware.component";
import { ComponentsModule } from "src/app/components/components.module";
import { AppRoutingModule } from "src/app/app-routing.module";
import { ShowUserComponent } from "./users/show-user/show-user.component";
import { FormsModule } from "@angular/forms";
import { ShowClientComponent } from "./clients/show-client/show-client.component";
import { ZonesComponent } from "./zones/zones.component";
import { ShowHardwareComponent } from "./hardware/show-hardware/show-hardware.component";
import { ShowZoneComponent } from "./zones/show-zone/show-zone.component";
import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { ServicesComponent } from './services/services.component';
import { ShowServiceComponent } from './services/show-service/show-service.component';
import { CreateContractComponent } from './clients/show-client/create-contract/create-contract.component';
import { ShowZoneHardwareComponent } from './zones/show-zone/show-zone-hardware/show-zone-hardware.component';
import { ShowUserHardwareComponent } from './users/show-user/show-user-hardware/show-user-hardware.component';

@NgModule({
    declarations: [
        UsersComponent,
        ZonesComponent,
        HardwareComponent,
        ShowUserComponent,
        ShowClientComponent,
        ShowHardwareComponent,
        ShowZoneComponent,
        ServicesComponent,
        ShowServiceComponent,
        CreateContractComponent,
        ShowZoneHardwareComponent,
        ShowUserHardwareComponent,
    ],
    imports: [
        ComponentsModule,
        NgbNavModule,
        AppRoutingModule,
        FormsModule,
        CommonModule,
    ],
})
export class HomeModule {}
