import { Component, Injectable } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
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
    selector: "app-select-role-modal",
    templateUrl: "./select-role-modal.component.html",
    providers: [
        {
            provide: SearchFunctionService<Role>,
            useClass: SearchFunction,
        },
    ],
    styleUrls: ["./select-role-modal.component.sass"],
})
export class SelectRoleModalComponent {
    public readonly ROLE_SEARCH_LIMIT = 5;

    constructor(
        public searchFunctionService: SearchFunctionService<Role>,
        public activeModal: NgbActiveModal,
        public modalService: NgbModal
    ) {}

    public selectRole(role: Role) {
        this.activeModal.close(role);
    }

    public closeAll() {
        this.modalService.dismissAll();
    }
}
