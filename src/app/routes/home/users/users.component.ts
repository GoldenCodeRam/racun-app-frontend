import { Component, Injectable, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { SearchResult } from "src/app/services/api/apiTypes";
import { SearchFunctionService } from "src/app/services/components/search/search-list/search-function.service";

@Injectable()
class SearchFunction extends SearchFunctionService<User> {
    public async search(
        userSearch: string,
        currentSearchPage: number,
        searchLimit: number
    ): Promise<SearchResult<User>> {
        return this.getUsers(userSearch, currentSearchPage, searchLimit);
    }
}

@Component({
    selector: "app-users",
    templateUrl: "./users.component.html",
    providers: [
        {
            provide: SearchFunctionService<User>,
            useClass: SearchFunction,
        },
    ],
    styleUrls: ["./users.component.sass"],
})
export class UsersComponent implements OnInit {
    // This constant is used to determine the amount of users searched.
    public readonly USER_SEARCH_LIMIT = 5;

    constructor(public searchFunctionService: SearchFunctionService<User>) {}

    async ngOnInit() {}
}
