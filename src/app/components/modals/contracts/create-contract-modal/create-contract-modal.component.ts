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
import { ToastGeneratorService } from "src/app/services/components/toasts/toast-generator.service";
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

    public contractForm = new FormGroup(
        {
            startDate: new FormControl<NgbDate | null>(null, [
                Validators.required,
            ]),
            endDate: new FormControl<NgbDate | null>(null),
            contractValue: new FormControl<number>(0, [Validators.required]),
            place: new FormControl<Place | null>(null, [Validators.required]),
            service: new FormControl<Service | null>(null, [
                Validators.required,
            ]),
        },
        [this.validateDates()]
    );

    public totalContractValue: number = 0;

    constructor(
        public client: Client,

        public activeModal: NgbActiveModal,

        private modalService: NgbModal,
        private contractsApiService: ContractsApiService,
        private mainLoaderService: MainLoaderService,
        private toastGeneratorService: ToastGeneratorService
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

                const endDate = this.contractForm.value.endDate
                    ? `${this.contractForm.value.endDate!.year}-${
                          this.contractForm.value.endDate!.month
                      }-${this.contractForm.value.endDate!.day}`
                    : undefined;

                try {
                    await this.contractsApiService.createContract({
                        value: this.contractForm.value.contractValue!,
                        dateStart: startDate,
                        dateEnd: endDate,
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

    // THIS IS UGLY, DISGUSTING UGGGGGGGGGGGGGGGG
    // This should not be here, as this is heavy logic for date validation. We
    // can do two things:
    // Remove this entirely from the frontend, and let this logic be handled by
    // the backend and just return an error if the fields are not correct.
    // Move this elsewhere, but for now it stays here.
    //
    // Disgusting...
    //
    public validateDates(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (this.contractForm) {
                const dirtyStartDate = this.contractForm.value.startDate;
                const dirtyEndDate = this.contractForm.value.endDate;

                if (dirtyStartDate && dirtyEndDate) {
                    const startDate = new NgbDate(
                        dirtyStartDate.year,
                        dirtyStartDate.month,
                        dirtyStartDate.day
                    );
                    const endDate = new NgbDate(
                        dirtyEndDate.year,
                        dirtyEndDate.month,
                        dirtyEndDate.day
                    );

                    if (startDate.after(endDate)) {
                        this.contractForm.controls.startDate.setErrors({
                            date: "La fecha de inicio es mayor a la fecha final",
                        });
                        this.contractForm.controls.endDate.setErrors({
                            date: "La fecha final es menor a la fecha inicial",
                        });
                    } else {
                        this.contractForm.controls.startDate.setErrors(null);
                        this.contractForm.controls.endDate.setErrors(null);
                    }
                } else if (dirtyStartDate && !dirtyEndDate) {
                    this.contractForm.controls.startDate.setErrors(null);
                    this.contractForm.controls.endDate.setErrors(null);
                }
            }
            return null;
        };
    }
}
