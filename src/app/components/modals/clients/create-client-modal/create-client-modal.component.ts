import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ClientsApiService } from "src/app/services/api/clients/clients-api.service";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";
import { ToastGeneratorService } from "src/app/services/components/toasts/toast-generator.service";
import { Err, Ok } from "ts-results";

@Component({
    selector: "app-create-client-modal",
    templateUrl: "./create-client-modal.component.html",
    styleUrls: ["./create-client-modal.component.sass"],
})
export class CreateClientModalComponent {
    public userForm = new FormGroup({
        firstName: new FormControl<string>("", [Validators.required]),
        lastName: new FormControl<string>("", [Validators.required]),
        document: new FormControl<string>("", [Validators.required]),
        phone: new FormControl<string>("", [Validators.required]),
        address: new FormControl<string>("", [Validators.required]),
        email: new FormControl<string | null>(null, [Validators.email]),
    });

    constructor(
        public modalService: NgbModal,
        public activeModal: NgbActiveModal,

        private clientsApiService: ClientsApiService,
        private loaderService: MainLoaderService,
        private toastService: ToastGeneratorService
    ) {}

    public async createClient() {
        await this.loaderService.doWithLoadingScreen(async () => {
            try {
                await this.clientsApiService.createClient({
                    firstName: this.userForm.value!.firstName as string,
                    lastName: this.userForm.value!.lastName as string,
                    document: this.userForm.value!.document as string,
                    phone: this.userForm.value!.phone as string,
                    address: this.userForm.value!.address as string,
                    email: this.userForm.value!.email ?? null,
                });

                return Ok({
                    header: "Cliente creado",
                    body: "Se ha creado el cliente correctamente.",
                });
            } catch (error: any) {
                return Err(error);
            }
        });

        this.activeModal.close();
    }
}
