import { Component, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal, NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { ClientAccount } from "src/app/models/clientAccount";
import { InvoicesApiService } from "src/app/services/api/invoices/invoices-api.service";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";
import { ToastGeneratorService } from "src/app/services/components/toasts/toast-generator.service";

@Component({
    selector: "app-create-invoice-modal",
    templateUrl: "./create-invoice-modal.component.html",
    styleUrls: ["./create-invoice-modal.component.sass"],
})
export class CreateInvoiceModalComponent {
    public invoiceForm = new FormGroup({
        periodStart: new FormControl<NgbDate | null>(null, [
            Validators.required,
        ]),
        periodEnd: new FormControl<NgbDate | null>(null, [Validators.required]),
        paymentDate: new FormControl<NgbDate | null>(null, [
            Validators.required,
        ]),
        suspensionDate: new FormControl<NgbDate | null>(null, [
            Validators.required,
        ]),
        //value: new FormControl<number>(0, [Validators.required]),
        // adjustment: new FormControl<number>(0, [Validators.required]),
    });

    constructor(
        public activeModal: NgbActiveModal,

        private clientAccount: ClientAccount,
        @Inject("contractId")
        private contractId: number,

        private invoiceApiService: InvoicesApiService,
        private mainLoaderService: MainLoaderService,
        private toastGeneratorService: ToastGeneratorService
    ) {}

    public async createInvoice() {
        if (this.invoiceForm.valid) {
            await this.mainLoaderService.doWithLoadingScreen(async () => {
                const periodStart = `${
                    this.invoiceForm.value.periodStart!.year
                }-${this.invoiceForm.value.periodStart!.month}-${
                    this.invoiceForm.value.periodStart!.day
                }`;
                const periodEnd = `${this.invoiceForm.value.periodEnd!.year}-${
                    this.invoiceForm.value.periodEnd!.month
                }-${this.invoiceForm.value.periodEnd!.day}`;
                const paymentDate = `${
                    this.invoiceForm.value.paymentDate!.year
                }-${this.invoiceForm.value.paymentDate!.month}-${
                    this.invoiceForm.value.paymentDate!.day
                }`;
                const suspensionDate = `${
                    this.invoiceForm.value.suspensionDate!.year
                }-${this.invoiceForm.value.suspensionDate!.month}-${
                    this.invoiceForm.value.suspensionDate!.day
                }`;

                await this.invoiceApiService.createInvoice({
                    clientAccountId: this.clientAccount.id,
                    contractId: this.contractId,
                    periodStart: periodStart,
                    periodEnd: periodEnd,
                    paymentDate: paymentDate,
                    suspensionDate: suspensionDate,
                    // value: this.invoiceForm.value.value!,
                    // adjustment: this.invoiceForm.value.adjustment ?? undefined,
                    value: 1000,
                    adjustment: 1000,
                });
                this.toastGeneratorService.show(
                    "Factura creada",
                    "Factura creada correctamente"
                );
            });

            this.activeModal.close();
        }
    }
}
