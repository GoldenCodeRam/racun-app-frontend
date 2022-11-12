import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Client } from "src/app/models/client";
import { Permission } from "src/app/models/permissions";
import { Role } from "src/app/models/role";
import { Zone } from "src/app/models/zone";
import { environment } from "src/environments/environment";
import { SearchResult } from "./apiTypes";

/**
 * This interface describes an API that has a search with pagination
 * and other stuff.
 */
export interface ApiWithSearch<T> {
    search(
        userSearch: string,
        currentSearchPage: number,
        searchLimit: number
    ): Promise<SearchResult<T>>;

    count(): Promise<number>;
}

@Injectable({
    providedIn: "root",
})
export class ApiService {
    constructor(protected httpClient: HttpClient) {}
    public getZones(
        userSearch: string,
        currentPage: number,
        searchAmount: number
    ): Promise<SearchResult<Zone>> {
        return this.makeSearchPaginationRequest(
            "/zones",
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

    protected async makeSimpleGetRequest<T>(url: string): Promise<T> {
        return this.promisify((resolve, reject) => {
            this.httpClient
                .get(`${environment.apiUrl}${url}`, {
                    withCredentials: true,
                })
                .subscribe({
                    next: (value) => {
                        resolve(value as T);
                    },
                });
        });
    }

    protected makeSearchPaginationRequest<T>(
        url: string,
        userSearch: string,
        currentPage: number,
        searchAmount: number
    ): Promise<SearchResult<T>> {
        return new Promise((resolve, reject) => {
            this.httpClient
                .post(
                    `${environment.apiUrl}${url}`,
                    {
                        userSearch: userSearch,
                        // Say we are on page 3 with a search amount of 5, so we
                        // need to skip 15 ahead and search five more.
                        skip: currentPage * searchAmount,
                        take: searchAmount,
                    },
                    {
                        withCredentials: true,
                    }
                )
                .subscribe({
                    next: (value) => {
                        resolve(value as SearchResult<T>);
                    },
                });
        });
    }

    protected promisify<T>(
        callback: (resolve: any, reject: any) => void
    ): Promise<T> {
        return new Promise<T>(callback);
    }
}
