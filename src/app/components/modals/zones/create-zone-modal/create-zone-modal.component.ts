import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Place } from "src/app/models/place";
import { ZonesApiService } from "src/app/services/api/zones/zones-api.service";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";
import { Err, Ok } from "ts-results";
import { SelectPlaceModalComponent } from "../../places/select-place-modal/select-place-modal.component";

@Component({
    selector: "app-create-zone-modal",
    templateUrl: "./create-zone-modal.component.html",
    styleUrls: ["./create-zone-modal.component.sass"],
})
export class CreateZoneModalComponent {
    public zoneForm = new FormGroup({
        name: new FormControl<string>("", [Validators.required]),
        code: new FormControl<string>("", [Validators.required]),
        place: new FormControl<Place | null>(null, [Validators.required]),
    });

    constructor(
        public modalService: NgbModal,
        public activeModal: NgbActiveModal,

        private loaderService: MainLoaderService,
        private zoneApiService: ZonesApiService
    ) {}

    public openSelectPlace() {
        this.modalService
            .open(SelectPlaceModalComponent, {
                centered: true,
                size: "lg",
            })
            .result.then(
                (place: Place) => {
                    if (place) {
                        this.zoneForm.patchValue({
                            place,
                        });
                    }
                },
                (reason: any) => {}
            );
    }

    public async createZone() {
        await this.loaderService.doWithLoadingScreen(async () => {
            try {
                await this.zoneApiService.createZone({
                    name: this.zoneForm.value!.name as string,
                    code: this.zoneForm.value!.code as string,
                    place: this.zoneForm.value!.place as Place,
                });
                return Ok({
                    header: "Zona creada",
                    body: "Se ha creado la zona correctamente.",
                });
            } catch (error: any) {
                return Err(error);
            }
        });

        this.activeModal.close();
    }
}
