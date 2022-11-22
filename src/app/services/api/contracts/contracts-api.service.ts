import { Injectable } from "@angular/core";
import { Contract } from "src/app/models/contract";
import { environment } from "src/environments/environment";
import { ApiService } from "../api.service";

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
        await this.promisify((resolve, reject) => {
            this.httpClient
                .post(
                    `${environment.apiUrl}/contracts/create`,
                    contractInformation,
                    {
                        withCredentials: true,
                        responseType: "text",
                    }
                )
                .subscribe({
                    next: (_) => {
                        resolve();
                    },
                    error: (_) => {
                        reject();
                    },
                });
        });
    }

    public async getContractsByClientAccount(clientAccountId: number) {
        return this.makeSimpleGetRequest<Contract[]>(
            `/contracts/by-client-account/${clientAccountId}`
        );
    }
}
