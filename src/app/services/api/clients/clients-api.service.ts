import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
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
    ): Observable<SearchResult<Client>> {
        return from(
            this.getClients(userSearch, currentSearchPage, searchLimit)
        );
    }

    count(): Promise<number> {
        return this.makeSimpleGetRequest<number>("/clients/count");
    }

    public getClients(
        userSearch: string,
        currentPage: number,
        searchAmount: number
    ): Promise<SearchResult<Client>> {
        return this.makeSearchPaginationRequest(
            "/clients/search",
            userSearch,
            currentPage,
            searchAmount
        );
    }

    public createClient(client: {
        firstName: string;
        lastName: string;
        document: string;
        phone: string;
        address: string;
        email: string | null;
    }) {
        return this.makeSimplePostRequest("/clients/create", client);
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