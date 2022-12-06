import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Service } from "src/app/models/service";
import { ServicesApiService } from "src/app/services/api/services/service-api.service";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";
import { ToastGeneratorService } from "src/app/services/components/toasts/toast-generator.service";
import { Err, Ok } from "ts-results";

@Component({
    selector: "app-edit-service-modal",
    templateUrl: "./edit-service-modal.component.html",
    styleUrls: ["./edit-service-modal.component.sass"],
})
export class EditServiceModalComponent {
    public serviceForm = new FormGroup({
        name: new FormControl<string>(this.service.name, [Validators.required]),
        description: new FormControl<string>(this.service.description, [
            Validators.required,
        ]),
    });

    constructor(
        public modalService: NgbModal,
        public activeModal: NgbActiveModal,

        private servicesApiService: ServicesApiService,
        private service: Service,
        private loaderService: MainLoaderService
    ) {}

    public async editService() {
        await this.loaderService.doWithLoadingScreen(async () => {
            try {
                await this.servicesApiService.updateService({
                    id: this.service.id,
                    name: this.serviceForm.value!.name as string,
                    description: this.serviceForm.value!.description as string,
                });
                return Ok({
                    header: "Servicio editado",
                    body: "Se ha editado el servicio correctamente.",
                });
            } catch (error: any) {
                return Err(error);
            }
        });

        this.activeModal.close();
    }
}
