import { Component, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Role } from "src/app/models/role";
import { User } from "src/app/models/user";
import { BaseModalComponent } from "../../base-modal/base-modal.component";

@Component({
    selector: "app-edit-user-modal",
    templateUrl: "./edit-user-modal.component.html",
    styleUrls: ["./edit-user-modal.component.sass"],
})
export class EditUserModalComponent {
    @ViewChild(BaseModalComponent)
    private modalComponent!: BaseModalComponent;

    public user = new FormGroup({
        firstName: new FormControl<string>("", [Validators.required]),
        lastName: new FormControl<string>("", [Validators.required]),
        email: new FormControl<string>("", [
            Validators.required,
            Validators.email,
        ]),
        role: new FormControl<Role | null>(null),
    });

    constructor() {}

    public openModal(user: User) {
        this.user.setValue({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
        });
        this.modalComponent.showModal();
    }
}
