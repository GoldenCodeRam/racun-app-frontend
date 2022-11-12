import { Injectable } from "@angular/core";
import { Hardware } from "src/app/models/hardware";
import { ApiService, ApiWithSearch } from "../api.service";
import { SearchResult } from "../apiTypes";

@Injectable({
    providedIn: "root",
})
export class HardwareApiService
    extends ApiService
    implements ApiWithSearch<Hardware>
{
    public search(
        userSearch: string,
        currentSearchPage: number,
        searchLimit: number
    ): Promise<SearchResult<Hardware>> {
        throw new Error("Method not implemented.");
    }

    public count(): Promise<number> {
        throw new Error("Method not implemented.");
    }

    public async getHardware(
        userSearch: string,
        currentPage: number,
        searchAmount: number
    ): Promise<SearchResult<Hardware>> {
        return this.makeSearchPaginationRequest(
            "/hardware",
            userSearch,
            currentPage,
            searchAmount
        );
    }

    public async getHardwareById(hardwareId: number): Promise<Hardware> {
        return this.makeSimpleGetRequest(`/hardware/${hardwareId}`);
    }
}
