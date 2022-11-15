import { Component, OnInit } from "@angular/core";
import { HardwareApiService } from "src/app/services/api/hardware/hardware-api.service";

@Component({
    selector: "app-hardware",
    templateUrl: "./hardware.component.html",
    styleUrls: ["./hardware.component.sass"],
})
export class HardwareComponent implements OnInit {
    public readonly HARDWARE_SEARCH_LIMIT = 5;

    constructor(public hardwareApiService: HardwareApiService) {}

    ngOnInit(): void {}
}
