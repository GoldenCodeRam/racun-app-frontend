import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CreateHardwareModalComponent } from "src/app/components/modals/hardware/create-hardware-modal/create-hardware-modal.component";
import { HardwareApiService } from "src/app/services/api/hardware/hardware-api.service";

@Component({
    selector: "app-hardware",
    templateUrl: "./hardware.component.html",
    styleUrls: ["./hardware.component.sass"],
})
export class HardwareComponent {
    constructor(
        public modalService: NgbModal,
        public hardwareApiService: HardwareApiService
    ) {}

    public openCreateHardwareModal() {
        this.modalService.open(CreateHardwareModalComponent, {
            centered: true,
        });
    }
}
