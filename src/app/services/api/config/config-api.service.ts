import { Injectable } from "@angular/core";
import { ApiService } from "../api.service";

type InvoiceConfigDto = {
    date: Date;
};

@Injectable({
    providedIn: "root",
})
export class ConfigApiService extends ApiService {
    public updateInvoiceGenerationDate(invoiceConfigDto: InvoiceConfigDto) {
        return this.makeSimplePatchRequest(
            "/config/updateInvoiceGenerationDate",
            invoiceConfigDto
        );
    }

    public getInvoiceGenerationDate() {
        return this.makeSimpleGetRequest<string>("/config/getInvoiceGenerationDate");
    }
}
