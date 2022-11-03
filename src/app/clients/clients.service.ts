import { Injectable, Type } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Client, Hadware, Type_document } from "../models/Client";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class ClientsService {
    constructor(private http: HttpClient) {}

    getClients(): Observable<Client[]> {
        return this.http.get<Client[]>(`${environment.apiUrl}/clients`, {
            withCredentials: true,
        });
    }

    getTypeDocs(): Observable<Type_document[]> {
        return this.http.get<Type_document[]>(`${environment.apiUrl}/typeDoc`, {
            withCredentials: true,
        });
    }
    getClient(id: string) {
        return this.http.get(`${environment.apiUrl}/clients/${id}`);
    }

    gethadwareByClient(id: string) {
        return this.http.get<Hadware[]>(`${environment.apiUrl}/clients`, {
            withCredentials: true,
        });
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
