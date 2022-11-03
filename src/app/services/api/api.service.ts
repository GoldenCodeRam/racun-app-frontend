import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class ApiService {
    constructor(private httpClient: HttpClient) {}

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
}
