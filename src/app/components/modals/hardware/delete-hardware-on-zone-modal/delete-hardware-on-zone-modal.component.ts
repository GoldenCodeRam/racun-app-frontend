import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { HardwareOnZone } from "src/app/models/hardware";
import { HardwareApiService } from "src/app/services/api/hardware/hardware-api.service";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";
import { Err, Ok } from "ts-results";

@Component({
    selector: "app-delete-hardware-on-zone-modal",
    templateUrl: "./delete-hardware-on-zone-modal.component.html",
    styleUrls: ["./delete-hardware-on-zone-modal.component.sass"],
})
export class DeleteHardwareOnZoneModalComponent {
    constructor(
        private hardwareApiService: HardwareApiService,
        private loaderService: MainLoaderService,
        public hardwareOnZone: HardwareOnZone,
        public activeModal: NgbActiveModal
    ) {}

    public async deleteHardwareOnZone() {
        await this.loaderService.doWithLoadingScreen(async () => {
            try {
                await this.hardwareApiService.deleteHardwareOnZone(
                    this.hardwareOnZone
                );
                return Ok({
                    header: "Equipo eliminado de la zona",
                    body: "El equipo se ha desasignado de la zona.",
                });
            } catch (error: any) {
                return Err(error);
            }
        });

        this.activeModal.close();
    }
}
