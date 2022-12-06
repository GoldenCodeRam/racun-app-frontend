import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Hardware } from "src/app/models/hardware";
import { HardwareApiService } from "src/app/services/api/hardware/hardware-api.service";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";
import { Err, Ok } from "ts-results";

@Component({
    selector: "app-edit-hardware-modal",
    templateUrl: "./edit-hardware-modal.component.html",
    styleUrls: ["./edit-hardware-modal.component.sass"],
})
export class EditHardwareModalComponent {
    public hardwareForm = new FormGroup({
        name: new FormControl<string>(this.hardware.name, [
            Validators.required,
        ]),
        model: new FormControl<string>(this.hardware.model, [
            Validators.required,
        ]),
        details: new FormControl<string>(this.hardware.details, [
            Validators.required,
        ]),
    });

    constructor(
        public modalService: NgbModal,
        public activeModal: NgbActiveModal,

        private hardware: Hardware,
        private loaderService: MainLoaderService,
        private hardwareApiService: HardwareApiService
    ) {}

    public async editHardware() {
        await this.loaderService.doWithLoadingScreen(async () => {
            try {
                await this.hardwareApiService.updateHardware({
                    id: this.hardware.id,
                    name: this.hardwareForm.value!.name as string,
                    model: this.hardwareForm.value!.model as string,
                    details: this.hardwareForm.value!.details as string,
                });
                return Ok({
                    header: "Equipo actualizado",
                    body: "El equipo se ha actualizado correctamente.",
                });
            } catch (error: any) {
                return Err(error);
            }
        });
        this.activeModal.close();
    }
}
