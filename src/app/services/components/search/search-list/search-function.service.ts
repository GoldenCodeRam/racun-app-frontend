import { Injectable } from "@angular/core";
import { ApiService } from "src/app/services/api/api.service";

@Injectable()
export abstract class SearchFunctionService<T> extends ApiService {
    public abstract search(
        userSearch: string,
        currentSearchPage: number,
        searchLimit: number
    ): Promise<{
        search: T[];
        searchCount: number;
    }>;
}
