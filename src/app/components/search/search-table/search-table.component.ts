import { Component, Input, OnInit } from "@angular/core";
import { ApiWithSearch } from "src/app/services/api/api.service";

@Component({
    selector: "app-search-table",
    templateUrl: "./search-table.component.html",
    styleUrls: ["./search-table.component.sass"],
})
export class SearchTableComponent<T> implements OnInit {
    @Input() searchFunctionService!: ApiWithSearch<T>;

    constructor() {}

    ngOnInit(): void {}
}
