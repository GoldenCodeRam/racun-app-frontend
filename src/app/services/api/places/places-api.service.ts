import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { Place } from "src/app/models/place";
import { ApiService, ApiWithSearch } from "../api.service";
import { SearchResult } from "../apiTypes";

@Injectable({
    providedIn: "root",
})
export class PlacesApiService
    extends ApiService
    implements ApiWithSearch<Place>
{
    public search(
        userSearch: string,
        currentSearchPage: number,
        searchLimit: number
    ): Observable<SearchResult<Place>> {
        return from(this.getPlaces(userSearch, currentSearchPage, searchLimit));
    }

    public count(): Promise<number> {
        throw new Error("Method not implemented.");
    }

    public async getPlaces(
        userSearch: string,
        currentPage: number,
        searchAmount: number
    ): Promise<SearchResult<Place>> {
        const result = await this.makeSearchPaginationRequest<Place>(
            "/places/search",
            userSearch,
            currentPage,
            searchAmount
        );

        return result.unwrap();
    }

    public async getPlace(placeId: number) {
        return this.makeSimpleGetRequest<Place>(`/places/get/${placeId}`);
    }
}
