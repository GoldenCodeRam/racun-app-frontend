import { Component } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Hardware } from "src/app/models/hardware";
import { HardwareApiService } from "src/app/services/api/hardware/hardware-api.service";
import { Ok } from "ts-results";

@Component({
    selector: "app-select-hardware-modal",
    templateUrl: "./select-hardware-modal.component.html",
    styleUrls: ["./select-hardware-modal.component.sass"],
})
export class SelectHardwareModalComponent {
    constructor(
        public hardwareApiService: HardwareApiService,
        public activeModal: NgbActiveModal,
        public modalService: NgbModal
    ) {}

    public selectHardware(hardware: Hardware) {
        this.activeModal.close(Ok(hardware));
    }
}
