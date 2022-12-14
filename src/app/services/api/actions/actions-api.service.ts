import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { Action } from "src/app/models/action";
import { ApiService, ApiWithSearch } from "../api.service";
import { SearchResult } from "../apiTypes";

@Injectable({
    providedIn: "root",
})
export class ActionApiService
    extends ApiService
    implements ApiWithSearch<Action>
{
    search(
        userSearch: string,
        currentSearchPage: number,
        searchLimit: number
    ): Observable<SearchResult<Action>> {
        return from(
            this.getActions(userSearch, currentSearchPage, searchLimit).then(
                (result) => {
                    return result.unwrap();
                }
            )
        );
    }

    count(): Promise<number> {
        throw new Error("Method not implemented.");
    }

    public async getActions(
        userSearch: string,
        currentPage: number,
        searchAmount: number
    ) {
        return this.makeSearchPaginationRequest<Action>(
            "/actions/search",
            userSearch,
            currentPage,
            searchAmount
        );
    }
}
