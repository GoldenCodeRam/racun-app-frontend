import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Client } from "src/app/models/client";
import { ClientsApiService } from "src/app/services/api/users/clients-api.service";

@Component({
    selector: "app-show-client",
    templateUrl: "./show-client.component.html",
    styleUrls: ["./show-client.component.sass"],
})
export class ShowClientComponent implements OnInit {
    public client!: Client;

    constructor(
        private route: ActivatedRoute,
        private clientsApiService: ClientsApiService
    ) {}

    async ngOnInit() {
        this.client = await this.clientsApiService.getClient(
            this.route.snapshot.params["clientId"]
        );
    }
}
