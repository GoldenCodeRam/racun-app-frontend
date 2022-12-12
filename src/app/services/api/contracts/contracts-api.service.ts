import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ApiService } from "../api.service";
import { InvoiceDto } from "../invoices/invoices-api.service";

export type ContractDto = {
    id: number;
    clientAccountId: number;
    dateEnd?: Date;
    dateStart: Date;
    placeId: number;
    serviceId: number;
    status: boolean;
    value: number;
};

@Injectable({
    providedIn: "root",
})
export class ContractsApiService extends ApiService {
    public async createContract(contractInformation: {
        value: number;
        dateStart: string;
        dateEnd?: string;
        clientAccountId: number;
        placeId: number;
        serviceId: number;
    }) {
        return this.observableToResult(
            this.httpClient.post(
                `${environment.apiUrl}/contracts/create`,
                contractInformation,
                {
                    withCredentials: true,
                    responseType: "text",
                }
            )
        );
    }

    public async getContractsByClientAccount(clientAccountId: number) {
        return this.makeSimpleGetRequest<
            ContractDto & {
                invoices: InvoiceDto[];
            }
        >(`/contracts/by-client-account/${clientAccountId}`);
    }

    public async terminateContract(id: number) {
        return this.makeSimplePostRequest("/contracts/terminateContract", {
            contractId: id,
        });
    }
}
