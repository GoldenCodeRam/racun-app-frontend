import { Component, OnInit } from "@angular/core";
import { UsersApiService } from "src/app/services/api/users/users-api.service";

@Component({
    selector: "app-users",
    templateUrl: "./users.component.html",
    styleUrls: ["./users.component.sass"],
})
export class UsersComponent implements OnInit {
    // This constant is used to determine the amount of users searched.
    public readonly USER_SEARCH_LIMIT = 5;

    constructor(public usersApiService: UsersApiService) {}

    async ngOnInit() {}
}
