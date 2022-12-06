import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Zone } from "src/app/models/zone";
import { ZonesApiService } from "src/app/services/api/zones/zones-api.service";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";
import { Err, Ok } from "ts-results";

@Component({
    selector: "app-delete-zone-modal",
    templateUrl: "./delete-zone-modal.component.html",
    styleUrls: ["./delete-zone-modal.component.sass"],
})
export class DeleteZoneModalComponent {
    constructor(
        private zonesApiService: ZonesApiService,
        private loaderService: MainLoaderService,

        public zone: Zone,
        public activeModal: NgbActiveModal
    ) {}
    public async deleteZone() {
        await this.loaderService.doWithLoadingScreen(async () => {
            try {
                await this.zonesApiService.deleteZone(this.zone.id);
                return Ok({
                    header: "Zona eliminada",
                    body: "Se ha eliminado la zona correctamente.",
                });
            } catch (error: any) {
                return Err(error);
            }
        });

        this.activeModal.close();
    }
}
