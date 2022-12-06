import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CreateZoneModalComponent } from "src/app/components/modals/zones/create-zone-modal/create-zone-modal.component";
import { ZonesApiService } from "src/app/services/api/zones/zones-api.service";

@Component({
    selector: "app-zones",
    templateUrl: "./zones.component.html",
    styleUrls: ["./zones.component.css"],
})
export class ZonesComponent {
    zones: any = [];

    constructor(
        public zonesApiService: ZonesApiService,

        private modalService: NgbModal
    ) {}

    public openCreateZoneModal() {
        this.modalService.open(CreateZoneModalComponent, {
            centered: true,
        });
    }
}
