import { Component, Input, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ApiWithSearch } from "src/app/services/api/api.service";
import { SearchResult } from "src/app/services/api/apiTypes";

@Component({
    selector: "app-search-table",
    templateUrl: "./search-table.component.html",
    styleUrls: ["./search-table.component.sass"],
})
export class SearchTableComponent<T> implements OnInit {
    @Input() searchFunctionService!: ApiWithSearch<T>;

    public loading = new BehaviorSubject<boolean>(true);

    public searchResult!: Observable<SearchResult<T>>;

    public searchInput = "";

    constructor() {}

    ngOnInit() {
        this.search();
    }

    public search() {
        this.loading.next(true);

        this.searchResult = this.searchFunctionService.search(this.searchInput);
        this.searchResult.subscribe((data) => {
            console.log(data);
            this.loading.next(false);
        });
    }
}
