import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-search-list",
    templateUrl: "./search-list.component.html",
    styleUrls: ["./search-list.component.sass"],
})
export class SearchListComponent<T> implements OnInit {
    @Input() getFunction!: (
        userSearch: string,
        currentPage: number,
        searchLimit: number
    ) => Promise<{
        search: T[];
        searchCount: number;
    }>;

    @Input() searchLimit: number = 5;

    public userSearch: string = "";

    public currentSearchPage: number = 0;
    public paginationCount: number = 0;

    public search: T[] = [];

    constructor(private httpClient: HttpClient) {}

    async ngOnInit() {
        await this.searchElements();
    }

    private async searchElements() {
        const result = await this.getFunction(
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
        console.log(this);
        console.log(this.search);
        // Second security validation
        if (this.currentSearchPage < this.paginationCount - 1) {
            this.currentSearchPage++;

            await this.searchElements();
        }
    }
}
