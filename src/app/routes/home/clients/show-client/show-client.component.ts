import { Component, Injector, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Client } from "src/app/models/client";
import { ClientsApiService } from "src/app/services/api/clients/clients-api.service";
import { EditClientModalComponent } from "src/app/components/modals/clients/edit-client-modal/edit-client-modal.component";
import { DeleteClientModalComponent } from "src/app/components/modals/clients/delete-client-modal/delete-client-modal.component";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";
import { Err, Ok } from "ts-results";

@Component({
    selector: "app-show-client",
    templateUrl: "./show-client.component.html",
    styleUrls: ["./show-client.component.sass"],
})
export class ShowClientComponent implements OnInit {
    public client!: Client;

    public activeNav: number = 1;

    constructor(
        private route: ActivatedRoute,
        private clientsApiService: ClientsApiService,
        private modalService: NgbModal,
        private mainLoaderService: MainLoaderService
    ) {}

    async ngOnInit() {
        this.mainLoaderService.doWithLoadingScreen(async () => {
            const result = await this.clientsApiService.getClient(
                this.route.snapshot.params["clientId"]
            );

            if (result.ok) {
                this.client = result.val;
            }
        });
    }

    openEditClientModal() {
        this.modalService.open(EditClientModalComponent, {
            centered: true,

            injector: Injector.create({
                providers: [{ provide: Client, useValue: this.client }],
            }),
        });
    }

    openDeleteClientModal() {
        this.modalService.open(DeleteClientModalComponent, {
            centered: true,

            injector: Injector.create({
                providers: [{ provide: Client, useValue: this.client }],
            }),
        });
    }
}
