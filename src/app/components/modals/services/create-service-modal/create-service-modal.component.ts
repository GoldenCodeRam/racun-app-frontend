import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ServicesApiService } from "src/app/services/api/services/service-api.service";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";
import { ToastGeneratorService } from "src/app/services/components/toasts/toast-generator.service";
import { Err, Ok } from "ts-results";

@Component({
    selector: "app-create-service-modal",
    templateUrl: "./create-service-modal.component.html",
    styleUrls: ["./create-service-modal.component.sass"],
})
export class CreateServiceModalComponent {
    public serviceForm = new FormGroup({
        name: new FormControl<string>("", [Validators.required]),
        description: new FormControl<string>("", [Validators.required]),
        value: new FormControl<number>(0, [Validators.required]),
    });

    constructor(
        public activeModal: NgbActiveModal,

        private loaderService: MainLoaderService,
        private serviceApiService: ServicesApiService,
        private toastService: ToastGeneratorService
    ) {}

    public async createService() {
        await this.loaderService.doWithLoadingScreen(async () => {
            try {
                await this.serviceApiService.createService({
                    name: this.serviceForm.value!.name as string,
                    description: this.serviceForm.value!.description as string,
                    value: this.serviceForm.value.value! as number,
                });
                return Ok({
                    header: "Servicio creado",
                    body: "Se ha creado el servicio correctamente.",
                });
            } catch (error: any) {
                return Err(error);
            }
        });

        this.activeModal.close();
    }
}
