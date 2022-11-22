import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ApiService } from "../api.service";

@Injectable({
    providedIn: "root",
})
export class InvoicesApiService extends ApiService {
    public async createInvoice(invoiceData: {
        clientAccountId: number;
        contractId: number;
        periodStart: string;
        periodEnd: string;
        paymentDate: string;
        suspensionDate: string;
        value: number;

        adjustment?: number;
    }) {
        await this.promisify((resolve, reject) => {
            this.httpClient
                .post(
                    `${environment.apiUrl}/contracts/generate-invoice/${invoiceData.contractId}`,
                    invoiceData,
                    {
                        withCredentials: true,
                        responseType: "blob",
                    }
                )
                .subscribe({
                    next: (response: any) => {
                        var blob = new Blob([response], {
                            type: "application/pdf",
                        });
                        const fileUrl = URL.createObjectURL(blob);
                        window.open(fileUrl);
                        resolve();
                    },
                    error: (_) => {
                        reject();
                    },
                });
        });
    }
}
