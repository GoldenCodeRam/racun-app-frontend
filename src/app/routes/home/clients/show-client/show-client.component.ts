import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Client } from "src/app/models/client";
import { ApiService } from "src/app/services/api/api.service";

@Component({
    selector: "app-show-client",
    templateUrl: "./show-client.component.html",
    styleUrls: ["./show-client.component.sass"],
})
export class ShowClientComponent implements OnInit {
    public client!: Client;

    constructor(
        private route: ActivatedRoute,
        private apiService: ApiService
    ) {}

    async ngOnInit() {
        this.client = await this.apiService.getClient(
            this.route.snapshot.params["clientId"]
        );
    }
}
