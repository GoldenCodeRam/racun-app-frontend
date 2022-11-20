import { Component, Injector, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { EditZoneModalComponent } from "src/app/components/modals/zones/edit-zone-modal/edit-zone-modal.component";

import { Zone } from "src/app/models/zone";
import { ZonesApiService } from "src/app/services/api/zones/zones-api.service";

@Component({
    selector: "app-show-zone",
    templateUrl: "./show-zone.component.html",
    styleUrls: ["./show-zone.component.sass"],
})
export class ShowZoneComponent implements OnInit {
    public zone!: Zone;

    constructor(
        private route: ActivatedRoute,
        private zonesApiService: ZonesApiService,
        private modalService: NgbModal
    ) {}

    async ngOnInit() {
        this.zone = await this.zonesApiService.getZone(
            this.route.snapshot.params["zoneId"]
        );
    }

    public openEditZoneModal(){
        this.modalService.open(EditZoneModalComponent, {
            centered: true,

            injector: Injector.create({
                providers: [{ provide: Zone, useValue: this.zone}],
            }),
        })
    }

    public openDeleteZoneModal(){

    }
}
