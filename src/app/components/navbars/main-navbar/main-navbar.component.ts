import { Component, OnInit } from "@angular/core";
import { NgbOffcanvas } from "@ng-bootstrap/ng-bootstrap";
import { User } from "src/app/models/user";
import { ApiService } from "src/app/services/api/api.service";
import { MainSidebarComponent } from "../../sidebars/main-sidebar/main-sidebar.component";

@Component({
    selector: "app-main-navbar",
    templateUrl: "./main-navbar.component.html",
    styleUrls: ["./main-navbar.component.css"],
})
export class MainNavbarComponent implements OnInit {
    public user!: User;

    constructor(
        private apiService: ApiService,
        private offcanvasService: NgbOffcanvas
    ) {}

    public openSidebar() {
        this.offcanvasService.open(MainSidebarComponent);
    }

    public async ngOnInit() {
        const user = await this.apiService.getCurrentUser();
        this.user = user;
    }
}
