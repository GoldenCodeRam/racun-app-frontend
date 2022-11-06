import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Modal } from "bootstrap";

@Component({
    selector: "app-base-modal",
    templateUrl: "./base-modal.component.html",
    styleUrls: ["./base-modal.component.sass"],
})
export class BaseModalComponent {
    @ViewChild("modal")
    public modalRef!: ElementRef;

    private modal!: Modal;

    constructor() {}

    public showModal(): void {
        this.modal = Modal.getOrCreateInstance(this.modalRef.nativeElement);
        this.modal.show();
    }
}
