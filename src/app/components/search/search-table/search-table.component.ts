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

    constructor() {}

    ngOnInit() {
        this.searchResult = this.searchFunctionService.search();
        this.searchResult.subscribe((_) => {
            this.loading.next(false);
        });
    }
}
