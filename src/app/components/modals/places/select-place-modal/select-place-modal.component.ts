import { Component } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Place } from "src/app/models/place";
import { PlacesApiService } from "src/app/services/api/places/places-api.service";

@Component({
    selector: "app-select-place-modal",
    templateUrl: "./select-place-modal.component.html",
    styleUrls: ["./select-place-modal.component.sass"],
})
export class SelectPlaceModalComponent {
    constructor(
        public placesApiService: PlacesApiService,
        public activeModal: NgbActiveModal,
        public modalService: NgbModal
    ) {}

    public selectPlace(place: Place) {
        this.activeModal.close(place);
    }
}
