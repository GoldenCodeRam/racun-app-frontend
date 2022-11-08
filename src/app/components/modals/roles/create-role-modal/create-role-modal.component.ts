import { Component, ViewChild } from "@angular/core";
import { ApiService } from "src/app/services/api/api.service";

@Component({
    selector: "app-create-role-modal",
    templateUrl: "./create-role-modal.component.html",
    styleUrls: ["./create-role-modal.component.css"],
})
export class CreateRoleModalComponent {

    public roleName: string = "";

    constructor(
        private apiService: ApiService,
    ) {}

    public createRole(): void {
        this.apiService.createRole(this.roleName);
    }

    public openModal() {
    }
}
