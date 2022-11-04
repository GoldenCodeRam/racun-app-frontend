import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { User } from "src/app/models/user";
import { ApiService } from "src/app/services/api/api.service";

@Component({
    selector: "app-main-navbar",
    templateUrl: "./main-navbar.component.html",
    styleUrls: ["./main-navbar.component.css"],
})
export class MainNavbarComponent implements OnInit {
    public user!: User;

    constructor(
        private apiService: ApiService,
    ) {}

    async ngOnInit() {
        const user = await this.apiService.getCurrentUser();
        this.user = user;
    }
}
