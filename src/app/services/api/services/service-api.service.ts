import { Injectable } from "@angular/core";
import { ApiService, ApiWithSearch } from "../api.service";
import { SearchResult } from "../apiTypes";

import { from, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Service } from "src/app/models/service";

@Injectable({
    providedIn: "root",
})
export class ServicesApiService
    extends ApiService
    implements ApiWithSearch<Service>
{
    search(
        userSearch: string,
        currentSearchPage: number,
        searchLimit: number
    ): Observable<SearchResult<Service>> {
        return from(
            this.getServices(userSearch, currentSearchPage, searchLimit)
        );
    }
    count(): Promise<number> {
        throw new Error("Method not implemented.");
    }

    public async getServices(
        userSearch: string,
        currentPage: number,
        searchAmount: number
    ): Promise<SearchResult<Service>> {
        const result = await this.makeSearchPaginationRequest<Service>(
            "/services/search",
            userSearch,
            currentPage,
            searchAmount
        );

        return result.unwrap();
    }

    public createService(serviceInformation: {
        name: string;
        description: string;
        value: number;
    }) {
        return this.makeSimplePostRequest(
            "/services/create",
            serviceInformation
        );
    }

    public getService(serviceId: number) {
        return this.makeSimpleGetRequest<Service>(`/services/${serviceId}`);
    }

    public updateService(updateService: Service) {
        return this.observableToResult(
            this.httpClient.put(
                `${environment.apiUrl}/services/update/${updateService.id}`,
                updateService,
                {
                    withCredentials: true,
                }
            )
        );
    }

    public deleteService(serviceId: number) {
        return this.observableToResult(
            this.httpClient.delete(
                `${environment.apiUrl}/services/delete/${serviceId}`,
                {
                    withCredentials: true,
                    responseType: "text",
                }
            )
        );
    }
}
