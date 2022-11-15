import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Hardware } from "src/app/models/hardware";
import { ApiService } from "src/app/services/api/api.service";
import { HardwareApiService } from "src/app/services/api/hardware/hardware-api.service";

@Component({
    selector: "app-show-hardware",
    templateUrl: "./show-hardware.component.html",
    styleUrls: ["./show-hardware.component.sass"],
})
export class ShowHardwareComponent implements OnInit {
    public hardware!: Hardware;

    constructor(
        private route: ActivatedRoute,
        private hardwareApiService: HardwareApiService
    ) {}

    async ngOnInit() {
        this.hardware = await this.hardwareApiService.getHardwareById(
            this.route.snapshot.params["hardwareId"]
        );
    }
}
