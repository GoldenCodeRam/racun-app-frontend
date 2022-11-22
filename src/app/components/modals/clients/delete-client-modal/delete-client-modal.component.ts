import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Client } from "src/app/models/client";
import { ClientsApiService } from "src/app/services/api/clients/clients-api.service";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";
import { ToastGeneratorService } from "src/app/services/components/toasts/toast-generator.service";

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
            await this.clientsApiService.deleteClient(this.client.id);

            this.toastService.show(
                "Cliente Eliminado",
                "Se ha eliminado el cliente correctamente."
            );
        });

        this.activeModal.close();
    }
}
