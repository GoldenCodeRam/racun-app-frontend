import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Client } from "src/app/models/client";
import { Permission } from "src/app/models/permissions";
import { Role } from "src/app/models/role";
import { User } from "src/app/models/user";
import { environment } from "src/environments/environment";

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

    public getClients(): Promise<Client[]> {
        return this.makeSimpleGetRequest<Client[]>("/clients");
    }

    public getClient(id: string) {
        return this.httpClient.get(`${environment.apiUrl}/clients/${id}`);
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

    private async makeSimpleGetRequest<T>(url: string): Promise<T> {
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
}
