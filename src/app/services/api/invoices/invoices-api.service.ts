import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ApiService } from "../api.service";

export type InvoiceDto = {
    id: number;
    generationDate: string;
    adjustment: number;
    contractId: number;
    latePaymentValue: number;
    paymentDate: string;
    periodEnd: string;
    periodStart: string;
    status: number;
    suspensionDate: string;
    value: number;
};

export type CreateInvoiceDto = {
    adjustment: number;
    contractId: number;
    latePaymentValue: number;
    paymentDate: string;
    periodEnd: string;
    periodStart: string;
    status: number;
    suspensionDate: string;
    value: number;
};

@Injectable({
    providedIn: "root",
})
export class InvoicesApiService extends ApiService {
    public async findAll() {
        return await this.makeSimpleGetRequest<InvoiceDto[]>(
            "/invoices/findAll"
        );
    }

    public async generateInvoices() {
        await new Promise<void>((resolve, reject) => {
            this.httpClient
                .get(`${environment.apiUrl}/invoices/generate-invoices`, {
                    withCredentials: true,
                    responseType: "blob",
                })
                .subscribe({
                    next: (response: any) => {
                        var blob = new Blob([response], {
                            type: "application/zip",
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
        const result = await this.observableToResult<any>(
            this.httpClient.post(
                `${environment.apiUrl}/contracts/generate-invoice/${invoiceData.contractId}`,
                invoiceData,
                {
                    withCredentials: true,
                    responseType: "blob",
                }
            )
        );

        if (result.ok) {
            var blob = new Blob([result.val], {
                type: "application/zip",
            });
            const fileUrl = URL.createObjectURL(blob);
            window.open(fileUrl);
        }
    }

    public async getInvoiceFromQrCode(qrCode: string) {
        return await this.makeSimplePostRequest<InvoiceDto>(
            "/invoices/findWithQrCode",
            {
                qrCode: qrCode,
            }
        );
    }

    public async updateInvoice(invoice: any) {
        return this.makeSimplePutRequest(
            `/invoices/update/${invoice.id}`,
            invoice
        );
    }
}
