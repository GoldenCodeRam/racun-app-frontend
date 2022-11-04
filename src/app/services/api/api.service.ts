import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Client } from "src/app/models/client";
import { Hardware } from "src/app/models/hardware";
import { Permission } from "src/app/models/permissions";
import { Role } from "src/app/models/role";
import { User } from "src/app/models/user";
import { Zone } from "src/app/models/zone";
import { environment } from "src/environments/environment";
import { SearchResult } from "./apiTypes";

@Injectable({
    providedIn: "root",
})
export class ApiService {
    constructor(private httpClient: HttpClient) {}

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

    public async getRoles(): Promise<Role[]> {
        return this.makeSimpleGetRequest<Role[]>("/roles");
    }

    public async getRolePermissions(role: Role): Promise<Permission[]> {
        return this.makeSimpleGetRequest<Permission[]>(
            `/permissions/${role.id}`
        );
    }

    public createRole(roleName: string): void {
        this.httpClient
            .post(
                `${environment.apiUrl}/roles`,
                {
                    roleName: roleName,
                },
                {
                    withCredentials: true,
                }
            )
            .subscribe({
                error: (error) => {
                    console.log(error);
                },
            });
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
        return new Promise((resolve, reject) => {
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
}
