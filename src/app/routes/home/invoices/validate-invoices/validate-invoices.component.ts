import { Component, OnDestroy, OnInit } from "@angular/core";
import { Html5Qrcode } from "html5-qrcode";
import {
    InvoiceDto,
    InvoicesApiService,
} from "src/app/services/api/invoices/invoices-api.service";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";
import { Err, Ok } from "ts-results";

@Component({
    selector: "app-validate-invoices",
    templateUrl: "./validate-invoices.component.html",
    styleUrls: ["./validate-invoices.component.sass"],
})
export class ValidateInvoicesComponent implements OnInit, OnDestroy {
    private htmlQrCodeReader!: Html5Qrcode;

    public cameraError = false;

    public invoiceToValidate?: InvoiceDto;

    constructor(
        private invoicesApiService: InvoicesApiService,
        private mainLoaderService: MainLoaderService
    ) {}

    ngOnInit(): void {
        this.htmlQrCodeReader = new Html5Qrcode("reader");

        this.startCamera();
    }

    ngOnDestroy(): void {
        try {
            this.htmlQrCodeReader.stop();
        } catch (error) {}
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

                        const result =
                            await this.invoicesApiService.getInvoiceFromQrCode(
                                decodedText
                            );

                        if (result.ok) {
                            this.invoiceToValidate = result.val;
                        }
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
                // This status is PAID
                this.invoiceToValidate.status = 1;
                await this.invoicesApiService.updateInvoice(
                    this.invoiceToValidate
                );

                return Ok({
                    header: "Factura actualizada",
                    body: "Factura actualizada correctamente.",
                });
            }
            return Err({
                header: "Factura no actualizada",
                body: "Ha ocurrido un error al intentar validar la factura.",
            });
        });

        this.startCamera();
    }
}
