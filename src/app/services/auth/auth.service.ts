import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    constructor() {}

    async login(email: string, password: string): Promise<boolean> {
        await fetch(`${environment.backendUrl}/login/password`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        return true;
    }

    async logout(): Promise<boolean> {
        const response = await fetch(`${environment.backendUrl}/logout`, {
            method: "POST",
            credentials: "include",
        });
        console.log(response.status);
        return true;
    }


    async canActivate(): Promise<boolean> {
        const response = await fetch(
            `${environment.backendUrl}/auth/canActivate`,
            {
                credentials: "include",
            }
        );
        return response.status === 200;
    }
}
