import { Component, Injector, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BehaviorSubject, Observable } from "rxjs";
import { DeleteZoneModalComponent } from "src/app/components/modals/zones/delete-zone-modal/delete-zone-modal.component";
import { EditZoneModalComponent } from "src/app/components/modals/zones/edit-zone-modal/edit-zone-modal.component";

import { Zone } from "src/app/models/zone";
import { ZonesApiService } from "src/app/services/api/zones/zones-api.service";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";

@Component({
    selector: "app-show-zone",
    templateUrl: "./show-zone.component.html",
    styleUrls: ["./show-zone.component.sass"],
})
export class ShowZoneComponent implements OnInit {
    public zoneObservable!: Observable<Zone>;
    public zone!: Zone;

    public activeNav = 1;

    constructor(
        private route: ActivatedRoute,
        private zonesApiService: ZonesApiService,
        private modalService: NgbModal,
        private mainLoaderService: MainLoaderService
    ) {}

    async ngOnInit() {
        this.mainLoaderService.doWithLoadingScreen(async () => {
            const result = await this.zonesApiService.getZone(
                this.route.snapshot.params["zoneId"]
            );

            if (result.ok) {
                this.zone = result.val;
            }
        });
    }

    public openEditZoneModal() {
        this.modalService.open(EditZoneModalComponent, {
            centered: true,

            injector: Injector.create({
                providers: [{ provide: Zone, useValue: this.zone }],
            }),
        });
    }

    public openDeleteZoneModal() {
        this.modalService.open(DeleteZoneModalComponent, {
            centered: true,

            injector: Injector.create({
                providers: [{ provide: Zone, useValue: this.zone }],
            }),
        });
    }
}
