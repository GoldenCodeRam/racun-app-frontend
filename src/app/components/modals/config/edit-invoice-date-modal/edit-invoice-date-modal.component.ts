import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
    NgbActiveModal,
    NgbDate,
    NgbModal,
    NgbTimeStruct,
} from "@ng-bootstrap/ng-bootstrap";
import { ConfigApiService } from "src/app/services/api/config/config-api.service";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";
import { Err, Ok } from "ts-results";

@Component({
    selector: "app-edit-invoice-date-modal",
    templateUrl: "./edit-invoice-date-modal.component.html",
    styleUrls: ["./edit-invoice-date-modal.component.sass"],
})
export class EditInvoiceDateModalComponent {
    public editInvoiceFormControl = new FormGroup({
        invoiceDateControl: new FormControl<NgbDate | null>(
            null,
            Validators.required
        ),
        invoiceHourControl: new FormControl<NgbTimeStruct | null>(
            null,
            Validators.required
        ),
    });

    constructor(
        public modalService: NgbModal,
        public activeModal: NgbActiveModal,

        private configApiService: ConfigApiService,
        private loaderService: MainLoaderService
    ) {}

    public async editInvoiceGenerationDate() {
        await this.loaderService.doWithLoadingScreen(async () => {
            try {
                await this.configApiService.updateInvoiceGenerationDate({
                    date: new Date(
                        this.editInvoiceFormControl.value.invoiceDateControl!.year,
                        this.editInvoiceFormControl.value.invoiceDateControl!
                            .month - 1,
                        this.editInvoiceFormControl.value.invoiceDateControl!.day,
                        this.editInvoiceFormControl.value.invoiceHourControl!.hour,
                        this.editInvoiceFormControl.value.invoiceHourControl!.minute
                    ),
                });
                return Ok({
                    header: "Fecha cambiada",
                    body: "Se ha cambiado la fecha de generación de facturas.",
                });
            } catch (error: any) {
                return Err(error);
            }
        });

        this.activeModal.close();
    }
}
