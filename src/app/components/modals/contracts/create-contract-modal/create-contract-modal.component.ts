import { Component } from "@angular/core";
import {
    AbstractControl,
    FormControl,
    FormGroup,
    ValidationErrors,
    ValidatorFn,
    Validators,
} from "@angular/forms";
import {
    NgbActiveModal,
    NgbDate,
    NgbDateStruct,
    NgbModal,
} from "@ng-bootstrap/ng-bootstrap";
import { Client } from "src/app/models/client";
import { Place } from "src/app/models/place";
import { Service } from "src/app/models/service";
import { ContractsApiService } from "src/app/services/api/contracts/contracts-api.service";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";
import { Err, Ok } from "ts-results";
import { SelectPlaceModalComponent } from "../../places/select-place-modal/select-place-modal.component";
import { SelectServiceModalComponent } from "../../services/select-service-modal/select-service-modal.component";

@Component({
    selector: "app-create-contract-modal",
    templateUrl: "./create-contract-modal.component.html",
    styleUrls: ["./create-contract-modal.component.sass"],
    host: {
        class: "modal-content",
    },
})
export class CreateContractModalComponent {
    public startDateModel!: NgbDateStruct;
    public endDateModel!: NgbDateStruct;

    public contractForm = new FormGroup({
        startDate: new FormControl<NgbDate | null>(null, [Validators.required]),
        contractValue: new FormControl<number>(0, [Validators.required]),
        place: new FormControl<Place | null>(null, [Validators.required]),
        service: new FormControl<Service | null>(null, [Validators.required]),
    });

    public totalContractValue: number = 0;

    constructor(
        public client: Client,

        public activeModal: NgbActiveModal,

        private modalService: NgbModal,
        private contractsApiService: ContractsApiService,
        private mainLoaderService: MainLoaderService
    ) {}

    public openSelectPlace() {
        this.modalService
            .open(SelectPlaceModalComponent, {
                centered: true,
                size: "lg",
            })
            .result.then((place: Place) => {
                if (place) {
                    this.contractForm.patchValue({
                        place,
                    });
                }
            });
    }

    public openSelectService() {
        this.modalService
            .open(SelectServiceModalComponent, {
                centered: true,
                size: "lg",
            })
            .result.then((service: Service) => {
                if (service) {
                    this.contractForm.patchValue({
                        service,
                    });
                }
            });
    }

    public async createContract() {
        if (this.contractForm.valid) {
            await this.mainLoaderService.doWithLoadingScreen(async () => {
                // This is ugly as fuck
                const startDate = `${this.contractForm.value.startDate!.year}-${
                    this.contractForm.value.startDate!.month
                }-${this.contractForm.value.startDate!.day}`;

                try {
                    await this.contractsApiService.createContract({
                        value: this.contractForm.value.contractValue!,
                        dateStart: startDate,
                        clientAccountId: this.client.clientAccount!.id,
                        serviceId: this.contractForm.value.service!.id,
                        placeId: this.contractForm.value.place!.id,
                    });

                    return Ok({
                        header: "Contrato creado",
                        body: "Contrato creado correctamente",
                    });
                } catch (error: any) {
                    return Err(error);
                }
            });

            this.activeModal.close();
        }
    }
}
