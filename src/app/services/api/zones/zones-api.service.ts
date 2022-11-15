import { Injectable } from "@angular/core";
import { ApiService, ApiWithSearch } from "../api.service";
import { SearchResult } from "../apiTypes";

import { Zone } from "../../../models/zone.js";
import { from, Observable } from "rxjs";
import { environment } from "src/environments/environment";

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

    public getZone(zoneId: number): Promise<Zone> {
        return this.makeSimpleGetRequest<Zone>(`/zones/${zoneId}`);
    }

    public saveZone(zone: Zone) {
        return this.httpClient.post(`${environment.apiUrl}/zones`, zone);
    }

    public updateZone(id: string | number, updateZone: Zone) {
        return this.httpClient.put(
            `${environment.apiUrl}/zones/${id}`,
            updateZone
        );
    }

    public deleteZone(id: number) {
        return this.httpClient.delete(`${environment.apiUrl}/zones/${id}`);
    }
}
