import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Zone } from "src/app/models/zone";
import { ApiService } from "src/app/services/api/api.service";

@Component({
    selector: "app-show-zone",
    templateUrl: "./show-zone.component.html",
    styleUrls: ["./show-zone.component.sass"],
})
export class ShowZoneComponent implements OnInit {
    public zone!: Zone;

    constructor(
        private route: ActivatedRoute,
        private apiService: ApiService
    ) {}

    async ngOnInit() {
        this.zone = await this.apiService.getZone(
            this.route.snapshot.params["zoneId"]
        );
    }
}
