import { Injectable } from "@angular/core";
import { ApiService, ApiWithSearch } from "../api.service";
import { SearchResult } from "../apiTypes";

import { Zone } from "../../../models/zone.js";
import { from, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Service } from "src/app/models/service";

@Injectable({
    providedIn: "root",
})

export class ServiceApiService extends ApiService implements ApiWithSearch<Service>{

    search(userSearch?: string | undefined, currentSearchPage?: number | undefined, searchLimit?: number | undefined): Observable<SearchResult<Service>> {
        throw new Error("Method not implemented.");
    }
    count(): Promise<number> {
        throw new Error("Method not implemented.");
    }

    public createService(serviceInformation: {
        name: string,
        description: string
    }){
        return this.makeSimplePostRequest("/services/create", serviceInformation)
    }

    public getService(serviceId: number): Promise<Service>{
        return this.makeSimpleGetRequest<Service>(`/services/${serviceId}`)
    }

    public updateService(updateService: Service){
        return this.promisify((resolve, reject) => {
            return this.httpClient
                .put(
                    `${environment.apiUrl}/services/edit/${updateService.id}`,
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

}
