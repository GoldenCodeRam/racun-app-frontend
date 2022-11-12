import { Injectable } from "@angular/core";
import { ApiService, ApiWithSearch } from "../api.service";
import { SearchResult } from "../apiTypes";

import { Zone } from "../../../models/zone.js";

@Injectable({
    providedIn: "root",
})
export class ZonesApiService extends ApiService implements ApiWithSearch<Zone> {
    public search(
        userSearch: string,
        currentSearchPage: number,
        searchLimit: number
    ): Promise<SearchResult<Zone>> {
        return this.getZones(userSearch, currentSearchPage, searchLimit);
    }

    public count(): Promise<number> {
        return this.makeSimpleGetRequest("/zones/count")
    }
}
