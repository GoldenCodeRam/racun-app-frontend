import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "src/app/models/user";
import { ApiService } from "src/app/services/api/api.service";

@Component({
    selector: "app-show-user",
    templateUrl: "./show-user.component.html",
    styleUrls: ["./show-user.component.sass"],
})
export class ShowUserComponent implements OnInit {
    public user!: User;

    constructor(
        private route: ActivatedRoute,
        private apiService: ApiService
    ) {}

    async ngOnInit() {
        this.user = await this.apiService.getUser(
            this.route.snapshot.params["userId"]
        );
    }
}
