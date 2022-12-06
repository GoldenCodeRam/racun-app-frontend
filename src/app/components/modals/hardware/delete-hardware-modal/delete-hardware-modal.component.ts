import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Hardware } from "src/app/models/hardware";
import { HardwareApiService } from "src/app/services/api/hardware/hardware-api.service";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";
import { Err, Ok } from "ts-results";

@Component({
    selector: "app-delete-hardware-modal",
    templateUrl: "./delete-hardware-modal.component.html",
    styleUrls: ["./delete-hardware-modal.component.sass"],
})
export class DeleteHardwareModalComponent {
    constructor(
        private hardwareApiService: HardwareApiService,
        private loaderService: MainLoaderService,

        public hardware: Hardware,
        public activeModal: NgbActiveModal
    ) {}

    public async deleteHardware() {
        await this.loaderService.doWithLoadingScreen(async () => {
            try {
                await this.hardwareApiService.deleteHardware(this.hardware);
                return Ok({
                    header: "Equipo eliminado",
                    body: "El equipo se ha eliminado correctamente.",
                });
            } catch (error: any) {
                return Err(error);
            }
        });

        this.activeModal.close();
    }
}
