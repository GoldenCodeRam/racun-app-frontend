import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { SearchResult } from "./apiTypes";

/**
 * This interface describes an API that has a search with pagination
 * and other stuff.
 */
export interface ApiWithSearch<T> {
    search(
        userSearch?: string,
        currentSearchPage?: number,
        searchLimit?: number
    ): Observable<SearchResult<T>>;

    count(): Promise<number>;
}

@Injectable({
    providedIn: "root",
})
export class ApiService {
    constructor(protected httpClient: HttpClient) {}
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
                    error: (error) => reject(error),
                });
        });
    }

    protected async makeSimplePatchRequest<T>(
        url: string,
        body: T
    ): Promise<T> {
        return this.promisify((resolve, reject) => {
            this.httpClient
                .patch(`${environment.apiUrl}${url}`, body, {
                    withCredentials: true,
                })
                .subscribe({
                    next: (value) => {
                        resolve(value as T);
                    },
                    error: (error) => reject(error),
                });
        });
    }

    protected async makeSimplePostRequest<T>(url: string, body: T): Promise<T> {
        return this.promisify((resolve, reject) => {
            this.httpClient
                .post(`${environment.apiUrl}${url}`, body, {
                    withCredentials: true,
                })
                .subscribe({
                    next: (value) => {
                        resolve(value as T);
                    },
                    error: (error) => reject(error),
                });
        });
    }

    protected makeSearchPaginationRequest<T>(
        url: string,
        userSearch: string,
        currentPage: number = 0,
        searchAmount: number = 10
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
                    error: (error) => reject(error),
                });
        });
    }

    protected promisify<T>(
        callback: (resolve: any, reject: any) => void
    ): Promise<T> {
        return new Promise<T>(callback);
    }
}
