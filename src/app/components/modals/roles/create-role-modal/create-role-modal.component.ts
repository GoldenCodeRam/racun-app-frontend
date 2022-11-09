import { Component, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ApiService } from "src/app/services/api/api.service";

@Component({
    selector: "app-create-role-modal",
    templateUrl: "./create-role-modal.component.html",
    styleUrls: ["./create-role-modal.component.css"],
})
export class CreateRoleModalComponent {
    public roleForm = new FormGroup({
        name: new FormControl<string>("", [Validators.required]),
    });

    constructor(
        public activeModal: NgbActiveModal,

        private apiService: ApiService
    ) {}

    public createRole(): void {
        if (this.roleForm.valid) {
            this.apiService.createRole(this.roleForm.value.name!);
        }
    }

    public openModal() {}
}
