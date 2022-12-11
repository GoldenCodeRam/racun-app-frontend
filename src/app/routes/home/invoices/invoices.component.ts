import { Component, OnInit } from "@angular/core";
import { ConfigApiService } from "src/app/services/api/config/config-api.service";
import {
    InvoiceDto,
    InvoicesApiService,
} from "src/app/services/api/invoices/invoices-api.service";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";
import { Err, Ok } from "ts-results";

@Component({
    selector: "app-invoices",
    templateUrl: "./invoices.component.html",
    styleUrls: ["./invoices.component.sass"],
})
export class InvoicesComponent implements OnInit {
    public invoiceGenerationDate?: Date;
    public countDown?: string;

    public invoices: InvoiceDto[] = [];

    constructor(
        private invoicesApiService: InvoicesApiService,
        private configApiService: ConfigApiService,
        private mainLoaderService: MainLoaderService
    ) {}

    async ngOnInit() {
        this.load();
    }

    public downloadInvoices() {
        this.mainLoaderService.doWithLoadingScreen(async () => {
            try {
                await this.invoicesApiService.generateInvoices();
                return Ok({
                    header: "Facturas generadas",
                    body: "Facturas generadas correctamente.",
                });
            } catch (error: any) {
                return Err(error);
            }
        });
    }

    private async load() {
        this.configApiService.getInvoiceGenerationDate().then((date) => {
            this.invoiceGenerationDate = new Date(date);
        });
        this.generateCountdown();

        this.invoices = await this.invoicesApiService.findAll();
    }

    private generateCountdown() {
        const interval = setInterval(() => {
            if (this.invoiceGenerationDate) {
                const now = new Date().getTime();

                const distance = this.invoiceGenerationDate.getTime() - now;

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (distance % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                this.countDown = `Días: ${days}, ${hours}:${minutes}:${seconds}`;

                if (distance < 0) {
                    clearInterval(interval);
                    this.countDown = "Generando facturas...";
                }
            }
        }, 1000);
    }
}
