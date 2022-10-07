import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
    ) { }

    async login(email: string, password: string): Promise<boolean> {
        await fetch('http://localhost:8000/login/password', {
            method: 'POST',
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

    async canActivate(): Promise<boolean> {
        const response = await fetch('http://localhost:8000/auth/canActivate', {
            credentials: "include",
        });
        return response.status === 200;
    }
}
