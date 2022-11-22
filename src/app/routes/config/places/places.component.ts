import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CreatePlaceModalComponent } from "src/app/components/modals/places/create-place-modal/create-place-modal.component";
import { PlacesApiService } from "src/app/services/api/places/places-api.service";

@Component({
    selector: "app-places",
    templateUrl: "./places.component.html",
    styleUrls: ["./places.component.sass"],
})
export class PlacesComponent {
    constructor(
        public placesApiService: PlacesApiService,

        private modalService: NgbModal
    ) {}

    public openCreatePlaceModal() {
        this.modalService.open(CreatePlaceModalComponent, {
            centered: true,
        });
    }
}
