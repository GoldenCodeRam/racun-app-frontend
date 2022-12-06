import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import {
    Hardware,
    HardwareInfo,
    HardwareOnClient,
    HardwareOnClientInfo,
    HardwareOnZone,
    HardwareOnZonesInfo,
} from "src/app/models/hardware";
import { environment } from "src/environments/environment";
import { ApiService, ApiWithSearch } from "../api.service";
import { SearchResult } from "../apiTypes";

@Injectable({
    providedIn: "root",
})
export class HardwareApiService
    extends ApiService
    implements ApiWithSearch<Hardware>
{
    public search(
        userSearch: string,
        currentSearchPage: number,
        searchLimit: number
    ): Observable<SearchResult<Hardware>> {
        return from(
            this.getHardware(userSearch, currentSearchPage, searchLimit)
        );
    }

    public count(): Promise<number> {
        throw new Error("Method not implemented.");
    }

    public async getHardware(
        userSearch: string,
        currentPage: number,
        searchAmount: number
    ): Promise<SearchResult<Hardware>> {
        return this.makeSearchPaginationRequest(
            "/hardware/search",
            userSearch,
            currentPage,
            searchAmount
        );
    }

    public createHardware(hardwareInfo: HardwareInfo) {
        return this.makeSimplePostRequest("/hardware/create", hardwareInfo);
    }

    public createHardwareOnZones(hardwareInfo: HardwareOnZonesInfo) {
        return this.makeSimplePostRequest(
            "/hardware-on-zones/create",
            hardwareInfo
        );
    }

    public createHardwareOnClients(hardwareInfo: HardwareOnClientInfo) {
        return this.makeSimplePostRequest(
            "/hardware-on-clients/create",
            hardwareInfo
        );
    }

    public getHardwareOnClientsByClientAccountId(
        id: number
    ): Promise<HardwareOnClient[]> {
        return this.makeSimpleGetRequest(`/hardware-on-clients/${id}`);
    }

    public getHardwareOnZonesByZoneId(id: number): Promise<HardwareOnZone[]> {
        return this.makeSimpleGetRequest(`/hardware-on-zones/${id}`);
    }

    public async getHardwareById(hardwareId: number): Promise<Hardware> {
        return this.makeSimpleGetRequest(`/hardware/${hardwareId}`);
    }

    public updateHardware(hardware: Hardware) {
        return this.promisify((resolve, reject) => {
            return this.httpClient
                .put(
                    `${environment.apiUrl}/hardware/update/${hardware.id}`,
                    hardware,
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

    public deleteHardwareOnZone(hardwareOnZone: HardwareOnZone) {
        console.log(hardwareOnZone);
        return this.promisify((resolve, reject) => {
            return this.httpClient
                .delete(
                    `${environment.apiUrl}/hardware-on-zones/delete/${hardwareOnZone.id}`,
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

    public deleteHardwareOnClient(hardwareOnClient: HardwareOnClient) {
        console.log(hardwareOnClient);
        return this.promisify((resolve, reject) => {
            return this.httpClient
                .delete(
                    `${environment.apiUrl}/hardware-on-clients/delete/${hardwareOnClient.id}`,
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

    public deleteHardware(hardware: Hardware) {
        return this.promisify((resolve, reject) => {
            return this.httpClient
                .delete(
                    `${environment.apiUrl}/hardware/delete/${hardware.id}`,
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
