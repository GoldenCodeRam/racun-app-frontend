import { Component, Injector, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { EditInvoiceDateModalComponent } from "src/app/components/modals/config/edit-invoice-date-modal/edit-invoice-date-modal.component";
import { ConfigApiService } from "src/app/services/api/config/config-api.service";

@Component({
    selector: "app-invoices",
    templateUrl: "./invoices.component.html",
    styleUrls: ["./invoices.component.sass"],
})
export class InvoicesComponent implements OnInit {
    public invoiceGenerationDate?: Date;

    constructor(
        private modalService: NgbModal,
        private configApiService: ConfigApiService
    ) {}

    async ngOnInit() {
        this.load();
    }

    public load() {
        this.configApiService.getInvoiceGenerationDate().then((date) => {
            this.invoiceGenerationDate = new Date(date);
        });
    }

    public openUpdateInvoiceDate() {
        this.modalService
            .open(EditInvoiceDateModalComponent, {
                size: "xl",
                centered: true,
            })
            .result.then(
                (_) => this.load(),
                (_) => {}
            );
    }
}
