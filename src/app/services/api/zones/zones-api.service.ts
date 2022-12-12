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

    public async count(): Promise<number> {
        const result = await this.makeSimpleGetRequest<number>("/zones/count");

        return result.unwrap();
    }

    public async getZones(
        userSearch: string,
        currentPage: number,
        searchAmount: number
    ): Promise<SearchResult<Zone>> {
        const result = await this.makeSearchPaginationRequest<Zone>(
            "/zones/search",
            userSearch,
            currentPage,
            searchAmount
        );

        return result.unwrap();
    }

    public getZone(zoneId: number) {
        return this.makeSimpleGetRequest<Zone>(`/zones/${zoneId}`);
    }

    public saveZone(zone: Zone) {
        return this.httpClient.post(`${environment.apiUrl}/zones`, zone);
    }

    public updateZone(updateZone: Zone) {
        return this.observableToResult(
            this.httpClient.put(
                `${environment.apiUrl}/zones/update/${updateZone.id}`,
                updateZone,
                {
                    withCredentials: true,
                }
            )
        );
    }

    public deleteZone(id: number) {
        return this.observableToResult(
            this.httpClient.delete(`${environment.apiUrl}/zones/delete/${id}`, {
                withCredentials: true,
                responseType: "text",
            })
        );
    }

    public createZone(zoneInformation: {
        name: string;
        code: string;
        place: Place;
    }) {
        return this.makeSimplePostRequest("/zones/create", zoneInformation);
    }
}
