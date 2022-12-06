import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { HardwareApiService } from "src/app/services/api/hardware/hardware-api.service";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";
import { Err, Ok } from "ts-results";

@Component({
    selector: "app-create-hardware-modal",
    templateUrl: "./create-hardware-modal.component.html",
    styleUrls: ["./create-hardware-modal.component.sass"],
})
export class CreateHardwareModalComponent {
    public hardwareForm = new FormGroup({
        name: new FormControl<string>("", [Validators.required]),
        model: new FormControl<string>("", [Validators.required]),
        details: new FormControl<string>("", [Validators.required]),
    });

    constructor(
        public modalService: NgbModal,
        public activeModal: NgbActiveModal,

        private loaderService: MainLoaderService,
        private hardwareApiService: HardwareApiService
    ) {}

    public async createHardware() {
        await this.loaderService.doWithLoadingScreen(async () => {
            try {
                await this.hardwareApiService.createHardware({
                    name: this.hardwareForm.value!.name as string,
                    model: this.hardwareForm.value!.model as string,
                    details: this.hardwareForm.value!.details as string,
                });
                return Ok({
                    header: "Equipo creado",
                    body: "Se ha creado el equipo correctamente",
                });
            } catch (error: any) {
                return Err(error);
            }
        });
        this.activeModal.close();
    }
}
