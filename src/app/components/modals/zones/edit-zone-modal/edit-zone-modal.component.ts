import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Place } from "src/app/models/place";
import { Zone } from "src/app/models/zone";
import { ZonesApiService } from "src/app/services/api/zones/zones-api.service";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";
import { Err, Ok } from "ts-results";
import { SelectPlaceModalComponent } from "../../places/select-place-modal/select-place-modal.component";

@Component({
    selector: "app-edit-zone-modal",
    templateUrl: "./edit-zone-modal.component.html",
    styleUrls: ["./edit-zone-modal.component.sass"],
})
export class EditZoneModalComponent {
    public zoneForm = new FormGroup({
        name: new FormControl<string>(this.zone.name, [Validators.required]),
        code: new FormControl<number>(this.zone.code, [Validators.required]),
        place: new FormControl<Place | null>(this.zone.place, {
            nonNullable: true,
            validators: [Validators.required],
        }),
    });
    constructor(
        public modalService: NgbModal,
        public activeModal: NgbActiveModal,

        private zone: Zone,
        private zonesApiService: ZonesApiService,
        private loaderService: MainLoaderService
    ) {}

    public async editZone() {
        await this.loaderService.doWithLoadingScreen(async () => {
            try {
                await this.zonesApiService.updateZone({
                    id: this.zone.id,
                    name: this.zoneForm.value!.name as string,
                    code: this.zoneForm.value!.code as number,
                    place: this.zoneForm.value!.place as Place,
                });
                return Ok({
                    header: "Zona editada",
                    body: "Se ha editado la zona correctamente.",
                });
            } catch (error: any) {
                return Err(error);
            }
        });

        this.activeModal.close();
    }

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
}
