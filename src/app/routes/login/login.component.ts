import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";
import { Err, Ok } from "ts-results";
import { AuthService } from "../../services/auth/auth.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
    constructor(
        private router: Router,
        private authService: AuthService,
        private mainLoaderService: MainLoaderService
    ) {}

    ngOnInit(): void {
        this.router.navigate(["home"]);
    }

    async login(form: NgForm) {
        const email = form.value.email;
        const password = form.value.password;

        this.mainLoaderService.doWithLoadingScreen(async () => {
            const result = await this.authService.login(email, password);

            if (result.ok) {
                this.router.navigate(["home"]);

                return Ok({
                    header: "Bienvenido",
                    body: "Bienvenido al sistema RACUN.",
                });
            } else {
                return Err({
                    header: "Error de ingreso",
                    body: "Ha ocurrido un error con el ingreso, revisa por favor el correo y contraseña.",
                });
            }
        });
    }
}
