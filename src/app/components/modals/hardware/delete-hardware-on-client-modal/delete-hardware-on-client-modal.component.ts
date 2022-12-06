import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { HardwareOnClient } from "src/app/models/hardware";
import { HardwareApiService } from "src/app/services/api/hardware/hardware-api.service";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";
import { Err, Ok } from "ts-results";

@Component({
    selector: "app-delete-hardware-on-client-modal",
    templateUrl: "./delete-hardware-on-client-modal.component.html",
    styleUrls: ["./delete-hardware-on-client-modal.component.sass"],
})
export class DeleteHardwareOnClientModalComponent {
    constructor(
        private hardwareApiService: HardwareApiService,
        private loaderService: MainLoaderService,
        public hardwareOnClient: HardwareOnClient,
        public activeModal: NgbActiveModal
    ) {}

    public async deleteHardwareOnClient() {
        await this.loaderService.doWithLoadingScreen(async () => {
            try {
                await this.hardwareApiService.deleteHardwareOnClient(
                    this.hardwareOnClient
                );
                return Ok({
                    header: "Equipo eliminado del cliente",
                    body: "El equipo se ha desasignado del cliente.",
                });
            } catch (error: any) {
                return Err(error);
            }
        });

        this.activeModal.close();
    }
}
