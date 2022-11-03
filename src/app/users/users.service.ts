import { Injectable, Type } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Client, Hadware, Type_document } from "../models/Client";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../models/Users";

@Injectable({
    providedIn: "root",
})
export class UsersService {
    constructor(private http: HttpClient) {}

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${environment.apiUrl}/users`, {
            withCredentials: true,
        });
    }

    getUsersByRols(id: string): Observable<User[]> {
        return this.http.get<User[]>(`${environment.apiUrl}/users/order/${id}`, {
            withCredentials: true,
        });
    }


    getClient(id: string) {
        return this.http.get(`${environment.apiUrl}/users/${id}`);
    }

    saveClient(client: Client) {
        return this.http.post(`${environment.apiUrl}/clients`, client);
    }

    updateClient(id: string, updateClient: Client): Observable<any> {
        return this.http.put(
            `${environment.apiUrl}/clients/${id}`,
            updateClient
        );
    }
}
