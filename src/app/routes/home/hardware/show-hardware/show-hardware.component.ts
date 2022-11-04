import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Hardware } from "src/app/models/hardware";
import { ApiService } from "src/app/services/api/api.service";

@Component({
    selector: "app-show-hardware",
    templateUrl: "./show-hardware.component.html",
    styleUrls: ["./show-hardware.component.sass"],
})
export class ShowHardwareComponent implements OnInit {
    public hardware!: Hardware;

    constructor(
        private route: ActivatedRoute,
        private apiService: ApiService
    ) {}

    async ngOnInit() {
        this.hardware = await this.apiService.getHardwareById(
            this.route.snapshot.params["hardwareId"]
        );
    }
}
