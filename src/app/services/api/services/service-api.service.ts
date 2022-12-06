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

    public getServices(
        userSearch: string,
        currentPage: number,
        searchAmount: number
    ): Promise<SearchResult<Service>> {
        return this.makeSearchPaginationRequest(
            "/services/search",
            userSearch,
            currentPage,
            searchAmount
        );
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

    public getService(serviceId: number): Promise<Service> {
        return this.makeSimpleGetRequest<Service>(`/services/${serviceId}`);
    }

    public updateService(updateService: Service) {
        return this.promisify((resolve, reject) => {
            return this.httpClient
                .put(
                    `${environment.apiUrl}/services/update/${updateService.id}`,
                    updateService,
                    {
                        withCredentials: true,
                    }
                )
                .subscribe({
                    next: (_) => resolve(),
                    error: (error) => reject(error),
                });
        });
    }

    public deleteService(serviceId: number) {
        return this.promisify((resolve, reject) => {
            return this.httpClient
                .delete(`${environment.apiUrl}/services/delete/${serviceId}`, {
                    withCredentials: true,
                    responseType: "text",
                })
                .subscribe({
                    next: (_) => resolve(),
                    error: (error) => reject(error),
                });
        });
    }
}
