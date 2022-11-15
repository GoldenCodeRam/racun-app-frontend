import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CreateClientModalComponent } from "src/app/components/modals/clients/create-client-modal/create-client-modal.component";
import { Client } from "src/app/models/client";
import { ClientsApiService } from "src/app/services/api/clients/clients-api.service";

@Component({
    selector: "app-clients",
    templateUrl: "./clients.component.html",
    styleUrls: ["./clients.component.css"],
})
export class ClientsComponent {
    // This constant is used to determine the amount of clients searched.
    readonly CLIENT_SEARCH_LIMIT = 5;

    constructor(
        public clientsApiService: ClientsApiService,
        private modalService: NgbModal
    ) {}

    public openCreateClientModal() {
        this.modalService.open(CreateClientModalComponent, {
            centered: true,
        });
    }
}
