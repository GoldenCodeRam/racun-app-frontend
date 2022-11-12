import { Injectable } from "@angular/core";
import { Client } from "src/app/models/client";
import { environment } from "src/environments/environment";
import { ApiService, ApiWithSearch } from "../api.service";
import { SearchResult } from "../apiTypes";

@Injectable({
    providedIn: "root",
})
export class ClientsApiService
    extends ApiService
    implements ApiWithSearch<Client>
{
    search(
        userSearch: string,
        currentSearchPage: number,
        searchLimit: number
    ): Promise<SearchResult<Client>> {
        return this.getClients(userSearch, currentSearchPage, searchLimit);
    }

    count(): Promise<number> {
        return this.makeSimpleGetRequest<number>("/clients/count");
    }

    // TODO: We should refactor the getClients and getUsers methods as they are
    // the same.
    public getClients(
        userSearch: string,
        currentPage: number,
        searchAmount: number
    ): Promise<SearchResult<Client>> {
        return this.makeSearchPaginationRequest(
            "/clients",
            userSearch,
            currentPage,
            searchAmount
        );
    }

    public getClient(clientId: number) {
        return this.makeSimpleGetRequest<Client>(`/clients/${clientId}`);
    }

    public saveClient(client: Client) {
        return this.httpClient.post(`${environment.apiUrl}/clients`, client);
    }

    public updateClient(id: string, updateClient: Client) {
        return this.httpClient.put(
            `${environment.apiUrl}/clients/${id}`,
            updateClient
        );
    }
}
