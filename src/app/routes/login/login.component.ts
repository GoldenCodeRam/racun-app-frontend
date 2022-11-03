import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
    }

    async login(form: NgForm) {
        const email = form.value.email
        const password = form.value.password

        if (await this.authService.login(email, password)) {
            this.router.navigate(["home"]);
        }
    }

}
