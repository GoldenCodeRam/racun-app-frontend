import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { User } from "src/app/models/user";
import { SelectRoleModalComponent } from "../../roles/select-role-modal/select-role-modal.component";

@Component({
    selector: "app-edit-user-modal",
    templateUrl: "./edit-user-modal.component.html",
    styleUrls: ["./edit-user-modal.component.sass"],
})
export class EditUserModalComponent {
    public userForm = new FormGroup({
        firstName: new FormControl<string>(this.user.firstName, [
            Validators.required,
        ]),
        lastName: new FormControl<string>(this.user.lastName, [
            Validators.required,
        ]),
        email: new FormControl<string>(this.user.email, [
            Validators.required,
            Validators.email,
        ]),
        role: new FormControl<string>(this.user.role.name, [
            Validators.required,
        ]),
    });

    constructor(
        public modalService: NgbModal,
        public activeModal: NgbActiveModal,

        private user: User
    ) {}

    public openSelectRole() {
        this.modalService
            .open(SelectRoleModalComponent, {
                centered: true,
                size: "lg",
            })
            .result.then(
                (role: any) => {
                    if (role) {
                        this.user.role = role;
                    }
                },
                (reason: any) => {}
            );
    }
}
