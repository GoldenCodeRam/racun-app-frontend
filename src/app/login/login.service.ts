import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class LoginService {

    constructor(private router: Router) { }


    login(email: string, password: string) {
        fetch('http://localhost:8000/login/password', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        }).then((response) => {
            if (response.status === 200) {
                console.log("Authenticated!");
            }
        });
    }

}
