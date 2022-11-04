import { Component, Input, OnInit } from "@angular/core";
import { SearchFunctionService } from "src/app/services/components/search/search-list/search-function.service";

@Component({
    selector: "app-search-list",
    templateUrl: "./search-list.component.html",
    styleUrls: ["./search-list.component.sass"],
})
export class SearchListComponent<T> implements OnInit {
    @Input() searchFunctionService!: SearchFunctionService<T>;

    @Input() searchLimit: number = 5;

    public userSearch: string = "";

    public currentSearchPage: number = 0;
    public paginationCount: number = 0;

    public search: T[] = [];

    constructor() {}

    async ngOnInit() {
        await this.searchElements();
    }

    private async searchElements() {
        const result = await this.searchFunctionService.search(
            this.userSearch,
            this.currentSearchPage,
            this.searchLimit
        );

        this.search = result.search;

        // See explanation on user component.
        this.paginationCount = Math.ceil(result.searchCount / this.searchLimit);
    }

    public async paginationBack() {
        // Second security validation
        if (this.currentSearchPage > 0) {
            this.currentSearchPage--;

            await this.searchElements();
        }
    }

    public async paginationForward() {
        // Second security validation
        if (this.currentSearchPage < this.paginationCount - 1) {
            this.currentSearchPage++;

            await this.searchElements();
        }
    }
}
