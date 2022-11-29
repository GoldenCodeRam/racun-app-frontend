import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { Role } from "src/app/models/role";

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
    ): Observable<SearchResult<User>> {
        return from(this.getUsers(userSearch, currentSearchPage, searchLimit));
    }

    public count(): Promise<number> {
        return this.makeSimpleGetRequest("/users/count");
    }

    public async getCurrentUser(): Promise<User> {
        return this.makeSimpleGetRequest("/users/current-user");
    }

    public getUser(userId: number): Promise<User> {
        return this.makeSimpleGetRequest(`/users/get/${userId}`);
    }

    public getUsers(
        userSearch: string,
        currentPage: number,
        searchAmount: number
    ): Promise<SearchResult<User>> {
        return this.makeSearchPaginationRequest(
            "/users/search",
            userSearch,
            currentPage,
            searchAmount
        );
    }

    public createUser(userInformation: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        role: Role;
    }) {
        return this.makeSimplePostRequest("/users/create", userInformation);
    }

    public updateUser(updateUser: User) {
        return this.promisify((resolve, reject) => {
            return this.httpClient
                .put(
                    `${environment.apiUrl}/users/edit/${updateUser.id}`,
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

    public deleteUser(userId: number) {
        return this.promisify((resolve, reject) => {
            return this.httpClient
                .delete(`${environment.apiUrl}/users/delete/${userId}`, {
                    withCredentials: true,
                    responseType: "text",
                })
                .subscribe({
                    next: (_) => resolve(),
                    error: (error) => reject(error),
                });
        });
    }
}
