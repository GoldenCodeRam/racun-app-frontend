import { Injectable } from "@angular/core";
import { ApiService, ApiWithSearch } from "../api.service";
import { SearchResult } from "../apiTypes";

import { Zone } from "../../../models/zone.js";
import { from, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Place } from "src/app/models/place";

@Injectable({
    providedIn: "root",
})
export class ZonesApiService extends ApiService implements ApiWithSearch<Zone> {
    public search(
        userSearch: string,
        currentSearchPage: number,
        searchLimit: number
    ): Observable<SearchResult<Zone>> {
        return from(this.getZones(userSearch, currentSearchPage, searchLimit));
    }

    public count(): Promise<number> {
        return this.makeSimpleGetRequest("/zones/count");
    }

    public getZones(
        userSearch: string,
        currentPage: number,
        searchAmount: number
    ): Promise<SearchResult<Zone>> {
        return this.makeSearchPaginationRequest(
            "/zones/search",
            userSearch,
            currentPage,
            searchAmount
        );
    }

    public getZone(zoneId: number): Observable<Zone> {
        return from(this.makeSimpleGetRequest<Zone>(`/zones/${zoneId}`));
    }

    public saveZone(zone: Zone) {
        return this.httpClient.post(`${environment.apiUrl}/zones`, zone);
    }

    public updateZone(updateZone: Zone) {
        return this.promisify((resolve, reject) => {
            return this.httpClient
                .put(
                    `${environment.apiUrl}/zones/update/${updateZone.id}`,
                    updateZone,
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

    public deleteZone(id: number) {
        return this.promisify((resolve, reject) => {
            return this.httpClient
                .delete(`${environment.apiUrl}/zones/delete/${id}`, {
                    withCredentials: true,
                    responseType: "text",
                })
                .subscribe({
                    next: (_) => resolve(),
                    error: (error) => reject(error),
                });
        });
    }

    public createZone(zoneInformation: {
        name: string;
        code: string;
        place: Place;
    }) {
        return this.makeSimplePostRequest("/zones/create", zoneInformation);
    }
}
