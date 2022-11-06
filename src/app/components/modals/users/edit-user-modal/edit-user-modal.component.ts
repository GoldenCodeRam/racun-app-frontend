import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
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
        firstName: new FormControl<string>(""),
        lastName: new FormControl<string>(""),
        email: new FormControl<string>(""),
    });

    constructor() {}

    public openModal(user: User) {
        this.user.setValue({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
        });
        console.log(this.user.controls);
        this.modalComponent.showModal();
    }
}
