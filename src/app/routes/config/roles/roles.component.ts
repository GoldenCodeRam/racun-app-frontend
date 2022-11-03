import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { CreateRoleModalComponent } from "src/app/components/modals/create-role-modal/create-role-modal.component";

@Component({
    selector: "app-roles",
    templateUrl: "./roles.component.html",
    styleUrls: ["./roles.component.css"],
})
export class RolesComponent {
    @ViewChild(CreateRoleModalComponent)
    public createRoleModal!: CreateRoleModalComponent;

    public roles = [];

    constructor() {}

    public showCreateRoleModal() {
        console.log(this.createRoleModal.showModal());
    }
}
