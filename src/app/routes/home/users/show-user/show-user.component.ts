import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EditUserModalComponent } from "src/app/components/modals/users/edit-user-modal/edit-user-modal.component";
import { User } from "src/app/models/user";
import { ApiService } from "src/app/services/api/api.service";

@Component({
    selector: "app-show-user",
    templateUrl: "./show-user.component.html",
    styleUrls: ["./show-user.component.sass"],
})
export class ShowUserComponent implements OnInit {
    @ViewChild(EditUserModalComponent)
    public editUserModal!: EditUserModalComponent;

    public user!: User;

    constructor(
        private route: ActivatedRoute,
        private apiService: ApiService
    ) {}

    async ngOnInit() {
        this.user = await this.apiService.getUser(
            this.route.snapshot.params["userId"]
        );
    }

    openEditUserModal() {
        this.editUserModal.openModal(this.user);
    }
}
