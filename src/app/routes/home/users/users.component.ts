import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { SearchFunctionService } from "src/app/services/components/search/search-list/search-function.service";

@Component({
    selector: "app-users",
    templateUrl: "./users.component.html",
    styleUrls: ["./users.component.sass"],
})
export class UsersComponent implements OnInit {
    // This constant is used to determine the amount of users searched.
    public readonly USER_SEARCH_LIMIT = 5;

    public userSearch: string = "";

    public users: User[] = [];

    public currentPage: number = 0;
    public paginationCount: number = 0;

    constructor(
        public searchFunctionService: SearchFunctionService<User>
    ) {}

    async ngOnInit() {}
}
