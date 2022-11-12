import { Injectable } from "@angular/core";
import { Permission } from "src/app/models/permissions";
import { Role } from "src/app/models/role";
import { environment } from "src/environments/environment";
import { ApiService, ApiWithSearch } from "../api.service";
import { SearchResult } from "../apiTypes";

@Injectable({
    providedIn: "root",
})
export class RolesApiService extends ApiService implements ApiWithSearch<Role> {
    public search(
        userSearch: string,
        currentSearchPage: number,
        searchLimit: number
    ): Promise<SearchResult<Role>> {
        return this.getRoles(userSearch, currentSearchPage, searchLimit);
    }

    public count(): Promise<number> {
        throw new Error("Method not implemented.");
    }

    public async getRoles(
        userSearch: string,
        currentPage: number,
        searchAmount: number
    ): Promise<SearchResult<Role>> {
        return this.makeSearchPaginationRequest(
            "/roles",
            userSearch,
            currentPage,
            searchAmount
        );
    }

    public getRole(roleId: number): Promise<Role> {
        return this.makeSimpleGetRequest<Role>(`/roles/${roleId}`);
    }

    public async getRolePermissions(role: Role): Promise<Permission[]> {
        return this.makeSimpleGetRequest<Permission[]>(
            `/permissions/${role.id}`
        );
    }

    public async createRole(roleName: string) {
        await this.promisify((resolve, reject) => {
            this.httpClient
                .post(
                    `${environment.apiUrl}/roles/create`,
                    {
                        roleName: roleName,
                    },
                    {
                        withCredentials: true,
                        responseType: "text",
                    }
                )
                .subscribe({
                    next: (_) => {
                        resolve();
                    },
                    error: (_) => {
                        reject();
                    },
                });
        });
    }
}
