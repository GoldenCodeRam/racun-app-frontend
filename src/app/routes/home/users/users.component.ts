import { Component, OnInit } from "@angular/core";
import { take } from "rxjs";
import { User } from "src/app/models/user";
import { ApiService } from "src/app/services/api/api.service";

// This constant is used to determine the amount of users searched.
const USER_SEARCH_LIMIT = 5;

@Component({
    selector: "app-users",
    templateUrl: "./users.component.html",
    styleUrls: ["./users.component.sass"],
})
export class UsersComponent implements OnInit {
    public userSearch: string = "";

    public users: User[] = [];

    public currentPage: number = 0;
    public paginationCount: number = 0;

    public getFunction = this.apiService.getUsers;

    constructor(private apiService: ApiService) {}

    async ngOnInit() {
    }
}
