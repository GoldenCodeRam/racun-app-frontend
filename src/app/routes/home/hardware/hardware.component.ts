import { Component, Injectable, OnInit } from "@angular/core";
import { Hardware } from "src/app/models/hardware";
import { SearchResult } from "src/app/services/api/apiTypes";
import { SearchFunctionService } from "src/app/services/components/search/search-list/search-function.service";

@Injectable()
class SearchFunction extends SearchFunctionService<Hardware> {
    public async search(
        userSearch: string,
        currentSearchPage: number,
        searchLimit: number
    ): Promise<SearchResult<Hardware>> {
        return this.getHardware(userSearch, currentSearchPage, searchLimit);
    }
}

@Component({
    selector: "app-hardware",
    templateUrl: "./hardware.component.html",
    providers: [
        {
            provide: SearchFunctionService<Hardware>,
            useClass: SearchFunction,
        },
    ],
    styleUrls: ["./hardware.component.sass"],
})
export class HardwareComponent implements OnInit {
    public readonly HARDWARE_SEARCH_LIMIT = 5;

    constructor(
        public searchFunctionService: SearchFunctionService<Hardware>
    ) {}

    ngOnInit(): void {}
}
