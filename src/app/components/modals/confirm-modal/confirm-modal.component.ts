import { Component } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-confirm-modal",
    templateUrl: "./confirm-modal.component.html",
    styleUrls: ["./confirm-modal.component.sass"],
})
export class ConfirmModalComponent {
    constructor(
        public activeModal: NgbActiveModal,
        public modalService: NgbModal,

        public message: String
    ) {}

    public confirm() {
        this.activeModal.close(true);
    }
}
