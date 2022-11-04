import { HttpClient } from "@angular/common/http";
import { Component, ElementRef, ViewChild } from "@angular/core";
import { Modal } from "bootstrap";
import { ApiService } from "src/app/services/api/api.service";

@Component({
    selector: "app-create-role-modal",
    templateUrl: "./create-role-modal.component.html",
    styleUrls: ["./create-role-modal.component.css"],
})
export class CreateRoleModalComponent {
    @ViewChild("modal")
    public modalRef!: ElementRef;

    private modal!: Modal;

    public roleName: string = "";

    constructor(
        private apiService: ApiService,
    ) {}

    public showModal(): void {
        this.modal = Modal.getOrCreateInstance(this.modalRef.nativeElement);
        this.modal.show();
    }

    public createRole(): void {
        this.apiService.createRole(this.roleName);
    }
}
