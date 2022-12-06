import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Client } from "src/app/models/client";
import { ClientsApiService } from "src/app/services/api/clients/clients-api.service";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";
import { ToastGeneratorService } from "src/app/services/components/toasts/toast-generator.service";
import { Err, Ok } from "ts-results";

@Component({
    selector: "app-delete-client-modal",
    templateUrl: "./delete-client-modal.component.html",
    styleUrls: ["./delete-client-modal.component.sass"],
})
export class DeleteClientModalComponent {
    constructor(
        private clientsApiService: ClientsApiService,
        private loaderService: MainLoaderService,
        private client: Client,
        private toastService: ToastGeneratorService,
        public activeModal: NgbActiveModal
    ) {}

    public async deleteClient() {
        await this.loaderService.doWithLoadingScreen(async () => {
            try {
                await this.clientsApiService.deleteClient(this.client.id);

                return Ok({
                    header: "Cliente Eliminado",
                    body: "Se ha eliminado el cliente correctamente.",
                });
            } catch (error: any) {
                return Err(error);
            }
        });

        this.activeModal.close();
    }
}
