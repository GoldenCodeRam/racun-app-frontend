import { Component, OnInit } from "@angular/core";
import { Html5Qrcode, Html5QrcodeScanner } from "html5-qrcode";
import {
    InvoiceDto,
    InvoicesApiService,
} from "src/app/services/api/invoices/invoices-api.service";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";
import { ToastGeneratorService } from "src/app/services/components/toasts/toast-generator.service";
import { Err, Ok } from "ts-results";

@Component({
    selector: "app-validate-invoices",
    templateUrl: "./validate-invoices.component.html",
    styleUrls: ["./validate-invoices.component.sass"],
})
export class ValidateInvoicesComponent implements OnInit {
    private htmlQrCodeReader!: Html5Qrcode;

    public cameraError = false;

    public invoiceToValidate?: InvoiceDto;

    constructor(
        private toastGeneratorService: ToastGeneratorService,
        private invoicesApiService: InvoicesApiService,
        private mainLoaderService: MainLoaderService
    ) {}

    ngOnInit(): void {
        this.htmlQrCodeReader = new Html5Qrcode("reader");

        this.startCamera();
    }

    public async startCamera() {
        try {
            this.invoiceToValidate = undefined;

            await this.htmlQrCodeReader.start(
                {
                    facingMode: "environment",
                },
                {
                    fps: 1,
                    qrbox: {
                        width: 250,
                        height: 250,
                    },
                },
                async (decodedText, _) => {
                    if (decodedText) {
                        await this.htmlQrCodeReader.stop();
                        this.invoiceToValidate =
                            await this.invoicesApiService.getInvoiceFromQrCode(
                                decodedText
                            );
                    }
                },
                (_) => {}
            );
        } catch (error: any) {
            this.cameraError = true;
        }
    }

    public async updateInvoiceAsPaid() {
        await this.mainLoaderService.doWithLoadingScreen(async () => {
            if (this.invoiceToValidate) {
                this.invoiceToValidate.status = 1;
                await this.invoicesApiService.updateInvoice(
                    this.invoiceToValidate
                );

                return Ok({
                    header: "Factura actualizada",
                    body: "Factura actualizada correctamente.",
                });
            }
            return Err(new Error());
        });

        this.startCamera();
    }
}
