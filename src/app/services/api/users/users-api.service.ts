import { Injectable } from "@angular/core";
import { User } from "src/app/models/user";
import { environment } from "src/environments/environment";
import { ApiService, ApiWithSearch } from "../api.service";
import { SearchResult } from "../apiTypes";

@Injectable({
    providedIn: "root",
})
export class UsersApiService extends ApiService implements ApiWithSearch<User> {
    public search(
        userSearch: string,
        currentSearchPage: number,
        searchLimit: number
    ): Promise<SearchResult<User>> {
        return this.getUsers(userSearch, currentSearchPage, searchLimit);
    }

    public count(): Promise<number> {
        return this.makeSimpleGetRequest("/users/count")
    }

    public async getCurrentUser(): Promise<User> {
        return new Promise((resolve, reject) => {
            this.httpClient
                .get(`${environment.apiUrl}/current-user`, {
                    withCredentials: true,
                })
                .subscribe({
                    next(result) {
                        resolve(result as User);
                    },
                });
        });
    }

    public getUser(userId: number): Promise<User> {
        return this.makeSimpleGetRequest(`/users/${userId}`);
    }

    // TODO: This method is too big and should be divided.
    public getUsers(
        userSearch: string,
        currentPage: number,
        searchAmount: number
    ): Promise<SearchResult<User>> {
        return this.makeSearchPaginationRequest(
            "/users",
            userSearch,
            currentPage,
            searchAmount
        );
    }

    public updateUser(updateUser: User) {
        return this.promisify((resolve, reject) => {
            return this.httpClient
                .put(
                    `${environment.apiUrl}/users/${updateUser.id}`,
                    updateUser,
                    {
                        withCredentials: true,
                    }
                )
                .subscribe({
                    next: (_) => resolve(),
                    error: (error) => reject(error),
                });
        });
    }
}
