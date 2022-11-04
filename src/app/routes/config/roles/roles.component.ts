import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { CreateRoleModalComponent } from "src/app/components/modals/roles/create-role-modal/create-role-modal.component";
import { EditRoleModalComponent } from "src/app/components/modals/roles/edit-role-modal/edit-role-modal.component";
import { Permission } from "src/app/models/permissions";
import { Role } from "src/app/models/role";
import { ApiService } from "src/app/services/api/api.service";

@Component({
    selector: "app-roles",
    templateUrl: "./roles.component.html",
    styleUrls: ["./roles.component.css"],
})
export class RolesComponent implements OnInit {
    @ViewChild(CreateRoleModalComponent)
    public createRoleModal!: CreateRoleModalComponent;

    @ViewChild(EditRoleModalComponent)
    public editRoleModal!: EditRoleModalComponent;

    public selectedRole!: Role;

    public roles: Role[] = [];
    public permissions: Permission[] = [];

    constructor(private apiService: ApiService) {}

    async ngOnInit() {
        this.roles = await this.apiService.getRoles();
    }

    public showCreateRoleModal() {
        this.createRoleModal.showModal();
    }

    public async getRolePermissions(role: Role) {
        this.selectedRole = role;
        this.permissions = await this.apiService.getRolePermissions(role);
        console.log(this.permissions);
    }
}
