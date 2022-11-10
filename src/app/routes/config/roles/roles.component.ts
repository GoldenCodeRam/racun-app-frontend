import { Component, Injectable, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CreateRoleModalComponent } from "src/app/components/modals/roles/create-role-modal/create-role-modal.component";
import { Role } from "src/app/models/role";
import { SearchResult } from "src/app/services/api/apiTypes";
import { SearchFunctionService } from "src/app/services/components/search/search-list/search-function.service";

@Injectable()
class SearchFunction extends SearchFunctionService<Role> {
    public async search(
        userSearch: string,
        currentSearchPage: number,
        searchLimit: number
    ): Promise<SearchResult<Role>> {
        return this.getRoles(userSearch, currentSearchPage, searchLimit);
    }
}

@Component({
    selector: "app-roles",
    templateUrl: "./roles.component.html",
    providers: [
        {
            provide: SearchFunctionService<Role>,
            useClass: SearchFunction,
        },
    ],
    styleUrls: ["./roles.component.css"],
})
export class RolesComponent implements OnInit {
    public readonly ROLE_SEARCH_LIMIT = 5;

    constructor(
        public searchFunctionService: SearchFunctionService<Role>,
        private modalService: NgbModal
    ) {}

    async ngOnInit() {
        // this.roles = await this.apiService.getRoles();
    }

    public showCreateRoleModal() {
        this.modalService.open(CreateRoleModalComponent, {
            centered: true,
        });
    }
}
